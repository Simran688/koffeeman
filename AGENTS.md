<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# KoffeeMan website — agent rules

Public café website for Koffee Man (NSP, Pitampura). Rebuild the approved prototype in Next.js. Do not ship `reference/koffeeman-design-review.html` as the application.

## Never

- Do not add menu prices, rates, currency symbols, or `price` fields.
- Do not invent business facts (hours, coordinates, GD-ITL unit numbers, store counts, awards, testimonials, direct Zomato listing URLs).
- Do not add cart, login, payments, CMS, contact forms, APIs, or server actions in v1.
- Do not commit, merge, push, or deploy without an explicit user approval phrase.
- Do not use `git add .` blindly; stage reviewed paths only.
- Do not copy competitor branding (Cascara, Starbucks, Tim Hortons).
- Do not claim sample/prototype photos are real KoffeeMan photography.

## Always

- Centralise copy, menu, locations, and URLs in `src/data/`.
- Keep images replaceable via `src/data/images.ts`.
- Use `tel:+919811161923` for franchise/events Contact Us.
- External links: `rel="noopener noreferrer"`.
- Work one feature branch at a time from `develop`.
- After each feature: lint, typecheck, test, build, then STOP for review.

## Design

Modern Vintage Café: cream `#F4E4CA`, paper `#FFF8EE`, espresso `#392929`, coffee `#7F5738`, gold `#D6B66C` (sparing). Headings Bree Serif, body DM Sans, Lora italic for short signatures only.
