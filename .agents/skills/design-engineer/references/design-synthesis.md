# Design Synthesis

Purpose: turn the analyzed, reconciled inputs from the previous two stages into one coherent, original design direction — the thing every specialist spec will implement a piece of.

## What you're deciding here

Visual direction, typography, color system, layout approach, component style, interaction patterns, and motion language — at the level of a direction, not yet full implementation detail (that belongs to the ten specs in `output-contract.md`). Every choice should trace back to something from analysis: a requirement, an observed reference characteristic, a reasonable inference, the product's category and users, or a technical constraint. If a choice doesn't trace back to anything, it's a recommendation — make that explicit rather than presenting it as derived.

## Don't blindly combine references

If the user supplied multiple references with different styles, the job isn't to average them or stitch their surface details together. Decide what this specific project needs and use references selectively to support that decision, not as a collage.

## No default patterns

Don't reach for any of the following as a default just because it's common or looks sophisticated: hero-first layout, bento grid, glassmorphism, gradients, dark theme, oversized typography, animated cursors, or any other currently fashionable pattern. Any of these can be the right choice for a specific project — but only when the project's evidence (requirements, references, category, users) actually supports it. If a pattern is being reached for because it's familiar rather than because something in this project calls for it, that's the signal to reconsider.

Originality here means a direction that fits this project specifically — not a direction that avoids trends for their own sake either. A trend used because it's genuinely right for the product is a fine choice; the same trend used as a reflex is not.

## Working through the decision

For each area (visual direction, typography, color, layout, components, interaction, motion), ask what this project's evidence points to, and whether that conflicts with anything else being decided. Layout and motion choices in particular have knock-on effects on performance and accessibility — keep half an eye on those while deciding here, even though their full detail belongs in their own specs.

## What this produces

A short, coherent statement of the design direction — specific enough that someone reading only `DESIGN_BRIEF.md` understands what this project will look and feel like, and specific enough that the ten specialist specs can each run with their slice of it without inventing their own direction.
