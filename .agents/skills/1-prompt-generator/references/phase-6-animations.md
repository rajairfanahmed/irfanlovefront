# Phase 6: Smooth Scroll, Hero Entrance, GSAP ScrollTrigger Reveals & Micro-Interactions

Read this file ONLY when executing **Phase 6** of `/1-prompt-generator` (after `prompts/phase-5-pages.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 6 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or earlier answers already specify motion level, scroll animations, or hover interactions. Confirm any known items as `Locked from Context`.
2. Ask the Phase 6 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 6**, write the complete file `prompts/phase-6-animations.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `Last Completed Phase: Phase 6 | Next Phase: Phase 7`, and then load `references/phase-7-seo-aeo.md` to present Phase 7 questions.

## 1. Phase 6 Discovery Questions (Motion Choreography & Interactive Physics)

### Q1. Overall Motion Intensity & Smooth Scrolling Engine
Never leave a website with plain CSS `scroll-behavior: smooth` when high-craft motion is expected. Ask the user to select their overall motion level and scroll engine:
- `A)` **Studio-Grade Smooth & Expressive Motion (`Lenis` + `GSAP ScrollTrigger` + `Framer Motion`, `robinsweb.net` / Awwwards Style)**:
  - Inertial smooth scrolling via `Lenis` synced with `GSAP ScrollTrigger` on every frame.
  - Orchestrated hero entrance timeline, scroll-triggered section reveals, parallax depth, and tactile hover physics.
- `B)` **Subtle & Polished Product Motion (`Lenis` + `Framer Motion` Spring Physics)**:
  - Crisp spring transitions (`stiffness: 260, damping: 24`), subtle `whileInView` fade-up reveals, and clean micro-interactions (Linear / Stripe style).
- `C)` **Cinematic Storytelling & Pinned Scroll Choreography**:
  - Sticky pinned sections, scrub-linked timelines, scale transitions, and dramatic mask reveals (Apple style).
- `D)` **Minimal Functional Motion**: Fast, understated CSS/spring transitions focused strictly on usability and speed.
- `E) [Keep Existing Animations]`: Preserve current project animation setup.
- `F) [Custom User Input]`: Describe your exact motion engine, easing curves, and scroll feel.
- `G) [AI Recommended]`: Let AI select the optimal motion architecture for your category and reference.
*(When inspecting a live reference in Chrome, scroll through sections to observe scroll velocity, momentum damping, parallax depth, pin triggers, and count-up animations).*

### Q2. Hero Entrance & Typography Animation Sequence
Ask how the Hero section should animate on initial page load (`0.0s` to `1.2s`):
- `A)` **Staggered Split-Text Display Reveal + Portrait Scale-Up (`robinsweb.net` Style)**:
  - `0.0s - 0.5s`: Background radial glow (`var(--glow-atmosphere)`) fades in smoothly.
  - `0.15s - 0.85s`: Giant condensed hero headline animates word-by-word or character-by-character from `translateY(110%)` inside `overflow-hidden` masks (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - `0.35s - 1.0s`: Center overlapping cutout portrait scales from `0.92` to `1.0` with smooth opacity reveal.
  - `0.55s - 1.1s`: Foreground bio copy, availability badge, and primary CTA button stagger in (`0.08s` apart).
- `B)` **Editorial Curtain / Clip-Path Reveal**: Headline and hero visual wipe open via `clip-path: inset(100% 0 0 0)` to `inset(0 0 0 0)`.
- `C)` **3D Perspective Interface Rise**: Hero headline fades up while the 3D tilted dashboard/mockup rotates smoothly from `rotateX(18deg) translateY(40px)` to `rotateX(8deg) translateY(0)`.
- `D) [Custom User Input]`: Specify exact hero entrance timing, delays, and easing.
- `E) [AI Recommended]`: Let AI choreograph the hero entrance sequence.

### Q3. Scroll-Triggered Section Reveals, Counters & Parallax
Ask which scroll-driven animations should be wired across all pages:
1. **Staggered Section Header & Card Reveals**: Eyebrow badge (`01 //`), H2 heading, and cards/rows (`ServiceCard`, `ProjectCard`, `TestimonialCard`, `SkillGroupCard`) reveal with `y: 36 -> 0, opacity: 0 -> 1` and `0.1s` stagger when entering the viewport (`margin: "-80px"`).
2. **Animated Number / Metric Counters**: Key stats (`2+`, `14+`, `98%`) count up smoothly from `0` to target value when scrolled into view.
3. **Subtle Portrait & Atmospheric Glow Parallax**: Hero portrait and background radial spotlights shift subtly on vertical scroll (`yPercent: -8` to `12`).
4. **Sticky Stacking / Pinned Cards**: Selected cards or showcase panels pin and stack cleanly during scroll.
5. **Top / Side Scroll Progress Indicator**: Subtle `2px` accent progress bar tracking page scroll completion.
6. `[Custom User Input]`: Describe any custom scroll-scrubbed timelines or horizontal scroll sections.
7. `[AI Recommended]`: Let AI wire the ideal scroll-driven choreography for your sections.

### Q4. Pointer Hover Physics, Cursor & Navigation Transitions
Ask which interactive pointer and state animations should be active:
1. **True Seamless Infinite Marquee Loop**: Continuous `@keyframes marquee-left` (or GSAP ticker) on duplicated track items that smoothly pauses or slows on pointer hover.
2. **Numbered Service Row (`01-04`) Hover Choreography**: Hovering a row shifts the title right (`translate-x-3`), illuminates the border/surface, and rotates the action arrow `-45deg` with `--accent-primary` fill.
3. **Project Card Image Zoom & Radial Border Spotlight**: Smooth `scale-105 duration-700` image zoom + glowing border accent on hover.
4. **Interactive Giant Footer Watermark Illumination**: Hovering the full-width footer brand/name masthead smoothly transitions it from its visible rest state (`#262320` / `rgba(255,255,255,0.14)`) to glowing `var(--accent-primary)` with radial drop-shadow.
5. **Magnetic Buttons & Custom Desktop Cursor Follower**: Primary buttons pull subtly toward the pointer (`12px` radius), and a custom spring cursor ring morphs into `"VIEW"` over project cards on desktop (`pointer: fine`).
6. **Animated Menu Curtain & Multi-Step Wizard Transitions**: Full-screen menu overlay opens with staggered link entrance (`0.06s` per item), and Contact Wizard steps crossfade with animated progress bar width.
7. `[Custom User Input]`: Specify any custom hover, cursor, or page transition effects.
8. `[AI Recommended]`: Let AI enable the complete micro-interaction suite.

## 2. Immediate Action After User Answers Phase 6
As soon as the user answers Phase 6 (or asks you to auto-decide):
1. Write `prompts/phase-6-animations.md` using the exact 6-Block template in Section 3 below (190 to 260 lines of complete animation specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 6 (prompts/phase-6-animations.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Next Phase to Execute: Phase 7 (references/phase-7-seo-aeo.md)`
3. Read `references/phase-7-seo-aeo.md` and present Phase 7 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-6-animations.md`

When writing `prompts/phase-6-animations.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 6 PROMPT: SMOOTH SCROLL, GSAP / FRAMER MOTION CHOREOGRAPHY & MICRO-INTERACTIONS
**Target Command**: `/7-animate-website`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` through `prompts/phase-5-pages.md`. Never replace real motion libraries with plain CSS `scroll-behavior: smooth`.

## BLOCK 1: SMOOTH SCROLL ENGINE & MOTION INFRASTRUCTURE (`src/components/motion/`)
- **`SmoothScrollProvider.tsx` (`"use client"`)**:
  - Initialize `Lenis` (`duration: 1.15`, smooth wheel enabled) inside `useEffect` with `requestAnimationFrame`.
  - Sync `Lenis` with `GSAP ScrollTrigger` (`gsap.registerPlugin(ScrollTrigger)` and `lenis.on('scroll', ScrollTrigger.update)`).
  - Mount `<SmoothScrollProvider>` around the app inside `src/app/layout.tsx`.
- **Reusable Motion Wrappers (`src/components/motion/Reveal.tsx`)**:
  - Create `<Reveal>`, `<StaggerContainer>`, `<SplitTextReveal>`, and `<CountUpMetric>` client components so Server/Page components stay clean and modular.

## BLOCK 2: HERO ENTRANCE TIMELINE & SPLIT-TEXT CHOREOGRAPHY
- **Giant Display Title Reveal**:
  - Split the hero headline into words/characters wrapped in `overflow-hidden inline-block` spans.
  - Animate `y: "110%" -> "0%"`, `opacity: 0 -> 1`, duration `0.8s`, ease `cubic-bezier(0.16, 1, 0.3, 1)`, stagger `0.04s`.
- **Overlapping Cutout Portrait & Atmospheric Glow**:
  - Animate radial glow opacity `0 -> 1` (`0.8s`) and portrait `scale: 0.92 -> 1.0, y: 24 -> 0, opacity: 0 -> 1` (`0.85s`, delay `0.25s`).
  - Attach subtle scroll parallax (`yPercent: 8`) to the portrait on desktop scroll.
- **Foreground Copy, Badges & CTA Stagger**:
  - Stagger in bio paragraph, `StatusBadge`, and primary/secondary CTA buttons (`delay: 0.45s`, stagger `0.1s`).

## BLOCK 3: SCROLL-TRIGGERED SECTION REVEALS & METRIC COUNTERS
Wire scroll reveals across `/` and all sub-pages (`/about`, `/projects`, `/skills`, `/contact`):
- **Section Headers (`SectionEyebrow` + `H2`)**: Fade-up reveal (`y: 32 -> 0, opacity: 0 -> 1, duration: 0.65s`) when entering viewport (`once: true, margin: "-80px"`).
- **Numbered Service Rows (`01` - `04`)**: Staggered row reveal (`0.1s` delay between rows) + animated top/bottom hairline expansion (`scaleX(0) -> scaleX(1)`).
- **Project, Skill, Credential & Testimonial Cards**: Staggered grid entrance (`y: 40 -> 0, opacity: 0 -> 1`, stagger `0.12s`).
- **Animated Metric Counters**: Animate numeric stats in About/Metrics from `0` to target number on first viewport entry.

## BLOCK 4: CONTINUOUS MARQUEE, HOVER PHYSICS & CUSTOM CURSOR
- **Infinite Marquee Verification**: Confirm `InfiniteMarquee.tsx` runs a continuous seamless loop (`@keyframes marquee-left 26s linear infinite` with duplicated items `[...items, ...items]`) and pauses on hover.
- **Magnetic Buttons & Card Hover Physics**:
  - Primary CTA buttons and Navbar `Menu` pill respond with smooth hover lift/magnetic pull and `--accent-primary` glow.
  - `ServiceCard` rows shift title `translate-x-3` and rotate arrow `-45deg` on hover.
  - `ProjectCard` images scale to `1.05` over `700ms ease-out` on card hover.
  - `TestimonialCard` radial glow intensifies (`opacity-60 -> opacity-100`) on hover.
- **Footer Giant Watermark Hover Glow**:
  - Confirm the giant footer brand watermark transitions smoothly (`duration-500`) from its visible rest state (`#262320`) to `var(--accent-primary)` with `drop-shadow-[0_0_45px_rgba(237,122,54,0.55)]` on pointer hover.
- **Custom Desktop Cursor Follower** (if enabled):
  - Render `<CustomCursor />` only on desktop devices (`window.matchMedia('(pointer: fine)')`), expanding on interactive elements and showing `"VIEW"` over project cards.

## BLOCK 5: MENU OVERLAY & CONTACT WIZARD STATE TRANSITIONS
- **`MenuOverlay.tsx` Curtain Animation**: Animate full-screen overlay open/close with smooth backdrop fade + staggered link entrance (`01` to `05` sliding up `0.06s` apart).
- **`ContactSection.tsx` Step Transitions**: Animate step changes (`Step 1 -> Step 2 -> Step 3`) with smooth horizontal slide/fade (`AnimatePresence mode="wait"`) and smooth width transition on `StepProgressBar`.

## BLOCK 6: ACCESSIBILITY GUARDRAIL & LIVE MOTION VERIFICATION ON `localhost:3000`
1. **Reduced Motion Support**: Respect `prefers-reduced-motion: reduce` by disabling heavy parallax and instant-completing transforms when OS reduced motion is active.
2. **Live Browser Check**: Verify on `localhost:3000` that Lenis smooth scroll, Hero entrance, Infinite Marquee, ScrollTrigger reveals, Menu curtain, Contact wizard transitions, and Footer watermark hover glow all run at 60fps with zero console or hydration errors, and then STOP so the user can run `/8-seo-and-aeo` next.
```
