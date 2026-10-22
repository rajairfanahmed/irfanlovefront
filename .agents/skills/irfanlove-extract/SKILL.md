---
name: irfanlove-extract
description: Extract an entire website's design system into a multi-file structured directory (designs/<brand-slug>/) using the irfanlovefront engine. Outputs 8 separate files including W3C DTCG tokens, Tailwind theme, Google DESIGN.md blueprint, layout bands, motion DNA, components catalog, and WCAG accessibility audit with zero hardcoded rules.
metadata:
  priority: 10
  command: "/irfanlove:extract"
---

# Universal Design Extraction Engine (`/irfanlove:extract`)

## 1. Overview
The `irfanlove-extract` skill drives the **`irfanlovefront`** MCP and extraction engine. It takes any live website URL, renders it via headless Chromium, measures computed CSS across all DOM elements, calculates color relationships using CIELAB Delta-E mathematics, extracts modular typography and surface progression, and **emits a dedicated multi-file directory** instead of a single monolithic file.

## 2. Multi-File Directory Architecture
When executed, this skill creates a dedicated directory inside `designs/<brand-slug>/` with the following 8 specialized files:

| File Name | Format | Contents & Downstream Usage |
| :--- | :--- | :--- |
| **`00-manifest.json`** | JSON | Metadata, target URL, runtime stack, total DOM nodes, and timestamp. |
| **`01-tokens.json`** | JSON (W3C DTCG) | Official W3C Design Tokens format ($type/$value) for Style Dictionary, Figma, and tokens studio. |
| **`02-theme.css`** | CSS | Clean Tailwind v4 `@theme` block and `:root` CSS custom properties. Zero invented numbers. |
| **`03-design-blueprint.md`** | Markdown | Google DESIGN.md-compliant guide with design rationale, semantic color evidence, and layout rules. |
| **`04-layout-structure.json`** & **`.md`** | JSON & MD | Page breakdown: horizontal bands, hero architecture, bento grid modules, section z-indexes. |
| **`05-motion-dna.json`** & **`.md`** | JSON & MD | Measured transition durations, easing curves, GSAP/Lenis telemetry, and hover physics. |
| **`06-components-catalog.md`** | Markdown | Observed button variants (default, hover, active, focus), form inputs, badges, and cards. |
| **`07-accessibility-audit.md`** | Markdown | WCAG 2.2 AA contrast grades calculated on real DOM pairs. |
| **`assets/`** | Directory | Extracted SVG vectors, brand logos, and section screenshot captures. |

## 3. How to Execute

### Option A: Using the irfanlovefront CLI
Run the extraction command directly in the workspace terminal:
```bash
node dist/cli.js extract <URL>
```
Example:
```bash
node dist/cli.js extract https://linear.app
```

### Option B: Using the irfanlovefront MCP Tool
Invoke the `irfanlove_extract` tool with:
- `url`: The target website URL (opens visible Google Chrome, scrolls full page, tests hovers and clicks)
- `outputDir`: Optional output directory (defaults to `./designs`)
- `headless`: Optional boolean (set `true` to run headlessly, default `false` opens visible Chrome)

## 4. Downstream Pipeline Handoff
Once extraction completes, inform the user with a summary table of the generated files in `designs/<brand-slug>/`. The downstream implementation pipeline (`/1-prompt-generator` through `/9-responsive-and-qa`) will automatically read these separate files to build the production website.
