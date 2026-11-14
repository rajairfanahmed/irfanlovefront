# Interaction Patterns

Select a pattern according to the user's task and the consequences of the action.

- **Disclosure:** reveal supporting content without leaving the page.
- **Tabs:** switch between related panels with a shared context.
- **Dialog:** complete a short focused task that should remain in the current context.
- **Drawer:** show contextual content or filters while preserving a visible underlying page.
- **Dedicated route:** support a complex, lengthy, shareable, or history-sensitive task.
- **Inline editing:** modify a small value in context when the save and cancel behavior is clear.
- **Optimistic update:** show a reversible result before server confirmation only when consistency and rollback are understood.
- **Confirmation:** clarify a consequential action before execution.

For each chosen pattern, define keyboard behavior, focus management, cancellation, loading, success, error, and browser-history behavior. Avoid using a modal merely because it is easy to implement.
