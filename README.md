# MyPortfolioWebsite

A modern, responsive portfolio website built with Next.js 14, React, and TailwindCSS, showcasing professional experience, projects, blog posts, and educational background.

## 🚀 Live Demo

This portfolio is hosted on Replit and ready to be published with autoscale deployment.

## ✨ Features

- **Interactive Timeline**: Enhanced About Me page with company/university logos and duration badges for each experience
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Project Showcase**: Detailed project pages highlighting technical skills and achievements
- **Blog Section**: Platform for sharing technical articles and thoughts
- **Contact Form**: Easy way for visitors to connect

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.23 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4.1
- **UI Components**: NextUI 2.x
- **Icons**: React Icons 5.2.1
- **Animations**: Framer Motion 11.2.10
- **Carousel**: React Slick 0.30.2

### Deployment
- **Platform**: Replit (Autoscale deployment configured)
- **Port**: 5000 (0.0.0.0 host binding)

## 📂 Project Structure

```
MyPortfolioWebsite/
├── portfolio/                  # Main Next.js application
│   ├── src/
│   │   └── app/
│   │       ├── aboutme/       # About Me with enhanced timeline
│   │       ├── blog/          # Blog posts
│   │       ├── cloud/         # Cloud projects showcase
│   │       ├── components/    # Reusable components (Navbar, Footer, Slider)
│   │       ├── contact/       # Contact page
│   │       ├── elderlycare/   # Elderly care project details
│   │       ├── hackathons/    # Hackathon projects
│   │       ├── projects/      # Projects overview
│   │       ├── secureshare/   # SecureShare project details
│   │       └── page.tsx       # Home page
│   ├── public/
│   │   └── images/            # Logos, screenshots, tech icons
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── package.json
├── replit.md                  # Project documentation
└── README.md                  # This file
```

## 🎯 Key Highlights

### Enhanced About Me Timeline
The About Me page features a visually appealing timeline showcasing:

- **AWS** (May 2025 - August 2025)
  - SDE Intern - Purchase Order Auditor System for AWS Marketplace
  
- **Northeastern University** (January 2024 - December 2025)
  - Master's in Computer Software Engineering
  
- **Hexagon India Pvt. Ltd.** (July 2021 - December 2023)
  - Software Engineer - Java-based GIS solutions
  
- **Tata Consultancy Services** (September 2019 - June 2021)
  - Java Developer - TCS iON Cloud-Based Solutions
  
- **CRAC & Four C Plus** (June 2018 - July 2018 & February 2019 - August 2019)
  - Web Developer & Angular Developer Internships
  
- **BML Munjal University** (September 2015 - September 2019)
  - Bachelor's in Computer Engineering

Each entry displays company/university logos and duration badges on the opposite side of content for a balanced, professional look.

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x
- npm (comes with Node.js)

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the Replit webview or visit http://localhost:5000

### Available Scripts

```bash
npm run dev    # Start development server (port 5000)
npm run build  # Create production build
npm run start  # Start production server (port 5000)
npm run lint   # Run ESLint
```

## 📦 Deployment

### Replit Deployment (Recommended)
This project is pre-configured for Replit's autoscale deployment:

1. Click the **Publish** button in Replit
2. Your app will automatically build and deploy
3. Get a live URL to share your portfolio

Configuration:
- **Build**: `npm install && npm run build`
- **Start**: `npm run start`
- **Deployment Type**: Autoscale

### Alternative: Vercel Deployment
1. Connect your repository to Vercel
2. Vercel will auto-detect Next.js settings
3. Deploy with one click

## 🎨 Customization Guide

### Update Timeline Entries
1. Add logo images to `portfolio/public/images/`
2. Edit `portfolio/src/app/aboutme/page.tsx`
3. Follow the existing pattern for consistent layout

### Modify Content
- **Home**: `portfolio/src/app/page.tsx`
- **Projects**: `portfolio/src/app/projects/page.tsx`
- **Blog**: `portfolio/src/app/blog/page.tsx`
- **Contact**: `portfolio/src/app/contact/page.tsx`

### Change Port Settings
Update `portfolio/package.json` scripts:
```json
"dev": "next dev -p YOUR_PORT -H 0.0.0.0"
```

## 🔧 Configuration

### Replit Environment
- Port: 5000
- Host: 0.0.0.0 (required for Replit)
- Hot reload: Enabled
- Auto-restart: Configured

### Security
- No sensitive API keys required
- Static content only
- Client-side rendering

## 📊 Known Issues

- 11 npm package vulnerabilities (1 low, 4 moderate, 5 high, 1 critical)
- Run `npm audit` for details
- Consider `npm audit fix` for non-breaking fixes

## 🤝 Contributing

This is a personal portfolio project. Feedback and suggestions are welcome!

## 📝 License

Personal project - All rights reserved

## 📧 Contact

Visit the portfolio website and use the contact form to get in touch.

---

Built with ❤️ using Next.js and hosted on Replit
