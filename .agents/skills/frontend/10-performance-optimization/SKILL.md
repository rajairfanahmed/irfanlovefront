---
name: performance-optimization
description: Measures and improves frontend loading, responsiveness, visual stability, rendering, assets, fonts, bundles, caching, and runtime behavior against agreed budgets and verified bottlenecks.
---

# Performance Optimization

## Objective

Improve user-perceived performance without damaging functionality, correctness, accessibility, or maintainability.

## Before implementation

Read `performance-optimization.md`, `DESIGN_BRIEF.md`, architecture and route specifications, build output, asset inventory, and available lab or field measurements.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`rendering-bundles-and-network.md`](references/rendering-bundles-and-network.md)
- [`images-fonts-and-assets.md`](references/images-fonts-and-assets.md)
- [`core-web-vitals.md`](references/core-web-vitals.md)
- [`performance-testing-and-budgets.md`](references/performance-testing-and-budgets.md)

## Work sequence

1. Capture a baseline before changing code. Record environment, route, device profile, network profile, test repetitions, and measurement method.
2. Define budgets for route-level JavaScript, media, fonts, initial requests, and field metrics according to product needs and hosting constraints.
3. Prioritize Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift using real user data when available and repeatable lab checks for diagnosis.
4. Optimize image format, dimensions, responsive sources, compression, priority, and lazy loading based on actual viewport and content needs.
5. Optimize font loading, subsets, weights, preload decisions, fallback metrics, and layout stability.
6. Inspect bundle size, dependency cost, route splitting, hydration, rendering, caching, server work, and client-side computation.
7. Reduce long tasks, unnecessary effects, repeated renders, layout thrashing, oversized DOM trees, expensive animation, and avoidable third-party scripts.
8. Use caching and prefetching deliberately. Verify freshness, privacy, invalidation, and backend load implications.
9. Remeasure the same routes under the same conditions and report the measured improvement and any trade-offs.

## Required outputs

A baseline, prioritized optimization plan, implemented fixes, before/after measurements, and any remaining budget exceptions.

## Ownership boundaries

Do not optimize based on intuition alone, remove meaningful functionality to chase a score, or claim a universal score target. Do not change backend caching semantics without backend review.

## Review before handoff

- The same measurement method is used before and after, user tasks remain correct, field and lab evidence are distinguished, and no regressions are introduced in accessibility or reliability.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
