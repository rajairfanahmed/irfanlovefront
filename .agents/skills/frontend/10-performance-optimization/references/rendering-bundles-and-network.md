# Rendering, Bundles, and Network

Purpose: the performance implications of how a page is rendered and how its code and requests are organized. Frontend Architecture owns the actual rendering strategy and code organization decisions, this file owns the performance requirement those decisions need to satisfy and the specific techniques that improve bundle size, request efficiency, and main-thread cost within whatever architecture is already in place.

## Rendering strategy and its performance tradeoffs

Server rendering and static generation deliver complete content on the initial response, which generally produces a faster, more consistent LCP since the browser doesn't need to execute JavaScript before showing real content. Client-side rendering delays visible content until JavaScript downloads, parses, and executes, which tends to hurt LCP and can hurt INP if the resulting page does significant work on the main thread after that. This is a real, measurable tradeoff, not just a code-organization preference, raise it as a performance requirement when a rendering strategy choice is being made or reconsidered, coordinating with Frontend Architecture rather than unilaterally dictating the architecture.

## Hydration cost

In a framework that renders on the server and then hydrates on the client (attaching interactivity to already-rendered markup), the hydration step itself has a real main-thread cost that can delay interactivity even though content is already visible. Where the framework supports it, hydrate progressively or selectively (only the interactive parts that actually need it, rather than the whole page at once) rather than paying the full hydration cost for content that doesn't need to become interactive immediately.

## JavaScript bundle size

A smaller JavaScript bundle downloads, parses, and executes faster, directly benefiting both load performance and, if large parsing or execution blocks the main thread, interaction responsiveness. Measure actual bundle size and its composition (which dependencies and which parts of the application contribute the most) before optimizing, rather than guessing at what's large. A single unexpectedly large dependency is often a bigger win to address than a broad, speculative trimming pass across many small files.

## Code splitting

Split code so a user only downloads what the current page or interaction actually needs, deferring a route's code until that route is navigated to, deferring a modal's or a rarely used feature's code until it's actually opened. This directly reduces the initial bundle a first-time visitor has to download, the cost is added complexity in managing the split points, apply it where the actual size justifies it, a tiny component isn't worth its own split point, a large, infrequently used feature usually is.

## Tree shaking and dead code

Confirm the build process actually eliminates code that's imported but never used, a dependency imported for a single function but bundled in its entirety because of how it's imported is a common, avoidable source of bundle bloat. Importing only the specific pieces needed from a library, rather than the whole library, is often the difference between effective and ineffective tree shaking for a given dependency.

## Render-blocking resources

A stylesheet or script that blocks rendering until it's downloaded and processed delays everything the user sees, minimize what's genuinely render-blocking: inline the small amount of CSS actually needed for the initial visible content (critical CSS) and load the rest asynchronously, and load non-essential scripts with `defer` or `async` rather than blocking the parser by default.

## Request count and sequencing

Fewer, well-sequenced requests generally outperform many small, poorly sequenced ones, though modern HTTP (HTTP/2 and HTTP/3) reduces but doesn't eliminate the cost of request count, since each request still has its own processing and potential latency cost. Check for a request waterfall where one request unnecessarily waits for another to complete before starting, when requests are genuinely independent, they should fire in parallel, not sequentially.

## Resource hints

Use `preconnect` for a critical third-party origin the page will definitely need (a font host, an API endpoint) to start the connection handshake early, `preload` for a critical resource discovered late in the normal loading sequence but needed early (a font, a critical image), and `prefetch` for a resource likely needed for a probable next navigation. Use these deliberately and sparingly, hinting at too many resources dilutes the browser's ability to prioritize correctly and can waste bandwidth on something that's never actually used.

## Caching strategy

Cache static assets aggressively with a content hash in the filename so a new deployment automatically invalidates the old cached version without needing a shorter, more conservative cache lifetime. Where a service worker is in use, verify its caching strategy actually matches the content's real update frequency, caching something that changes frequently as if it were static serves stale content, and failing to cache something genuinely static wastes bandwidth and time on every visit.

## Third-party script impact on the network and main thread

Beyond the asset-loading guidance in `images-fonts-and-assets.md`, a third-party script can introduce its own cascade of additional requests and its own main-thread execution cost, often outside the project's direct control. Measure its actual impact (using the testing methods in `performance-testing-and-budgets.md`) rather than assuming a small snippet has a small cost, some genuinely do, some are substantially heavier than their footprint in the source code suggests.

## Long tasks and main-thread blocking

A single long-running synchronous task blocks the main thread from responding to user input or updating the display, directly hurting INP. Break up a genuinely long computation into smaller chunks that yield back to the browser between them, or move it off the main thread entirely with a web worker where the work doesn't need direct, synchronous DOM access.