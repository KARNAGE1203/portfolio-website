# Danish Saini — Portfolio

My personal Portfolio Website, as a UX/UI Designer & Frontend Developer based in Dubai. Built with React and Vite, deployed on Netlify.

**Live site:** [danishsaini.com](https://danishsaini.com)

## Features

- **Home** — animated hero with a canvas-based network background, featured projects, about preview, book promo, and contact CTA
- **Projects** — a `/projects` listing page with a dedicated case study page per project (LearningZone, FindMyTutor, Little Lemon), each covering process, screenshots, tech stack, and key decisions
- **About** — journey timeline, skills, experience, education, and certifications
- **Book** — promo section for an upcoming book
- **404 page** — styled not-found page with a catch-all route, so old/broken links land somewhere useful
- Scroll-triggered reveal animations, image-loading fallbacks, and dark theme design system with color-coded accents
- Fully responsive, accessible navigation with mobile menu

## Tech Stack

- [React 18](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite 6](https://vitejs.dev/)
- Plain CSS with a shared design-token system (`src/index.css`)
- Deployed on [Netlify](https://www.netlify.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/        # Shared UI components (Nav, Hero, Footer, backgrounds, icons, etc.)
│   └── about/          # Components specific to the About page
├── pages/              # Route-level pages
│   └── projects/        # Case study pages + shared ProjectPage template
├── data/               # Static content (e.g. projects list)
├── hooks/              # Custom hooks (e.g. useInView for scroll reveals)
├── App.jsx             # Routes
└── main.jsx            # Entry point

public/
└── img/                # Project screenshots and images
```

## Deployment

The site is deployed on Netlify, configured via [`netlify.toml`](netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist`
- SPA catch-all redirect so React Router handles all routes

Pushing to `main` triggers an automatic Netlify deploy.

## Contact

- Email: [sainidanish1229@gmail.com](mailto:sainidanish1229@gmail.com)
- GitHub: [@KARNAGE1203](https://github.com/KARNAGE1203)
