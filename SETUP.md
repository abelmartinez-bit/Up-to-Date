# SETUP INSTRUCTIONS - Global News Aggregator

## ⚠️ Prerequisites Installation

### Install Node.js (Required)

Since Node.js is not currently installed on your system, you need to install it first.

#### Option 1: Using Homebrew (Recommended for macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

#### Option 2: Download from Official Website
1. Visit https://nodejs.org
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer
4. Verify installation by opening Terminal and running:
   ```bash
   node --version
   npm --version
   ```

---

## 🚀 Application Setup

Once Node.js is installed, follow these steps:

### 1. Get Your News API Key

1. Go to https://newsapi.org
2. Click "Get API Key" button
3. Sign up for a **free account** (no credit card required)
4. Copy your API key from the dashboard

**Important**: The free tier gives you:
- 100 requests per day
- 1,000 requests per month
- Perfect for this application!

### 2. Configure Your API Key

1. Navigate to the project directory:
   ```bash
   cd "/Users/abelandres/Up To Date"
   ```

2. Open the `.env` file in your text editor

3. Add your API key:
   ```
   REACT_APP_NEWS_API_KEY=your_actual_api_key_here
   ```
   
   Example:
   ```
   REACT_APP_NEWS_API_KEY=abc123def456ghi789jkl012mno345pqr
   ```

4. Save the file

### 3. Install Dependencies

```bash
npm install
```

This will install:
- React 18
- Tailwind CSS
- Axios (for API calls)
- date-fns (for date formatting)
- All other required dependencies

Installation takes about 2-3 minutes.

### 4. Start the Application

```bash
npm start
```

This will:
- Start the development server
- Automatically open your browser to http://localhost:3000
- Enable hot-reload (changes update automatically)

---

## 🎯 What You'll See

After starting the app, you should see:

1. **Header**: "Global News Aggregator" with refresh button
2. **Search Bar**: To search for specific topics
3. **Category Tabs**: 10 different news categories
4. **News Grid**: Articles displayed in a responsive grid
5. **Auto-refresh**: Updates every 5 minutes

---

## 📱 Features Overview

### Categories Available:
- ⚡ Breaking News - Latest global headlines
- 🏛️ Politics - Government and elections worldwide
- ⚽ Sports - All major sports coverage
- 🌍 Environment & Climate - Sustainability news
- ⚠️ Conflicts & Wars - Global conflicts coverage
- 🎬 Entertainment - Music, film, and celebrity news
- 👗 Fashion & Lifestyle - Style and lifestyle trends
- 🚗 Automotive - Cars and electric vehicles
- 💻 Technology - Tech innovations and AI
- 🔬 Science - Research and discoveries

### Search Features:
- Keyword search across all articles
- Date filtering to find news from specific dates
- Real-time results

### UI Features:
- Responsive design (mobile, tablet, desktop)
- Skeleton loading screens
- Error handling for network issues
- "Time ago" timestamps (e.g., "5 minutes ago")
- Click any article to read full story

---

## 🛠️ Troubleshooting

### Issue: "command not found: npm"
**Solution**: Node.js is not installed. Follow the Node.js installation steps above.

### Issue: "Invalid API Key"
**Solution**: 
1. Check your `.env` file has the correct key
2. Make sure there are no spaces around the `=` sign
3. Restart the development server with `npm start`
4. Verify your key is active at newsapi.org

### Issue: No articles showing
**Solution**:
1. Check your internet connection
2. Verify you haven't exceeded the API rate limit (100/day)
3. Try a different category
4. Check browser console (F12) for error messages

### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
PORT=3001 npm start
```

### Issue: Dependencies won't install
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Stop the server
# Press Ctrl+C in the terminal
```

---

## 🎨 Customization

### Change Refresh Interval
Edit `src/config/constants.js`:
```javascript
REFRESH_INTERVAL: 10 * 60 * 1000, // Change to 10 minutes
```

### Add New Category
Edit `src/config/constants.js`, add to `NEWS_CATEGORIES` array:
```javascript
{
  id: 'business',
  name: 'Business',
  query: 'business OR economy OR stock market',
  icon: '💼'
}
```

### Change Color Scheme
Edit `tailwind.config.js` in the `theme.extend.colors` section.

---

## 📚 Learn More

- **React Documentation**: https://reactjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **News API Docs**: https://newsapi.org/docs
- **Create React App**: https://create-react-app.dev

---

## 🆘 Need More Help?

1. Check the `README.md` for detailed documentation
2. See `QUICKSTART.md` for a condensed guide
3. Visit News API docs: https://newsapi.org/docs
4. Check React documentation for component questions

---

## ✅ Verification Checklist

Before reporting issues, verify:

- [ ] Node.js is installed (`node --version` works)
- [ ] npm is installed (`npm --version` works)
- [ ] `.env` file has your API key
- [ ] API key is valid (check newsapi.org dashboard)
- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Internet connection is working
- [ ] No other process is using port 3000

---

**Happy news reading! 📰🌐**
