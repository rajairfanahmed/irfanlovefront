# Core Web Vitals

Purpose: what the three Core Web Vitals metrics actually measure, what affects each one, and how to set a target that's realistic for this project rather than a generic number repeated across every project. These are the metrics most directly tied to real, perceived user experience and to search ranking, treat them as the primary performance targets, not a secondary checklist item.

## Largest Contentful Paint (LCP)

Measures how long it takes the largest visible content element, usually a hero image, a large block of text, or a background image, to render within the viewport. It approximates when a user perceives the page as having actually loaded its main content, not just started loading. Good is generally under 2.5 seconds, poor is generally over 4 seconds, measured at the 75th percentile of real visits, not the best case. What affects it: server response time, render-blocking resources that delay the browser reaching the content, the time it takes the actual LCP element's own resource (often an image) to load, and client-side rendering that delays content appearing until JavaScript executes. Identify the actual LCP element for this specific page before optimizing, the fix is different depending on whether it's an unoptimized image, a slow server response, or a client-rendered component that takes too long to appear.

## Interaction to Next Paint (INP)

Measures the latency of the slowest (or near-slowest) interaction a real user has with the page over their visit, from input (a click, a tap, a key press) to the next visual update reflecting that input. It approximates how responsive the page feels during actual use, not just on load. Good is generally under 200 milliseconds, poor is generally over 500 milliseconds. What affects it: long-running JavaScript tasks that block the main thread during an interaction, expensive work triggered synchronously by an event handler, and excessive DOM updates in response to a single interaction. Unlike LCP, this metric reflects the whole session's worst interactions, a page that loads quickly but has one slow, janky interaction somewhere in a long session can still fail this metric even though the initial load looked fine.

## Cumulative Layout Shift (CLS)

Measures how much visible content unexpectedly shifts position during the page's lifecycle, a lower score is better, with good generally under 0.1 and poor generally over 0.25. What affects it: images, embeds, or ads loading without reserved space, web fonts causing a visible reflow when they swap in, dynamically injected content (a banner, a cookie notice) that pushes existing content down without warning, and content whose size depends on data that arrives after the initial layout. Reserving the correct space ahead of time for anything that loads asynchronously is the most direct fix, and it's a decision made at design and implementation time, not something that can be patched after the fact without knowing the actual dimensions in advance.

## Other relevant metrics

Time to First Byte (TTFB) measures server responsiveness and sets a floor under everything else, a slow server response delays every subsequent metric regardless of how well the frontend itself is optimized. First Contentful Paint (FCP) measures when any content first appears, useful as an early signal but less directly tied to perceived completeness than LCP. Total Blocking Time (TBT), a lab-only proxy for INP, measures how much the main thread was blocked during load, useful for diagnosing INP issues in a lab environment where real user interaction data isn't available.

## Field data versus lab data

Field data (real user measurements, aggregated from actual visits, often via the Chrome User Experience Report or a project's own real-user-monitoring setup) reflects what real users on real devices and real networks actually experience. Lab data (a controlled, repeatable measurement from a tool like Lighthouse running under simulated conditions) is useful for diagnosing a specific issue and for catching a regression in a controlled environment, but doesn't capture the full range of real-world device and network variability. A page can lab-test well and still perform poorly in the field if the lab conditions don't reflect the actual user base's devices and connections, always state which kind of data a given number comes from.

## Setting a realistic target

Don't adopt the "good" threshold as an automatic target without checking it against the project's actual audience, a product whose real users are disproportionately on older devices or slower connections may need a more conservative internal target to reliably land in the "good" range at the 75th percentile the metric is actually scored against, not just on a fast device in a lab test. Conversely, don't relax a target to match a known-slow starting point when the actual fix is to improve the underlying performance.

## Core Web Vitals and search ranking

These metrics are a real, if not dominant, search ranking factor, see the seo skill for how this fits into broader search visibility, that's a reason these metrics matter beyond user experience alone, but the user experience case for meeting them is the stronger and more direct justification, optimize for the real user first and the ranking benefit follows from the same work.

## Diagnosing root cause before fixing

For any of these three metrics measuring poorly, identify the specific element or interaction actually responsible before changing anything, a general, speculative optimization pass without a diagnosed cause often misses the actual problem and can add complexity without fixing what's actually slow. Use the detailed delivery and bundling guidance in `images-fonts-and-assets.md` and `rendering-bundles-and-network.md` once the actual cause is identified, not before.