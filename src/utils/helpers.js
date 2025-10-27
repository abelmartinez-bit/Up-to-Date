import { formatDistanceToNow } from 'date-fns';

/**
 * Format a date string to relative time (e.g., "5 minutes ago")
 */
export const formatTimeAgo = (dateString) => {
  if (!dateString) return 'Just now';
  
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    return 'Unknown time';
  }
};

/**
 * Truncate text to a specific length
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Get a fallback image URL
 */
export const getFallbackImage = () => {
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80';
};

/**
 * Check if online
 */
export const isOnline = () => {
  return navigator.onLine;
};

/**
 * Sanitize search query
 */
export const sanitizeQuery = (query) => {
  if (!query) return '';
  return query.trim().replace(/[^\w\s-]/gi, '');
};
