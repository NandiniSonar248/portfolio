# Deployment Guide

This guide will help you deploy your portfolio to popular hosting platforms.

## 🚀 Recommended Platforms

### 1. Vercel (Recommended - Easiest)

**Pros:**
- Free hosting for personal projects
- Automatic deployments from Git
- Built-in SSL certificate
- Fast global CDN
- Zero configuration

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/NandiniSonar248/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Import Project"
   - Select your portfolio repository
   - Click "Deploy"
   - Done! Your site will be live at `https://your-portfolio.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### 2. Netlify

**Pros:**
- Free hosting
- Continuous deployment
- Form handling
- Drag-and-drop deployment

**Steps:**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

### 3. GitHub Pages

**Pros:**
- Free hosting
- Easy setup
- Good for static sites

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://NandiniSonar248.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'  // Your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages, / (root)
   - Save

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated in `resumeData.js`
- [ ] Resume file is in `public/` folder
- [ ] All images load correctly
- [ ] All links work (social media, GitHub, projects)
- [ ] Both light and dark modes work
- [ ] Site is responsive on mobile, tablet, desktop
- [ ] Contact form validates properly
- [ ] No console errors in browser
- [ ] Build succeeds: `npm run build`
- [ ] Preview build works: `npm run preview`

## 🔧 Build Configuration

### Environment Variables (if needed)

Create `.env` file in root:
```env
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=your-email
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Build Optimization

Already configured in `vite.config.js`:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

## 🌐 Custom Domain Setup

### For Vercel:

1. In Vercel dashboard: Settings → Domains
2. Add your domain (e.g., `nandinisonar.com`)
3. Update DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. In Netlify dashboard: Domain settings
2. Add custom domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

## 📊 Analytics (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Install package:
   ```bash
   npm install react-ga4
   ```
3. Add to `main.jsx`:
   ```javascript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('G-XXXXXXXXXX');
   ```

## 🔒 Security Best Practices

- ✅ All external links use `rel="noopener noreferrer"`
- ✅ No sensitive data in frontend code
- ✅ HTTPS enabled (automatic on Vercel/Netlify)
- ✅ Dependencies updated regularly

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Check image URLs are correct
- Ensure images in `public/` folder
- Verify image file names (case-sensitive)

### 404 on Refresh (SPA Issue)

Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

Or `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 📱 Progressive Web App (Optional)

To make your portfolio a PWA:

1. Install Vite PWA plugin:
   ```bash
   npm install vite-plugin-pwa -D
   ```

2. Update `vite.config.js`:
   ```javascript
   import { VitePWA } from 'vite-plugin-pwa';
   
   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: 'autoUpdate',
         manifest: {
           name: 'Nandini Sonar Portfolio',
           short_name: 'Portfolio',
           theme_color: '#0ea5e9'
         }
       })
     ]
   });
   ```

## 🔄 Continuous Deployment

Once connected to Vercel/Netlify:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Your site auto-deploys! ✨

## 📧 Support

If you face issues:
- Check Vercel/Netlify build logs
- Ensure Node.js version matches (v16+)
- Verify all dependencies are installed
- Clear browser cache

---

**Ready to deploy?** Choose Vercel for the easiest experience! 🚀

Your portfolio will be live in under 5 minutes.
