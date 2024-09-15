import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MultiSelectOption = ({ options, value, onChange, placeholder, darkMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  const handleBlur = (e) => {
    // Close dropdown when it loses focus
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative w-96"
      tabIndex={0}
      onBlur={handleBlur}
    >
      <div
        className={`
          flex items-center justify-between w-full font-montserrat 
          px-4 py-2 rounded cursor-pointer border
          ${darkMode ? 'bg-zinc-900 text-violet-400 border-zinc-700 hover:border-zinc-600' : 'bg-stone-50 text-black border-violet-300 hover:border-violet-400'}
        `}
        onClick={handleToggle}
      >
        <div className="flex flex-wrap gap-1">
          {value.length > 0 ? (
            value.map((item) => (
              <span key={item} className={`${darkMode ? 'bg-zinc-800 text-violet-400' : 'bg-violet-100 text-violet-800'} px-2 py-1 rounded-full text-sm`}>
                {item}
              </span>
            ))
          ) : (
            <span className={`${darkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
              {placeholder || 'Select options'}
            </span>
          )}
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${darkMode ? 'text-violet-400' : 'text-violet-300'} ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className={`absolute z-10 w-full mt-1 border rounded ${darkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-violet-300'}`}>
          {options.map((option) => (
            <div
              key={option}
              className={`
                px-4 py-2 cursor-pointer 
                ${value.includes(option) ? `${darkMode ? 'bg-zinc-800' : 'bg-violet-100'}` : ''} 
                ${darkMode ? 'hover:bg-zinc-800 text-violet-300' : 'hover:bg-violet-50 text-black'}
              `}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectOption;
