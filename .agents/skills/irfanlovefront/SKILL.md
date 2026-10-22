---
name: irfanlovefront
description: Master Frontend Engineering Suite and Universal Design System Extractor. Integrates mathematical DOM extraction, Awwwards inspiration, multi-file design directory generation (designs/<slug>/), and an 8-phase verified implementation pipeline with zero AI slop and 60fps motion choreography.
metadata:
  priority: 10
  command: "/irfanlovefront"
---

# `irfanlovefront` - Master Frontend Engineering & Extraction Suite

## 1. Overview
`irfanlovefront` is a production-grade MCP server and agent skill suite that reverse-engineers, extracts, designs, and builds world-class websites across any platform and category.

## 2. Core Capabilities & Command Registry

| Command | Skill | What It Does |
| :--- | :--- | :--- |
| **`/irfanlove:extract <URL>`** | `irfanlove-extract` | Extracts any live website's design system into a multi-file structured directory (`designs/<brand-slug>/`). Emits 8 separate files: tokens, theme CSS, DESIGN.md blueprint, layout bands, motion DNA, components catalog, and WCAG AA contrast audit. |
| **`/irfanlove:awwwards [query]`** | `irfanlove-awwwards` | Searches Awwwards winning websites (SOTD, Dev Award, Honorable Mention), inspects motion DNA, captures 3D poses, and builds design briefs. |
| **`/1-prompt-generator`** | `1-prompt-generator` | Interactive 8-Phase Master Prompt Architect. Auto-ingests `designs/<slug>/` tokens and writes locked phase prompt files. |
| **`/2-setup-foundation`** | `2-setup-foundation` | Phase 1 Implementation. Ingests tokens and theme CSS, configures fonts, writes CSS custom properties, and renders Big Visual Specimen Card. |
| **`/3-build-components`** | `3-build-components` | Phase 2 Implementation. Ingests components catalog, builds 6-state buttons, badges, form controls, and interactive showroom. |
| **`/4-cards-and-layout`** | `4-cards-and-layout` | Phase 3 Implementation. Ingests layout structure bands, builds Hero section, Bento grid modules, and card archetypes. |
| **`/5-navbar-and-footer`** | `5-navbar-and-footer` | Phase 4 Implementation. Ingests app-shell principles, builds sticky header, mobile overlay state machine, and giant footer watermark. |
| **`/6-build-pages`** | `6-build-pages` | Phase 5 Implementation. Assembles full production Home page and all multi-page sub-routes with authentic human copy and zero AI cliches. |
| **`/7-animate-website`** | `7-animate-website` | Phase 6 Implementation. Ingests motion DNA, wires Lenis smooth scroll, GSAP ScrollTrigger, and Framer Motion reveals. |
| **`/8-seo-and-aeo`** | `8-seo-and-aeo` | Phase 7 Implementation. Technical SEO, Metadata API, Schema.org JSON-LD Knowledge Graph, dynamic OpenGraph, and `llms.txt`. |
| **`/9-responsive-and-qa`** | `9-responsive-and-qa` | Phase 8 Final QA. Audits 375px/768px/1440px breakpoints, enforces WCAG 2.2 AA contrast, executes 12-point anti-slop audit, and verifies clean build. |

## 3. Dedicated Multi-File Output Architecture (`designs/<brand-slug>/`)
Every extraction automatically creates a dedicated folder containing:
```
designs/<brand-slug>/
├── 00-manifest.json          # Metadata, URL, runtime stack, total DOM nodes
├── 01-tokens.json            # W3C Design Tokens (DTCG format) standard
├── 02-theme.css              # Clean Tailwind v4 @theme & CSS custom properties
├── 03-design-blueprint.md    # Google DESIGN.md compliant master guide
├── 04-layout-structure.json  # Horizontal section bands, dimensions & selectors
├── 04-layout-structure.md    # Layout archetypes breakdown
├── 05-motion-dna.json        # Measured transition durations, easing curves & telemetry
├── 05-motion-spec.md         # GSAP & Framer Motion choreography specification
├── 06-components-catalog.md  # Observed buttons, inputs, badges with real computed states
├── 07-accessibility-audit.md # WCAG 2.2 AA contrast grades calculated on real DOM pairs
└── assets/                   # SVG vectors, logos & screenshot crops
```

## 4. Execution Workflow
1. **Extract Reference**: Run `/irfanlove:extract <URL>` to produce `designs/<brand-slug>/`.
2. **Architect Specification**: Run `/1-prompt-generator` to ingest tokens and write locked phase prompts.
3. **Build in 4 Verified Stages**:
   - Stage 1: `/2-setup-foundation` -> Inspect on localhost
   - Stage 2: `/3-build-components` -> Inspect Showroom on localhost
   - Stage 3: `/4-cards-and-layout` + `/5-navbar-and-footer` -> Inspect Layout on localhost
   - Stage 4: `/6-build-pages` + `/7-animate-website` + `/8-seo-and-aeo` + `/9-responsive-and-qa` -> Production Complete!
