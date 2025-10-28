// Vercel Serverless Function to proxy NewsAPI requests
// This bypasses CORS restrictions by making requests server-side

const axios = require('axios');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { endpoint, ...params } = req.query;
  
  if (!endpoint) {
    return res.status(400).json({ error: 'Endpoint is required' });
  }

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await axios.get(`https://newsapi.org/v2${endpoint}`, {
      params: {
        ...params,
        apiKey: API_KEY,
      },
      timeout: 10000,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('NewsAPI Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || { message: 'Failed to fetch news' },
    });
  }
};
