import React, { useRef } from 'react';
import * as mammoth from 'mammoth';

const UploadButtons: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.name.endsWith('.docx')) {
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.extractRawText({ arrayBuffer });
            const text = result.value;
            console.log(text);
        } else {
            alert('Please select a .docx file');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src="your-image-url.jpg" alt="Image" style={{ width: '300px', height: '200px' }} />
            <div>
                <input
                    type="file"
                    accept=".docx"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button
                    style={{
                        display: 'inline-block',
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyPress={handleKeyPress}
                >
                    Upload Info Documents
                </button>
                <button
                    style={{
                        display: 'inline-block',
                        margin: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyPress={handleKeyPress}
                >
                    Upload Document to FLL
                </button>
            </div>
        </div>
    );
};

export default UploadButtons;