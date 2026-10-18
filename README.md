<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="RELEASES/RELEASE-3.1.0.md"><strong>Release 3.1.0</strong></a> •
  <a href="RELEASES/RELEASE-1.0.5.md"><strong>Release 1.0.5</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### The Autonomous 7-Specialist UI/UX & Frontend Engineering Suite (v3.1.0)

**Eliminate frontend design paralysis, repetitive templates, and AI slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.1.0-blue.svg?style=flat-square)](RELEASES/RELEASE-3.1.0.md)
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

## The 1-Command Quickstart (v3.1.0)

Install the entire 7-specialist skill suite instantly across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, or **GitHub Copilot** with a single command:

```bash
# Interactive setup (selects your agent and workspace or global scope)
npx irfanlovefront@latest
```

Or install with direct target flags:

```bash
# Install specifically for Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --claude

# Install specifically for Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Install specifically for Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --antigravity

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```

---

## Why irfanlovefront v3.1.0?

Standard AI coding assistants suffer from severe statistical biases and token exhaustion:
- Every generated site defaults to identical dark obsidian slate `#0B0F17`.
- Monolithic multi-thousand-line rule files consume model context, triggering execution freezing and truncated outputs.
- Repetitive double-bezel cards and pill buttons get forced onto every interface regardless of brand.
- Primary buttons lack tactile states and fail WCAG AA contrast standards.
- QA agents blindly rubber-stamp checklists, declaring broken sites production-ready.

**Release 3.1.0 introduces the Modular Reference Architecture:**
1. **Under 180-Line LLM Attention Ceiling:** Master skills (~100 lines) load focused companion references on-demand, preserving over 85% of model context for code execution.
2. **85 Brand Design Token Ecosystem:** Concrete design systems in `taste-design-engineer/design-refs/` (Apple, Stripe, Linear, Notion, Supabase, Vercel, Ferrari, etc.).
3. **Semantic Substrate Hierarchy:** Token substrate layered from `--canvas-base` through `--canvas-raised` to `--canvas-overlay`.
4. **Anti-Template Layouts:** Distinct structural compositions (Editorial Asymmetric, Split Console, Kinetic Rail, Monastic Document).
5. **Truth in Verification:** Stage 4 strictly separates code inspection from live rendered browser testing with explicit status verdicts (`PASS`, `FAIL`, `PARTIAL`, `NOT VERIFIED`, `BLOCKED`).
6. **Zero-Dash Anti-Slop Policy:** Zero em-dash characters (U+2014) and zero en-dash characters (U+2013) anywhere in skills, copy, or code.

---

## The 5-Stage Engineering Lifecycle + 2 Auxiliaries

Each skill operates with an authoritative 15-20+ years Principal Specialist persona with clear boundaries and peer handoffs:

```text
  +-------------------------------------------------------------------------------+
  |                        5-STAGE FRONTEND LIFECYCLE                             |
  +-------------------------------------------------------------------------------+
  |                                                                               |
  |  [Stage 0: /taste-design-engineer]                                            |
  |  Brand reference audit, 2-step discovery, token synthesis                     |
  |               |                                                               |
  |               v                                                               |
  |  [Stage 1: /frontend-architect]                                               |
  |  Project scaffolding, design tokens, font system, Next.js 15 routing           |
  |               |                                                               |
  |               v                                                               |
  |  [Stage 2: /creative-layout-engineer]                                         |
  |  Bespoke page composition, 4-element hero, squint test, visual rhythm         |
  |               |                                                               |
  |               v                                                               |
  |  [Stage 3: /interactive-component-engineer]                                   |
  |  Tactile components, genuine state machines, form validation, motion          |
  |               |                                                               |
  |               v                                                               |
  |  [Stage 4: /experience-qa-auditor]                                            |
  |  Responsive audit (320px to 1440px), WCAG AA contrast, defect triage          |
  |                                                                               |
  +-------------------------------------------------------------------------------+
  |  [Auxiliary: /build-error-resolver]    |  [Auxiliary: /github-readme-writer]  |
  |  Surgical TypeScript & build healing  |  Authoritative launch documentation  |
  +---------------------------------------+---------------------------------------+
```

---

## The 7 Specialist Skills: Detailed Guide

All slash commands match their directory names exactly in `.agents/skills/`.

### 1. Stage 0: `taste-design-engineer`
- **Slash Command:** `/taste-design-engineer` (alias: `/taste-design-engineering`)
- **Role:** Principal Taste & Design Engineering Specialist.
- **Key Capabilities:**
  1. **Operational Reference Audit:** Inspects concrete files in `taste-design-engineer/design-refs/` and user media, logging exact paths.
  2. **Multi-Reference Ingestion:** Reconciles color and typography conflicts in a structured trade-off matrix.
  3. **Mandatory 3 Distinct Creative Directions:** Evaluates three materially different concepts (e.g. Modernist Canvas, Machined Technical Console, Editorial Broadsheet).
  4. **Output:** Synthesizes `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

### 2. Stage 1: `frontend-architect`
- **Slash Command:** `/frontend-architect`
- **Role:** Principal Frontend Architect & Design System Foundation Engineer.
- **Key Capabilities:**
  1. **Semantic Substrate Foundation:** Maps adopted tokens into `globals.css` with a cohesive `--canvas` depth scale.
  2. **Zero Render-Blocking Font System:** Uses `next/font` with `display: 'swap'`, eliminating blocking external CSS imports.
  3. **Standalone Vector Brand Identity:** Crafts bespoke vector logos with semantic color theory and zero enclosing boxes.
  4. **Next.js 15 App Scaffolding:** Clean project setup strictly inside `frontend/`.

---

### 3. Stage 2: `creative-layout-engineer`
- **Slash Command:** `/creative-layout-engineer`
- **Role:** Senior Creative Technologist & Macro-Layout Craftsman.
- **Key Capabilities:**
  1. **Page-by-Page Construction:** Builds one complete page at a time with full responsive fidelity before proceeding.
  2. **4-Element Hero Mini-Site:** Clear headline (<= 2 lines), concise context, context-aware proof, and high-contrast CTA.
  3. **Visual Squint Test:** Enforces prominent optical hierarchy from headline down to supporting elements.
  4. **Horizontal Scroll Elimination:** Enforces `overflow-x: hidden` with zero horizontal overflow at 320px width.

---

### 4. Stage 3: `interactive-component-engineer`
- **Slash Command:** `/interactive-component-engineer`
- **Role:** Senior UI Component Engineer & Motion Choreographer.
- **Key Capabilities:**
  1. **Genuinely Functional Components:** Every interactive control performs a defined action with full state coverage.
  2. **Real Form Validation:** Inline error messages beneath invalid inputs; never fakes success if backend is unconfigured.
  3. **Tactile Button Physics:** Emil Kowalski button press physics (`:active scale(0.97)` with 160ms ease-out transitions).
  4. **Disciplined Motion:** Hardware-accelerated GPU transforms with mandatory `@media (prefers-reduced-motion)` suppression.

---

### 5. Stage 4: `experience-qa-auditor`
- **Slash Command:** `/experience-qa-auditor`
- **Role:** Principal QA Engineer, Accessibility Specialist, and Performance Auditor.
- **Key Capabilities:**
  1. **Defect Discovery & Triage:** Structured defect logs (P0 Blocker to P4 Trivial) with reproduction steps and root-cause analysis.
  2. **Mobile-First Responsive Audit:** Verifies layouts from 320px compact screens up to 1440px+ ultra-wide monitors.
  3. **WCAG AA Compliance:** Strict contrast audits (>= 4.5:1 text, >= 3:1 controls) and full keyboard tab traversal.
  4. **Truth in Verification:** Explicit release status taxonomy (`PASS`, `FAIL`, `PARTIAL`, `NOT VERIFIED`, `BLOCKED`).

---

### 6. Auxiliary: `build-error-resolver`
- **Slash Command:** `/build-error-resolver`
- **Role:** Principal Build & TypeScript Error Resolution Specialist.
- **Key Capabilities:**
  1. Resolves TypeScript compiler errors, Next.js build failures, and module conflicts.
  2. Surgical edits affecting fewer than 5% of lines with zero architectural refactoring.
  3. Restores green build status quickly without altering component design.

---

### 7. Auxiliary: `github-readme-writer`
- **Slash Command:** `/github-readme-writer`
- **Role:** Principal Technical Documentation Specialist.
- **Key Capabilities:**
  1. Crafts authoritative README files, technical case studies, and launch posts.
  2. Implements the Daytona open-source launch framework with project hygiene standards.
  3. Strictly enforces zero em-dashes and zero generic AI clichés.

---

## Step-by-Step Project Execution

Run the lifecycle sequentially by invoking each specialist in your AI agent chat:

```text
Step 1:
/taste-design-engineer Formulate design brief for an AI developer platform. Use Stripe and Linear as references.

Step 2:
/frontend-architect Scaffold Next.js 15 project foundation with semantic CSS tokens and standalone brand mark.

Step 3:
/creative-layout-engineer Build bespoke flagship landing page layout with 4-element hero and asymmetric visual rhythm.

Step 4:
/interactive-component-engineer Implement interactive controls, accessible contact form, and tactile micro-motion.

Step 5:
/experience-qa-auditor Execute end-to-end QA audit across 320px to 1440px viewports, WCAG AA, and build health.
```

---

## Contributing & Community

We welcome suggestions, feedback, and contributions from developers and designers worldwide!
- **Suggest Improvements:** Share your ideas on typography, colors, animations, and responsive patterns in GitHub Issues.
- **Contribute References:** Have an inspiring website? Submit a reference specification to expand our design ecosystem.
- **Contributing Guide:** See [CONTRIBUTING.md](CONTRIBUTING.md) for pull request guidelines.

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license. See [LICENSE](LICENSE) for complete details.

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=rajairfanahmed/irfanlovefront&type=Date)](https://star-history.com/#rajairfanahmed/irfanlovefront&Date)

</div>
