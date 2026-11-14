# Design Synthesis

Synthesis converts verified product context and reference evidence into a single coherent visual and interaction direction.

## 1. Define the experience

Write a compact direction statement describing:
- who the experience serves;
- what users need to accomplish;
- the intended character of the product;
- the hierarchy that makes the key task clear;
- the design qualities that distinguish it from a generic category template.

Use concrete language. Avoid empty labels such as "modern", "beautiful", or "premium" unless they are translated into observable decisions.

## 2. Establish visual principles

Choose and justify:
- typography character and hierarchy;
- color roles, contrast relationships, and theme behavior;
- spacing rhythm and content density;
- surface treatment, borders, elevation, and shape;
- image, illustration, and icon direction;
- data visualization and status treatment where needed.

Do not select token values by trend alone. Confirm that the visual system supports the content, context, brand, and accessibility target.

## 3. Establish structural principles

Define:
- global navigation and application shell;
- page width and grid behavior;
- page archetypes required by the product;
- content priority and reading order;
- section sequence and grouping;
- patterns for dense data, forms, detail screens, and long-form content;
- mobile composition and navigation changes.

Do not repeat the same section or card layout on every page. Use composition that fits each page's content and task.

## 4. Establish interaction principles

Specify the interaction model for:
- navigation, menus, tabs, filters, sorting, and search;
- forms, validation, saving, and recovery;
- confirmation and destructive actions;
- dialogs, drawers, and overlays;
- loading, empty, error, success, and permission states;
- keyboard, touch, and pointer use;
- URL and browser-history behavior.

For each important flow, describe entry, action, system response, next state, and recovery route.

## 5. Establish motion principles

Use motion to communicate state, hierarchy, continuity, or feedback. Define when motion is meaningful and where it is intentionally absent. Include reduced-motion behavior, interaction latency, and performance implications. Do not add motion as decoration to every element.

## 6. Establish responsive principles

Define the content constraints before breakpoints. State what reflows, stacks, scrolls, collapses, becomes a drawer, or changes priority. Prefer fluid values and content-driven breakpoints over arbitrary device labels.

## 7. Establish implementation constraints

Specify framework boundaries, existing component reuse, asset requirements, data dependencies, public rendering needs, and the performance budget. Keep implementation recommendations compatible with the actual stack.

## 8. Make one recommendation

The brief should name one recommended direction, not present several unranked visual concepts. Alternatives belong only where a genuine unresolved trade-off requires user input. Include the rationale and the most important rejected direction so future changes remain consistent.
