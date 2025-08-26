# DEEPSIX DEV Portfolio

A futuristic, cinematic portfolio website built with Next.js 14, TypeScript, and modern web technologies.

## 🚀 Features

- **3D Hero Section** - Interactive 3D background with animated particles
- **Futuristic Design** - Glass morphism, neon borders, and cinematic animations
- **Responsive Layout** - Mobile-first design with smooth animations
- **Performance Optimized** - Built with performance budgets in mind
- **SEO Ready** - Complete meta tags, sitemap, and structured data
- **Contact Form** - Working contact form with validation
- **Command Palette** - Keyboard shortcuts and quick navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Lenis
- **3D Graphics**: Canvas 2D (optimized for performance)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## 📁 Project Structure

```
deepsix-dev-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── ...
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   ├── 3d/               # 3D graphics
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   └── ...
├── lib/                  # Utility functions
├── types/                # TypeScript types
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deepsix-dev-portfolio.git
cd deepsix-dev-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors & Theme

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  bg: '#070815',           // Background
  surface: '#0B0E1E',      // Surface elements
  text: '#E6F1FF',         // Primary text
  muted: '#94A3B8',        // Muted text
  primary: '#00E0FF',      // Primary accent
  secondary: '#7C3AED',    // Secondary accent
  accent: '#00FF87',       // Accent color
}
```

### Content

Update the content in the respective component files:
- Personal information in `components/sections/bio-split.tsx`
- Projects in `components/sections/projects-teaser.tsx`
- Skills in `components/sections/skills-wheel-3d.tsx`
- Contact information in `components/footer.tsx`

## 📱 Pages

- **Home** (`/`) - Hero section, metrics, projects teaser
- **About** (`/about`) - Bio, timeline, experience
- **Skills** (`/skills`) - Technical expertise showcase
- **Projects** (`/projects`) - Portfolio projects
- **Services** (`/services`) - Offered services
- **Experience** (`/experience`) - Work history
- **Contact** (`/contact`) - Contact form and info
- **Hire** (`/hire`) - Hiring information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

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

## 📊 Performance

The website is optimized for:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 300KB

## 🎯 SEO Features

- Complete meta tags
- Open Graph images
- Twitter cards
- Structured data
- Sitemap generation
- Robots.txt

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run tests with UI
npm run test:ui
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@deepsixx.com
- WhatsApp: +256754925439
- Website: [deepsixx.com](https://deepsixx.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

Built with ❤️ by [Deepsix Dev](https://deepsixx.com)
