  import React, { useState } from 'react';

  function TextBox({
    darkMode = false,
    type = 'text', 
    placeholder = 'Text', 
    value = '', 
    onChange = () => {}, 
    name = 'TextArea'
  }) {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
      setInputValue(e.target.value);
      onChange(e);  // Call the passed onChange function if any
    };

    return (
      <div>
        <div className="flex flex-col space-y-2">
          <input
            type={type}
            id={type}
            name={name}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            className={`
               ${darkMode ? 'dark-mode-input' : 'light-mode-input'}
              px-3 py-2 font-montserrat border min-w-80 max-w-96 rounded-sm shadow-sm 
              ${darkMode ? 'bg-zinc-900 text-violet-400 placeholder-gray-500' : 'bg-stone-50 text-violet-700 placeholder-gray-400'}
              ${darkMode ? 'border-zinc-500' : 'border-gray-300'}
              ${darkMode ? 'focus:bg-zinc-800 focus:border-violet-600' : 'focus:bg-violet-50 focus:border-violet-400'}
              focus:outline-none 
            `}
          />
        </div>
      </div>
    );
  }

  export default TextBox;