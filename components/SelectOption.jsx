import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectOption = ({ 
  options, 
  value, 
  onChange, 
  placeholder, 
  darkMode = false  // New prop to activate dark mode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-96" ref={dropdownRef}>
      <div
        className={`
          flex items-center justify-between w-full font-giloryMed 
          px-4 py-2 rounded cursor-pointer border 
          ${darkMode ? 'bg-zinc-900 text-violet-400 border-zinc-700 hover:border-zinc-600' : 'bg-stone-50 text-violet-700 border-violet-300 hover:border-violet-400'}
        `}
        onClick={handleToggle}
      >
        <span className={value ? `${darkMode ? 'text-violet-400' : 'text-violet-700'}` : 'text-gray-400'}>
          {value || placeholder || 'Select an option'}
        </span>
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
                ${value === option ? `${darkMode ? 'bg-zinc-800' : 'bg-violet-100'}` : ''} 
                ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-violet-50'}
                 ${darkMode ? 'text-violet-300' : 'text-violet-950'}
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

export default SelectOption;
