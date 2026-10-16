# Design-to-Code Fidelity, Production Engineering, and Quality Verification

## Purpose
Bridge visual design and production engineering. Ensure interfaces are not only visually distinctive but technically robust, performant, accessible, and aligned with modern web standards and search engine optimization.

---

## 1. Project Inspection and Stack Detection

Before writing or modifying code in an existing repository, thoroughly inspect its actual state:
- **Detect actual build tool and compiler:** Detect whether the project uses Turbopack, Vite/Rollup, Webpack, or a framework-native compiler. Do not add Webpack or replace an existing bundler unless explicitly requested with clear rationale.
- **Inspect package manifests and dependencies:** Review `package.json` for installed packages, exact framework versions (e.g. Next.js 14/15, React 18/19), styling libraries (Tailwind v3/v4, CSS Modules), and utility libraries.
- **Identify routing and architectural boundaries:** Inspect App Router versus Pages router, server components versus client components (`'use client'`), layout hierarchy, and data flow.
- **Locate official assets:** Verify the location of genuine brand marks, official vector SVGs, public fonts, and data schemas (`src/data/`, `public/`).

---

## 2. Framework, Motion, and Bento Grid Restraint

> **Core Principle:** Never force GSAP, Lenis, bento grids, or specific frameworks onto every project. Every architectural, animation, or structural choice must be decided based on the user's explicit requirements, the existing project stack, web performance, and accessibility. This keeps the design engine advanced without making projects unnecessarily complicated.

### Motion Restraint (GSAP & Lenis)
- **Animation is a capability, not a mandatory style:** Outstanding interfaces often rely on clean layout, refined typography, and minimal or no animation.
- **Native scrolling is preferred:** Browser native scrolling is responsive, predictable, and universally accessible.
- **Lenis criteria:** Consider Lenis only when smooth coordinated scrolling directly enhances narrative presentation, and only after verifying it does not disrupt keyboard navigation, anchor jumps, browser history, touch devices, reduced-motion preferences, or sticky navigation. Never hijack scrolling in a way that reduces user control.
- **GSAP criteria:** Reserve GSAP for complex SVG morphing, sequenced timelines, or advanced scroll-triggered choreographies explicitly requested. For standard UI feedback (hover, focus, modals, accordion transitions), use performant CSS transitions or Tailwind utility transitions.
- **Reduced motion:** Always implement `@media (prefers-reduced-motion: reduce)` fallbacks that disable or minimize non-essential movement.

### Structural Restraint (Bento Grids & Cards)
- **Bento grids are an option, not a default formula:** Evaluate content relationships first. If information naturally flows as an editorial article, a tabular directory, or a narrative split view, use that structure rather than forcing content into bento boxes.
- **Container justification:** Every card must earn its place; use typography, whitespace, and hairline rules to establish hierarchy before reaching for a card container.

---

## 3. Rendered Visual Inspection and Corrective Iteration Loop

When implementation is requested and browser, preview, or screenshot tools are available, follow this cycle:

```
[Inspect Repo & Stack] 
       ↓
[Implement Design with Semantic Tokens] 
       ↓
[Execute Build, Typecheck, and Lint] 
       ↓
[Launch Dev Server & Render Routes] 
       ↓
[Capture Screenshots across 320px-1440px Viewports] 
       ↓
[Prioritize Defects (Blocker, High, Medium, Polish)] 
       ↓
[Correct Code in Source Files] 
       ↓
[Re-render & Verify Fixes (Check Regressions)]
```

### Inspection Protocol:
1. **Multi-viewport verification:** Inspect desktop (1440px, 1280px), tablet (768px, 1024px), and mobile (320px, 375px) viewports.
2. **Full-page evaluation:** Review the first viewport and lower sections for alignment, container justification, typographic scale, line wrapping, contrast, and sticky header behavior.
3. **Defect ranking:** Fix blockers (overflow, broken links, contrast failures) and high-severity issues first.
4. **Tooling limits:** If browser inspection tools are unavailable, disclose the limitation honestly and execute all supported static build and type checks. Never claim visual verification occurred without tool evidence.

---

## 4. Advanced Technical SEO for Web Pages

When implementing public web pages, apply modern, verified SEO architecture:
- **Title and Meta Descriptions:** Unique, descriptive `<title>` and `<meta name="description">` per route.
- **Canonical URLs:** Self-referencing canonical tags (`<link rel="canonical">`) matching the verified production domain.
- **Open Graph and Social Metadata:** Complete `og:title`, `og:description`, `og:image`, `og:url`, and Twitter card tags.
- **Sitemap and Robots:** Valid XML sitemap (`/sitemap.xml`) referencing canonical indexable routes; intentional `robots.txt` rules.
- **Structured Data (JSON-LD):** Truthful, validated Schema.org markup (e.g. `Person`, `ProfilePage`, `Organization`, `WebSite`). Never inject fake review stars, fake ratings, or unverified business locations.
- **Semantic Structure:** Single `<h1>` per page, sequential heading hierarchy (`h1` through `h6`), crawlable internal links with descriptive anchor text, and meaningful image `alt` attributes.

---

## 5. Web Performance and Core Web Vitals (CWV)

Treat performance as an essential pillar of design:
- **Largest Contentful Paint (LCP):** Preload genuine hero LCP images; use modern formats (AVIF, WebP); set `priority` or `fetchpriority="high"` on hero visuals; lazy-load below-the-fold media.
- **Cumulative Layout Shift (CLS):** Reserve explicit width, height, or aspect-ratio boxes for all images, videos, and dynamic widgets to eliminate layout reflow.
- **Interaction to Next Paint (INP):** Avoid heavy synchronous JavaScript execution on the main thread; optimize click and input event listeners.
- **Typography Loading:** Use font subsetting and `font-display: swap` to prevent invisible text during font loading.
- **Bundle Weight:** Avoid adding heavy third-party packages for simple tasks; analyze dependencies before importing.

---

## 6. Interaction Contracts and State Integrity

Every interactive component must declare and handle its relevant states:
- **Default:** Clear interactive affordance.
- **Hover:** Visible feedback on pointer devices.
- **Focus-visible:** Clear keyboard focus ring passing 3:1 contrast against background.
- **Active:** Immediate acknowledgment of click/touch.
- **Disabled:** Visually distinct, non-clickable, accessible explanation provided.
- **Loading:** Accessible indicator without layout jump.
- **Error:** Clear, actionable guidance explaining recovery steps.
- **Success:** Confirmation of completed user operation.

**Rule:** Advertised controls must perform the action implied by their labels. Never add fake buttons, dummy toggle switches, or simulated interactions.

---

## 7. Scope-Specific Implementation Routing

- **Single component scope:** Focus strictly on component anatomy, design tokens, state contracts, and accessibility. Skip full-page routing rituals.
- **Single page scope:** Implement route composition, typographic hierarchy, responsive layout, and full-page section flow.
- **Multi-page product scope:** Enforce shared semantic tokens and design system consistency across routes; implement page-specific compositions.
- **Controlled redesign scope:** Preserve existing routes, state logic, and APIs; update component presentation and layout structure.

---

## 8. Final Engineering Verification and Claims Honesty

When implementation is in scope, run and report relevant project checks through the verifiable execution chain:

| Requirement | Runtime Action | Required Evidence | Pass/Fail Criterion | Corrective Action |
|---|---|---|---|---|
| **Rendered Visual Inspection** | Launch dev server and inspect rendered route via `browser_subagent` or viewport screenshots. | Browser tool logs or screenshot files across 320px, 375px, 768px, 1280px, 1440px. | **Pass:** Zero horizontal scroll; contrast ≥ 4.5:1; no clipped text.<br>**Fail:** Overflow, clipped text, uninspected render. | Adjust CSS in source files, re-render, and re-inspect. |
| **Diagnostic & Red Indicator Cleanliness** | Inspect viewport edges for red issue badges, layout warnings, or error flags. | Rendered DOM check showing clean layout with 0 error indicators. | **Pass:** Zero diagnostic overlays or red indicators.<br>**Fail:** Persistent red flags along viewport edge. | Investigate root cause (DOM hydration error, accessibility flag, or lint warning) and fix in code. |
| **Build & Typecheck** | Run `npm run build` or `npm run type-check`. | Exact command line and exit code 0 output. | **Pass:** Zero TypeScript or compilation errors.<br>**Fail:** Build fails or command omitted. | Resolve type or syntax errors in source files. |
| **Technical SEO & CWV** | Verify unique `<title>`, canonicals, Open Graph, sitemap, LCP priority, and CLS image dimensions. | HTML source / head tag inspection. | **Pass:** Complete metadata and reserved media dimensions.<br>**Fail:** Generic title, missing canonical, layout shift. | Add missing meta tags and aspect-ratio CSS. |

Distinguish clearly between:
- **Designed:** Specified in concept
- **Implemented:** Written in code
- **Built:** Successfully compiled by build tool
- **Visually Inspected:** Rendered in a real browser or preview across viewports
- **Known Limitation:** Unchecked aspect due to missing tools or environment constraints

Never claim an interface is production-ready, fully accessible, or responsive without verifiable evidence.
