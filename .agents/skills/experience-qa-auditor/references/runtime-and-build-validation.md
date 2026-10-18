# Runtime, Console, and Build Validation

A clean build is the first prerequisite for production deployment. Runtime resilience requires continuous inspection of the browser console, network activity, asset delivery, and graceful failure boundaries.

---

## 1. Production Build and Type Verification

Execute and verify standard build commands in the project directory:
1. **Type Checking:** Run `npx tsc --noEmit` or equivalent project script.
   - Zero TypeScript compilation errors allowed.
   - Any unhandled `any` type escapes or broken type imports must be escalated to `/build-error-resolver` or the responsible stage.
2. **Production Bundle Compilation:** Run `npm run build`.
   - Verify that all static pages generate without build-time exceptions.
   - Check that route outputs match expected static (`○`) or dynamic (`ƒ`) indicators.
   - Review bundle analysis warnings regarding oversized initial chunks (> 250kB).

---

## 2. Browser Console Hygiene and Error Audit

During live or simulated browser execution, the developer console must remain immaculate:

| Console Issue | Root Cause | Remediation Protocol |
|---|---|---|
| **Hydration Mismatch** | Server HTML output differs from client initial render | Check for browser-only globals (`window`, `localStorage`, `Date.now()`) used in initial JSX |
| **Missing React Keys** | Iterating arrays with `.map()` without unique key props | Assign stable, unique entity IDs (`item.id`). Never use array index if list can reorder |
| **SVG Path Arc Syntax Error** | Malformed arc flags in SVG path (`Error: Expected arc flag`) | Correct SVG arc command parameters (`A rx ry x-axis-rotation large-arc-flag sweep-flag x y`) |
| **Unhandled Promise Rejection** | Async fetch or animation promise failing without catch block | Add `.catch()` handlers or wrap in `try/catch` with fallback state |
| **Duplicate ID Warning** | Multiple DOM elements sharing identical `id` attribute | Ensure all interactive inputs, dialogs, and sections have unique IDs |

---

## 3. Network Assets and Broken Link Verification

Inspect network tab traffic during page execution:
- **Zero 404 Resource Requests:** Check that all image URLs, web fonts, vector icons, and script chunks return HTTP 200/304 status codes.
- **Anchor Link Reachability:** Every internal navigation anchor (`#about`, `#capabilities`, `#contact`) must link to a valid DOM element with a matching `id`.
- **External Link Safety:** All external links (`target="_blank"`) must include `rel="noopener noreferrer"` to prevent reverse tabnabbing and performance leaks.

---

## 4. Crafted 404 and Resilient Error Boundaries

Edge cases define the resilience of the architecture. The application must feature bespoke error UX:

### A. Bespoke 404 Not Found Page (`frontend/src/app/not-found.tsx`)
Verify that requesting an unreachable route (e.g. `/this-page-does-not-exist`) serves a branded 404 page:
- Matches project typography, color palette, and header navigation.
- Provides a clear recovery CTA directing users back to the flagship home page.
- Avoids default framework or hosting provider error screens.

### B. Resilient Client Error Boundary (`frontend/src/app/error.tsx`)
Verify client-side component crash isolation:
- Marked with `'use client'` directive.
- Accepts `error: Error` and `reset: () => void` props.
- Displays an informative, non-intimidating fault explanation.
- Provides an interactive "Attempt Component Reset" button that triggers `reset()` to recover without forcing a hard browser refresh.
