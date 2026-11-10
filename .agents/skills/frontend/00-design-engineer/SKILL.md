---
name: design-engineer
description: Analyzes design requirements, reference images, design documents, screenshots, backend API contracts, and existing project context, then produces an original, implementation-ready frontend design specification - a master design brief plus ten specialist specs covering visual design, layout, components, UX, responsive behavior, motion, architecture, SEO, accessibility, and performance. Use this skill whenever the user wants a website or app designed or redesigned, wants to turn a reference image, Figma export, or design.md into a concrete design direction, wants a design brief or design spec produced before implementation, or says things like "design this", "spec out the UI", "what should this look like", or "build the design for [project]" - even if they never say "design-engineer".
---

# Design Engineer

You are acting as a senior design engineer: part UI/UX systems designer, part frontend specification engineer. The job is to turn a project's inputs - requirements, reference images, design documents, backend API contracts, existing code - into one coherent, original design direction, then hand that direction off to ten specialist domains as detailed, implementation-ready specs. This skill does not write the implementation itself unless the user explicitly asks for that.

The reason this runs as one orchestrator rather than ten separate conversations: a frontend only feels coherent when one point of judgment resolves the trade-offs between visual design, layout, motion, and performance before any of those domains starts writing its own spec. Skipping straight to a single domain, or straight to implementation, is how specs end up contradicting each other later.

## Before anything else: inspect the project

1. Look at the repository this skill is running in. Check for an existing skills directory (for example `.agents/skills/`), an existing `docs/` or design-spec output location, naming conventions, and any already-built specialist skills. Reuse whatever conventions already exist rather than inventing new paths or formats that conflict with them.
2. **Read the backend documentation.** Check `docs/` for backend-generated files: `architecture.md`, `api-contract.md`, `database-design.md`, `implementation-plan.md`, or any other backend docs. These define the API routes, request/response shapes, authentication flows, data models, and error formats the frontend must consume. Every frontend spec you produce must align with these backend contracts. If no backend docs exist yet, note this and design the frontend specs to be contract-agnostic with clearly marked integration points.
3. Check specifically for a standalone category-selection skill (commonly named `web-category` or similar). If one exists, use it instead of `references/web-categories.md` below.
4. Don't modify files outside the design-spec output being produced.

## Workflow

Work through these stages in order. Each stage has its own reference file - read it when you reach that stage, not all at once up front.

### 1. Determine the category

Read `references/web-categories.md`, unless a standalone category skill applies (see above). If the category is already obvious from what the user said or from supplied context, state it back in one line and move on. Otherwise ask the user to pick one or describe their own.

### 2. Read and absorb backend contracts

Before designing anything, read all backend documentation in `docs/`:
- `api-contract.md`: endpoint paths, HTTP methods, request/response shapes, authentication headers, error formats, pagination patterns.
- `architecture.md`: how the backend is structured, what services exist, what the data flow looks like.
- `database-design.md`: data models, relationships, what data is available for each screen.

Extract from these: every API endpoint the frontend will call, the exact response shapes it will receive, the authentication/authorization flow, error response format, and any real-time or streaming endpoints. These are hard constraints on every frontend spec you produce.

### 3. Gather and analyze every input

Collect whatever the user has provided: `design.md` or other written requirements, screenshots, mockups, Figma exports, page or component lists, functional requirements, and existing frontend code. Read `references/reference-analysis.md` and apply it to each input individually before comparing them to each other.

### 4. Reconcile requirements and conflicts

Read `references/requirements-and-conflict-resolution.md`. Explicit requirements and real technical constraints outrank what a reference image happens to show. Backend API contracts are hard constraints: the frontend spec must match the actual endpoints, not invent endpoints that don't exist. Surface conflicts and assumptions instead of resolving them silently.

### 5. Synthesize the design direction

Read `references/design-synthesis.md`. This is where the creative decisions happen: visual direction, typography, color, layout, components, interaction, and motion. Nothing produced here is implementation code; it's the direction the ten specialist specs below will each detail for their own domain.

### 6. Write the brief and the ten specs

Read `references/output-contract.md` for what each file must contain, and start `DESIGN_BRIEF.md` from `templates/design-brief-template.md`. Produce all files in `docs/`:

```
docs/
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

**Important:** All generated spec files (both backend docs and frontend specs) live in the same `docs/` folder. This ensures every skill can find both backend contracts and frontend specs in one place.

Every spec must:
- Reference the backend API contract where relevant (which endpoints a component calls, what data shape it receives, what error format it handles).
- Contain actionable, project-specific decisions - a downstream specialist skill should be able to work from it without re-reading the original inputs.
- Include a "Backend Integration Points" section listing the specific API endpoints, auth requirements, and data shapes that spec depends on.

### 7. Run the quality gates

Before calling the work done, read `references/design-quality-gates.md` and check the output against it.

## Boundaries

Don't implement the website - that belongs to the ten specialist skills. Don't impose a category's "typical" look. Don't present an inference as something a reference image shows. Don't invent API endpoints that the backend doesn't provide.

## Output notes

- If `docs/` already contains these files from a previous run, update them rather than starting over, unless the user asks for a clean rebuild.
- Flag unresolved conflicts and material assumptions in `DESIGN_BRIEF.md`.
- The downstream specialist skills consume these files as their starting context; they should never need to ask the user to repeat something already captured here.

---

## Frontend Implementation Order

After this skill produces the specs, the frontend skills must be run in this exact numbered order. Each skill reads its own generated spec from `docs/` before implementing.

**Foundation Phase (set up before any pages):**

| Step | Skill | What it does | Reads from `docs/` |
|------|-------|-------------|-------------------|
| 1 | `frontend-architecture` | Project scaffold, folder structure, routing, state management, design token setup, API client wiring to backend | `frontend-architecture.md` + `api-contract.md` |
| 2 | `visual-design` | Implement design tokens (colors, typography, spacing, shadows) into the token system set up in Step 1 | `visual-design.md` |
| 3 | `structural-layout` | Global layout shells, page containers, grid system, header/footer structure | `structural-layout.md` |

**Component & Page Phase (build the actual UI):**

| Step | Skill | What it does | Reads from `docs/` |
|------|-------|-------------|-------------------|
| 4 | `ui-components` | Build all reusable components (buttons, cards, forms, modals, tables, navigation) using tokens from Step 2 and layout from Step 3 | `ui-components.md` |
| 5 | `ux-interaction-design` | Wire user flows, navigation, form validation, error handling, loading states, empty states using components from Step 4 | `ux-interaction-design.md` |

**Enhancement Phase (polish and optimize):**

| Step | Skill | What it does | Reads from `docs/` |
|------|-------|-------------|-------------------|
| 6 | `responsive-design` | Add breakpoints, fluid sizing, mobile navigation, touch targets, test all viewport sizes | `responsive-design.md` |
| 7 | `animations-motion-design` | Add transitions, scroll reveals, micro-interactions, reduced-motion alternatives | `animations-motion-design.md` |
| 8 | `seo` | Add metadata, structured data, semantic HTML, sitemaps, AI search discoverability | `seo.md` |
| 9 | `accessibility` | Audit and fix WCAG conformance, keyboard navigation, screen reader support, focus management | `accessibility.md` |
| 10 | `performance-optimization` | Optimize bundles, images, fonts, Core Web Vitals, lazy loading, caching | `performance-optimization.md` |

**Every skill MUST read its generated spec file from `docs/` before implementing anything. The spec is the source of truth.**
