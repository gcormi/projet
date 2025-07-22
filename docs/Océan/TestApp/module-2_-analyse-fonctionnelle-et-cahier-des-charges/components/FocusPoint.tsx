
import React, { useState } from 'react';
import { LightBulbIcon, ChevronDownIcon, ChevronUpIcon } from './icons/Icons'; // Assuming you have these icons

interface FocusPointProps {
  title: string;
  content: string;
}

export const FocusPoint: React.FC<FocusPointProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-yellow-50 border-l-4 border-accent-yellow text-yellow-800 p-4 rounded-md shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`focus-content-${title.replace(/\s+/g, '-')}`}
      >
        <span className="flex items-center">
          <LightBulbIcon className="w-6 h-6 mr-2 text-yellow-500" />
          {title}
        </span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div id={`focus-content-${title.replace(/\s+/g, '-')}`} className="mt-3 text-yellow-700 prose prose-sm max-w-none">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
