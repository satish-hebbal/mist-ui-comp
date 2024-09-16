import React from 'react';

const RadioButton = ({ label, checked, onChange, name, darkMode = false }) => {
  return (
    <label className="flex items-center font-montserrat cursor-pointer">
      <div className={`w-5 h-5 border-2 rounded-full mr-2 flex items-center justify-center 
        ${checked 
          ? darkMode 
            ? 'border-violet-500' 
            : 'border-violet-600' 
          : darkMode 
            ? 'border-zinc-600' 
            : 'border-violet-400'}`}
      >
        {checked && (
          <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-violet-500' : 'bg-violet-600'}`}></div>
        )}
      </div>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className={`text-sm ${darkMode ? 'text-violet-400' : 'text-gray-700'}`}>{label}</span>
    </label>
  );
};

export default RadioButton;
