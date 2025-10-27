# 🔑 API KEY & USAGE GUIDE

Complete guide for getting and using your News API key effectively.

---

## 📝 Getting Your API Key

### Step-by-Step Instructions

1. **Visit News API Website**
   - URL: https://newsapi.org
   - Click: "Get API Key" button (top right)

2. **Sign Up**
   - Enter your email address
   - Choose a password
   - Accept terms of service
   - Click "Register"
   - ✅ **No credit card required!**

3. **Verify Email**
   - Check your inbox
   - Click verification link
   - Return to NewsAPI.org

4. **Get Your Key**
   - Log in to your account
   - Dashboard shows your API key
   - Copy the 32-character key
   - Example format: `abc123def456ghi789jkl012mno345pq`

5. **Add to Project**
   - Open `.env` file in project root
   - Add: `REACT_APP_NEWS_API_KEY=your_key_here`
   - Save file
   - Restart app if running

---

## 🎁 Free Tier Limits

### What You Get (FREE)
- ✅ **100 requests per day**
- ✅ **1,000 requests per month**
- ✅ **Live news articles**
- ✅ **7 days of history**
- ✅ **All countries & languages**
- ✅ **No credit card needed**

### What's Limited
- ❌ Only 100 articles per request (we use 20)
- ❌ News up to 7 days old only
- ❌ Rate limited to prevent abuse
- ❌ Commercial use requires paid plan

### Perfect For
- ✅ Personal projects
- ✅ Learning & development
- ✅ Prototypes & demos
- ✅ Small-scale apps
- ✅ This news aggregator!

---

## 📊 Usage Calculator

### With Default Settings (5-min refresh)

**Hourly:**
- 60 minutes ÷ 5 = 12 requests/hour

**Daily:**
- 12 requests/hour × 24 hours = **288 requests/day**
- ⚠️ **EXCEEDS FREE TIER!**

### Recommended Settings

**Option 1: Extended Refresh (Recommended)**
- Refresh every 10 minutes
- 6 requests/hour × 24 = **144/day**
- Still exceeds, but less

**Option 2: Business Hours Only**
- Refresh every 5 minutes
- Run 8 hours/day
- 12 × 8 = **96 requests/day** ✅

**Option 3: Manual Refresh**
- Auto-refresh: 30 minutes
- 2/hour × 24 = **48/day** ✅
- Plus manual refreshes as needed

### How to Change Refresh Rate

Edit `src/config/constants.js`:

```javascript
export const API_CONFIG = {
  // Change this value:
  REFRESH_INTERVAL: 10 * 60 * 1000, // 10 minutes (in milliseconds)
  
  // Options:
  // 5 minutes:  5 * 60 * 1000
  // 10 minutes: 10 * 60 * 1000
  // 15 minutes: 15 * 60 * 1000
  // 30 minutes: 30 * 60 * 1000
  // 1 hour:     60 * 60 * 1000
};
```

---

## 💡 Smart Usage Tips

### 1. Optimize Your Schedule
```javascript
// Only auto-refresh during waking hours
const hour = new Date().getHours();
const isWakingHours = hour >= 7 && hour <= 23; // 7 AM to 11 PM

if (isWakingHours) {
  // Auto-refresh enabled
} else {
  // Skip auto-refresh, save API calls
}
```

### 2. Use Manual Refresh
- Set longer auto-refresh (30+ minutes)
- Users click "Refresh" when needed
- Saves API calls for active usage

### 3. Cache Articles Locally
- Store fetched articles in localStorage
- Show cached data on load
- Refresh in background
- Reduces perceived loading time

### 4. Monitor Your Usage
- Check NewsAPI.org dashboard
- Track daily request count
- Adjust refresh rate as needed

---

## 🔒 API Key Security

### ✅ DO:
- Keep `.env` in `.gitignore` (already done)
- Never commit `.env` to GitHub
- Use environment variables
- Rotate key if exposed
- Keep key private

### ❌ DON'T:
- Share your API key publicly
- Commit key to version control
- Hard-code key in source files
- Use same key for multiple projects
- Post key in screenshots/demos

### If Key is Exposed:
1. Log in to NewsAPI.org
2. Go to "Account" settings
3. Generate new API key
4. Update `.env` file
5. Restart application

---

## 📈 Upgrade Options (If Needed)

### Developer Plan ($449/month)
- 250,000 requests/month
- 30 days of history
- Higher rate limits
- Commercial use allowed
- Premium support

### Business Plan ($999/month)
- 1,000,000 requests/month
- Full article access
- Advanced filtering
- Dedicated support

### When to Upgrade?
- Publishing app to public
- Need more than 100 requests/day
- Commercial application
- Need older articles (>7 days)

**For this personal project? FREE tier is perfect!** ✅

---

## 🛡️ Error Messages Explained

### "Invalid API Key" (401)
**Causes:**
- Wrong key in `.env`
- Typo in key
- Key not activated
- Account suspended

**Fix:**
1. Verify key on NewsAPI.org
2. Check `.env` file
3. Ensure no extra spaces
4. Restart application

### "Rate Limit Exceeded" (429)
**Causes:**
- Exceeded 100 requests/day
- Too many requests per second
- Shared IP limit

**Fix:**
1. Wait until next day
2. Reduce refresh frequency
3. Use manual refresh only
4. Check dashboard for usage

### "Unauthorized" (401)
**Causes:**
- Invalid API key
- Expired trial
- Account issues

**Fix:**
1. Log in to NewsAPI.org
2. Verify account status
3. Generate new key
4. Update `.env`

---

## 📊 API Request Anatomy

### What Gets Sent:
```http
GET https://newsapi.org/v2/everything
Parameters:
  - q: "technology OR AI"        (search query)
  - apiKey: your_key_here        (authentication)
  - pageSize: 20                 (articles per request)
  - page: 1                      (pagination)
  - sortBy: publishedAt          (newest first)
  - language: en                 (English only)
```

### What You Get Back:
```json
{
  "status": "ok",
  "totalResults": 5000,
  "articles": [
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "John Doe",
      "title": "Article Title",
      "description": "Article description...",
      "url": "https://...",
      "urlToImage": "https://...",
      "publishedAt": "2024-10-23T10:00:00Z",
      "content": "Full article content..."
    }
    // ... 19 more articles
  ]
}
```

---

## 🎯 Maximizing Free Tier

### Strategy 1: Smart Caching
- Cache articles for 1 hour
- Only fetch if cache expired
- Saves ~95% of requests

### Strategy 2: User-Triggered Only
- Disable auto-refresh
- Load on page visit
- Refresh on user action
- Saves ~80% of requests

### Strategy 3: Scheduled Refresh
- Auto-refresh 3x per day
- 8 AM, 2 PM, 8 PM
- Covers peak usage times
- Uses only 3 requests/day per category

### Our Default Setup
- Auto-refresh every 5 minutes
- Best for development/testing
- **Adjust for production use**

---

## 📞 API Support

### Documentation
- Main Docs: https://newsapi.org/docs
- Endpoints: https://newsapi.org/docs/endpoints
- FAQs: https://newsapi.org/faq

### Support Channels
- Email: support@newsapi.org
- Dashboard: Message button
- Documentation: Comprehensive guides

### Common Questions

**Q: Can I use on production site?**
A: Free tier = personal/testing only. Need paid plan for production.

**Q: How many articles can I get?**
A: Up to 100 per request, we use 20 for better performance.

**Q: Can I search older articles?**
A: Free tier = 7 days. Paid plans = 30+ days.

**Q: What languages are supported?**
A: All major languages, we use English (en).

**Q: Can I filter by country?**
A: Yes! Use `country` parameter (e.g., 'us', 'gb', 'ca').

---

## 🔄 API Best Practices

### 1. Respect Rate Limits
- Don't hammer the API
- Use reasonable refresh intervals
- Implement exponential backoff on errors

### 2. Handle Errors Gracefully
```javascript
try {
  const response = await fetchNews();
} catch (error) {
  if (error.message === 'RATE_LIMIT') {
    // Show friendly message
    // Wait before retry
  }
}
```

### 3. Optimize Queries
- Use specific keywords
- Combine related terms with OR
- Filter by date when possible

### 4. Cache Responses
- Don't fetch same data repeatedly
- Store in localStorage
- Set expiration time

### 5. Monitor Usage
- Check dashboard regularly
- Track request patterns
- Adjust as needed

---

## 📱 Mobile vs Desktop Usage

### Desktop (Always-On)
- Longer refresh intervals (10-15 min)
- Background updates
- Higher daily usage

### Mobile (Intermittent)
- Refresh on app open
- Manual refresh option
- Lower daily usage
- Better for free tier!

---

## 🎓 Learning Resources

### Official Docs
- Getting Started: https://newsapi.org/docs/get-started
- Endpoints Guide: https://newsapi.org/docs/endpoints
- Error Codes: https://newsapi.org/docs/errors

### Community
- Stack Overflow: Tag `newsapi`
- GitHub: Example projects
- Reddit: r/webdev discussions

---

## ✅ Quick Reference

```bash
# Your API key location
/Users/abelandres/Up To Date/.env

# Format
REACT_APP_NEWS_API_KEY=your_32_char_key_here

# After changing .env
npm start  # Restart required

# Check usage
Visit: https://newsapi.org/account
```

---

## 🎉 You're Ready!

With your API key properly configured:
- ✅ App will fetch real news
- ✅ Categories will populate
- ✅ Search will work
- ✅ Auto-refresh enabled
- ✅ Production-ready!

**Next Step:** Follow QUICKSTART.md to launch your app!

---

**Questions?** Check README.md or NewsAPI.org documentation.

**Happy coding!** 🚀📰
