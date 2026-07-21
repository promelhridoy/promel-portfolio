# Premium Portfolio — Alex Rivera

A production-ready, Awwwards-style portfolio built with **Next.js 16 (App Router)**, **React 19**,
**Tailwind CSS v4**, **Framer Motion**, and **Lenis** smooth scrolling.

> **Note on stack:** the brief listed both "JavaScript" and "TypeScript everywhere" — those
> conflict, so this project is built in **modern JavaScript (JSX)** with JSDoc typedefs for
> shape documentation (see `src/data/*.js`). Migrating to TypeScript later is a mechanical
> process: rename `.js`/`.jsx` → `.ts`/`.tsx` and convert the JSDoc typedefs into real
> `interface`/`type` declarations — the component structure itself won't need to change.

---

## ✨ Features

- Animated preloader, sticky glass navbar with scroll-spy active links
- Full-screen hero: typing effect, mouse-glow, floating gradients, magnetic CTAs
- About section with animated stat counters
- Skills grid with animated proficiency bars (Frontend / Backend / Database / Tools / Soft Skills)
- Featured projects grid + dedicated project detail page (`/projects/[slug]`)
- Animated experience timeline
- Responsive certificates grid with tilt-on-hover cards
- GitHub section (stats image, contribution graph, repo cards — see note below)
- Contact form with **React Hook Form + Zod** validation, API route, and success animation
- Dark mode by default via `next-themes`, with light mode toggle
- Lenis smooth scrolling, scroll-reveal animations throughout (Framer Motion)
- SEO: dynamic metadata, Open Graph, Twitter Cards, JSON-LD, `sitemap.xml`, `robots.txt`, canonical URLs
- Accessible: semantic landmarks, `aria-*` attributes, visible focus states, reduced-motion support
- Custom 404, global error boundary, route-level loading UI

---

## 🧱 Tech Stack

| Category | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Components | shadcn/ui-style primitives (CVA + Radix primitives) |
| Animation | Framer Motion (GSAP omitted — Framer Motion covers every animation need here without adding a second animation runtime; see note below) |
| Smooth Scroll | Lenis |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Theme | next-themes |

**Why no GSAP in the shipped code:** the brief says to use GSAP "only where necessary."
Every animation here — reveals, stagger, tilt, magnetic buttons, counters, scroll progress —
is well within Framer Motion's declarative API, so adding GSAP as a second animation
library would be unnecessary weight. If you later build something GSAP is uniquely suited
for (e.g. a complex SVG morph timeline or ScrollTrigger-pinned sequence), install `gsap`
(already listed in `package.json`) and add it inside a small isolated component — don't
mix it into components already driven by Framer Motion.

---

## 📦 Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in your values
cp .env.example .env.local

# 3. Run the dev server
npm run dev

# 4. Open http://localhost:3000
```

### Required local setup before going live

1. **Resume** — replace `public/resume-placeholder.txt` with a real `public/resume.pdf`.
2. **Profile image** — replace the Unsplash placeholder URL in `src/components/sections/Hero.jsx`
   with your own photo (drop it in `public/` and use a local path for best performance).
3. **Personal data** — edit `src/lib/metadata.js` (name, bio, social links) and everything
   in `src/data/` (projects, skills, experience, certificates, stats).
4. **Contact form email delivery** — the API route at `src/app/api/contact/route.js` logs
   submissions in dev. Wire up a provider (Resend, Nodemailer, Postmark, etc.) using the
   commented example inside that file, and set `RESEND_API_KEY` / `CONTACT_EMAIL_TO` in `.env.local`.
5. **GitHub section** — `src/components/sections/GithubSection.jsx` uses placeholder repo
   data plus public image-based widgets (github-readme-stats, ghchart). For live repo data,
   replace `REPOS_PLACEHOLDER` with a fetch to `https://api.github.com/users/<username>/repos`
   inside a Server Component (no API key needed for public repos, but add one via
   `Authorization: Bearer <token>` if you hit rate limits).

---

## 📁 Folder Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.js                # Root layout: fonts, providers, JSON-LD
│   ├── page.js                  # Home page — composes all sections
│   ├── loading.js                # Route-level loading UI
│   ├── error.js                  # Global error boundary
│   ├── not-found.js              # Custom 404 page
│   ├── sitemap.js                # Dynamic sitemap.xml
│   ├── robots.js                  # Dynamic robots.txt
│   ├── globals.css               # Tailwind v4 theme tokens + base styles
│   ├── api/contact/route.js      # Contact form submission handler
│   └── projects/[slug]/page.js   # Project detail page (SSG via generateStaticParams)
│
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── sections/                # One component per homepage section
│   ├── ui/                      # shadcn-style primitives: Button, Card, Badge, Input...
│   └── shared/                  # Reusable animation/utility components
│       (SectionHeading, LoadingScreen, MagneticButton, TiltCard,
│        ScrollProgress, AnimatedCounter)
│
├── providers/                   # ThemeProvider (next-themes), SmoothScrollProvider (Lenis)
├── hooks/                       # useLenis, useActiveSection, useMousePosition, useTypingEffect
├── lib/                         # utils (cn), motion (Framer variants), metadata, validations
├── data/                        # Content as data: projects, skills, experience, certificates, stats
└── constants/                   # Nav links, social links, static config
```

**Why this structure:** every section component only imports from `data/` and `lib/` —
never hardcodes copy — so updating your portfolio's content means editing files in `data/`,
not touching JSX. UI primitives in `components/ui` are intentionally dumb/reusable; all
page-specific composition lives in `components/sections`.

---

## 🧩 Component Documentation

| Component | Responsibility |
|---|---|
| `LoadingScreen` | Simulated-progress preloader, exits via Framer `AnimatePresence` |
| `Navbar` | Sticky glass nav, scroll-spy active link via `useActiveSection`, mobile drawer |
| `Hero` | Typing effect (`useTypingEffect`), mouse-glow (`useMousePosition`), magnetic CTAs |
| `About` | Bio + `AnimatedCounter` stat cards |
| `Skills` | Grouped skill cards with animated proficiency bars |
| `Projects` | Grid of `TiltCard`s linking to `/projects/[slug]` |
| `Experience` | Vertical animated timeline built from `data/experience.js` |
| `Certificates` | Responsive tilt-card grid |
| `GithubSection` | Stats/contribution images + repo cards |
| `Contact` | RHF + Zod form, posts to `/api/contact`, success/error states |
| `Footer` | Sitemap links + social icons |

Shared primitives (`SectionHeading`, `MagneticButton`, `TiltCard`, `ScrollProgress`,
`AnimatedCounter`) are animation-only wrappers with no business logic, so they're safe to
reuse anywhere.

---

## ♿ Accessibility & 🔍 SEO Notes

- All interactive icons have `aria-label`s; the active nav link uses `aria-current="page"`.
- `prefers-reduced-motion` is respected globally (see `globals.css` and `LoadingScreen`).
- Focus outlines are visible (`:focus-visible` styled with the accent color).
- Metadata (title, description, Open Graph, Twitter Card, canonical URL) is generated per-page
  via `buildMetadata()` in `src/lib/metadata.js` — call it in any new page's `generateMetadata`.
- `sitemap.js` / `robots.js` are dynamic Next.js route handlers — no static XML to maintain.
- JSON-LD `Person` schema is injected in the root layout for rich search results.

---

## 🚀 Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add environment variables from `.env.example` in the Vercel dashboard
   (Project Settings → Environment Variables).
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain (used for canonical URLs,
   Open Graph, and the sitemap).
5. Deploy — Vercel auto-detects Next.js, no build config needed.

For a custom domain, add it under Project Settings → Domains and update
`NEXT_PUBLIC_SITE_URL` accordingly, then redeploy.

---

## 🏗️ Architectural Decisions

- **Tailwind v4 CSS-first config** (`@theme` in `globals.css`) instead of `tailwind.config.js` —
  v4's recommended approach, and it keeps every design token (colors, fonts, shadows) in one file.
- **Content as data, not JSX** — every section pulls from `src/data/*.js`, so recruiters'
  first impression doesn't depend on you hunting through markup to update a bullet point.
- **Framer Motion over GSAP by default** — one animation library, one mental model, smaller
  bundle. GSAP stays available in `package.json` for the rare case you need ScrollTrigger-level
  control.
- **Server Components by default** — only components that need interactivity (`"use client"`)
  opt into client rendering (Navbar, Hero, form, animated sections). The project detail page
  and layout stay server-rendered for faster TTFB and smaller client JS.
- **Shared Zod schema** — `src/lib/validations.js` is imported by both the client form and the
  API route, so validation rules can never drift between the two.
