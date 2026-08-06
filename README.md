# Pichakorn Chukiew Tuapennot — Portfolio

A production-ready Next.js 14 (App Router) portfolio site for artist **Pichakorn Chukiew Tuapennot**, covering painting, sculpture, and drawing. Converted from a single-file React component into a fully structured, typed Next.js project.

## Tech stack

- **Next.js 14** (App Router, TypeScript, React Server Components)
- **Tailwind CSS** (utility classes used for a few layout helpers; most visual design lives in `app/globals.css`, matching the original hand-authored styles)
- **next/font** for self-hosted Google Fonts (Fraunces + Inter — no external font requests at runtime)
- **lucide-react** for icons

## Project structure

```
.
├── app/
│   ├── layout.tsx          # Root layout: fonts, <Nav>, <Footer>, metadata
│   ├── page.tsx            # Home
│   ├── not-found.tsx       # Custom 404
│   ├── icon.svg            # Favicon
│   ├── work/
│   │   ├── page.tsx        # Work grid (filter + lightbox)
│   │   └── [id]/page.tsx   # Individual artwork detail page (dynamic route)
│   ├── cv/
│   │   └── page.tsx        # CV Profile (bio + artist statement)
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Nav.tsx              # Sticky nav, active-link highlighting, mobile menu
│   ├── Footer.tsx
│   ├── Reveal.tsx           # Scroll-reveal wrapper (IntersectionObserver)
│   ├── WallLabel.tsx        # Recurring "gallery wall label" motif
│   ├── WorkGrid.tsx         # Client component: category filter + lightbox
│   └── ContactForm.tsx      # Client component: contact form state
├── lib/
│   └── data.ts              # Typed content: artist bio, works, series, helpers
├── styles/
│   └── globals.css          # All site styles (Tailwind directives + custom CSS)
├── public/
│   └── robots.txt
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── .eslintrc.json
```

## Routing

The original single-page component used internal state to fake navigation. This has been converted to real Next.js routes so each page is independently addressable, shareable, and server-rendered:

| Route          | Description                              |
| -------------- | ----------------------------------------- |
| `/`            | Home — hero, intro, Exhibition highlights |
| `/work`        | Full work grid with category filter & lightbox |
| `/work/[id]`   | Individual artwork detail page (statically generated for every work) |
| `/cv`          | CV Profile — biography and artist statement |
| `/contact`     | Contact form |

## Getting started locally

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # run ESLint
```

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel
```

Follow the prompts; Vercel auto-detects the Next.js framework and build settings.

**Option B — Git + Vercel dashboard**

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No extra environment variables are required for the current build.
4. Click **Deploy**.

No environment variables, database, or external services are required — the site is fully static/server-rendered content out of the box.

## Deploying to HostAtom (or other Plesk/shared hosting)

See **[DEPLOY-HOSTATOM.md](./DEPLOY-HOSTATOM.md)** for step-by-step instructions covering both a Node.js-enabled Plesk plan (full SSR/SSG via the included `server.js`) and a plain static-hosting plan (static export).

## Notes on the conversion

- Artwork images are placeholder images from `picsum.photos`, matching the original design. `next.config.js` whitelists this host under `images.remotePatterns` so `next/image` (used for the hero image) works correctly. Swap in real artwork URLs (or local files in `public/`) when available.
- The "Download CV (PDF)" button is currently a no-op placeholder, matching the source component. Wire it up to a real PDF file (e.g. place a file in `public/` and link to it) when ready.
- The contact form updates local state to show a confirmation message on submit; no email is actually sent. Connect it to an API route, email service (e.g. Resend, SendGrid), or form backend (e.g. Formspree) for production use.
- Fonts (Fraunces, Inter) are loaded via `next/font/google`, which self-hosts them at build time — no runtime request to Google Fonts, and no layout shift.
