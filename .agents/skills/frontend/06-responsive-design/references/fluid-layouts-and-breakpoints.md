# Fluid Layouts and Breakpoints

## Let content define constraints

Use intrinsic sizing, flexible containers, wrapping, grid, and fluid type so content can adapt naturally. Choose breakpoints where the current composition stops working, not because a device list contains a familiar number.

## Common tools

- `minmax()` and `auto-fit` or `auto-fill` for flexible grids;
- `clamp()` for bounded fluid sizes;
- percentages, `max-width`, and container queries for context-sensitive layout;
- logical properties for writing direction support;
- `aspect-ratio` and reserved dimensions for stable media;
- overflow strategies designed for the content type.

## Breakpoint rules

Document the reason for each breakpoint and which layout behavior changes there. Avoid near-duplicate breakpoints and overrides that fight one another. Prefer component-level adaptation when a component must respond to its container rather than the whole viewport.

## Failure cases

Test long words, translated content, large numbers, zoom, browser text scaling, embedded widgets, and narrow split-screen windows. The design must not depend on one exact device width.
