import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import NewsCard from './components/NewsCard';
import LoadingState from './components/LoadingState';
import { ErrorState, EmptyState } from './components/ErrorState';
import { fetchNewsByCategory, searchNews } from './services/newsApi';
import { NEWS_CATEGORIES, API_CONFIG } from './config/constants';
import { formatTimeAgo } from './utils/helpers';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(NEWS_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch news articles
  const fetchNews = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      let response;

      if (searchQuery) {
        // Search mode
        response = await searchNews(searchQuery, dateFilter || null);
      } else {
        // Category mode
        response = await fetchNewsByCategory(activeCategory.query);
      }

      setArticles(response.articles || []);
      setLastUpdated(formatTimeAgo(new Date().toISOString()));
    } catch (err) {
      setError(err);
      setArticles([]);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [activeCategory, searchQuery, dateFilter]);

  // Initial fetch and category change
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Auto-refresh interval
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNews(true);
    }, API_CONFIG.REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchNews]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    setDateFilter('');
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      // Reset to category mode if search is cleared
      fetchNews();
    }
  };

  // Handle date filter
  const handleDateChange = (date) => {
    setDateFilter(date);
  };

  // Handle manual refresh
  const handleRefresh = () => {
    fetchNews(true);
  };

  // Handle retry on error
  const handleRetry = () => {
    fetchNews();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        lastUpdated={lastUpdated}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        onDateChange={handleDateChange}
      />

      {/* Category Tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <main className="pb-12">
        {/* Active Category/Search Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {searchQuery ? (
                <>
                  Search Results for "{searchQuery}"
                  {dateFilter && ` (from ${dateFilter})`}
                </>
              ) : (
                <>
                  {activeCategory.icon} {activeCategory.name}
                </>
              )}
            </h2>
            {!loading && articles.length > 0 && (
              <span className="text-sm text-gray-500">
                {articles.length} article{articles.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Loading State */}
          {loading && <LoadingState count={6} />}

          {/* Error State */}
          {!loading && error && (
            <ErrorState error={error} onRetry={handleRetry} />
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <EmptyState searchTerm={searchQuery} />
          )}

          {/* News Grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <NewsCard
                  key={`${article.url}-${index}`}
                  article={article}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Powered by{' '}
            <a
              href="https://newsapi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NewsAPI.org
            </a>
            {' '}• Auto-refreshes every 5 minutes
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
