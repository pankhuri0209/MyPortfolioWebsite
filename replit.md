# Portfolio Project

## Overview
This is a Next.js portfolio website showcasing projects, blog posts, and professional experience. The site features a modern UI built with Next.js 14, React, TailwindCSS, and NextUI components.

## Recent Changes (November 20, 2025)
- **Migrated from Vercel to Replit**: Updated configuration for Replit environment compatibility
- **Port Configuration**: Modified dev and start scripts to bind to port 5000 on host 0.0.0.0
- **Workflow Setup**: Configured automatic development server startup
- **Deployment Configuration**: Set up autoscale deployment with production build process
- **Enhanced About Me Page**: Added professional timeline with 6 entries featuring company/university logos, durations, and responsive mobile layout with centered logo+duration clusters
- **Wyckoff Trading Assistant Project**: Added dedicated project page at /wyckoff with comprehensive features, technology stack, and project details
- **Meeting Notes Application Card**: Added new project card showcasing vanilla JavaScript meeting notes app with XMLHttpRequest data fetching, CSS transitions, SCSS styling, and dynamic action item management (Technology badge: Vanilla JavaScript, SCSS)
- **Project Cards Color Scheme**: Implemented distinct background colors for each project (Elderlycare: green, Secure Social Share: pink, Wyckoff: light blue, Cloud Native: light yellow, Meeting Notes: light purple)
- **Updated Content**: Refined Wyckoff project description to be concise and focused on key features
- **Fixed Vercel Deployment Issues**:
  - Replaced deprecated `node-sass` with modern `sass` (Dart Sass v1.94.2)
  - Updated Node.js version from 18.x to 22.x in package.json engines field (required by Vercel)
  - Fixed ESLint errors: Escaped all unescaped apostrophes in JSX content (aboutme, page, projects, wyckoff pages)
  - Vercel now successfully connected to correct repository: `pankhuri0209/MyPortfolioWebsite`
  - Build compilation successful with all linting checks passing
- **Fixed Project Navigation**: Changed Wyckoff "View Project" button to navigate to /wyckoff page instead of external GitHub link, maintaining consistent internal navigation for projects with dedicated detail pages
- **Projects Page Content Structure**: Updated four-section layout to include new projects - added Wyckoff Trading Assistant (AI-powered trading with PyTorch Transformers and Q-learning) and Meeting Notes Application (vanilla JavaScript with CRUD operations) to Web & Cloud Solutions and AI & Machine Learning sections
- **Hidden Blog Menu Item**: Removed "Blog" from navigation menu in both desktop and mobile views to streamline site navigation

## Project Architecture

### Technology Stack
- **Framework**: Next.js 14.2.23 with App Router
- **UI Framework**: React 18.3.1
- **Styling**: TailwindCSS 3.4.1
- **Component Library**: NextUI 2.x
- **Icons**: React Icons 5.2.1
- **Animations**: Framer Motion 11.2.10
- **Carousel**: React Slick 0.30.2

### Project Structure
```
portfolio/
├── src/
│   └── app/           # Next.js App Router pages
│       ├── aboutme/
│       ├── blog/
│       ├── cloud/
│       ├── components/  # Reusable components (Navbar, Footer, Slider)
│       ├── contact/
│       ├── elderlycare/
│       ├── hackathons/
│       ├── projects/
│       ├── secureshare/
│       ├── wyckoff/   # Wyckoff Trading Assistant project detail page
│       └── page.tsx   # Home page
├── public/            # Static assets
│   └── images/       # Project screenshots, tech icons, etc.
│       └── wyckoff/  # Wyckoff project images
├── next.config.mjs   # Next.js configuration
├── tailwind.config.ts # TailwindCSS configuration
└── package.json      # Dependencies and scripts
```

## Development

### Running Locally
The development server automatically starts on port 5000:
- Access the site at the Replit webview URL
- Hot reload is enabled for all file changes
- Server binds to 0.0.0.0:5000 for Replit compatibility

### Scripts
- `npm run dev`: Start development server (port 5000)
- `npm run build`: Create production build
- `npm run start`: Start production server (port 5000)
- `npm run lint`: Run ESLint

### Dependencies
All dependencies are managed via npm. The project uses:
- Next.js with TypeScript
- TailwindCSS for styling
- NextUI for UI components
- React Slick for carousels
- Framer Motion for animations
- Modern `sass` (Dart Sass) - replaces deprecated `node-sass` via package overrides

## Deployment
The project is configured for Replit's autoscale deployment:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`
- Ready to publish directly from Replit

## Security Notes
- No environment variables or API keys are currently required
- All data is static (no database connections)
- Client-side only application with no server-side API routes
- Dependencies include some vulnerabilities (11 total) - run `npm audit` to review

## Known Issues
- 11 npm package vulnerabilities detected (1 low, 4 moderate, 5 high, 1 critical)
- Consider running `npm audit fix` to address non-breaking issues
