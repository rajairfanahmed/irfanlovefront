# Phase 8: Multi-Viewport Responsive Polish, Accessibility, Anti-Bug QA & Production Build Lock

Read this file ONLY when executing **Phase 8** of `/1-prompt-generator` (after `prompts/phase-7-seo-aeo.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 8 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or earlier answers already define mobile/tablet responsive behavior or performance rules. Confirm any known items as `Locked from Context`.
2. Ask the Phase 8 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 8**, write the complete file `prompts/phase-8-responsive-qa.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `All 8 Prompt Phases Complete (8/8) | Ready for /2-setup-foundation`, and instruct the user to run `/2-setup-foundation` to start step-by-step implementation.

## 1. Phase 8 Discovery Questions (Responsive Breakpoints, Ergonomics & Final QA)

### Q1. Mobile (`375px`) & Tablet (`768px`) Hero and Typography Adaptation
Giant display titles and overlapping portraits often break or clip on small mobile screens if not explicitly locked. Ask how the Hero and oversized typography should adapt on mobile (`<768px`):
- `A)` **Fluid `clamp()` Display Scaling + Centered Portrait Above Mobile CTA Stack (`robinsweb.net` Style)**:
  - Giant display headline scales down smoothly via `clamp(3.2rem, 14vw, 15rem)` with `overflow-x-hidden` so zero letters ever clip horizontally.
  - Overlapping cutout portrait (`w-[260px] sm:w-[320px]`) remains centered overlapping the lower edge of the display headline, while floating desktop bio/CTA blocks stack cleanly below the portrait with `gap-6`.
- `B)` **Vertical Editorial Stack (Text Top -> Visual Bottom)**:
  - Headline, lead copy, and full-width (`w-full sm:w-auto`) CTA buttons stack at the top, followed by the framed portrait or 3D interface preview below.
- `C)` **Compact Mobile Viewport Hero (`min-h-[85svh]`)**:
  - Uses `100svh` / `85svh` (safe mobile viewport height accounting for iOS/Android address bars) with thumb-zone anchored primary CTA button.
- `D) [Custom User Input]`: Specify exact mobile (`375px`) and tablet (`768px`) hero stacking, font sizes, and spacing.
- `E) [AI Recommended]`: Let AI lock the optimal mobile/tablet responsive math for your Hero archetype.

### Q2. Mobile Card Grids, Numbered Rows & Multi-Step Form Ergonomics
Ask how interactive rows, bento grids, and forms should adapt on mobile and tablet viewports:
1. **Numbered Service Rows (`01-04`) Mobile Stack**: Convert horizontal desktop rows into clean vertical mobile cards (`py-6 px-4`) where the index (`01`) and title sit on the top row, description and tags sit in the middle, and the action arrow sits on the bottom-right.
2. **Touch-Friendly Interactive Targets (`>= 44px x 44px`)**: Ensure every button, hamburger `Menu [=]` pill, filter tab, selectable wizard pill, and footer link has a minimum `44px` hit area on touchscreens.
3. **Bento & Project Grid Collapse**: `12-column` Bento grids and `2-column` Project grids collapse to `grid-cols-1` on `<640px`, `grid-cols-2` on `768px-1024px`, and full asymmetric spans on `>=1024px`.
4. **Giant Footer Watermark Mobile Fit**: Scale the bottom brand/name watermark via `clamp(2.75rem, 13.5vw, 15rem)` with `px-4` so the full name fits on a `375px` screen on a single line without horizontal overflow.
5. `[Custom User Input]`: Describe any custom mobile drawer, swipe carousel, or responsive table behavior.
6. `[AI Recommended]`: Let AI enforce the complete mobile and tablet responsive ergonomics suite.

### Q3. Performance, Core Web Vitals & Accessibility Standards
Select the technical quality and performance gates to enforce in `/9-responsive-and-qa`:
- `A)` **Full Production Standard (Core Web Vitals + WCAG AA Contrast + Zero Hydration/Build Errors)**:
  - `priority` loading on Hero portrait/visual (`LCP < 2.5s`), explicit `width`/`height` or `aspect-ratio` on all media (`CLS = 0`), keyboard `Tab` focus rings (`focus-visible:ring-2`), `prefers-reduced-motion` support, and clean `npm run build` verification.
- `B) [Custom User Input]`: Add specific Lighthouse score targets, bundle size limits, or WCAG AAA requirements.
- `C) [AI Recommended]`: Enforce `Option A` across all routes and components.

## 2. Immediate Action After User Answers Phase 8
As soon as the user answers Phase 8 (or asks you to auto-decide):
1. Write `prompts/phase-8-responsive-qa.md` using the exact 6-Block template in Section 3 below (190 to 260 lines of complete responsive & QA specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 8 (prompts/phase-8-responsive-qa.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Status: ALL 8 PHASE PROMPTS COMPLETED (8/8)`
   - `Next Command to Run: /2-setup-foundation`
3. Inform the user that all 8 phase prompt files (`prompts/phase-1-*.md` through `prompts/phase-8-*.md`) are ready and they can now run `/2-setup-foundation` to begin building and previewing Step 1 on `localhost:3000`.

## 3. Exact Blueprint to Write Into `prompts/phase-8-responsive-qa.md`

When writing `prompts/phase-8-responsive-qa.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 8 PROMPT: MULTI-VIEWPORT RESPONSIVE ENGINEERING, ACCESSIBILITY & FINAL PRODUCTION QA
**Target Command**: `/9-responsive-and-qa`
**Required Prerequisites**: Read `prompts/phase-1-foundation-data.md` through `prompts/phase-7-seo-aeo.md` and inspect all built files in `src/`.

## BLOCK 1: VIEWPORT BREAKPOINT MATRIX (`375px` MOBILE, `768px` TABLET, `1440px` DESKTOP)
Audit and fix every component across all 3 canonical viewports so `document.documentElement.scrollWidth <= window.innerWidth` (zero horizontal scrollbar) on every route:
- **`375px` (iPhone SE / Small Mobile)**:
  - Container padding: `px-5` (`20px` safe horizontal gutters).
  - Hero Display Title: `text-[clamp(3.1rem,13.8vw,15rem)] leading-[0.9] break-words` so long words or names never overflow horizontally.
  - Hero Cutout Portrait: `w-[250px] sm:w-[320px] mx-auto -mt-[10vw] relative z-20`, with intro copy and full-width (`w-full sm:w-auto`) primary CTA pill stacked cleanly below.
  - Services (`01-04`), Projects, Skills, Credentials, and Testimonials: Single-column stack (`grid-cols-1 gap-6`) with comfortable mobile padding (`p-6`).
  - Contact Wizard: Selectable service/budget pills wrap cleanly (`flex flex-wrap gap-2.5`) with full-width `Next Step` / `Back` buttons on mobile.
  - Giant Footer Watermark: `text-[clamp(2.6rem,13.2vw,15rem)] px-2` so the full brand/person name fits on `375px` without clipping.
- **`768px` (iPad / Tablet)**:
  - Container padding: `px-8`.
  - Grids transition to ` md:grid-cols-2 gap-6`, Navbar `Menu [=]` overlay scales link typography cleanly (`text-4xl md:text-6xl`).
- **`1440px` (Large Desktop)**:
  - Container `max-w-[1360px] mx-auto px-12`, full asymmetric 12-column Bento spans, balanced whitespace (`py-24 lg:py-32`), and active desktop pointer physics.

## BLOCK 2: TOUCH TARGETS, KEYBOARD NAVIGATION & CONTRAST AUDIT
- **Touch Target Ergonomics**: Verify every interactive `<button>`, `<a>`, input, and selectable pill has `min-h-[44px]` and `min-w-[44px]` on mobile/tablet devices.
- **Keyboard & Screen Reader Navigation**:
  - Verify `Tab` / `Shift+Tab` traversal across `Navbar`, `MenuOverlay` (focus trap when open + `ESC` close), `ContactSection` wizard steps, and `Footer`.
  - Ensure visible focus rings (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`).
- **Color & Watermark Contrast Check**:
  - Body copy (`--text-primary` and `--text-secondary`) meets WCAG AA (`>= 4.5:1`).
  - Giant Footer Watermark is clearly visible at rest (`#262320` on dark canvas or `rgba(0,0,0,0.14)` on light canvas - NEVER invisible black-on-black) and illuminates in `var(--accent-primary)` on hover/focus.

## BLOCK 3: CORE WEB VITALS & ASSET PERFORMANCE (`LCP`, `CLS`, `INP`)
- **LCP Optimization**: Add `priority` and explicit `sizes` to the above-the-fold Hero portrait/visual image.
- **Zero Layout Shift (`CLS = 0`)**: Ensure all project cards, avatars, and icons have explicit `width`/`height` or `aspect-[16/10]` containers and `next/font` uses `display: "swap"`.
- **Animation Performance (`INP`)**: Ensure GSAP ScrollTrigger / Lenis listeners clean up properly on unmount (`return () => ctx.revert()`) and only animate GPU-composited properties (`transform`, `opacity`).

## BLOCK 4: MANDATORY 12-POINT ANTI-BUG & ANTI-SLOP FINAL AUDIT
Verify every single item below in the codebase and fix any violation immediately:
1. [ ] **Design System Match**: Exact `:root` hex colors, radial glows, and Google Fonts from Phase 1 are active.
2. [ ] **Navbar & Menu Overlay**: Exact chosen desktop navbar archetype is rendered (no unrequested generic SaaS link bar), and the `Menu [=]` -> `Close [X]` overlay opens/closes smoothly.
3. [ ] **Hero Z-Index Stack**: Radial glow (`z-0`), giant display headline (`z-10`), overlapping cutout portrait (`z-20`), and foreground copy/CTA (`z-30`) are layered properly.
4. [ ] **True Infinite Marquee**: `InfiniteMarquee.tsx` scrolls continuously forever via `@keyframes marquee-left` on a duplicated array (`[...items, ...items]`), never sitting as a static flex row.
5. [ ] **Distinct Multi-Page / Section Rhythm**: Services (`01-04` rows), Projects (editorial case-study cards), Skills/Credentials, and Testimonials (radial glow cards) use their dedicated card archetypes instead of repeating identical boxes.
6. [ ] **Working Contact Wizard**: Multi-step form progresses through `Step 1 -> Step 2 -> Step 3 -> Confirmation` with an animated `--accent-primary` progress bar.
7. [ ] **Footer Watermark Visibility & Hover Glow**: Full-width footer brand/person watermark is visible at rest and glows with `var(--accent-primary)` on hover.
8. [ ] **100% Verbatim User Content**: All text, metrics, projects, degrees, certifications, and links match `src/data/siteData.ts`.
9. [ ] **Zero Banned AI Words**: Confirmed zero occurrences of `Nexus`, `Zero-Slop`, `AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, or fake `$ npx` terminal boxes anywhere in the UI.
10. [ ] **Motion Active**: Lenis smooth scroll, Hero split-text reveal, and ScrollTrigger section reveals are active and smooth.
11. [ ] **SEO & AEO Active**: Metadata API, JSON-LD `@graph`, `sitemap.ts`, `robots.ts`, `public/llms.txt`, and `public/llms-full.txt` are present and valid.
12. [ ] **Responsive Overflow Lock**: Zero horizontal scroll on `375px`, `768px`, and `1440px`.

## BLOCK 5: PRODUCTION BUILD & TYPECHECK VERIFICATION
Run these commands in the project terminal and resolve any TypeScript, ESLint, or Next.js build errors:
1. `npx tsc --noEmit`
2. `npm run build`

## BLOCK 6: FINAL LIVE PREVIEW HANDOFF ON `localhost:3000`
Once `npm run build` succeeds with zero errors, ensure the dev server is running on `localhost:3000` and present a concise final completion summary to the user.
```
