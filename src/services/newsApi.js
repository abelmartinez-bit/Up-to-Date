import axios from 'axios';
import { API_CONFIG } from '../config/constants';

// Use Vercel serverless function in production, direct API in development
const isProduction = process.env.NODE_ENV === 'production';
const BASE_URL = isProduction ? '/api/news' : API_CONFIG.BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/**
 * Fetch news articles by category
 */
export const fetchNewsByCategory = async (categoryQuery, page = 1) => {
  try {
    const params = {
      q: categoryQuery,
      pageSize: API_CONFIG.PAGE_SIZE,
      page: page,
      sortBy: 'publishedAt',
      language: 'en',
    };

    // In production, add endpoint as a query param for the serverless function
    if (isProduction) {
      params.endpoint = '/everything';
    } else {
      params.apiKey = API_CONFIG.API_KEY;
    }

    const response = await api.get(isProduction ? '' : '/everything', { params });
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
      pageSize: API_CONFIG.PAGE_SIZE,
      sortBy: 'publishedAt',
      language: 'en',
    };

    if (fromDate) {
      params.from = fromDate;
    }

    // In production, add endpoint as a query param for the serverless function
    if (isProduction) {
      params.endpoint = '/everything';
    } else {
      params.apiKey = API_CONFIG.API_KEY;
    }

    const response = await api.get(isProduction ? '' : '/everything', { params });
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
    const params = {
      country: country,
      pageSize: API_CONFIG.PAGE_SIZE,
    };

    // In production, add endpoint as a query param for the serverless function
    if (isProduction) {
      params.endpoint = '/top-headlines';
    } else {
      params.apiKey = API_CONFIG.API_KEY;
    }

    const response = await api.get(isProduction ? '' : '/top-headlines', { params });
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
