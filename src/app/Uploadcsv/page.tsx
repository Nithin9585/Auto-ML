"use client"
import { useState, ChangeEvent } from 'react';
import { uploadCSVToFirebase } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import Message from '@/components/ui/message';



export default function UploadCSV() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "text/csv") {
            setFile(selectedFile);
            setMessage(null); 
        } else {
            setMessage("Please select a valid CSV file");
            setIsError(true);
            setFile(null); 
        }
    };
    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file first!");
            setIsError(true);
            return;
        }
        try {
            await uploadCSVToFirebase(file);
            setMessage("File uploaded successfully!");
            setIsError(false);
        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("An error occurred while uploading the file.");
            setIsError(true);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <div className=" p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="mb-6 text-3xl font-semibold  text-center">Upload CSV File</h1>
    
                <Message message={message} isError={isError} />
    
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="mb-4 p-3 border border-gray-600 rounded w-full   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Choose a file"
                />
                <Button 
                    onClick={handleUpload} 
                    className='w-full'
                >
                    Upload
                </Button>
            </div>
        </div>
    );
    
}