<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="https://rajairfanahmed.github.io/irfanlovefront"><strong>GitHub Pages Docs</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="https://github.com/rajairfanahmed/irfanlovefront/releases"><strong>Latest Release v3.3.2</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### Modular Design Engineering Skills Suite for AI Coding Agents (v3.3.2)

**11 specialist skills. 1 orchestrator. 55+ deep reference documents. Zero AI slop.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![GitHub Packages](https://img.shields.io/badge/GitHub_Packages-@rajairfanahmed/irfanlovefront-24292e.svg?style=flat-square&logo=github)](https://github.com/rajairfanahmed/irfanlovefront/packages)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Documentation-22c55e.svg?style=flat-square&logo=github)](https://rajairfanahmed.github.io/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.3.2-blue.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/releases)
[![Stars](https://img.shields.io/github/stars/rajairfanahmed/irfanlovefront?style=flat-square&color=yellow)](https://github.com/rajairfanahmed/irfanlovefront/stargazers)
[![Forks](https://img.shields.io/github/forks/rajairfanahmed/irfanlovefront?style=flat-square&color=blue)](https://github.com/rajairfanahmed/irfanlovefront/network/members)
[![Issues](https://img.shields.io/github/issues/rajairfanahmed/irfanlovefront?style=flat-square&color=red)](https://github.com/rajairfanahmed/irfanlovefront/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/pulls)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.x-0ae448?style=flat-square&logo=greensock)](https://greensock.com/)

[Report Bug](https://github.com/rajairfanahmed/irfanlovefront/issues) • [Request Feature](https://github.com/rajairfanahmed/irfanlovefront/issues) • [GitHub Pages Docs](https://rajairfanahmed.github.io/irfanlovefront) • [Live Demo](https://irfanlovefrontend.vercel.app/) • [Star Repository](https://github.com/rajairfanahmed/irfanlovefront)

</div>

---

## The 1-Command Quickstart

Install the entire skill suite instantly across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, or **GitHub Copilot** with a single command:

```bash
# Public npm (selects your agent and workspace or global scope)
npx irfanlovefront@latest
```

Or run via GitHub Packages:

```bash
# GitHub Packages registry
npx @rajairfanahmed/irfanlovefront@latest
```

Or install with direct target flags:

```bash
# Install specifically for Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --claude

# Install specifically for Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Install specifically for Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --antigravity

# Install specifically for Windsurf (.windsurf/rules/ + .windsurfrules)
npx irfanlovefront --windsurf

# Install specifically for GitHub Copilot (.github/copilot-instructions.md)
npx irfanlovefront --copilot

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```

---

## The Why?

Standard AI coding assistants produce structurally identical output. Every generated site ships the same dark slate `#0B0F17`, the same floating pill buttons with purple gradients, the same generic double-bezel cards. Ask two different agents to build a SaaS landing page and a portfolio: you get the same page twice.

The root cause: monolith prompts that try to cover everything in one instruction set. They can't hold enough domain depth in any single area to produce work that actually differentiates one project from another.

**v3.3.2 replaces the monolith approach with 11 modular specialist skills**, each containing its own `SKILL.md` and deep `references/` library. One orchestrator (`design-engineer`) coordinates them. Each specialist owns one domain completely: its principles, its patterns, its trade-offs, and its verification criteria. The result is frontend output where the visual design, layout, components, motion, accessibility, SEO, and performance each reflect project-specific decisions rather than generic defaults.

---

## Architecture Overview

```text
  +---------------------------------------------------------------------------------+
  |                    IRFANLOVEFRONT v3.3.2 ARCHITECTURE                           |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  [Orchestrator]                                                                 |
  |                                                                                 |
  |  design-engineer                                                                |
  |    Analyzes inputs (requirements, references, screenshots, existing code)       |
  |    Resolves cross-domain conflicts before any specialist starts                 |
  |    Produces DESIGN_BRIEF.md + 10 specialist spec files                          |
  |    references/  (6 files)  |  templates/  (1 file)                              |
  |                                                                                 |
  |  [10 Specialist Skills]                                                         |
  |                                                                                 |
  |   visual-design             Color systems, typography, tokens, visual hierarchy  |
  |   structural-layout         Page architecture, grids, section composition       |
  |   ui-components             Component design, states, props, keyboard behavior  |
  |   ux-interaction-design     User flows, IA, navigation, error recovery          |
  |   responsive-design         Breakpoints, fluid sizing, touch targets, devices   |
  |   animations-motion-design  Motion principles, scroll triggers, reduced-motion  |
  |   frontend-architecture     Component boundaries, tokens in code, state, routing|
  |   seo                       Technical SEO, metadata, structured data, AI search |
  |   accessibility             WCAG conformance, assistive tech, keyboard nav      |
  |   performance-optimization  Core Web Vitals, budgets, assets, rendering         |
  |                                                                                 |
  |  Each skill:  SKILL.md + references/  (3-6 deep reference documents)            |
  |  Total:  11 skills, 55+ reference files, 1 design brief template                |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  [Installer]  npx irfanlovefront@latest                                         |
  |  Targets: Claude Code | Google Antigravity | Cursor | Windsurf | Copilot       |
  |  Scope:   Workspace (.agents/skills/) or Global (~/.gemini/config/skills/)      |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
```

---

## The 11 Skills

### Orchestrator: `design-engineer`

Reads all project inputs (requirements docs, reference images, Figma exports, screenshots, existing code), determines the web category, resolves conflicts across domains, and produces one `DESIGN_BRIEF.md` plus ten specialist spec files. Runs before any specialist so that trade-offs between visual design, layout, motion, and performance are settled in one place.

**Reference files:** `web-categories.md`, `reference-analysis.md`, `requirements-and-conflict-resolution.md`, `design-synthesis.md`, `output-contract.md`, `design-quality-gates.md`
**Template:** `design-brief-template.md`

---

### 10 Specialist Skills

Each skill contains a `SKILL.md` with full operating instructions and a `references/` directory with 3-6 deep reference documents covering principles, patterns, and verification criteria.

| Skill | What It Owns | Reference Docs |
| :--- | :--- | :--- |
| **visual-design** | Color systems, typography scales, visual hierarchy, surface treatment, design tokens | `visual-design-principles.md`, `color-systems-and-theming.md`, `typography-and-type-scales.md`, `hierarchy-and-visual-composition.md` |
| **structural-layout** | Page architecture, section arrangement, grids, containers, spatial rhythm, alignment | `layout-selection-and-tradeoffs.md`, `layout-patterns-catalog.md`, `composition-and-hierarchy.md`, `spatial-rhythm-and-alignment.md` |
| **ui-components** | Component design and specification, states, props, keyboard behavior, focus and scroll handling | `component-design-principles.md`, `component-states-and-behaviors.md`, `navigation-and-interactive-controls.md`, `focus-scrolling-and-feedback.md` |
| **ux-interaction-design** | User flows, information architecture, navigation models, feedback loops, error prevention and recovery | `user-flows-and-information-architecture.md`, `interaction-patterns.md`, `usability-and-feedback.md`, `forms-validation-and-error-recovery.md` |
| **responsive-design** | Breakpoints, fluid sizing, content priority shifts, touch targets, cross-device verification | `mobile-first-design.md`, `fluid-layouts-and-breakpoints.md`, `responsive-typography-and-media.md`, `cross-device-testing.md` |
| **animations-motion-design** | Motion decisions, scroll-triggered animation, interruptibility, reduced-motion safety | `motion-design-principles.md`, `animation-patterns-catalog.md`, `scroll-triggered-and-interactive-motion.md`, `motion-performance-and-accessibility.md` |
| **frontend-architecture** | Component boundaries, design tokens in code, project structure, state management, routing | `component-architecture.md`, `design-system-implementation.md`, `project-structure-and-code-quality.md`, `state-routing-and-data-flow.md` |
| **seo** | Technical SEO, on-page metadata, structured data, indexing, AI search discoverability | `technical-seo.md`, `on-page-seo-and-metadata.md`, `structured-data-and-indexing.md`, `ai-search-and-agent-discovery.md` |
| **accessibility** | WCAG conformance, semantic HTML, keyboard navigation, focus management, assistive tech testing | `wcag-and-accessibility-principles.md`, `semantic-html-and-keyboard-navigation.md`, `focus-forms-and-dialogs.md`, `assistive-technology-testing.md` |
| **performance-optimization** | Core Web Vitals, performance budgets, image/font/asset optimization, rendering strategy | `core-web-vitals.md`, `images-fonts-and-assets.md`, `rendering-bundles-and-network.md`, `performance-testing-and-budgets.md` |

---

## How It Works

```text
[Step 1: Orchestration]
design-engineer  ->  Reads project inputs, determines category,
                     resolves cross-domain conflicts,
                     produces DESIGN_BRIEF.md + 10 spec files

[Step 2: Specialist Execution]
Each specialist skill reads its own spec file and references/,
then implements or verifies its domain independently.

visual-design             ->  Color palette, type scale, tokens
structural-layout         ->  Page composition, grid, spacing
ui-components             ->  Component library, states, keyboard
ux-interaction-design     ->  Flows, navigation, error handling
responsive-design         ->  Breakpoints, fluid sizing, touch
animations-motion-design  ->  Transitions, scroll reveals, reduced-motion
frontend-architecture     ->  Folder structure, tokens in code, state
seo                       ->  Meta tags, Schema.org, AI discoverability
accessibility             ->  WCAG audit, keyboard nav, screen readers
performance-optimization  ->  Budgets, CWV targets, asset optimization
```

---

## File Structure

```text
.agents/skills/
├── design-engineer/
│   ├── SKILL.md
│   ├── references/
│   │   ├── design-quality-gates.md
│   │   ├── design-synthesis.md
│   │   ├── output-contract.md
│   │   ├── reference-analysis.md
│   │   ├── requirements-and-conflict-resolution.md
│   │   └── web-categories.md
│   └── templates/
│       └── design-brief-template.md
├── visual-design/
│   ├── SKILL.md
│   └── references/  (4 files)
├── structural-layout/
│   ├── SKILL.md
│   └── references/  (4 files)
├── ui-components/
│   ├── SKILL.md
│   └── references/  (4 files)
├── ux-interaction-design/
│   ├── SKILL.md
│   └── references/  (4 files)
├── responsive-design/
│   ├── SKILL.md
│   └── references/  (4 files)
├── animations-motion-design/
│   ├── SKILL.md
│   └── references/  (4 files)
├── frontend-architecture/
│   ├── SKILL.md
│   └── references/  (4 files)
├── seo/
│   ├── SKILL.md
│   └── references/  (4 files)
├── accessibility/
│   ├── SKILL.md
│   └── references/  (4 files)
└── performance-optimization/
    ├── SKILL.md
    └── references/  (4 files)
```

---

## What Changed in v3.3.2

v3.3.1 shipped three monolith flagship agents (`/frontend-craftsman`, `/backend-architect`, `/ai-engineer`) that each tried to cover an entire engineering tier in one instruction set. v3.3.2 replaces that approach:

- **Monolith agents removed.** The three flagship agents and the Matt Pocock supporting skills (`/tdd`, `/code-review`, `/domain-modeling`, `/codebase-design`, `/diagnosing-bugs`) have been removed from the shipped skill set.
- **11 modular specialist skills added.** Each skill owns exactly one domain with its own `SKILL.md` operating instructions and 3-6 deep reference documents in `references/`. The `design-engineer` orchestrator coordinates all ten specialists.
- **55+ reference documents.** Every skill carries its own reference library covering principles, pattern catalogs, verification criteria, and trade-off guidance. These are read by the agent on demand, not loaded all at once.
- **Cross-agent compatibility preserved.** The installer still targets Claude Code, Google Antigravity, Cursor, Windsurf, and GitHub Copilot with the same flags.

---

## GitHub Pages Documentation

The repository documentation is automatically hosted on GitHub Pages:
- **Documentation URL:** [https://rajairfanahmed.github.io/irfanlovefront](https://rajairfanahmed.github.io/irfanlovefront)

---

## Project Hygiene

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [License](LICENSE)

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license. See [LICENSE](LICENSE) for complete details.

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=rajairfanahmed/irfanlovefront&type=Date)](https://star-history.com/#rajairfanahmed/irfanlovefront&Date)

</div>
