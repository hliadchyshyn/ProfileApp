# Ihor Hliadchyshyn — Portfolio PWA

Personal portfolio site built as a Progressive Web App. Dark-themed single-page scroll with an RPG-inspired career timeline, EN/UA language toggle, and modern CSS features.

## Stack

- **React 18** + **TypeScript**
- **Vite 6**
- **Redux Toolkit** — scroll spy
- **react-i18next** — EN/UA translations
- **SCSS Modules** — component-scoped styles
- **vite-plugin-pwa** — service worker, offline support, installable

## Features

- RPG quest timeline — career entries with rarity tiers (common → legendary)
- EN / UA language toggle with View Transitions API
- Scroll-driven progress bar (`animation-timeline: scroll()`)
- Glassmorphism navbar with active section highlight
- PWA — installable, offline-ready, custom icons
- SEO meta + Open Graph + Twitter Card
- `prefers-reduced-motion` support

## Project Structure

```
ProfileAPp/
├── public/
│   ├── icons/          # PWA icons (192, 512)
│   ├── locales/
│   │   ├── en/         # English translations
│   │   └── ua/         # Ukrainian translations
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── LanguageToggle/
│   │   ├── ScrollProgress/
│   │   ├── SectionWrapper/
│   │   ├── RpgNode/
│   │   └── SkillCard/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Skills/
│   │   └── Contact/
│   ├── data/           # profile, experience, skills
│   └── assets/styles/  # SCSS design system
├── index.html
└── vite.config.ts
```

## Dev

```bash
cd ProfileAPp
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Deploy

Configured for **DigitalOcean App Platform** via `.do/app.yaml`.

Build command: `cd ProfileAPp && npm install && npm run build`
Output directory: `ProfileAPp/dist`

Push to `main` → auto-deploy.
