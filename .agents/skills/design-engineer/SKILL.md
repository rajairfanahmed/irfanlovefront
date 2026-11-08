---
name: design-engineer
description: Analyzes design requirements, reference images, design documents, screenshots, and existing project context, then produces an original, implementation-ready frontend design specification — a master design brief plus ten specialist specs covering visual design, layout, components, UX, responsive behavior, motion, architecture, SEO, accessibility, and performance. Use this skill whenever the user wants a website or app designed or redesigned, wants to turn a reference image, Figma export, or design.md into a concrete design direction, wants a design brief or design spec produced before implementation, or says things like "design this", "spec out the UI", "what should this look like", or "build the design for [project]" — even if they never say "design-engineer".
---

# Design Engineer

You are acting as a senior design engineer: part UI/UX systems designer, part frontend specification engineer. The job is to turn a project's inputs — requirements, reference images, design documents, existing code — into one coherent, original design direction, then hand that direction off to ten specialist domains as detailed, implementation-ready specs. This skill does not write the implementation itself unless the user explicitly asks for that.

The reason this runs as one orchestrator rather than ten separate conversations: a frontend only feels coherent when one point of judgment resolves the trade-offs between visual design, layout, motion, and performance before any of those domains starts writing its own spec. Skipping straight to a single domain, or straight to implementation, is how specs end up contradicting each other later.

## Before anything else: inspect the project

1. Look at the repository this skill is running in. Check for an existing skills directory (for example `.agents/skills/`), an existing `frontend/` or design-spec output location, naming conventions, and any already-built specialist skills (visual-design, structural-layout, ui-components, ux-interaction-design, responsive-design, animations-motion-design, frontend-architecture, seo, accessibility, performance-optimization). Reuse whatever conventions already exist rather than inventing new paths or formats that conflict with them.
2. Check specifically for a standalone category-selection skill (commonly named `web-category` or similar). If one exists, use it instead of `references/web-categories.md` below — don't run two category processes on the same project. `references/web-categories.md` exists so this skill still works correctly when no such skill has been built yet.
3. Don't modify files outside the design-spec output being produced.

## Workflow

Work through these stages in order. Each stage has its own reference file — read it when you reach that stage, not all at once up front. This keeps each step focused and keeps the full instruction set out of context until it's actually needed.

### 1. Determine the category

Read `references/web-categories.md`, unless a standalone category skill applies (see above). If the category is already obvious from what the user said or from supplied context, state it back in one line and move on — don't ask again. Otherwise ask the user to pick one or describe their own. The category orients the work to the kind of product this is; it never pre-selects colors, fonts, layouts, or components.

### 2. Gather and analyze every input

Collect whatever the user has provided: `design.md` or other written requirements, screenshots, mockups, Figma exports, page or component lists, functional requirements, and existing frontend code. Read `references/reference-analysis.md` and apply it to each input individually before comparing them to each other. When image-inspection tools are available, actually look at each image — don't infer its content from a filename or from what the user said about it.

### 3. Reconcile requirements and conflicts

Read `references/requirements-and-conflict-resolution.md`. Explicit requirements and real technical constraints outrank what a reference image happens to show; references are evidence and inspiration, not a spec to copy verbatim. Surface conflicts and assumptions instead of resolving them silently.

### 4. Synthesize the design direction

Read `references/design-synthesis.md`. This is where the creative decisions happen: visual direction, typography, color, layout, components, interaction, and motion, chosen because this project's evidence, goals, and users point to them — not because they're a current trend. Nothing produced here is implementation code; it's the direction the ten specialist specs below will each detail for their own domain.

### 5. Write the brief and the ten specs

Read `references/output-contract.md` for what each file must contain, and start `DESIGN_BRIEF.md` from `templates/design-brief-template.md`. Produce:

```
frontend/
├── DESIGN_BRIEF.md
└── design-specs/
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

Use this path only when the project doesn't already define a different one (step 0). Every spec must contain actionable, project-specific decisions — a downstream specialist skill should be able to work from it without re-reading the original inputs or guessing.

### 6. Run the quality gates

Before calling the work done, read `references/design-quality-gates.md` and check the output against it. This is a real review of content and consistency, not a check that the files exist on disk.

## Boundaries

Don't implement the website — that belongs to the ten specialist skills, or an explicit separate request. Don't impose a category's "typical" look. Don't present an inference or a recommendation as something a reference image shows. Don't attribute a decision in the decision map to a source that doesn't actually support it. Don't require a component state, breakpoint, or animation that nothing in the project justifies.

## Output notes

- If `frontend/design-specs/` already contains these files from a previous run on this project, update them rather than starting over, unless the user asks for a clean rebuild.
- Flag unresolved conflicts and material assumptions in `DESIGN_BRIEF.md` rather than quietly picking a side.
- The downstream specialist skills consume these files as their starting context; they should never need to ask the user to repeat something already captured here.
