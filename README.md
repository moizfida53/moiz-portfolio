# Moiz Dudhbhai — Portfolio

Personal portfolio built with **Angular 21**, **SCSS** and **Bootstrap 5.3** (compiled from source).

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/moiz-portfolio/browser
```

Requires Node.js 20.19+, 22.12+ or 24+.

## Edit the content

Everything on the site comes from one file:

```
src/app/core/data/portfolio.data.ts
```

- `PROFILE` — name, title, tagline, contact links, about text
- `SKILLS`, `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`
- `PROJECTS` — each project's card text, case-study sections, architecture flow and stack

To add a **Download CV** button, put a PDF in `public/` (e.g. `public/Moiz_Dudhbhai_CV.pdf`)
and set `cvUrl: '/Moiz_Dudhbhai_CV.pdf'` in `PROFILE`. Use a version without your home address.

Replace `public/img/moiz.jpg` with a higher-resolution square photo if you have one.

## Project structure

```
src/
├── styles/                 Sass partials: tokens, mixins, colour modes, base
├── styles.scss             Entry: tokens → Bootstrap source → theme → base
└── app/
    ├── core/
    │   ├── data/           portfolio.data.ts (all content)
    │   ├── models/         typed interfaces
    │   └── services/       PortfolioService (signals + filter), ThemeService (light/dark)
    ├── shared/directives/  RevealDirective (scroll fade-in via IntersectionObserver)
    ├── layout/             navbar (mobile menu, theme toggle), footer
    └── features/
        ├── home/           hero, about, skills, experience, projects, certifications, contact
        ├── project-detail/ /projects/:slug case-study page
        └── not-found/
```

Highlights: standalone components, signals and `computed` state, lazy-loaded routes,
route-param → input binding, anchor scrolling, Bootstrap 5.3 colour modes, fluid type
with `clamp()`, accessible focus states and `prefers-reduced-motion` support.

## Deploy to Render (free static site)

1. Push this folder to a GitHub repository.
2. In Render: **New → Blueprint**, pick the repo. `render.yaml` sets everything up:
   - Build: `npm ci && npm run build`
   - Publish directory: `dist/moiz-portfolio/browser`
   - Rewrite `/*` → `/index.html` so `/projects/...` links work on refresh
3. Your site goes live at `https://moiz-portfolio.onrender.com` (or similar).
   Every push to `main` redeploys automatically.

Prefer manual setup? **New → Static Site**, same build command and publish directory,
then add a Rewrite rule `/*` → `/index.html` under **Redirects/Rewrites**.
