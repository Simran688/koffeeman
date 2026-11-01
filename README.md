# KoffeeMan website

Public website for **Koffee Man** (also KoffeeMan), a café in NSP, Pitampura, Delhi.

This repository rebuilds the approved design prototype as a Next.js App Router app. The HTML prototype in `reference/` is a design reference only and is not served.

Sample photographs currently in `public/images/` are illustrative placeholders extracted from the prototype. Replace those files with original photography later; keep `src/data/images.ts` as the path map.

## Stack

- React + Next.js App Router + TypeScript (`strict`)
- Tailwind CSS
- Vitest + React Testing Library
- Playwright (browser tests)
- npm

There is no backend, cart, login, or payment flow in v1.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local preview |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run test` | Unit/component tests |
| `npm run test:e2e` | Playwright (install browsers once with `npx playwright install`) |
| `npm run build` | Production build |
| `npm run audit:prices` | Fail if currency/price symbols appear in source |

No environment secrets are required. See `.env.example`.

## Folder map

- `reference/` — owner prototype (not public)
- `public/images/` — replaceable brand, hero, menu, gallery assets
- `src/app/` — routes
- `src/components/` — layout, UI, menu, sections, locations
- `src/data/` — menu, locations, events, site config, image paths
- `src/lib/` — small helpers
- `tests/e2e/` — Playwright
- `.cursor/rules/` — agent constraints (no prices, tokens, security, git approval)

## Git

Work on feature branches from `develop`. Do not commit, merge, push, or deploy without an explicit approval from the owner.

## Deploy

Vercel is the intended host. Do not deploy until the owner approves that phase.
