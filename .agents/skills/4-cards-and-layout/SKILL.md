---
name: 4-cards-and-layout
description: Step 3 Implementation Command. Reads prompts/phase-3-cards-layout.md, builds structural layout wrappers (SectionContainer, SectionHeader, BentoGrid/SplitLayout), HeroSection with exact z-index layering, and custom card/row archetypes in src/components/cards/, mounts the live Hero + Cards Showroom on localhost, and stops for user inspection.
---

# Command 4: Build Hero Architecture, Structural Grids & Custom Card Archetypes (`/4-cards-and-layout`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Creative Layout Engineer, Staff Spatial UI Architect (e.g., Next.js, React, Vite, TypeScript, Tailwind CSS, CSS Grid), and Senior Editorial Art Director** with **12+ years of production experience** designing and building signature hero compositions, structural grid systems, and custom card archetypes across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Multi-Layer Hero Composition & Z-Index Engineering**: Deep expertise in orchestrating layered hero architectures (e.g., `z-0` atmospheric radial spotlight glow -> `z-10` viewport-spanning condensed display typography -> `z-20` centered overlapping cutout portrait -> `z-30` foreground bio copy, availability badge, and CTA buttons; or 3D perspective-tilted SaaS dashboards, asymmetric 60/40 editorial splits, and full-bleed campaign heroes).
- **Architectural Grid & Section Rhythm Mastery**: Mastery of CSS Grid and Flexbox layout containers (`SectionContainer`, `SectionHeader`, `12-column` asymmetric Bento grids, sticky left/scrolling right split layouts, and fluid `clamp()` vertical spacing) that prevent repetitive "same box on every section" fatigue.
- **Category-Specific Card & Row Craft**: Proven ability to build distinct, tactile card and row systems (e.g., full-width numbered `01-04` interactive service rows with `1px` hairlines and `-45deg` arrow rotation, editorial case-study project cards with `scale-105` hover zoom, e-commerce product cards with secondary hover image swap, atmospheric radial-glow testimonial cards, and structured skill/credential matrix cards).
- **Anti-Slop Visual Authenticity**: Strict discipline to never inject unrequested fake `$ npx` CLI terminal boxes, fake system telemetry widgets, or generic stock layout clones when building heroes and project cards.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-3-cards-layout.md` First**:
   - Before writing any code, read `prompts/phase-3-cards-layout.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md`, `prompts/phase-2-components.md`, and `src/data/siteData.ts`.
   - If `prompts/phase-3-cards-layout.md` does not exist, stop immediately and tell the user to complete Phase 3 in `/1-prompt-generator` first.
2. **Build ONLY Layout Wrappers, Hero & Cards in This Stage**:
   - Do NOT build the global Navbar, Hamburger Overlay, Contact Wizard, Footer, or full multi-page routes in this command.
   - Build the structural layout wrappers in `src/components/layout/`, `HeroSection.tsx` in `src/components/layout/`, and all card/row components in `src/components/cards/`. Then mount the live **HeroSection + InfiniteMarquee + Phase 3 Cards & Layout Showroom** on the root preview route (`localhost:3000`) and **STOP** for user inspection.
3. **Strict Verbatim Project Counts Lock**:
   - Strictly respect the user's exact project array from `siteData.projects`. If the user has 2 projects, render exactly 2 project cards. Never synthesize, hallucinate, or inject dummy filler cards to artificially pad a grid.
4. **Anti-Cliche Formatting & Pulse Lock**:
   - Eyebrows, headers, and watermark elements must never contain double slashes (`//`). Use clean spacing (`01  PROJECTS`) or subtle dots (`01 · PROJECTS`).
   - Cards and status badges must not use pulsing animations (`animate-pulse` or `animate-ping`) unless specifically requested.
5. **Strict Anti-AI Copywriting & Anti-CLI Lock**:
   - Never render banned AI meta-words (`Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`) or unrequested `$ npx` terminal windows inside `HeroSection.tsx` or `ProjectCard.tsx`.

## 2. Directory Layout & Architectural File Map

All layout containers and card archetypes must be placed cleanly inside the following paths:
```
src/components/
├── layout/
│   ├── SectionContainer.tsx  # Max-width layout bounds and padding
│   ├── SectionHeader.tsx     # Eyebrow, bold display H2, and lead copy
│   ├── BentoGrid.tsx         # 12-column responsive layout grid
│   ├── SplitLayout.tsx       # Sticky left and scrolling right split
│   └── HeroSection.tsx       # Layered hero with exact z-index stack
└── cards/
    ├── ServiceCard.tsx       # Full-width numbered row or bento card
    ├── ProjectCard.tsx       # High-contrast work card with hover zoom
    ├── TestimonialCard.tsx   # Elevated card with radial spotlight glow
    └── SkillGroupCard.tsx    # Domain-grouped technical skill matrix
```

## 3. Step-by-Step Implementation Workflow

### Step 1: Build Structural Layout Wrappers (`src/components/layout/`)
Read **Block 1** of `prompts/phase-3-cards-layout.md` and create:
1. **`src/components/layout/SectionContainer.tsx`**:
   - Reusable `<section>` wrapper enforcing the exact max-width, horizontal padding, and vertical rhythm from Block 1 (e.g., `max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 py-20 md:py-32 relative`).
   - Supports props: `id?: string`, `ariaLabel?: string`, `withTopBorder?: boolean`, `withGlow?: boolean`, `className?: string`, `children: ReactNode`.
2. **`src/components/layout/SectionHeader.tsx`**:
   - Combines `<SectionEyebrow index={index} label={eyebrow} />` from `src/components/ui/`, a bold H2 heading in `font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.98] tracking-tight`, and an optional right-aligned human lead paragraph (`max-w-md text-[var(--text-secondary)]`) or action button.
3. **`src/components/layout/BentoGrid.tsx` & `SplitLayout.tsx` (As Specified in Block 1)**:
   - Reusable `12-column` asymmetric Bento grid (`grid grid-cols-1 md:grid-cols-12 gap-6`) and sticky split-section wrapper (`lg:grid lg:grid-cols-12 lg:gap-12` with `lg:col-span-4 lg:sticky lg:top-28 h-fit` on the left and `lg:col-span-8` on the right).

### Step 2: Build the Hero Section Component (`src/components/layout/HeroSection.tsx`)
Read **Block 2** of `prompts/phase-3-cards-layout.md` and create `src/components/layout/HeroSection.tsx` (`"use client"`) importing real identity/hero data from `src/data/siteData.ts` and atomic UI primitives (`Button`, `StatusBadge`) from `src/components/ui/`:
- Implement the exact selected Hero archetype and Z-index layering specified in Block 2 (e.g.):
  - **If Layered Giant Display Title + Center Overlapping Cutout Portrait (e.g., `robinsweb.net` Style)**:
    - **Layer 1 (`z-0` Atmospheric Spotlight)**: Centered radial glow (`style={{ background: "var(--glow-atmosphere)" }}`) behind the text and portrait so the canvas has rich depth.
    - **Layer 2 (`z-10` Giant Condensed Display Text)**: Full-width uppercase display headline (`font-[family-name:var(--font-display)] text-[clamp(3.2rem,14.5vw,15rem)] leading-[0.88] tracking-tight text-center uppercase select-none`).
    - **Layer 3 (`z-20` Center Overlapping Cutout Portrait)**: High-resolution cutout portrait (`relative z-20 mx-auto -mt-[12vw] md:-mt-[10vw] w-[260px] sm:w-[340px] md:w-[440px] object-contain pointer-events-none`) overlapping the lower half of the giant background headline.
    - **Layer 4 (`z-30` Foreground Bio, Badge & CTAs)**: Left and right desktop floating blocks (stacking cleanly below the portrait on mobile `<768px`) containing `StatusBadge`, human bio intro, and primary/secondary `Button` triggers.
  - **If Asymmetric 60/40 Split, Centered 3D SaaS Interface, Full-Bleed Showreel, E-Commerce Campaign, or Bento Hero**:
    - Build the exact column ratios, 3D perspective transforms (`perspective(1200px) rotateX(8deg)`), or visual framing specified in Block 2.

### Step 3: Build Services / Features Card or Row Archetype (`src/components/cards/ServiceCard.tsx`)
Read **Block 3** of `prompts/phase-3-cards-layout.md` and create `src/components/cards/ServiceCard.tsx` (`"use client"`):
- Implement the exact chosen Services/Features archetype from Block 3 (e.g.):
  - **If Full-Width Numbered Interactive Row (`01` - `04`)**:
    - Full-width row with top/bottom `1px` hairlines (`group relative border-b border-[var(--border-subtle)] py-8 md:py-12 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-[var(--bg-surface)]/70`).
    - Left: Monospace index (`01`, `02`, `03`, `04` in `font-[family-name:var(--font-mono)] text-[var(--accent-primary)] text-lg`) + bold display title (`font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-5xl uppercase tracking-wide transition-transform duration-300 group-hover:translate-x-3`).
    - Right: Natural human description (`max-w-md text-[var(--text-secondary)]`), deliverable `<TechPill />` tags, and a circular action arrow button that rotates `-45deg` and fills with `var(--accent-primary)` on hover.
  - **If Bento Feature Card, 3-Column Spec Card, or Sticky Stacking Card**:
    - Build the exact surface, border illumination, and layout geometry specified in Block 3.

### Step 4: Build Projects / Case Studies / Products Card Archetype (`src/components/cards/ProjectCard.tsx`)
Read **Block 4** of `prompts/phase-3-cards-layout.md` and create `src/components/cards/ProjectCard.tsx` (`"use client"`):
- Implement the exact chosen Project/Product card archetype from Block 4 (e.g., Editorial Case-Study Showcase Card, Alternating Full-Width Split Card, or E-Commerce Product Card):
  - **Visual Container**: Aspect-ratio wrapper (e.g., `aspect-[16/10]` or `aspect-[3/4]`) with `overflow-hidden rounded-[var(--radius-card)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] relative`.
  - **Verified Image & Hover Zoom**: Render the verified image path from `siteData.projects` (or a clean high-contrast typographic/gradient visual preview if marked as a placeholder in `siteData.ts`) with smooth hover zoom (`transition-transform duration-700 ease-out group-hover:scale-105`).
  - **Metadata & Actions**: Render index (`01`), category badge, bold title, concise human summary, `<TechPill />` stack array, and live/repo action links.
  - **Strict Lock**: Render strictly the real user projects. Never synthesize extra project cards. Never render fake `$ npx` terminal windows inside project cards.

### Step 5: Build Testimonials, Skills & Supporting Cards (`src/components/cards/`)
Read **Block 5** of `prompts/phase-3-cards-layout.md` and create:
1. **`src/components/cards/TestimonialCard.tsx`**:
   - Dark/elevated surface card (`group relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 md:p-8 transition-all duration-300 hover:border-[var(--border-accent)] hover:-translate-y-1`).
   - Includes the atmospheric radial spotlight glow layer (`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500`, styled with a radial gradient using `var(--accent-primary)`), star rating row in `text-[var(--accent-primary)]`, verbatim client quote, and author name/role footer.
2. **`src/components/cards/SkillGroupCard.tsx` & `CredentialCard.tsx` (or `PricingCard.tsx`)**:
   - Clean domain-grouped cards displaying categorized skills/tools (`TechPill` chips), verified education degrees, certifications, or pricing tiers from `src/data/siteData.ts` with subtle `1px` borders and hover accent illumination.

### Step 6: Update Root Preview (`localhost:3000`) with Hero + Cards Showroom
Read **Block 6** of `prompts/phase-3-cards-layout.md`. Update the root preview page (e.g., `src/app/page.tsx`) so the user can visually inspect Stage 3 in the browser:
1. **Top of Page**: Render the live `<HeroSection />` immediately followed by `<InfiniteMarquee items={siteData.marqueeItems} />`.
2. **Below Hero**: Render a `<SectionContainer>` containing a **Phase 3: Cards & Layout Showroom** with `<SectionHeader index="03" eyebrow="STAGE 3 SHOWROOM" title="CARDS & LAYOUT ARCHETYPES" />`:
   - Render live `<ServiceCard />` rows/cards from `siteData.services`.
   - Render live `<ProjectCard />` showcase cards strictly matching `siteData.projects` length.
   - Render live `<TestimonialCard />` radial-glow cards from `siteData.testimonials`.
   - Render live `<SkillGroupCard />` / `<CredentialCard />` cards from `siteData.skills` and `siteData.education`.

## 4. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes live on `/`)
   - [ ] Stage 4: `/5-navbar-and-footer`
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Do NOT build the Navbar, Menu Overlay, Contact Wizard, or Footer yet. Instruct the user to open `http://localhost:3000` to inspect the live **HeroSection** (layering, portrait/visual, typography, and marquee) and test hovering each **ServiceCard, ProjectCard, TestimonialCard, and SkillGroupCard**, and then run `/5-navbar-and-footer` when ready.
