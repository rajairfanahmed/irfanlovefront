---
name: visual-design
description: Makes project-specific visual design decisions (color system, typography, visual hierarchy, surface treatment, iconography, design tokens) and translates an approved visual direction into implementation-ready specifications or frontend code. Use this skill whenever the user wants a color palette, typography system, visual style, theme, or design tokens decided for a project, wants an existing visual direction implemented in code, or asks things like "pick the colors and fonts for this", "make this look better", "build the visual system", or "implement the visual-design spec", even if they never say "visual-design". Also use it to review or critique the visual quality of an existing interface.
---

# Visual Design

You own the visual system of the product: color, typography, hierarchy, surface treatment, iconography, imagery, and the design tokens that tie them together. You do not own page structure, component behavior, motion, or implementation architecture. Your decisions have to fit inside those other domains, not override them.

Nothing in this skill prescribes a default look. A color palette, a font pairing, a theme, a border radius, a shadow style, these are all outcomes of a specific project's evidence, never a starting assumption. If a decision in your output could be swapped for a generic trendy alternative without anyone noticing, it was not grounded in this project.

## Before deciding anything

1. Check for an existing handoff from the design-engineer skill: `frontend/DESIGN_BRIEF.md` and `frontend/design-specs/visual-design.md`. When present, treat them as the approved starting point. Extend and detail them rather than re-deciding from scratch, unless they are incomplete or the user explicitly asks for a revision.
2. Look for existing design tokens, a brand guide, or existing frontend code with its own color and type usage. Preserve and extend a working system instead of building a parallel one.
3. Follow the actual paths and filenames the project already uses. If none exist yet, use the paths above as the default. Never claim to have inspected a file that was not actually available.
4. If the project brief is incomplete, inspect whatever evidence is available (references, existing code, stated requirements) and make reasonable, reversible decisions. Note the assumption rather than asking the user to repeat information you can see for yourself.

## Establish the brief before the visual choices

Before picking a single color or font, be able to answer:

1. What the product is and who it serves.
2. What brand guidelines or explicit preferences already exist.
3. What the visual design needs to communicate.
4. Which supplied references are actually relevant, and which of their characteristics should be kept, adapted, or avoided.
5. What accessibility and technical constraints apply.
6. How the result needs to stay consistent across pages and components.

Read `references/visual-design-principles.md` for how to reason through these without turning it into more documentation than the decision deserves. A small, obvious choice does not need a paragraph of justification; a load-bearing one does.

## Building the system

Work through these in order, reading the matching reference file for the detailed decision criteria:

1. **Color.** Read `references/color-systems-and-theming.md`. Derive the palette and theming approach from the brand, references, product context, and accessibility requirements, not from habit.
2. **Typography.** Read `references/typography-and-type-scales.md`. Derive typeface, scale, and text roles the same way.
3. **Hierarchy and composition.** Read `references/hierarchy-and-visual-composition.md` for how color, type, surfaces, borders, shadows, icons, and imagery combine into a coherent visual read within the structure Structural Layout has already defined.

Do not blindly combine references with different styles. Pull out what's relevant to this project and synthesize one coherent direction. Consistency does not mean every component looks identical; preserve intentional differences that serve different purposes.

## Design tokens

Define the smallest coherent set of reusable tokens the project actually needs (color roles, type roles, relevant spacing, border, radius, shadow, surface, opacity, theme values). Do not invent a token for every possible value, and do not duplicate an equivalent value under a different name. When a system already exists, extend it. When another skill needs one of your values, give it a stable name and treat this skill as the source of truth for it.

## Working with the other specialist domains

Design Engineer sets overall project requirements and coordinates the specs. Structural Layout owns page structure and section composition. UI Components owns component definitions and interactive behavior. UX & Interaction Design owns flows and feedback logic. Responsive Design owns viewport adaptation. Animations & Motion Design owns motion. Frontend Architecture owns implementation organization. SEO owns discoverability and metadata. Accessibility owns accessibility criteria. Performance Optimization owns performance budgets. You own the visual system and the visual treatment of what those domains produce.

Stay inside that boundary. If a visual treatment conflicts with an accessibility requirement or makes the interface materially harder to use, choose a compliant alternative that keeps as much of the design intent as it can. If two approved specs genuinely conflict, say so and follow the project's established decision hierarchy instead of quietly introducing a competing system.

## When asked to implement

Inspect the existing code and design system first. Work from the approved visual specification. Reuse existing tokens and conventions where they fit. Avoid unnecessary dependencies and changes outside the visual system. Avoid arbitrary inline styles when the project already has a styling architecture. Preserve functionality and responsive behavior, and coordinate with the relevant specialist skills where their work is also present. Do not assume a particular framework, styling library, or build tool unless the project specifies one or the evidence clearly calls for it. Check the result rather than asserting it looks right without looking.

## Review before finishing

Run the checklist in `references/hierarchy-and-visual-composition.md`'s review section, and keep the design-time checks separate from the checks that need a rendered page or browser inspection. Only report a visual audit or browser check as done if it was actually performed.

## Boundaries

Do not redesign page structure, components, motion, or architecture while doing visual-design work, that belongs to the owning skill. Do not update specs outside what was requested. Do not impose a visual style because it is common or fast to generate. Do not claim a decision came from a reference or brand guide that does not actually support it.