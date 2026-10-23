# Phase 8: Enterprise Technical SEO, Schema.org JSON-LD Graph & AI Engine Optimization (Final Phase)

Read this file ONLY when executing **Phase 8** of `/1-prompt-generator` (after `prompts/phase-7-responsive-qa.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 8 is to:
1. Check if the user's Phase 1-7 answers already define the brand/person name, primary domain URL, target audience, services, and social profiles. Confirm any known items as `Locked from Context`.
2. Ask the Phase 8 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 8**, write the complete file `prompts/phase-8-seo-aeo.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `All 8 Prompt Phases Complete (8/8) | Ready for /2-setup-foundation`, and instruct the user to run `/2-setup-foundation` to start step-by-step implementation.

## 1. Phase 8 Discovery Questions (Company-Level SEO & AI Engine Optimization)

### Q1. Canonical Domain, Target Keywords & Search Positioning
Ask the user to confirm or select their SEO positioning strategy:
- `A)` **Personal Brand + High-Intent Service SEO (Developer / Designer / Consultant)**:
  - Ranks for exact person/brand name (e.g., `Raja Irfan Ahmed`) PLUS high-converting role and service keywords (`Full-Stack Developer`, `Next.js & AI Engineer`, `Custom Web Application Development`).
- `B)` **SaaS / AI Product Category SEO**:
  - Ranks for product category keywords, problem-solution queries, feature comparisons, and developer documentation terms.
- `C)` **Local + Global Agency / Service Business SEO**:
  - Ranks for agency capabilities, industry verticals, and regional/global service queries.
- `D)` **E-Commerce / Marketplace Commercial SEO**:
  - Ranks for collection, product, and brand transactional keywords with rich product snippets.
- `E) [Custom User Input]`: Provide your exact production domain URL (e.g., `https://yourdomain.com`), primary target keywords, and target geographic market.
- `F) [AI Recommended]`: Let AI generate high-intent title templates, meta descriptions, and keyword clusters from `src/data/siteData.ts`.

### Q2. Schema.org JSON-LD Knowledge Graph Architecture
Search engines and AI answer engines rely on structured JSON-LD graphs to verify entities. Ask which JSON-LD `@graph` schemas should be injected:
- `A)` **Complete Portfolio & Professional Service Knowledge Graph (`Recommended for Portfolios / Studios`)**:
  - `Person` + `ProfilePage` (Name, jobTitle, alumniOf, knowsAbout, sameAs social links, image)
  - `WebSite` (Name, url, description)
  - `ItemList` of `CreativeWork` / `SoftwareSourceCode` (Featured Projects with live URLs and tech tags)
  - `Service` / `OfferCatalog` (Numbered Services `01` to `04`)
- `B)` **Enterprise SaaS & SoftwareApplication Knowledge Graph**:
  - `Organization` + `SoftwareApplication` + `WebSite` + `FAQPage` + `BreadcrumbList`.
- `C)` **E-Commerce Store & Product Knowledge Graph**:
  - `OnlineStore` + `Product` + `Offer` + `AggregateRating` + `BreadcrumbList`.
- `D) [Custom User Input]`: Specify custom Schema.org types or entity attributes.
- `E) [AI Recommended]`: Let AI construct the complete linked JSON-LD `@graph` from `src/data/siteData.ts`.

### Q3. AI Engine Optimization (AEO / GEO for ChatGPT, Perplexity, Claude & Gemini Search)
Modern AI search crawlers (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) look for machine-readable entity summaries and `/llms.txt`. Ask how AEO/GEO should be configured:
- `A)` **Full AI Engine Optimization Suite (`llms.txt` + `llms-full.txt` + Crawler Allowlist + Semantic Entity HTML)**:
  - Generate `public/llms.txt` and `public/llms-full.txt` following the official `llms.txt` specification (clean Markdown summary of who the person/company is, core services, verified projects, tech stack, credentials, and direct contact links so AI engines cite accurate facts).
  - Configure `src/app/robots.ts` to explicitly allow both traditional search crawlers (`Googlebot`, `Bingbot`) and AI answer engine bots (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
  - Enforce strict semantic HTML5 landmarks (`<header>`, `<main>`, `<section aria-labelledby="...">`, `<article>`, `<footer>`) and a single `<h1>` per page.
- `B)` **Traditional Search Engines Only (Block AI Training Bots in `robots.txt`)**
- `C) [Custom User Input]`: Specify custom rules for `llms.txt` and AI search bots.
- `D) [AI Recommended]`: Enable the full AEO/GEO suite (`Option A`) for maximum visibility in both Google and AI search engines.

### Q4. OpenGraph, Social Sharing Cards & Dynamic Sitemap
Ask how social sharing previews (`og:image`, Twitter/X cards) and sitemaps should be generated:
- `A)` **Dynamic Next.js OpenGraph Image (`src/app/opengraph-image.tsx`) + Per-Route Metadata + `sitemap.ts`**:
  - Automatically renders a branded `1200x630` OpenGraph card matching the Phase 1 color palette (`--bg-canvas`, `--accent-primary` glow, and `--font-display` headline) alongside `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/manifest.ts`.
- `B)` **Static OpenGraph Image in `public/og-image.png` + Route Metadata + `sitemap.ts`**
- `C) [Custom User Input]`: Provide custom OpenGraph title, description, or image path.
- `D) [AI Recommended]`: Let AI build the complete Next.js Metadata API, dynamic OpenGraph card, `sitemap.ts`, and `robots.ts`.

## 2. Immediate Action After User Answers Phase 8
As soon as the user answers Phase 8 (or asks you to auto-decide):
1. Write `prompts/phase-8-seo-aeo.md` using the exact 6-Block template in Section 3 below (190 to 260 lines of complete SEO & AEO specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 8 (prompts/phase-8-seo-aeo.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Status: ALL 8 PHASE PROMPTS COMPLETED (8/8)`
   - `Next Command to Run: /2-setup-foundation`
3. Inform the user that all 8 phase prompt files (`prompts/phase-1-*.md` through `prompts/phase-8-*.md`) are ready and they can now run `/2-setup-foundation` to begin building and previewing Step 1 on `localhost:3000`.

## 3. Exact Blueprint to Write Into `prompts/phase-8-seo-aeo.md`

When writing `prompts/phase-8-seo-aeo.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 8 PROMPT: COMPANY-LEVEL TECHNICAL SEO, JSON-LD SCHEMA & AI ENGINE OPTIMIZATION (AEO)
**Target Command**: `/9-seo-and-aeo`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` and `src/data/siteData.ts`. Every SEO tag, JSON-LD entity, and `llms.txt` line MUST use real data from `siteData.ts` with zero robotic AI filler words.

## BLOCK 1: CENTRALIZED SEO CONFIGURATION & PER-ROUTE METADATA API (`src/lib/seo.ts`)
- **Canonical Base URL (`metadataBase`)**: `[Exact production URL or process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com']`
- **Root Metadata (`src/app/layout.tsx`)**:
  - `title`: `{ default: "[Exact Name / Brand] · [Primary Role / Value Proposition]", template: "%s | [Exact Name / Brand]" }`
  - `description`: `[150-160 char high-converting human meta description from siteData.ts]`
  - `keywords`: `[Array of 10-15 high-intent target keywords]`
  - `authors`, `creator`, `publisher`, `alternates.canonical`, `openGraph` (`type: "website"`, `locale: "en_US"`, `siteName`), `twitter` (`card: "summary_large_image"`), and `robots` (`index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }`).
- **Per-Page Metadata Exports**:
  - Define exact `export const metadata: Metadata` for `/about`, `/projects`, `/skills`, and `/contact` (if multi-page routes exist). If any page is a Client Component, extract interactive logic into a child client component so the route's `page.tsx` remains a Server Component that exports `metadata`.

## BLOCK 2: SCHEMA.ORG JSON-LD KNOWLEDGE GRAPH (`src/components/seo/JsonLdSchema.tsx`)
Create a clean Server Component `<JsonLdSchema />` mounted in `src/app/layout.tsx` that outputs `<script type="application/ld+json">` containing a linked `@graph`:
1. **`Person` / `Organization` Entity**:
   - `@id`: `${siteUrl}/#identity`
   - `name`, `jobTitle`, `description`, `url`, `image`, `address` / `homeLocation`, `alumniOf` (verified education from `siteData.ts`), `knowsAbout` (all technical skills & domains), and `sameAs` (GitHub, LinkedIn, etc.).
2. **`WebSite` & `ProfilePage` Entities**:
   - Linked via `mainEntity: { "@id": "${siteUrl}/#identity" }`.
3. **`ItemList` of Featured Projects (`CreativeWork` / `SoftwareSourceCode`)**:
   - Maps each project in `siteData.projects` with `name`, `description`, `url`, and `keywords`.
4. **`OfferCatalog` / `Service` Entities**:
   - Maps each service (`01` to `04`) in `siteData.services`.

## BLOCK 3: AI ENGINE OPTIMIZATION (AEO / GEO) - `public/llms.txt` & `public/llms-full.txt`
Create two static machine-readable Markdown files in `public/` so ChatGPT Search, Perplexity, Claude, and Google Gemini can cite the website accurately:
1. **`public/llms.txt`**:
   - H1 Title (`# [Name / Brand]`)
   - Blockquote summary (`> [Concise 1-sentence authoritative summary]`)
   - Sections for `## Core Services`, `## Selected Projects`, `## Technical Stack & Credentials`, `## Primary Routes`, and `## Contact & Profiles` with clean Markdown links.
2. **`public/llms-full.txt`**:
   - Complete structured Markdown dossier containing full project case studies, service deliverables, education, certifications, and FAQs from `siteData.ts`.

## BLOCK 4: DYNAMIC SITEMAP, ROBOTS.TXT, MANIFEST & OPENGRAPH IMAGE
1. **`src/app/sitemap.ts`**: Export a dynamic Next.js sitemap returning all valid routes (`/`, `/about`, `/projects`, `/skills`, `/contact`) with `lastModified`, `changeFrequency`, and `priority`.
2. **`src/app/robots.ts`**: Export dynamic robots rules allowing `/`, explicitly permitting `Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended`, and pointing to `sitemap: "${siteUrl}/sitemap.xml"`.
3. **`src/app/manifest.ts`**: Export web app manifest with brand colors matching Phase 1 (`background_color: var(--bg-canvas)`, `theme_color: var(--accent-primary)`).
4. **`src/app/opengraph-image.tsx`**: Generate a dynamic `1200x630` OpenGraph card with the dark/light canvas, radial accent glow, brand name, and role tagline.

## BLOCK 5: SEMANTIC HTML5 LANDMARKS, HEADING HIERARCHY & ACCESSIBLE AEO ATTRIBUTES
Audit and upgrade all page and section components:
- Ensure each route has **exactly one `<h1>`** (the primary Hero/Page headline) and logical `<h2>` -> `<h3>` nesting without skipped levels.
- Ensure every `<section>` has a semantic `id` and `aria-label` or `aria-labelledby` linking to its heading.
- Ensure every `<img>` / `<Image>` has descriptive, natural human `alt` text (e.g., `"Raja Irfan Ahmed - Full-Stack Developer Portrait"`, never `"image"` or `"hero"`).

## BLOCK 6: MANDATORY FINAL VERIFICATION & PRODUCTION BUILD
When `/9-seo-and-aeo` completes implementation:
1. Verify that `/llms.txt`, `/llms-full.txt`, `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` resolve cleanly on `localhost:3000`.
2. Run `npx tsc --noEmit` and `npm run build` in the terminal to verify zero compilation or build errors.
3. Confirm that the site achieves 100/100 across Lighthouse SEO and Best Practices audits.
```
