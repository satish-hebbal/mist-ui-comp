import React, { useState, useEffect } from 'react';

const ToggleSwitch = ({ isOn: externalIsOn, onChange, id = 'switch', darkMode }) => {
  const [internalIsOn, setInternalIsOn] = useState(externalIsOn || false);

  useEffect(() => {
    if (externalIsOn !== undefined) {
      setInternalIsOn(externalIsOn);
    }
  }, [externalIsOn]);

  const handleToggle = () => {
    const newState = !internalIsOn;
    setInternalIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  const isOn = externalIsOn !== undefined ? externalIsOn : internalIsOn;

  return (
    <div className='p-6'>
      <div 
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer
          transition-colors duration-300 ease-in-out
          ${isOn ? (darkMode ? 'bg-violet-500' : 'bg-violet-600') : (darkMode ? 'bg-zinc-700' : 'bg-violet-200')}
          ${isOn ? (darkMode ? 'ring-2 ring-violet-400' : 'ring-2 ring-violet-300') : (darkMode ? 'ring-2 ring-zinc-500' : 'ring-2 ring-violet-100')}`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out 
            ${isOn ? 'translate-x-7' : ''}`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
