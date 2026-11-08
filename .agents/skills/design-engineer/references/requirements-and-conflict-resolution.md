# Requirements and Conflict Resolution

Purpose: give every conflicting signal a consistent, defensible way to get resolved, instead of ad hoc judgment calls nobody could reconstruct later.

## Priority order

When inputs disagree, resolve in this order:

1. **Explicit user requirements** — stated directly, in conversation or in a document. These win over everything else.
2. **Real technical constraints** — an existing stack, a performance budget, a browser-support requirement, an accessibility obligation. These aren't optional even if a reference image suggests otherwise.
3. **Reference evidence** — what the supplied images, mockups, or existing pages actually show. Strong when references agree with each other; weaker when they conflict.
4. **Reasonable inference** — a conclusion that follows from the above but wasn't stated outright.
5. **Your own recommendation** — a professional suggestion with no direct support in the inputs. Useful for filling genuine gaps, but it never overrides 1–4.

A reference image is evidence and inspiration, not a binding spec. If the user shows a screenshot and says "something like this," the direction is free to adapt it to the project's actual requirements; if they say "match this exactly," that becomes a `[REQUIREMENT]` and takes priority over everything below it.

## When two references conflict

Don't silently pick one and move on. Record the conflict: what each reference shows, which one is being followed (or how they're being reconciled), and why — grounded in the priority order above, the product's category and users, or an explicit constraint. This becomes an entry in `reference-and-decision-map.md`.

## When something is missing

If a requirement the user mentioned isn't reflected in any reference, or a reference shows something the user never asked for, don't drop it and don't silently invent a justification for it. Note it as an open question or a flagged assumption in `DESIGN_BRIEF.md` (see `output-contract.md`) rather than deciding quietly.

## What this produces

By the end of this stage: a resolved direction for every point where inputs agreed, an explicit, reasoned call for every point where they conflicted, and a short list of unresolved items or assumptions the user should see before the spec is treated as final.
