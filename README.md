# Global News Aggregator 🌐

A modern, real-time global news aggregation web application built with React that displays breaking news from multiple categories worldwide.

## 🚀 **[View Live Demo](https://abelmartinez-bit.github.io/Up-to-Date)** 

---

## Features ✨

- **Real-time News Updates**: Auto-refreshes every 5-10 minutes
- **Multiple Categories**:
  - Politics (Global coverage)
  - Sports (All major sports)
  - Environment & Climate
  - Conflicts & Wars
  - Entertainment (Music, Film)
  - Fashion & Lifestyle
  - Automotive
  - Technology
  - Science
- **Advanced Search & Filtering**:
  - Keyword search
  - Date filtering
  - Category filtering
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean interface with smooth animations
- **Error Handling**: Comprehensive error states for network issues, API errors, etc.
- **Loading States**: Skeleton screens for better UX
- **Timestamps**: Shows "X minutes ago" format for article publication

## Tech Stack 🛠️

- **React 18**: Frontend framework
- **Tailwind CSS**: Styling and responsive design
- **Axios**: HTTP client for API calls
- **date-fns**: Date formatting utilities
- **News API**: News data source ([newsapi.org](https://newsapi.org))

## Prerequisites 📋

- Node.js (v14 or higher)
- npm or yarn
- News API key (free from [newsapi.org](https://newsapi.org))

## Installation 🚀

1. **Clone or navigate to the project directory**:
   ```bash
   cd "Up To Date"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your API key**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get your free API key from [newsapi.org](https://newsapi.org)
   - Open `.env` and add your API key:
     ```
     REACT_APP_NEWS_API_KEY=your_actual_api_key_here
     ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment 🚀

This app is deployed on GitHub Pages! 

**Live URL:** [https://abelmartinez-bit.github.io/Up-to-Date](https://abelmartinez-bit.github.io/Up-to-Date)

### Deploy Your Own Version

```bash
# Deploy to GitHub Pages
npm run deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

## Project Structure 📁

```
Up To Date/
````5. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure 📁

```
Up To Date/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with refresh button
│   │   ├── CategoryTabs.jsx    # Category navigation
│   │   ├── SearchBar.jsx       # Search and filter controls
│   │   ├── NewsCard.jsx        # Individual news article card
│   │   ├── LoadingState.jsx    # Skeleton loading screens
│   │   └── ErrorState.jsx      # Error and empty states
│   ├── services/
│   │   └── newsApi.js          # News API integration
│   ├── config/
│   │   └── constants.js        # App constants and categories
│   ├── utils/
│   │   └── helpers.js          # Utility functions
│   ├── App.js                  # Main app component
│   ├── index.js                # App entry point
│   └── index.css               # Global styles with Tailwind
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## Usage 📖

### Browsing News
- Click on any category tab to view news for that category
- Scroll through the grid of news articles
- Click on any article card to read the full story (opens in new tab)

### Searching
- Use the search bar to find specific topics or keywords
- Optionally filter by date using the date picker
- Click "Search" to execute the search
- Click "Clear" to reset filters and return to category view

### Auto-Refresh
- The app automatically refreshes news every 5 minutes
- Manual refresh available via the "Refresh" button in the header
- Last updated timestamp shown in the header

## Available Scripts 📜

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## API Configuration ⚙️

The app uses [NewsAPI.org](https://newsapi.org) with the following settings:

- **Free Tier Limits**: 100 requests per day, 1000 requests per month
- **Refresh Interval**: 5 minutes (configurable in `src/config/constants.js`)
- **Page Size**: 20 articles per request
- **Language**: English

To modify the refresh interval, edit `API_CONFIG.REFRESH_INTERVAL` in `src/config/constants.js`.

## Error Handling 🛡️

The app handles various error scenarios:

- **No Internet Connection**: Displays offline message with retry option
- **Invalid API Key**: Shows configuration error message
- **Rate Limit Exceeded**: Warns user to wait before retrying
- **API Errors**: General error message with retry functionality
- **No Results**: Empty state when no articles match search criteria

## Customization 🎨

### Adding New Categories
Edit `src/config/constants.js` and add to `NEWS_CATEGORIES`:

```javascript
{
  id: 'custom-category',
  name: 'Custom Category',
  query: 'your search query',
  icon: '🔥'
}
```

### Changing Colors
Modify `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Adjusting Refresh Interval
Edit `src/config/constants.js`:

```javascript
REFRESH_INTERVAL: 10 * 60 * 1000, // 10 minutes
```

## Performance Optimization 🚄

- **Lazy Loading**: Images load on demand
- **Skeleton Screens**: Immediate visual feedback during loading
- **Efficient Re-renders**: React hooks optimize state updates
- **Auto-refresh**: Background updates without disrupting user experience

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting 🔧

### API Key Issues
- Ensure your `.env` file has the correct key: `REACT_APP_NEWS_API_KEY=your_key`
- Restart the development server after changing `.env`
- Verify your API key is active at [newsapi.org](https://newsapi.org)

### No Articles Showing
- Check your internet connection
- Verify you haven't exceeded API rate limits
- Try a different category or search term
- Check browser console for error messages

### Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Update dependencies: `npm update`

## Contributing 🤝

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License 📄

This project is open source and available under the MIT License.

## Acknowledgments 🙏

- [NewsAPI.org](https://newsapi.org) for providing the news data
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [React](https://reactjs.org) for the UI framework
- [Unsplash](https://unsplash.com) for fallback images

## Support 💬

For issues or questions:
- Check the troubleshooting section above
- Visit [NewsAPI Documentation](https://newsapi.org/docs)
- Review React documentation at [reactjs.org](https://reactjs.org)

---

**Built with ❤️ using React and Tailwind CSS**
