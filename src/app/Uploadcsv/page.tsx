"use client";
import { useState, useEffect, ChangeEvent } from 'react';
import { uploadCSVToFirebase, listUserFilesFromFirebase } from '@/lib/firebase'; // Include the new helper function
import { Button } from '@/components/ui/button';
import Message from '@/components/ui/message';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function UploadCSV() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [user, loading, authError] = useAuthState(auth);
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string }[]>([]); // State to hold uploaded files

    useEffect(() => {
        if (authError) {
            setMessage("Authentication error, please try logging in again.");
            setIsError(true);
        }
    }, [authError]);

    useEffect(() => {
        const fetchUserFiles = async () => {
            if (user) {
                try {
                    const files = await listUserFilesFromFirebase(user.uid);
                    setUploadedFiles(files);
                } catch (error) {
                    console.error("Error fetching user files:", error);
                }
            }
        };

        fetchUserFiles();
    }, [user]);

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
        if (!user) {
            setMessage("Please log in to upload files.");
            setIsError(true);
            return;
        }

        if (!file) {
            setMessage("Please select a file first!");
            setIsError(true);
            return;
        }

        try {
            await uploadCSVToFirebase(file, user.uid);
            setMessage("File uploaded successfully!");
            setIsError(false);
            const files = await listUserFilesFromFirebase(user.uid);
            setUploadedFiles(files);
        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("An error occurred while uploading the file.");
            setIsError(true);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen p-4">
                <div className="p-6 rounded-lg w-full max-w-md">
                    <h1 className="mb-6 text-3xl font-semibold text-center">Upload CSV File</h1>
                    
                    <Message message={message} isError={isError} />

                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        className="mb-4 p-3 border border-gray-600 rounded w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        placeholder="Choose a file"
                    />
                    <Button 
                        onClick={handleUpload} 
                        className='w-full'
                        disabled={loading || !user}
                    >
                        {loading ? "Checking authentication..." : "Upload"}
                    </Button>
                </div>
                <div className='flex w-full flex-1 border border-purple-600'>
                <div className='flex flex-col items-center w-full p-4'>
                    <h2 className='text-2xl mb-4'>Uploaded Files</h2>
                    {uploadedFiles.length > 0 ? (
                        <ul className='list-disc'>
                            {uploadedFiles.map(file => (
                                <li key={file.name}>
                                  <a href={file.url} target="_blank" rel="noopener noreferrer" className='text-gray-800 no-underline'>
    {file.name}
</a>

                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='text-gray-600'>No files uploaded yet.</p>
                    )}
                </div>
            </div>
            </div>
            
        </>
    );
}
