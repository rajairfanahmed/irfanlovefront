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

### Backend + Frontend Design Engineering Skills Suite for AI Coding Agents (v3.3.2)

**1 backend skill. 11 numbered frontend skills. 55+ deep reference documents. Zero AI slop.**

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

The root cause: monolith prompts that try to cover everything in one instruction set. They can't hold enough domain depth in any single area, and they can't enforce a build order. The AI mixes foundation setup with page building, skips steps, and produces a mess that doesn't hold together.

**v3.3.2 solves this with two skill groups:**

1. **Backend skill** (1 skill, 29 files): stack-agnostic backend engineering with 13 deep reference docs, 7 checklists, and 8 templates. Runs first. Produces API contracts, database design, and architecture docs in `docs/`.

2. **Frontend skills** (11 numbered skills, 55+ files): a strict numbered pipeline from foundation to polish. The orchestrator (`00-design-engineer`) reads the backend's API contracts and produces 10 spec files. Then skills `01` through `10` execute in order: scaffold first, tokens second, layouts third, components fourth, flows fifth, then responsive, animations, SEO, accessibility, and performance last. Each skill reads its own generated spec before implementing.

---

## Architecture Overview

```text
  +---------------------------------------------------------------------------------+
  |                    IRFANLOVEFRONT v3.3.2 ARCHITECTURE                           |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  [Backend Skill]                                                                |
  |                                                                                 |
  |  backend/                                                                       |
  |    Stack-agnostic backend engineering                                            |
  |    13 references + 7 checklists + 8 templates                                   |
  |    Produces: docs/api-contract.md, docs/architecture.md,                        |
  |              docs/database-design.md, docs/implementation-plan.md               |
  |    RUNS FIRST. Frontend reads its output.                                       |
  |                                                                                 |
  |  [Frontend Skills - Numbered Pipeline]                                          |
  |                                                                                 |
  |  00-design-engineer        Reads backend docs, produces 10 frontend specs       |
  |                                                                                 |
  |  FOUNDATION PHASE (set up before any pages):                                    |
  |  01-frontend-architecture  Project scaffold, folders, API client, tokens setup  |
  |  02-visual-design          Populate design tokens (colors, fonts, spacing)      |
  |  03-structural-layout      Global layouts, page shells, grid, header/footer     |
  |                                                                                 |
  |  COMPONENT & PAGE PHASE (build the actual UI):                                  |
  |  04-ui-components          All reusable components, placed in layout sections   |
  |  05-ux-interaction-design  Wire flows, forms to API, nav, error handling        |
  |                                                                                 |
  |  ENHANCEMENT PHASE (polish and optimize):                                       |
  |  06-responsive-design      Breakpoints, fluid sizing, mobile adaptation         |
  |  07-animations-motion-design  Transitions, scroll reveals, reduced-motion       |
  |  08-seo                    Metadata, structured data, AI search discoverability |
  |  09-accessibility          WCAG audit, keyboard nav, screen reader support      |
  |  10-performance-optimization  Bundles, CWV, images, fonts, lazy loading         |
  |                                                                                 |
  |  [Documentation Specialist]                                                     |
  |  github-readme-writer      Daytona framework READMEs, zero em-dashes            |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  All generated docs (backend + frontend) live in one folder: docs/              |
  |  Every skill reads its spec from docs/ before implementing                      |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
```

---

## Development Workflow

**Always: backend first, then frontend.**

```text
[Step 1: Backend]
backend skill  ->  Inspect project, build API, produce docs/
                   (api-contract.md, architecture.md, database-design.md)

[Step 2: Frontend Orchestration]
00-design-engineer  ->  Read backend docs/ + user requirements
                        Produce 10 frontend spec files in docs/

[Step 3: Frontend Implementation - Strict Order]

  FOUNDATION PHASE:
  01-frontend-architecture   ->  Read docs/frontend-architecture.md + docs/api-contract.md
                                 Scaffold project, set up tokens system, wire API client
  02-visual-design           ->  Read docs/visual-design.md
                                 Populate tokens with colors, fonts, spacing
  03-structural-layout       ->  Read docs/structural-layout.md
                                 Build layouts, page shells, header/footer, grid

  COMPONENT & PAGE PHASE:
  04-ui-components           ->  Read docs/ui-components.md + docs/api-contract.md
                                 Build all components, place in layout sections
  05-ux-interaction-design   ->  Read docs/ux-interaction-design.md + docs/api-contract.md
                                 Wire forms to API, complete navigation, error handling

  ENHANCEMENT PHASE:
  06-responsive-design       ->  Read docs/responsive-design.md
                                 Add breakpoints, mobile adaptation, touch targets
  07-animations-motion-design -> Read docs/animations-motion-design.md
                                 Add transitions, scroll reveals, reduced-motion
  08-seo                     ->  Read docs/seo.md
                                 Add metadata, structured data, sitemaps
  09-accessibility           ->  Read docs/accessibility.md
                                 Audit and fix WCAG, keyboard nav, screen readers
  10-performance-optimization -> Read docs/performance-optimization.md
                                 Optimize bundles, images, fonts, Core Web Vitals
```

**Rule: every skill reads its own spec file from `docs/` before implementing anything.**

---

## The Backend Skill

### `backend/`

Stack-agnostic backend engineering skill. Does not assume Node.js, Express, PostgreSQL, or any other technology. Inspects the project, selects the right stack, and builds.

**Workflow:** Project Info -> Repository Inspection -> Select Required References -> Read References -> Generate Required Documentation -> Plan -> Implement -> Test -> Integrate -> Review -> Complete

**Contains:**
- `SKILL.md` (main instructions, 289 lines)
- `references/` (13 deep reference docs)
- `checklists/` (7 verification checklists)
- `templates/` (8 documentation templates)

| Reference | Covers |
| :--- | :--- |
| `backend-fundamentals.md` | Core backend concepts and architecture boundaries |
| `architecture-and-design.md` | Module boundaries, architectural patterns, refactoring |
| `technology-stack-selection.md` | Language, framework, database selection criteria |
| `database-engineering.md` | Schemas, queries, migrations, transactions, data consistency |
| `api-development.md` | Endpoints, contracts, pagination, versioning, frontend integration |
| `authentication-and-authorization.md` | Sessions, tokens, OAuth2 PKCE, RBAC, account recovery |
| `backend-security.md` | Input validation, CORS, rate limiting, security headers |
| `integrations-and-business-logic.md` | External services, payments, email, webhooks, queues |
| `error-handling-and-observability.md` | Logging, monitoring, tracing, production diagnosis |
| `testing-and-qa.md` | Unit, integration, API, and regression testing |
| `performance-and-scalability.md` | Caching, connection pooling, scaling, capacity planning |
| `deployment-and-devops.md` | Docker, CI/CD, cloud hosting, environment setup |
| `documentation.md` | Technical documentation standards |

---

## The 11 Frontend Skills (Numbered Pipeline)

### `00-design-engineer` - Orchestrator

Reads all project inputs (requirements, reference images, backend API contracts from `docs/`) and produces `DESIGN_BRIEF.md` plus 10 specialist spec files. Runs before any implementation skill. The orchestrator reads the backend's `api-contract.md`, `architecture.md`, and `database-design.md` so every frontend spec aligns with the actual API.

**References:** `web-categories.md`, `reference-analysis.md`, `requirements-and-conflict-resolution.md`, `design-synthesis.md`, `output-contract.md`, `design-quality-gates.md`
**Template:** `design-brief-template.md`

---

### Foundation Phase

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **01** | `01-frontend-architecture` | Project scaffold, folder structure, routing, state management, design token system setup, API client wiring to backend | `frontend-architecture.md` + `api-contract.md` |
| **02** | `02-visual-design` | Populate the token system with project-specific colors, typography, spacing, shadows, and theming | `visual-design.md` |
| **03** | `03-structural-layout` | Global layout shells, page containers, grid system, header/footer structure, section composition | `structural-layout.md` |

### Component & Page Phase

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **04** | `04-ui-components` | Build all reusable components (buttons, cards, forms, modals, tables, navigation), place in layout sections | `ui-components.md` + `api-contract.md` |
| **05** | `05-ux-interaction-design` | Wire user flows, form submissions to API, navigation behavior, loading/error/empty states | `ux-interaction-design.md` + `api-contract.md` |

### Enhancement Phase

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **06** | `06-responsive-design` | Add breakpoints, fluid sizing, mobile navigation, touch targets, cross-device testing | `responsive-design.md` |
| **07** | `07-animations-motion-design` | Add transitions, scroll reveals, micro-interactions, reduced-motion alternatives | `animations-motion-design.md` |
| **08** | `08-seo` | Add metadata, structured data, semantic HTML, sitemaps, AI search discoverability | `seo.md` |
| **09** | `09-accessibility` | Audit and fix WCAG conformance, keyboard navigation, screen reader support, focus management | `accessibility.md` |
| **10** | `10-performance-optimization` | Optimize bundles, images, fonts, Core Web Vitals, lazy loading, caching | `performance-optimization.md` |

### `github-readme-writer` - Documentation Specialist

Writes high-converting GitHub READMEs using the Daytona open-source framework. Zero em-dashes, zero AI cliches, concrete evidence over adjectives.

---

## File Structure

```text
.agents/skills/
├── backend/
│   ├── SKILL.md
│   ├── references/    (13 files)
│   ├── checklists/    (7 files)
│   └── templates/     (8 files)
└── frontend/
    ├── 00-design-engineer/
    │   ├── SKILL.md
    │   ├── references/    (6 files)
    │   └── templates/     (1 file)
    ├── 01-frontend-architecture/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 02-visual-design/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 03-structural-layout/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 04-ui-components/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 05-ux-interaction-design/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 06-responsive-design/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 07-animations-motion-design/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 08-seo/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 09-accessibility/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    ├── 10-performance-optimization/
    │   ├── SKILL.md
    │   └── references/    (4 files)
    └── github-readme-writer/
        └── SKILL.md
```

### Generated docs (at runtime, in your project):

```text
docs/
├── (Backend generates these first)
│   ├── architecture.md
│   ├── api-contract.md
│   ├── database-design.md
│   ├── implementation-plan.md
│   └── testing-strategy.md
├── (Frontend 00-design-engineer generates these second)
│   ├── DESIGN_BRIEF.md
│   ├── visual-design.md
│   ├── structural-layout.md
│   ├── ui-components.md
│   ├── ux-interaction-design.md
│   ├── responsive-design.md
│   ├── animations-motion-design.md
│   ├── frontend-architecture.md
│   ├── seo.md
│   ├── accessibility.md
│   ├── performance-optimization.md
│   └── reference-and-decision-map.md
```

---

## What Changed in v3.3.2

v3.3.1 shipped three monolith flagship agents (`/frontend-craftsman`, `/backend-architect`, `/ai-engineer`) that each tried to cover an entire engineering tier in one instruction set. v3.3.2 replaces that approach:

- **Monolith agents removed.** The three flagship agents and the Matt Pocock supporting skills have been removed from the shipped skill set.
- **Backend skill added.** A complete, stack-agnostic backend engineering skill with 13 references, 7 checklists, and 8 templates. Produces API contracts and architecture docs that the frontend skills consume.
- **11 numbered frontend skills added.** Each skill has a step number and runs in strict order. The orchestrator (`00-design-engineer`) reads backend docs and produces 10 spec files. Skills `01-10` implement in sequence: foundation first (scaffold, tokens, layouts), then components and pages, then enhancements (responsive, animations, SEO, accessibility, performance).
- **Every skill reads its spec before implementing.** Each generated spec file lives in `docs/` alongside backend docs. Before a skill writes any code, it reads `docs/<its-name>.md` for project-specific decisions.
- **Backend-frontend contract bridge.** The design-engineer orchestrator reads `docs/api-contract.md` and ensures every frontend spec includes a "Backend Integration Points" section with exact endpoints, auth requirements, and data shapes.
- **`github-readme-writer` included.** Daytona open-source framework documentation specialist.
- **Cross-agent compatibility preserved.** The installer still targets Claude Code, Google Antigravity, Cursor, Windsurf, and GitHub Copilot.

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
