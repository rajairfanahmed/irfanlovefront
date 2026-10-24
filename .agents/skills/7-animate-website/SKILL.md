---
name: 7-animate-website
description: Step 6 Implementation Command. Reads prompts/phase-6-animations.md plus PERSONALITY.md, wires the motion system matching the locked Motion Feel axis (Cinematic, Snappy, or Calm), implements hero entrances, scroll reveals, and micro-interactions appropriate to the category, and stops for user inspection on localhost.
---

# Command 7: Wire Motion System, Scroll Choreography & Micro-Interactions (`/7-animate-website`)

## 1. Specialist Persona & Core Mastery

You are a unified **Principal Creative Motion Engineer, Staff Interactive Physics Architect, and Senior Choreographic Art Director** with 12+ years of production experience engineering 60fps scroll-driven storytelling and tactile pointer physics across every category and aesthetic.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/PERSONALITY.md` (especially the **Motion Feel** axis) and `prompts/phase-6-animations.md` in full.
   - Cross-check all previous prompt files.
   - If `prompts/phase-6-animations.md` does not exist, stop and tell the user to complete Phase 6 first.
2. **Wire ONLY Motion & Micro-Interactions in This Stage**. No responsive QA or SEO.
3. **Never Substitute CSS `scroll-behavior: smooth` for Real Motion**: When the prompt specifies `Lenis`, `GSAP`, or `Framer Motion`, wire real motion code.

---

## 2. CRITICAL: Motion Personality System

**NEVER apply the same animation recipe to every project.** The motion system MUST match the locked **Motion Feel** axis from `prompts/PERSONALITY.md`.

### Motion Personality Profiles

| Motion Feel | Duration | Easing | Stagger | Scroll Speed | Intensity |
|---|---|---|---|---|---|
| **Cinematic** | Long (0.8-1.4s) | `cubic-bezier(0.16, 1, 0.3, 1)` | Wide (0.12-0.2s apart) | Slow Lenis (`duration: 1.3-1.6`) | Dramatic reveals, parallax, scale shifts |
| **Snappy** | Short (0.2-0.5s) | `spring({ stiffness: 200, damping: 20 })` | Tight (0.03-0.06s apart) | Fast Lenis (`duration: 0.8-1.0`) or native | Bouncy, elastic, instant feedback |
| **Calm** | Medium (0.5-0.8s) | `ease-out` or `cubic-bezier(0.33, 1, 0.68, 1)` | Moderate (0.08-0.12s apart) | Normal Lenis (`duration: 1.0-1.2`) | Gentle fades, subtle slides, minimal parallax |
| **None / Minimal** | Instant or 0.2s | `ease` | No stagger | Native scroll | CSS transitions only, no GSAP/Framer |

### Motion Package Requirements (Install ONLY what's needed)

| Motion Feel | Required Packages | NOT Needed |
|---|---|---|
| **Cinematic** | `gsap` (with ScrollTrigger), `lenis`, `framer-motion` | — |
| **Snappy** | `framer-motion` | `lenis` (optional), `gsap` (optional) |
| **Calm** | `framer-motion` (lightweight usage) | `gsap`, `lenis` (optional) |
| **None** | None | All motion libraries |

**NEVER force-install `gsap` + `lenis` + `framer-motion` on every project.** Only install what the motion personality requires.

---

## 3. CRITICAL: Category-Specific Animation Patterns

**Different categories benefit from different animation strategies:**

| Category | Recommended Animations | Avoid |
|---|---|---|
| **Portfolio** | Hero text reveal, project image parallax, card stagger, metric counters | Heavy page transitions (distract from work) |
| **SaaS** | Product screenshot reveal, feature card stagger, pricing table entrance, logo bar slide | Excessive parallax (looks unserious) |
| **Agency** | Cinematic hero entrance, case study transitions, team grid stagger | Over-animated — let the work speak |
| **E-Commerce** | Product card hover zoom, quick-add micro-animation, cart drawer slide, filter transition | Slow page transitions (frustrate shoppers) |
| **AI / Tech** | Terminal typing effect, code block scroll reveal, architecture diagram build-up | Bouncy springs (conflicts with tech authority) |
| **Restaurant** | Ambient image parallax, menu fade-in, gallery lightbox transition | Aggressive animations (break ambiance) |
| **Editorial** | Subtle article card fade-in, reading progress bar, smooth scroll | Dramatic reveals (distract from reading) |
| **Dashboard** | Chart animation on load, stat counter, minimal transitions | Any heavy animation (hinders productivity) |
| **Event** | Countdown tick animation, speaker card stagger, schedule timeline reveal | Slow entrances (users want info fast) |
| **Startup** | Hero CTA pulse/glow, social proof counter, feature stagger, scroll-triggered CTA | — |

---

## 4. Step-by-Step Implementation Workflow

### Step 1: Build the Motion Provider (If Smooth Scroll is Specified)
Read **Block 1** and create `src/components/motion/SmoothScrollProvider.tsx` ONLY IF the prompt specifies Lenis or smooth scroll:
- Initialize Lenis with duration matching the Motion Feel axis
- Register GSAP ScrollTrigger if GSAP is specified
- Sync Lenis with GSAP ticker
- Skip initialization if `prefers-reduced-motion: reduce` is active
- Clean up on unmount
- Mount in `src/app/layout.tsx`

**If the Motion Feel is "None" or "Calm" with no smooth scroll specified, SKIP this step entirely.**

### Step 2: Build Reusable Motion Wrappers
Read **Block 2** and create motion primitives in `src/components/motion/`:

**Always build (if any motion is specified):**
- `Reveal.tsx` — viewport-triggered reveal with configurable direction, duration, and easing matching the Motion Feel axis

**Build ONLY if specified in the prompt:**
- `SplitTextReveal.tsx` — hero headline word/character split animation (Cinematic motion feel)
- `CountUpMetric.tsx` — animated number counter (only if metrics exist in siteData)
- `StaggerContainer.tsx` + `StaggerItem.tsx` — cascading card reveals (only if card grids exist)
- `CustomCursor.tsx` — desktop spring follower (only if specified, restricted to `pointer: fine`)
- `ParallaxLayer.tsx` — scroll-linked parallax (only for Cinematic motion feel)
- `MagneticButton.tsx` — pointer-attracted button (only if specified)

**Configure ALL motion wrappers with the locked Motion Feel values** (duration, easing, stagger delay from Section 2 table).

### Step 3: Choreograph Hero Entrance
Read **Block 3** and wire the hero entrance timeline. The choreography depends on the hero archetype (from Stage 3):

| Hero Archetype | Entrance Pattern |
|---|---|
| **H1 (Centered Title + Image)** | Title reveal → Image scale-up → Bio stagger |
| **H2 (60/40 Split)** | Left text slide → Right visual reveal → CTA fade |
| **H3 (Full-Bleed Video)** | Video fade-in → Overlay text reveal |
| **H4 (Centered CTA)** | Headline reveal → Subheadline → CTA bounce/glow → Product slide up |
| **H5 (Perspective Product)** | Product perspective tilt reveal → Feature badges stagger |
| **H9 (Terminal)** | Terminal typing effect → Output lines stagger |
| **H13 (Text-Only)** | Clean text fade or split reveal → CTA |

**The entrance timing and easing MUST match the Motion Feel axis.**

### Step 4: Wire Scroll-Triggered Reveals
Read **Block 4** and wire scroll animations across all pages:
- Wrap section headers in `<Reveal>`
- Wrap card grids in `<StaggerContainer>` / `<StaggerItem>` (if built)
- Replace static metric numbers with `<CountUpMetric>` (if metrics exist)
- Animate hairline borders with `scaleX` expansion (if full-width rows exist)
- Apply parallax to images (only for Cinematic motion feel)

### Step 5: Wire Hover Micro-Interactions
Read **Block 5** and verify/upgrade hover behaviors:
- Card hover effects matching the personality (scale, translate, border glow, shadow bloom, etc.)
- Button hover matching the personality (pill glow, border highlight, offset shift, etc.)
- Footer watermark hover glow (only if F1 watermark footer was built)
- Interactive elements respond with the Motion Feel timing

### Step 6: Wire Menu & Form Transitions
Read **Block 6**:
- Menu overlay: `AnimatePresence` wrap with staggered link reveal (timing from Motion Feel)
- Contact wizard steps: crossfade/slide transitions between steps (if multi-step was built)
- Reduced-motion guardrail: `@media (prefers-reduced-motion: reduce)` disables heavy animations

### Step 7: Performance & Memory Audit
- All GSAP timelines wrapped in `gsap.context()` with `ctx.revert()` cleanup
- GPU-accelerated properties only (`transform`, `opacity`)
- `will-change` applied during animation, removed after
- `ScrollTrigger.config({ limitCallbacks: true })` for mobile battery
- No jank on scroll (test 60fps target)

---

## 5. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Motion Feel: [e.g., Cinematic, Snappy, Calm, None]
   - Motion Libraries: [e.g., framer-motion only, or gsap + lenis + framer-motion]
   - [x] Stage 1-5: Previous stages
   - [x] Stage 6: `/7-animate-website` (Motion system wired, all reveals + interactions live)
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Instruct the user to test smooth scroll, hero entrance, scroll reveals, hover interactions, and menu transitions on `localhost:3000`, then run `/8-responsive-and-qa` when ready.
