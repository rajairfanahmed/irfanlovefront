# Design-to-Code Fidelity and Engineering Constraints

## Purpose
Preserve design intent when translating interface designs into maintainable frontend code connected to real product behaviour. Distinguish implementation correctness from design quality, and require genuine visual inspection of rendered output whenever tools allow.

---

## 1. Project Inspection Before Implementation

Before modifying code in an existing repository, thoroughly inspect its actual state:
- Check existing package configuration (`package.json`, dependencies, scripts)
- Identify existing app router or pages structure, routes, and layout hierarchy
- Review existing UI components, styling conventions (Tailwind, CSS modules, design tokens)
- Inspect available data sources, schemas, and asset directories (`public/`, icons, SVGs)
- Identify installed animation and interaction libraries (GSAP, Lenis, Framer Motion)
- Report any material discrepancies between user instructions and the checkout
- Use the actual repository as the implementation source of truth, preserving working architecture, existing routes, real content, and official brand assets unless explicitly directed to modify them

### 1.1 Scope-Specific Implementation Routing
- **Single component scope:** Focus strictly on component anatomy, design tokens, state contracts (hover/focus/active/disabled/loading/error), and accessibility. Skip full-page routing rituals.
- **Single page scope:** Implement route composition, typographic hierarchy, responsive layout, and full-page section flow.
- **Multi-page product scope:** Enforce shared semantic tokens and design system consistency across routes; implement page-specific compositions.
- **Controlled redesign scope:** Preserve existing routes, state logic, and APIs; update component presentation and layout structure.

---

## 2. Rendered Visual Inspection and Corrective Iteration Loop

When implementation is requested and browser, preview, or screenshot capabilities are available, follow this verified cycle:

```
[Inspect Repo & Stack] 
       ↓
[Implement Design in Code] 
       ↓
[Run Build, Typecheck, Lint] 
       ↓
[Launch Dev/Preview Server] 
       ↓
[Render & Visually Inspect Routes across Viewports] 
       ↓
[Log Prioritized Visual/UX Defects] 
       ↓
[Correct Code in Source Files] 
       ↓
[Re-render & Verify Fixes (Check Regressions)]
```

### Detailed Inspection Protocol:

1. **Start application:** Run the project development server or build preview using the repository's verified scripts.
2. **Inspect rendered output across all routes:** Do not rely on code review or build status alone. Open and inspect every requested route and major section.
3. **Multi-viewport verification:** Inspect desktop (e.g. 1440px or 1280px) and mobile viewports (e.g. 375px or 390px). Check intermediate tablet viewports when layout complexity requires it.
4. **Full-page evaluation:** Review both the above-the-fold viewport and the complete scrollable page:
   - Composition balance and section pacing
   - Typographic scale, readability, line lengths, and text wrapping
   - Container widths, padding, margins, and spatial rhythm
   - Alignment, visual anchors, and focal point clarity
   - Image cropping, aspect ratios, contrast, and asset rendering
   - Component repetition and container justification (ensuring cards earn their place)
   - Layout overflow, unwanted horizontal scrolling, and sticky element behaviour
   - Interaction states (hover, focus, active, loading, error, empty)
   - Adherence to the stated design thesis
5. **Defect ranking:** Record a prioritized list of concrete defects (Critical, Major, Minor, Cosmetic).
6. **Code correction:** Modify the actual source files to resolve defects.
7. **Re-inspection:** Re-render the affected routes and confirm that the issues are resolved without regressions.
8. **Verification honesty:** If preview, browser, or screenshot tools are unavailable in the environment, explicitly disclose that limitation, execute all available build and type checks, and never falsely claim visual verification.

---

## 3. Design-to-Implementation Mapping

Translate design system tokens and choices cleanly into code:
- **Layout:** CSS Grid, Flexbox, flow layout, container queries, and responsive breakpoints
- **Typography:** Web font loading, semantic type tokens, appropriate line heights, and clamp-based fluid scales
- **Color:** Semantic design tokens (foreground, background, border, surface, accent) mapped to CSS variables or Tailwind config
- **Spacing:** Predictable spacing scales (multiples of 4px or 8px) applied consistently across margins and paddings
- **Components:** Modular, single-responsibility components with clean prop contracts
- **Interactions:** Explicit state machines or handlers for hover, focus, active, disabled, loading, and error states
- **Assets:** Official vector brand SVGs and optimized modern image formats (WebP, AVIF)

---

## 4. Semantic HTML and Accessible Implementation

Always build on solid semantic foundations:
- Proper heading hierarchy (`h1` through `h6`) without skipping levels
- Native `<button>` elements for actions and `<a>` elements for navigation
- Associated form `<label>` elements and accessible descriptions (`aria-describedby`)
- Proper input types (`email`, `tel`, `search`, etc.) with autocomplete attributes
- Semantic tables (`<table>`, `<th>`, `<td>`) for tabular data; lists (`<ul>`, `<ol>`) for groups
- Visible keyboard focus indicators that pass WCAG contrast requirements
- Meaningful landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`)
- Support for `prefers-reduced-motion` media queries when animations or smooth scrolling are used
- Never use ARIA as a substitute for semantic native HTML

---

## 5. Interaction Contracts and State Integrity

Every interactive component must declare and handle its complete lifecycle:
- **Default state:** Clear affordance indicating interactivity
- **Hover/focus state:** Visible, accessible feedback
- **Active state:** Immediate acknowledgment of user action
- **Loading state:** Accessible progress indicator without layout shift
- **Error state:** Actionable guidance explaining how to recover
- **Success state:** Confirmation of completed operation
- **Empty state:** Helpful guidance when no data exists

**Rule:** Every advertised control must perform the action implied by its label. Never add non-functional buttons, dummy toggle switches, or fake interactions merely to make an interface look advanced in a screenshot.

---

## 6. Performance-Aware Implementation

Optimize interfaces for real user devices and networks:
- Optimize font loading (`font-display: swap`, sub-setting)
- Set explicit width/height or aspect ratios on media to prevent Layout Shift (CLS)
- Lazy-load below-the-fold images and complex widgets
- Prevent unnecessary re-renders in client components
- Minimize heavy third-party JavaScript dependencies
- Ensure smooth 60fps animations using transform and opacity properties

---

## 7. Engineering Claims and Verification Honesty

Distinguish clearly between:
- **Designed:** Specified in concept or mockup
- **Implemented:** Written in code
- **Built:** Successfully compiled by build tool
- **Type-checked:** Verified by static type checker
- **Visually Inspected:** Rendered in a real browser or preview and inspected
- **Tested:** Validated against automated test assertions
- **Known Limitation:** Unchecked aspect due to missing tools or environment constraints

Never claim an interface is production-ready, fully accessible, or responsive across all devices unless verifiable evidence supports that claim.
