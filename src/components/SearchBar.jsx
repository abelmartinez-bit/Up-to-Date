import React, { useState } from 'react';
import { sanitizeQuery } from '../utils/helpers';

const SearchBar = ({ onSearch, onDateChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const sanitized = sanitizeQuery(searchQuery);
    if (sanitized.trim()) {
      onSearch(sanitized);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setDateFilter('');
    onSearch('');
    onDateChange('');
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setDateFilter(date);
    onDateChange(date);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for news, topics, or keywords..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-sm placeholder-gray-400"
            />
          </div>

          {/* Date Filter */}
          <div className="relative">
            <input
              type="date"
              value={dateFilter}
              onChange={handleDateChange}
              max={new Date().toISOString().split('T')[0]}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-sm"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                     transition-colors duration-200 font-medium text-sm whitespace-nowrap"
          >
            Search
          </button>

          {/* Clear Button */}
          {(searchQuery || dateFilter) && (
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300
                       transition-colors duration-200 font-medium text-sm whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
