import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const FileUpload = ({ 
  maxSize = 5 * 1024 * 1024, 
  acceptedFileTypes = '*', 
  onFileSelect, 
  onUpload,
  buttonText = 'Upload File',
  dragDropText = 'Click to upload or drag and drop',
  className = '',
  darkMode = false // Added darkMode prop
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        setError(`File size exceeds ${maxSize / (1024 * 1024)}MB limit.`);
        setFile(null);
      } else {
        setFile(selectedFile);
        setError('');
        if (onFileSelect) onFileSelect(selectedFile);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      if (onUpload) onUpload(file);
      setFile(null);
    } else {
      setError('Please select a file to upload.');
    }
  };

  return (
    <div className={`w-96 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full">
          <label htmlFor="file-upload" 
            className={`flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-sm cursor-pointer 
            ${darkMode ? 'border-violet-600 bg-zinc-900 hover:bg-zinc-800' : 'border-violet-300 bg-violet-50 hover:bg-violet-100'}`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className={`w-8 h-8 mb-4 ${darkMode ? 'text-violet-400' : 'text-violet-500'}`} />
              <p className={`mb-2 text-sm ${darkMode ? 'text-violet-400' : 'text-violet-500'}`}>
                <span className="font-montserrat">{dragDropText}</span>
              </p>
              <p className={`text-xs font-montserrat ${darkMode ? 'text-violet-400' : 'text-violet-500'}`}>
                Max file size: {maxSize / (1024 * 1024)}MB
              </p>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={acceptedFileTypes}
            />
          </label>
        </div>
        {file && (
          <p className={`text-sm font-montserrat ${darkMode ? 'text-violet-400' : 'text-violet-500'}`}>
            Selected file: {file.name}
          </p>
        )}
        {error && (
          <div className="bg-red-100 border font-montserrat border-red-400 text-red-700 px-4 py-3 rounded-sm relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <button 
          type="submit" 
          className={`px-4 py-2 w-full text-white font-montserrat rounded-sm 
          ${darkMode ? 'bg-violet-600 hover:bg-violet-700 focus:ring-violet-500' : 'bg-violet-500 hover:bg-violet-600 focus:ring-violet-500'} 
          focus:outline-none focus:ring-2 focus:ring-opacity-50`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
