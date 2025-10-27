# Quick Start Guide - Global News Aggregator

## 🚀 Get Started in 3 Steps

### Step 1: Get Your API Key (2 minutes)
1. Visit https://newsapi.org
2. Click "Get API Key" 
3. Sign up for a free account
4. Copy your API key

### Step 2: Configure the App
1. Open the `.env` file in this directory
2. Paste your API key after the `=` sign:
   ```
   REACT_APP_NEWS_API_KEY=paste_your_key_here
   ```
3. Save the file

### Step 3: Install and Run
Open your terminal in this directory and run:

```bash
# Install dependencies
npm install

# Start the app
npm start
```

The app will automatically open in your browser at http://localhost:3000

## 🎉 That's it! You're ready to go!

### What to Expect:
- The app will load with breaking news on the home page
- Click different category tabs to explore news
- Use the search bar to find specific topics
- The app auto-refreshes every 5 minutes

### Need Help?
- Check the full README.md for detailed documentation
- Verify your API key is correct in the `.env` file
- Make sure you have Node.js installed (v14+)
- Try `npm cache clean --force` if you encounter issues

### Customization Tips:
- Change refresh interval in `src/config/constants.js`
- Add new categories in `src/config/constants.js`
- Customize colors in `tailwind.config.js`

Enjoy your news app! 📰
