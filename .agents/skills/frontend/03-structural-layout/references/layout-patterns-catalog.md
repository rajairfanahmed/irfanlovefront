# Layout Patterns Catalog

Purpose: a working reference of structural patterns and what each one actually solves. This is a catalog to draw from, not a checklist to apply. Appearing here doesn't make a pattern appropriate for the project at hand, check it against `layout-selection-and-tradeoffs.md` before committing to one.

Each entry covers: the structural idea, when it tends to work, what to watch for, and implementation notes. Responsive and accessibility implications are called out where they're pattern-specific; the general responsive approach lives in `spatial-rhythm-and-alignment.md` and belongs to Responsive Design for exact breakpoints.

## Single-column

Structure: one content stream, full reading width or a constrained measure, no parallel tracks.
Works well when: content is sequential and reading-order matters more than browsing (articles, checkout flows, onboarding, simple landing pages).
Watch for: can feel monotonous over a long page if nothing varies the rhythm (width, media, spacing). Doesn't suit content that benefits from side-by-side comparison.
Responsive and accessibility: naturally mobile-first, reading order rarely needs restructuring across viewports.
Implementation: straightforward in normal document flow, no grid needed for the base case.

## Multi-column

Structure: two or more parallel content tracks within a page or section.
Works well when: content genuinely divides into parallel streams, comparison tables, a sidebar alongside primary content, multi-topic dashboards.
Watch for: forcing unrelated content into columns just to fill horizontal space. Column balance (one track much longer than another) reads as unfinished.
Responsive: columns typically need to stack or reflow at narrow widths, decide the stacking order deliberately rather than defaulting to source order.
Implementation: CSS grid or flexbox depending on whether tracks need independent sizing control (grid) or simple distribution (flexbox).

## Split-screen

Structure: the viewport divided into two large regions, often text against image or two contrasting pieces of content.
Works well when: there are exactly two things that deserve equal visual weight, a product shot beside its pitch, two paths a user can choose between.
Watch for: forcing a third element into a two-sided composition. Weak on small screens if both halves are dense, usually needs to stack.
Responsive: almost always stacks vertically below a certain width, decide which half leads when it does.
Implementation: grid with two tracks, or flexbox with defined basis values.

## Editorial and magazine-style

Structure: varied column widths, pull quotes, image bleeds, type-led hierarchy borrowed from print layout conventions.
Works well when: the content is genuinely long-form or narrative (publications, case studies, in-depth features) and the product wants to feel considered rather than utilitarian.
Watch for: over-applying editorial flourishes to short, transactional content where they just add friction. Needs real, well-written content, filler text looks obviously wrong in this pattern.
Responsive: varied widths and bleeds need explicit rules for how they collapse; don't let a pull quote crush body text at narrow widths.
Implementation: usually a mix of a constrained reading column with occasional full-bleed or oversized breakouts.

## Asymmetric layouts

Structure: deliberately unequal visual weight between regions, offset grids, unbalanced but intentional compositions.
Works well when: the product wants a distinctive, expressive character and has genuine content to justify emphasis in one place over another (portfolios, agencies, brand-forward marketing).
Watch for: asymmetry without a reason reads as a mistake, not a choice. Needs clear justification tied to content priority, not applied for novelty alone.
Responsive: asymmetric relationships are often the first thing to break on narrow viewports, plan the stacked order and weight separately rather than letting it fall apart automatically.
Implementation: CSS grid with explicit track sizing is usually the most controllable approach.

## Modular grid

Structure: a repeating grid of same-size or proportionally-related modules, each holding a self-contained piece of content.
Works well when: content items are genuinely comparable in type and importance (a product catalog, a set of articles, a team directory).
Watch for: using a uniform grid for content that actually has different priorities, which flattens hierarchy the content doesn't have.
Responsive: column count typically reduces at narrower widths; decide the minimum module width rather than letting modules shrink indefinitely.
Implementation: CSS grid with `auto-fill` or `auto-fit` and a minimum track size handles this well for content-driven column counts.

## Bento-style composition

Structure: a grid of unevenly-sized tiles implying relative importance through size, popularized by recent product marketing pages.
Works well when: there's a genuinely uneven set of features or facts to communicate and their relative importance maps naturally to tile size.
Watch for: this is one of the most overused patterns in current web design, don't reach for it as a default. Only use it when the content's actual differences in importance justify uneven tile sizes; otherwise it reads as decoration borrowed from somewhere else.
Responsive: tile size relationships rarely survive small screens intact, plan an explicit stacked order.
Implementation: CSS grid with explicit `grid-column` and `grid-row` spans per tile.

## Dashboard and application shells

Structure: a persistent frame (navigation, often a sidebar, sometimes a header) around a content area that changes per view.
Works well when: the product is used repeatedly by the same person who needs stable navigation and orientation across many screens.
Watch for: over-chroming the shell until it competes with the content it's framing. Shell regions need to handle both very little and a lot of content gracefully.
Responsive: sidebars typically collapse to an overlay, a bottom bar, or a hidden drawer on narrow viewports, decide which based on how often navigation is needed versus content space.
Implementation: CSS grid for the overall shell (header, sidebar, content as named areas) scales better than nested flexbox for this case.

## Data-dense layouts

Structure: tables, dense grids, and layouts optimized for scanning many data points quickly rather than for narrative flow.
Works well when: users are comparing, filtering, or scanning many similar records (admin tools, financial data, analytics).
Watch for: sacrificing legibility for density, there's a real limit to how much can be packed in before it stops being usable. Decorative styling actively hurts this pattern.
Responsive: tables are the hardest common pattern to adapt to narrow viewports, options include horizontal scroll with a frozen key column, a card-per-row transformation, or hiding lower-priority columns, choose based on what the data actually needs.
Implementation: semantic table markup where the content is genuinely tabular; a styled grid of divs loses accessibility and sorting/scanning affordances that tables provide for free.

## Sidebar-based layouts

Structure: a persistent or collapsible side panel alongside a main content area, not necessarily a full application shell.
Works well when: there's secondary content or navigation that benefits from staying visible alongside the primary content (documentation with a table of contents, filters beside search results).
Watch for: a sidebar that's wider or more visually prominent than the content it's supporting.
Responsive: usually the first region to collapse or relocate below a certain width.
Implementation: CSS grid with a fixed or `minmax()`-bounded sidebar track and a flexible main track.

## Full-bleed sections

Structure: content or imagery that extends to the full viewport width, breaking out of an otherwise constrained container.
Works well when: a moment genuinely needs more visual weight than the standard container allows, a hero image, a section transition, a piece of immersive media.
Watch for: using full-bleed for every section removes its ability to signal emphasis, it only works as a contrast against a constrained baseline.
Responsive: full-bleed media needs explicit aspect-ratio and object-fit handling so it doesn't distort or crop awkwardly at different viewport ratios.
Implementation: breaking out of a constrained container typically uses a negative-margin or `100vw` technique, or a grid with a full-width track alongside a constrained one.

## Layered and overlapping compositions

Structure: elements that intentionally overlap (an image behind a text block, a card that overlaps a section boundary).
Works well when: the overlap reinforces a relationship between the elements or adds visual interest the project's character calls for.
Watch for: overlap that obscures content at some viewport or zoom level, or that happens by accident rather than by design.
Responsive: overlap relationships are fragile across viewport changes, test them explicitly rather than assuming they'll scale proportionally.
Implementation: CSS grid with overlapping grid areas, or absolute/relative positioning used deliberately with a defined stacking context.

## Image-led and text-led compositions

Structure: a section where either imagery or text carries the primary communicative weight, with the other playing a supporting role.
Works well when: the content has a clear best format for the point being made, product photography for a physical object, dense explanatory text for a technical capability.
Watch for: defaulting to image-led because it looks more polished when the actual content is informational and needs text to do the work.
Responsive: image-led sections need a defined behavior for when the image can no longer sit alongside text (stack, resize, or crop).
Implementation: straightforward with multi-column or split-screen as the underlying structure; the distinction is about weight and ordering, not a separate technique.

## Timeline layouts

Structure: content ordered along an implied or explicit chronological or sequential axis.
Works well when: sequence itself is meaningful information (a process, a history, a roadmap, steps in a flow).
Watch for: forcing non-sequential content into timeline form just because it looks structured.
Responsive: a horizontal timeline usually needs to become vertical on narrow viewports.
Implementation: a vertical line or connector is often simplest with a flex or grid column plus pseudo-elements or SVG for the connecting line.

## Comparison layouts

Structure: parallel content blocks (often columns) designed for direct point-by-point comparison.
Works well when: users genuinely need to compare discrete options against the same criteria (pricing tiers, product variants, feature matrices).
Watch for: comparing items that don't actually share the same criteria, which produces empty or padded rows just to keep the grid aligned.
Responsive: comparisons are dense at narrow widths, options include horizontal scroll, a stacked single-column-per-item view, or collapsing to the most decision-relevant criteria only.
Implementation: CSS grid aligns comparison rows across columns reliably; a table is also appropriate when the data is genuinely tabular.

## Gallery and portfolio layouts

Structure: a collection of visual items (images, projects, case studies) arranged for browsing rather than linear reading.
Works well when: the content is primarily visual and users are expected to scan and select rather than read in order.
Watch for: uniform grids that strip out meaningful differences between items (a flagship project deserves more visual weight than a minor one, if that's true).
Responsive: item count per row typically reduces with viewport width; decide whether aspect ratios stay fixed or adapt per item.
Implementation: CSS grid with `auto-fill`/`auto-fit`, or a masonry-style arrangement when item heights genuinely vary and that variation is meaningful.

## Directory and listing layouts

Structure: a scannable list or grid of similar items, usually with consistent metadata per item (search results, a team directory, a blog index).
Works well when: users are looking for a specific item among many similar ones and need to scan efficiently.
Watch for: inconsistent information density between items, which breaks scannability.
Responsive: list form often survives narrow viewports better than a grid form; decide per project whether grid-to-list is the right narrow-viewport transformation.
Implementation: a list (ordered or unordered, semantically) for linear scanning, or a grid when visual browsing matters more than strict order.

## Product detail layouts

Structure: a focused composition combining media, key information, and a primary action for a single item.
Works well when: the page's job is to help a user decide about one specific thing (a product, a listing, a profile).
Watch for: burying the primary action below less important content. Secondary information (reviews, specifications, related items) competing with the primary decision point.
Responsive: the primary action needs to stay reachable at every viewport, not pushed below the fold on mobile.
Implementation: typically split-screen or a two-column layout on larger viewports, stacking with the primary action and key info first on mobile.

## Long-form documentation layouts

Structure: a constrained reading column, often paired with a persistent table of contents or navigation sidebar, optimized for finding and reading reference content.
Works well when: content is reference material that users navigate to specific sections of, rather than reading start to finish every time.
Watch for: a table of contents that goes out of sync with actual heading structure, or a reading column too wide for comfortable scanning.
Responsive: the sidebar/TOC typically collapses to a toggle or moves below the content on narrow viewports.
Implementation: semantic heading structure matters here more than in most patterns, since it usually drives both the TOC and in-page navigation.

## Hybrid compositions

Most real pages combine several of the above patterns across their sections rather than using one pattern throughout (a hero as split-screen, followed by a modular grid, followed by a single-column FAQ). This is normal and often correct. The point of this catalog is to choose each section's pattern deliberately, not to pick one pattern and force the whole page into it.

## Experimental compositions

When a project's character and audience genuinely call for something outside the patterns above (an art-forward brand site, an interactive narrative experience), build from the same underlying principles in `composition-and-hierarchy.md` and `spatial-rhythm-and-alignment.md` rather than this catalog. Document the reasoning carefully, since there's no established pattern to fall back on if it doesn't work, and check implementation feasibility and accessibility especially closely.