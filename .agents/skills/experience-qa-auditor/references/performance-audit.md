# Performance and Core Web Vitals Audit

Performance is a fundamental UX quality. A slow, janky, or bloated interface drives away users regardless of aesthetic polish. Audit performance using concrete measurements and build telemetry rather than subjective impressions.

---

## 1. Truth in Performance Auditing

Never fabricate performance metrics. Follow these strict reporting principles:
- **Distinguish Measured vs Estimated:** If testing in a production environment with Lighthouse or Chrome DevTools, record the exact measured figures. If inspecting code without a browser runner, report the findings as "Static Performance Analysis" and identify structural risks rather than claiming an unverified 100/100 score.
- **Environment Context:** Performance measured in local development mode (`npm run dev`) includes hot-reloading overhead and unminified bundles. Always evaluate production builds (`npm run build && npm run start`) for true performance verification.

---

## 2. Core Web Vitals and Target Thresholds

Audit the application against Google Core Web Vitals thresholds:

| Metric | Target Standard | Primary Culprits | Audit Method |
|---|---|---|---|
| **Largest Contentful Paint (LCP)** | < 1.2s (Good) | Unoptimized hero images, render-blocking web fonts, client-side data waterfalls | Inspect hero visual loading priority, image format, and network waterfall |
| **Cumulative Layout Shift (CLS)** | 0.00 (Zero Shift) | Missing image dimensions, dynamic font metric shifts (FOUT), injected banners | Inspect elements shifting down during load; verify explicit aspect ratios |
| **Total Blocking Time (TBT) / INP** | < 50ms (TBT) / < 200ms (INP) | Heavy third-party scripts, unmemoized expensive calculations, main-thread blocking animations | Audit bundle size, long tasks (>50ms) in performance profiler, JS execution time |

---

## 3. Font and Asset Loading Architecture

Font and asset delays cause the largest rendering penalties:
1. **Zero Render-Blocking Font Delays:**
   - External `@import url('https://fonts.googleapis.com/...')` in CSS is strictly prohibited. It adds a serial blocking network request before the browser can render first paint.
   - Use `next/font/google` or `next/font/local` with `display: 'swap'`. Next.js automatically self-hosts the font files at build time, ensuring zero FOIT and instant text rendering.
2. **Image Format and Compression:**
   - High-resolution hero visuals must be served in modern WebP or AVIF formats.
   - Hero centerpiece visual must specify `priority` or `fetchpriority="high"` to preload the asset immediately.
   - Ensure responsive `sizes` attribute is declared so mobile devices do not download 4K desktop graphics.
3. **SVG and Vector Optimization:**
   - Strip metadata bloat, comments, and unused clip-paths from embedded SVGs.
   - Confirm all SVG path data has clean syntax to prevent browser parsing errors.

---

## 4. JavaScript Footprint and Rendering Discipline

Unchecked client bundle bloat degrades performance on lower-tier mobile hardware:
- **Client vs Server Component Boundaries:** Keep client-side React code at leaf interaction nodes. Never mark root layouts or purely static marketing sections with `'use client'`.
- **Dynamic Imports for Heavy Libraries:** Code that is not immediately visible (such as 3D canvas renderers, complex chart engines, or heavy animations) must use dynamic loading (`next/dynamic` with `ssr: false`).
- **Scroll Listener Protection:** Prohibit raw unthrottled `window.addEventListener('scroll')`. Verify scroll animations utilize GSAP ScrollTrigger or Framer Motion hooks with passive listeners.
- **DOM Element Depth and Count:** Maintain total DOM element count under 800 nodes and maximum nesting depth under 12 levels to avoid layout calculation thrashing.
