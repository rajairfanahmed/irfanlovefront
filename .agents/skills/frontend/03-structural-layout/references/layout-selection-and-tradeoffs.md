# Layout Selection and Trade-offs

Choose layout by evaluating the task rather than by selecting a visually popular pattern.

## Decision factors

1. What is the primary user action?
2. What information must be visible together?
3. Which elements require comparison or persistent context?
4. How frequently is the page used and by whom?
5. What is the content length and density?
6. What happens at the narrowest supported width?
7. Does the layout support keyboard, screen-reader, and zoom behavior?
8. What are the rendering and media costs?

## Common trade-offs

- **Sidebar vs top navigation:** persistent context and deep tools versus available horizontal space and discoverability.
- **Table vs cards:** fast comparison and density versus flexible stacking and single-record focus.
- **Tabs vs separate routes:** related short views versus deep linking, browser history, and content discoverability.
- **Sticky vs static context:** repeated access versus obscured content and layout complexity.
- **Modal vs dedicated page:** focused interruption versus complex or long workflows.

## Decision record

For material layout decisions, record the selected approach, the user need it supports, the main alternative considered, and why that alternative was rejected. Revisit only when requirements or evidence change.
