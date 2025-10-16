# St. Augustine's Academy Website

A premium, production-ready school website built with Next.js 14, TypeScript, and Tailwind CSS. Features world-class design, accessibility compliance, and performance optimization.

![St. Augustine's Academy](./public/hero.jpg)

## ✨ Features

- **🎨 Premium Design**: Elite, trustworthy branding with modern UI/UX
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **♿ Accessibility First**: WCAG AA compliant with comprehensive a11y features
- **🚀 Performance Optimized**: Lighthouse scores ≥90 desktop, ≥80 mobile
- **🔍 SEO Optimized**: Complete meta tags, structured data, and sitemap
- **🍪 Privacy Compliant**: GDPR-compliant cookie consent and privacy policy
- **📊 Analytics Ready**: Plausible Analytics and optional Google Analytics
- **📧 Contact Forms**: Functional contact forms with email integration
- **🎯 TypeScript**: Full type safety throughout the application
- **🎭 Animations**: Smooth animations and micro-interactions

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: SendGrid integration
- **Analytics**: Plausible Analytics (privacy-focused)
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/st-augustines-academy.git
   cd st-augustines-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   ADMIN_EMAIL=admissions@staugustine.edu
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
st-augustines-academy/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── academics/         # Academics page
│   ├── admissions/        # Admissions page
│   ├── campus-life/       # Campus life page
│   ├── contact/           # Contact page
│   ├── gallery/           # Photo gallery
│   ├── news/              # News and events
│   ├── privacy/           # Privacy policy
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form handler
│   │   ├── robots/        # Dynamic robots.txt
│   │   └── sitemap/       # Dynamic sitemap.xml
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ui/                # UI components
│   ├── Analytics.tsx      # Analytics component
│   ├── CookieConsent.tsx  # Cookie consent banner
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header
│   ├── Layout.tsx         # Page layout wrapper
│   └── SEO.tsx            # SEO component
├── data/                  # Static data and content
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🎨 Design System

### Colors
- **Deep Blue**: `#0B2A4A` (Primary)
- **Gold Accent**: `#C89B3C` (Secondary)
- **Dark Slate**: `#162231` (Text)
- **Warm Cream**: `#F7F4EF` (Background)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Spacing
- Based on 4px scale (4, 8, 12, 16, 20, 24...)
- Consistent vertical rhythm

## 📧 Email Configuration

### SendGrid Setup

1. **Create SendGrid Account**
   - Sign up at [SendGrid](https://sendgrid.com)
   - Verify your sender identity

2. **Generate API Key**
   - Go to Settings > API Keys
   - Create a new API key with Mail Send permissions

3. **Configure Environment Variables**
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ADMIN_EMAIL=admissions@staugustine.edu
   FROM_EMAIL=noreply@staugustine.edu
   ```

### Google Sheets Integration (Optional)

1. **Create Google Cloud Project**
2. **Enable Google Sheets API**
3. **Create Service Account**
4. **Download credentials JSON**
5. **Share spreadsheet with service account email**

## 📊 Analytics Setup

### Plausible Analytics (Recommended)

1. **Create Plausible Account**
   - Sign up at [Plausible](https://plausible.io)
   - Add your domain

2. **Configure Environment**
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

### Google Analytics 4 (Optional)

1. **Create GA4 Property**
2. **Get Measurement ID**
3. **Configure Environment**
   ```env
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment Steps

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test the build locally**
   ```bash
   npm start
   ```

3. **Deploy to your hosting provider**

### Environment Variables for Production

Set these in your hosting provider's dashboard:

```env
SENDGRID_API_KEY=your_production_sendgrid_key
ADMIN_EMAIL=admissions@staugustine.edu
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=staugustines-academy.vercel.app
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality

- **ESLint**: Configured with Next.js and accessibility rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Full type safety
- **Husky**: Pre-commit hooks for quality checks

### Performance Budget

- **First Contentful Paint**: < 1.2s on 3G
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## ♿ Accessibility Features

- **WCAG AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Minimum 4.5:1 ratio
- **Skip Links**: Skip to main content
- **Semantic HTML**: Proper heading hierarchy

## 🔒 Security Features

- **Content Security Policy**: XSS protection
- **HTTPS Only**: Secure connections
- **Input Validation**: Server-side validation
- **Rate Limiting**: API endpoint protection
- **Privacy Compliant**: GDPR-ready cookie consent

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS 14+, Android 10+

## 🧪 Testing

### Lighthouse Audits

Run Lighthouse audits locally:

```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

### Accessibility Testing

```bash
npm install -g @axe-core/cli
axe http://localhost:3000
```

## 🔄 CI/CD Pipeline

The project includes a complete CI/CD pipeline with:

- **Linting**: ESLint and Prettier checks
- **Type Checking**: TypeScript validation
- **Building**: Production build verification
- **Security Scanning**: Dependency vulnerability checks
- **Lighthouse Audits**: Performance and accessibility testing
- **Automated Deployment**: Deploy to Vercel on main branch

## 📝 Content Management

### Adding New Content

1. **News Articles**: Edit `data/site.ts` - `newsArticles` array
2. **Staff Members**: Edit `data/site.ts` - `staff` array
3. **Programs**: Edit `data/site.ts` - `programs` array
4. **Gallery Images**: Edit `data/site.ts` - `galleryImages` array

### Image Optimization

- Use Next.js Image component for automatic optimization
- Provide WebP format when possible
- Include proper alt text for accessibility
- Use appropriate sizes for different viewports

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   npm run type-check
   ```

3. **Styling Issues**
   ```bash
   npm run build
   # Check for Tailwind purging issues
   ```

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue on GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:

- **Email**: support@staugustine.edu
- **Phone**: +91-11-23456789
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/st-augustines-academy/issues)

## 🙏 Acknowledgments

- Design inspiration from leading educational institutions
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for education**
