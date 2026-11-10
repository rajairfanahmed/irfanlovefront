# Design Quality Gates

Purpose: a real check before calling the work done — content and consistency, not just "do the files exist."

Run through these before finishing:

- Every supplied input (document, image, mockup, existing code) was actually considered in the analysis, not just the first one.
- Every explicit requirement the user stated is accounted for somewhere in the output.
- Reference observations, inferences, and recommendations stay distinguishable — check that the `[OBSERVED]` / `[INFERRED]` / `[RECOMMENDED]` / `[REQUIREMENT]` tags carried into `reference-and-decision-map.md` weren't relabeled along the way.
- No category-specific visual preset got imposed automatically — re-check `visual-design.md` and `structural-layout.md` against the restriction in `web-categories.md`.
- The chosen design direction in `DESIGN_BRIEF.md` is coherent, and every spec's decisions actually fit it rather than drifting into their own direction.
- All ten specialist specs exist, under `design-specs/`, using the filenames in `output-contract.md`.
- Each spec contains actionable, project-specific decisions — spot-check for generic advice that could apply to any project.
- Cross-domain requirements don't contradict each other (a motion spec assuming a component state the components spec never defined; a performance budget the animations spec ignores).
- Responsive behavior is explicitly addressed, not assumed to follow automatically from the desktop design.
- Accessibility and performance requirements are present and specific, not boilerplate.
- Original input files — the user's references, existing code — are unchanged.
- Every decision that matters is traceable in `reference-and-decision-map.md` — spot-check a handful of decisions against their claimed source.
- Nothing presented as fact is actually unverified — check for confident claims about reference images or documents that weren't actually inspected.
- Output paths and internal links between files are valid.
- No required file was silently skipped.

If any of these fail, fix the specific file rather than redoing the whole pass — these are meant to catch specific gaps, not trigger a full restart.
