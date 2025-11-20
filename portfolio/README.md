# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, and TailwindCSS, showcasing professional experience, projects, blog posts, and educational background.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Timeline**: About Me page features an enhanced timeline with company/university logos and duration badges
- **Project Showcase**: Detailed project pages with images, tech stacks, and descriptions
- **Blog Section**: Share thoughts and technical articles
- **Contact Form**: Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.23 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4.1
- **UI Components**: NextUI 2.x
- **Icons**: React Icons 5.2.1
- **Animations**: Framer Motion 11.2.10
- **Carousel**: React Slick 0.30.2

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── aboutme/         # About Me page with timeline
│       ├── blog/            # Blog posts
│       ├── cloud/           # Cloud projects
│       ├── components/      # Reusable components
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── Slider.tsx
│       ├── contact/         # Contact page
│       ├── elderlycare/     # Elderly care project
│       ├── hackathons/      # Hackathon projects
│       ├── projects/        # Projects overview
│       ├── secureshare/     # SecureShare project
│       └── page.tsx         # Home page
├── public/
│   └── images/              # Static assets, logos, screenshots
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # TailwindCSS configuration
└── package.json             # Dependencies
```

## 🎨 Recent Updates (November 20, 2025)

### About Me Timeline Enhancement
- Added company and university logos to the timeline
- Implemented duration badges for each experience/education entry
- Responsive design: logos visible on desktop, hidden on mobile
- Color-coded timeline dots for different phases

### Timeline Entries
- **AWS** (May 2025 - August 2025) - SDE Intern
- **Northeastern University** (January 2024 - December 2025) - Master's in Computer Software Engineering
- **Hexagon India** (July 2021 - December 2023) - Software Engineer
- **Tata Consultancy Services** (September 2019 - June 2021) - Java Developer
- **CRAC & Four C Plus** (June 2018 - July 2018 & February 2019 - August 2019) - Internships
- **BML Munjal University** (September 2015 - September 2019) - Bachelor's in Computer Engineering

### Replit Migration
- Configured for Replit environment
- Updated port settings to 5000 with host binding to 0.0.0.0
- Set up autoscale deployment configuration
- Added workflow for automatic development server startup

## 🚀 Getting Started

### Running Locally on Replit

The project is pre-configured to run on Replit. The development server automatically starts on port 5000:

```bash
npm run dev
```

Open the Replit webview to see the website.

### Running Locally on Your Machine

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Available Scripts

- `npm run dev` - Start development server (port 5000)
- `npm run build` - Create production build
- `npm run start` - Start production server (port 5000)
- `npm run lint` - Run ESLint

## 📦 Deployment

### Deploy on Replit
This project is configured for Replit's autoscale deployment:
- Click the "Publish" button in Replit
- Your app will be built and deployed automatically
- Get a live URL to share your portfolio

### Deploy on Vercel
Alternatively, deploy to Vercel:
```bash
npm run build
```
Then connect your repository to Vercel for automatic deployments.

## 🔧 Configuration

### Port Settings
The application runs on port 5000 with host 0.0.0.0 for Replit compatibility. To change the port, update the scripts in `package.json`:

```json
"dev": "next dev -p 5000 -H 0.0.0.0",
"start": "next start -p 5000 -H 0.0.0.0"
```

## 📝 Customization

### Adding Timeline Entries
To add new experience/education entries to the About Me page:
1. Add company/university logo to `public/images/`
2. Update the timeline section in `src/app/aboutme/page.tsx`
3. Follow the existing pattern for layout consistency

### Updating Content
- **Home Page**: Edit `src/app/page.tsx`
- **Projects**: Update `src/app/projects/page.tsx`
- **Blog**: Add new blog posts in `src/app/blog/`
- **Contact Info**: Modify `src/app/contact/page.tsx`

## 📄 License

This is a personal portfolio project.

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

## 📧 Contact

Visit the portfolio website and use the contact form to get in touch.
