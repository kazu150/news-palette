'use client';

import React from 'react';

type TagFilterProps = {
  onFilterChange: (tag: string) => void;
};

const tags = [
  'all',
  'React',
  'Vue',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'CSS',
];

export const TagFilter: React.FC<TagFilterProps> = ({ onFilterChange }) => {
  return (
    <div className="flex gap-2 mb-4 overflow-auto">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
