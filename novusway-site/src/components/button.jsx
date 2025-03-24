import React from 'react';

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-white text-[#1266B3] hover:bg-gray-200 rounded-md transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}