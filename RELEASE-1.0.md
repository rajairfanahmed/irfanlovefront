# Release 1.0.0: UI/UX & Frontend Engineering Agent Suite Documentation

**Release Version:** `1.0.0`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## 1. What is the UI/UX & Frontend Engineering Suite?

The UI/UX & Frontend Engineering Suite is an agentic, multi-stage engineering framework for Google Antigravity, Claude Code, and modern AI coding assistants. It is designed to replace generic, repetitive LLM design output with bespoke, human-grade frontend applications.

The framework enforces:
- **Zero AI-Template Feel:** Eliminates repetitive dark-slate cards and centered text walls.
- **The Deterministic Entropy Engine:** Mathematically forces variety across consecutive projects using prompt-length modulo math.
- **Single-Project Spatial Consistency:** Guarantees standardized page shells, fixed header Y-axis alignment, and zero layout shift across canonical routes (`/about`, `/projects`, `/skills`, `/contact`).
- **The 2-Line Iron Rule:** Mandates wide containers (`max-w-5xl/6xl`) and fluid clamp scales so hero headlines never wrap into 4-line blocks on desktop.
- **Gapless Bento Grids:** Enforces Tailwind `grid-flow-dense` and interlocking spans with zero dead cell gaps.
- **Machined Hardware Surfaces:** Implements double-bezel concentric enclosure math.
- **Kinetic Micro-Interactions:** Button-in-button nested trailing icon circles with spring physics.
- **Complete Em-Dash Ban:** Enforces zero em-dash and zero en-dash characters across all files and UI copy.

---

## 2. The 7 Specialized Agent Skills

The suite consists of **five core engineering stages** and **two specialized auxiliary skills**:

| Skill Name | Invocation Slash Command | Cognitive Role | Key Outputs |
|---|---|---|---|
| **ui-ux** | `/uiux` | Master Orchestrator | Plans and coordinates Stages 1 through 4 via `frontend/PLAN.md` |
| **frontend-architect** | `/frontend-architect` | Stage 1 Foundation & Architecture | Scaffold Next.js 15, tokens, clamp type, SVG BrandLogo, Lenis scroll |
| **creative-layout-engineer** | `/creative-layout` | Stage 2 Macro-Layout & Hero Craft | 2-line hero, 4 hero archetypes, gapless bento, route shells |
| **interactive-component-engineer** | `/component-engineer` | Stage 3 Components & Motion | Double-bezel cards, button-in-button CTAs, 5 GSAP paradigms |
| **experience-qa-auditor** | `/qa-audit` | Stage 4 Production Hardening | 45+ Pre-Flight Check, custom 404/error UX, mobile 320px, JSON-LD SEO |
| **build-error-resolver** | `/build-error-resolver` | Auxiliary Build Recovery | Zero-refactor fixes for TypeScript and Next.js compilation errors |
| **github-readme-writer** | `/github-readme-writer` | Auxiliary Technical Documentation | Operator-voice READMEs, launch articles, case studies, zero clichés |

---

## 3. End-to-End Execution Guide

### Option A: Autonomous Orchestration (Recommended)
To run the full end-to-end development lifecycle automatically, invoke the master orchestrator:

```text
/uiux Build a high-performance web platform for a real-time aerospace telemetry dashboard.
```

The orchestrator executes the four stages sequentially:
1. Stage 0 & 1: Runs deterministic entropy, infers design read, sets dials, scaffolds Next.js 15 inside `frontend/`, and configures design tokens and SVG brand marks.
2. Stage 2: Builds the tri-zone navigation bar, 2-line hero section, gapless bento grid, and multi-page canonical route shells.
3. Stage 3: Engineers downstream showcase sections with double-bezel cards, button-in-button CTAs, and GSAP motion timelines.
4. Stage 4: Conducts mobile 320px verification, builds custom 404 and error boundaries, injects JSON-LD SEO schema, and signs off the 45+ Pre-Flight Check.

---

### Option B: Step-by-Step Stage Execution

For maximum manual control, invoke each specialist independently:

#### Step 1: Initialize Foundation & Scaffolding
```text
/frontend-architect
```
- Inactive files are left untouched; work begins strictly in `frontend/`.
- Determines the project seed (0 to 5) to select one of six calibrated substrate palettes and font stacks.
- Configures Tailwind CSS, Double-Bezel radii tokens, and fluid clamp typography in `globals.css`.
- Builds the container-constrained `BrandLogo.tsx`, dynamic `app/icon.tsx`, and `public/icon.svg`.
- Configures Lenis smooth scrolling in `layout.tsx`.

#### Step 2: Craft Macro-Layout & Navigation
```text
/creative-layout
```
- Implements persistent single-line `Navbar.tsx` (desktop height <= 80px).
- Builds the bespoke Hero Section enforcing the 2-Line Iron Rule (`max-w-5xl/6xl`, top padding <= `pt-24`).
- Implements the feature grid using Tailwind `grid-flow-dense` and interlocking cell spans.
- Generates working canonical route shells (`/about`, `/projects`, `/skills`, `/contact`) with identical header Y-axis alignment (`pt-28`).

#### Step 3: Implement Interactive Components & Motion
```text
/component-engineer
```
- Constructs `Button.tsx` with nested trailing icon pills and diagonal hover physics.
- Builds downstream sections (`ShowcaseSection.tsx`, `ExperienceSection.tsx`, `ContactSection.tsx`).
- Wraps cards in Double-Bezel hardware enclosures.
- Adds GSAP ScrollTrigger timelines (Sticky-Stack, Split Pinned Gallery, Image Scale & Fade, or Scrubbing Text).
- Enforces page-wide overflow protection: `<main className="overflow-x-hidden w-full max-w-full">`.

#### Step 4: Production Hardening, 404 & SEO
```text
/qa-audit
```
- Implements custom, branded `not-found.tsx` and client `error.tsx` boundary with `reset()` handler.
- Audits mobile responsiveness down to 320px viewport width (zero horizontal scrollbars).
- Audits WCAG AA contrast (>= 4.5:1) and visible keyboard focus rings.
- Injects Next.js 15 metadata and JSON-LD structured schema.
- Executes the complete 45+ Pre-Flight Check.

---

### Option C: Auxiliary Workflows

#### Fixing Build or TypeScript Errors
When compilation or TypeScript errors occur:
```text
/build-error-resolver
```
- Inspects `npx tsc --noEmit` and build logs.
- Applies the absolute smallest surgical diff (< 5% of affected files) to make the build pass.
- Never refactors unrelated code or alters application architecture.

#### Writing Documentation or Launch Posts
When generating documentation for a completed project:
```text
/github-readme-writer
```
- Leads with concrete architecture, code snippets, and feature proof.
- Eliminates AI marketing clichés ("cutting-edge", "game-changer", "seamless", "delve").
- Generates clean GitHub READMEs, case studies, or release announcements with zero em-dashes.

---

## 4. The Deterministic Selection Matrix

To break statistical LLM bias, Stage 0 calculates:
```text
seed = len(user_prompt) % 6
```

| Seed | Aesthetic Direction | Substrate Canvas | Typography Stack | Hero Archetype | GSAP Paradigm |
|---|---|---|---|---|---|
| **0** | Ethereal Glass | `#050505` OLED Black | Satoshi + Cabinet Grotesk | Cinematic Center | Sticky-Stack Cards |
| **1** | Swiss Industrial Print | `#F4F4F0` Paper + Red | Archivo Black + JetBrains Mono | Tactical Blueprint | Horizontal Accordion |
| **2** | Warm Utilitarian Minimalist | `#F7F6F3` Bone + Pastels | Newsreader + Neue Montreal | Editorial Split | Inline Typography Images |
| **3** | Tactical Telemetry CRT | `#0A0A0A` CRT + Phosphor | Space Mono + Roboto Flex | Telemetry Frame | Scrubbing Sequential Text |
| **4** | Cold Luxury Navy | `#060B14` Midnight Slate | Outfit + Plus Jakarta Sans | Artistic Asymmetry | Image Scale & Fade |
| **5** | Editorial Luxury | `#FDFBF7` Cream + Sage | Playfair Display + Geist Sans | Pinned Split Gallery | Card Stacking Timeline |

---

## 5. Non-Commercial License & Contribution Terms

This suite is distributed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License (CC BY-NC-SA 4.0)**.

### Permitted Uses:
- **Free Exploration & Learning:** You are free to inspect, study, and run the agent skills.
- **Contributions & Enhancements:** You are encouraged to fork the repository, enhance rules, fix bugs, and submit Pull Requests back to the community.
- **Personal & Non-Commercial Projects:** You may build non-commercial personal projects and academic prototypes.

### Prohibited Uses:
- **No Commercial Resale or Sublicensing:** You may NOT package, sell, redistribute, or monetize these agent skills for financial gain.
- **No Paid Skill Bundles:** You may NOT sell access to this skill suite behind paid paywalls, course memberships, or commercial developer tool marketplaces without explicit written authorization from Raja Irfan Ahmed.

---

## 6. Alternative Open-Source & Source-Available Licenses Explained

For developers evaluating licensing models for similar toolkits:

1. **PolyForm Noncommercial License 1.0.0:**
   A simple, plain-language source-available license that explicitly permits any use except commercial activities. Ideal for developer tools intended solely for community and non-commercial benefit.
2. **Business Source License 1.1 (BSL / BUSL):**
   A source-available license used by platforms like Sentry and CockroachDB. It permits non-production use and automatically converts into a pure open-source license (like Apache 2.0) after a fixed duration (e.g. 3 to 4 years).
3. **MIT License with Non-Commercial Rider (Commons Clause):**
   Adds a commercial sale restriction condition to the standard MIT license, preventing third parties from selling the software directly.
