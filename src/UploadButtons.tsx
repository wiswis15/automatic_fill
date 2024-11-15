import React from 'react';

const UploadButtons: React.FC = () => {
    const uploadInfoDocuments = () => {
        // Add your upload info documents logic here
        alert('Upload Info Documents button clicked');
    };

    const uploadDocumentToFLL = () => {
        // Add your upload document to FLL logic here
        alert('Upload Document to FLL button clicked');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src="your-image-url.jpg" alt="Image" style={{ width: '300px', height: '200px' }} />
            <div>
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
                    onClick={uploadInfoDocuments}
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
                    onClick={uploadDocumentToFLL}
                >
                    Upload Document to FLL
                </button>
            </div>
        </div>
    );
};

export default UploadButtons;