import React, { useState, useEffect } from 'react';

const Progress = ({
  size = 'md',
  color = 'primary',
  value = 0,
  maxValue = 100,
  label,
  showValueLabel = false,
  formatOptions,
  darkMode = false,
  isLoading = false,
  className = '',
  thickness = 'medium',
  ...props
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let timer = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start === end) clearInterval(timer);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [value, isLoading]);

  const getSize = (size) => {
    const sizes = {
      xsm: 'h-2 w-32',
      sm: 'h-3 w-48',
      md: 'h-4 w-64',
      lg: 'h-5 w-80'
    };
    return sizes[size] || sizes.md;
  };

  const getColor = (color) => {
    const colors = {
      primary: darkMode ? 'bg-blue-400' : 'bg-blue-600',
      secondary: darkMode ? 'bg-purple-400' : 'bg-purple-600',
      success: darkMode ? 'bg-green-400' : 'bg-green-600',
      warning: darkMode ? 'bg-yellow-400' : 'bg-yellow-500',
      danger: darkMode ? 'bg-red-400' : 'bg-red-600'
    };
    return colors[color] || colors.primary;
  };

  const formatValue = (value) => {
    if (formatOptions) {
      return new Intl.NumberFormat('en-US', formatOptions).format(value);
    }
    return `${Math.round(value)}%`;
  };

  const getThickness = (thickness) => {
    const thicknesses = {
      thin: 'h-1',
      medium: 'h-2',
      thick: 'h-3'
    };
    return thicknesses[thickness] || thicknesses.medium;
  };

  return (
    <div className={`flex flex-col ${className}`} {...props}>
      <style jsx>{`
        @keyframes indeterminateProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .indeterminate-progress {
          animation: indeterminateProgress 1.5s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395);
        }
      `}</style>
      <div className={`relative ${getSize(size)} ${getThickness(thickness)} ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
        <div
          className={`absolute top-0 left-0 h-full ${getColor(color)} rounded-full transition-all duration-500 ease-out ${isLoading ? 'w-full indeterminate-progress' : ''}`}
          style={{ width: isLoading ? '100%' : `${(progress / maxValue) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center mt-1">
        {label && (
          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {label}
          </span>
        )}
        {showValueLabel && !isLoading && (
          <span className={`text-xs font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {formatValue(progress)}
          </span>
        )}
      </div>
    </div>
  );
};

export default Progress;