---
name: 9-seo-and-aeo
description: Step 8 (Final) Implementation Command. Reads prompts/phase-8-seo-aeo.md, implements company-level Technical SEO, per-route Metadata API, linked Schema.org JSON-LD Knowledge Graph, dynamic OpenGraph card, sitemap.ts, robots.ts, manifest.ts, semantic HTML5 landmarks, and public/llms.txt + llms-full.txt for AI Engine Optimization (AEO/GEO), runs production build verification, and completes the production website.
---

# Command 9: Implement Enterprise Technical SEO, Schema.org JSON-LD & AI Engine Optimization (`/9-seo-and-aeo`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Technical SEO Architect, Staff AI Engine Optimization (AEO / GEO) Engineer (e.g., Next.js Metadata API, React Server Components, Schema.org JSON-LD, OpenGraph, `llms.txt`), and Senior Semantic Web Strategist** with **12+ years of production experience** engineering search-dominant, machine-citation-ready websites across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Enterprise Technical SEO & Metadata Architecture**: Deep expertise in building centralized SEO configurations (`src/lib/seo.ts`), canonical URL math (`metadataBase`), high-CTR title templates, per-route `Metadata` exports across Server Components, dynamic XML sitemaps (`sitemap.ts`), web app manifests (`manifest.ts`), and branded `1200x630` dynamic OpenGraph cards (`opengraph-image.tsx`).
- **Schema.org JSON-LD Knowledge Graph Engineering**: Mastery of constructing linked `@graph` structured data (`<script type="application/ld+json">`) using `@id` entity cross-references across any website category (e.g., `Person` + `ProfilePage` + `ItemList` of `CreativeWork`/`SoftwareSourceCode` + `Service` for Portfolios; `Organization` + `SoftwareApplication` + `FAQPage` for SaaS/AI; or `OnlineStore` + `Product` + `Offer` + `AggregateRating` for E-Commerce).
- **AI Engine Optimization (AEO / GEO for ChatGPT, Perplexity, Claude & Gemini)**: Proven ability to author specification-compliant `public/llms.txt` and `public/llms-full.txt` Markdown entity dossiers, configure AI crawler permissions (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) in `robots.ts`, and structure semantic HTML5 landmarks so LLM answer engines cite 100% accurate facts.
- **Semantic HTML5 & Accessible Document Hierarchy**: Strict discipline to enforce a single `<h1>` per route, logical `<h2> -> <h3>` heading trees without skipped levels, `<section aria-labelledby="...">` landmarks, and descriptive, human-written `alt` text on every image.
- **Production Build QA & Final Handoff**: Strict discipline to verify `npx tsc --noEmit` and `npm run build` so the final production build completes with zero errors, zero hydration mismatches, and zero broken links.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-8-seo-aeo.md` First**:
   - Before writing any code, read `prompts/phase-8-seo-aeo.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md` and `src/data/siteData.ts` so every SEO tag, JSON-LD entity, and `llms.txt` fact comes 100% verbatim from real user data.
   - If `prompts/phase-8-seo-aeo.md` does not exist, stop immediately and tell the user to complete Phase 8 in `/1-prompt-generator` first.
2. **Server Component Metadata Lock (Next.js App Router)**:
   - In Next.js App Router, a file with `"use client"` on Line 1 cannot export `metadata: Metadata`. If any route file (`src/app/about/page.tsx`, `src/app/projects/page.tsx`, etc.) currently has `"use client"`, extract the interactive client state into a dedicated child component so the route's `page.tsx` remains a clean Server Component exporting `metadata`.
3. **Strict Anti-AI Copywriting & Anti-Cliché Lock**:
   - Never output banned AI meta-words (`Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`) inside meta descriptions, OpenGraph titles, JSON-LD descriptions, or `llms.txt` files.
   - Never output `//` separators inside metadata titles or `llms.txt` headings. Format all titles cleanly with pipe `|` or centered dot `·`.
   - Never include fabricated projects in `sitemap.ts`, `llms.txt`, or JSON-LD. Reflect strictly the verbatim projects from `src/data/siteData.ts`.

## 2. Step-by-Step Implementation Workflow

### Step 1: Build Centralized SEO Config & Per-Route Metadata (`src/lib/seo.ts`)
Read **Block 1** of `prompts/phase-8-seo-aeo.md` and create `src/lib/seo.ts`:
1. Export `SITE_URL` (`process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"` using the canonical domain from Block 1) and a helper `constructMetadata({ title, description, path, image })` populated from `src/data/siteData.ts`.
2. Update `src/app/layout.tsx` to export complete root `metadata: Metadata` including:
   - `metadataBase: new URL(SITE_URL)`
   - `title: { default: "...", template: "%s | ..." }`
   - `description`: High-converting 150-160 character human meta description.
   - `keywords`: Target keyword array from Block 1.
   - `authors`, `creator`, `publisher`, `alternates: { canonical: "/" }`, `openGraph` (`type: "website"`, `locale: "en_US"`, `url`, `siteName`, `title`, `description`), `twitter` (`card: "summary_large_image"`, `title`, `description`), and `robots` (`index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }`).
3. Add explicit `export const metadata: Metadata` to every sub-route (`src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/skills/page.tsx`, `src/app/contact/page.tsx`, etc.) with unique route-specific titles, descriptions, and canonical paths.

### Step 2: Build Linked Schema.org JSON-LD Knowledge Graph (`src/components/seo/JsonLdSchema.tsx`)
Read **Block 2** of `prompts/phase-8-seo-aeo.md` and create `src/components/seo/JsonLdSchema.tsx`:
- Build a clean Server Component that serializes a linked Schema.org `@graph` populated dynamically from `src/data/siteData.ts`:
  1. **Primary Identity Entity (`Person` or `Organization` / `OnlineStore`)**:
     - `@id`: `${SITE_URL}/#identity`
     - Includes `name`, `jobTitle` / `slogan`, `description`, `url: SITE_URL`, `image`, `email`, `address` / `homeLocation`, `alumniOf` (mapped from `siteData.education`), `knowsAbout` (flattened from `siteData.skills`), and `sameAs` (all social profile URLs from `siteData.contact`).
  2. **`WebSite` & `ProfilePage` / `WebPage` Entities**:
     - `@id`: `${SITE_URL}/#website` and `${SITE_URL}/#webpage`, linked via `publisher: { "@id": "${SITE_URL}/#identity" }` and `mainEntity: { "@id": "${SITE_URL}/#identity" }`.
  3. **Featured Work / Products Entity (`ItemList`)**:
     - Maps every project or product in `siteData.projects` into `ListItem` -> `CreativeWork` / `SoftwareSourceCode` / `Product` with `name`, `description`, `url`, and `keywords`.
  4. **Services / Capabilities Entity (`OfferCatalog` / `Service`)**:
     - Maps every numbered service (`01` to `04`) in `siteData.services` into structured `Service` items linked to `provider: { "@id": "${SITE_URL}/#identity" }`.
- Mount `<JsonLdSchema />` inside `<head>` or top of `<body>` in `src/app/layout.tsx`.

### Step 3: Create AI Engine Optimization (AEO / GEO) Files (`public/llms.txt` & `public/llms-full.txt`)
Read **Block 3** of `prompts/phase-8-seo-aeo.md` and create two clean, machine-readable Markdown files in `public/` so AI search engines (ChatGPT Search, Perplexity, Claude, Gemini) can index and cite the website accurately:
1. **`public/llms.txt`**:
   - Concise, structured executive index following the official `llms.txt` standard:
     - `# [Verbatim Name / Brand from siteData.identity.name]`
     - `> [1-sentence authoritative summary of role, specialization, and value proposition]`
     - `## Core Capabilities & Services` (bulleted list of `01-04` services with descriptions)
     - `## Selected Projects & Case Studies` (bulleted list with live links and tech stacks)
     - `## Technical Stack & Credentials` (categorized skills, degrees, and certifications)
     - `## Primary Website Routes` (links to `/`, `/about`, `/projects`, `/skills`, `/contact`, and `/llms-full.txt`)
     - `## Direct Contact & Verified Profiles` (email, location, availability, GitHub, LinkedIn)
2. **`public/llms-full.txt`**:
   - Comprehensive, deep-context Markdown knowledge base containing the complete verbatim text of all biographies, metrics, service deliverables, project architecture breakdowns, education history, certifications, client testimonials, and FAQs from `src/data/siteData.ts`.

### Step 4: Build Dynamic Sitemap, Robots.txt, Manifest & Branded OpenGraph Image
Read **Block 4** of `prompts/phase-8-seo-aeo.md` and create:
1. **`src/app/sitemap.ts`**:
   - Exports a Next.js `MetadataRoute.Sitemap` function dynamically mapping all static routes and all items from `siteData.projects` with `url`, `lastModified: new Date()`, `changeFrequency: "weekly"`, and `priority` (`1.0` for `/`, `0.8` for sub-routes).
2. **`src/app/robots.ts`**:
   - Exports `MetadataRoute.Robots` rules allowing `/` for `*` and explicitly permitting search and AI answer crawlers (`Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` as specified in Block 4), with `sitemap: "${SITE_URL}/sitemap.xml"`.
3. **`src/app/manifest.ts`**:
   - Exports `MetadataRoute.Manifest` with `name`, `short_name`, `description`, `start_url: "/"`, `display: "standalone"`, `background_color` matching `--bg-canvas`, and `theme_color` matching `--accent-primary`.
4. **`src/app/opengraph-image.tsx` (or Verified Static OG Image)**:
   - Uses `ImageResponse` from `next/og` (`1200x630`) styled with the exact Phase 1 dark/light canvas hex, radial accent spotlight glow, uppercase display name/brand title, role subtitle, and domain badge.
   - Enforce legible system font fallback with high-contrast text rendering on all social sharing card previews.

### Step 5: Audit Semantic HTML5 Landmarks, Heading Hierarchy & Image Alt Text
Read **Block 5** of `prompts/phase-8-seo-aeo.md` and audit every page and component in `src/`:
- Verify `<header>` wraps `Navbar`, `<main id="main-content">` wraps page content, `<section id="..." aria-label="...">` wraps every major section, `<article>` wraps project/testimonial cards, and `<footer>` wraps `Footer`.
- Verify each route renders **exactly one `<h1>`** (the primary Hero or Page masthead title) and uses `<h2>` for section titles and `<h3>` for card titles without skipping heading levels.
- Verify every `<img>` and `<Image>` tag has a descriptive, natural human `alt` attribute (never empty `alt=""` on informative images or generic `"image"`).
- Verify that external links include `rel="noreferrer"` and security attributes.

### Step 6: Run Final Terminal Build & Quality Verification
Read **Block 6** of `prompts/phase-8-seo-aeo.md` and execute the final build check:
1. Run `npx tsc --noEmit` to confirm zero TypeScript compilation errors.
2. Run `npm run build` to confirm the Next.js production build compiles with zero static generation or route errors.
3. Validate that `/llms.txt`, `/llms-full.txt`, `/robots.txt`, and `/sitemap.xml` are accessible on `http://localhost:3000`.
4. Check that page source contains valid Schema.org JSON-LD structured data with complete `@graph` entity linkage.
5. Confirm that the site achieves 100/100 across Lighthouse SEO and Best Practices audits.

### Step 7: Final Production Search Engine & AI Crawler Sanity Check
1. Verify that `robots.ts` explicitly grants crawl permissions to `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `OAI-SearchBot`.
2. Verify that `public/llms.txt` and `public/llms-full.txt` accurately summarize the full breadth of the site's capabilities.
3. Confirm that all OpenGraph and Twitter card metadata properties are populated with valid image URLs and canonical links.
4. Ensure that the web app manifest (`manifest.ts`) contains valid theme colors and standalone PWA display flags.
5. Verify that all canonical URLs use https protocol and contain no trailing slashes or duplicate paths.
6. Verify that no broken links or 404 routes exist across all internal navigation targets.

## 3. Update Progress & Final Production Handoff
1. Update `prompts/IMPLEMENTATION_PROGRESS.md` so all 8 stages are marked complete (`[x]`):
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes)
   - [x] Stage 4: `/5-navbar-and-footer` (`Navbar`, `MenuOverlay`, `ContactSection` & `Footer`)
   - [x] Stage 5: `/6-build-pages` (Full Production Home Page & All Sub-Routes Assembled)
   - [x] Stage 6: `/7-animate-website` (`Lenis` Smooth Scroll, `GSAP`/`Framer Motion` Reveals & Micro-Interactions)
   - [x] Stage 7: `/8-responsive-and-qa` (375px/768px/1440px Responsive Polish & Build QA Complete)
   - [x] Stage 8: `/9-seo-and-aeo` (Metadata API, JSON-LD `@graph`, `llms.txt`, `sitemap.ts`, `robots.ts`, OG Image & Clean Production Build Complete)
   ```
2. **FINAL PRODUCTION HANDOFF**: Present the comprehensive completion report to the user confirming that the entire 8-stage production website is complete, verified, responsive, search-optimized, and ready for deployment.
