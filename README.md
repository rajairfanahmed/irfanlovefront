<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="RELEASES/RELEASE-1.0.1.md"><strong>Release 1.0.1</strong></a> •
  <a href="RELEASES/RELEASE-1.0.2.md"><strong>Release 1.0.2</strong></a> •
  <a href="RELEASES/RELEASE-1.0.3.md"><strong>Release 1.0.3</strong></a> •
  <a href="RELEASES/RELEASE-1.0.4.md"><strong>Release 1.0.4</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### The Autonomous 8-Agent UI/UX & Frontend Engineering Suite (v1.0.4)

**Eliminate frontend design paralysis, generic templates, and AI-slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.4-blue.svg?style=flat-square)](RELEASES/RELEASE-1.0.4.md)
[![Stars](https://img.shields.io/github/stars/rajairfanahmed/irfanlovefront?style=flat-square&color=yellow)](https://github.com/rajairfanahmed/irfanlovefront/stargazers)
[![Forks](https://img.shields.io/github/forks/rajairfanahmed/irfanlovefront?style=flat-square&color=blue)](https://github.com/rajairfanahmed/irfanlovefront/network/members)
[![Issues](https://img.shields.io/github/issues/rajairfanahmed/irfanlovefront?style=flat-square&color=red)](https://github.com/rajairfanahmed/irfanlovefront/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/pulls)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3.x-0ae448?style=flat-square&logo=greensock)](https://greensock.com/)

[Report Bug](https://github.com/rajairfanahmed/irfanlovefront/issues) • [Request Feature](https://github.com/rajairfanahmed/irfanlovefront/issues) • [Live Demo](https://irfanlovefrontend.vercel.app/) • [Star Repository](https://github.com/rajairfanahmed/irfanlovefront)

</div>

---

## ⚡ The 1-Command Quickstart (v1.0.4)

Install the entire 8-agent skill suite instantly across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, or **GitHub Copilot** with a single command:

```bash
# Interactive setup (selects your agent and workspace/global scope)
npx irfanlovefront
```

Or install with direct target flags:

```bash
# Install specifically for Claude Code (.claude/skills + CLAUDE.md)
npx irfanlovefront --claude

# Install specifically for Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Install specifically for Google Antigravity / Gemini
npx irfanlovefront --antigravity

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```

### Manual Git Installation

```bash
# Clone into project workspace
git clone https://github.com/rajairfanahmed/irfanlovefront.git .agents/skills/irfanlovefront

# Or install globally for Antigravity
git clone https://github.com/rajairfanahmed/irfanlovefront.git ~/.gemini/config/skills/irfanlovefront
```

To build a full web application from scratch, invoke the orchestrator in chat:

```text
/irfanlovefront Build a modern high-performance web platform for a developer tooling startup.
```

---

## 💡 The Why?

Whenever developers and engineers start a new project, backend logic and APIs come naturally. But almost everyone hits the exact same wall: **frontend engineering and UI/UX design.**

Most AI assistants produce generic, repetitive slop:
- Every site defaults to the exact same dark obsidian slate `#0B0F17`.
- Headlines wrap into ugly four-line text blocks on desktop.
- Bento grids have awkward blank holes and mismatched heights.
- Buttons lack tactile hover feedback.
- Sub-pages jitter and shift vertical position when switching routes.
- Performance fails Core Web Vitals due to render-blocking fonts.
- Contrast tests fail WCAG AA accessibility standards.

**IrfanLoveFront permanently solves this.** It is an autonomous 8-agent engineering suite powered by an authoritative library of 84+ brand token systems in `design-refs/` (Apple, Stripe, Linear, Notion, Vercel, Supabase, Ferrari), zero render-blocking font architecture, container queries, Apple fluid physics, 100/100 Lighthouse verification, and 3/3 Agentic Browsing.

---

## 📖 Backstory

> *"Whenever I started a project, I was always stuck on frontend engineering and good UI/UX. That was the single biggest bottleneck for me. I spent hours wrestling with colors, typography, micro-interactions, and layout balance instead of shipping features. So I built this autonomous frontend skill agent suite to solve our frontend and UI/UX problems forever."*
>
> Signed: **Raja Irfan Ahmed**

---

## 🏛️ Visual Architecture: The 8 Autonomous Agents

```
                                  +---------------------------------------+
                                  |         /irfanlovefront               |
                                  |   Master Lifecycle Orchestrator       |
                                  |   (84+ Brand Token System Ingestion)  |
                                  +-------------------+-------------------+
                                                      |
                                                      v
                                  +---------------------------------------+
                                  |       STAGE 0: taste-design-engineer  |
                                  |   Pre-Architecture Consultation       |
                                  |   (design-refs/ Audit, 3 Directions)  |
                                  +-------------------+-------------------+
                                                      |
         +--------------------------------------------+-------------------------------------------+
         |                                            |                                           |
         v                                            v                                           v
 +---------------+                            +---------------+                           +---------------+
 |    STAGE 1    |                            |    STAGE 2    |                           |    STAGE 3    |
 |   frontend-   |                            |   creative-   |                           |  interactive- |
 |   architect   |                            |    layout-    |                           |  component-   |
 |               |                            |   engineer    |                           |   engineer    |
 +---------------+                            +---------------+                           +---------------+
 |* Tokens from  |                            |* 2-Line H1    |                           |* Container    |
 |  design-refs  |                            |  Iron Rule    |                              Geometry     |
 |* Zero-Blocking|                            |* 1-Page-at-a- |                           |* Emil Kowalski|
 |  next/font    |                               Time Flow    |                              scale(0.97)  |
 |* Preconnects  |                            |* 100svh Hero  |                           |* Button-in-   |
 |* SVG Clean Arc|                            |* Container Qs |                              Button CTAs  |
 |* Mobile-Native|                            |* 320px Zero-  |                           |* 5 Advanced   |
 |  CSS Reset    |                               Overflow     |                              GSAP Timelines
 |* Favicon      |                            |* Sub-Page     |                           |* Accessible   |
 |  app/icon.tsx |                               Spatial Y    |                              Form Controls|
 +---------------+                            +---------------+                           +---------------+
         |                                            |                                           |
         +--------------------------------------------+-------------------------------------------+
                                                      |
                                                      v
                                              +---------------+
                                              |    STAGE 4    |
                                              |  experience-  |
                                              |   qa-auditor  |
                                              +---------------+
                                              |* 100/100 Perf |
                                              |* 100/100 A11y |
                                              |* 100/100 BP   |
                                              |* 100/100 SEO  |
                                              |* 3/3 Agentic  |
                                              |  Browsing     |
                                              |* llms.txt Link|
                                              |  Tree Standard|
                                              |* WebMCP Forms |
                                              |* 404 & Errors |
                                              +---------------+
                                                      |
                                      +---------------+---------------+
                                      |                               |
                                      v                               v
                      +-------------------------------+---------------+-------------------------------+
                      |        AUXILIARY SKILL        |        AUXILIARY SKILL        |
                      |      build-error-resolver     |      github-readme-writer     |
                      +-------------------------------+-------------------------------+
                      |* Fast-path TypeScript fixes   |* Daytona open-source standard |
                      |* Next.js 15 compilation fix   |* Zero AI clichés or slop      |
                      |* Minimal surgical diffs (<5%) |* Architecture and proof-first |
                      |* Zero architectural churn     |* Zero em-dash enforcement     |
                      +-------------------------------+-------------------------------+
```

---

## 🛠️ The 8 Agent Skills: Detailed Guide

All slash commands match their directory names exactly in `.agents/skills/`. Every agent operates with an authoritative 20+ years Principal / Staff specialist persona.

### 1. Master Orchestrator: `irfanlovefront`
- **Folder Name:** `irfanlovefront`
- **Slash Command:** `/irfanlovefront`
- **Role:** Master UI/UX & Frontend Engineering Orchestrator with 20+ years of elite experience. Coordinates the complete 5-stage lifecycle autonomously inside `frontend/`. Injects deterministic entropy, AIDA macro-structure, and live milestone tracking.
- **When to Use:** When you want a complete, full-stack, production-grade web application generated from start to finish.
- **Workflow:**
  ```text
  /irfanlovefront Build a modern SaaS landing page for an AI code review platform.
  ```

---

### 2. Stage 0: `taste-design-engineer`
- **Folder Name:** `taste-design-engineer`
- **Slash Command:** `/taste-design-engineer` (alias: `/taste-design-engineering`)
- **Role:** Principal Taste & Design Engineering Specialist with 20+ years of elite experience.
- **Capabilities:**
  1. **Operational Reference Audit:** Inspects actual files in `design-refs/` and user media, logging exact paths in a Reference-to-Decision Mapping Table.
  2. **Multi-Reference Ingestion & Conflict Resolution:** Supports multiple ingested `DESIGN.md` files or reverse-engineered systems, reconciling color and typography conflicts in a structured trade-off matrix.
  3. **Automatic Gap Filling from Reality:** Where user specifications leave gaps, adopts real tokens from category-relevant brands in `design-refs/` (no guessing or inventing arbitrary colors/fonts).
  4. **Mandatory 3 Distinct Creative Directions:** Evaluates three materially different concepts (Editorial Broadsheet, Machined Technical Console, Modernist Canvas) and documents trade-offs before locking the brief.
  5. **Elimination of Forced Templates:** Double-bezel cards, bento grids, and button physics are strictly optional tools.
  6. **Context-Aware Proof:** Replaces fake testimonials with real GitHub repos, architecture schematics, and code diffs for technical tools.
  7. **Produces:** `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

### 3. Stage 1: `frontend-architect`
- **Folder Name:** `frontend-architect`
- **Slash Command:** `/frontend-architect`
- **Role:** Staff Frontend Architect & Design System Foundation Engineer with 20+ years of experience.
- **Capabilities:**
  1. **Strict Workspace Isolation:** Scaffolds Next.js strictly inside `frontend/` with zero root or `.agents/` pollution.
  2. **4-Pillar Standalone Logo System:** Implements Core Metaphor, Negative Space/Monoline, Explicit Color Psychology, and Anti-Containment (zero enclosing boxes).
  3. **Token Ingestion from design-refs:** Reads `frontend/DESIGN_ENGINEERING_BRIEF.md` and maps exact brand tokens into `globals.css`.
  4. **Zero Render-Blocking Font Architecture:** Uses `next/font` with `display: 'swap'` and origin preconnects, eliminating 830ms+ render delays.
  5. **Clean SVG Hygiene:** Enforces valid SVG `<path d="...">` arc syntax to eliminate browser console errors.
  6. **Mobile-Native CSS Reset:** Injects `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`, and input zoom protection (>= 16px font size) into `globals.css`.
  7. **Favicon & Dynamic Assets:** Generates dynamic retina `app/icon.tsx` and container-constrained `BrandLogo.tsx`.

---

### 4. Stage 2: `creative-layout-engineer`
- **Folder Name:** `creative-layout-engineer`
- **Slash Command:** `/creative-layout-engineer`
- **Role:** Senior Creative Technologist & Macro-Layout Craftsman with 20+ years of experience.
- **Capabilities:**
  1. **1-Page-at-a-Time Incremental Construction:** Builds ONE page per run and stops for user review before proceeding.
  2. **The 2-Line Iron Limit:** Mandates wide container constraints (`max-w-5xl/6xl`) so headlines never wrap onto 3 or 4 lines on desktop.
  3. **Mobile-First Container Queries:** Uses `@container` queries and fluid clamp math (`clamp()`) for layout elements.
  4. **Dynamic Viewport Units:** `min-h-[100svh]` for heroes to eliminate mobile browser URL-bar collapse jump.
  5. **Zero Horizontal Overflow:** Wraps all pages in `<main className="overflow-x-hidden w-full max-w-full">` with zero overflow at 320px.

---

### 5. Stage 3: `interactive-component-engineer`
- **Folder Name:** `interactive-component-engineer`
- **Slash Command:** `/interactive-component-engineer`
- **Role:** Lead Interactive Component Engineer & Motion Choreographer with 20+ years of experience.
- **Capabilities:**
  1. **Container Geometry Toolkit:** Deploys Double-Bezel, Hairline Border, or Recessed Well based on the brief.
  2. **Emil Kowalski Button Press Physics:** Implements tactile `:active` `scale(0.97)` with 160ms ease-out transitions.
  3. **Button-in-Button Kinetic CTAs:** Implements primary buttons featuring nested trailing icon pill circles with diagonal hover physics.
  4. **Accessible Forms & Controls:** Accessible names on all buttons/links, unique IDs, and visible `<label htmlFor="[id]">`.
  5. **5 Advanced GSAP ScrollTrigger Paradigms:** Implements Sticky-Stack, Split Pinned Gallery, Scrubbing Text Reveal, Horizontal Tracks, and Node Inspectors.

---

### 6. Stage 4: `experience-qa-auditor`
- **Folder Name:** `experience-qa-auditor`
- **Slash Command:** `/experience-qa-auditor`
- **Role:** Principal Frontend QA, Accessibility, AIO & Technical SEO Specialist with 20+ years of experience.
- **Capabilities:**
  1. **100/100 Lighthouse Performance:** Zero render-blocking requests, LCP < 1.2s, CLS = 0, DOM depth < 12.
  2. **100/100 Lighthouse Accessibility:** Strict WCAG AAA/AA contrast checks, accessible button names, `<label for>` associations, visible focus rings.
  3. **100/100 Lighthouse Best Practices:** Zero console errors, clean SVG paths, secure headers guidelines (CSP, COOP).
  4. **100/100 Lighthouse SEO:** Metadata API, OpenGraph, JSON-LD schemas, canonical tags, valid robots.txt.
  5. **3/3 Agentic Browsing:** Fully compliant `public/llms.txt` with `# Title` H1 and structured markdown link tree, WebMCP form annotations, and `public/ai-catalog.json`.

---

### 7. Auxiliary: `build-error-resolver`
- **Folder Name:** `build-error-resolver`
- **Slash Command:** `/build-error-resolver`
- **Role:** Principal Build & TypeScript Error Resolution Specialist with 20+ years of compiler experience.
- **Capabilities:**
  1. Resolves TypeScript compiler errors, Next.js build failures, and missing type definitions in seconds.
  2. Changes fewer than 5% of lines with zero architectural refactoring.
  3. Restores green build status without altering component design or logic.

---

### 8. Auxiliary: `github-readme-writer`
- **Folder Name:** `github-readme-writer`
- **Slash Command:** `/github-readme-writer`
- **Role:** Principal Technical Documentation & GitHub README Specialist with 20+ years of experience.
- **Capabilities:**
  1. Crafts human operator-voice README files, technical case studies, and launch posts.
  2. Implements Daytona's open-source launch blueprint: Top Navigation Bar, Centered Logo, Badges, Visual Feast, Project Hygiene, and mini-docs.
  3. Strictly enforces zero em-dashes and zero generic AI clichés.

---

## 🎨 How to Custom-Tune Your Styles

You can instruct `/irfanlovefront` or individual specialists to use your preferred design aesthetic:

```text
/irfanlovefront Build a portfolio with these custom preferences:
- Reference: design-refs/linear.app-DESIGN.md
- Colors: Deep midnight navy (#050b14) with electric amber (#f59e0b) accents
- Typography: Plus Jakarta Sans for headings, Inter for body copy
- Motion: GSAP split pinned gallery with spring damping
- Pages: Home, About, Case Studies, Contact
```

The agents will adopt your specific colors, typography tokens, and layout guidelines while retaining strict production QA and accessibility standards.

---

## 🤝 Contributing & Community

We welcome suggestions, feedback, and contributions from developers and designers worldwide!

- **Suggest Improvements:** Tell us what further improvements you want to see in colors, typography, animations, web design, or layouts.
- **Reference Websites:** If you have reference websites with inspiring designs, share them in an issue so we can incorporate their strengths into the skill suite.
- **Contribute Code:** Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

> **Important Contribution Rule:** To maintain strict project hygiene, always stage specific files individually (e.g. `git add <file1> <file2>`). Never use greedy commands like `git add .` to prevent committing unwanted files.

---

## 🛡️ Project Hygiene & Policies

- **[Code of Conduct](CODE_OF_CONDUCT.md):** Based on Contributor Covenant v2.1 to foster an inclusive and respectful community.
- **[Security Policy](SECURITY.md):** Outlines our vulnerability reporting process and responsible disclosure guidelines.
- **[Contributing Guide](CONTRIBUTING.md):** Step-by-step instructions for opening issues, submitting pull requests, and adhering to our hygiene rules.

---

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.

- **You Are Free To:** Share, copy, redistribute, remix, transform, and build upon the material for non-commercial purposes.
- **Under the Following Terms:**
  - **Attribution:** You must give appropriate credit to Raja Irfan Ahmed and provide a link to the license.
  - **NonCommercial:** You may not use the material for commercial personal gain or commercial resale.
  - **ShareAlike:** If you remix, transform, or build upon the material, you must distribute your contributions under the same license.

See the full [LICENSE](LICENSE) file for complete details.

---

## 🌟 Star History

If this agent suite helps you build better frontend applications, please consider giving it a star!

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=rajairfanahmed/irfanlovefront&type=Date)](https://star-history.com/#rajairfanahmed/irfanlovefront&Date)

</div>
