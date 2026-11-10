---
name: performance-optimization
description: "Step 10 of 10 (Enhancement Phase). The final step. Optimizes bundles, images, fonts, Core Web Vitals, lazy loading, code splitting, caching, and rendering performance across the entire implementation from Steps 1-9. Use whenever the user wants performance improved, bundles optimized, Core Web Vitals fixed, or says things like \"optimize performance\", \"fix LCP\", \"reduce bundle size\", \"optimize images\", or \"implement the performance-optimization spec\". Runs LAST, after all other frontend skills."
---

# Performance Optimization (Step 10 of 10 - Enhancement Phase)

**You are Step 10. You run LAST, after all other frontend skills.** Steps 1-9 built a functionally complete, responsive, animated, SEO-ready, accessible application. Your job is the final optimization pass: make it fast.

You own performance budgets, Core Web Vitals, asset optimization, rendering and bundle strategy, and the testing methodology that verifies all of it. You set the budget other skills' work needs to fit inside, and you verify with real measurement rather than assuming something is fast.

## Before doing anything: read your spec

1. **Read `docs/performance-optimization.md`** - this is your implementation spec. It defines Core Web Vitals targets, performance budgets, image and font optimization requirements, and rendering strategy. Follow it.
2. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
3. **Inspect the existing codebase.** Steps 1-9 built everything. Optimize what exists without breaking functionality, responsive behavior, animations, SEO, or accessibility.

## What you optimize

Work through these in order:

1. **Bundle analysis and code splitting.** Analyze the current bundle size. Add route-based code splitting, lazy loading for below-the-fold components, and tree shaking. Read `references/rendering-bundles-and-network.md`.
2. **Image optimization.** Convert images to modern formats (WebP/AVIF), add responsive `srcset`, implement lazy loading for off-screen images, and set explicit `width`/`height` to prevent layout shift. Read `references/images-fonts-and-assets.md`.
3. **Font optimization.** Subset fonts, use `font-display: swap` or `optional`, preload critical fonts, and add font metric overrides to prevent CLS. Read `references/images-fonts-and-assets.md`.
4. **Core Web Vitals.** Measure and optimize LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint), and FCP (First Contentful Paint). Read `references/core-web-vitals.md`.
5. **Rendering optimization.** Add appropriate caching headers, preload critical resources, defer non-critical scripts, and optimize server-side rendering or static generation if applicable.
6. **Performance testing.** Read `references/performance-testing-and-budgets.md`. Run Lighthouse or equivalent, measure actual load times, and verify all targets from the spec are met.

## Optimization rules

- Never break functionality for performance. A fast broken app is worse than a slightly slower working one.
- Never remove accessibility attributes for smaller HTML.
- Never remove animations; optimize their rendering performance instead.
- Measure before and after every optimization so you can prove it helped.
- Use the project's actual build tools and configuration, not external tools the project doesn't have.

## What you hand off

After you finish:
- Bundle sizes are within the spec's budget
- Images are optimized and lazy-loaded
- Fonts are optimized with no CLS
- Core Web Vitals meet the spec's targets
- A performance report documents the measurements

## Working with other skills

- Frontend Architecture (Step 1) defined the build setup you optimize
- Visual Design (Step 2) loaded fonts you optimize
- UI Components (Step 4) built the components you lazy-load and code-split
- Animations (Step 7) added motion you verify runs at 60fps
- SEO (Step 8) added structured data that must remain after optimization
- Accessibility (Step 9) added ARIA attributes that must remain after optimization

## Review before finishing

Verify: Lighthouse performance score meets target, LCP/CLS/INP within budget, no regressions in functionality or accessibility, images serve modern formats, fonts load without CLS, and bundle size within budget.

## Boundaries

Don't rebuild components (Step 4). Don't change user flows (Step 5). Don't remove animations (Step 7). Don't remove SEO markup (Step 8). Don't remove accessibility attributes (Step 9). You optimize the existing implementation for speed.
