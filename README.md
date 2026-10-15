# UI/UX & Frontend Engineering Agent Skills Suite ⚡

An elite, multi-agent frontend engineering ecosystem for Google Antigravity, Claude Code, and modern AI coding assistants. Designed by senior frontend architects to craft bespoke, award-winning web applications with **zero AI-template feel, zero AI-slop, and production-grade craftsmanship**.

---

## 🎨 Creative Freedom & Reference Philosophy (Not Permanent Templates)

The color recipes, surface depths, layout blueprints, and component architectures documented in this suite and in the [Design Bible](file:///d:/uiux/designs/DESIGN-BIBLE.md) are **expansive human inspirations, not permanent or rigid templates**. Agents possess **full creative freedom** to invent bespoke compositions, calibrate tailored color temperatures, and choreograph unique micro-interactions that fit each project's unique brand, content, and mission.

---

## 🏛️ Architecture Overview

Frontend engineering requires distinct cognitive modes: from foundational token mathematics, to creative macro-layout composition, to micro-interaction choreography, to rigorous accessibility and technical SEO auditing. 

This repository provides **four specialized domain skills** plus **one master orchestrator**:

```
                                  ┌─────────────────────────────┐
                                  │      /uiux Orchestrator     │
                                  │   (frontend/PLAN.md Tracker)│
                                  └──────────────┬──────────────┘
                                                 │
         ┌───────────────────────────────┬───────┴───────────────────────┬───────────────────────────────┐
         ▼                               ▼                               ▼                               ▼
 ┌───────────────┐               ┌───────────────┐               ┌───────────────┐               ┌───────────────┐
 │    STAGE 1    │               │    STAGE 2    │               │    STAGE 3    │               │    STAGE 4    │
 │   frontend-   │               │   creative-   │               │  interactive- │               │ experience-   │
 │   architect   │               │    layout-    │               │  component-   │               │  qa-auditor   │
 │               │               │   engineer    │               │   engineer    │               │               │
 ├───────────────┤               ├───────────────┤               ├───────────────┤               ├───────────────┤
 │• Next.js 15   │               │• Macro-Layout │               │• Primitives   │               │• 404 & Errors │
 │• Plan-first   │               │• Tri-Zone Nav │               │• Colocation   │               │• Mobile 320px │
 │• Tokens & CSS │               │• Bespoke Hero │               │• Composable   │               │• Contrast AA  │
 │• Fluid clamp  │               │• Route Shells │               │• GSAP Motion  │               │• JSON-LD SEO  │
 │• Brand SVG    │               │• Design Bible │               │• Tap Fix      │               │• Finish-Gate  │
 │• Favicon      │               │• Lenis Scroll │               │• Skeletons    │               │• Verification │
 └───────────────┘               └───────────────┘               └───────────────┘               └───────────────┘
```

---

## 📝 The Plan-First Workflow (`frontend/PLAN.md`)

Every agent skill creates or updates a structured plan file (`frontend/PLAN.md`) before writing any code:

```markdown
# [Stage Number]: [Milestone / Section Name]

**What to build:**
[Concise description of architecture, tokens, typography, layout, or components]

**Blocked by:**
[Prerequisites or 'None (can start immediately)']

**Status:** ready-for-agent | in-progress | completed

- [ ] Task item 1
- [ ] Task item 2
```

Tasks are checked off as `- [x]` in real time, giving developers complete transparency and auditability over what has been completed.

---

## 🌐 Multi-Page Pipeline Architecture

When building applications with multiple canonical routes (e.g. `/`, `/about`, `/projects`, `/skills`, `/contact`):

1. **Phase 1: Tri-Zone Shell & Shared Layout:** Configure root layout with Lenis, Google Fonts, and persistent Tri-Zone Navbar.
2. **Phase 2: Canonical Route Shells (Zero Dead Links):** Generate lightweight, working shells for all routes so clicking any link immediately functions without 404s.
3. **Phase 3: Deep Page-by-Page Construction:** Build one page at a time with full design depth, guided by `frontend/PLAN.md`.
4. **Phase 4: Cross-Route Polish & SEO:** Audit mobile navigation, breadcrumbs, and canonical metadata.

---

## 🏗️ Frontend UI Engineering Standards

All skills follow rigorous production-grade engineering principles:

- **Component Colocation:** Everything related to a component lives together in its own folder (`Component.tsx`, `Component.test.tsx`, `types.ts`, `useComponentMotion.ts`).
- **Composition Over Configuration:** Prefer composable patterns (`<Card><CardHeader>...</CardHeader></Card>`) over bloated prop configurations.
- **Container vs. Presentation Separation:** Data and state fetching logic lives in hooks or container components; presentation components remain pure.
- **State Hierarchy:** Use the simplest state tier possible: Local state ➔ Lifted state ➔ URL state (`searchParams`) ➔ Server state ➔ Global store. Never prop-drill deeper than 3 levels.
- **Strict WCAG 2.1 AA Accessibility:** Native elements, explicit `aria-label`, visible keyboard focus rings (`:focus-visible`), and escape-key handling.
- **Loading Skeletons:** Use geometry-matching skeleton loaders instead of generic spinners.
- **Eliminating the "AI Aesthetic":** Reject default purple gradients, uniform `rounded-2xl`, generic centered heroes, and fake proof metrics.

---

## ⛔ No Self-Testing Policy (The User Tests)

Agent skills are strictly prohibited from running `npm run dev`, starting background server processes, or using browser subagents to test. **The USER tests on localhost themselves.** The agent's duty is to write clean, syntactically correct, properly configured code and hand over control to the user.

---

## 🎯 The Modern Creative Stack (Always Latest)

| Technology | Standard Version | Role in Architecture |
|---|---|---|
| **Next.js** | `15.x` (App Router) | Server components, edge routing, image optimization, dynamic favicons |
| **TypeScript** | `5.x` (Strict) | Compile-time correctness, strict component props, zero `any` |
| **Tailwind CSS** | Latest | Utility-first styling bounded by semantic CSS variable design tokens |
| **Lenis Scroll** | `@studio-freight/lenis` / `lenis` | High-fidelity smooth inertia scrolling without scroll jank |
| **GSAP** | `3.x` + `ScrollTrigger` | Choreographed scroll reveals, sticky timelines, parallax mechanics |
| **Framer Motion** | `12.x` | Declarative spring physics, micro-interactions, modal transitions |
| **Lucide Icons** | `latest` | Clean, lightweight geometric vector iconography |

---

## 📁 Standardized Directory Layout (`frontend/`)

All application code is strictly isolated inside a dedicated `frontend/` folder:

```
my-project/
├── frontend/                     # Dedicated frontend application directory
│   ├── PLAN.md                   # Real-time task contract & checklist tracker
│   ├── uiux-progress.json        # Machine-readable milestone state tracker
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── icon.svg              # Scalable vector brand mark / monogram
│   │   └── og-preview.png        # Social share card (1200x630)
│   ├── src/
│   │   ├── app/                  # Next.js 15 App Router
│   │   │   ├── layout.tsx        # Root layout with Lenis smooth scroll, fonts, metadata
│   │   │   ├── page.tsx          # Master homepage composition
│   │   │   ├── about/page.tsx    # Narrative route
│   │   │   ├── projects/page.tsx # Directory route
│   │   │   ├── not-found.tsx     # Custom crafted 404 experience
│   │   │   ├── error.tsx         # Resilient error boundary
│   │   │   └── globals.css       # Tailwind directives + design tokens + tap fix
│   │   ├── components/           # Colocated component architecture
│   │   │   ├── ui/               # Primitives (Button, Input, Badge, BrandLogo)
│   │   │   ├── layout/           # Shell elements (Navbar, Footer, SmoothScroll)
│   │   │   └── sections/         # Page sections (Hero, Showcase, Experience)
│   │   ├── hooks/                # Custom React hooks (useLenis, useScrollProgress)
│   │   ├── lib/                  # Utilities (cn, animations, gsapHelper, schema)
│   │   └── types/                # Strict TypeScript interfaces
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
└── (backend / docs / agents)     # Clean separation from frontend code
```

---

## 🤖 The 5 Agent Skills

1. [`frontend-architect`](file:///d:/uiux/.agents/skills/frontend-architect/SKILL.md) (`/frontend-architect`): Stage 1 Foundation, Next.js 15 scaffolding in `frontend/`, mandatory Tailwind verification in `globals.css`, CSS variables, fluid clamp typography, vector `BrandLogo.tsx`, and dynamic `app/icon.tsx`.
2. [`creative-layout-engineer`](file:///d:/uiux/.agents/skills/creative-layout-engineer/SKILL.md) (`/creative-layout`): Stage 2 Macro-Layout, drawing inspiration from [Design Bible](file:///d:/uiux/designs/DESIGN-BIBLE.md), persistent Tri-Zone Navigation, bespoke display typography Hero, and working multi-page route shells.
3. [`interactive-component-engineer`](file:///d:/uiux/.agents/skills/interactive-component-engineer/SKILL.md) (`/component-engineer`): Stage 3 Downstream Sections, strict component colocation, composition over configuration, borderless cards, sharp buttons with sticky tap-highlight fix, and GSAP/Framer motion.
4. [`experience-qa-auditor`](file:///d:/uiux/.agents/skills/experience-qa-auditor/SKILL.md) (`/qa-audit`): Stage 4 Production Hardening, custom 404 and error UX, mobile 320px verification, WCAG AA contrast audit, and JSON-LD structured SEO.
5. [`ui-ux`](file:///d:/uiux/.agents/skills/ui-ux/SKILL.md) (`/uiux`): Master Orchestrator coordinating all 4 stages autonomously via `frontend/PLAN.md`.

---

## 📄 License
MIT © Raja Irfan Ahmed
