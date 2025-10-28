# Vercel Deployment Setup

This project is configured to deploy on Vercel.

## Environment Variables

Make sure to add this environment variable in your Vercel project settings:

**Name**: `REACT_APP_NEWS_API_KEY`  
**Value**: `07b0697c74a14f83b414efbe4269d714`

## How to Add Environment Variables in Vercel

1. Go to your project dashboard on Vercel
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add the variable name and value
5. Click **Save**
6. Redeploy your project

## Automatic Deployments

Vercel automatically deploys when you push to the `main` branch on GitHub. No manual deployment needed!

## Benefits of Vercel over GitHub Pages

- ✅ No CORS issues with NewsAPI
- ✅ Automatic HTTPS
- ✅ Faster build times
- ✅ Better performance with CDN
- ✅ Environment variables support
