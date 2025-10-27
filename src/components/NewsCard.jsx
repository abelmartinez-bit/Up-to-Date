import React from 'react';
import { formatTimeAgo, truncateText, getFallbackImage } from '../utils/helpers';

const NewsCard = ({ article, onClick }) => {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    author,
  } = article;

  const handleImageError = (e) => {
    e.target.src = getFallbackImage();
  };

  const handleClick = () => {
    if (onClick) {
      onClick(article);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="news-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={urlToImage || getFallbackImage()}
          alt={title}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
        />
        {source?.name && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {source.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {truncateText(description, 120)}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            {author && (
              <span className="font-medium truncate max-w-[150px]">
                {author}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="whitespace-nowrap">
              {formatTimeAgo(publishedAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
