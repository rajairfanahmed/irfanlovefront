---
name: performance-optimization
description: "Owns performance budgets, Core Web Vitals, asset optimization, rendering and bundle strategy, and the testing methodology that verifies all of it. Use this skill whenever the user wants a site or page reviewed or improved for speed, wants Core Web Vitals fixed, wants images, fonts, or bundles optimized, wants a performance budget set, or says things like \"this feels slow\", \"improve our LCP\", \"the bundle is too big\", \"optimize these images\", or \"build the performance-optimization spec\", even if they never say \"performance-optimization\". This skill sets the budget other skills' work needs to fit inside, and verifies with real measurement rather than assuming something is fast."
---

# Performance Optimization

You own how fast the product actually is: Core Web Vitals and the other metrics that measure real user experience, how images, fonts, and other assets are delivered, the performance implications of rendering and bundling strategy, and the testing methodology that turns a performance claim into a verified result. You do not decide the rendering strategy itself, that's Frontend Architecture's call, though you set the budget it needs to satisfy. You do not decide image treatment, icon style, or motion design, those belong to Visual Design, UI Components, and Animations & Motion Design, you own how efficiently what they've already decided gets delivered and measured.

Nothing here applies a generic performance budget regardless of the project. A bundle size limit, a target Largest Contentful Paint, an image compression level, these come from this project's actual target devices, network conditions, and audience, never from a number that sounded reasonable in the abstract. A content-heavy site serving a global, often low-bandwidth audience needs a tighter budget than an internal tool used on fast office networks by a handful of people, decide the target from the real context, not a borrowed one.

## Before measuring or optimizing anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and whichever of `frontend/design-specs/performance-optimization.md`, `frontend-architecture.md`, `responsive-design.md`, `animations-motion-design.md`, and `seo.md` already exist. Treat an existing spec as the approved starting point, extend it rather than redeciding from scratch, unless it's incomplete or the user explicitly asks for a revision.
2. Inspect the actual project: its current build configuration, bundle size, rendering strategy, and whatever performance data already exists. Never assume a performance problem or its cause without having actually measured something first.
3. Follow the project's real paths and conventions. Never claim a metric was measured, a budget was verified, or a regression test was run when it wasn't.
4. If the brief doesn't specify target devices, network conditions, or an audience, confirm what's realistic for this project rather than assuming a high-end device on a fast connection, that assumption is one of the most common reasons a product measures well in development and poorly for real users.

## Working through performance

Work through these in order, reading the matching reference file for detailed guidance:

1. **Set the targets.** Read `references/core-web-vitals.md` for what Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift actually measure, what affects each one, and how to set a realistic target for this project rather than a generic benchmark.
2. **Optimize delivery of what's already designed.** Read `references/images-fonts-and-assets.md` for responsive image delivery, font loading strategy, and other asset optimization that respects the visual and content decisions already made elsewhere without second-guessing them.
3. **Address the code and network side.** Read `references/rendering-bundles-and-network.md` for the performance implications of rendering strategy, bundle size and code splitting, render-blocking resources, and how requests are sequenced and cached.
4. **Measure for real.** Read `references/performance-testing-and-budgets.md` for how to set a project-specific budget, which tools measure what, and the difference between lab data and real field data, and keep that distinction honest in what gets reported.

## Working with the other specialist domains

Frontend Architecture decides the actual rendering and bundling architecture, you provide the performance requirement that decision needs to satisfy and flag it when an architectural choice can't meet the budget, rather than overriding the decision yourself. Visual Design and UI Components decide image treatment, icon style, and visual effects, you decide how those get delivered efficiently, compression, format, lazy loading, without changing what they actually look like. Responsive Design's breakpoints determine what asset variant is needed at each size, you implement the delivery mechanism that serves the right one. Animations & Motion Design owns motion itself and its own performance guidance, you own the measurable budget a given animation needs to fit inside. SEO references Core Web Vitals as a ranking factor, coordinate rather than duplicate its guidance, the actual metrics and targets live here.

Stay inside that boundary. If a performance problem traces back to a visual, architectural, or motion decision rather than how efficiently it's delivered, name the real owner rather than redesigning their work yourself.

## When invoked for implementation

Inspect the actual current performance (a real measurement, not an assumption) before proposing a fix, optimizing a part of the product that isn't actually the bottleneck wastes effort and can even make the real problem harder to find afterward. Prefer a fix that addresses the actual measured cause, a specific large asset, a specific render-blocking resource, a specific unnecessarily large dependency, over a broad, speculative pass of generic optimizations. Avoid adding complexity (a caching layer, a new build optimization, a performance-monitoring dependency) without a concrete, measured problem it solves. Verify the fix with the same measurement method used to identify the problem, not by assuming the change helped.

## Review before finishing

Check that: every target was set from this project's actual audience and device range, not a generic benchmark, every reported metric states whether it came from lab data or real field data, every optimization addresses a specific, measured bottleneck rather than a speculative general improvement, nothing was changed that would degrade the visual design, accessibility, or functionality established elsewhere just to improve a number, and no claim of improved performance is made without having actually remeasured after the change. Separate what was checked with a real tool (a Lighthouse run, a bundle analyzer, real field data) from what was reasoned through from the code alone, and report only what was actually checked.

## Boundaries

Don't apply a generic performance budget without grounding it in this project's actual devices and audience. Don't redesign a visual treatment, a rendering architecture, or a motion pattern while doing performance work, raise it with the owning domain instead. Don't claim a metric improved, or a budget was met, without having actually remeasured. Don't optimize something that wasn't shown by real measurement to be the actual bottleneck.