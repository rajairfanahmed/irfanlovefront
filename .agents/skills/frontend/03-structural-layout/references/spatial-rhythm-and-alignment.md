# Spatial Rhythm and Alignment

Purpose: the concrete spatial mechanics, containers, grids, gaps, alignment, rhythm, that turn a composition decided in `composition-and-hierarchy.md` into something buildable. Derive actual values from this project's content and constraints; nothing here is a universal number to apply by default.

## Container sizing and maximum content widths

Decide a maximum width for reading content based on what keeps it comfortable to scan (coordinate with Typography's line-length guidance in the visual-design skill if available), not an arbitrary round number. Different content types can justify different maximums within the same project: a reading column, a data table, and a full-bleed hero don't need to share one constraint.

## Page gutters

The minimum space between content and the viewport edge needs to hold at the narrowest supported viewport without feeling cramped and at the widest without looking lost. Gutters usually need to grow somewhat with viewport width rather than staying a fixed pixel value at every size.

## Grid columns and gaps

Choose a column count and gap that fit the content being arranged, not a default twelve-column grid applied regardless of need. A gallery of similar items might want a flexible `auto-fit` column count; a precise dashboard layout might want a fixed, explicit column count. The gap value should relate to the project's spacing scale, not be chosen independently per instance.

## Alignment systems

Pick a small number of alignment references (a left edge, a center line, a baseline) and hold content to them consistently. Elements that are almost but not quite aligned read worse than elements that are deliberately not aligned at all, near-misses look like mistakes.

## Vertical and horizontal rhythm

Rhythm comes from spacing values that relate to each other by a consistent system (a scale, not arbitrary numbers picked per instance) repeating predictably down and across the page. This is what makes a long page feel considered rather than assembled section by section with no shared logic.

## Spacing relationships and content grouping

Use spacing itself to communicate grouping: less space between closely related elements, more space between unrelated ones. This should be legible without relying on a border or background to make the grouping explicit.

## Section spacing

The space between major sections usually needs to be larger than the space within a section, so section boundaries remain clear (see `composition-and-hierarchy.md`). Keep section-to-section spacing consistent across the page unless a specific transition calls for a deliberate break in the pattern.

## Text and media proportions

When text and media share a region, their relative size should reflect their relative importance for that specific section, not a fixed ratio applied everywhere. A technical explanation might need the text to dominate; a product showcase might need the image to.

## Negative space

Empty space is an active part of the composition, not leftover area. It's what gives dominant content room to read as dominant and gives a dense section room to still feel organized. Removing negative space to fit in more content is rarely free, check what hierarchy or legibility it costs before doing it.

## Dense versus spacious compositions

Neither is a default. Match the density to the product and the task, a scanning, repeat-use tool can earn tighter spacing than a one-time persuasive landing page, and justify the choice rather than inheriting whichever is currently fashionable.

## Baseline and edge alignment

Where multiple text blocks sit side by side, aligning their baselines (not just their containers) produces a noticeably more polished result than container-only alignment. This matters most in dense, text-heavy layouts; it's not worth the complexity for every composition.

## Nested layout behavior

A layout built from nested containers (a grid inside a flex item inside another grid) needs each level to behave predictably as content changes, a nested container shouldn't silently overflow or collapse when its content is longer than the example used while designing it. Test nested structures against realistic content length, not just the shortest case.

## Full-width versus constrained content

Decide deliberately which elements break out of the standard container and which stay within it. This decision carries meaning, see `layout-patterns-catalog.md`'s full-bleed entry, and loses that meaning if applied inconsistently or to everything.

## Overlapping elements and intentional layering

When elements deliberately overlap, define an explicit stacking order and check it holds across the viewport range the overlap needs to survive. Unintentional overlap (two elements colliding because neither accounted for the other's real size) is a bug, not a layering decision.

## Sticky and fixed positioning

Use sticky or fixed positioning when something genuinely needs to stay accessible while the user scrolls (a persistent nav, a running total, a comparison header), not as a default for anything that seems important. Account for how much vertical space a stuck element permanently removes from the viewport, especially on short mobile screens.

## Overflow prevention

Every container that can receive variable-length content needs an explicit answer for what happens when that content is longer than expected: wrap, scroll, truncate, or grow the container. An undefined overflow behavior is one of the most common sources of a layout that looks fine in the mockup and breaks with real content.

## Content-driven sizing

Prefer letting content determine a container's size (intrinsic sizing, `min-content`, `max-content`, `fit-content`) over fixing a dimension and hoping the content fits it, especially for anything holding user-generated or variable-length content.

## Fluid sizing and clamp()

Use `clamp()` or an equivalent fluid approach when a value should scale smoothly with viewport width within defined bounds, rather than jumping discretely at breakpoints. This usually suits spacing and type size better than it suits structural decisions like column count, which more often need discrete steps. Coordinate fluid type decisions with Visual Design's typography work.

## CSS Grid, Flexbox, and normal flow

Use grid when a layout needs two-dimensional control (both rows and columns matter) or precise placement of items relative to a defined structure. Use flexbox for one-dimensional distribution (a row or column of items that need to align, wrap, or share space). Use normal document flow for straightforward stacked content that doesn't need either. Reaching for grid or flexbox when normal flow would do adds complexity without benefit.

## Container queries

Use container queries when a component's internal layout needs to respond to the size of its own container rather than the viewport, a card that behaves differently in a wide sidebar than in a narrow one, for instance. This is the right tool for component-level responsiveness that viewport-based breakpoints can't express; coordinate with Responsive Design and UI Components on where the boundary between viewport-level and container-level responsiveness sits for this project.

## Layout stability and cumulative layout shift

Reserve space for content that loads asynchronously (images, embeds, ads, dynamically fetched content) so it doesn't shift the layout when it arrives. This is a structural decision (define the space ahead of time) with a performance consequence, coordinate the specific metric targets with Performance Optimization.