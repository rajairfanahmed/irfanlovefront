# Component Design Principles

## Reuse with intent

Create a shared component when it represents a real repeated concept, reduces meaningful duplication, or provides a reliable accessibility and interaction contract. Avoid extracting markup solely to create more files.

## API quality

- Prefer clear prop names and discriminated variants.
- Keep default behavior predictable.
- Use composition for optional regions.
- Expose controlled values and events when the parent must coordinate state.
- Avoid dozens of boolean props that permit invalid combinations.
- Keep page-specific data and backend calls outside generic UI components.

## Semantic defaults

Use the correct native element for the interaction. A link navigates; a button performs an action. Inputs have labels. Disabled and invalid states have a meaningful implementation. Do not emulate controls with generic `div` elements.

## Styling

Use design tokens and component-level variants. Do not introduce unrelated visual styles for one route. State styling must work across themes and preserve focus visibility.

## Testing

Test component behavior, accessible names, keyboard interaction, variants, and important edge states. Add visual regression tests only when the repository has a stable process and meaningful value from them.
