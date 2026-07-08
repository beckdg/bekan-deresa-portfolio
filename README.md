<div align="center">
  <img src="public/images/about.jpg" alt="Bekan Deresa" width="120" style="border-radius: 50%;" />
  <h1 align="center">Bekan Deresa</h1>
  <p align="center">
    <strong>Full-Stack & Mobile Developer | AI & ERP Specialist</strong>
    <br />
    Addis Ababa & Bishoftu, Ethiopia
  </p>

  <p align="center">
    <a href="mailto:bekanderesa27@gmail.com">Email</a>
    ·
    <a href="https://github.com/beckdg">GitHub</a>
    ·
    <a href="https://linkedin.com/in/beckdg">LinkedIn</a>
  </p>
</div>

---

## Portfolio Website

A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Showcases projects, skills, experience, and services across full-stack web development, mobile apps, ERP systems, and AI/agent work.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS 3 (PostCSS) |
| Animations | Framer Motion |
| Build | Vite 6 |
| Icons | React Icons |

### Features

- Dark / light theme toggle with persisted preference
- Scroll progress bar and active section navigation
- Animated hero with typing effect and availability badge
- Animated stats, scroll reveals, and staggered section entrances
- Grouped skills by category (Frontend, Mobile, Backend, AI, DevOps)
- Project showcase with category filters and optional thumbnails
- Testimonials carousel
- Contact form with validation (opens mail client)
- SEO meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- Accessible markup and reduced-motion support

### Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Hero | Intro, typing animation, CTAs, social links |
| 02 | About | Bio, education, focus areas, profile photo |
| — | Stats | Animated count-up highlights |
| 03 | Services | Web, Mobile, ERP, and AI service cards |
| 04 | Skills | Tech stack grouped by category |
| 05 | Experience | Timeline with role highlights |
| 06 | Work | Filterable project cards with live demos |
| 07 | Testimonials | Auto-rotating client feedback carousel |
| 08 | Contact | Validated form and contact info |

### Project Structure

```
├── public/
│   ├── images/          # Profile & project thumbnails
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/      # UI sections and layout
│   │   └── ui/          # Reveal, SectionHeading
│   ├── data/
│   │   └── portfolio.ts # Single source of truth for all content
│   ├── hooks/           # useTheme, useActiveSection
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Design tokens & global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

### Getting Started

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/beckdg/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Run TypeScript without emitting files |

### Customizing Content

All portfolio content lives in **`src/data/portfolio.ts`** — profile info, social links, skills, experience, projects, services, testimonials, and stats. Edit that file to update the site without touching components.

### Adding Project Images

1. Place images in `public/images/` (e.g. `public/images/flikchat.jpg`)
2. Add an `image` field to the project in `src/data/portfolio.ts`:

```ts
{
  title: "FlikChat",
  // ...
  image: "/images/flikchat.jpg",
}
```

If `image` is omitted, the card falls back to a gradient thumbnail with the project's first letter. Recommended size: ~800×450 (16:9).

### Build & Deploy

```bash
npm run build
npm run preview
```

The `dist/` folder is ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

### Contact

- **Email:** [bekanderesa27@gmail.com](mailto:bekanderesa27@gmail.com)
- **GitHub:** [github.com/beckdg](https://github.com/beckdg)
- **LinkedIn:** [linkedin.com/in/beckdg](https://linkedin.com/in/beckdg)
- **Location:** Addis Ababa & Bishoftu, Ethiopia

---

Designed & built by Bekan Deresa
