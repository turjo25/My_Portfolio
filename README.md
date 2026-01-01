# Portfolio Website

A modern, minimal, and animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Clean, dark-themed modern UI
- ✨ Smooth page transitions and micro-interactions
- 📱 Fully responsive (mobile-first design)
- 🎯 SEO-optimized with structured data
- 🚀 Optimized for Vercel deployment
- 🔍 Command Palette (Cmd+K) navigation
- 💬 Floating Social Dock
- ⚡ High Lighthouse scores

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide Icons**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional):
```bash
# Create .env.local
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## SEO & Performance

### SEO Features
- ✅ Comprehensive metadata (Open Graph, Twitter Cards)
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Semantic HTML

### Performance Optimizations
- ✅ Image optimization (Next.js Image component ready)
- ✅ Font optimization
- ✅ Code splitting
- ✅ Compression enabled
- ✅ Security headers

### Lighthouse Score Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   ├── robots.ts         # Robots.txt generation
│   ├── sitemap.ts        # Sitemap generation
│   ├── manifest.ts       # PWA manifest
│   └── opengraph-image.tsx # OG image generation
├── components/
│   ├── Navbar.tsx        # Navigation bar with smooth scroll
│   ├── Hero.tsx          # Hero section with CTAs
│   ├── About.tsx         # About section with contact info
│   ├── Skills.tsx        # Skills section with categories
│   ├── Projects.tsx      # Projects section
│   ├── Education.tsx     # Education section
│   ├── Footer.tsx        # Footer/Contact section
│   ├── CommandPalette.tsx # Command palette component
│   ├── FloatingSocialDock.tsx # Social dock component
│   ├── SectionWrapper.tsx # Reusable section wrapper
│   ├── ProjectCard.tsx   # Individual project card
│   └── SkillBadge.tsx    # Skill badge component
├── data/
│   └── constants.ts      # All content data
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets (favicons, icons)
└── types/
    └── index.ts          # TypeScript type definitions
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your deployed site URL
4. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Before Deploying

1. Add favicon and icon files to `/public`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`
   - `icon-192x192.png`
   - `icon-512x512.png`

2. Update `NEXT_PUBLIC_SITE_URL` in your environment variables

3. Test Lighthouse scores:
```bash
npm run build
npm run start
# Then run Lighthouse audit in Chrome DevTools
```

## Customization

All content can be customized in `data/constants.ts`:
- Personal information
- Contact details
- Skills
- Projects
- Education

## Keyboard Shortcuts

- `Cmd+K` / `Ctrl+K`: Open command palette
- `Escape`: Close command palette
- `Arrow Keys`: Navigate command palette
- `Enter`: Select command

## License

MIT
