<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="RELEASE-1.0.0.md"><strong>Release 1.0.0</strong></a> •
  <a href="RELEASE-1.2.0.md"><strong>Release 1.2.0 (v2)</strong></a>
</p>

```
   ___       ___              __                  ____                 __ 
  / (_)____ / _/__ ____  ____/ /  ___ _  _____   / __/______  ___  / /_
 / / // __// _/ _ `/ _ \/ __/ _ \/ _ \ |/ / -_) / _// __/ _ \/ _ \/ __/
/_/_//_/  /_/  \_,_/_//_/\__/_//_/\___/___/\__/ /_/ /_/  \___/_//_/\__/ 
```

### The Autonomous 8-Agent UI/UX & Frontend Engineering Suite (v2.0)

**Eliminate frontend design paralysis, generic templates, and AI-slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.2.0--v2-blue.svg?style=flat-square)](RELEASE-1.2.0.md)
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

## ⚡ The 1-Command Quickstart (v2)

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

**IrfanLoveFront permanently solves this.** It is an autonomous 8-agent engineering suite that enforces deterministic design entropy, Emil Kowalski design engineering principles, Apple WWDC fluid motion, machined double-bezel surfaces, 2-line headline discipline, fluid clamp typography, and production QA auditing.

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
                                  |    (frontend/PLAN.md State Engine)    |
                                  +-------------------+-------------------+
                                                      |
                                                      v
                                  +---------------------------------------+
                                  |       STAGE 0: taste-design-engineer  |
                                  |   Pre-Architecture Consultation       |
                                  |   (Emil Kowalski Taste & Motion Brief)|
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
 |* Deterministic|                            |* 2-Line H1    |                           |* Double-Bezel |
 |  Seed Engine  |                            |  Iron Rule    |                           |  Architecture |
 |* 6 Substrates |                            |* 4 Hero       |                           |* Emil Kowalski|
 |* 4 Font Stacks|                               Archetypes   |                              scale(0.97)  |
 |* Double-Bezel |                            |* 100svh Hero  |                           |* Button-in-   |
 |  Math Tokens  |                            |* Gapless Bento|                              Button CTAs  |
 |* SVG Logo Eng |                            |  Dense Flow   |                           |* 5 Advanced   |
 |* Mobile-Native|                            |* Route Shells |                              GSAP Timelines
 |  CSS Reset    |                            |* Sub-Page     |                           |* Overflow-X   |
 |* Favicon      |                               Spatial Y    |                              Protection   |
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
                                              |* 45+ Item     |
                                              |  Pre-Flight   |
                                              |* Mobile-Native|
                                              |  Symptom Audit|
                                              |* Break-UI     |
                                              |  Stress Test  |
                                              |* Mobile 320px |
                                              |* Contrast AA  |
                                              |* JSON-LD SEO  |
                                              |* 404 & Errors |
                                              +---------------+
                                                      |
                                      +---------------+---------------+
                                      |                               |
                                      v                               v
                      +-------------------------------+-------------------------------+
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

All slash commands match their directory names exactly in `.agents/skills/`.

### 1. Master Orchestrator: `irfanlovefront`
- **Folder Name:** `irfanlovefront`
- **Slash Command:** `/irfanlovefront`
- **Role:** Master UI/UX & Frontend Engineering Orchestrator. Coordinates the complete 5-stage lifecycle autonomously inside `frontend/`. Injects deterministic entropy, AIDA macro-structure, and live milestone tracking.
- **When to Use:** When you want a complete, full-stack, production-grade web application generated from start to finish.
- **Workflow:**
  ```text
  /irfanlovefront Build a modern SaaS landing page for an AI code review platform.
  ```

---

### 2. Stage 0: `taste-design-engineer`
- **Folder Name:** `taste-design-engineer`
- **Slash Command:** `/taste-design-engineer` (alias: `/taste-design-engineering`)
- **Role:** Principal Taste & Design Engineering Specialist.
- **Capabilities:**
  1. **Pre-Architecture Consultation:** Ingests platform targets, canonical routes, rough user sketches, and reference URLs before scaffolding.
  2. **Emil Kowalski Philosophy:** Enforces that unseen details compound, taste is trained, and beauty is leverage.
  3. **The Animation Decision Framework:** Frequency audit (100+/day = zero animation, keyboard actions = zero animation), sets purpose, assigns custom cubic beziers (`--ease-out`, `--ease-in-out`, `--ease-drawer`).
  4. **Apple WWDC Fluid Interfaces:** Damping ratio `1.0` default, direct manipulation, instant pointer-down response, and interruptibility.
  5. **Produces:** `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

### 3. Stage 1: `frontend-architect`
- **Folder Name:** `frontend-architect`
- **Slash Command:** `/frontend-architect`
- **Role:** Foundation Architect & Design System Engineer.
- **Capabilities:**
  1. **Deterministic Entropy Engine:** Runs `seed = len(prompt) % 6` to mathematically select one of six calibrated substrates and font stacks, preventing repetitive dark themes.
  2. **Double-Bezel Math Tokens:** Declares `--radius-outer` (20px/24px) and concentric inner radius tokens (`calc(var(--radius-outer) - 4px)`).
  3. **Mobile-Native CSS Reset:** Injects `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`, and input zoom protection (>= 16px font size) into `globals.css`.
  4. **Fluid Typography & Optical Sizing:** Implements CSS `clamp()` font scales and negative display tracking.
  5. **SVG Logo Engineering:** Crafts a custom, mathematically balanced vector brand mark (512x512 viewBox with semantic `#icon` and `#wordmark` groups) and generates `app/icon.tsx`.
  6. **Lenis Smooth Scroll:** Initializes momentum scrolling with native reduced-motion safety.

---

### 4. Stage 2: `creative-layout-engineer`
- **Folder Name:** `creative-layout-engineer`
- **Slash Command:** `/creative-layout-engineer`
- **Role:** Macro-Layout & Hero Craftsman.
- **Capabilities:**
  1. **The 2-Line Iron Rule:** Mandates wide container constraints (`max-w-5xl/6xl`) so headlines never wrap onto 3 or 4 lines on desktop.
  2. **4 Distinct Hero Archetypes:** Deploys Cinematic Center, Tactical Blueprint, Editorial Asymmetric Split, or Modular Telemetry based on project seed.
  3. **100svh Viewport Sizing:** Uses small viewport height (`min-h-[100svh]`) for heroes to eliminate mobile browser URL-bar collapse jump.
  4. **Gapless Bento Grids:** Enforces Tailwind `grid-flow-dense` and interlocking cell spans so zero awkward dead gaps exist.
  5. **Single-Project Spatial Rhythm:** Standardizes page shell Y-axis (`pt-28`) across canonical sub-pages (`/about`, `/projects`, `/skills`, `/contact`) for zero layout shift during navigation.

---

### 5. Stage 3: `interactive-component-engineer`
- **Folder Name:** `interactive-component-engineer`
- **Slash Command:** `/interactive-component-engineer`
- **Role:** UI Primitives & Motion Choreographer.
- **Capabilities:**
  1. **Machined Hardware Surfaces:** Encloses cards in double-bezel concentric containers with subtle inset borders.
  2. **Emil Kowalski Button Press Physics:** Implements tactile `:active` `scale(0.97)` on buttons and pressable elements with 160ms ease-out transitions.
  3. **Button-in-Button Kinetic CTAs:** Implements primary buttons featuring nested trailing icon pill circles that translate diagonally on hover.
  4. **Emil's Component Recipes:** Never `scale(0)` (always enter from `scale(0.95)` with opacity), origin-aware popovers (`transform-origin: var(--transform-origin)`), tooltips instant after first, and blur-assisted crossfades.
  5. **5 Advanced GSAP ScrollTrigger Paradigms:** Implements Sticky-Stack Stacking, Pinning Split Showcase, Scrubbing Kinetic Text Reveal, Horizontal Accordion, and Parallax Depth.
  6. **Zero Horizontal Overflow:** Wraps all pages in `<main className="overflow-x-hidden w-full max-w-full">` to eliminate mobile scroll bugs.

---

### 6. Stage 4: `experience-qa-auditor`
- **Folder Name:** `experience-qa-auditor`
- **Slash Command:** `/experience-qa-auditor`
- **Role:** Production Hardening, Mobile Verification & SEO Auditor.
- **Capabilities:**
  1. **Mechanical 45+ Item Pre-Flight Check:** Verifies font rendering, image aspect ratios, touch targets, and contrast ratios.
  2. **Mobile-Native Symptom Audit:** Checks sticky hover suppression, tap highlight removal, 100vh overflow fix, input zoom prevention, and overscroll containment.
  3. **Adversarial Break-UI Stress Test:** Tests worst-case strings ("Aleksandra Wisniewska-Kowalczyk", unbreakable emails, zero counts) to ensure layout resilience.
  4. **Mobile 320px Viewport Audit:** Tests all components down to 320px viewport width with zero text clipping or horizontal spill.
  5. **WCAG AA Compliance:** Validates minimum 4.5:1 text contrast and accessible ARIA attributes.
  6. **Bespoke Error States & SEO:** Builds custom `not-found.tsx`, resilient `error.tsx`, and injects JSON-LD structured rich snippets.

---

### 7. Auxiliary: `build-error-resolver`
- **Folder Name:** `build-error-resolver`
- **Slash Command:** `/build-error-resolver`
- **Role:** Surgical Build Recovery Specialist.
- **Capabilities:**
  1. Resolves TypeScript compiler errors, Next.js build failures, and missing type definitions in seconds.
  2. Changes fewer than 5% of lines with zero architectural refactoring.
  3. Restores green build status without altering component design or logic.

---

### 8. Auxiliary: `github-readme-writer`
- **Folder Name:** `github-readme-writer`
- **Slash Command:** `/github-readme-writer`
- **Role:** Technical Documentation & Daytona Open-Source Framework Specialist.
- **Capabilities:**
  1. Crafts human operator-voice README files, technical case studies, and launch posts.
  2. Implements Daytona's open-source launch blueprint: Top Navigation Bar, Centered Logo, Badges, Visual Feast, Project Hygiene, and mini-docs.
  3. Strictly enforces zero em-dashes and zero generic AI clichés.

---

## 🎨 How to Custom-Tune Your Styles

You can instruct `/irfanlovefront` or individual specialists to use your preferred design aesthetic:

```text
/irfanlovefront Build a portfolio with these custom preferences:
- Colors: Deep midnight navy (#050b14) with electric amber (#f59e0b) accents
- Typography: Plus Jakarta Sans for headings, Inter for body copy
- Motion: GSAP sticky-stack cards with spring damping
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
