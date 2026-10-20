<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="RELEASES/RELEASE-3.2.1.md"><strong>Release 3.2.1</strong></a> •
  <a href="RELEASES/RELEASE-3.2.0.md"><strong>Release 3.2.0</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### Unified 2-Skill UI/UX & Frontend Engineering Suite (v3.2.1)

**Eliminate frontend design paralysis, repetitive templates, and AI slop forever.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.2.1-blue.svg?style=flat-square)](RELEASES/RELEASE-3.2.1.md)
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

## The 1-Command Quickstart (v3.2.1)

Install the entire skill suite instantly across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, or **GitHub Copilot** with a single command:

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

# Install specifically for Windsurf (.windsurf/rules/ + .windsurfrules)
npx irfanlovefront --windsurf

# Install for all supported AI agents simultaneously
npx irfanlovefront --all
```

---

## Why irfanlovefront v3.2.1?

Standard AI coding assistants suffer from severe statistical biases and attention decay:
- Every generated site defaults to identical dark obsidian slate `#0B0F17`.
- Agents build only a single hero section and halt prematurely, leaving secondary routes and footers missing.
- Monolithic multi-thousand-line rule files consume model context, triggering execution freezing and truncated outputs.
- Repetitive double-bezel cards and pill buttons get forced onto every interface regardless of brand.
- Primary buttons lack tactile states and fail WCAG AA contrast standards.
- Animations are omitted or reduced to plain CSS `scroll-behavior: smooth`.

**Release 3.2.1 solves this permanently with a 2-Skill Unified Engine:**
1. **Skill 1 (`master-prompt-generator`)**: Progressive 4-phase product discovery, 29-category taxonomy, 85 brand design specifications in `design-refs/`, and zero-ambiguity `MASTER_PROMPT.md` compilation.
2. **Skill 2 (`master-implementer`)**: Progressive 4-batch frontend construction (Foundation, Nav & Hero, Sections & Footer, Motion & QA Audit) with a strict anti-template lock.
3. **Auxiliary Specialist (`github-readme-writer`)**: Daytona open-source framework documentation and launch copy specialist with zero em-dashes.
4. **Under 195-Line Anti-Skip Architecture**: Every skill and companion reference is strictly bounded between 95 and 195 lines, preserving over 85% of model context for production code.
5. **Truth in Quality Verification**: Batch 4 requires real terminal compilation (`npm run build`) and responsive verification (`375px`, `768px`, `1440px`).
6. **Zero-Dash Anti-Slop Policy**: Zero em-dash characters (U+2014) and zero en-dash characters (U+2013) anywhere in skills, copy, or code.

---

## The 2-Skill Architecture + Documentation Specialist

```text
  +-------------------------------------------------------------------------------+
  |                     IRFANLOVEFRONT 2-SKILL LIFECYCLE                          |
  +-------------------------------------------------------------------------------+
  |                                                                               |
  |  [Skill 1: /master-prompt-generator]                                          |
  |  - Phase 1: Category triage (29 options), Project mode, Routes, Real data    |
  |  - Phase 2: Brand references (85 design-refs), Colors, Surfaces, Typography   |
  |  - Phase 3: Desktop navbar archetypes, Hamburger overlay, Layered hero        |
  |  - Phase 4: Section sequence, Numbered rows, Glowing cards, Motion specs      |
  |  - Output: Complete zero-ambiguity MASTER_PROMPT.md                           |
  |               |                                                               |
  |               v                                                               |
  |  [Skill 2: /master-implementer]                                               |
  |  - Batch 1: Stack preflight, Font loading, CSS variables, Keyframes, Lenis    |
  |  - Batch 2: Desktop navbar, Hamburger curtain state, Layered hero, Marquee    |
  |  - Batch 3: Numbered rows, Radial glow cards, Contact wizard, Footer watermark |
  |  - Batch 4: Scroll reveals, Responsive checks (375/768/1440), npm run build   |
  |                                                                               |
  +-------------------------------------------------------------------------------+
  |  [Auxiliary Specialist: /github-readme-writer]                                |
  |  Daytona 4,000-star launch framework, project hygiene, zero em-dashes        |
  +-------------------------------------------------------------------------------+
```

---

## Detailed Skill Specifications

All slash commands match their directory names exactly in `.agents/skills/`.

### 1. Skill 1: `master-prompt-generator`
- **Slash Command:** `/master-prompt-generator`
- **Role:** Principal Product Discovery, UX Architecture & Creative Direction Specialist.
- **Key Capabilities:**
  1. **Phase 1 (Scope & Data):** Classifies project mode (New build vs Existing upgrade), categorizes into 29 domains, defines route sitemap, and collects real copy/assets.
  2. **Phase 2 (Brand, Theme & Type):** Inspects 85 brand references in `design-refs/` (Awwwards, Linear, Stripe, Apple, Vercel, Framer, Robinsweb), custom color token tables, surface physics, and typography pairings.
  3. **Phase 3 (Nav, Hero & Layout):** Selects navbar archetype (Minimal Split Bar, Floating Glass Island, Docked SaaS, Mega-Menu, E-Commerce), morphing hamburger overlay curtain, and layered hero z-index stack.
  4. **Phase 4 (Sections, Cards & Motion):** Specifies section order, full-width numbered rows (`01-04`), radial glow cards, multi-step contact wizard, giant interactive footer watermark, and infinite marquee loops.
  5. **Output:** Compiles 100% of decisions into a locked `MASTER_PROMPT.md` in the workspace root.

---

### 2. Skill 2: `master-implementer`
- **Slash Command:** `/master-implementer`
- **Role:** Principal Frontend Architecture, Layout, Component & Motion Implementation Engineer.
- **Key Capabilities:**
  1. **`MASTER_PROMPT.md` Is Law:** Enforces strict anti-template lock; never substitutes generic 64px bars, flat cards, or plain smooth scroll.
  2. **Batch 1 (Foundation & Tokens):** Framework scaffolding, font loading, `:root` CSS custom properties, `@keyframes marquee-left`, and Lenis smooth scroll provider.
  3. **Batch 2 (Navigation & Hero):** Exact desktop navbar, working hamburger curtain overlay state machine, layered hero (`z-0` glow, `z-10` display title, `z-20` overlapping portrait, `z-30` CTA), and true infinite marquee strip.
  4. **Batch 3 (Sections, Cards & Footer):** Numbered interactive service rows, radial glow cards, bento cells, multi-step contact progress wizard, and giant brand footer watermark with rest contrast and hover glow.
  5. **Batch 4 (Motion & QA Audit):** Scroll-triggered reveals (`GSAP` / `Framer Motion`), responsive checks across `375px`, `768px`, and `1440px`, and production build verification (`npm run build`).

---

### 3. Auxiliary: `github-readme-writer`
- **Slash Command:** `/github-readme-writer`
- **Role:** Principal Technical Documentation Specialist.
- **Key Capabilities:**
  1. Crafts authoritative README files, technical case studies, and launch posts.
  2. Implements the Daytona open-source launch framework with project hygiene standards.
  3. Strictly enforces zero em-dashes and zero generic AI clichés.

---

## Step-by-Step Project Execution

Run the complete pipeline in two clean stages:

```text
Stage 1 (Discovery & Blueprint):
/master-prompt-generator Build a high-craft developer portfolio inspired by robinsweb.net with orange atmospheric glow and center overlapping portrait.

Stage 2 (Production Codebase Construction):
/master-implementer
```

---

## Contributing & Community

We welcome suggestions, feedback, and contributions from developers and designers worldwide:
- **Suggest Improvements:** Share your ideas on typography, colors, animations, and responsive patterns in GitHub Issues.
- **Contribute References:** Have an inspiring website? Submit a reference specification to expand our 85-brand design ecosystem.
- **Contributing Guide:** See [CONTRIBUTING.md](CONTRIBUTING.md) for pull request guidelines.

---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license. See [LICENSE](LICENSE) for complete details.

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=rajairfanahmed/irfanlovefront&type=Date)](https://star-history.com/#rajairfanahmed/irfanlovefront&Date)

</div>
