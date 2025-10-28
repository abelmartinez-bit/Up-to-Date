export const NEWS_CATEGORIES = [
  { 
    id: 'general', 
    name: 'Breaking News',
    query: 'breaking news',
    icon: '⚡'
  },
  { 
    id: 'politics', 
    name: 'Politics',
    query: 'politics OR government OR election',
    icon: '🏛️'
  },
  { 
    id: 'sports', 
    name: 'Sports',
    query: 'sports OR football OR basketball OR baseball OR soccer OR tennis OR olympics',
    icon: '⚽'
  },
  { 
    id: 'environment', 
    name: 'Environment & Climate',
    query: 'climate change OR environment OR sustainability OR global warming',
    icon: '🌍'
  },
  { 
    id: 'conflicts', 
    name: 'Conflicts & Wars',
    query: 'war OR conflict OR military OR crisis',
    icon: '⚠️'
  },
  { 
    id: 'entertainment', 
    name: 'Entertainment',
    query: 'music OR film OR movie OR celebrity OR entertainment',
    icon: '🎬'
  },
  { 
    id: 'fashion', 
    name: 'Fashion & Lifestyle',
    query: 'fashion OR lifestyle OR beauty OR style',
    icon: '👗'
  },
  { 
    id: 'automotive', 
    name: 'Automotive',
    query: 'automotive OR cars OR electric vehicles OR tesla',
    icon: '🚗'
  },
  { 
    id: 'technology', 
    name: 'Technology',
    query: 'technology OR AI OR tech OR innovation OR software',
    icon: '💻'
  },
  { 
    id: 'science', 
    name: 'Science',
    query: 'science OR research OR discovery OR space OR medicine',
    icon: '🔬'
  }
];

export const API_CONFIG = {
  BASE_URL: 'https://newsapi.org/v2',
  API_KEY: '07b0697c74a14f83b414efbe4269d714',
  PAGE_SIZE: 20,
  REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes
};

export const ERROR_MESSAGES = {
  NO_INTERNET: 'No internet connection. Please check your network.',
  API_ERROR: 'Failed to fetch news. Please try again later.',
  NO_RESULTS: 'No articles found for your search.',
  RATE_LIMIT: 'Too many requests. Please wait a moment.',
  INVALID_API_KEY: 'Invalid API key. Please check your configuration.',
};
