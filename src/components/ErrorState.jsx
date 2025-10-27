import React from 'react';

const ErrorState = ({ error, onRetry }) => {
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'NO_INTERNET':
        return {
          title: 'No Internet Connection',
          message: 'Please check your network connection and try again.',
          icon: '📡',
        };
      case 'INVALID_API_KEY':
        return {
          title: 'Configuration Error',
          message: 'Invalid API key. Please check your .env file configuration.',
          icon: '🔑',
        };
      case 'RATE_LIMIT':
        return {
          title: 'Too Many Requests',
          message: 'Please wait a moment before trying again.',
          icon: '⏱️',
        };
      case 'API_ERROR':
      default:
        return {
          title: 'Something Went Wrong',
          message: 'Unable to fetch news. Please try again later.',
          icon: '⚠️',
        };
    }
  };

  const errorInfo = getErrorMessage(error?.message);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="text-6xl mb-4">{errorInfo.icon}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {errorInfo.title}
        </h2>
        <p className="text-gray-600 mb-6">{errorInfo.message}</p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                   transition-colors duration-200 font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const EmptyState = ({ searchTerm }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="text-6xl mb-4">📰</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No Articles Found
        </h2>
        <p className="text-gray-600">
          {searchTerm
            ? `No results found for "${searchTerm}". Try a different search term.`
            : 'No articles available at the moment.'}
        </p>
      </div>
    </div>
  );
};

export { ErrorState, EmptyState };
export default ErrorState;
