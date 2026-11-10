# Layout Selection and Tradeoffs

Purpose: a practical method for choosing between plausible layout options and defending the choice, scaled to how much the decision actually matters.

## The core method

For a significant structural decision, work through:

1. What problem must the layout actually solve?
2. Which patterns from `layout-patterns-catalog.md` are plausible candidates?
3. What are the real tradeoffs between them for this project?
4. Which option best fits the requirements established in `composition-and-hierarchy.md`?
5. What evidence supports the choice, a requirement, a reference, a technical constraint, or is it a professional recommendation with no stronger backing?
6. How does it need to adapt across screen sizes?
7. How can the result be verified once built?

Scale the depth of this to the decision's weight. A page's primary composition deserves the full method. Whether a supporting link sits left or right of a button does not.

## Mapping requirements to options

Start from what was established before any layout was chosen: the user's task, the content's actual shape, the priority order. Shortlist only the patterns from the catalog that plausibly fit those constraints, don't evaluate options that were never realistic candidates just to have a longer comparison.

## Content-first composition

Let the content's actual shape and volume drive the layout, not the reverse. A content inventory with five short items and one that has fifty long ones calls for different patterns even if they're nominally "the same kind of content." Decide the layout after knowing roughly what will fill it, not before.

## Task-oriented design

Weigh how directly each candidate layout supports the user's actual task on that page. A layout that looks impressive but adds steps or ambiguity to the task it's meant to support is the wrong choice regardless of its visual appeal.

## Information density

More plausible candidates will separate on this axis than almost any other: how much does the user need to see at once versus how much can be progressively revealed. High-density patterns (data-dense layouts, modular grids) suit repeat, expert use; lower-density patterns (single-column, editorial) suit first-time or persuasive contexts.

## User attention and reading flow

Consider where a candidate layout naturally draws the eye first, and whether that matches what the page actually needs attention on. A layout that's structurally sound but draws attention to a secondary element over the primary task has failed at its real job.

## Product complexity

A simple product with few features doesn't need a layout built for a complex one, and a genuinely complex, multi-feature product forced into an oversimplified layout will under-serve users who need the complexity visible. Match the layout's capacity to the product's actual complexity, not to a stylistic preference for minimalism or density.

## Data volume and variability

Check each candidate against both ends of the realistic data range: what does it look like with one item, and what does it look like with the maximum realistic count? A layout that only works for a narrow, ideal data range will break in production.

## Long versus short pages

A long page needs patterns that sustain engagement and provide orientation (section transitions, maybe in-page navigation); a short page needs patterns that get to the point without padding it out to look more substantial than it is. Don't pad a short page with sections just to make it feel like a "complete" page in the category.

## Navigation complexity

The more sections, pages, or paths a user needs to move between, the more a layout needs to support orientation (clear section boundaries, a persistent way to see where you are). A simple, single-path product can use a much lighter navigational structure.

## Desktop and mobile constraints

Check a candidate layout against both ends of the viewport range before committing, not just the viewport the mockup happens to be designed at. A pattern that depends on wide horizontal space (certain split-screen or multi-column patterns) needs an honestly evaluated narrow-viewport fallback, not an afterthought.

## Accessibility considerations

Favor candidates with a clear, logical reading order and native semantic structure over ones that need significant ARIA work to become navigable. A visually interesting layout that requires fighting the DOM order to make sense for assistive technology is a real cost, weigh it honestly against the alternatives.

## Content management implications

Consider who will maintain this layout's content after launch, and whether the pattern tolerates the kind of content changes that will realistically happen (new items added, existing ones edited to different lengths). A layout that only looks right with hand-tuned content is fragile in any system where content changes regularly.

## Implementation complexity

Weigh the actual engineering cost of a candidate, not just its visual appeal. An asymmetric or experimental composition might be the right creative choice and still be the wrong choice if the project's constraints (timeline, team familiarity with the required technique, framework limitations) make it disproportionately costly to build and maintain.

## Maintainability

Prefer patterns that extend cleanly when the product adds a new page, section type, or content variant, over ones that only work for the exact content that currently exists. A one-off, hand-tuned layout can be the right call for a single landing page; it's the wrong call for a pattern that needs to scale across many similar pages.

## Performance implications

Some patterns carry an inherent performance cost (many images, heavy use of layered compositions, large background media). Weigh this against the project's performance budget before committing, and coordinate the specific targets with Performance Optimization.

## Multi-page consistency

Favor a pattern that extends naturally to the other pages that will need something similar, over one that solves this page perfectly but has no answer for its siblings. See `composition-and-hierarchy.md` on when shared structure helps versus when it falsely forces unrelated pages together.

## Originality and contextual suitability

The right layout is the one that fits this project's actual requirements, not the most unusual option on the list and not the safest, most common one either. Novelty and familiarity are both irrelevant next to fit. When two candidates fit roughly equally well, the one with lower implementation risk and better maintainability is usually the better call.

## Documenting the decision

For a significant choice, record what was chosen, what the real alternative was, and why this one won, in the project's `reference-and-decision-map.md` if the design-engineer skill's output-contract conventions are in use for this project, or inline in the structural-layout spec otherwise. Don't produce a lengthy comparison for a decision nobody will question; match the documentation to the decision's weight, same as the analysis itself.