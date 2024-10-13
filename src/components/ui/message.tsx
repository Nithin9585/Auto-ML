
import React from 'react';

interface MessageProps {
    message: string | null; 
    isError: boolean; 
}

const Message: React.FC<MessageProps> = ({ message, isError }) => {
    if (!message) return null;

    return (
        <div className={`mb-4 p-2 rounded ${isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            {message}
        </div>
    );
};

export default Message;
