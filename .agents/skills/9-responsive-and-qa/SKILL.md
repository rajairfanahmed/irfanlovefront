---
name: 9-responsive-and-qa
description: Step 8 (Final) Implementation Command. Reads prompts/phase-8-responsive-qa.md, audits and fixes 375px mobile, 768px tablet, and 1440px desktop breakpoints, enforces >=44px touch targets, Core Web Vitals, WCAG AA contrast, and the 12-Point Anti-Bug & Anti-Slop Checklist, runs npx tsc --noEmit and npm run build, and completes the production website.
---

# Command 9: Multi-Viewport Responsive Polish, Accessibility Audit & Production Build QA (`/9-responsive-and-qa`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Frontend QA & Performance Architect, Staff Responsive Layout Engineer (e.g., Next.js, React, Vite, Remix, TypeScript, Tailwind CSS, CSS Grid), and Senior Accessibility & Design-Fidelity Inspector** with **12+ years of production experience** shipping zero-defect, 100-Lighthouse websites across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Multi-Viewport Responsive Engineering (`375px`, `768px`, `1440px`)**: Deep expertise in fluid `clamp()` typography math, mobile-first CSS Grid/Flexbox adaptation, safe horizontal gutters, and strict overflow prevention (`document.documentElement.scrollWidth <= window.innerWidth`) so oversized display titles, overlapping portraits, and giant footer watermarks never clip or trigger horizontal scrollbars on `375px` mobile screens.
- **Touch Ergonomics, Accessibility (WCAG AA) & Keyboard Navigation**: Mastery of enforcing `>= 44px x 44px` touch hit targets on all buttons, pills, and links, visible keyboard focus rings (`focus-visible:ring-2`), focus trapping and `ESC` dismissal in overlay menus, semantic ARIA attributes, and high-contrast text/watermark legibility.
- **Core Web Vitals & Runtime Performance (`LCP`, `CLS`, `INP`)**: Proven ability to optimize above-the-fold Largest Contentful Paint (`priority` + `sizes` on Hero media), eliminate Cumulative Layout Shift (`aspect-ratio` / explicit dimensions + `display: "swap"` fonts), and ensure clean `GSAP ScrollTrigger` / `Lenis` listener teardown on unmount.
- **12-Point Anti-Bug, Anti-Slop & Production Build Verification**: Strict discipline to audit the entire codebase against all 8 phase prompts (`prompts/phase-1-*.md` to `prompts/phase-8-*.md`), eliminate any remaining layout, contrast, or copy issues, and verify a 100% clean `npx tsc --noEmit` and `npm run build` before final handoff.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-8-responsive-qa.md` First**:
   - Before making any edits, read `prompts/phase-8-responsive-qa.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md` through `prompts/phase-7-seo-aeo.md` against all built files in `src/`.
   - If `prompts/phase-8-responsive-qa.md` does not exist, stop immediately and tell the user to complete Phase 8 in `/1-prompt-generator` first.
2. **Never Skip Real Code Fixes or Terminal Build Checks**:
   - Do NOT merely write a text report claiming the site is responsive. You MUST inspect and edit the actual JSX/CSS classes in `src/components/` and `src/app/` to fix any mobile overflow, cramped spacing, small touch targets, or TypeScript/build errors, and run `npx tsc --noEmit` + `npm run build` in the terminal.

## 2. Step-by-Step Implementation & QA Workflow

### Step 1: Audit & Fix the Viewport Breakpoint Matrix (`375px` Mobile, `768px` Tablet, `1440px` Desktop)
Read **Block 1** of `prompts/phase-8-responsive-qa.md` and inspect every component in `src/components/layout/`, `src/components/cards/`, `src/components/ui/`, and `src/app/` across all three canonical breakpoints:
1. **`375px` Small Mobile Viewport Fixes**:
   - **Global Overflow Lock**: Ensure `html, body` and `<main>` enforce `overflow-x-hidden max-w-full` and containers use safe mobile gutters (`px-5`).
   - **Hero Section (`HeroSection.tsx`)**:
     - Ensure the giant display headline uses a safe mobile lower bound (e.g., `text-[clamp(3.1rem,13.5vw,15rem)] leading-[0.9] break-words`) so long words or names never overflow `375px`.
     - Ensure the overlapping cutout portrait (`w-[250px] sm:w-[320px] md:w-[440px] mx-auto -mt-[10vw] relative z-20`) or hero visual centers cleanly above the mobile bio copy and full-width (`w-full sm:w-auto`) primary/secondary CTA buttons.
   - **Numbered Service Rows (`ServiceCard.tsx`)**:
     - Ensure desktop horizontal rows stack cleanly into vertical mobile cards (`flex-col md:flex-row gap-4 py-6 px-4`) where the index (`01`) and title sit on top, description and `<TechPill />` chips wrap cleanly (`flex-wrap gap-2`) in the middle, and the action arrow button is accessible.
   - **Projects, Skills, Credentials & Testimonials Grids**:
     - Ensure all multi-column grids collapse to `grid-cols-1 gap-6` on `<640px` with comfortable mobile padding (`p-6`).
   - **Multi-Step Contact Wizard (`ContactSection.tsx`)**:
     - Ensure selectable service/budget pills wrap cleanly (`flex flex-wrap gap-2.5`) and `Next Step` / `Back` / `Send Message` buttons stack or span cleanly on `375px`.
   - **Giant Footer Watermark (`Footer.tsx`)**:
     - Ensure the full-width bottom brand/person watermark uses `text-[clamp(2.5rem,13vw,15rem)] px-2 leading-[0.85]` so the entire name fits on a `375px` screen without horizontal clipping.
2. **`768px` Tablet & `1440px` Desktop Viewport Fixes**:
   - Verify smooth transition to `md:grid-cols-2 gap-6` on tablet (`px-8`) and full `12-column` asymmetric Bento/editorial proportions (`max-w-[1360px] mx-auto px-12 py-24 lg:py-32`) on desktop.

### Step 2: Enforce Touch Targets, Keyboard Navigation & Contrast Compliance
Read **Block 2** of `prompts/phase-8-responsive-qa.md` and verify/fix:
1. **Touch Target Ergonomics (`>= 44px x 44px`)**:
   - Ensure every `<button>`, `<a>`, Navbar `Menu [=]` pill, `SelectablePill`, `FilterTabs` button, and social link has `min-h-[44px]` (and `min-w-[44px]` for icon buttons).
2. **Keyboard Focus & Overlay Accessibility**:
   - Ensure all interactive controls include `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`.
   - Verify `MenuOverlay.tsx` closes on `Escape` key press and restores body scroll when closed.
3. **Color & Footer Watermark Contrast Lock**:
   - Verify body text (`--text-primary`, `--text-secondary`) meets WCAG AA contrast (`>= 4.5:1`).
   - Verify the giant `Footer.tsx` watermark is clearly visible at rest (`text-[#262320]` on dark `#000000` canvas or `text-black/15` on light canvas - NEVER invisible black-on-black) and illuminates in `var(--accent-primary)` with radial drop-shadow glow on hover/focus.

### Step 3: Optimize Core Web Vitals (`LCP`, `CLS`, `INP`)
Read **Block 3** of `prompts/phase-8-responsive-qa.md` and verify/fix:
- **LCP (Largest Contentful Paint)**: Add `priority` (or `fetchPriority="high"`) and explicit `sizes` to the above-the-fold Hero portrait/visual image.
- **CLS (Cumulative Layout Shift = 0)**: Ensure every `ProjectCard` image, portrait, and icon container has explicit `width`/`height` or `aspect-[16/10]` / `aspect-square` classes so zero layout shift occurs during image loading.
- **INP & Memory Hygiene**: Confirm all `useEffect` hooks in `SmoothScrollProvider.tsx`, `Reveal.tsx`, and `MenuOverlay.tsx` clean up event listeners, `Lenis` instances, and `GSAP` contexts (`return () => ctx.revert()`) on unmount.

### Step 4: Execute the Mandatory 12-Point Anti-Bug & Anti-Slop Final Audit
Read **Block 4** of `prompts/phase-8-responsive-qa.md` and verify every single item below in the codebase (fixing any discrepancy immediately):
1. **Design Tokens Active**: Exact `:root` hex colors, radial glows (`--glow-atmosphere`), and fonts (`--font-display`, `--font-sans`, `--font-mono`) from Phase 1 are active in `globals.css` and `layout.tsx`.
2. **Navbar & Menu Overlay**: Exact chosen desktop navbar archetype is rendered (no unrequested generic SaaS link bar when Minimal Split Bar was chosen), and `Menu [=]` -> `Close [X]` opens/closes the animated overlay smoothly.
3. **Hero Z-Index Stack**: Atmospheric glow (`z-0`), giant display headline (`z-10`), overlapping cutout portrait/visual (`z-20`), and foreground bio/CTA (`z-30`) are layered properly.
4. **True Seamless Infinite Marquee**: `InfiniteMarquee.tsx` loops continuously forever via `@keyframes marquee-left` on a duplicated array (`[...items, ...items]`), never sitting as a static flex row.
5. **Distinct Section & Page Rhythm**: Services (`01-04` interactive rows/cards), Projects (case-study showcase cards), Skills/Credentials, and Testimonials (radial glow cards) use their dedicated card archetypes across `/` and all sub-routes.
6. **Working Multi-Step Contact Wizard**: `ContactSection.tsx` progresses cleanly through `Step 1 -> Step 2 -> Step 3 -> Confirmation` with an animated `--accent-primary` progress bar.
7. **Footer Watermark Visibility & Hover Glow**: Full-width footer brand/person watermark is clearly visible at rest and glows in `var(--accent-primary)` on hover.
8. **100% Verbatim User Data**: All text, metrics, services, projects, degrees, certifications, testimonials, and links match `src/data/siteData.ts` with zero broken image paths.
9. **Zero Banned AI Words or Fake CLI Boxes**: Confirmed zero occurrences of `Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`, or unrequested `$ npx` terminal windows anywhere in JSX.
10. **Motion Active**: `Lenis` smooth scroll, Hero split-text reveal, `ScrollTrigger` / `Framer Motion` section reveals, and metric counters run smoothly at 60fps.
11. **Technical SEO & AEO Active**: Per-route `Metadata`, `<JsonLdSchema />` `@graph`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `public/llms.txt`, and `public/llms-full.txt` are present and valid.
12. **Responsive Overflow Lock**: Zero horizontal overflow across `375px`, `768px`, and `1440px`.

### Step 5: Run Terminal Typecheck & Production Build Verification
Read **Block 5** of `prompts/phase-8-responsive-qa.md` and run these commands in the project terminal:
1. `npx tsc --noEmit`
2. `npm run build`
- If any TypeScript, ESLint, Next.js Server/Client boundary, or CSS build error appears, fix the root cause immediately and re-run `npm run build` until it succeeds with zero errors.

## 3. Update Progress & Final Live Handoff
1. Update `prompts/IMPLEMENTATION_PROGRESS.md` so all 8 stages are marked complete (`[x]`):
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes)
   - [x] Stage 4: `/5-navbar-and-footer` (`Navbar`, `MenuOverlay`, `ContactSection` & `Footer`)
   - [x] Stage 5: `/6-build-pages` (Full Production Home Page & All Sub-Routes Assembled)
   - [x] Stage 6: `/7-animate-website` (`Lenis` Smooth Scroll, `GSAP`/`Framer Motion` Reveals & Micro-Interactions)
   - [x] Stage 7: `/8-seo-and-aeo` (Metadata API, JSON-LD `@graph`, `llms.txt`, `sitemap.ts`, `robots.ts` & OG Image)
   - [x] Stage 8: `/9-responsive-and-qa` (375px/768px/1440px Responsive Polish, 12-Point Audit & Clean `npm run build` Complete)
   ```
2. Ensure the development server is running on `http://localhost:3000` and present a concise final completion summary to the user confirming that all 8 stages, responsive breakpoints, animations, SEO/AEO endpoints, and the production build passed with zero errors.
