import React, { useState, useEffect } from 'react';

const CircularProgress = ({
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
      xsm: 'w-8 h-8',
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32'
    };
    return sizes[size] || sizes.md;
  };

  const getColor = (color) => {
    const colors = {
      primary: darkMode ? 'text-blue-400' : 'text-blue-600',
      secondary: darkMode ? 'text-purple-400' : 'text-purple-600',
      success: darkMode ? 'text-green-400' : 'text-green-600',
      warning: darkMode ? 'text-yellow-400' : 'text-yellow-500',
      danger: darkMode ? 'text-red-400' : 'text-red-600'
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
      thin: '5',
      medium: '8',
      thick: '12'
    };
    return thicknesses[thickness] || thicknesses.medium;
  };

  const strokeWidth = getThickness(thickness);
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isLoading ? 0 : circumference - (progress / maxValue) * circumference;

  return (
    <div className={`flex flex-col items-center ${className}`} {...props}>
      <style jsx>{`
        @keyframes variableSpeedSpin {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(180deg); }
          40% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }
        .variable-speed-spin {
          animation: variableSpeedSpin 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }
      `}</style>
      <div className={`relative ${getSize(size)}`}>
        <svg className={`w-full h-full ${isLoading ? 'variable-speed-spin' : '-rotate-90'}`} viewBox="0 0 100 100">
          <circle
            className={`${darkMode ? 'text-gray-700' : 'text-gray-200'} stroke-current`}
            strokeWidth={strokeWidth}
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
          />
          <circle
            className={`${getColor(color)} stroke-current`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            style={{
              strokeDasharray: isLoading ? `${circumference * 0.25} ${circumference * 0.75}` : circumference,
              strokeDashoffset: strokeDashoffset,
              transition: isLoading ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
            }}
          />
        </svg>
        {showValueLabel && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-semibold ${
              size === 'xsm' ? 'text-xs' :
              size === 'sm' ? 'text-sm' :
              size === 'md' ? 'text-base' :
              'text-lg'
            } ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              {formatValue(progress)}
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className={`mt-1 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default CircularProgress;