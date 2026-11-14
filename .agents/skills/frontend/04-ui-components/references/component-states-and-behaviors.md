# Component States and Behaviors

Define the states each component actually needs. Common states include default, hover, focus-visible, pressed, selected, expanded, disabled, read-only, loading, invalid, success, and unavailable. Not every component needs every state.

## State clarity

- Selected state must be distinguishable from hover and focus.
- Disabled state must remain legible and must not look like an active control.
- Invalid state must be paired with a clear message and relationship to the field.
- Loading state must identify the work in progress and prevent unsafe repeated actions where necessary.
- Success state must confirm the result without requiring color recognition alone.
- Empty and unavailable states must explain what is absent and what the user can do next.

## Behavior contracts

Document whether a control is controlled or internally managed, what event it emits, when it becomes disabled, whether it supports keyboard activation, and how it behaves during async work. Do not embed page-specific business rules in a reusable control.

## Visual QA

Inspect all meaningful states in the actual theme and at relevant widths. A component that looks correct only in its default state is incomplete.
