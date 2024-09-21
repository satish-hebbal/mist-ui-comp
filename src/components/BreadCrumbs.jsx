import React, { useState } from 'react';

const BreadcrumbItem = ({ children, isLast, onClick, darkMode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Reset after animation duration
    if (onClick) onClick();
  };

  const textColor = darkMode
    ? isLast ? 'text-white' : 'text-gray-400 hover:text-gray-200'
    : isLast ? 'text-gray-900' : 'text-gray-600 hover:text-gray-800';

  return (
    <li 
      className={`
        inline-flex items-center cursor-pointer
        transition-all duration-200 ease-in
        ${textColor}
        ${isAnimating ? 'scale-105' : 'scale-100'}
      `}
      onClick={handleClick}
    >
      {children}
      {!isLast && (
        <span className={`mx-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          &gt;
        </span>
      )}
    </li>
  );
};

const Breadcrumbs = ({ children, variant = "solid", darkMode = false }) => {
  const variantClasses = {
    solid: darkMode ? "bg-zinc-900" : "bg-gray-100",
    bordered: `bg-transparent ${darkMode ? 'border-gray-700' : 'border-gray-300'} border`,
    light: "bg-transparent",
  };

  const baseClasses = "rounded-lg px-4 py-2";

  return (
    <nav className={`${baseClasses} ${variantClasses[variant]}`}>
      <ol className="flex flex-wrap items-center space-x-1 md:space-x-3">
        {React.Children.map(children, (child, index) => 
          React.cloneElement(child, { 
            isLast: index === React.Children.count(children) - 1,
            onClick: () => console.log(`Clicked: ${child.props.children}`), // Example onClick handler
            darkMode: darkMode,
          })
        )}
      </ol>
    </nav>
  );
};

export { Breadcrumbs, BreadcrumbItem };