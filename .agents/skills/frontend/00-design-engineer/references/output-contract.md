# Output Contract

Purpose: define exactly what each output file must contain, so the specialist skills that read them later never have to guess, re-derive, or go back to the original inputs.

## General rules for every spec file

- **Actionable, not generic.** Every spec must contain decisions specific to this project, not restated best practices. "Use a type scale" is not a decision; "base size 16px, scale 1.25, six steps" is.
- **No placeholders.** Don't leave a section saying "TBD" or "to be determined by the implementing agent" where a decision was actually available from the inputs. Use the open-questions section of `DESIGN_BRIEF.md` for genuine unknowns instead.
- **Self-contained enough to act on.** A specialist skill reading its one file shouldn't need to re-read the original references or ask the user to repeat context already captured.
- **Cross-reference, don't duplicate.** If two specs share a decision (a spacing token used in both `visual-design.md` and `structural-layout.md`), state it once where it's owned and reference it from the other file, so they can't drift out of sync.
- **Only cover what's relevant.** Don't require a component state, a breakpoint, or a motion pattern the project gives no reason to need.
- **Backend-aware.** Every spec that touches data, API calls, authentication, or error handling must reference the actual backend contracts from `docs/api-contract.md` and `docs/architecture.md`. Do not invent endpoints or data shapes the backend doesn't provide.

## Output location

All files go in `docs/` alongside any backend documentation already there:

```
docs/
├── (backend files - already present)
│   ├── architecture.md
│   ├── api-contract.md
│   ├── database-design.md
│   ├── implementation-plan.md
│   └── ...
├── (frontend specs - produced by design-engineer)
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

Use this location unless the project already defines a different convention. Both backend and frontend documentation live in the same `docs/` folder so every skill can find everything in one place.

## DESIGN_BRIEF.md

The entry point - written so someone can understand the whole project without opening every spec file.

- Project overview and objectives
- Product category and intended audience
- User needs and functional requirements
- Explicit design constraints
- Overall design direction, with the reasoning from `design-synthesis.md`
- **Backend integration summary:** list of all API endpoints the frontend consumes, authentication flow, error response format, and any real-time/streaming endpoints
- Summary of the major decisions (one or two lines each, with a link to the owning spec)
- Dependencies and cross-domain considerations
- Links to every generated spec (and to backend docs)
- Assumptions and unresolved questions carried over from `requirements-and-conflict-resolution.md`

Start from `templates/design-brief-template.md`.

## The ten specialist specs

Each entry below is what that file owns. If a decision doesn't clearly belong to one file, put it where someone looking for it would look first, and cross-reference from the other.

**Every spec must include a "Backend Integration Points" section** listing the specific API endpoints, request/response shapes, auth requirements, and error formats relevant to that domain. This section is what connects the frontend spec to the actual backend.

**visual-design.md** - color system (with usage rules, not just hex values), typography (families, scale, weights, line-height), visual hierarchy principles, spacing tokens, border and shadow treatment, imagery and iconography direction.

**structural-layout.md** - page compositions, section structure per page, content hierarchy, container and grid behavior, alignment and spacing relationships between sections, and page-to-page consistency.

**ui-components.md** - the components this project actually needs, their variants, hierarchy, and states (hover, focus, active, selected, disabled, loading, error, success). For each component that displays or submits data, specify which API endpoint it uses and the exact data shape from `api-contract.md`.

**ux-interaction-design.md** - user flows, information architecture, navigation behavior, feedback patterns, form behavior and validation, and error recovery. Map each flow to the backend endpoints it traverses.

**responsive-design.md** - mobile-first behavior, fluid sizing, breakpoints chosen for this project, responsive layout and navigation changes, content priority shifts, touch targets, and cross-device behavior.

**animations-motion-design.md** - only animations the project justifies: trigger, timing, sequencing, transition behavior, what happens when a motion is interrupted, and the reduced-motion alternative for each one.

**frontend-architecture.md** - implementation-facing requirements: component boundaries, shared design tokens, where components are reused across the project, state and interaction responsibilities, API client setup (base URL, auth headers, error interceptor), data fetching strategy, and cross-page consistency rules.

**seo.md** - technical SEO relevant to this project: semantic document structure, metadata, canonical URLs, indexing, structured data, internal linking, social metadata, rendering considerations, and AI-search discoverability.

**accessibility.md** - applicable requirements: semantic HTML, keyboard behavior, visible focus states, accessible forms, contrast, screen-reader support, motion preferences, and the relevant WCAG 2.2 criteria.

**performance-optimization.md** - requirements for rendering, loading, images, fonts, assets, JavaScript, animation cost, layout stability, and Core Web Vitals targets.

## reference-and-decision-map.md

Traceability for every decision that materially shaped the design. For each significant decision, record what was decided and its source.

## Handoff to the ten specialist skills

These files are written so that a specialist skill can read its one file and start implementation without re-reading the original inputs or asking the user to repeat anything already decided here. Write for the agent that will consume the file next, not just for a human skimming it once.

**The implementation order is fixed:**
1. frontend-architecture (scaffold, tokens setup, API client)
2. visual-design (implement tokens)
3. structural-layout (global layouts, page shells)
4. ui-components (all reusable components)
5. ux-interaction-design (wire flows, forms, navigation)
6. responsive-design (breakpoints, mobile adaptation)
7. animations-motion-design (transitions, scroll effects)
8. seo (metadata, structured data)
9. accessibility (WCAG audit, keyboard nav)
10. performance-optimization (bundles, CWV, assets)

Each spec should be written knowing which skills run before it and which run after it.
