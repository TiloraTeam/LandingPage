# TILORA website

Next.js (App Router) + React + TypeScript + Tailwind CSS. English and Persian (RTL) with a working language toggle.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Where to change things
| What | File |
|---|---|
| **All colours** | `src/config/colors.css` (the only place with colour values; Tailwind utilities like `bg-navy` read from it) |
| Section order / hide a section | `src/config/sections.ts` (`enabled: false` hides, reorder by moving lines) |
| English text, team, projects, services, tools, contact links | `src/data/content.en.ts` |
| Persian text | `src/data/content.fa.ts` (same shape; TypeScript errors if a field is missing) |
| Site name, description, URL | `src/config/site.ts` (or env `NEXT_PUBLIC_SITE_URL`) |
| Layout and component styles | `src/styles/site.css` |
| Logo | `src/components/Logo.tsx` (official geometry) and `public/brand/*.svg` |

**Add a team member / project / service:** add an object to the matching array in both `content.en.ts` and `content.fa.ts`. The team grid is built for exactly five members, following the logo's arrangement.

**Change a colour:** edit its value in `src/config/colors.css`. Do not write hex values anywhere else.

## Contact form
It validates (zod) and has a honeypot field, but no email service is connected. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to a URL that accepts a JSON POST (`name, email, subject, message`) and the form will send. Until then it tells the visitor it is not connected. See `src/lib/contact.ts`.

## Placeholders
Team names, photos, projects, contact details and the tools list are placeholders marked as such on the page. Nothing in them is a claim about the team.

## Not built yet
Visual editor (live preview, undo/redo, import/export), theme and layout presets, project detail pages, image uploads, ESLint setup, and an Open Graph image.
