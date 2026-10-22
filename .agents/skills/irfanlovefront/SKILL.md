---
name: irfanlovefront
description: Master Frontend Engineering Suite and Universal Design System Extractor. Integrates mathematical DOM extraction, Awwwards inspiration, multi-file design directory generation (designs/<slug>/), and an 8-phase verified implementation pipeline with zero AI slop and 60fps motion choreography.
metadata:
  priority: 10
  command: "/irfanlovefront"
---

# `irfanlovefront` - Master Frontend Engineering & Extraction Suite

## 1. Overview & Core Mission
`irfanlovefront` is an enterprise-grade MCP server, CLI engine, and agent skill suite designed to reverse-engineer, extract, architect, and construct award-winning websites. It replaces guesswork, placeholder templates, and AI hallucinations with precision mathematical DOM measurements, CIELAB color grouping, computed CSS typography scales, live hover physics, and 60fps motion choreography.

Regardless of which AI model executes these skills (Gemini 3.8 Flash, Gemini 3.8 Pro, Claude 3.7 Sonnet, Claude Opus, or GPT-4o), the suite guarantees that the AI opens the target site in a real browser, waits for animated preloaders and assets to completely load, and generates 11 separate architectural specification files.

## 2. Command Registry & Pipeline Progression

| Command | Skill | Pipeline Stage & Responsibility |
| :--- | :--- | :--- |
| **`/irfanlove:extract <URL>`** | `irfanlove-extract` | Live browser extraction. Opens target site, waits for preloader, scrolls full page, and outputs 11 dedicated specification files into `designs/<slug>/`. |
| **`/irfanlove:awwwards [query]`** | `irfanlove-awwwards` | Awwwards intelligence engine. Searches award winners, analyzes motion DNA, captures components, and feeds visual reference into downstream skills. |
| **`/1-prompt-generator`** | `1-prompt-generator` | Master Prompt Architect. Conducts interactive discovery and writes locked `prompts/phase-1` through `prompts/phase-8` prompt files. |
| **`/2-setup-foundation`** | `2-setup-foundation` | Stage 1 Foundation. Ingests tokens and theme CSS, configures fonts, writes CSS custom properties, and renders Big Visual Specimen Card. |
| **`/3-build-components`** | `3-build-components` | Stage 2 Primitives. Ingests components catalog, builds 6-state buttons, badges, form controls, and mounts Interactive Showroom. |
| **`/4-cards-and-layout`** | `4-cards-and-layout` | Stage 3 Structural Bands. Ingests layout structure bands, builds HeroSection with z-index layering, Bento grids, and custom cards. |
| **`/5-navbar-and-footer`** | `5-navbar-and-footer` | Stage 4 Navigation & Footer. Builds sticky navbar, full-screen menu curtain state machine, contact wizard, and giant hover-glow watermark footer. |
| **`/6-build-pages`** | `6-build-pages` | Stage 5 Production Assembly. Removes temporary showroom, constructs complete Home page and all sub-routes with 100% authentic human copy. |
| **`/7-animate-website`** | `7-animate-website` | Stage 6 Motion Choreography. Wires Lenis smooth scroll, GSAP ScrollTrigger scrubbing, split-text entrance, and pointer hover physics. |
| **`/8-seo-and-aeo`** | `8-seo-and-aeo` | Stage 7 SEO & AI Optimization. Ingests metadata API, Schema.org JSON-LD Knowledge Graph, dynamic OpenGraph, sitemap.ts, and `llms.txt`. |
| **`/9-responsive-and-qa`** | `9-responsive-and-qa` | Stage 8 Final Audit. Validates 375px/768px/1440px breakpoints, enforces WCAG AA contrast, runs 12-point anti-slop audit, and verifies production build. |

## 3. Dedicated 11-File Output Directory Architecture (`designs/<brand-slug>/`)
Every extraction automatically produces a dedicated directory containing 11 separate specification files:

```
designs/<brand-slug>/
├── 00-manifest.json              # Metadata, target URL, runtime stack, total DOM nodes, and timestamp
├── 01-tokens.json                # Official W3C Design Tokens Community Group ($type/$value) DTCG format
├── 02-theme.css                  # Production Tailwind v4 @theme inline block and :root CSS variables
├── 03-colors.md                  # Complete color palette, surface ladder (1-4), hairline borders, and WCAG contrast table
├── 04-typography.md              # Font families, modular scale table, live DOM specimen text, and optical hierarchy
├── 05-stack.md                   # Engineering stack (Astro, Next.js, React, Tailwind, GSAP, Lenis, Three.js)
├── 06-layout-structure.json      # Machine-readable horizontal section bands array with dimensions and offsets
├── 06-layout-structure.md        # Comprehensive band-by-band structural layout and z-index layer stack
├── 07-motion-dna.json            # Machine-readable motion durations, easing curves, and detected engines
├── 07-motion-and-animations.md   # Choreography specification: preloader, scroll scrubbing, and transitions
├── 08-hover-and-interactions.md  # Live hover census table, button physics, and curtain overlay state machine
├── 09-components-catalog.md      # Observed UI primitives (buttons, pills, cards, inputs) with computed CSS
├── 10-design-blueprint.md        # Master Google DESIGN.md-compliant guide unifying all visual DNA
├── 11-accessibility-audit.md     # WCAG 2.2 AA Contrast and accessibility compliance audit
└── assets/                       # Desktop hero, desktop fullpage, mobile hero, and mobile fullpage screenshots
```

## 4. Browser Navigation & Complete Loading Protocol
To guarantee 100% extraction accuracy, all executions must obey the browser sequence:
1. **Launch Real Browser**: Open target URL in Google Chrome at 1440x900 viewport.
2. **Preloader Dwell**: Detect animated counter or curtain preloaders (e.g. 000 to 100 count). Wait until opacity drops below 0.05 or display becomes `none` (up to 8 seconds).
3. **Dismiss Popups**: Detect and dismiss cookie banners (`button[id*="cookie" i]`, "Accept", "Allow").
4. **Smooth Document Scroll**: Calculate maximum scroll height and scroll down in 350px steps to trigger all intersection observers, lazy images, and ScrollTriggers. Scroll back to top smoothly.
5. **Interactive Probing**: Simulate pointer hover over interactive elements to measure background deltas, translateY lifts, and transition durations. Test hamburger navigation toggles for curtain overlays.

## 5. Execution Workflow for Developers and Agents

### Option A: Using the CLI Tool
```bash
node mcp/dist/cli.js extract <URL>
```
Example:
```bash
node mcp/dist/cli.js extract https://www.stefanobg.com/
```

### Option B: Using the MCP Tool
Call `irfanlove_extract` with:
- `url`: Target website URL
- `outputDir`: Directory path (defaults to `./designs`)
- `headless`: `false` for visible Chrome window or `true` for headless

## 6. Anti-Slop & Quality Assurance Standards
- **Zero Em-Dashes**: Strictly 0 em-dashes and 0 en-dashes across all written documentation and code files.
- **No Monolithic Single-File Dumps**: Always output the 11 separate domain-specific files so downstream tools can consume focused context.
- **Real Computed Values**: Never invent or approximate token values. Extract directly from computed CSS stylesheets and live DOM nodes.
- **Comprehensive Explanations**: Every markdown file must contain deep architectural analysis explaining why tokens, layouts, and motion curves were selected.
- **No Collapsed Section Bands**: Verify that all macro sections (hero, work, about, services, footer) are extracted individually and never collapsed into a single giant block.
- **Preloader Dwell Verification**: Ensure the browser wait loop confirms complete preloader dismissal before evaluating computed styles.
- **WCAG 2.2 AA Conformance**: Check that high-contrast ink and primary buttons meet minimum contrast ratios.

## 7. Four-Stage Verified Implementation Workflow
Once the 11 separate specification files are generated in `designs/<brand-slug>/`, the downstream build pipeline constructs the production website across 4 verified stages:

### Stage 1: Design Tokens & Visual Foundation
- Execute `/2-setup-foundation`.
- Ingests `01-tokens.json`, `02-theme.css`, `03-colors.md`, and `04-typography.md`.
- Generates `src/styles/globals.css` with CSS custom properties, surface ladder, and `@theme inline`.
- Mounts a single Big Visual Foundation Preview Card on localhost and halts for user visual inspection.

### Stage 2: Atomic UI Primitives & Interactive Showroom
- Execute `/3-build-components`.
- Ingests `08-hover-and-interactions.md` and `09-components-catalog.md`.
- Constructs all reusable UI buttons, badges, inputs, and pills with 6 interactive states.
- Mounts the live Interactive Showroom on localhost and halts for user inspection.

### Stage 3: Structural Bands, Bento Grids & App Shell
- Execute `/4-cards-and-layout` and `/5-navbar-and-footer`.
- Ingests `06-layout-structure.md`, `06-layout-structure.json`, and `10-design-blueprint.md`.
- Constructs HeroSection with explicit z-index layering, Bento grid modules, sticky Navbar, and giant hover-glow watermark Footer.
- Halts for user visual inspection on localhost.

### Stage 4: Motion Choreography, Sub-Routes & Production Build
- Execute `/6-build-pages`, `/7-animate-website`, `/8-seo-and-aeo`, and `/9-responsive-and-qa`.
- Wires Lenis smooth scroll synced with GSAP ScrollTrigger and split-text reveals.
- Enforces 375px/768px/1440px responsive audits, WCAG 2.2 AA contrast, and zero-slop checklist.
- Verifies clean TypeScript compilation with `npx tsc --noEmit` and production build with `npm run build`.

## 8. Downstream Implementation Pipeline Handoff
Once extraction completes, present the user with a summary table of the generated files in `designs/<brand-slug>/`. The downstream workflow skills (`/1-prompt-generator` through `/9-responsive-and-qa`) consume these separate files to build the production website.
- **Tokens & CSS Variables**: Read directly by `/2-setup-foundation` to initialize design tokens.
- **Component Primitives**: Consumed by `/3-build-components` to construct atomic UI elements.
- **Layout Bands & Archetypes**: Ingested by `/4-cards-and-layout` to structure hero and bento grids.
- **Motion Telemetry**: Consumed by `/7-animate-website` to configure Lenis and GSAP ScrollTrigger.
