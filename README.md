<div align="center">

<p>
  <a href="#readme"><strong>README</strong></a> •
  <a href="https://rajairfanahmed.github.io/irfanlovefront"><strong>GitHub Pages Docs</strong></a> •
  <a href="CONTRIBUTING.md"><strong>Contributing</strong></a> •
  <a href="CODE_OF_CONDUCT.md"><strong>Code of Conduct</strong></a> •
  <a href="LICENSE"><strong>License</strong></a> •
  <a href="SECURITY.md"><strong>Security</strong></a> •
  <a href="https://github.com/rajairfanahmed/irfanlovefront/releases"><strong>Latest Release v3.3.4</strong></a>
</p>

<a href="https://github.com/rajairfanahmed/irfanlovefront">
  <img src="logo/icon.svg" alt="irfanlovefront logo" width="180" height="180" />
</a>

# irfanlovefront

### Full-Stack PRD, Backend & Frontend Design Engineering Skills Suite (v3.3.4)

**1 PRD skill. 1 backend skill. 11 numbered frontend skills. 70+ deep references. Zero AI slop.**

[![npm version](https://img.shields.io/npm/v/irfanlovefront.svg?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/irfanlovefront)
[![GitHub Packages](https://img.shields.io/badge/GitHub_Packages-@rajairfanahmed/irfanlovefront-24292e.svg?style=flat-square&logo=github)](https://github.com/rajairfanahmed/irfanlovefront/packages)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Documentation-22c55e.svg?style=flat-square&logo=github)](https://rajairfanahmed.github.io/irfanlovefront)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/badge/release-v3.3.4-blue.svg?style=flat-square)](https://github.com/rajairfanahmed/irfanlovefront/releases)
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

The root cause: monolith prompts that attempt to cover discovery, architecture, database schemas, styling, and animations all at once. Monolith prompts cannot hold enough domain depth in any single discipline, and they cannot enforce a disciplined build order. The AI mixes scoping with implementation, jumps straight to building pages before the database schema or layout grid exists, and produces code where styling, layout, and API calls conflict with each other.

**v3.3.4 solves this with a strict three-tier engineering pipeline:**

1. **Product Discovery & PRD Tier (`prd-engineer`)**: An interactive product discovery and full-stack requirements engineer. Uncovers missing constraints, maintains decision status, and produces synchronized `MASTER_PRD.md`, `FRONTEND_PRD.md`, and `BACKEND_PRD.md` in `docs/`.

2. **Backend Engineering Tier (`backend`)**: Stack-agnostic backend planning, architecture, schemas, API contracts, security, testing, and implementation. Runs first before frontend development. Produces `docs/api-contract.md`, `docs/architecture.md`, `docs/database-design.md`, and `docs/implementation-plan.md`.

3. **Numbered Frontend Engineering Tier (`frontend/`)**: A strict 11-step numbered pipeline (`00` through `10`). The orchestrator (`00-design-engineer`) reads the backend contracts and generates 10 domain specs. Then skills `01` through `10` execute in exact sequence: scaffold first, tokens second, layout shells third, components fourth, flows fifth, then responsive, animations, SEO, accessibility, and performance last. Every skill reads its own generated spec from `docs/` before implementing.

---

## Architecture Overview

```text
  +---------------------------------------------------------------------------------+
  |                    IRFANLOVEFRONT v3.3.4 ARCHITECTURE                           |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  [Stage 0: Product Discovery & Requirements Engineering]                        |
  |                                                                                 |
  |  prd-engineer/                                                                  |
  |    Interactive product discovery, scoping & technology stack selection          |
  |    10 references + 5 document templates                                        |
  |    Produces: docs/MASTER_PRD.md, docs/FRONTEND_PRD.md,                          |
  |              docs/BACKEND_PRD.md, docs/DECISION_LOG.md                          |
  |                                                                                 |
  |  [Stage 1: Backend Engineering]                                                 |
  |                                                                                 |
  |  backend/                                                                       |
  |    Stack-agnostic backend engineering & implementation                          |
  |    13 references + 7 checklists + 8 templates                                   |
  |    Produces: docs/api-contract.md, docs/architecture.md,                        |
  |              docs/database-design.md, docs/implementation-plan.md               |
  |    RUNS FIRST. Frontend skills read its contracts.                              |
  |                                                                                 |
  |  [Stage 2: Numbered Frontend Engineering Pipeline]                              |
  |                                                                                 |
  |  00-design-engineer        Reads backend contracts, produces 10 frontend specs   |
  |                                                                                 |
  |  FOUNDATION PHASE (established before any pages):                               |
  |  01-frontend-architecture  Project scaffold, folders, API client, tokens setup  |
  |  02-visual-design          Populate design tokens (colors, fonts, spacing)      |
  |  03-structural-layout      Global layout shells, page containers, grid, header  |
  |                                                                                 |
  |  COMPONENT & PAGE PHASE (build the actual UI):                                  |
  |  04-ui-components          All reusable components, placed in layout sections   |
  |  05-ux-interaction-design  Wire flows, forms to API, navigation, error handling  |
  |                                                                                 |
  |  ENHANCEMENT PHASE (polish and optimize):                                       |
  |  06-responsive-design      Breakpoints, fluid sizing, mobile adaptation         |
  |  07-animations-motion-design  Transitions, scroll reveals, reduced-motion       |
  |  08-seo                    Metadata, structured data, crawlability, sharing     |
  |  09-accessibility          WCAG audit, keyboard nav, screen reader support      |
  |  10-performance-optimization  Bundles, CWV, images, fonts, lazy loading         |
  |                                                                                 |
  |  [Documentation Specialist]                                                     |
  |  github-readme-writer      Daytona framework READMEs, zero em-dashes            |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
  |                                                                                 |
  |  All generated specs (PRD, backend, frontend) live in one folder: docs/         |
  |  Every skill reads its matching spec from docs/ before writing code             |
  |                                                                                 |
  +---------------------------------------------------------------------------------+
```

---

## Development Workflow

**Execute in this exact sequence: PRD first, backend second, frontend third.**

```text
[Stage 0: Product Discovery & PRDs]
prd-engineer  ->  Interactive discovery conversation with user
                  Produces docs/MASTER_PRD.md, docs/FRONTEND_PRD.md,
                  docs/BACKEND_PRD.md, docs/DECISION_LOG.md

[Stage 1: Backend Engineering]
backend       ->  Inspects repository and PRDs
                  Implements backend architecture, database schemas, APIs
                  Produces docs/api-contract.md, docs/architecture.md,
                  docs/database-design.md, docs/implementation-plan.md

[Stage 2: Frontend Design Orchestration]
00-design-engineer  ->  Reads docs/api-contract.md, architecture.md, and PRDs
                        Synthesizes design direction
                        Produces 10 domain spec files in docs/

[Stage 3: Frontend Implementation - Strict Numbered Pipeline]

  FOUNDATION PHASE:
  01-frontend-architecture   ->  Read docs/frontend-architecture.md + docs/api-contract.md
                                 Scaffold project, set up tokens system, wire API client
  02-visual-design           ->  Read docs/visual-design.md
                                 Populate tokens with colors, typography, spacing, shadows
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
                                 Add metadata, structured data, social sharing
  09-accessibility           ->  Read docs/accessibility.md
                                 Audit and fix WCAG, keyboard nav, screen readers
  10-performance-optimization -> Read docs/performance-optimization.md
                                 Optimize bundles, images, fonts, Core Web Vitals
```

**Rule: every skill reads its own spec file from `docs/` before implementing anything.**

---

## 1. Product Requirements Engineering Skill (`prd-engineer`)

Interactive product discovery lead, senior product manager, and solution architect. Leads structured, option-driven discovery instead of generating a one-shot PRD. Maintains decision status and synchronization across frontend and backend.

**Workflow:** Context Inspection -> Project Baseline -> Discussion Mode -> Scope & Requirements -> Feature-by-Feature Definition -> Full-Stack Architecture -> Data & API Contracts -> Non-Functional Requirements -> PRD Review -> Approval & Generation

**Package Structure:**
- `SKILL.md` (authoritative instructions, 217 lines)
- `WORKFLOW.md` (detailed discovery and approval sequence)
- `PACKAGE-INVENTORY.md` (manifest of templates and references)
- `references/` (10 reference documents)
- `templates/` (5 document templates)

| Reference | Purpose |
| :--- | :--- |
| `project-discovery.md` | Problem framing, user personas, value proposition, success criteria |
| `requirements-and-prioritization.md` | User roles, functional requirements, MVP boundary, MoSCoW prioritization |
| `feature-definition.md` | Dual-sided feature definitions connecting user goals with system responses |
| `frontend-prd-specification.md` | Page layouts, UI surfaces, states, accessibility, responsive rules |
| `backend-prd-specification.md` | Server-side business logic, data models, state transitions, security |
| `architecture-and-stack-selection.md` | Full-stack technology evaluation, trade-off analysis, compatibility |
| `integration-contracts.md` | Cross-system boundaries, API endpoints, response shapes, errors |
| `decision-and-change-management.md` | Decision status tracking (`OPEN`, `PROPOSED`, `FINALIZED`), change logs |
| `delivery-planning.md` | Phased implementation roadmap, milestone definitions, dependencies |
| `quality-review-and-readiness.md` | Completeness audit, contradiction detection, implementation readiness |

**Document Templates:**
- `MASTER_PRD.template.md` (product vision, goals, business rules, priorities)
- `FRONTEND_PRD.template.md` (surfaces, component specs, interaction states)
- `BACKEND_PRD.template.md` (API catalog, database entities, business logic)
- `DECISION_LOG.template.md` (decision records with rationale and impact)
- `FEATURE_SPEC.template.md` (detailed single-feature technical contract)

---

## 2. Backend Engineering Skill (`backend`)

Production-oriented, stack-agnostic backend engineering skill. Does not make assumptions about Node.js, Express, Python, Go, PostgreSQL, or MongoDB. Inspects the repository, selects the right stack based on constraints, and implements complete functionality.

**Workflow:** Project Info -> Repository Inspection -> Select Required References -> Read References -> Generate Required Documentation -> Plan -> Implement -> Test -> Integrate -> Review -> Complete

**Package Structure:**
- `SKILL.md` (authoritative operating rules, 289 lines)
- `WORKFLOW.md` (execution sequence and handoff rules)
- `PACKAGE-INVENTORY.md` (manifest of checklists and references)
- `references/` (13 deep engineering references)
- `checklists/` (7 actionable quality gates)
- `templates/` (8 documentation templates)

| Reference | Covers |
| :--- | :--- |
| `backend-fundamentals.md` | Core backend concepts and architecture boundaries |
| `architecture-and-design.md` | Module boundaries, architectural patterns, clean architecture |
| `technology-stack-selection.md` | Language, framework, database selection criteria |
| `database-engineering.md` | Schemas, queries, migrations, transactions, data consistency |
| `api-development.md` | Endpoints, contracts, pagination, versioning, frontend integration |
| `authentication-and-authorization.md` | Sessions, tokens, OAuth2 PKCE, RBAC middleware, recovery |
| `backend-security.md` | Input validation, CORS, rate limiting, security headers, defense in depth |
| `integrations-and-business-logic.md` | External services, payments, email, webhooks, queues, background jobs |
| `error-handling-and-observability.md` | Structured JSON logging, monitoring, tracing, production diagnosis |
| `testing-and-qa.md` | Unit, integration, API endpoint tests, regression fixtures |
| `performance-and-scalability.md` | Caching, connection pooling, scaling, capacity planning |
| `deployment-and-devops.md` | Docker multi-stage builds, CI/CD, cloud hosting, environment setup |
| `documentation.md` | Technical documentation standards and synchronization |

---

## 3. Numbered Frontend Skills Pipeline (`frontend/`)

The frontend skill suite enforces a strict numbered pipeline to guarantee that foundations are completed before pages and components are assembled.

### `00-design-engineer` (Orchestrator)

Reads all project inputs (requirements, reference images, backend API contracts from `docs/`) and produces `DESIGN_BRIEF.md` plus 10 specialist spec files. Runs before any implementation skill. The orchestrator reads `docs/api-contract.md`, `docs/architecture.md`, and PRDs so every frontend spec aligns with the real backend.

**References:** `web-categories.md`, `reference-analysis.md`, `requirements-and-conflict-resolution.md`, `design-synthesis.md`, `output-contract.md`, `design-quality-gates.md`
**Templates:** `design-brief-template.md`, `specialist-spec-template.md`

---

### Foundation Phase (Steps 01-03)

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **01** | `01-frontend-architecture` | Project scaffold, folder structure, routing, state management, design token system setup, API client wiring to backend | `frontend-architecture.md` + `api-contract.md` |
| **02** | `02-visual-design` | Populate the token system with project-specific colors, typography, spacing, shadows, and theming | `visual-design.md` |
| **03** | `03-structural-layout` | Global layout shells, page containers, grid system, header/footer structure, section composition | `structural-layout.md` |

### Component & Page Phase (Steps 04-05)

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **04** | `04-ui-components` | Build all reusable components (buttons, cards, forms, modals, tables, navigation), place in layout sections | `ui-components.md` + `api-contract.md` |
| **05** | `05-ux-interaction-design` | Wire user flows, form submissions to API, navigation behavior, loading/error/empty states | `ux-interaction-design.md` + `api-contract.md` |

### Enhancement Phase (Steps 06-10)

| Step | Skill | What It Does | Reads from `docs/` |
| :---: | :--- | :--- | :--- |
| **06** | `06-responsive-design` | Add breakpoints, fluid sizing, mobile navigation, touch targets, cross-device testing | `responsive-design.md` |
| **07** | `07-animations-motion-design` | Add transitions, scroll reveals, micro-interactions, reduced-motion alternatives | `animations-motion-design.md` |
| **08** | `08-seo` | Add metadata, structured data, semantic HTML, sitemaps, social sharing metadata | `seo.md` |
| **09** | `09-accessibility` | Audit and fix WCAG conformance, keyboard navigation, screen reader support, focus management | `accessibility.md` |
| **10** | `10-performance-optimization` | Optimize bundles, images, fonts, Core Web Vitals, lazy loading, caching | `performance-optimization.md` |

### `github-readme-writer` (Documentation Specialist)

Writes high-converting GitHub READMEs using the Daytona open-source framework. Zero em-dashes, zero AI cliches, concrete evidence over adjectives.

---

## File Structure

```text
.agents/skills/
├── prd-engineer/
│   ├── SKILL.md
│   ├── WORKFLOW.md
│   ├── PACKAGE-INVENTORY.md
│   ├── references/    (10 files)
│   └── templates/     (5 files)
├── backend/
│   ├── SKILL.md
│   ├── WORKFLOW.md
│   ├── PACKAGE-INVENTORY.md
│   ├── references/    (13 files)
│   ├── checklists/    (7 files)
│   └── templates/     (8 files)
└── frontend/
    ├── SKILL.md
    ├── WORKFLOW.md
    ├── PACKAGE-INVENTORY.md
    ├── 00-design-engineer/
    │   ├── SKILL.md
    │   ├── references/    (6 files)
    │   └── templates/     (2 files)
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
        ├── SKILL.md
        └── references/
```

### Unified Runtime Documentation (`docs/`)

All generated specifications and contracts output to one shared directory:

```text
docs/
├── (Stage 0: PRD Engineer generates these)
│   ├── MASTER_PRD.md
│   ├── FRONTEND_PRD.md
│   ├── BACKEND_PRD.md
│   └── DECISION_LOG.md
├── (Stage 1: Backend Engineer generates these)
│   ├── architecture.md
│   ├── api-contract.md
│   ├── database-design.md
│   ├── implementation-plan.md
│   └── testing-strategy.md
└── (Stage 2: Frontend 00-design-engineer generates these)
    ├── DESIGN_BRIEF.md
    ├── visual-design.md
    ├── structural-layout.md
    ├── ui-components.md
    ├── ux-interaction-design.md
    ├── responsive-design.md
    ├── animations-motion-design.md
    ├── frontend-architecture.md
    ├── seo.md
    ├── accessibility.md
    ├── performance-optimization.md
    └── reference-and-decision-map.md
```

---

## Standalone PRD Skill Distribution

For users who want to run the Product Discovery and PRD engineering skill independently (for example in Claude.ai custom skills or personal toolchains), a standalone zip archive is provided at the repository root:

```text
prd-engineer-skill.zip
```

This zip contains the self-contained `prd-engineer/` package with its complete reference suite, templates, and workflow.

---

## What Changed in v3.3.4

- **PRD Engineering skill integrated (`prd-engineer`).** Adds interactive product discovery, requirements scoping, dual-sided feature definitions, full-stack technology evaluation, and synchronized `MASTER_PRD.md`, `FRONTEND_PRD.md`, and `BACKEND_PRD.md`.
- **Standalone `prd-engineer-skill.zip` in root.** Maintained at the root directory for standalone distribution and direct import into AI agent environments.
- **Strict numbered execution order preserved.** The three-stage pipeline (PRD -> Backend -> Numbered Frontend `00-10`) is enforced with strict phase boundaries.
- **Backend-to-frontend contract bridge strengthened.** `00-design-engineer` reads backend contracts from `docs/` and embeds explicit "Backend Integration Points" into every spec.
- **Multi-agent installer updated.** Automatically discovers all 14 skills (`prd-engineer`, `backend-engineering`, and all 12 frontend skills) across Claude Code, Google Antigravity, Cursor (Rules 2.0 `.mdc`), Windsurf (`.windsurf/rules/`), and GitHub Copilot.
- **Clean Git hygiene and zero em-dashes.** Full adherence to the Daytona open-source documentation framework with zero unicode em-dash or en-dash characters.

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
