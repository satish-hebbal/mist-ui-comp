import React, { useState } from 'react';
import Chip from './Chip';
import { User } from 'lucide-react';

const ChipExamples = ({ darkMode = false }) => {
  const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'];
  const radii = ['none', 'sm', 'md', 'lg', 'full'];
  const variants = ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'dot'];

  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry', 'Watermelon', 'Orange']);

  const handleClose = (fruitToRemove) => {
    setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
    if (fruits.length === 1) {
      setFruits(['Apple', 'Banana', 'Cherry', 'Watermelon', 'Orange']);
    }
  };

  const sectionClass = darkMode ? 'text-violet-200' : 'text-violet-900';
  const headerClass = darkMode ? 'text-violet-300' : 'text-violet-700';

  return (
    <div className={`space-y-6 p-4 ${sectionClass}`}>
      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>Colors</h2>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <Chip key={color} color={color} darkMode={darkMode}>{color}</Chip>
          ))}
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>Radius</h2>
        <div className="flex flex-wrap gap-2">
          {radii.map(radius => (
            <Chip key={radius} radius={radius} darkMode={darkMode}>{radius}</Chip>
          ))}
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>Variants</h2>
        <div className="flex flex-wrap gap-2">
          {variants.map(variant => (
            <Chip key={variant} color='secondary' variant={variant} darkMode={darkMode}>{variant}</Chip>
          ))}
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>With Close Button</h2>
        <div className="flex flex-wrap gap-2">
          <Chip onClose={() => console.log('Closed')} darkMode={darkMode}>Closable Chip</Chip>
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>With Avatar</h2>
        <div className="flex flex-wrap gap-2">
          <Chip avatar={<User size={16} />} darkMode={darkMode}>User Chip</Chip>
          <Chip avatar={<div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-xs">J</div>} darkMode={darkMode}>John Doe</Chip>
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-2 ${headerClass}`}>List of Chips</h2>
        <div className="flex flex-wrap gap-2">
          {fruits.map((fruit, index) => (
            <Chip 
              key={index} 
              onClose={() => handleClose(fruit)} 
              variant="flat"
              color={darkMode ? 'default' : 'primary'}
              darkMode={darkMode}
            >
              {fruit}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipExamples;