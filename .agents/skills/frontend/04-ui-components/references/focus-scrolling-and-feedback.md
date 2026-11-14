# Focus, Scrolling, and Feedback

## Focus

Use visible `:focus-visible` treatment or the framework's equivalent. Never remove the browser outline without a clear replacement. Focus indicators must remain visible against adjacent surfaces and should not be clipped by overflow containers.

## Programmatic focus

Move focus only when the interaction pattern requires it, such as opening a dialog, reporting form errors, or navigating to a meaningful result. Return focus to the invoking control when a temporary surface closes. Do not move focus on every small state change.

## Scroll behavior

Use native scrolling as the default. Anchor targets must not be hidden behind sticky headers. Avoid automatic scroll jumps that surprise users. Smooth scrolling must respect reduced-motion preferences.

## Feedback

Place feedback near the action or affected content. Use inline field errors for input problems, page-level summaries for broad errors, and live announcements for status changes that would otherwise be missed. Do not overuse toast messages for persistent or actionable problems.
