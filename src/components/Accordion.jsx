import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onToggle, darkMode }) => {
  const contentRef = useRef(null);

  return (
    <div className={`border-b ${darkMode ? 'border-zinc-700' : 'border-violet-200'}`}>
      <button
        className={`
          flex items-center justify-between w-full p-4 text-left
          ${darkMode ? 'text-violet-300 hover:bg-zinc-800' : 'text-violet-700 hover:bg-violet-50'}
        `}
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } ${darkMode ? 'text-violet-400' : 'text-violet-500'}`}
        />
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0' }}
      >
        <div className={`p-4 ${darkMode ? 'text-violet-200' : 'text-violet-900'}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, darkMode = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className={`w-full rounded-lg overflow-hidden ${
      darkMode ? 'bg-zinc-900 border border-zinc-700' : 'bg-white border border-violet-200'
    }`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default Accordion;