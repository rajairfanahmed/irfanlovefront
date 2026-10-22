---
name: 6-build-pages
description: Step 5 Implementation Command. Reads prompts/phase-5-pages.md, removes the temporary showroom, assembles the complete production Home page and all multi-page sub-routes with distinct layouts, interactive filtering, and 100% verbatim human copy from siteData, and stops for user inspection on localhost.
---

# Command 6: Assemble Production Pages, Multi-Route Layouts & Interactive Page States (`/6-build-pages`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Full-Page Product Architect, Staff Frontend Route Engineer (e.g., Next.js App Router, React, Vite, Remix, TypeScript, Tailwind CSS), and Senior Editorial Content Director** with **12+ years of production experience** assembling cohesive, high-converting, multi-section websites across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Full-Page Narrative & Section Pacing Mastery**: Deep expertise in orchestrating top-to-bottom page flows (e.g., Hero -> Infinite Marquee -> About & Metrics -> Services/Capabilities -> Featured Projects/Products -> Skills & Credentials -> Testimonials -> Contact -> Footer) where every section transitions with deliberate visual rhythm and never repeats the exact same card grid twice in a row.
- **Multi-Page Route Differentiation**: Mastery of designing distinct sub-page architectures (e.g., `/about`, `/projects`, `/skills`, `/contact`, `/pricing`, `/shop`, or `/projects/[slug]`) so inner pages feel purpose-built rather than copy-pasted clones of the home page.
- **Interactive Client State & Filtering Engineering**: Proven ability to wire live category filtering (`All`, `Full-Stack`, `AI`, `Frontend`, etc.), search/sort controls, expandable specification/FAQ drawers, working multi-step inquiry wizards, and one-click clipboard copy actions without breaking Server Component metadata exports.
- **100% Verbatim Human Copy & Asset Integrity**: Strict discipline to bind every heading, metric, project, service, degree, certification, testimonial, and image path directly from `src/data/siteData.ts` using natural, confident human copywriting with zero robotic AI filler.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-5-pages.md` First**:
   - Before writing any code, read `prompts/phase-5-pages.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md` through `prompts/phase-4-navbar-footer.md` plus `src/data/siteData.ts`.
   - If `prompts/phase-5-pages.md` does not exist, stop immediately and tell the user to complete Phase 5 in `/1-prompt-generator` first.
2. **Assemble All Production Pages & Routes in This Stage**:
   - Replace the temporary Stage 1-4 preview showroom on the root route (`src/app/page.tsx`) with the complete production Home Page, and build all sub-page routes specified in Block 2 of `prompts/phase-5-pages.md`.
   - Do NOT wire heavy GSAP ScrollTrigger timelines or SEO/AEO `llms.txt` schemas yet (those belong to `/7-animate-website` and `/8-seo-and-aeo`).
   - Once all pages and interactive states are live on `localhost:3000`, update `prompts/IMPLEMENTATION_PROGRESS.md` and **STOP** for user inspection.
3. **Strict Anti-AI Copywriting & Anti-CLI Lock**:
   - Scan every page and section component to ensure ZERO occurrences of banned AI meta-words (`Nexus`, `Zero-Slop`, `AI Slop`, `Eliminating Generic AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`) and ZERO unrequested `$ npx` terminal windows.

## 2. Step-by-Step Implementation Workflow

### Step 1: Remove Temporary Showroom & Assemble the Production Home Page (`src/app/page.tsx`)
Read **Block 1** of `prompts/phase-5-pages.md`. Replace the temporary showroom in `src/app/page.tsx` with the complete production Home Page by composing the UI primitives (`src/components/ui/`), cards (`src/components/cards/`), layout wrappers (`src/components/layout/`), and verbatim data (`src/data/siteData.ts`) in the exact top-to-bottom sequence specified in Block 1 (e.g.):
1. **Hero Section (`#hero`)**:
   - Render `<HeroSection />` with full identity, portrait/visual, availability badge, and primary/secondary CTAs from `siteData.identity`.
2. **Seamless Infinite Marquee Strip (`#marquee`)**:
   - Render `<InfiniteMarquee items={siteData.marqueeItems} />` immediately below the Hero.
3. **About & Key Metrics Section (`#about`)**:
   - Wrap in `<SectionContainer id="about" withTopBorder>` with `<SectionHeader index="01" eyebrow="ABOUT" title="..." />` (using the exact natural human heading from Block 1).
   - Render the editorial bio split and high-contrast metric cards (`2+`, `14+`, etc. from `siteData.metrics`) in `--font-display`.
4. **Services / Capabilities / Features Section (`#services`)**:
   - Wrap in `<SectionContainer id="services" withTopBorder>` with `<SectionHeader index="02" eyebrow="SERVICES" title="..." />`.
   - Map `siteData.services` into `<ServiceCard />` rows or Bento cards (`01` through `04`).
5. **Featured Projects / Work / Products Section (`#projects` or `#work`)**:
   - Wrap in `<SectionContainer id="projects" withTopBorder>` with `<SectionHeader index="03" eyebrow="SELECTED WORK" title="..." />`.
   - Include interactive category filter tabs (if specified in Block 1/3) and map `siteData.projects` into `<ProjectCard />` showcase cards with verified image paths, tech pills, and live/repo links.
6. **Skills, Education & Certifications / Specs Section (`#skills`)**:
   - Wrap in `<SectionContainer id="skills" withTopBorder>` with `<SectionHeader index="04" eyebrow="SKILLS & CREDENTIALS" title="..." />`.
   - Render categorized `<SkillGroupCard />` groups alongside verified `<CredentialCard />` items (degrees, universities, dates, and certifications from `siteData.education` and `siteData.certifications`).
7. **Testimonials / Client Reviews Section (`#reviews`)**:
   - Wrap in `<SectionContainer id="reviews" withTopBorder withGlow>` with `<SectionHeader index="05" eyebrow="CLIENT REVIEWS" title="..." />`.
   - Map `siteData.testimonials` into `<TestimonialCard />` items with warm radial spotlight glow.
8. **Interactive Contact Section (`#contact`)**:
   - Mount `<ContactSection />` (`id="contact"`) featuring the working multi-step inquiry wizard (`Step 1 of 3` -> `Step 2 of 3` -> `Step 3 of 3`) or split editorial form.

### Step 2: Build Distinct Multi-Page Sub-Routes (If Multi-Page Architecture Is Specified in Block 2)
Read **Block 2** of `prompts/phase-5-pages.md`. If the project includes dedicated sub-routes (e.g., `/about`, `/projects`, `/skills`, `/contact`, `/pricing`, `/shop`), build each route completely with its own distinct layout and visual rhythm (never copy-paste the exact same card box grid across every route):
- **`src/app/about/page.tsx` (e.g., Editorial Story + Career/Education Timeline + Certifications)**:
  - Render an architectural page masthead (`<h1>`), multi-paragraph human bio narrative, vertical or split education/career timeline, verified certification cards, and bottom CTA callout.
- **`src/app/projects/page.tsx` (e.g., Interactive Filterable Case-Study Archive)**:
  - Render page masthead (`<h1>`), live interactive category filter bar (`All`, `Full-Stack`, `AI & Automation`, `Frontend`, etc.), full project showcase grid (`<ProjectCard />`), and open-source/GitHub callout.
- **`src/app/skills/page.tsx` (e.g., Technical Capability Matrix + Numbered Services + Workflow)**:
  - Render page masthead (`<h1>`), domain-grouped `<SkillGroupCard />` matrix, full `<ServiceCard />` breakdown (`01-04`), and engineering/product process steps.
- **`src/app/contact/page.tsx` (e.g., Dedicated Inquiry Portal + Direct Channels + FAQ)**:
  - Render page masthead (`<h1>`), full `<ContactSection />` wizard, direct copy-email / WhatsApp / social cards, and expandable FAQ `<Accordion />`.

### Step 3: Wire All Navigation Links & Interactive Page States
Read **Block 3** of `prompts/phase-5-pages.md` and verify:
1. **Navigation Link Accuracy**:
   - Every link inside `Navbar.tsx`, `MenuOverlay.tsx`, `HeroSection.tsx`, and `Footer.tsx` points to a real, working route (`/`, `/about`, `/projects`, `/skills`, `/contact`) or a matching section anchor ID (`#about`, `#services`, `#projects`, `#skills`, `#reviews`, `#contact`).
2. **Interactive Category Filtering**:
   - Clicking category tabs on the Projects/Products section dynamically filters displayed items without page reload.
3. **Interactive Copy-to-Clipboard & Form State**:
   - Clicking email copy buttons copies `siteData.contact.email` and shows instant `"Copied!"` feedback, and all steps in `ContactSection` transition cleanly.

### Step 4: Audit Verbatim Content, Image Paths & Zero-AI Jargon
Read **Block 4 and Block 5** of `prompts/phase-5-pages.md` and run a strict check across all page and component files:
- Confirm 100% of user data in `src/data/siteData.ts` (Identity, Metrics, Services, Projects, Skills, Education, Certifications, Testimonials, Contact) is rendered accurately.
- Confirm every `<img>` / `<Image>` `src` points to a verified file in `public/` or a clean high-contrast typographic/gradient fallback so zero broken image icons appear in the browser.
- Confirm zero banned AI words (`Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`) exist anywhere in the codebase.

## 3. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes)
   - [x] Stage 4: `/5-navbar-and-footer` (`Navbar`, `MenuOverlay`, `ContactSection` & `Footer`)
   - [x] Stage 5: `/6-build-pages` (Full Production Home Page & All Sub-Routes Assembled on `/`)
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-seo-and-aeo`
   - [ ] Stage 8: `/9-responsive-and-qa`
   ```
2. **STOP IMMEDIATELY**: Do NOT wire GSAP ScrollTrigger timelines or SEO/AEO metadata yet. Instruct the user to open `http://localhost:3000` to inspect the complete assembled Home Page and all sub-routes, test project filtering and navigation links, and then run `/7-animate-website` when ready.
