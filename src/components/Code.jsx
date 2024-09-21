import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Code = ({ children, color = 'default', darkMode = false }) => {
  const [copied, setCopied] = useState(false);

  const baseClasses = "font-mono text-sm p-2 rounded relative";
  
  const colorClasses = {
    default: darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800",
    blue: darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800",
    green: darkMode ? "bg-green-900 text-green-200" : "bg-green-100 text-green-800",
    purple: darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800",
    yellow: darkMode ? "bg-yellow-900 text-yellow-200" : "bg-yellow-100 text-yellow-800",
    pink: darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-800",
  };

  const iconColor = darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800";

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <pre className={`${baseClasses} ${colorClasses[color]} pr-10`}>
      <code>{children}</code>
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 p-1 rounded-md transition-colors ${iconColor}`}
        aria-label="Copy code"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </pre>
  );
};

export default Code;