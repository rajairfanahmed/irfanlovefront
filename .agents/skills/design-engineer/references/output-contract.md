# Output Contract

Purpose: define exactly what each output file must contain, so the specialist skills that read them later never have to guess, re-derive, or go back to the original inputs.

## General rules for every spec file

- **Actionable, not generic.** Every spec must contain decisions specific to this project, not restated best practices. "Use a type scale" is not a decision; "base size 16px, scale 1.25, six steps" is.
- **No placeholders.** Don't leave a section saying "TBD" or "to be determined by the implementing agent" where a decision was actually available from the inputs. Use the open-questions section of `DESIGN_BRIEF.md` for genuine unknowns instead.
- **Self-contained enough to act on.** A specialist skill reading its one file shouldn't need to re-read the original references or ask the user to repeat context already captured.
- **Cross-reference, don't duplicate.** If two specs share a decision (a spacing token used in both `visual-design.md` and `structural-layout.md`), state it once where it's owned and reference it from the other file, so they can't drift out of sync.
- **Only cover what's relevant.** Don't require a component state, a breakpoint, or a motion pattern the project gives no reason to need.

## Output location

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

Use this location only if the project (see `SKILL.md`, step 0) doesn't already define a different one. If it does, follow the project's convention and keep the same filenames and file boundaries below.

## DESIGN_BRIEF.md

The entry point — written so someone can understand the whole project without opening every spec file.

- Project overview and objectives
- Product category and intended audience
- User needs and functional requirements
- Explicit design constraints
- Overall design direction, with the reasoning from `design-synthesis.md`
- Summary of the major decisions (one or two lines each, with a link to the owning spec)
- Dependencies and cross-domain considerations ("the motion spec assumes the component spec's loading-state design")
- Links to every generated spec
- Assumptions and unresolved questions carried over from `requirements-and-conflict-resolution.md`

Start from `templates/design-brief-template.md`.

## The ten specialist specs

Each entry below is what that file owns. If a decision doesn't clearly belong to one file, put it where someone looking for it would look first, and cross-reference from the other.

**visual-design.md** — color system (with usage rules, not just hex values), typography (families, scale, weights, line-height), visual hierarchy principles, spacing tokens, border and shadow treatment, imagery and iconography direction. No fixed palette or font chosen before the project's own inputs justified it.

**structural-layout.md** — page compositions, section structure per page, content hierarchy, container and grid behavior, alignment and spacing relationships between sections, and page-to-page consistency. Explain why a significant layout choice fits this project, not just what it is.

**ui-components.md** — the components this project actually needs, their variants, hierarchy, and states (hover, focus, active, selected, disabled, loading, error, success) — only the states relevant to each component. Don't invent variants or states nothing in the project calls for.

**ux-interaction-design.md** — user flows, information architecture, navigation behavior, feedback patterns, form behavior and validation, and error recovery.

**responsive-design.md** — mobile-first behavior, fluid sizing, breakpoints chosen for this project (not a fixed list applied automatically), responsive layout and navigation changes, content priority shifts, touch targets, and cross-device behavior. Support viewports from 320px up unless the project has a real reason not to.

**animations-motion-design.md** — only animations the project justifies: trigger, timing, sequencing, transition behavior, what happens when a motion is interrupted, and the reduced-motion alternative for each one. State how each animation affects usability, accessibility, and performance. No motion added purely for polish.

**frontend-architecture.md** — implementation-facing requirements: component boundaries, shared design tokens, where components are reused across the project, state and interaction responsibilities, responsive implementation notes, and cross-page consistency rules. Respect the project's existing stack unless the user asked for a change or a documented constraint requires one.

**seo.md** — technical SEO relevant to this project: semantic document structure, metadata, canonical URLs, indexing, structured data, internal linking, social metadata, rendering considerations, and AI-search discoverability. State requirements, not guarantees — never promise a ranking, a universal AI-search result, or a specific score.

**accessibility.md** — applicable requirements: semantic HTML, keyboard behavior, visible focus states, accessible forms, contrast, screen-reader support, motion preferences, and the relevant WCAG 2.2 criteria for this project.

**performance-optimization.md** — requirements for rendering, loading, images, fonts, assets, JavaScript, animation cost, layout stability, and Core Web Vitals targets appropriate to this project. Use measurable numbers where reasonably possible, and mark anything that can only be confirmed after implementation as a post-implementation check rather than a design-time fact.

## reference-and-decision-map.md

Traceability for every decision that materially shaped the design. For each significant decision, record what was decided and its source: a user requirement, a specific design document, a specific reference image and what it showed, an existing codebase constraint, an accessibility or performance requirement, or a professional recommendation. Where useful, also note a rejected alternative and why.

Never attribute a decision to an image or document that doesn't actually support it. If no real source exists, tag it `[RECOMMENDED]` (see `reference-analysis.md`) and say so plainly.

## Handoff to the ten specialist skills

These files are written so that a specialist skill — visual design, structural layout, UI components, UX & interaction, responsive design, animations & motion, frontend architecture, SEO, accessibility, or performance — can read its one file and start work without re-reading the original inputs or asking the user to repeat anything already decided here. Write for the agent that will consume the file next, not just for a human skimming it once.
