# Design Reference Analysis

Analyze source material before synthesizing a design. The purpose is to extract useful evidence and principles, not to copy a page or assume that a screenshot reveals the complete product.

## 1. Inventory the inputs

List every supplied item with its type, source, role, and review status:

- written design brief or `design.md`;
- screenshots and exported frames;
- design-system documentation;
- reference websites and URLs;
- brand assets, logos, icons, illustrations, and photography;
- existing application pages;
- frontend and backend source files;
- user-provided constraints and examples.

If the repository contains `designs/`, `design-refs/`, or a named reference folder, inventory the contents. When ten or more relevant images exist, inspect at least ten distinct images before concluding that the style has been understood. If fewer than ten exist, inspect all available images and state the actual count. Do not claim to have inspected an item that could not be opened.

## 2. Analyze each image independently

For every image, record:

| Dimension | What to observe |
|---|---|
| Purpose | page type, audience, primary task, page stage |
| Composition | alignment, grid, columns, overlap, section sequence |
| Hierarchy | focal point, heading scale, reading order, action priority |
| Typography | type character, size contrast, line length, weight, leading |
| Color | dominant and supporting roles, contrast, saturation, surface relationships |
| Spacing | section rhythm, component density, margins, internal padding |
| Shape | corners, borders, dividers, layering, depth |
| Imagery | subject, crop, aspect ratio, art direction, placement |
| Components | navigation, cards, forms, tables, controls, feedback |
| Interaction clues | hover, active, expanded, selected, loading, scroll affordances |
| Responsive evidence | mobile frame, reflow clues, content prioritization, hidden elements |
| Brand character | restrained, editorial, technical, warm, formal, playful, or other observed tone |

Separate facts from interpretation:

- **Observed:** directly visible in the source.
- **Inferred:** a plausible interpretation that requires confirmation or implementation testing.
- **Unknown:** cannot be determined from the supplied evidence.

A static screenshot does not prove hover behavior, navigation destinations, responsive rules, animation timing, or data behavior.

## 3. Compare references

Identify:
- recurring principles worth carrying forward;
- distinctive features that belong only to one reference;
- contradictions between sources;
- visual elements that conflict with the product's usability or accessibility needs;
- ideas that can be translated rather than copied;
- aspects that should be deliberately avoided.

Do not average several references into a bland composite. Select the strongest relevant principles and explain why each belongs in this product.

## 4. Inspect references at the right scale

For a complete site, examine representative page types rather than only the landing page. For an application, inspect navigation, data views, forms, detail views, settings, and important states. For a mobile product, review narrow screenshots or test a live reference at narrow widths when possible.

Where available, use browser inspection to verify layout changes, interaction behavior, and navigation. Do not infer exact pixels from a resized or compressed image.

## 5. Translate evidence into decisions

Every adopted reference principle must map to a concrete design decision, such as:

- use a narrow editorial measure for long-form reading;
- keep the primary task visible in a dense operations screen;
- distinguish navigation from page-level actions;
- use a visual device only where it reinforces the content hierarchy;
- adapt a desktop composition into a different mobile order when the task priority changes.

## 6. Required record

For each source, include its identifier, observation summary, useful principles, limitations, and affected specification files. Put the consolidated mapping in `reference-and-decision-map.md`.
