import React from 'react';

const CheckBox = ({ label, checked, onChange, darkMode }) => {
  return (
    <label className="flex items-center font-giloryMed cursor-pointer">
      <div className={`w-5 h-5 border-2 rounded-md mr-2 flex items-center justify-center ${
        checked 
          ? darkMode 
            ? 'bg-violet-500 border-violet-500' 
            : 'bg-violet-600 border-violet-600' 
          : darkMode 
            ? 'border-zinc-600' 
            : 'border-violet-400'
      }`}>
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className={`text-sm ${darkMode ? 'text-violet-400' : 'text-gray-700'}`}>{label}</span>
    </label>
  );
};

export default CheckBox;
