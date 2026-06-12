# BranStan

Marketing consultancy site for **BranStan** — an agentic AI marketing partner for ambitious founders. Six specialist agents, one growth system.

Built with **Next.js 14 (App Router)** + **Tailwind CSS**. Deployed on **Vercel**.

- Live: https://bran-stan.com
- Framework: Next.js 14.2 (App Router, React Server Components)
- Styling: Tailwind CSS v3 (compiled, no CDN)
- Fonts: Space Grotesk (display) + Inter (body) via `next/font` — self-hosted, preloaded
- Forms: Formspree (`xredrpvk`)
- Hosting: Vercel

---

## Local development

You need **Node.js 18.17 or later**.

```bash
# 1. install dependencies (once)
npm install

# 2. start the dev server
npm run dev
```

The site runs at http://localhost:3000 with hot reload.

Useful scripts:

```bash
npm run dev          # dev server
npm run build        # production build (run before deploying)
npm start            # serve the production build locally
npm run lint         # Next.js / TypeScript lint
```

To regenerate the social-share image after editing `scripts/generate-og.mjs`:

```bash
node scripts/generate-og.mjs
```

The PNG is written to `public/og-default.png` and committed to git.

---

## Deploying to Vercel

The repo is configured to auto-deploy on push.

### First-time setup (one-time, ~3 minutes)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the GitHub repo.
3. Vercel auto-detects Next.js from `vercel.json`. Accept the defaults.
4. Click **Deploy**. First build takes ~90 seconds.
5. Add your custom domain (`bran-stan.com`) under **Project → Settings → Domains**.

### Ongoing deploys

After the initial setup, every push to `main` auto-deploys to production. Every push to a branch creates a preview deployment with its own URL.

No GitHub Actions, no manual build step.

### Environment variables

None required for the current functionality. The Formspree endpoint is hardcoded in `app/lib/seo.ts` (`SITE.formspree`). If you want it in an env var instead, set `NEXT_PUBLIC_FORMSPREE_URL` in Vercel and read it via `process.env.NEXT_PUBLIC_FORMSPREE_URL`.

---

## Editing content

All editable content lives in **two TypeScript files** under `app/lib/`. No CMS, no Markdown, no MDX — just typed objects you edit and push.

### How to edit services (agents)

File: **`app/lib/agents.ts`**

Each entry in the `agents` array becomes a page at `/agents/{slug}`.

To **edit** an existing agent — change the fields in place. The fields are:

| Field | What it does |
| --- | --- |
| `slug` | URL path. Changing breaks links — update with care. |
| `name` | Full display name (e.g. "GEO Optimizer Agent") |
| `shortName` | Used in nav, footer, breadcrumbs, contact form dropdown |
| `tagline` | One-line hero subtitle |
| `summary` | TL;DR paragraph — this is what LLMs cite. Keep it crisp and answer-first. |
| `accent` | Color theme. One of: `pink \| blue \| emerald \| amber \| violet \| orange` |
| `iconPath` | SVG path data for the agent icon (any Lucide-style stroke icon works) |
| `metric` | `{ value, label }` shown on cards and the agent page |
| `problem` | One paragraph stating the marketing problem this agent solves |
| `howItWorks` | Array of `{ title, body }` — 3-5 steps |
| `deliverables` | Array of strings — what the client gets |
| `signalsYouNeedIt` | Array of strings — buyer-intent triggers |
| `industryContext` | Array of paragraphs — frames why this agent exists in 2026 |
| `useCases` | Array of `{ headline, body }` — 3 examples |
| `faqs` | Array of `{ question, answer }` — feeds the FAQPage JSON-LD schema |
| `relatedCaseStudy` | Slug of the matching case study (auto-links both ways) |

To **add a new agent**, append a new object to the `agents` array. The route, sitemap, footer, and contact-form dropdown all pick it up automatically.

### How to edit case studies / blogs

File: **`app/lib/case-studies.ts`**

Each entry becomes a page at `/case-studies/{slug}` and shows on the home + listing page.

| Field | What it does |
| --- | --- |
| `slug` | URL path |
| `title` | Question-style headline (matches search intent — keep it answer-engine-friendly) |
| `summary` | TL;DR paragraph |
| `industry` | Shown as a chip on cards |
| `service` | Which agents were used (display label) |
| `date` | ISO date string — drives the article schema and sort order |
| `readMinutes` | Estimate, shown next to the title |
| `heroMetric` | `{ value, label }` — the big number |
| `metrics` | 3 secondary metrics |
| `agentsUsed` | Array of agent slugs — these auto-link to their agent pages |
| `challenge` | Array of paragraphs |
| `approach` | Array of `{ step, title, body }` — the methodology breakdown |
| `outcome` | Array of paragraphs |
| `lessons` | Array of strings — 3-5 key takeaways |
| `testimonial` | `{ quote, author, role }` |
| `faqs` | Array of `{ question, answer }` — feeds FAQPage schema for AEO |

To **add a new case study**, append a new object. The card on the home page (`CaseStudyTeaser`) shows the first three; the listing page shows all.

### How to edit founder information

The founder bio appears in two places:

1. **About section on home page** — `app/components/About.tsx`
   Edit the three paragraphs inside the `<div className="mt-8 space-y-6 ...">` block, plus the name/role in the `Anubhuti` block at the bottom of that file.

2. **Organization schema** — `app/lib/seo.ts`
   Update the `founder` field inside `organizationSchema` (used by search engines and LLMs).

### How to edit site-wide info (email, WhatsApp, URL)

File: **`app/lib/seo.ts`** — the `SITE` object at the top:

```ts
export const SITE = {
  name: 'BranStan',
  url: 'https://bran-stan.com',
  tagline: 'We Stan Your Brand',
  description: '...',
  ogImage: '/og-default.png',
  twitter: '@branstan',
  email: 'branstan.111@gmail.com',
  whatsapp: 'https://wa.me/918052842921',
  whatsappNumber: '+91 80528 42921',
  formspree: 'https://formspree.io/f/xredrpvk',
};
```

Change any value and every page that references it updates automatically.

### How to edit the home-page FAQ

File: **`app/components/FAQ.tsx`** — the `HOME_FAQS` constant at the top.

Each entry feeds both the visible accordion AND the FAQPage JSON-LD schema (great for Google "People also ask" surfacing).

### How to regenerate the social-share image

File: **`scripts/generate-og.mjs`** — the SVG template inside.

Edit the SVG content, then:

```bash
node scripts/generate-og.mjs
```

The PNG is written to `public/og-default.png`. Commit and push.

---

## Project structure

```
BranStan/
├── app/
│   ├── layout.tsx                 # root layout: fonts, global metadata, Organization + WebSite JSON-LD
│   ├── page.tsx                   # home — composes all section components
│   ├── globals.css                # Tailwind layers + design-system utilities
│   ├── sitemap.ts                 # auto sitemap.xml (includes every agent + case study)
│   ├── robots.ts                  # robots.txt route
│   ├── not-found.tsx              # branded 404
│   │
│   ├── lib/
│   │   ├── agents.ts              # ALL agent content (edit here)
│   │   ├── case-studies.ts        # ALL case-study content (edit here)
│   │   └── seo.ts                 # SITE config + metadata + JSON-LD helpers
│   │
│   ├── components/
│   │   ├── Nav.tsx                # sticky glass nav + Book Strategy CTA
│   │   ├── Footer.tsx
│   │   ├── GradientMesh.tsx       # CSS-animated background (no JS, no WebGL)
│   │   ├── ScrollReveal.tsx       # IntersectionObserver, ~2 kB
│   │   ├── Schema.tsx             # JSON-LD injector
│   │   ├── Hero.tsx
│   │   ├── StatStrip.tsx
│   │   ├── About.tsx              # founder bio
│   │   ├── AgentGrid.tsx
│   │   ├── AgentCard.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── CaseStudyTeaser.tsx
│   │   ├── FAQ.tsx                # accordion + FAQPage JSON-LD
│   │   └── CTABanner.tsx
│   │
│   ├── agents/
│   │   ├── page.tsx               # /agents — directory listing
│   │   └── [slug]/page.tsx        # /agents/:slug — dynamic per-agent page
│   │
│   ├── case-studies/
│   │   ├── page.tsx               # /case-studies — index
│   │   └── [slug]/page.tsx        # /case-studies/:slug — full study
│   │
│   └── contact/
│       ├── page.tsx               # /contact — standalone form (opened in new tab from every CTA)
│       └── thank-you/page.tsx     # /contact/thank-you — post-submit page
│
├── public/
│   ├── favicon.svg                # B mark with brand gradient
│   ├── og-default.png             # 1200x630 social-share image (generated)
│   └── robots.txt                 # static fallback (Next also generates one from robots.ts)
│
├── scripts/
│   └── generate-og.mjs            # regenerates public/og-default.png from SVG template
│
├── next.config.mjs                # AVIF/WebP, security headers, strict mode
├── tailwind.config.ts             # design tokens, gradients, keyframes
├── postcss.config.mjs
├── tsconfig.json                  # strict TypeScript, "@/*" path alias
├── vercel.json                    # Vercel framework preset
└── package.json
```

### Routes generated

| Route | Type |
| --- | --- |
| `/` | Static |
| `/agents` | Static |
| `/agents/cultural`, `/geo-optimizer`, `/market-research`, `/social-listening`, `/social-media`, `/growth-strategy` | SSG |
| `/case-studies` | Static |
| `/case-studies/d2c-skincare-glow`, `/b2b-saas-pipeline`, `/regional-fnb-launch` | SSG |
| `/contact` | SSR (reads `?service=` query) |
| `/contact/thank-you` | Static, `noindex` |
| `/sitemap.xml`, `/robots.txt` | Auto |
| `/404` | Static |

---

## Performance budget

The site targets **Lighthouse 95+** across all categories.

- First Load JS: **~96 kB** per page (mostly the Next runtime — our app code is ~500 B)
- Compiled Tailwind: **~10 kB** CSS shipped
- Fonts: **2 variable WOFF2 files**, preloaded, swap
- Zero client-side JS frameworks beyond React
- Only one component ships JS: `ScrollReveal` (~2 kB)
- All animations are CSS-only and respect `prefers-reduced-motion`

---

## SEO / AEO

Every page ships with:

- `<title>`, meta description, canonical URL, OG tags, Twitter card
- JSON-LD: `Organization` + `WebSite` globally; `Service` + `FAQPage` per agent; `Article` + `BreadcrumbList` per case study
- Answer-first content patterns (TL;DR boxes, question-style H2s) tuned for citation by ChatGPT, Perplexity, Gemini, and Claude
- Auto-generated sitemap covering every dynamic route
- Internal linking: every agent ↔ its related case study, agents linked from footer

---

## License

Proprietary. © BranStan.
