import axios from 'axios';
import { API_CONFIG } from '../config/constants';

// Use CORS proxy to bypass News API browser restrictions
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const api = axios.create({
  timeout: 10000,
});

/**
 * Build full URL with CORS proxy
 */
const buildProxyUrl = (endpoint, params) => {
  const url = new URL(endpoint, API_CONFIG.BASE_URL);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return CORS_PROXY + encodeURIComponent(url.toString());
};

/**
 * Fetch news articles by category
 */
export const fetchNewsByCategory = async (categoryQuery, page = 1) => {
  try {
    const url = buildProxyUrl('/everything', {
      q: categoryQuery,
      apiKey: API_CONFIG.API_KEY,
      pageSize: API_CONFIG.PAGE_SIZE,
      page: page,
      sortBy: 'publishedAt',
      language: 'en',
    });
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Search news articles
 */
export const searchNews = async (query, fromDate = null) => {
  try {
    const params = {
      q: query,
      apiKey: API_CONFIG.API_KEY,
      pageSize: API_CONFIG.PAGE_SIZE,
      sortBy: 'publishedAt',
      language: 'en',
    };

    if (fromDate) {
      params.from = fromDate;
    }

    const url = buildProxyUrl('/everything', params);
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Fetch top headlines
 */
export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const url = buildProxyUrl('/top-headlines', {
      country: country,
      apiKey: API_CONFIG.API_KEY,
      pageSize: API_CONFIG.PAGE_SIZE,
    });
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Handle API errors
 */
const handleApiError = (error) => {
  if (!navigator.onLine) {
    return new Error('NO_INTERNET');
  }

  if (error.response) {
    switch (error.response.status) {
      case 401:
        return new Error('INVALID_API_KEY');
      case 429:
        return new Error('RATE_LIMIT');
      default:
        return new Error('API_ERROR');
    }
  }

  return new Error('API_ERROR');
};
