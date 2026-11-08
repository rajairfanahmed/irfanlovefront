# Composition and Hierarchy

Purpose: how to organize content spatially so a page communicates what matters first, without yet choosing the specific grid values or layout pattern, that's `spatial-rhythm-and-alignment.md` and `layout-patterns-catalog.md`. This file is about structural hierarchy, which region holds what content and in what order, not visual styling (color, weight, size as rendered), which belongs to Visual Design.

## Content priority and grouping

Before arranging anything, rank the content: what's essential for the user's main task on this page, what's supporting, what's optional. Content that belongs together conceptually should sit together spatially, grouping is itself a structural decision, independent of borders or background treatment.

## Primary and secondary content regions

Every page or section should have a clear answer to "what is this region primarily for." A region trying to serve two unrelated primary purposes usually serves neither well. Secondary regions (related links, metadata, supplementary actions) should be structurally subordinate, smaller, positioned after or beside the primary content, not competing for the same first glance.

## Page-level and section-level hierarchy

Hierarchy operates at two scales: across the whole page (which section matters most) and within each section (which element in that section matters most). Both need to be deliberate. A page can have a clear top-level hierarchy and still fail if every individual section is internally flat.

## Reading order and content flow

Decide the order a user is meant to encounter content in, and make sure the structural arrangement actually produces that order, including the DOM order that assistive technology and keyboard navigation will follow. Visual position and DOM order should usually match; if they must diverge for a layout reason, that's a flag to check with Accessibility rather than something to decide unilaterally.

## Above-the-fold decisions

What appears without scrolling should be driven by what the user came to do, not by a rule that says every page needs a full-height hero. A tool a user opens many times a day may want to get straight to functional content; a first-time marketing visit may need more context before asking for action. Base the decision on the user's goal for that specific page, not a category convention.

## Relationships between headings, content, media, and actions

A heading should sit close to the content it introduces, not separated by unrelated material. Media (images, charts, video) should be positioned so its relationship to the text explaining it is unambiguous. A call to action should sit where the user has just received enough context to act on it, not before that context or so long after it that the connection is lost.

## Dominant and supporting regions

A clear composition usually has one dominant region per view and several supporting ones, not several regions competing at equal weight. Dominance can come from size, position (often but not always top or center), or isolation (surrounded by more whitespace than its neighbors).

## Spatial contrast and emphasis

Structural emphasis, giving something more space, more isolation, or a different scale relationship than its neighbors, is a separate tool from visual emphasis (color, weight). The two usually reinforce each other, but structural emphasis alone, more room around an element, can establish hierarchy even before Visual Design has made any color or type decisions.

## Balance and proportion

A composition doesn't need to be symmetrical to feel balanced. Balance is about whether the distribution of content weight across the page feels resolved rather than lopsided by accident. Proportion is about whether each region's size actually matches its importance, a minor supporting element occupying as much space as the primary content undermines the hierarchy regardless of what's in it.

## Intentional asymmetry

Asymmetry is a legitimate tool for signaling that something is different or important, but it needs a reason tied to the content, not novelty for its own sake. State the reason when using it, so it reads as a choice rather than an inconsistency; see `layout-patterns-catalog.md`'s entry on asymmetric layouts for implementation considerations.

## Density and breathing room

How much content occupies a given area should match the product's purpose: a data-dense dashboard legitimately wants higher density than a marketing landing page. Neither density nor spaciousness is inherently better; what matters is whether the chosen density serves the content and the user's task, not whether it matches a trend toward generous whitespace or toward maximal information density.

## Section boundaries and transitions

A user should be able to tell where one section ends and another begins, through spacing, a background change, a dividing element, or a clear shift in content type. Avoid boundaries so subtle that sections blur together, and avoid boundaries so heavy (hard rules everywhere) that the page feels chopped into disconnected pieces.

## Continuity across long pages

On a long page, each section should feel like part of a continuous argument or narrative, not an unrelated block stapled to the previous one. This usually comes from consistent section-to-section rhythm (established in `spatial-rhythm-and-alignment.md`) and from content that genuinely builds on what came before, rather than a shuffled list of generic sections.

## Multi-page composition consistency

Pages that serve a similar purpose (every blog post, every product detail page) should share a structural pattern so users build a mental model that transfers across them. Pages with genuinely different purposes don't need to share a structure just for the sake of a uniform system, forcing them to match often hides the fact that they're solving different problems.

## Avoiding arbitrary decorative sections

A section should exist because it serves a content or task requirement. If a section's only justification is "this is what pages in this category usually have," that's a sign to reconsider it, either because the content genuinely isn't needed, or because the real reason it's needed hasn't been identified yet.

## Preventing repetitive composition

If every section on a page uses the same width, alignment, and internal structure, the page will read as monotonous even if the content differs. Vary the composition deliberately where content calls for it (a feature list might suit a grid, a single powerful statement might suit a full-width, centered, isolated treatment) rather than running every section through the same template.

## Preserving required content and functionality

A cleaner-looking composition is never a justification for dropping required content. When a composition genuinely can't accommodate everything the brief requires, that's a conflict to surface (see `requirements-and-conflict-resolution.md` in the design-engineer skill, if present), not a reason to quietly cut something.