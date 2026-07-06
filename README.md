<div align="center">

<img src="public/Logo.png" alt="Kenforest Limited" height="90" />

<br />
<br />

# Kenforest Limited

### Nurturing Nature. Sustaining Future.

Premium East African fresh produce — avocados, mangoes, passion fruit & macadamia — exported to Europe, the Middle East and Asia.

<br />

[![Live Site](https://img.shields.io/badge/Live%20Site-kenforest.vercel.app-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://kenforest.vercel.app)

<br />

[![Node](https://img.shields.io/badge/Node-%3E%3D22.12.0-brightgreen?logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![License](https://img.shields.io/badge/License-Proprietary-ef4444)](./LICENSE)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Site](#live-site)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Certifications](#certifications)
- [Contact](#contact)
- [License](#license)

---

## Overview

This is the official marketing and enquiry website for **Kenforest Limited**, a Kenya-based fresh produce grower, processor and exporter. Built as a server-side rendered (SSR) application with TanStack Start, React 19 and Tailwind CSS v4, the site serves international buyers across Europe, the Middle East and Asia.

**What the site covers:**
- Export produce portfolio — avocados (Hass, Fuerte, Pinkerton, Reed, Jumbo), mangoes, passion fruit and macadamia nuts
- Cold-pressed extra virgin avocado oil — bulk, HORECA and private-label
- Agronomy consultation — orchard establishment, GlobalG.A.P. readiness, crop management
- Export certifications, market reach and supply chain transparency
- Direct buyer enquiry channel

---

## Live Site

> 🌍 **[https://kenforest.vercel.app](https://kenforest.vercel.app)**

Deployed on Vercel using the Nitro `vercel` preset with full SSR. Custom domain: [www.kenforestlimited.com](https://www.kenforestlimited.com)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, trust stats, produce overview, export markets, process timeline, certifications, gallery, testimonial, CTA |
| `/products` | Avocados (5 varieties), mangoes, passion fruit, macadamia specs; cold-pressed avocado oil; private-label offering |
| `/consultation` | Agronomy services, orchard establishment, GlobalG.A.P. readiness, engagement packages, interactive FAQ |
| `/about` | Company story, mission, vision, values, sustainability metrics, what sets Kenforest apart |
| `/contact` | Head office details, enquiry form with post-submit confirmation state |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) — SSR with file-based routing |
| Routing | [TanStack Router](https://tanstack.com/router) — type-safe, file-based |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — oklch design tokens |
| Components | [Radix UI](https://www.radix-ui.com) primitives via [shadcn/ui](https://ui.shadcn.com) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) — staleTime 5 min, gcTime 10 min |
| Build Tool | [Vite 8](https://vite.dev) |
| SSR Adapter | [Nitro](https://nitro.build) — `vercel` preset |
| Language | TypeScript 5 — strict mode, `noUnusedLocals`, `noUnusedParameters` |
| Linting | ESLint 9 + typescript-eslint |
| Formatting | Prettier |
| Fonts | Playfair Display · Inter via [Fontsource](https://fontsource.org) |
| Deployment | [Vercel](https://vercel.com) |

---

## Prerequisites

| Requirement | Version |
|---|---|
| Node.js | `>= 22.12.0` |
| npm | `>= 9` |

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:
> ```bash
> nvm install 22 && nvm use 22
> ```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mikemarvel-stack/Kenforest.git
cd Kenforest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> No environment variables are required. The contact form uses a `mailto:` link with no backend dependency.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR on port 3000 |
| `npm run build` | Production build — outputs to `.output/` |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format all files with Prettier |

---

## Project Structure

```
Kenforest/
├── public/
│   ├── Logo.png              # Brand logo (served at /Logo.png)
│   └── Favicon.png           # Browser favicon
├── src/
│   ├── assets/               # Static images — orchard, packhouse, products, export
│   ├── components/
│   │   ├── site/             # SiteHeader, SiteFooter, PageShell, PageHero
│   │   └── ui/               # Radix/shadcn UI primitives
│   ├── hooks/                # useIsMobile — SSR-safe viewport hook
│   ├── lib/                  # cn() utility, error capture, error page renderer
│   ├── routes/               # File-based routes (TanStack Router)
│   │   ├── __root.tsx        # Root layout, fonts, meta tags, error boundary
│   │   ├── index.tsx         # Home page
│   │   ├── products.tsx      # Products page
│   │   ├── consultation.tsx  # Consultation & agronomy page
│   │   ├── about.tsx         # About page
│   │   └── contact.tsx       # Contact page
│   ├── router.tsx            # Router + QueryClient configuration
│   ├── routeTree.gen.ts      # Auto-generated route tree — do not edit manually
│   ├── server.ts             # SSR server entry with h3 error handling
│   ├── start.ts              # TanStack Start middleware
│   └── styles.css            # Tailwind v4 theme + oklch design tokens
├── .gitignore
├── eslint.config.js
├── tsconfig.json
├── vercel.json               # Vercel deployment configuration
├── vite.config.ts            # Vite + TanStack Start + Nitro vercel preset
└── package.json
```

---

## Deployment

The project is deployed on **Vercel** using the Nitro `vercel` preset for full SSR support.

### Deploy your own instance

1. Fork or clone the repository and push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects all settings from `vercel.json` — no manual configuration needed
4. In Project → Settings → General, set **Node.js version** to `22.x`
5. Click **Deploy**

### Build output

| Path | Contents |
|---|---|
| `.output/public/` | Static assets — served by Vercel CDN |
| `.output/server/` | SSR function — runs on Vercel Node runtime |

### Environment variables

None required. All features run without any server-side secrets.

---

## Certifications

Kenforest operates under the following internationally recognised standards:

| Certification | Scope |
|---|---|
| **GlobalG.A.P.** | Good Agricultural Practices — farm-level certified |
| **KEPHIS** | Kenya Plant Health Inspectorate — export registration |
| **HCD** | Horticultural Crops Directorate — licensed exporter |
| **GRASP** | GlobalG.A.P. Risk Assessment on Social Practice |

---

## Contact

| | |
|---|---|
| 📧 Email | [kenforestlimited@gmail.com](mailto:kenforestlimited@gmail.com) |
| 📞 Phone | [+254 711 281 829](tel:+254711281829) |
| 📍 Address | P.O. Box 50729-00232, Nairobi, Kenya |
| 🌐 Website | [www.kenforestlimited.com](https://www.kenforestlimited.com) |
| 🕐 Hours | Mon – Fri · 08:00 – 17:00 EAT |

---

## License

Copyright © 2024–present **Kenforest Limited**. All rights reserved.

This codebase and all associated content are proprietary. Unauthorised copying, modification, distribution or use is strictly prohibited.

See [LICENSE](./LICENSE) for full terms.
