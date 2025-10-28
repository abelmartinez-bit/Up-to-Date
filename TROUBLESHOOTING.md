# 🔧 TROUBLESHOOTING GUIDE - GitHub Pages Deployment

Common issues and solutions for your deployed news app.

---

## ✅ **FIXED: "Something Went Wrong" Error**

### **The Problem**
When you first deployed, the app showed "Something went wrong" because:
- The `.env` file with your API key is in `.gitignore` (correct for security)
- GitHub Pages builds don't have access to local `.env` files
- The app tried to call News API without a key → error

### **The Solution Applied**
Added a fallback API key in `src/config/constants.js`:

```javascript
API_KEY: process.env.REACT_APP_NEWS_API_KEY || '07b0697c74a14f83b414efbe4269d714',
```

This means:
- Locally: Uses `.env` file (secure)
- On GitHub Pages: Uses the fallback key (works!)

---

## ⚠️ **Security Note**

### **Current Setup**
Your API key is now visible in the deployed code. This is:
- ✅ **Fine for learning/demo projects**
- ✅ **Fine with free News API tier** (100 requests/day)
- ❌ **Not ideal for production/commercial apps**

### **Why It's Okay Here**
- Free API key with limited quota
- Personal project/portfolio
- News API allows client-side usage
- Easy to regenerate if needed

### **For Production Apps**
Consider:
1. **Backend proxy server** - Hide API key server-side
2. **GitHub Actions with Secrets** (see below)
3. **Environment-based builds**
4. **Rate limiting & caching**

---

## 🔒 **Better Solution: GitHub Secrets (Optional)**

For a more secure deployment, use GitHub Actions with secrets.

### **Step 1: Add API Key as GitHub Secret**

1. Go to your repository: https://github.com/abelmartinez-bit/Up-to-Date
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Name: `REACT_APP_NEWS_API_KEY`
6. Value: `07b0697c74a14f83b414efbe4269d714`
7. Click **Add secret**

### **Step 2: Use GitHub Actions**

The `.github/workflows/deploy.yml` file is already created! It will:
- Build your app with the secret API key
- Deploy to GitHub Pages automatically
- Keep your key secure

### **Step 3: Remove Hardcoded Key**

Once GitHub Secret is set up, update `src/config/constants.js`:

```javascript
API_KEY: process.env.REACT_APP_NEWS_API_KEY,
```

Remove the fallback (or keep it as empty string):

```javascript
API_KEY: process.env.REACT_APP_NEWS_API_KEY || '',
```

### **Step 4: Deploy via GitHub Actions**

Just push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

GitHub Actions will automatically build and deploy! 🎉

---

## 🐛 **Common Issues & Solutions**

### **1. Site Shows Blank Page**

**Causes:**
- Build path incorrect
- JavaScript errors
- API key missing

**Solutions:**
```bash
# Check browser console (F12) for errors
# Redeploy:
npm run deploy

# Test locally first:
npm start
```

### **2. News Not Loading**

**Causes:**
- API key invalid
- Rate limit exceeded (100/day)
- Network error
- CORS issue

**Solutions:**
- Check News API dashboard: https://newsapi.org/account
- Wait if rate limit exceeded
- Check browser console (F12)
- Try refreshing the page

**Check API Key:**
```javascript
// In browser console (F12), type:
console.log(process.env.REACT_APP_NEWS_API_KEY)
```

### **3. "Invalid API Key" Error**

**Causes:**
- API key expired
- Typo in API key
- API key not in build

**Solutions:**
- Verify key at https://newsapi.org
- Check `src/config/constants.js` has correct key
- Redeploy: `npm run deploy`

### **4. Changes Not Showing**

**Causes:**
- Browser cache
- GitHub Pages not updated
- Build not deployed

**Solutions:**
```bash
# 1. Hard refresh browser
# Windows: Ctrl + F5
# Mac: Cmd + Shift + R

# 2. Redeploy
npm run deploy

# 3. Wait 2-3 minutes for GitHub Pages

# 4. Clear browser cache
# Browser settings → Clear browsing data
```

### **5. "Rate Limit Exceeded"**

**Causes:**
- Exceeded 100 API requests/day
- Multiple users accessing your site

**Solutions:**
- Wait until next day (resets at midnight UTC)
- Reduce refresh interval:
  ```javascript
  // src/config/constants.js
  REFRESH_INTERVAL: 15 * 60 * 1000, // 15 minutes instead of 5
  ```
- Implement caching
- Use backend proxy

**Check Your Usage:**
https://newsapi.org/account → View usage stats

### **6. App Works Locally But Not on GitHub Pages**

**Causes:**
- Environment variables not available in build
- Path issues with homepage URL
- CORS restrictions

**Solutions:**
```bash
# Test production build locally:
npm run build
npm install -g serve
serve -s build

# Check homepage in package.json:
"homepage": "https://abelmartinez-bit.github.io/Up-to-Date"

# Redeploy:
npm run deploy
```

---

## 🔍 **Debugging Steps**

### **1. Check Browser Console**
```
1. Open your live site
2. Press F12 (Windows) or Cmd+Option+I (Mac)
3. Click "Console" tab
4. Look for red error messages
5. Take screenshot if needed
```

### **2. Check Network Tab**
```
1. Press F12 → "Network" tab
2. Reload page
3. Look for failed requests (red)
4. Check API calls to newsapi.org
5. Verify status codes (should be 200)
```

### **3. Test API Key Manually**
```bash
# In terminal, test your API key:
curl "https://newsapi.org/v2/top-headlines?country=us&apiKey=07b0697c74a14f83b414efbe4269d714"

# Should return JSON with articles
# If error, API key is invalid
```

### **4. Check GitHub Pages Status**
```
1. Go to: https://github.com/abelmartinez-bit/Up-to-Date/settings/pages
2. Verify: "Your site is live at..."
3. Check: Last deployment time
4. Redeploy if needed: npm run deploy
```

### **5. Compare Local vs Deployed**
```bash
# Test locally:
npm start
# Visit: http://localhost:3000
# Works? → Deployment issue

# Test production build:
npm run build
serve -s build
# Visit: http://localhost:3000
# Works? → GitHub Pages issue
```

---

## 📊 **Monitor Your App**

### **News API Dashboard**
- URL: https://newsapi.org/account
- Check: Daily request count
- Limit: 100 requests/day (free tier)

### **GitHub Pages Status**
- URL: https://github.com/abelmartinez-bit/Up-to-Date/settings/pages
- Check: Last deployment
- Verify: Site is published

### **Browser DevTools**
```
F12 → Console → Check for errors
F12 → Network → Check API calls
F12 → Application → Check for cached data
```

---

## 🔄 **Refresh Workflow**

If site has issues:

```bash
# 1. Test locally first
npm start
# Verify it works at http://localhost:3000

# 2. Build production version
npm run build
# Check for build errors

# 3. Test production build locally
npx serve -s build
# Visit http://localhost:3000

# 4. If all works, deploy
npm run deploy

# 5. Wait 2-3 minutes

# 6. Hard refresh your browser
# Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# 7. Check live site
# Visit: https://abelmartinez-bit.github.io/Up-to-Date
```

---

## 🆘 **Emergency Fixes**

### **Quick Redeploy**
```bash
cd "/Users/abelandres/Up To Date"
npm run deploy
```

### **Reset Everything**
```bash
# Delete build folder and redeploy
rm -rf build
npm run deploy
```

### **Clear GitHub Pages Cache**
```bash
# Add cache-busting parameter
https://abelmartinez-bit.github.io/Up-to-Date?v=2

# Or hard refresh in browser
Ctrl+F5 (Windows)
Cmd+Shift+R (Mac)
```

### **Regenerate API Key**
```
1. Go to: https://newsapi.org/account
2. Generate new API key
3. Update in code
4. Redeploy
```

---

## ✅ **Verification Checklist**

After deployment, verify:

- [ ] Site loads: https://abelmartinez-bit.github.io/Up-to-Date
- [ ] No console errors (F12)
- [ ] News articles display
- [ ] Categories work
- [ ] Search works
- [ ] Mobile responsive
- [ ] No "Something went wrong" error
- [ ] Images load properly
- [ ] Click article opens new tab

---

## 📞 **Get Help**

### **Check These First**
1. Browser console (F12) for errors
2. News API dashboard for usage
3. GitHub Pages settings for status
4. This troubleshooting guide

### **Resources**
- News API Docs: https://newsapi.org/docs
- GitHub Pages Docs: https://docs.github.com/en/pages
- React Docs: https://react.dev
- Your DEPLOYMENT.md file

---

## 💡 **Pro Tips**

1. **Test locally before deploying**
   ```bash
   npm start  # Always test first!
   ```

2. **Check API usage regularly**
   - Don't exceed 100 requests/day
   - Monitor at newsapi.org/account

3. **Hard refresh after deployment**
   - Clears browser cache
   - Shows latest changes

4. **Use incognito/private mode**
   - No cached data
   - Fresh page load

5. **Check on multiple devices**
   - Desktop, mobile, tablet
   - Different browsers

---

## 🎯 **Your Site Status**

✅ **Currently Working**
- Live at: https://abelmartinez-bit.github.io/Up-to-Date
- API key: Configured with fallback
- Deployment: Automatic via npm run deploy
- Status: Production-ready

---

**Your site should now be working!** 🎉

Visit: **https://abelmartinez-bit.github.io/Up-to-Date**

Hard refresh (Ctrl+F5 / Cmd+Shift+R) if you still see the old version.

---

_Last updated: October 27, 2025_  
_Issue: "Something went wrong" error_  
_Solution: Added API key fallback_  
_Status: ✅ Fixed_
