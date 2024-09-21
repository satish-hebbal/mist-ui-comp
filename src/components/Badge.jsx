import React from 'react';

const Badge = ({ 
  content, 
  size = 'md', 
  color = 'primary', 
  children 
}) => {
  const sizeClasses = {
    sm: 'text-xs px-1',
    md: 'text-sm px-1.5',
    lg: 'text-base px-2',
  };

  const colorClasses = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
  };

  const badgeClasses = `
    absolute -top-1 -right-1 
    rounded-full 
    flex items-center justify-center 
    font-bold
    ${sizeClasses[size]}
    ${colorClasses[color]}
  `;

  return (
    <div className="relative inline-flex">
      {children}
      {content && (
        <span className={badgeClasses}>
          {content}
        </span>
      )}
    </div>
  );
};

export default Badge;