# CLAUDE.md

Guidance for Claude Code (and any future contributor) working in this repo. Read this before making changes — it captures the conventions that aren't obvious from the code alone.

---

## Project purpose

BranStan is a marketing consultancy that pitches itself as an **agentic AI marketing partner**. The site has three jobs, in order:

1. **Generate qualified leads** for founder-led brand engagements. Every page funnels to `/contact`.
2. **Build credibility** through detailed agent explanations and case studies that read as industry-grade content, not slideware.
3. **Be the answer when LLMs are asked about the category.** The content is structured for retrieval by ChatGPT, Perplexity, Gemini, and Claude — Answer Engine Optimization (AEO), not just classic SEO.

Read the README for the user-facing overview. This file is about *how to work in the repo*.

---

## Architecture

**Stack:** Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS v3 (compiled) · React Server Components by default · `next/font` for self-hosted variable fonts · Formspree for form submissions · Vercel for hosting.

**No** database, no auth, no env vars required, no CMS, no build-time API calls. The site is fully static except for `/contact`, which is server-rendered only to read the `?service=` query string.

**Content is data, not code.** All editable copy lives in two TypeScript files:
- `app/lib/agents.ts` — six agents, one TypeScript object each
- `app/lib/case-studies.ts` — three case studies, one TypeScript object each

Routes, sitemap entries, footer links, internal cross-links, and contact-form dropdown options all derive from those files. Add an entry → the rest updates automatically.

**SEO/AEO is centralized.** `app/lib/seo.ts` exports a `SITE` config object, a `buildMetadata()` helper, and JSON-LD schema builders (`organizationSchema`, `serviceSchema`, `faqSchema`, `articleSchema`, `breadcrumbSchema`). Every page uses these — never hand-roll `<title>` or schema markup.

**Components are RSC by default.** Only `app/components/ScrollReveal.tsx` is `'use client'` (it needs `IntersectionObserver`). Adding `'use client'` to anything else is a meaningful choice — justify it.

---

## Folder structure

```
BranStan/
├── app/
│   ├── layout.tsx               # root: fonts, global metadata, Org + WebSite JSON-LD
│   ├── page.tsx                 # home — composes section components
│   ├── globals.css              # Tailwind layers + design-system utilities
│   ├── sitemap.ts               # auto sitemap.xml
│   ├── robots.ts                # robots.txt route
│   ├── not-found.tsx            # branded 404
│   │
│   ├── lib/                     # all editable content lives here
│   │   ├── agents.ts            # service definitions (6 agents)
│   │   ├── case-studies.ts      # case studies (3 entries)
│   │   └── seo.ts               # SITE config + metadata/JSON-LD helpers
│   │
│   ├── components/              # presentational + 1 client component
│   ├── agents/                  # /agents and /agents/[slug]
│   ├── case-studies/            # /case-studies and /case-studies/[slug]
│   └── contact/                 # /contact and /contact/thank-you
│
├── public/                      # favicon.svg, og-default.png (generated), robots.txt
├── scripts/
│   └── generate-og.mjs          # one-time PNG generator for public/og-default.png (uses sharp)
│
├── next.config.mjs              # security headers, AVIF/WebP
├── tailwind.config.ts           # design tokens — change here, not in components
├── vercel.json                  # framework preset for Vercel
└── package.json                 # npm scripts: dev / build / start / lint
```

---

## Deployment

**Host:** Vercel. **Trigger:** push to `main` → auto-deploy. Preview deploys are created for every other branch.

There are **no GitHub Actions, no CI scripts, no manual build steps**. `vercel.json` declares the framework; everything else is Vercel defaults.

**Before pushing to `main`**, always run:

```bash
npm run build
```

It catches type errors, missing dynamic params, and broken metadata. If it fails locally it will fail on Vercel.

**Environment variables:** none required. The Formspree endpoint is hardcoded in `app/lib/seo.ts` (`SITE.formspree`). If you need it in an env var later, set `NEXT_PUBLIC_FORMSPREE_URL` on Vercel and swap the constant for `process.env.NEXT_PUBLIC_FORMSPREE_URL`.

**Git identity:** the local repo is configured (in `.git/config`) to commit as `branstan111-stack <branstan.111@gmail.com>`. Don't change this. If you commit and the author shows as something else, you've accidentally used a different identity — fix it before pushing.

---

## How to work on this project

### Where to make common changes

| You want to... | Edit this file |
| --- | --- |
| Change agent name, copy, FAQ, deliverables | `app/lib/agents.ts` |
| Add a new agent | Append to `agents` array in `app/lib/agents.ts` — route generates automatically |
| Edit a case study | `app/lib/case-studies.ts` |
| Add a new case study | Append to `caseStudies` array in `app/lib/case-studies.ts` |
| Change email / WhatsApp / domain / OG image path | `SITE` object in `app/lib/seo.ts` |
| Edit founder bio | `app/components/About.tsx` AND `organizationSchema` in `app/lib/seo.ts` (keep them in sync) |
| Edit the home-page FAQ | `HOME_FAQS` in `app/components/FAQ.tsx` |
| Change colors, fonts, gradients, blur amounts | `tailwind.config.ts` + `app/globals.css` — do NOT hardcode hex in components |
| Regenerate social-share image | edit `scripts/generate-og.mjs`, then `node scripts/generate-og.mjs` (commit the PNG output) |

### Conventions to follow

**CTAs to the contact page** always use `target="_blank"` and `rel="noopener noreferrer"`. This is a deliberate product decision (lead gen — keep visitors' place on the originating page). Don't "fix" it.

**Per-page metadata** must use `buildMetadata({ title, description, path, ... })` from `app/lib/seo.ts`. This guarantees consistent OG tags, Twitter cards, and canonical URLs.

**JSON-LD** is injected via the `<Schema data={...} />` component (which is just a typed wrapper around `<script type="application/ld+json">`). Build the data with the helpers in `seo.ts` (`faqSchema`, `serviceSchema`, `articleSchema`, `breadcrumbSchema`). Agent pages need Service + FAQPage + BreadcrumbList. Case study pages need Article + FAQPage + BreadcrumbList.

**Design tokens, not hex.** Use `bg-ink-800`, `text-gray-300`, `bg-brand-gradient`, `glass`, `glass-strong`, etc. Defined in `tailwind.config.ts` and `app/globals.css`. If you find yourself reaching for an arbitrary value (`bg-[#1a1a1f]`), add it to the tokens instead.

**Components stay Server.** Add `'use client'` only when the component genuinely needs the browser (event handlers, hooks, browser APIs). Most pages should ship 0 KB of component-author JS.

**Performance budget:** target First Load JS ≤ 100 KB per route. If you cross that, the addition needs to be justified.

**Animation respects `prefers-reduced-motion`.** Global rule already in `app/globals.css` — don't disable it on a per-component basis.

**Accessibility:** every interactive element needs a discernible name. SVG icons inside `<a>`/`<button>` are decorative (parent has the label) — keep them `aria-hidden` or unlabeled, but ensure the parent text is readable.

### Conventions to NOT do

- **Don't introduce a CMS, headless API, or markdown content pipeline.** Content is small and editing TS objects is faster than configuring Contentful.
- **Don't add a state-management library.** No Redux, no Zustand. There's no client state worth managing.
- **Don't add a UI kit** (shadcn, MUI, Chakra). The design system is intentional and the surface area is small.
- **Don't refactor the data layer into individual MD files** unless content volume grows past ~20 entries per collection.
- **Don't switch to a heavier animation library** (Framer Motion, GSAP) for the existing reveal/hover behavior. The CSS-only approach is intentional.

### Local development

```bash
npm install          # once
npm run dev          # localhost:3000
npm run build        # must pass before push
```

Node 18.17+ required.

### What to verify before pushing

1. `npm run build` passes with **zero type errors and zero warnings**.
2. Lighthouse on the home page in dev mode is 90+ across categories.
3. New dynamic routes appear in the build summary (e.g., `/agents/your-new-slug`).
4. If you added a new agent or case study, check that the sitemap (`/sitemap.xml`) includes it.
5. If you changed any copy that contains the word "BranStan" — double-check the casing (it's `BranStan`, capital B and S).

### Commit style

Match the existing log: present-tense, single sentence in the subject line, optional body for context. The repo's previous commits used `Update X` / `Create X`; for substantial work, prefer `Rebuild …`, `Add …`, `Refactor …`, `Fix …`.

---

## Things future contributors should know

- The case studies are realistic placeholders. They're meant to be replaced with real engagements as they close. Match the existing structure (challenge → approach → outcome → lessons → testimonial → FAQ) so the AEO benefit is preserved.
- The OG image is generated by `scripts/generate-og.mjs` and committed as a static file. Don't rebuild it on every deploy — only when you change the SVG template.
- The Formspree endpoint (`xredrpvk`) belongs to the founder. If you fork this for another brand, get a new endpoint and update `SITE.formspree` in `app/lib/seo.ts`.
- The founder writes in first person on the About section. Keep that voice — it's a brand differentiator.
- AEO content patterns to preserve: TL;DR boxes at the top, question-style H2s, answer-first paragraphs, specific numeric claims, FAQ sections with FAQPage schema. These are what gets the site cited inside LLMs.
