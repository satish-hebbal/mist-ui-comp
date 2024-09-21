import React from 'react';

const Divider = ({ orientation = 'horizontal', className = '', darkMode = false }) => {
  const baseClasses = darkMode ? 'bg-gray-700' : 'bg-gray-200';
  const orientationClasses = orientation === 'vertical'
    ? 'h-full w-px mx-1'
    : 'h-px w-full my-1';

  return (
    <div
      className={`${baseClasses} ${orientationClasses} ${className}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export default Divider; 