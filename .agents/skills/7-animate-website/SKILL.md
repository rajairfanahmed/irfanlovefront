---
name: 7-animate-website
description: Step 6 Implementation Command. Reads prompts/phase-6-animations.md, wires Lenis smooth scrolling synced with GSAP ScrollTrigger and Framer Motion, implements Hero split-text entrance, scroll-triggered section reveals, animated metric counters, pointer hover physics, and menu/wizard transitions, and stops for user inspection on localhost.
---

# Command 7: Wire Smooth Scroll, GSAP / Framer Motion Choreography & Micro-Interactions (`/7-animate-website`)

## 1. Specialist Persona, Experience & Core Mastery (Act As)

You are acting as a unified **Principal Creative Motion Engineer, Staff Interactive Physics Architect (e.g., GSAP, ScrollTrigger, Lenis, Framer Motion, React, Next.js, Vite, TypeScript, Tailwind CSS), and Senior Choreographic Art Director** with **12+ years of production experience** engineering 60fps scroll-driven storytelling, split-text typography reveals, and tactile pointer physics across any website category (e.g., Developer Portfolios, SaaS Platforms, AI Products, E-Commerce Stores, Creative Agencies, Dashboards, Fintech, Editorial, or Marketplaces) and any aesthetic direction (e.g., Awwwards Site of the Day winners, Linear, Vercel, Stripe, Apple, Robinsweb, Swiss grids, or Luxury Editorial systems).

### Your Core Experience & Engineering Skills
- **Inertial Smooth Scroll & GSAP Synchronization**: Deep expertise in initializing `Lenis` smooth scrolling synced frame-by-frame with `GSAP ScrollTrigger` (`lenis.on("scroll", ScrollTrigger.update)`) inside React `useEffect` lifecycles with clean `gsap.context()` / `ctx.revert()` teardown so zero memory leaks or hydration mismatches occur.
- **Typographic Split-Text & Hero Choreography**: Mastery of orchestrating multi-layer hero entrance timelines (`0.0s - 1.1s`), splitting display headlines into masked word/character spans (`overflow-hidden inline-block`) that slide up with custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), scaling overlapping portraits/3D visuals, and attaching subtle scroll parallax.
- **Scroll-Triggered Section Reveals & Metric Counters**: Proven ability to wire staggered viewport reveals (`GSAP ScrollTrigger` or `Framer Motion` `whileInView`), animated `1px` border hairline expansions (`scaleX(0) -> scaleX(1)`), and smooth numeric counters (`CountUpMetric`) that count from `0` to target figures (`2+`, `14+`, `99.9%`) on first scroll entry.
- **Tactile Pointer Physics & Reduced-Motion Accessibility**: Mastery of magnetic button pull zones, custom desktop spring cursors (`window.matchMedia("(pointer: fine)")`), seamless `@keyframes` marquee verification, interactive giant footer watermark hover illumination, and strict `prefers-reduced-motion: reduce` compliance.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read `prompts/phase-6-animations.md` First**:
   - Before writing any code, read `prompts/phase-6-animations.md` in full (Blocks 1 through 6), and cross-check `prompts/phase-1-foundation-data.md` through `prompts/phase-5-pages.md`.
   - If `prompts/phase-6-animations.md` does not exist, stop immediately and tell the user to complete Phase 6 in `/1-prompt-generator` first.
2. **Never Substitute Plain CSS `scroll-behavior: smooth` for Real Motion**:
   - When `prompts/phase-6-animations.md` specifies `Lenis`, `GSAP ScrollTrigger`, or `Framer Motion`, you MUST wire real motion components and hooks rather than leaving static sections with CSS `scroll-behavior: smooth`.
3. **Wire ONLY Motion & Micro-Interactions in This Stage**:
   - Do NOT run final production responsive audits or generate SEO/AEO `llms.txt` and JSON-LD schemas yet (those belong to `/8-responsive-and-qa` and `/9-seo-and-aeo`).
   - Build all motion providers and wrappers in `src/components/motion/`, wire entrance, scroll, and hover animations across all pages and components, verify 60fps execution on `localhost:3000`, update `prompts/IMPLEMENTATION_PROGRESS.md`, and **STOP** for user inspection.
4. **Anti-Cliche Formatting & Pulse Lock**:
   - Section eyebrows and badges must never contain double slashes (`//`). Always use clean spacing (`01  WORK`) or subtle dots (`01 · WORK`).
   - Status indicators must remain steady and solid. Never inject unrequested pulse or ping animations.

## 2. Motion Architecture & File Registry

All motion providers, choreography primitives, and physics wrappers must reside in `src/components/motion/`:
```
src/components/motion/
├── SmoothScrollProvider.tsx # Lenis smooth scrolling synced with GSAP ScrollTrigger
├── Reveal.tsx               # Viewport reveals, staggered containers, and count-up metrics
├── SplitTextReveal.tsx      # Split-text headline entrance with overflow clipping
└── CustomCursor.tsx         # Desktop spring follower restricted to pointer: fine
```

## 3. Step-by-Step Implementation Workflow

### Step 1: Build Smooth Scroll Engine & Reusable Motion Wrappers (`src/components/motion/`)
Read **Block 1** of `prompts/phase-6-animations.md` and create:
1. **`src/components/motion/SmoothScrollProvider.tsx` (`"use client"`)**:
   - Initializes `Lenis` (`duration: 1.15`, `smoothWheel: true`) inside `useEffect` (skipping if `window.matchMedia("(prefers-reduced-motion: reduce)").matches` is true).
   - Registers `GSAP ScrollTrigger` (`gsap.registerPlugin(ScrollTrigger)`) and syncs `Lenis` scroll updates with `ScrollTrigger.update`.
   - Add GSAP ticker synchronization: `gsap.ticker.add((time) => lenis.raf(time * 1000))` and `gsap.ticker.lagSmoothing(0)`.
   - Clean up on unmount: destroy `lenis` instance and remove ticker listener.
   - Mount `<SmoothScrollProvider>` around the application children inside `src/app/layout.tsx`.
2. **`src/components/motion/Reveal.tsx` (`"use client"`)**:
   - Export modular client motion primitives so page and section components stay clean and composable:
     - `<Reveal>`: Animates `y: 36 -> 0, opacity: 0 -> 1` (`duration: 0.7, ease: [0.16, 1, 0.3, 1]`) when entering the viewport (`once: true, margin: "-80px"`).
     - `<StaggerContainer>` & `<StaggerItem>`: Staggers child cards or rows (`0.1s` delay between items).
     - `<SplitTextReveal>`: Splits a headline string into words wrapped in `<span className="inline-block overflow-hidden"><span className="inline-block will-change-transform">...</span></span>` and animates `translateY(110%) -> translateY(0%)`.
     - `<CountUpMetric>`: Animates numeric values (e.g., `2+`, `14+`, `98%`) smoothly from `0` to the target number on first viewport entry while preserving prefixes and suffixes.

### Step 2: Choreograph the Hero Entrance Timeline & Parallax (`src/components/layout/HeroSection.tsx`)
Read **Block 2** of `prompts/phase-6-animations.md` and upgrade `src/components/layout/HeroSection.tsx`:
- **0.0s - 0.5s (Atmospheric Glow Reveal)**: Smoothly fade in the background radial spotlight (`var(--glow-atmosphere)`).
- **0.15s - 0.85s (Display Headline Reveal)**: Use `<SplitTextReveal>` or GSAP timeline to animate the giant hero display title from `y: "110%"` inside `overflow-hidden` masks (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **0.30s - 0.95s (Center Cutout Portrait / Hero Visual Reveal + Parallax)**: Animate the portrait or 3D product visual from `scale: 0.92, y: 24, opacity: 0` to `scale: 1, y: 0, opacity: 1`, and attach subtle vertical scroll parallax (`yPercent: 8` on desktop via `ScrollTrigger` or `useScroll`/`useTransform`).
- **0.50s - 1.10s (Foreground Bio, Badge & CTA Stagger)**: Stagger in `StatusBadge`, bio lead copy, and primary/secondary `Button` components (`0.08s` apart).

### Step 3: Wire Scroll-Triggered Section Reveals & Metric Counters Across All Pages
Read **Block 3** of `prompts/phase-6-animations.md` and wire scroll animations across `/` (`src/app/page.tsx`) and all multi-page sub-routes (`/about`, `/projects`, `/skills`, `/contact`, etc.):
1. **Section Headers (`SectionHeader.tsx`)**: Wrap eyebrow (`01 · `) and H2 heading in `<Reveal>` so every section header animates smoothly into view.
2. **About & Metrics Counters**: Replace static metric numbers with `<CountUpMetric value={metric.value} />` so numbers count up smoothly when scrolled into view.
3. **Numbered Service Rows (`ServiceCard.tsx`)**: Stagger each row (`01` to `04`) on scroll entry and animate top/bottom hairline borders (`origin-left scale-x-0 -> scale-x-100`).
4. **Projects, Skills, Credentials & Testimonials Grids**: Wrap card grids in `<StaggerContainer>` and each card (`ProjectCard`, `SkillGroupCard`, `CredentialCard`, `TestimonialCard`) in `<StaggerItem>` for smooth cascading entrance.

### Step 4: Wire Pointer Hover Physics, Custom Cursor & Marquee Verification
Read **Block 4** of `prompts/phase-6-animations.md` and verify/upgrade all pointer micro-interactions:
1. **Continuous Infinite Marquee Verification**: Confirm `InfiniteMarquee.tsx` scrolls continuously forever via `.animate-marquee-infinite` on a duplicated array (`[...items, ...items]`) and smoothly pauses on pointer hover.
2. **Card & Row Hover Choreography**:
   - `ServiceCard`: Hovering shifts the display title right (`group-hover:translate-x-3`), illuminates the row background/border, and rotates the action arrow `-45deg` with `var(--accent-primary)` fill.
   - `ProjectCard`: Hovering scales the project preview image (`group-hover:scale-105 duration-700 ease-out`) and illuminates the card border (`hover:border-[var(--border-accent)]`).
   - `TestimonialCard`: Hovering lifts the card (`hover:-translate-y-1`) and intensifies the internal radial spotlight glow (`opacity-60 group-hover:opacity-100`).
3. **Interactive Giant Footer Watermark Hover Glow**:
   - Confirm the giant brand/person watermark in `Footer.tsx` is clearly visible at rest (`#262320` on dark canvas or `text-black/15` on light canvas) and smoothly transitions (`duration-500`) to `var(--accent-primary)` with radial drop-shadow glow on pointer hover.
4. **Magnetic Buttons & Custom Desktop Cursor (If Specified in Block 4)**:
   - Attach subtle magnetic pointer pull to primary CTA buttons and the Navbar `Menu` pill on desktop (`window.matchMedia("(pointer: fine)")`).
   - Mount `<CustomCursor />` (if enabled in Block 4) restricted strictly to desktop pointers (`pointer: fine`) so mobile/touch devices never show a floating cursor dot.

### Step 5: Animate Menu Overlay Curtain & Contact Wizard Step Transitions
Read **Block 5 and Block 6** of `prompts/phase-6-animations.md`:
1. **`MenuOverlay.tsx` Curtain & Staggered Link Reveal**:
   - Wrap the overlay in `AnimatePresence` (or GSAP timeline) so opening the menu smoothly animates the backdrop curtain and staggers each numbered navigation link (`01` to `05`) upward (`0.06s` apart).
2. **`ContactSection.tsx` Multi-Step Wizard Transitions**:
   - Wrap wizard steps (`Step 1 -> Step 2 -> Step 3 -> Confirmation`) in `AnimatePresence mode="wait"` so steps crossfade/slide smoothly while `StepProgressBar` animates its width fill (`transition-all duration-500 ease-out`).
3. **Reduced-Motion Accessibility Guardrail**:
   - Ensure `@media (prefers-reduced-motion: reduce)` in `globals.css` and `useReducedMotion()` checks in motion components gracefully disable heavy parallax or rapid transforms when OS reduced motion is active.
4. **GSAP Context Teardown & Memory Management**:
   - Wrap all GSAP timelines in `gsap.context()` inside `useEffect` or `useGSAP` with clear `ctx.revert()` cleanup on unmount to prevent stale trigger references.
   - Set `ScrollTrigger.config({ limitCallbacks: true, syncInterval: 50 })` to optimize battery life on mobile devices.

### Step 6: 60fps Motion Performance & Jank Audit
Verify that motion implementation runs smoothly without dropping frames:
1. Ensure animated elements utilize GPU-accelerated CSS properties (`transform`, `opacity`) rather than layout triggers (`top`, `margin`, `width`).
2. Verify that elements with heavy transforms include `will-change: transform` during active animations and remove it afterward.
3. Test smooth scroll behavior on high-refresh-rate displays (120Hz/144Hz) to confirm stutter-free scrubbing.
4. Verify that rapid window resizing does not break pinned ScrollTrigger calculations by testing `ScrollTrigger.refresh()`.
5. Confirm that scroll scrubbing animations pause gracefully when the user switches browser tabs.
6. Check that touch scrolling on mobile devices retains native inertia without fighting Lenis handlers.

## 4. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Big Foundation Preview Card)
   - [x] Stage 2: `/3-build-components` (Atomic UI Primitives in `src/components/ui/`)
   - [x] Stage 3: `/4-cards-and-layout` (Layout Wrappers, `HeroSection`, & Custom Card Archetypes)
   - [x] Stage 4: `/5-navbar-and-footer` (`Navbar`, `MenuOverlay`, `ContactSection` & `Footer`)
   - [x] Stage 5: `/6-build-pages` (Full Production Home Page & All Sub-Routes Assembled)
   - [x] Stage 6: `/7-animate-website` (`Lenis` Smooth Scroll, `GSAP`/`Framer Motion` Reveals & Micro-Interactions Live)
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Do NOT run responsive QA or write SEO/AEO metadata yet. Instruct the user to open `http://localhost:3000` to test smooth scrolling, the Hero split-text entrance, scroll-triggered section reveals, animated metric counters, menu curtain transitions, and the footer watermark hover glow, and then run `/8-responsive-and-qa` when ready.
