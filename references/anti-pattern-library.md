# UI/UX Anti-Pattern Library

## Purpose
Document common interface design failures that harm usability, trust, or user experience. Each pattern should explain the problem, its symptoms, its consequences, and an appropriate correction.

---

## Navigation Anti-Patterns
- Unlabeled or ambiguous navigation items
- Deep nesting requiring excessive clicks to reach common content
- Inconsistent navigation across pages
- Missing back/escape mechanisms
- Hidden primary navigation without accessible alternatives
- Breadcrumbs that do not reflect actual hierarchy
- Navigation that changes unpredictably based on user action

## Form Anti-Patterns
- Clearing valid form fields after a submission error
- Vague or generic error messages
- Validation rules not communicated before submission
- Inline validation that fires before the user finishes typing
- Required fields without clear indicators
- Unnecessary formatting restrictions
- Forms that do not preserve user input across recoverable failures
- Captcha that blocks legitimate users

## Feedback Anti-Patterns
- No visible response to user actions
- Loading states that persist indefinitely without information
- Success messages that appear when the operation actually failed
- Error messages that provide no actionable guidance
- Notifications that cannot be dismissed
- Sounds or alerts without user control
- Toast messages that disappear before being read

## Content Anti-Patterns
- Fabricated testimonials or statistics
- Misleading pricing or hidden fees
- Interchangeable marketing copy with no product specifics
- Information overload without hierarchy
- Wall-of-text without structure
- Inconsistent terminology for the same concept
- Ambiguous button labels

## Visual Anti-Patterns
- Decorative elements that obscure content
- Inconsistent spacing and alignment
- Poor contrast making text unreadable
- Competing focal points with no clear hierarchy
- Inconsistent component treatments across pages
- Arbitrary visual effects unrelated to content

## Interaction Anti-Patterns
- Disabled buttons without explanation
- Destructive actions without confirmation
- Auto-advancing workflows without user control
- Unexpected page redirects
- Infinite scroll with no way to return to position
- Hover-dependent interactions on touch devices

## Trust Anti-Patterns
- Deliberately confusing cancellation flows
- Preselected options that benefit the company, not the user
- Fake urgency or scarcity
- Dark patterns in consent management
- Hidden data collection
- Misleading "free" claims with mandatory payment
- Countdown timers that reset

## Accessibility Anti-Patterns
- Images without alternative text
- Focus traps in dialogs or menus
- Colour as the only means of communicating information
- Custom controls without keyboard support
- Missing form labels
- Non-semantic markup replacing semantic HTML
- Motion that cannot be reduced or paused
