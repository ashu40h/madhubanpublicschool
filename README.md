# Madhuban Public School Website

A modern, responsive website for Madhuban Public School, Kuchpura, Karnal. Built with Angular and deployed on GitHub Pages.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with corporate-level styling
- **Dynamic Image Carousel**: Auto-rotating campus photos
- **Contact Forms**: Interactive forms with validation
- **Gallery**: Image gallery with lightbox functionality
- **News & Events**: Dynamic content management
- **Faculty Directory**: Staff information with professional layout
- **SEO Optimized**: Meta tags, structured data, and accessibility features
- **Fast Loading**: Optimized images and lazy loading

## 🚀 Live Website

**Website URL**: [https://YOUR_USERNAME.github.io/YOUR_REPO_NAME](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME)

## 🛠️ Technologies

- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Custom CSS** - Corporate-level styling
- **HTML5** - Semantic markup
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated deployment

## 📦 Setup & Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm start
```

4. **Open in browser:**

```
http://localhost:4200
```

### Build for Production

```bash
npm run build
```

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source

2. **Push to main branch:**

   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Build the Angular app
   - Deploy to GitHub Pages
   - Update your live website

### Method 2: Manual Deployment

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Run deployment script:**

   ```bash
   ./deploy.sh
   ```

3. **Or manually deploy:**
   ```bash
   cd dist/madhuban-public-school/browser
   git init
   git add .
   git commit -m "Deploy website"
   git push origin HEAD:gh-pages --force
   ```

## 📁 Project Structure

```
madhuban-public-school/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── app/
│   │   ├── home/               # Homepage component
│   │   ├── about/              # About page
│   │   ├── admissions/         # Admissions page
│   │   ├── academics/          # Academics page
│   │   ├── faculty/            # Faculty page
│   │   ├── gallery/            # Gallery page
│   │   ├── contact/            # Contact page
│   │   ├── head/               # Header component
│   │   └── footer/             # Footer component
│   ├── assets/
│   │   ├── images/             # Campus photos (1.png - 18.png)
│   │   └── logo/               # School logo
│   ├── styles.css              # Global styles
│   └── index.html              # Main HTML file
├── deploy.sh                   # Manual deployment script
├── angular.json                # Angular configuration
└── README.md                   # This file
```

## 🎨 Customization

### Update School Information

1. **Contact Details:**

   - Phone: Update in `src/app/head/head.component.html`
   - Email: Update in `src/app/head/head.component.html`
   - Address: Update in `src/app/footer/footer.component.html`

2. **School Name:**

   - Update in `src/app/head/head.component.html`
   - Update in `src/index.html` title and meta tags

3. **Images:**
   - Replace campus photos in `src/assets/images/`
   - Update school logo in `src/assets/logo/`
   - Ensure images are optimized for web

### Styling

- **Colors:** Modify CSS variables in `src/styles.css`
- **Fonts:** Update Google Fonts import in `src/styles.css`
- **Layout:** Adjust grid and flexbox properties

### Content

- **About Page:** Update school description and principal message
- **Faculty:** Add/remove staff members in `src/app/faculty/faculty.component.ts`
- **News & Events:** Update content in `src/data/notices.json`

## 🔧 Configuration

### GitHub Pages Setup

1. **Repository Settings:**

   - Go to Settings → Pages
   - Source: GitHub Actions
   - Custom domain (optional)

2. **Environment Variables:**
   - No additional setup required
   - Uses default `GITHUB_TOKEN`

### SEO Configuration

- **Meta Tags:** Configured in `src/index.html`
- **Structured Data:** JSON-LD in `src/index.html`
- **Sitemap:** `sitemap.xml` in root directory
- **Robots:** `robots.txt` in root directory

## 📱 Mobile Optimization

- **Responsive Design:** Mobile-first CSS approach
- **Touch-Friendly:** Large touch targets for mobile
- **Fast Loading:** Optimized images and lazy loading
- **Progressive Web App:** Ready for PWA features

## 🚀 Performance

- **Lazy Loading:** Images load as needed
- **Optimized Build:** Production build with minification
- **CDN Ready:** Static assets optimized for CDN
- **Caching:** Proper cache headers for static assets

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary to Madhuban Public School, Kuchpura, Karnal.

---

**Built with ❤️ for Madhuban Public School**
