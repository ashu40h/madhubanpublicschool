# Madhuban Public School Website

A modern, responsive website for Madhuban Public School, Kuchpura, Karnal built with Angular 17 and Tailwind CSS.

## 🏫 About

This website showcases Madhuban Public School's commitment to excellence in education. It features a modern, corporate-quality design with comprehensive information about the school, admissions, academics, faculty, and more.

## ✨ Features

- **Modern Design**: Clean, professional layout with blue and white color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Performance**: Optimized images and efficient code
- **Interactive Elements**: Contact forms, image gallery with lightbox, and smooth animations

## 📱 Pages

- **Home**: Hero section, school stats, facilities, news, and testimonials
- **About**: Mission, vision, values, school history, and principal's message
- **Admissions**: Admission process, age criteria, documents, fee structure, and forms
- **Academics**: Curriculum overview, subjects, teaching methodology, and co-curricular activities
- **Faculty**: Teaching staff profiles and school statistics
- **Gallery**: Photo gallery with filtering and lightbox functionality
- **Contact**: Contact information, form, and embedded Google Maps

## 🛠️ Technology Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS 3.3+
- **Icons**: Heroicons (SVG)
- **Maps**: Google Maps Embed API
- **Forms**: Angular Reactive Forms
- **Routing**: Angular Router

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd madhubanpublicschool
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page component
│   ├── admissions/      # Admissions page component
│   ├── academics/       # Academics page component
│   ├── contact/         # Contact page component
│   ├── faculty/         # Faculty page component
│   ├── footer/          # Footer component
│   ├── gallery/         # Gallery page component
│   ├── head/            # Header component
│   ├── home/            # Home page component
│   └── registration/    # Registration component
├── assets/
│   ├── images/          # School photos
│   └── logo/            # School logo
└── styles.css           # Global styles with Tailwind CSS
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- Primary: Blue shades (#2563eb)
- Secondary: Gray shades (#64748b)
- Accent: Yellow (#f59e0b)

### Content Updates

To update school information:

1. **Contact Details**: Update in header and footer components
2. **School Information**: Modify content in respective page components
3. **Images**: Replace images in `src/assets/images/` directory
4. **Faculty**: Update faculty information in `faculty.component.html`

### Adding New Pages

1. Create a new component: `ng generate component pages/new-page`
2. Add route in `app.routes.ts`
3. Update navigation in header and footer components

## 📧 Contact Information

**Madhuban Public School**

- Address: Kuchpura, Karnal, Haryana 132001
- Phone: +91-9896729375
- Email: info@madhubanpublicschool.edu.in

## 📄 License

This project is proprietary to Madhuban Public School. All rights reserved.

## 🤝 Contributing

For updates or improvements, please contact the school administration.

---

**Built with ❤️ for quality education**
