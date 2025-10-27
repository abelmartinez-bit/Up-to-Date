import React from 'react';

const Header = ({ lastUpdated, onRefresh, isRefreshing }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🌐</div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Global News Aggregator
              </h1>
              <p className="text-blue-100 text-sm mt-1">
                Real-time news from around the world
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {lastUpdated && (
              <div className="hidden sm:block text-sm text-blue-100">
                Last updated: {lastUpdated}
              </div>
            )}
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className={`
                flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 
                rounded-lg font-medium text-sm hover:bg-blue-50 
                transition-all duration-200 shadow-md
                ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <svg
                className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="hidden sm:inline">
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
