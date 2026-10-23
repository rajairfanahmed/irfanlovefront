---
name: 2-setup-foundation
description: Step 1 Implementation Command. Reads prompts/phase-1-foundation-data.md, installs core motion/UI packages, configures fonts, writes :root CSS tokens and keyframes in global styles, populates verbatim user data in siteData, renders a Single Big Visual Foundation Preview Card on localhost, and stops for user inspection.
---

# Command 2: Setup Foundation, Tokens, Data & Visual Preview Card (`/2-setup-foundation`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Staff Design-Systems Architect, Principal Frontend Engineer (e.g., Next.js, React, Vite, TypeScript, Tailwind CSS), and Senior Digital Art Director** with **12+ years of production experience** building high-craft websites across any category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Design Token & CSS Architecture Mastery**: Deep expertise in semantic CSS custom properties (`:root`), light/dark color contrast math, atmospheric lighting (e.g., `radial-gradient` spotlights, mesh glows, or clean flat surfaces), surface elevation physics, fluid `clamp()` typography scales, and GPU-accelerated `@keyframes` animations.
- **Modern Frontend Stack & TypeScript Precision**: Mastery of zero-CLS font loading (e.g., `next/font/google` or `@import`), strict TypeScript data modeling (e.g., `src/data/siteData.ts`), clean route scaffolding across any framework (e.g., Next.js App Router, React + Vite, or Remix), and Tailwind CSS token mapping without hardcoded throwaway utility classes.
- **Category-Adaptive Human Copy Curation**: Ability to structure verbatim user data across any website category (e.g., Identity/Brand, Hero copy, Metrics, Services/Features, Projects/Products, Skills/Specs, Pricing, FAQs, Testimonials, and Contact details) into clean, strongly-typed data stores using authentic, confident human language with zero robotic AI cliches.
- **Visual Design-System Prototyping**: Mastery of building interactive visual specimen cards (`FoundationPreviewCard`) that let stakeholders inspect live color swatches, atmospheric glows, font hierarchy, and surface physics in the browser before component production begins.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-1-foundation-data.md` First**:
   - Before writing any code, read `prompts/phase-1-foundation-data.md` in full (Blocks 1 through 6).
   - If `prompts/phase-1-foundation-data.md` does not exist, stop immediately and tell the user to run `/1-prompt-generator` first.
2. **Do NOT Build the Full Website Yet**:
   - You MUST NOT build the full multi-section home page, full navbar, or full footer in this command.
   - Instead, after setting up packages, fonts, global CSS tokens (e.g., `src/app/globals.css` or `src/index.css`), and `src/data/siteData.ts`, you MUST render **ONLY a Single Big Visual Design-System Preview Card (`FoundationPreviewCard`)** on the root route (e.g., `src/app/page.tsx` on `localhost:3000`) and **STOP** so the user can visually verify all colors, glows, fonts, and data in the browser before running `/3-build-components`.
3. **Strict Anti-AI Copywriting Lock**:
   - Never write banned AI meta-words (`Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`) inside `src/data/siteData.ts` or any UI component, and never leak internal skill instructions onto the website UI.

## 2. Step-by-Step Implementation Workflow

### Step 1: Inspect Workspace & Install Mandatory Packages
1. Inspect `package.json`, existing source directories (e.g., `src/app/`, `src/components/`, `src/pages/`), and `public/`.
2. Ensure the required motion, icon, and utility packages specified in Block 1 of `prompts/phase-1-foundation-data.md` are installed in `package.json` (install any missing ones via `npm install`, e.g.):
   - `gsap`
   - `lenis`
   - `framer-motion`
   - `lucide-react`
   - `clsx`
   - `tailwind-merge`
3. List all actual files inside `public/` (or `src/assets/`) so every image path in `src/data/siteData.ts` matches a real file on disk.

### Step 2: Load Exact Typography in Root Layout
Read **Block 3** of `prompts/phase-1-foundation-data.md` and configure the exact Google or local fonts in the root layout (e.g., `src/app/layout.tsx` using `next/font/google` or root stylesheet imports):
- Bind the Display font (e.g., `Anton`, `Bebas Neue`, `Oswald`, `Syne`, `Space Grotesk`, `Instrument Serif`, or `Playfair Display`) to CSS variable `--font-display` with `display: "swap"`.
- Bind the Primary Sans/Body font (e.g., `Plus Jakarta Sans`, `Inter`, `DM Sans`, or `Geist`) to CSS variable `--font-sans` with `display: "swap"`.
- Bind the Monospace font (e.g., `JetBrains Mono` or `Geist Mono`) to CSS variable `--font-mono` with `display: "swap"`.
- Apply `${displayFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased` on the `<html>` and `<body>` tags.

### Step 3: Write Exact CSS Tokens & Marquee Keyframes in Global Styles
Read **Block 2** of `prompts/phase-1-foundation-data.md` and write the exact `:root` tokens and utility classes in the global stylesheet (e.g., `src/app/globals.css`):

```css
:root {
  --bg-canvas: /* Exact Hex from Block 2, e.g. #000000 or #FAF8F5 */;
  --bg-surface: /* Exact Hex from Block 2, e.g. #0D0D0F or #FFFFFF */;
  --bg-elevated: /* Exact Hex from Block 2, e.g. #16161A or #F2EFE9 */;
  --text-primary: /* Exact Hex from Block 2, e.g. #FFFFFF or #111111 */;
  --text-secondary: /* Exact Hex from Block 2, e.g. #A1A1AA or #52525B */;
  --text-muted: /* Exact Hex from Block 2, e.g. #71717A */;
  --accent-primary: /* Exact Hex from Block 2, e.g. #ED7A36 or #3B82F6 */;
  --accent-secondary: /* Exact Hex from Block 2, e.g. #F59E0B or #6366F1 */;
  --border-subtle: /* Exact rgba/hex from Block 2, e.g. rgba(255, 255, 255, 0.10) */;
  --border-accent: /* Exact rgba/hex from Block 2, e.g. rgba(237, 122, 54, 0.45) */;
  --glow-atmosphere: /* Exact radial-gradient or surface backdrop from Block 2 */;
  --radius-card: /* Exact radius from Block 2, e.g. 16px or 0px */;
  --radius-pill: 9999px;
}

html,
body {
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-sans), sans-serif;
  overflow-x: hidden;
}

@keyframes marquee-left {
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.animate-marquee-infinite {
  display: flex;
  width: max-content;
  animation: marquee-left 26s linear infinite;
  will-change: transform;
}

.animate-marquee-infinite:hover {
  animation-play-state: paused;
}
```

### Step 4: Create Verbatim User Data Store (`src/data/siteData.ts`)
Read **Block 4 and Block 5** of `prompts/phase-1-foundation-data.md` and create `src/data/siteData.ts` with strongly typed TypeScript interfaces and 100% verbatim user content tailored to the project's website category (e.g., Portfolio, SaaS, E-Commerce, Agency, AI Product, etc.):
- `siteData.identity`: Person or Brand name, wordmark, role/value proposition, tagline, location, availability/status badge, bio/brand story paragraphs, hero visual/portrait path, and primary/secondary CTA buttons.
- `siteData.metrics` & `siteData.marqueeItems`: Exact stat numbers (e.g., `2+`, `14+`, `99.9%`) and ticker phrases/logos.
- `siteData.services` (or `features` / `capabilities`): Numbered items (e.g., `01` to `04`) with title, natural human description, deliverables/tags, and link.
- `siteData.projects` (or `products` / `caseStudies`): Complete item array with index (`01` to `0N`), title, category, human summary, tech stack/specs array, live/store URL, repo/secondary URL, and verified image path.
- `siteData.skills`, `siteData.education`, `siteData.certifications` (or `pricing` / `faqs` / `specs` depending on website category): Categorized groups and verified items.
- `siteData.testimonials` & `siteData.contact`: Client/customer quotes, names, roles, ratings, direct email, phone/WhatsApp, social links, and contact form/wizard options (e.g., service types & budget ranges).

### Step 5: Scaffold Route Skeleton (If Multi-Page Is Specified in Block 1)
If Block 1 of `prompts/phase-1-foundation-data.md` specifies multi-page routes (e.g., `/about`, `/projects`, `/skills`, `/contact`, `/pricing`, `/shop`), create clean placeholder route files (e.g., `src/app/about/page.tsx`) that import `siteData` so all route paths exist on disk.

### Step 6: Render the Single Big Visual Foundation Preview Card on Root Page (`localhost:3000`)
Read **Block 6** of `prompts/phase-1-foundation-data.md`. Replace the root page (e.g., `src/app/page.tsx`) with a **Single Large Visual Design-System Preview Card (`FoundationPreviewCard`)** (NOT the full website yet) so the user can visually inspect the entire design foundation on `localhost:3000`:
1. **Atmospheric Canvas Wrapper**:
   - Full-viewport wrapper (`relative min-h-screen w-full bg-[var(--bg-canvas)] text-[var(--text-primary)] py-12 px-6 overflow-hidden flex items-center justify-center`) with the live atmospheric radial glow (`style={{ background: "var(--glow-atmosphere)" }}`) rendered behind the card.
2. **The Single Big Foundation Card**:
   - Container: `relative z-10 w-full max-w-5xl rounded-[var(--radius-card)] bg-[var(--bg-surface)]/90 border border-[var(--border-subtle)] backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-10`.
3. **Section A - Header & Live Typography Hierarchy Specimen**:
   - Top status badge in `--font-mono` (`01 · PHASE 1 FOUNDATION PREVIEW`) in `text-[var(--accent-primary)]`.
   - Render `siteData.identity.name` in `--font-display` at Hero Display scale (`text-[clamp(2.75rem,7vw,6rem)] leading-[0.9] uppercase tracking-tight`) so the user immediately sees the display font in action.
   - Render an H2 sample heading (`--font-display` at `text-2xl md:text-4xl`) with `--accent-primary` highlight.
   - Render `siteData.identity.bio` in `--font-sans` (`text-[var(--text-secondary)] leading-relaxed max-w-2xl`) so body readability is verified.
4. **Section B - Live Color & Surface Token Swatches Grid**:
   - Render a 6-to-8 cell visual grid displaying live color blocks, token names, and exact Hex codes for `--bg-canvas`, `--bg-surface`, `--bg-elevated`, `--accent-primary`, `--accent-secondary`, `--text-primary`, `--text-secondary`, and `--border-accent`.
5. **Section C - Surface Physics & Sample UI Preview Strip**:
   - Show 1 sample Primary Accent Button (`bg-[var(--accent-primary)] rounded-full px-6 py-3 font-semibold`), 1 Secondary Bordered Pill, 1 `--font-mono` tag chip, and 1 sample Accent-Bordered Sub-Card (`border-[var(--border-accent)]`).
6. **Section D - Verbatim Data Store Verification Bar**:
   - Display a compact summary row confirming that `src/data/siteData.ts` is loaded (e.g., Projects/Products count, Services/Features count, Skill/Spec groups count, and `Zero AI Words Verified`).

## 3. Update Progress & Stop for User Review
1. Write or update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card live on `/`)
   - [ ] Stage 2: `/3-build-components`
   - [ ] Stage 3: `/4-cards-and-layout`
   - [ ] Stage 4: `/5-navbar-and-footer`
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Do NOT proceed to Stage 2 components. Instruct the user to open `http://localhost:3000` to inspect the **Single Big Foundation Preview Card** (colors, radial glow, typography hierarchy, and loaded data counts) and run `/3-build-components` when ready.