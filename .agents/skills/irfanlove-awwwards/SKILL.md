---
name: irfanlove-awwwards
description: Master Awwwards Inspiration and Design System Extraction Engine. Opens any award-winning website in Google Chrome, waits for complete loading and animated preloader dismissal, scrolls full page, tests live hover and click state machines, and writes 11 dedicated architectural specification files into designs/<brand-slug>/ with deep explanations and zero AI slop.
metadata:
  priority: 9
  command: "/irfanlove:awwwards"
---

# Awwwards Live Browser Extraction & Motion Intelligence (`/irfanlove:awwwards`)

## 1. Overview & Core Mission
The `irfanlove-awwwards` skill orchestrates live website inspection, Awwwards design reverse-engineering, and mathematical token extraction. Regardless of which AI model executes this skill (Gemini 3.8 Flash, Gemini 3.8 Pro, Claude 3.7 Sonnet, Claude Opus, or GPT-4o), the AI must never guess or generate generic stubs. The AI opens the target site in a real browser (Google Chrome), waits for complete page loading, inspects the live DOM, and produces 11 dedicated architectural files with comprehensive explanations.

## 2. Browser Execution & Page Load Protocol
When given any reference website URL or Awwwards award winner, the executing AI agent must enforce this sequence:

1. **Browser Navigation & Viewport Setup**:
   - Open target URL in Google Chrome at desktop viewport 1440x900.
   - Wait for `domcontentloaded` and network idle.

2. **Preloader & Loader Dismissal Wait**:
   - Award-winning sites frequently feature animated preloaders (e.g. counting sequences from 000 to 100, SVG draw paths, or curtain screens).
   - Poll `.preloader`, `[class*="preloader" i]`, `.loader`, or `[data-preloader]`.
   - Wait until opacity drops below 0.05 or display is `none` (up to 8 seconds). Never inspect before the preloader vanishes.

3. **Cookie Consent & Modal Handling**:
   - Detect cookie consent banners (`button[id*="cookie" i]`, buttons containing "Accept", "Allow", or "Agree") and dismiss them to prevent UI obstruction.

4. **Interactive Full-Page Smooth Scroll**:
   - Calculate maximum document height: `Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)`.
   - Scroll down in 350px increments with 90ms intervals to trigger all intersection observers, lazy-loaded media, and GSAP ScrollTriggers.
   - Smoothly scroll back to top (0px) and pause 1 second for entrance choreographies to settle.

5. **Live Hover & Click Testing**:
   - Measure resting styles on interactive buttons, links, pills, and cards.
   - Simulate cursor hover to measure background deltas, translateY lifts, and transition timings.
   - Test hamburger navigation buttons to record full-screen curtain overlay selectors, backdrop filters, and staggered link counts.

## 3. Dedicated Multi-File Directory Architecture
The engine outputs all findings into `designs/<brand-slug>/`. The AI must ensure each of the following 11 dedicated files is generated with deep explanations:

| File Name | Format | Domain Covered & Required Content |
| :--- | :--- | :--- |
| **`00-manifest.json`** | JSON | Extraction metadata, brand name, slug, target URL, canonical URL, runtime stack, total DOM nodes, and timestamp. |
| **`01-tokens.json`** | JSON (W3C DTCG) | Official W3C Design Tokens Community Group format ($type/$value) for Style Dictionary, Figma, and tokens studio. |
| **`02-theme.css`** | CSS | Complete Tailwind v4 `@theme inline` block and `:root` CSS custom properties for instant project copy-paste. |
| **`03-colors.md`** | Markdown | Color system architecture: chromatic palette table, canvas substrate, calibrated surface ladder (surfaces 1-4), hairline borders, ink hierarchy, and WCAG 2.2 AA contrast validation table. |
| **`04-typography.md`** | Markdown | Typography system: font families, optical sizes, modular scale table, live DOM specimen strings, heading hierarchy (H1-H6), body copy, and pairing rules. |
| **`05-stack.md`** | Markdown | Engineering stack: frameworks (Astro, Next.js, React, Vue), styling (Tailwind, CSS variables), motion libraries (GSAP, ScrollTrigger, Lenis, Three.js), hosting, and architecture rationale. |
| **`06-layout-structure.md`** & **`.json`** | MD & JSON | Horizontal macro section bands breakdown: real selectors, layout archetypes (navbar, hero, marquee, bento, split, cards-grid, footer), dimensions, offsets, and z-index layering. |
| **`07-motion-and-animations.md`** & **`.json`** | MD & JSON | Motion DNA: preloader analysis, detected motion engines, micro and standard durations, cubic-bezier easing curves, and scroll-triggered scrubbing behaviors. |
| **`08-hover-and-interactions.md`** | Markdown | Hover & micro-interactions census: before vs after computed style diffs, magnetic buttons, card lift physics, custom pointer dynamics, and menu curtain overlay state machine. |
| **`09-components-catalog.md`** | Markdown | UI components catalog: buttons, cards, pills, badges, inputs, and modals with exact computed CSS properties and state variants. |
| **`10-design-blueprint.md`** | Markdown | Master Google DESIGN.md-compliant architectural blueprint tying all visual tokens, surfaces, and motion together with developer implementation guidelines. |
| **`11-accessibility-audit.md`** | Markdown | WCAG 2.2 AA Accessibility & Contrast audit: foreground/background contrast ratios, minimum 44x44px touch target compliance, and semantic landmarks. |
| **`assets/`** | Directory | Visual proof: desktop hero, desktop fullpage scroll, mobile hero, and mobile fullpage screenshots. |

## 4. Architectural Content Requirements for Written Files

### A. Colors Specification (`03-colors.md`)
- Must document root canvas substrate (`--canvas`), surface ladder (`--surface-1` through `--surface-4`), and hairline borders (`--hairline`).
- Detail why each color was selected, how luminance intervals prevent muddy drop-shadows, and provide exact WCAG 2.2 AA contrast ratios.

### B. Typography Specification (`04-typography.md`)
- Must catalog primary and secondary font families, display weights, and modular scale from Display-XL down to Caption.
- Include verbatim live DOM specimen strings showing real text observed during browser extraction.
- Explain optical tracking, negative letter-spacing on display headlines, and line-height ratios.

### C. Stack Specification (`05-stack.md`)
- Must detail runtime frameworks (Astro, Next.js, React), styling engines (Tailwind, CSS variables), and motion libraries (Lenis, GSAP).
- Provide architectural analysis explaining how the stack delivers 60fps fluidity and high Core Web Vitals scores.

### D. Layout Structure Specification (`06-layout-structure.md` & `.json`)
- Must break down every macro section band in vertical sequence from top to bottom.
- Document exact CSS selectors, width/height dimensions, vertical top offsets, and layout archetypes (navbar, hero, marquee, split, bento, cards-grid, footer).
- Include container max-widths, responsive grid rules, and explicit z-index layer stack.

### E. Motion & Choreography Specification (`07-motion-and-animations.md` & `.json`)
- Must record animated preloader timeline, entrance transitions, and cubic-bezier easing curves.
- Document ScrollTrigger scrub behaviors, marquee velocities, and hardware-accelerated transforms.

### F. Hover States Specification (`08-hover-and-interactions.md`)
- Must contain computed before-and-after style comparisons across buttons, cards, and links.
- Detail cursor tracking dynamics, magnetic snap physics, and hamburger menu overlay curtain state machines.

## 5. Execution Workflow for AI Models

### Method 1: Using the irfanlovefront CLI Engine (Recommended)
Run the extraction command directly inside the project root:
```bash
node mcp/dist/cli.js extract <URL>
```
Example:
```bash
node mcp/dist/cli.js extract https://www.stefanobg.com/
```

### Method 2: Using the irfanlovefront MCP Tool
Invoke the `irfanlove_extract` tool:
- `url`: Target website URL (opens Chrome, waits for preloader, scrolls, tests hovers)
- `outputDir`: Directory path (defaults to `./designs`)
- `headless`: Set to `false` for visible Chrome rendering or `true` for background execution

### Method 3: Direct Browser Subagent Execution
If the AI agent uses browser tools directly:
1. Navigate to target URL and verify complete preloader dismissal.
2. Smoothly scroll from top to bottom, recording every macro section band.
3. Measure computed CSS properties across interactive controls.
4. Write each of the 11 separate files into `designs/<brand-slug>/` with full architectural explanations.

## 6. Quality Assurance & Zero-Slop Checklist
Before presenting the extraction results to the user or passing files downstream, the AI must verify:
- [ ] **11 Dedicated Files**: All files (`00-manifest.json` through `11-accessibility-audit.md`) are present in `designs/<brand-slug>/`.
- [ ] **Complete Page Loaded**: The preloader screen was fully waited out so zero loading counters or curtains obscure content.
- [ ] **All Macro Bands Captured**: Hero, logos, work showcase, approach, capabilities, and footer are distinct bands (never collapsed into a single 5000px+ block).
- [ ] **Real Measured Values**: Colors, typography sizes, and border-radii reflect actual computed CSS numbers from the live DOM.
- [ ] **Detailed Explanations**: Every markdown file includes thorough narrative explanations, tables, and implementation snippets.
- [ ] **Zero Em-Dashes**: Ensure 0 em-dashes and 0 en-dashes across all written markdown files.

## 7. Downstream Implementation Pipeline Handoff
Once extraction completes, present the user with a summary table of the generated files in `designs/<brand-slug>/`. The downstream workflow skills (`/1-prompt-generator` through `/9-seo-and-aeo`) consume these separate files to build the production website.
