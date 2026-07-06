# Kenforest Limited

> **Nurturing Nature. Sustaining Future.**

Official website for **Kenforest Limited** — a Kenya-based avocado grower, processor and exporter headquartered in Kiambu. We grow, cold-press and export premium Hass avocados and extra-virgin avocado oil to buyers across Europe, the Middle East and Asia.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, trust stats, products overview, markets, process timeline, certifications, gallery, testimonial |
| `/products` | Hass avocado export specs, extra-virgin avocado oil details, private-label offering |
| `/consultation` | Agronomy services, orchard establishment, GlobalG.A.P. readiness, engagement packages |
| `/about` | Company story, mission, vision, values, sustainability metrics |
| `/contact` | Head office details, enquiry form |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| UI | [React 19](https://react.dev) + [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [Radix UI](https://www.radix-ui.com) primitives via [shadcn/ui](https://ui.shadcn.com) |
| Data fetching | [TanStack Query](https://tanstack.com/query) |
| Build tool | [Vite 8](https://vite.dev) + [Rolldown](https://rolldown.rs) |
| Language | TypeScript 5 (strict mode) |
| Linting | ESLint 9 + typescript-eslint |
| Formatting | Prettier |
| Fonts | Playfair Display (display) · Inter (body) via Fontsource |

---

## Prerequisites

- **Node.js** `>=22.12.0` (required by Vite 8 and TanStack Start)
- **npm** `>=9`

> Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:
> ```bash
> nvm install 22 && nvm use 22
> ```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mikemarvel-stack/Kenforest.git
cd kenforest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build
npm run build:dev  # Development build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run format     # Format all files with Prettier
```

---

## Project Structure

```
kenforest/
├── public/
│   ├── Logo.png          # Brand logo
│   └── Favicon.png       # Browser favicon
├── src/
│   ├── assets/           # Static images (avocados, packhouse, etc.)
│   ├── components/
│   │   ├── site/         # SiteHeader, SiteFooter, PageShell, PageHero
│   │   └── ui/           # Radix/shadcn UI primitives
│   ├── hooks/            # useIsMobile
│   ├── lib/              # utils, error handling, error page
│   ├── routes/           # File-based routes (TanStack Router)
│   │   ├── __root.tsx    # Root layout, fonts, meta, error boundary
│   │   ├── index.tsx     # Home page
│   │   ├── products.tsx  # Products page
│   │   ├── consultation.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── router.tsx        # Router + QueryClient setup
│   ├── server.ts         # SSR server entry (h3 error wrapper)
│   ├── start.ts          # TanStack Start middleware
│   └── styles.css        # Tailwind v4 theme + design tokens
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Environment

No environment variables are required to run the project locally. The contact form uses a `mailto:` link and requires no backend.

---

## Certifications

Kenforest operates under the following standards:

- **GlobalG.A.P.** — Good Agricultural Practices, farm-level certified
- **KEPHIS** — Kenya Plant Health Inspectorate export registration
- **HCD** — Horticultural Crops Directorate licensed exporter
- **GRASP** — GlobalG.A.P. Risk Assessment on Social Practice

---

## Contact

| | |
|---|---|
| Email | [kenforestlimited@gmail.com](mailto:kenforestlimited@gmail.com) |
| Phone | [+254 711 281 829](tel:+254711281829) |
| Address | P.O. Box 50729-00232, Kiambu, Kenya |
| Website | [www.kenforestlimited.com](https://www.kenforestlimited.com) |
| Hours | Mon – Fri · 08:00 – 17:00 EAT |

---

## License

Copyright © 2024–present **Kenforest Limited**. All rights reserved.

See [LICENSE](./LICENSE) for details.
