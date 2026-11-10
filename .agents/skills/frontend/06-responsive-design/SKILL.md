---
name: responsive-design
description: "Step 6 of 10 (Enhancement Phase). Adds breakpoints, fluid sizing, mobile navigation adaptation, touch targets, and cross-device behavior to the existing desktop-first implementation from Steps 1-5. Use whenever the user wants responsive behavior added, mobile layout fixed, breakpoints configured, or says things like \"make it responsive\", \"fix the mobile layout\", \"add breakpoints\", or \"implement the responsive-design spec\". Runs AFTER ux-interaction-design (Step 5) and BEFORE animations-motion-design (Step 7)."
---

# Responsive Design (Step 6 of 10 - Enhancement Phase)

**You are Step 6. You run AFTER ux-interaction-design (Step 5) and BEFORE animations-motion-design (Step 7).** Steps 1-5 built a functionally complete application at the default viewport size. Your job is to make it work across all viewport sizes: mobile, tablet, and desktop.

You own how the product adapts across viewport sizes, input types, and devices: breakpoints, fluid sizing, content priority shifts, navigation adaptation, touch targets, and cross-device verification.

## Before doing anything: read your spec

1. **Read `docs/responsive-design.md`** - this is your implementation spec. It defines the breakpoints, fluid sizing approach, how layouts and navigation adapt, content priority shifts, and touch target requirements. Follow it.
2. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
3. **Inspect the existing codebase.** Steps 1-5 built everything at the default viewport. Understand what's there before adding responsive behavior.

## What you build

Work through these in order:

1. **Breakpoints and fluid foundation.** Configure the project's breakpoints (as specified in the spec, not a generic set). Set up fluid typography and spacing using `clamp()` or the project's approach. Read `references/fluid-layouts-and-breakpoints.md`.
2. **Layout adaptation.** Make every page layout from Step 3 adapt: grid columns collapse, sidebars become drawers or tabs, containers adjust, and sections reorder by content priority. Read `references/mobile-first-design.md`.
3. **Navigation adaptation.** Transform the desktop navigation (Step 4) for mobile: hamburger menu, bottom navigation, drawer, or whatever the spec defines. Ensure mobile menu open/close works with the flows from Step 5.
4. **Component adaptation.** Make components from Step 4 respond to viewport changes: cards stack vertically, tables become scrollable or card-based, forms adjust field layout, modals become full-screen on mobile. Read `references/responsive-typography-and-media.md`.
5. **Touch and input adaptation.** Ensure all interactive elements meet minimum touch target sizes (>=44px), add appropriate touch behaviors (swipe for carousels/drawers), and handle hover-dependent interactions for touch devices.
6. **Cross-device testing.** Read `references/cross-device-testing.md`. Test at key viewport widths: 320px, 375px, 768px, 1024px, 1440px. Verify no horizontal overflow, no overlapping elements, and all content accessible.

## What you hand off

After you finish:
- Every page works from 320px to 1440px+ without horizontal overflow
- Navigation adapts between mobile and desktop
- All touch targets meet minimum size requirements
- Typography and spacing are fluid (no jarring jumps at breakpoints)
- Content priority is correct at each viewport size

## Working with other skills

- Structural Layout (Step 3) built the desktop layouts you adapt
- UI Components (Step 4) built the components you make responsive
- UX Interaction Design (Step 5) wired the flows that must still work on mobile
- Animations (Step 7) will add motion that must also be responsive
- Accessibility (Step 9) will verify touch targets and mobile keyboard behavior

## Review before finishing

Verify at 320px, 768px, and 1440px: no horizontal overflow, no overlapping, all content reachable, navigation works, forms are usable, touch targets are adequate, and text is readable.

## Boundaries

Don't rebuild components (Step 4). Don't change user flows (Step 5). Don't change token values (Step 2). Don't add animations (Step 7). You adapt the existing implementation to all viewport sizes.
