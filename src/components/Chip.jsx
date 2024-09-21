import React from 'react';
import { X } from 'lucide-react';

const Chip = ({
  children,
  color = 'default',
  radius = 'full',
  variant = 'solid',
  onClose,
  darkMode = false,
  avatar,
  className = '',
  ...props
}) => {
  const getColorClasses = (colorName, variant, isDark) => {
    const colors = {
      default: {
        solid: isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800',
        bordered: isDark ? 'border-gray-600 text-gray-200' : 'border-gray-400 text-gray-800',
        light: isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800',
        flat: isDark ? 'bg-gray-800/20 text-gray-200' : 'bg-gray-200/50 text-gray-800',
        faded: isDark ? 'bg-gray-800/20 text-gray-200' : 'bg-gray-200/50 text-gray-800',
        shadow: isDark ? 'bg-gray-700 text-gray-200 shadow-gray-900/50' : 'bg-gray-200 text-gray-800 shadow-gray-300/50',
        dot: isDark ? 'text-gray-200' : 'text-gray-800',
      },
      primary: {
        solid: 'bg-blue-600 text-white',
        bordered: 'border-blue-600 text-blue-600',
        light: 'bg-blue-100 text-blue-600',
        flat: 'bg-blue-500/20 text-blue-500',
        faded: 'bg-blue-100/20 text-blue-500',
        shadow: 'bg-blue-500 text-white shadow-blue-500/50',
        dot: 'text-blue-500',
      },
      secondary: {
        solid: 'bg-purple-600 text-white',
        bordered: 'border-purple-600 text-purple-600',
        light: 'bg-purple-100 text-purple-600',
        flat: 'bg-purple-500/20 text-purple-500',
        faded: 'bg-purple-100/20 text-purple-500',
        shadow: 'bg-purple-500 text-white shadow-purple-500/50',
        dot: 'text-purple-500',
      },
      success: {
        solid: 'bg-green-600 text-white',
        bordered: 'border-green-600 text-green-600',
        light: 'bg-green-100 text-green-600',
        flat: 'bg-green-500/20 text-green-500',
        faded: 'bg-green-100/20 text-green-500',
        shadow: 'bg-green-500 text-white shadow-green-500/50',
        dot: 'text-green-500',
      },
      warning: {
        solid: 'bg-yellow-500 text-black',
        bordered: 'border-yellow-500 text-yellow-500',
        light: 'bg-yellow-100 text-yellow-600',
        flat: 'bg-yellow-500/20 text-yellow-500',
        faded: 'bg-yellow-100/20 text-yellow-500',
        shadow: 'bg-yellow-500 text-black shadow-yellow-500/50',
        dot: 'text-yellow-500',
      },
      danger: {
        solid: 'bg-red-600 text-white',
        bordered: 'border-red-600 text-red-600',
        light: 'bg-red-100 text-red-600',
        flat: 'bg-red-500/20 text-red-500',
        faded: 'bg-red-100/20 text-red-500',
        shadow: 'bg-red-500 text-white shadow-red-500/50',
        dot: 'text-red-500',
      },
    };

    return colors[colorName][variant];
  };

  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const baseClasses = `
    inline-flex items-center px-3 py-1 text-sm font-medium
    ${radiusClasses[radius]}
  `;

  const variantSpecificClasses = {
    bordered: 'bg-transparent border',
    shadow: 'shadow-lg',
    dot: 'bg-transparent before:content-[\'\'] before:block before:w-2 before:h-2 before:rounded-full before:mr-2 before:bg-current',
  };

  const colorClasses = getColorClasses(color, variant, darkMode);

  return (
    <div
      className={`
        ${baseClasses}
        ${variantSpecificClasses[variant] || ''}
        ${colorClasses}
        ${className}
      `}
      {...props}
    >
      {avatar && <span className="mr-2">{avatar}</span>}
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className={`ml-2 p-0.5 rounded-full focus:outline-none ${
            darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default Chip;