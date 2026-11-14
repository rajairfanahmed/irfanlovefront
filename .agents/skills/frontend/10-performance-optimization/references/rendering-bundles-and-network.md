# Rendering, Bundles, and Network

## Diagnose before optimizing

Capture route-level bundle output and runtime measurements. Identify which code and requests are required for the first meaningful experience and which can be deferred. Compare the current baseline with the intended budget.

## Rendering strategy

Use static generation, server rendering, streaming, or client rendering according to content freshness, personalization, interactivity, and framework capability. Reduce unnecessary hydration and keep static content out of client-only bundles where possible.

## Bundle strategy

- Remove unused dependencies and duplicate packages.
- Split code at meaningful route or interaction boundaries.
- Lazy-load heavy tools that are not needed immediately.
- Avoid large date, chart, editor, or animation libraries on routes that do not use them.
- Inspect transitive dependencies and actual shipped output.

## Network and caching

Reduce avoidable requests, prioritize critical resources, and configure caching based on data freshness and privacy. Do not cache personalized data in a public shared cache. Verify prefetch behavior and its backend cost.

## Main-thread work

Reduce long tasks, synchronous parsing, expensive computation, and unnecessary rendering. Move appropriate work off the main thread only when the added complexity is justified.
