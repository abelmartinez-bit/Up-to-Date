import React from 'react';
import { NEWS_CATEGORIES } from '../config/constants';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3 overflow-x-auto scrollbar-hide">
          {NEWS_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium
                whitespace-nowrap transition-all duration-200 flex-shrink-0
                ${
                  activeCategory.id === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
