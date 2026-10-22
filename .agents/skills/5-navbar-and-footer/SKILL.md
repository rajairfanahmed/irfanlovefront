---
name: 5-navbar-and-footer
description: Step 4 Implementation Command. Reads prompts/phase-4-navbar-footer.md, builds Navbar, MenuOverlay state machine, ContactSection multi-step wizard or split form, and Footer with high-contrast hover-glow giant watermark, mounts them in root layout and localhost preview, and stops for user inspection.
---

# Command 5: Build Desktop Navbar, Hamburger Overlay, Contact Wizard & Interactive Footer (`/5-navbar-and-footer`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Navigation & Shell Architect, Staff Interactive State Engineer (e.g., Next.js, React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP), and Senior Conversion UX Designer** with **12+ years of production experience** engineering global navigation systems, overlay menu state machines, high-converting inquiry wizards, and signature interactive footers across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Global Navigation & Archetype Precision**: Deep expertise in building exact desktop and mobile navigation architectures without ever falling back to unrequested generic templates (e.g., Minimal Split Bar with Brand left + `Menu [=]` pill right and zero cluttered middle links, Floating Center Glass Island, Docked SaaS Header, Enterprise Mega-Menu, E-Commerce Split Header with Cart Drawer trigger, Editorial Masthead, Left Command Sidebar, or Bottom Floating Dock).
- **Accessible Overlay & Drawer State Machines**: Mastery of client-side menu state management (`isOpen` toggle, `Menu [=]` to `Close [X]` button morph, `document.body.style.overflow` scroll lock, `ESC` key listener, backdrop click dismissal, focus trapping, and automatic close on route/anchor selection).
- **High-Converting Contact & Multi-Step Wizard Engineering**: Proven ability to build interactive multi-step inquiry wizards (`Step 1 of 3` -> `Step 2 of 3` -> `Step 3 of 3` with animated `--accent-primary` progress bar, clickable `SelectablePill` service/budget chips, step validation, and instant human confirmation state) as well as split editorial contact forms and copy-to-clipboard triggers.
- **High-Contrast Interactive Footer & Watermark Physics**: Mastery of crafting full-viewport-width typographic brand watermarks (`clamp(3.2rem, 14.5vw, 15rem)`) that maintain clear base contrast at rest (e.g., `#262320` on `#000000` dark canvas or `rgba(0,0,0,0.14)` on light canvas - never invisible black-on-black) and smoothly illuminate in `var(--accent-primary)` with radial drop-shadow glow on pointer hover.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-4-navbar-footer.md` First**:
   - Before writing any code, read `prompts/phase-4-navbar-footer.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md` through `prompts/phase-3-cards-layout.md` plus `src/data/siteData.ts`.
   - If `prompts/phase-4-navbar-footer.md` does not exist, stop immediately and tell the user to complete Phase 4 in `/1-prompt-generator` first.
2. **Build ONLY Navbar, MenuOverlay, ContactSection & Footer in This Stage**:
   - Do NOT assemble the full production Home page or sub-routes yet (that happens in `/6-build-pages`).
   - Build `Navbar.tsx`, `MenuOverlay.tsx`, `ContactSection.tsx`, and `Footer.tsx` inside `src/components/layout/`, mount `<Navbar />` and `<Footer />` in the root layout (e.g., `src/app/layout.tsx`), mount `<ContactSection />` inside the showroom on `localhost:3000`, update `prompts/IMPLEMENTATION_PROGRESS.md`, and **STOP** for user inspection.
3. **Strict Anti-AI Copywriting Lock**:
   - Use natural, confident human labels (`Home`, `About`, `Services`, `Work`, `Projects`, `Reviews`, `Contact`, `Let's Work Together`, `Send a Message`).
   - Never output banned AI meta-words (`Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergy`) in navigation links, contact headings, or footer labels.

## 2. Step-by-Step Implementation Workflow

### Step 1: Build the Desktop Navbar Component (`src/components/layout/Navbar.tsx`)
Read **Block 1** of `prompts/phase-4-navbar-footer.md` and create `src/components/layout/Navbar.tsx` (`"use client"`):
- Import `siteData` from `src/data/siteData.ts` and render the exact selected Desktop Navbar archetype from Block 1 (e.g.):
  - **If Archetype A - Minimal Split Bar (`Brand` Left + `Menu [=]` Pill Right, e.g., `robinsweb.net` Style)**:
    - Fixed/sticky top bar (`fixed top-0 inset-x-0 z-50 h-20 px-5 sm:px-8 md:px-12 flex items-center justify-between backdrop-blur-md bg-[var(--bg-canvas)]/70 border-b border-[var(--border-subtle)]`).
    - Left: Uppercase brand/person wordmark (`font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-wider uppercase text-[var(--text-primary)]`).
    - Right: Interactive rounded pill button (`min-h-[44px] rounded-full px-5 py-2.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 flex items-center gap-3 hover:border-[var(--accent-primary)] transition-all duration-300`) that toggles `isOpen` and morphs its label/icon between `Menu [=]` and `Close [X]`.
    - **CRITICAL LOCK**: Do NOT render horizontal desktop nav links in the center of the bar when Archetype A is selected.
  - **If Archetype B (Floating Center Glass Island), C (Docked Full-Width Header), D (Mega-Menu), E (E-Commerce Split Utility Header), F (Editorial Masthead), G (Left Command Rail), or H (Bottom Floating Dock)**:
    - Build the exact structural geometry, links, and action triggers specified in Block 1.

### Step 2: Build the Hamburger & Overlay Menu State Machine (`src/components/layout/MenuOverlay.tsx`)
Read **Block 2** of `prompts/phase-4-navbar-footer.md` and create `src/components/layout/MenuOverlay.tsx` (`"use client"`):
- Controlled by `isOpen: boolean` and `onClose: () => void` passed from `Navbar.tsx`.
- **State & Ergonomics**:
  - Lock background page scroll (`document.body.style.overflow = isOpen ? "hidden" : ""`) while open, and clean up on unmount.
  - Listen for `keydown` (`Escape`) to close immediately.
  - Clicking any navigation link or the backdrop closes the overlay smoothly.
- **Internal Overlay Architecture (As Specified in Block 2)**:
  - Render the exact chosen overlay variant (e.g., Full-Screen Staggered Curtain `fixed inset-0 z-40 bg-[var(--bg-canvas)]/95 backdrop-blur-2xl`, Split-Screen Image Preview Overlay, Slide-In Right Frosted Glass Drawer, or Expanding Floating Island).
  - Display numbered navigation items (`01 HOME`, `02 ABOUT`, `03 SERVICES`, `04 WORK`, `05 CONTACT` or project routes) in `font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight`, shifting right (`hover:translate-x-4`) and transitioning to `text-[var(--accent-primary)]` on hover.
  - Include a bottom row displaying verbatim direct email and social links (`GitHub`, `LinkedIn`, etc.) from `siteData.contact`.

### Step 3: Build the Contact Section / Multi-Step Inquiry Wizard (`src/components/layout/ContactSection.tsx`)
Read **Block 3** of `prompts/phase-4-navbar-footer.md` and create `src/components/layout/ContactSection.tsx` (`"use client"`), importing `StepProgressBar`, `SelectablePill`, `TextInput`, `TextArea`, and `Button` from `src/components/ui/`:
- Implement the exact Contact architecture specified in Block 3 (e.g.):
  - **If Variant A - Multi-Step Interactive Wizard Form with Progress Bar (`Step 1 of 3`)**:
    - Maintain React state: `step` (`1 | 2 | 3`), `isSubmitted` (`boolean`), and `formData` (`service`, `budget`, `name`, `email`, `timeline`, `message`).
    - Render `<StepProgressBar currentStep={step} totalSteps={3} />` at the top of the wizard card.
    - **Step 1 (Scope & Budget)**: Render interactive `<SelectablePill />` groups for Service Type and Budget Range from `siteData.contact` + a `Next Step` button.
    - **Step 2 (Your Details)**: Render `<TextInput />` fields for Name, Email, and Timeline + `Back` and `Next Step` buttons.
    - **Step 3 (Project Brief)**: Render `<TextArea />` for project details + `Back` and `Send Message` submit button.
    - **Confirmation State**: On submit, render a clean, warm human confirmation card with a `Send Another Message` reset button.
  - **If Variant B (Split Editorial Single-Step Form) or Variant C (Booking Callout + Message Card)**:
    - Build the left contact details column (natural human heading, copyable email/phone pills, availability badge, social links) and the right validated form card.

### Step 4: Build the Global Footer & Giant Interactive Brand Watermark (`src/components/layout/Footer.tsx`)
Read **Block 4** of `prompts/phase-4-navbar-footer.md` and create `src/components/layout/Footer.tsx` (`"use client"`):
- **Top Footer Row**:
  - Render quick navigation links, social media pill links (`GitHub`, `LinkedIn`, etc. from `siteData.contact`), human copyright notice (`© {new Date().getFullYear()} {siteData.identity.name}`), and a working `Back to Top` button (`window.scrollTo({ top: 0, behavior: "smooth" })`).
- **Giant Interactive Brand Watermark Masthead (If Specified in Block 4)**:
  - Render the full-viewport-width uppercase brand or person name (`siteData.identity.wordmark` or `siteData.identity.name`) in `font-[family-name:var(--font-display)] text-[clamp(2.75rem,13.8vw,15rem)] leading-[0.85] tracking-tight uppercase text-center select-none cursor-pointer transition-all duration-500`.
  - **MANDATORY BASE CONTRAST LOCK**: At rest, the watermark MUST be clearly visible against `--bg-canvas` (use `text-[#262320]` on a dark `#000000` canvas or `text-black/15` on a light canvas - **NEVER render invisible `#050505` or `#0A0A0A` black-on-black text!**).
  - **MANDATORY HOVER GLOW LOCK**: On pointer hover (`hover:`), smoothly transition the watermark to `hover:text-[var(--accent-primary)] hover:drop-shadow-[0_0_45px_rgba(237,122,54,0.55)]` (matching the project's primary accent glow).

### Step 5: Mount Global Shell in Root Layout & Update `localhost:3000` Preview
Read **Block 5 and Block 6** of `prompts/phase-4-navbar-footer.md`:
1. **Root Layout (`src/app/layout.tsx`)**:
   - Mount `<Navbar />` at the top of `<body>` and `<Footer />` at the bottom of `<body>` wrapping `{children}`.
2. **Root Preview Page (`src/app/page.tsx` on `localhost:3000`)**:
   - Append `<ContactSection />` below the Phase 3 Cards & Layout Showroom on `src/app/page.tsx` so the user can visually inspect and interact with the entire global shell on `localhost:3000`.

## 3. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes)
   - [x] Stage 4: `/5-navbar-and-footer` (`Navbar`, `MenuOverlay`, `ContactSection` Wizard & Giant Watermark `Footer` live on `/`)
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-seo-and-aeo`
   - [ ] Stage 8: `/9-responsive-and-qa`
   ```
2. **STOP IMMEDIATELY**: Do NOT assemble the final production pages yet. Instruct the user to open `http://localhost:3000` and test:
   - Clicking the top `Menu` trigger in `Navbar` to open and close `MenuOverlay`.
   - Clicking through `Step 1 -> Step 2 -> Step 3` of `ContactSection`.
   - Scrolling to `Footer` to verify the giant watermark is clearly visible at rest and glows with `var(--accent-primary)` on hover, and then run `/6-build-pages` when ready.
