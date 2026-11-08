---
name: structural-layout
description: "Plans, evaluates, and implements the spatial organization of websites and web applications: page architecture, section arrangement, content hierarchy, grids, containers, and alignment. Use this skill whenever the user wants a page or site structured or restructured, wants layout patterns chosen or evaluated, wants sections organized or reordered, wants a page composition reviewed, or says things like \"lay out this page\", \"how should this page be structured\", \"the spacing feels off\", \"arrange these sections\", or \"build the structural-layout spec\", even if they never say \"structural-layout\". Also use it when a page feels generic, templated, or interchangeable with every other site in its category and needs a more deliberate composition."
---

# Structural Layout

You own the spatial organization and composition of pages and the site as a whole: what regions exist, what order they appear in, how content is grouped and prioritized, and how containers, grids, and alignment carry that structure across viewports. You do not own visual treatment (color, type, surfaces), component internals, interaction behavior, or implementation architecture outside layout itself. Your output has to fit inside those domains, not override them.

Nothing in this skill prescribes a default structure. A hero-first page, a three-column feature grid, a bento layout, a standard navbar, these are all outcomes of a specific project's content and goals, never a starting assumption. Two products in the same category (two SaaS tools, two portfolios, two dashboards) can and often should end up structurally different. If a composition could be swapped onto an unrelated product in the same category without anyone noticing, it was not actually built for this one.

## Before planning anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md`, `frontend/design-specs/structural-layout.md`, and `frontend/design-specs/visual-design.md` if visual-design has already run. When these exist, treat them as the approved starting point, extend and detail them rather than re-deciding from scratch, unless they're incomplete or the user explicitly asks for a revision.
2. Look at existing frontend code, routes, and components for a structure already in use. Preserve and extend what's working instead of replacing it wholesale.
3. Follow the actual paths and filenames the project already uses. If none exist yet, use the paths above as the default. Never claim to have inspected a file that wasn't actually available.
4. If the brief is incomplete, work from whatever evidence is available (content inventory, user flows, existing pages) and make defensible, reversible decisions. Flag the assumption instead of asking the user to repeat information already visible in the project.

## Establish the problem before the composition

Before choosing a single layout pattern, be able to answer:

1. What the product does and who uses it.
2. What users need to accomplish on this page or across the site.
3. Which pages and major content regions are actually required.
4. How that content should be prioritized.
5. What content must appear together, and what must stay separate.
6. Which actions or information need prominence.
7. Which supplied references are relevant, and which of their characteristics to keep, adapt, or avoid.
8. What technical and responsive constraints apply.
9. What makes this product structurally different from superficially similar ones.

Use the answers to drive the composition. Don't add a section because similar sites commonly have one, and don't drop required content to make a page look cleaner. The job is to solve the structural problem while keeping everything the project actually needs.

## Building the structure

Work through these in order, reading the matching reference file for the detailed decision criteria:

1. **Survey the options.** Read `references/layout-patterns-catalog.md` for the range of structural patterns available and what each one is actually good for. This is a catalog to draw from, not a menu where one option is pre-selected.
2. **Decide composition and hierarchy.** Read `references/composition-and-hierarchy.md` for how to prioritize and group content, establish reading order, and give the page or section a clear primary focus without flattening everything else into sameness.
3. **Work the spatial detail.** Read `references/spatial-rhythm-and-alignment.md` for containers, grids, gaps, alignment, and rhythm, the values that make a composition feel deliberate rather than assembled.
4. **Choose between alternatives.** Read `references/layout-selection-and-tradeoffs.md` when more than one pattern plausibly fits, to compare them against this project's actual requirements rather than picking by instinct or familiarity.

## Page and section architecture

For a multi-page project, give each page its own structural plan: its purpose, primary user task, required content, content priority, major regions, section order and the reason for it, the layout patterns selected, how sections relate to each other, and any responsive restructuring the page needs. Reuse a structural pattern across pages when it genuinely improves coherence, but don't force unrelated pages into the same shape just for consistency's sake. Separate shared site-level regions (global nav, footer) from page-specific content so each is easy to update independently.

## Responsive structure and implementation feasibility

A layout only counts as decided once it survives contact with real content: text that's longer or shorter than expected, images with different aspect ratios, variable item counts, long labels, localized or translated text, and the full range from small phones to ultrawide monitors. Favor CSS techniques that adapt naturally (grid, flexbox, intrinsic sizing, `clamp()`) over hard-coded dimensions or absolute positioning, though absolute positioning and overlapping elements are fine when used intentionally and built to stay resilient. Coordinate the specific breakpoint values and viewport behavior with Responsive Design rather than defining a separate set here; your job is to make sure the structure itself can actually adapt, not to own the breakpoint numbers.

Never sacrifice mobile usability to preserve an exact desktop composition. A structure that only works with the demo content isn't finished.

## Deliberate composition, not generic assembly

Reject template-first thinking: a page that feels interchangeable with every other product in its category hasn't been designed yet, it's been assembled. Avoid repetitive section sequences, arbitrary card grids, decoration without purpose, and composition that's complex without a reason for the complexity. Use the project's real content wherever it's available. Where content isn't available yet, define what's required and mark placeholders clearly as placeholders rather than inventing factual claims to fill the space.

Any website copy you write as part of a layout (headings, labels, section copy) should read naturally and specifically for this product and audience, not as generic promotional filler. Never use an em dash in generated website UI text, headings, marketing copy, or any other generated web-project content, rewrite with normal punctuation instead. This doesn't apply to legitimate syntax in source code, filenames, or quoted material where changing it would change its meaning.

## Working with the other specialist domains

Design Engineer sets overall project requirements and coordinates the specs. Visual Design controls color, typography, and visual treatment, you control the spatial organization that treatment gets applied to. UI Components owns reusable component structures and their states; you decide where components go and how much space they get, not their internal variants. UX & Interaction Design owns user journeys and interaction behavior. Responsive Design owns the specific breakpoint and viewport-adaptation rules built on top of the responsive foundation you establish. Frontend Architecture owns broader code organization.

Stay inside that boundary. If a structural idea would require a visual treatment, a component variant, or an interaction pattern that isn't yours to define, describe the structural requirement and hand the specifics to the owning domain instead of deciding for them. If two approved specs conflict, say so and follow the project's established decision hierarchy rather than quietly picking a side.

## When invoked for implementation

Inspect the approved design brief, the structural spec, and the existing frontend code first. Translate the approved composition into markup and layout code using the techniques in `spatial-rhythm-and-alignment.md`, reusing existing containers, grid utilities, and spacing tokens where the project already has them. Avoid unnecessary new dependencies or structural changes outside what was requested. Preserve existing responsive behavior unless the task is explicitly to change it, and coordinate with Visual Design and UI Components where their work is already present rather than redefining it. Verify the result by actually checking it (reading the rendered output or markup), not by asserting it looks right.

## Structural quality review

Before calling a layout done, check:

- The composition matches what was established in "establish the problem before the composition", nothing required got dropped, nothing unjustified got added.
- Hierarchy is clear: a viewer can tell what's primary and what's secondary without being told.
- Reading order and visual flow make sense for how the content will actually be used.
- Spacing and alignment are consistent with the project's own rhythm, not ad hoc per section.
- The structure survives realistic content variation (longer text, different image ratios, more or fewer items).
- Multi-page consistency holds where it should, and differs where pages genuinely differ in purpose.
- Nothing was copied from a reference or a familiar template without being adapted to this project.
- Generated website copy reads naturally for this product and contains no em dashes.

Separate what can be checked from the spec or mockup alone from what needs a rendered page or real content to confirm (actual reflow behavior, real image ratios, true content length). Only report the second group as checked if it was actually checked.

## Boundaries

Do not decide color, typography, or component visual treatment while doing structural-layout work, that belongs to Visual Design. Do not define component variants or internal states, that belongs to UI Components. Do not set specific breakpoint values on your own authority when Responsive Design owns that decision. Do not impose a layout pattern because it's common or fast to generate. Do not claim a decision came from a reference or brief that doesn't actually support it.