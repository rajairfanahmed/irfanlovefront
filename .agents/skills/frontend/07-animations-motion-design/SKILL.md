---
name: animations-motion-design
description: "Step 7 of 10 (Enhancement Phase). Adds transitions, scroll-triggered animations, micro-interactions, page transitions, and reduced-motion alternatives to the existing responsive implementation from Steps 1-6. Use whenever the user wants animations added, transitions built, scroll effects created, or says things like \"animate this\", \"add transitions\", \"add scroll reveals\", \"make this scroll-triggered\", or \"implement the animations-motion-design spec\". Runs AFTER responsive-design (Step 6) and BEFORE seo (Step 8)."
---

# Animations & Motion Design (Step 7 of 10 - Enhancement Phase)

**You are Step 7. You run AFTER responsive-design (Step 6) and BEFORE seo (Step 8).** Steps 1-6 built a functionally complete, responsive application. Your job is to add motion: transitions, scroll-triggered animations, micro-interactions, and page transitions.

You decide which animations the product needs, how they should move, and how to keep them performant, interruptible, and safe for reduced-motion users. You do not decide the static visual design or component states underneath the motion.

## Before doing anything: read your spec

1. **Read `docs/animations-motion-design.md`** - this is your implementation spec. It defines which elements animate, their triggers, timing, sequencing, and reduced-motion alternatives. Follow it. Do not add animations the spec doesn't call for.
2. **Read `docs/DESIGN_BRIEF.md`** for overall project context and motion profile.
3. **Inspect the existing codebase.** Steps 1-6 built everything. Add motion to what exists without breaking responsive behavior or user flows.

## What you build

Work through these in order:

1. **Page transitions.** Add enter/exit transitions between routes if the spec calls for them. Read `references/motion-design-principles.md`.
2. **Scroll-triggered reveals.** Add scroll-triggered entrance animations for sections and content blocks as specified. Read `references/scroll-triggered-and-interactive-motion.md`.
3. **Component micro-interactions.** Add hover effects, button press feedback, form field focus transitions, dropdown/modal open-close animations, and toast notification enter/exit. Read `references/animation-patterns-catalog.md`.
4. **Loading and state transitions.** Add skeleton loaders, spinner transitions, and smooth state changes (loading -> success, loading -> error).
5. **Reduced-motion alternatives.** For every animation, implement a `prefers-reduced-motion` alternative that conveys the same information without motion (opacity fade, instant switch, or no animation). Read `references/motion-performance-and-accessibility.md`.

## Motion rules

- Use only GPU-composited properties: `transform`, `opacity`. Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding`.
- Keep all animations under 400ms for interactions, under 800ms for reveals.
- Every animation must be interruptible (user can scroll past, click away, navigate).
- Test animations at all viewport sizes (they must work with Step 6's responsive behavior).

## What you hand off

After you finish:
- All specified animations are implemented
- Every animation has a reduced-motion alternative
- No animation blocks interaction or causes layout shift
- Animations work at all viewport sizes

## Working with other skills

- UI Components (Step 4) built the elements you animate
- UX Interaction Design (Step 5) wired the flows your transitions enhance
- Responsive Design (Step 6) made everything responsive; your animations must work at all sizes
- Accessibility (Step 9) will verify reduced-motion and vestibular safety
- Performance (Step 10) will verify animation performance (60fps, no jank)

## Review before finishing

Verify: all spec'd animations work, reduced-motion alternatives work, no layout shift from animations, no jank at 60fps, animations work at mobile and desktop viewport sizes, and no animation blocks user interaction.

## Boundaries

Don't rebuild components (Step 4). Don't change user flows (Step 5). Don't change responsive breakpoints (Step 6). Don't add motion the spec doesn't call for. You add motion to the existing implementation.
