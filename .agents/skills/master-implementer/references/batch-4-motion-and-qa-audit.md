# Batch 4: Motion Choreography, Micro-Interactions & Final QA Audit

Read this file at the start of **Batch 4** after completing Batches 1, 2, and 3. Your goal is to wire all animations specified in **Block 6** of `MASTER_PROMPT.md` and run a strict verification audit so zero visual or functional bugs remain.

## 1. Entrance, Split-Text & Scroll-Triggered Animations
Never leave the website with only `scroll-behavior: smooth` when Block 6 of `MASTER_PROMPT.md` specifies rich motion:

1. **Hero Entrance Sequence**:
   - Animate the giant hero display title (character/word staggered slide-up `translateY(100%) -> translateY(0%)` with `overflow-hidden` mask or spring fade-up).
   - Animate the overlapping cutout portrait (`scale(0.94) opacity-0 -> scale(1) opacity-100` over `0.8s cubic-bezier(0.16, 1, 0.3, 1)`).
   - Stagger the floating hero badges and CTA buttons (`0.1s` delay between items).
2. **Scroll-Triggered Section Reveals**:
   - Use `GSAP ScrollTrigger`, `Framer Motion` (`whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-80px" }}`), or `IntersectionObserver` to reveal section headings, numbered service rows (`01-04`), project cards, and testimonial cards as the user scrolls down.
3. **Parallax & Scroll Progress**:
   - If requested in Block 6, apply subtle vertical parallax to the hero portrait/background glow and a top/side scroll progress indicator.
4. **Hover & Pointer Micro-Interactions**:
   - Ensure all interactive buttons, numbered service rows, project cards, testimonial glow cards, and the giant footer watermark have smooth, responsive hover transitions (`transition-all duration-300`).
   - If custom cursor or magnetic buttons are specified in Block 6, attach desktop pointer listeners (`matchMedia('(pointer: fine)')`) so touch devices remain unaffected.
5. **Accessibility Guardrail**:
   - Respect `prefers-reduced-motion: reduce` by disabling heavy parallax or rapid transforms when reduced motion is enabled.

## 2. Responsive Breakpoint Verification (`375px`, `768px`, `1440px`)
Inspect every component across mobile, tablet, and desktop viewports:
- **Mobile (`375px`)**:
  - Giant hero display text scales cleanly via `clamp()` without clipping or causing horizontal scroll (`overflow-x-hidden`).
  - Overlapping hero portrait centers cleanly above the mobile intro copy and CTA buttons.
  - Numbered service rows (`01-04`) stack cleanly (`flex-col`) with readable padding.
  - Multi-step contact wizard pills wrap cleanly (`flex-wrap`) with `>= 44px` touch target height.
  - Hamburger menu trigger opens and closes the mobile/full-screen overlay reliably.
- **Tablet (`768px`) & Desktop (`1440px`)**:
  - Multi-column grids, asymmetric splits, and floating badges align to the container grid (`max-w-[1360px]` or `max-w-7xl mx-auto px-6 md:px-12`).

## 3. Mandatory 10-Point Anti-Bug Verification Checklist
Before finishing and reporting to the user, verify every single item below in the codebase and run the build command:

1. **Prompt Fidelity Check**: Does every section match `MASTER_PROMPT.md` Blocks 1 to 6 without any unrequested default SaaS templates?
2. **Navbar & Hamburger Check**: Does the desktop navbar match the exact chosen archetype (e.g., Minimal Split Bar with `Menu [=]` pill for `robinsweb` style), and does clicking the menu trigger open a working animated overlay?
3. **Hero Layering Check**: Are the atmospheric radial glow (`z-0`), giant display title (`z-10`), overlapping cutout portrait (`z-20`), and foreground CTA/badges (`z-30`) stacked in the exact order specified?
4. **Infinite Marquee Check**: Does the marquee strip use `@keyframes marquee-left` (or GSAP ticker) with a duplicated item array so it scrolls continuously forever instead of sitting as a static flex bar?
5. **Services & Cards Check**: Do the Services rows (`01-04`), Project cards, and Testimonial radial glow cards match their exact specified archetypes?
6. **Contact Form Check**: If a multi-step wizard was specified, does clicking `Next Step` / `Back` update the step state and progress bar fill?
7. **Footer Watermark Contrast & Hover Check**: Is the giant footer watermark (`ROBINSWEB` / `RAJA IRFAN AHMED`) clearly visible at rest against the dark background (NOT invisible black-on-black), and does it glow/turn `var(--accent-primary)` on hover?
8. **Real User Data & Assets Check**: Are 100% of the user's actual Name, Bio, Stats, Services, Projects, Testimonials, and verified image paths rendered accurately?
9. **Zero-Dash Check**: Are all skill/spec files free of typographic em-dashes and en-dashes?
10. **Production Build Verification**: Run `npm run build` (or `npx tsc --noEmit`) in the terminal and fix any TypeScript, JSX, or CSS compilation errors before completing your response.
