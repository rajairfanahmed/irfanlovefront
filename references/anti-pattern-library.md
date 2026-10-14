# UI/UX Anti-Pattern Library

## Purpose
Document common interface design failures that harm usability, trust, or user experience. Each pattern should explain the problem, its symptoms, its consequences, and an appropriate correction.

---

## Template-Default Anti-Patterns
These are anti-patterns specific to AI-generated design work:

- **Default hero formula:** Automatically producing a centered hero, eyebrow badge, huge headline, centered paragraph, cluster of pill buttons regardless of the product
- **Formula replacement:** Replacing one default formula with another (always asymmetric, always brutalist, always terminal-styled) instead of making a contextual choice
- **Universal card grids:** Putting every content group inside cards and repeating the same three-column card grid across every page
- **Generic premium styling:** Assuming a light neutral palette, particular font, rounded rectangles, subtle shadows, and black primary button constitute universal premium design
- **Decorative engineering props:** Adding fake terminals, pretend telemetry, decorative topology graphics, or fabricated system health indicators merely because the product owner works in engineering
- **Interchangeable pages:** Giving every page the same composition instead of letting each page respond to its own content and task
- **Fabricated functional elements:** Presenting system health, latency, transaction logs, subscriber metrics, or similar data as real when it is fabricated
- **Empty container proliferation:** Wrapping every section in containers (cards, panels, boxes) without evaluating whether typography, spacing, rules, or background changes could establish hierarchy instead

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
- Simulating a successful submission when the request actually failed

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
- AI marketing language, em dashes in ordinary prose, formulaic phrasing, hollow claims, and phrases that could belong to any product
- Invented proof, unsupported proficiency labels, and fake usage figures

## Visual Anti-Patterns
- Decorative elements that obscure content
- Inconsistent spacing and alignment
- Poor contrast making text unreadable
- Competing focal points with no clear hierarchy
- Inconsistent component treatments across pages
- Arbitrary visual effects unrelated to content
- Using the same composition for every page of a multi-page product

## Interaction Anti-Patterns
- Disabled buttons without explanation
- Destructive actions without confirmation
- Auto-advancing workflows without user control
- Unexpected page redirects
- Infinite scroll with no way to return to position
- Hover-dependent interactions on touch devices
- Fake interactions added to make screenshots appear sophisticated
- Controls that do not do what their labels imply

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
