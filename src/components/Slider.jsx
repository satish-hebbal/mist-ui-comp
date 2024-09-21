import React from 'react';

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  size = 'md',
  color = 'primary',
  thickness = 'medium',
  label,
  showValue = true,
  formatValue,
  darkMode = false,
  className = '',
  startLabel = '',
  endLabel = '',
  ...props
}) => {
  const getSize = (size) => {
    const sizes = {
      xsm: 'w-32',
      sm: 'w-48',
      md: 'w-64',
      lg: 'w-80'
    };
    return sizes[size] || sizes.md;
  };

  const getColor = (color) => {
    const colors = {
      primary: 'bg-blue-600',
      secondary: 'bg-purple-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-500',
      danger: 'bg-red-600'
    };
    return colors[color] || colors.primary;
  };

  const getThickness = (thickness) => {
    const thicknesses = {
      thin: 'h-1',
      medium: 'h-2',
      thick: 'h-3'
    };
    return thicknesses[thickness] || thicknesses.medium;
  };

  const handleChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  const displayValue = formatValue ? formatValue(value) : value.toFixed(2);

  return (
    <div className={`flex flex-col ${className}`} {...props}>
      <div className="flex justify-between items-center mb-2">
        {label && (
          <span className={`text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-700'}`}>
            {label}
          </span>
        )}
        {showValue && (
          <span className={`text-sm font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
            {displayValue}
          </span>
        )}
      </div>
      <div className={`relative ${getSize(size)} ${getThickness(thickness)}`}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={`w-full ${getThickness(thickness)} appearance-none cursor-pointer
                     ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full outline-none`}
          style={{
            WebkitAppearance: 'none',
          }}
        />
        <div className="flex justify-between mt-1">
          <span className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            {startLabel}
          </span>
          <span className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            {endLabel}
          </span>
        </div>
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: ${thickness === 'thin' ? '12px' : thickness === 'medium' ? '16px' : '20px'};
            height: ${thickness === 'thin' ? '12px' : thickness === 'medium' ? '16px' : '20px'};
            border-radius: 50%;
            background: ${getColor(color).split('-')[1]};
            cursor: pointer;
            transition: all 0.15s ease-in-out;
          }
          input[type='range']::-webkit-slider-thumb:hover {
            box-shadow: 0 0 0 8px ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          }
          input[type='range']::-moz-range-thumb {
            width: ${thickness === 'thin' ? '12px' : thickness === 'medium' ? '16px' : '20px'};
            height: ${thickness === 'thin' ? '12px' : thickness === 'medium' ? '16px' : '20px'};
            border: 0;
            border-radius: 50%;
            background: ${getColor(color).split('-')[1]};
            cursor: pointer;
            transition: all 0.15s ease-in-out;
          }
          input[type='range']::-moz-range-thumb:hover {
            box-shadow: 0 0 0 8px ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          }
          input[type='range']:focus {
            outline: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Slider;