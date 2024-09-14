import React from 'react';

const SubmitButton = ({ onClick, label = "Submit", darkMode = false }) => {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        } else {
            console.log("Button clicked, but no onClick handler provided.");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`px-6 py-2 max-w-96 font-semibold rounded-sm transition-all
            duration-300 ease-in-out bg-gradient-to-r
            ${darkMode 
              ? 'from-violet-500 to-purple-700 text-violet-200 hover:from-violet-600 hover:to-purple-800 focus:ring-violet-600' 
              : 'from-violet-400 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 focus:ring-violet-300'}
            hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-75 active:from-violet-700 active:to-purple-800`}
        >
            {label}
        </button>
    );
};

export default SubmitButton;
