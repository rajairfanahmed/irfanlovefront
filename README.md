<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="https://rajairfanahmed.github.io/irfanlovefront"><strong>GitHub Pages Docs</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="RELEASES/RELEASE-3.2.2.md"><strong>Release History</strong></a> •
  <a href="https://github.com/rajairfanahmed/irfanlovefront/releases"><strong>Latest Release v3.2.3</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### Master Frontend Engineering Suite, Universal MCP Server & Progressive Agent Skills (v3.2.3)

**Eliminate frontend design paralysis, repetitive templates, and AI slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![GitHub Packages](https://img.shields.io/badge/GitHub_Packages-@rajairfanahmed/irfanlovefront-24292e.svg?style=flat-square&logo=github)](https://github.com/rajairfanahmed/irfanlovefront/packages)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Documentation-22c55e.svg?style=flat-square&logo=github)](https://rajairfanahmed.github.io/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.2.3-blue.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/releases)
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

## The 1-Command Quickstart (v3.2.3)

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

### Live Website Extraction & MCP Server (v3.2.3)

Reverse-engineer any live website or launch the stdio MCP server for AI agents:

```bash
# Extract design system into designs/<brand-slug>/ (W3C DTCG tokens, theme.css, blueprint)
npx irfanlovefront extract https://linear.app --mobile

# Search Awwwards award-winning references & motion DNA
npx irfanlovefront awwwards "portfolio"

# Start Model Context Protocol (MCP) server over stdio
npx irfanlovefront mcp
```

#### Universal Agent MCP Configuration (`mcpServers`)

Add this to `.agents/mcp_config.json`, `.cursor/mcp.json`, or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "irfanlovefront": {
      "command": "npx",
      "args": ["-y", "irfanlovefront", "mcp"]
    }
  }
}
```

Or for local development inside this repository:

```json
{
  "mcpServers": {
    "irfanlovefront": {
      "command": "node",
      "args": ["./mcp/dist/index.js"]
    }
  }
}
```

---

## The Why?

Standard AI coding assistants suffer from severe statistical biases, layout repetition, and attention decay:
- Every generated site defaults to identical dark obsidian slate `#0B0F17`.
- Agents build only a single hero section and halt prematurely, leaving secondary routes and footers missing.
- Monolithic multi-thousand-line rule files consume model context, triggering execution freezing and truncated outputs.
- Repetitive double-bezel cards and generic pill buttons get forced onto every interface regardless of brand identity.
- Primary buttons lack tactile states and fail WCAG AA contrast standards.
- Animations are omitted or reduced to plain CSS `scroll-behavior: smooth`.

**Release 3.2.2 permanently solves this with a 9-Command Progressive Implementation Architecture:**
1. **Interactive Prompt Architect (`/1-prompt-generator`)**: Progressive 8-phase discovery that interviews the user phase-by-phase and immediately writes dedicated prompt blueprints (`prompts/phase-1` through `prompts/phase-8`). Zero user specifications are lost.
2. **Deterministic Step-by-Step Implementation (`/2-setup-foundation` to `/9-responsive-and-qa`)**: 8 sequential commands, each mounting a live visual showroom on localhost for inspection before moving forward.
3. **Auxiliary Documentation Specialist (`/github-readme-writer`)**: Daytona open-source framework documentation and launch copy specialist with zero em-dashes.
4. **Anti-Skip Architecture**: Each command executes an isolated, tightly-scoped batch with verification checkpoints to preserve maximum context for high-craft code.
5. **Truth in Quality Verification**: Command 9 enforces real terminal compilation (`npx tsc --noEmit` and `npm run build`), multi-viewport responsive checks (`375px`, `768px`, `1440px`), and a 12-point anti-bug checklist.
6. **Zero-Dash Anti-Slop Policy**: Zero em-dash characters (U+2014) and zero en-dash characters (U+2013) anywhere in skills, copy, or code.

---

## Backstory

As frontend engineers working with generative AI, we repeatedly hit the same wall: AI models write great small snippets but fail at whole-site execution. When prompted to "build a complete website", models take shortcuts. They generate a single hero section, invent placeholder text, paste generic dark theme tokens, and stop.

To fix this, we decomposed website development into an 8-phase interactive discovery interview followed by an 8-step verified implementation pipeline. Each step has its own dedicated skill file, its own isolated prompt blueprint, and its own live visual showroom on localhost. The result is deterministic, bespoke frontend craftsmanship with zero guesswork.

---

## The 9-Command Progressive Architecture

```text
  +-------------------------------------------------------------------------------+
  |                      IRFANLOVEFRONT v3.2.2 ARCHITECTURE                       |
  +-------------------------------------------------------------------------------+
  |                                                                               |
  |  [Command 1: /1-prompt-generator]                                             |
  |  - Progressive 8-Phase Master Prompt Architect                                |
  |  - Step-by-step interviews with [Custom User Input] on every question         |
  |  - Writes prompts/phase-1-foundation-data.md to phase-8-responsive-qa.md      |
  |  - 89 brand design references in design-refs/, verbatim site data manifest   |
  |                                                                               |
  |  [Progressive Implementation Pipeline: Commands 2 through 9]                  |
  |  - /2-setup-foundation  -> Tech stack, CSS tokens, siteData, Preview Card     |
  |  - /3-build-components  -> UI primitives, form controls, Components Showroom  |
  |  - /4-cards-and-layout  -> Layout grids, layered hero, Cards Showroom         |
  |  - /5-navbar-and-footer -> Desktop navbar, menu curtain, contact, watermark   |
  |  - /6-build-pages       -> Production Home page and sub-routes (verbatim copy)|
  |  - /7-animate-website   -> Lenis smooth scroll, GSAP ScrollTrigger, physics   |
  |  - /8-seo-and-aeo       -> Technical SEO, Schema.org Graph, llms.txt (AEO)    |
  |  - /9-responsive-and-qa -> Breakpoints (375/768/1440), WCAG AA, build compile |
  |                                                                               |
  |  [Auxiliary Specialist: /github-readme-writer]                                |
  |  - Daytona 4,000-star launch framework, project hygiene, zero em-dashes       |
  |                                                                               |
  +-------------------------------------------------------------------------------+
```

---

## Progressive Pipeline Walkthrough

| Command | Step | Focus Area | Live Visual Verification |
| :--- | :---: | :--- | :--- |
| **`/1-prompt-generator`** | Plan | 8-Phase Product Discovery | Generates `prompts/phase-1` through `phase-8` |
| **`/2-setup-foundation`** | Step 1 | Foundation & Tokens | Visual Foundation Preview Card on `localhost:3000` |
| **`/3-build-components`** | Step 2 | Atomic UI Primitives | Interactive UI Components Showroom |
| **`/4-cards-and-layout`** | Step 3 | Hero & Layout Grids | Hero Section + Cards & Grid Showroom |
| **`/5-navbar-and-footer`** | Step 4 | Navigation & Footer | Working Menu Curtain State + Giant Footer Watermark |
| **`/6-build-pages`** | Step 5 | Full Route Assembly | Production Home page + All Sub-routes (Verbatim Copy) |
| **`/7-animate-website`** | Step 6 | Animation & Motion | Lenis Smooth Scroll + GSAP ScrollTrigger Reveals |
| **`/8-seo-and-aeo`** | Step 7 | Search & AI Discovery | Schema.org Graph + OpenGraph + `public/llms.txt` |
| **`/9-responsive-and-qa`** | Step 8 | Responsive Audit & QA | 375px/768px/1440px checks + `npm run build` pass |
| **`/github-readme-writer`**| Docs | Documentation | Authoritative Daytona README with zero em-dashes |

---

## Detailed Skill Specifications

All slash commands match their directory names in `.agents/skills/`.

### 1. `/1-prompt-generator`
- **Role:** Interactive 8-Phase Master Prompt Architect.
- **Workflow:**
  - Guides the user through 8 sequential discovery phases: Foundation & Data, Components, Hero & Layout, Navbar & Footer, Pages, Animations, SEO & AEO, and Responsive QA.
  - Every question includes multiple-choice selections plus `[Custom User Input]` and `[AI Recommended]`.
  - Immediately writes `prompts/phase-1-foundation-data.md` through `prompts/phase-8-responsive-qa.md` after each phase is answered. Zero details are lost.
  - Access to 89 brand design reference specifications in `design-refs/` (Apple, Linear, Stripe, Vercel, Framer, Robinsweb, and more).

### 2. `/2-setup-foundation`
- **Role:** Foundation, Tokens & Visual Preview Card.
- **Workflow:** Reads `prompts/phase-1-foundation-data.md`, verifies Next.js/Vite stack, configures fonts, writes `:root` CSS custom properties, populates verbatim data in `siteData.ts`, and renders a Single Big Visual Foundation Preview Card on `localhost:3000`.

### 3. `/3-build-components`
- **Role:** Atomic UI Primitives & Interactive Showroom.
- **Workflow:** Reads `prompts/phase-2-components.md`, builds reusable atomic components in `src/components/ui/` (buttons, badges, inputs, wizard progress bars, infinite marquee), and mounts a live Interactive UI Components Showroom on `localhost:3000`.

### 4. `/4-cards-and-layout`
- **Role:** Hero Architecture, Layout Grids & Custom Cards.
- **Workflow:** Reads `prompts/phase-3-cards-layout.md`, builds `SectionContainer`, `SectionHeader`, `BentoGrid`, a layered `HeroSection` (`z-0` radial glow, `z-10` display text, `z-20` cutout portrait, `z-30` CTA), and custom card archetypes in `src/components/cards/`. Mounts the Hero + Cards Showroom on `localhost:3000`.

### 5. `/5-navbar-and-footer`
- **Role:** Navigation System & Watermark Footer.
- **Workflow:** Reads `prompts/phase-4-navbar-footer.md`, builds desktop navbar variants, full-screen morphing hamburger curtain overlay with React state machine, multi-step contact wizard, and giant interactive footer watermark with rest contrast and hover glow.

### 6. `/6-build-pages`
- **Role:** Full Page Assembly & Routing.
- **Workflow:** Reads `prompts/phase-5-pages.md`, cleans up temporary showrooms, connects navbar and footer into root layout, and assembles the complete production Home page and all secondary sub-routes with 100% human copy from `siteData.ts`.

### 7. `/7-animate-website`
- **Role:** Motion Engineering & Physics.
- **Workflow:** Reads `prompts/phase-6-animations.md`, configures Lenis smooth scrolling synced with GSAP ScrollTrigger and Framer Motion, implements split-text title entrance, scroll-triggered section reveals, metric counters, and hover physics.

### 8. `/8-seo-and-aeo`
- **Role:** Technical SEO & AI Engine Optimization.
- **Workflow:** Reads `prompts/phase-7-seo-aeo.md`, implements per-route Metadata API, linked Schema.org JSON-LD Knowledge Graph, OpenGraph cards, `sitemap.ts`, `robots.ts`, `manifest.ts`, semantic landmarks, and `public/llms.txt` + `llms-full.txt` for AI discovery.

### 9. `/9-responsive-and-qa`
- **Role:** Multi-Viewport Responsive Audit & Build Verification.
- **Workflow:** Reads `prompts/phase-8-responsive-qa.md`, audits 375px mobile, 768px tablet, and 1440px desktop viewports, enforces >=44px touch targets, validates WCAG AA contrast, runs the 12-point anti-bug checklist, and verifies `npx tsc --noEmit` and `npm run build`.

### 10. `/github-readme-writer`
- **Role:** Technical Documentation Specialist.
- **Workflow:** Crafts authoritative README files, case studies, and launch posts modeled after the Daytona open-source framework with zero em-dashes.

### 11. `/irfanlove-extract`
- **Role:** Website Reverse-Engineering & W3C DTCG Token Extractor.
- **Workflow:** Renders live websites via visible Google Chrome, executes pre-scroll lazy loading triggers, conducts live hover testing on buttons/cards, captures overlay state machines, and emits 10 structured architecture files into `designs/<brand-slug>/`.

### 12. `/irfanlove-awwwards`
- **Role:** Awwwards Motion Intelligence & Award-Winning Inspiration.
- **Workflow:** Searches Awwwards winning designs by award type, category, or color. Extracts motion DNA, transition curves, and component geometry.

### 13. `/irfanlovefront`
- **Role:** Master Frontend Engineering & Extraction Suite.
- **Workflow:** Orchestrates end-to-end design intelligence, mathematical color hierarchy, and the progressive 8-phase website implementation pipeline.

---

## Step-by-Step Project Execution

Run the complete workflow in two progressive phases:

```text
Phase A (Discovery & Prompt Blueprints):
/1-prompt-generator

Phase B (Step-by-Step Construction):
/2-setup-foundation    -> Inspect Foundation Preview Card
/3-build-components    -> Inspect UI Components Showroom
/4-cards-and-layout    -> Inspect Hero & Cards Showroom
/5-navbar-and-footer   -> Inspect Navbar & Footer Watermark
/6-build-pages         -> Inspect Complete Home & Sub-routes
/7-animate-website     -> Inspect Smooth Scroll & Motion
/8-seo-and-aeo         -> Inspect Schema Graph & llms.txt
/9-responsive-and-qa   -> Final Responsive Audit & npm run build
```

---

## GitHub Pages Documentation

The repository documentation is automatically hosted on GitHub Pages:
- **Documentation URL:** [https://rajairfanahmed.github.io/irfanlovefront](https://rajairfanahmed.github.io/irfanlovefront)
- Configured via Jekyll with standard mobile-friendly presentation.

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
