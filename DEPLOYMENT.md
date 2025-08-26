# Deployment Guide - DEEPSIX DEV Portfolio

This guide will help you deploy your portfolio website to Hostinger or any other hosting platform.

## 🚀 Quick Start

### 1. Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### 2. Deployment Options

#### Option A: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/deepsix-dev-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy
   - Your site will be available at `https://your-project.vercel.app`

3. **Custom Domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain: `deepsixx.com`
   - Update DNS records as instructed by Vercel

#### Option B: Hostinger

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**
   - Log into your Hostinger control panel
   - Go to File Manager
   - Navigate to `public_html` or your domain folder
   - Upload the contents of the `.next` folder and `public` folder

3. **Configure Node.js**
   - In Hostinger, go to Advanced > Node.js
   - Set Node.js version to 18+
   - Set startup file to `server.js`
   - Set Node.js app URL to your domain

4. **Create server.js**
   ```javascript
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')

   const dev = process.env.NODE_ENV !== 'production'
   const hostname = 'localhost'
   const port = process.env.PORT || 3000

   const app = next({ dev, hostname, port })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {
     createServer(async (req, res) => {
       try {
         const parsedUrl = parse(req.url, true)
         await handle(req, res, parsedUrl)
       } catch (err) {
         console.error('Error occurred handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
       }
     })
       .once('error', (err) => {
         console.error(err)
         process.exit(1)
       })
       .listen(port, () => {
         console.log(`> Ready on http://${hostname}:${port}`)
       })
   })
   ```

#### Option C: Static Export

1. **Update next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   }

   module.exports = nextConfig
   ```

2. **Build and Export**
   ```bash
   npm run build
   ```
   This will create an `out` folder with static files.

3. **Upload to Hostinger**
   - Upload the contents of the `out` folder to your `public_html` directory

## 🌐 Domain Configuration

### DNS Settings for Hostinger

1. **A Record**
   - Name: `@`
   - Value: Your hosting IP address
   - TTL: 300

2. **CNAME Record**
   - Name: `www`
   - Value: `deepsixx.com`
   - TTL: 300

3. **SSL Certificate**
   - Enable SSL in Hostinger control panel
   - This will provide HTTPS for your site

## 🔧 Environment Variables

Create a `.env.local` file for production:

```env
# Email (Optional - for contact form)
RESEND_API_KEY=your_resend_api_key
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Analytics (Optional)
POSTHOG_KEY=your_posthog_key
```

## 📱 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Optimize images before uploading
- Consider using WebP format

### 2. Code Splitting
- Next.js automatically code-splits
- Use dynamic imports for heavy components
- Lazy load 3D components

### 3. Caching
- Enable browser caching
- Use CDN for static assets
- Implement service worker for offline support

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Port Conflicts**
   ```bash
   # Use different port
   PORT=3001 npm run dev
   ```

3. **Memory Issues**
   ```bash
   # Increase Node.js memory
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

### Performance Issues

1. **Large Bundle Size**
   - Check bundle analyzer: `npm run build -- --analyze`
   - Remove unused dependencies
   - Use dynamic imports

2. **Slow Loading**
   - Optimize images
   - Enable compression
   - Use CDN

## 📊 Monitoring

### 1. Analytics
- Google Analytics
- Vercel Analytics
- PostHog

### 2. Performance
- Lighthouse
- WebPageTest
- GTmetrix

### 3. Uptime
- UptimeRobot
- Pingdom
- StatusCake

## 🔒 Security

### 1. Headers
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options

### 2. SSL
- Enable HTTPS
- Redirect HTTP to HTTPS
- Use HSTS

### 3. Dependencies
- Regular security updates
- Audit dependencies: `npm audit`
- Use `npm audit fix`

## 📈 Scaling

### 1. CDN
- Cloudflare
- AWS CloudFront
- Vercel Edge Network

### 2. Database
- PostgreSQL on Hostinger
- Redis for caching
- MongoDB Atlas

### 3. Monitoring
- Application performance monitoring
- Error tracking
- User analytics

## 🎯 SEO Checklist

- [ ] Meta tags for all pages
- [ ] Open Graph images
- [ ] Twitter cards
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data
- [ ] Page speed optimization
- [ ] Mobile responsiveness
- [ ] Accessibility compliance

## 📞 Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Hostinger support](https://www.hostinger.com/help)
3. Contact: info@deepsixx.com
4. WhatsApp: +256754925439

---

**Happy Deploying! 🚀**

Your portfolio website will be live at [deepsixx.com](https://deepsixx.com)
