# Release 1.0.2: Universal npx Installer & Conversion Foundations

**Release Version:** `1.0.2`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## What Is New in Release 1.0.2

Release 1.0.2 evolves `irfanlovefront` into a cross-platform, one-command AI agent skill ecosystem with expanded pre-architecture taste engineering and conversion design rules.

---

### 1. Universal `npx` CLI Installer (`npx irfanlovefront`)

You can now install the entire 8-agent skill suite into any AI coding assistant with a single terminal command:

```bash
# Interactive setup
npx irfanlovefront

# Or install for specific agents
npx irfanlovefront --claude        # Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --cursor        # Cursor Rules 2.0 (.cursor/rules/*.mdc)
npx irfanlovefront --antigravity   # Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --windsurf      # Windsurf / Cascade (.windsurf/rules/)
npx irfanlovefront --copilot       # GitHub Copilot (.github/copilot-instructions.md)
npx irfanlovefront --all           # All agents simultaneously
```

- **Interactive Terminal UI:** Built with `@clack/prompts` matching Vite and Astro standards.
- **Cross-Agent Translation:** Automatically converts skills into native agent formats (`.mdc` for Cursor, markdown folders for Claude and Antigravity, and instruction files for Copilot and Windsurf).
- **Workspace or Global Scope:** Supports project-level installation or user-wide global deployment (`-g, --global`).

---

### 2. Stage 0 Taste & Design Engineer (`/taste-design-engineer`)

Added a dedicated pre-architecture consultation stage that executes before code scaffolding:
- Ingests platform targets, canonical route lists, rough user sketches, and reference URLs.
- Applies Emil Kowalski design engineering principles and Apple WWDC fluid interface physics.
- Produces a structured design engineering brief and animation decision matrix before scaffolding `frontend/`.

---

### 3. The 7 Conversion & Visual Hierarchy Foundations

Codified 7 essential conversion and macro-layout rules across the entire skill lifecycle:

1. **Hero Section Mini-Site:** Four elements must be visible above the fold without scrolling: a clear headline, supporting context, social proof, and a specific call to action.
2. **Visual Hierarchy (Squint Test):** Boldest and largest elements guide the eye first, stepping down cleanly to secondary information.
3. **White Space Restraint:** Generous breathing room (`clamp(4rem, 10vw, 9rem)` section gaps) to ensure an expensive, premium aesthetic.
4. **Contrast and Color (CTA Pop):** Dedicated high-contrast tokens (`--cta-bg`, `--cta-text`, `--cta-shadow`) that pop out against restrained substrate palettes.
5. **Point-of-Doubt Social Proof:** Testimonials, client logos, star ratings, and review snippets placed directly adjacent to decision triggers.
6. **Typography Discipline:** Strict ceiling of 1 or 2 font families across the entire project with body text prioritized for readability.
7. **Mobile-First Thumb Ergonomics:** Minimum 44x44px touch targets for all interactive elements, thumb-friendly placement, and zero horizontal scrolling at 320px viewport width.

---

### 4. Coordinated 5-Stage Lifecycle

The master orchestrator (`/irfanlovefront`) coordinates the end-to-end pipeline:
- **Stage 0:** `/taste-design-engineer` (Human taste, Apple fluid physics, conversion rules)
- **Stage 1:** `/frontend-architect` (Design tokens, 1-2 fonts ceiling, CTA contrast tokens)
- **Stage 2:** `/creative-layout-engineer` (Hero mini-site, squint test, white space restraint)
- **Stage 3:** `/interactive-component-engineer` (Point-of-doubt proof, 44px tap targets, motion)
- **Stage 4:** `/experience-qa-auditor` (320px to 1440px responsiveness, WCAG AA, 404, SEO)

---

## Upgrade Guide

To update your current project workspace to v2:

```bash
npx irfanlovefront --all
```
