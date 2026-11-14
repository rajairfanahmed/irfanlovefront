# Core Web Vitals

Core Web Vitals are field metrics for loading, interactivity, and visual stability. The current core set is Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).

## Good thresholds

At the 75th percentile of real page visits, the current recommended good thresholds are:

| Metric | Good |
|---|---:|
| LCP | 2.5 seconds or less |
| INP | 200 milliseconds or less |
| CLS | 0.1 or less |

Sources:
- https://web.dev/articles/vitals
- https://web.dev/articles/defining-core-web-vitals-thresholds

## What each metric indicates

- **LCP:** how quickly the main content appears.
- **INP:** how responsive the page is across meaningful user interactions.
- **CLS:** how much unexpected visual movement occurs during the page lifetime.

## Measurement discipline

Field data describes real users and devices. Lab data helps reproduce and diagnose issues. Do not treat one local Lighthouse run as equivalent to field performance. Segment measurements by route and device class where possible.

## Diagnostic examples

LCP issues may involve slow server response, render-blocking resources, or an oversized hero asset. INP issues may involve long JavaScript tasks or expensive event handlers. CLS issues may involve unsized media, injected content, font swaps, or unstable ads and embeds.
