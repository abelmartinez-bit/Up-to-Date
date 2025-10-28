import axios from 'axios';
import { API_CONFIG } from '../config/constants';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
});

/**
 * Fetch news articles by category
 */
export const fetchNewsByCategory = async (categoryQuery, page = 1) => {
  try {
    const response = await api.get('/everything', {
      params: {
        q: categoryQuery,
        apiKey: API_CONFIG.API_KEY,
        pageSize: API_CONFIG.PAGE_SIZE,
        page: page,
        sortBy: 'publishedAt',
        language: 'en',
      },
    });
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

    const response = await api.get('/everything', { params });
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
    const response = await api.get('/top-headlines', {
      params: {
        country: country,
        apiKey: API_CONFIG.API_KEY,
        pageSize: API_CONFIG.PAGE_SIZE,
      },
    });
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
