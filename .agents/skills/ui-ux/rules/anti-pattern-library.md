# UI/UX Anti-Pattern Library

## Purpose
Document common interface design failures that harm usability, trust, or user experience. Each pattern explains the problem, its symptoms, its consequences, and an appropriate correction.

---

## 1. Template-Default Anti-Patterns
These anti-patterns occur when interfaces rely on unconsidered AI-generated defaults or formula swapping:

- **Default hero formula:** Automatically producing a centered hero, eyebrow badge, huge gradient headline, centered paragraph, and a cluster of pill buttons regardless of product context.
- **Floating badge clusters:** Placing a row of floating tech badges or pills beneath hero buttons without functional context or hierarchy.
- **Formula replacement:** Replacing one default formula with another (e.g. automatically making every site an asymmetric brutalist grid, or forcing terminal styling onto everything) instead of making a contextual choice.
- **Universal card grids:** Putting every content group inside cards and repeating the same three-column card grid across every page.
- **Card-in-card nesting:** Nesting rounded cards inside larger rounded cards for flagship items, creating visual clutter and confusing boundaries.
- **Generic premium styling:** Assuming a light neutral palette, rounded rectangles, subtle shadows, and a black primary button constitute universal premium design.
- **Decorative engineering props:** Adding fake terminal windows, pretend telemetry, fake latency meters, or decorative topology graphics merely because the product owner works in engineering.
- **Interchangeable pages:** Giving every page the exact same layout structure instead of letting each page respond to its unique content and task.
- **Fabricated functional elements:** Presenting system health, latency, transaction logs, subscriber metrics, or star ratings as real when they are simulated or fabricated.
- **Container proliferation:** Wrapping every section in containers without evaluating whether typography, spacing, rules, or background shifts could establish hierarchy instead.

For a concrete benchmark demonstrating these failures and how to avoid them, see the Portfolio Regression Test in [quality-evaluation-rubric.md](./quality-evaluation-rubric.md).

---

## 2. Navigation Anti-Patterns
- Unlabeled or ambiguous navigation items
- Deep nesting requiring excessive clicks to reach common content
- Inconsistent navigation shells across different routes
- Missing back, escape, or home navigation mechanisms
- Hidden primary navigation without accessible alternatives
- Breadcrumbs that do not reflect actual site hierarchy
- Navigation that changes unpredictably based on scroll or viewport changes

---

## 3. Form and Input Anti-Patterns
- Clearing valid form fields after a submission error
- Vague or generic error messages ("Something went wrong")
- Validation rules hidden until after submission failure
- Aggressive inline validation that fires before the user finishes typing
- Required fields without clear, accessible indicators
- Unnecessary formatting restrictions on phone numbers or dates
- Forms that do not preserve user input across recoverable failures
- Simulating a successful submission when the backend request actually failed

---

## 4. Feedback and State Anti-Patterns
- No visible response to user clicks or form submissions
- Loading spinners that persist indefinitely without timeout or error states
- Success messages that appear when the operation actually failed
- Toast notifications that disappear before users can read them
- Sound or audio alerts without user control or toggle
- Error messages that offer no actionable recovery steps

---

## 5. Content and Copy Anti-Patterns
- Fabricated testimonials, fake client logos, or invented statistics
- Misleading pricing or hidden fees revealed at the final step
- Interchangeable marketing copy with no product specifics
- Wall-of-text sections without typographic hierarchy or scannability
- Inconsistent terminology for identical concepts across pages
- Ambiguous button labels ("Submit", "Click Here") instead of action-oriented text
- Em dashes or dash-based asides in ordinary user-facing prose and copy
- Generic AI buzzwords ("empowering", "revolutionizing", "seamless", "next-gen")

---

## 6. Visual and Spatial Anti-Patterns
- Decorative elements that obscure text readability or clickable controls
- Inconsistent spacing scales and haphazard alignment across components
- Poor colour contrast failing WCAG AA standards
- Competing focal points causing cognitive overload
- Inconsistent component treatments and borders across different routes
- Arbitrary visual effects (blurs, gradients, shadows) unrelated to content hierarchy
- Using the identical layout composition for every page of a multi-page product

---

## 7. Interaction and Motion Anti-Patterns
- Disabled buttons without tooltips or explanations of missing requirements
- Destructive actions executed without confirmation dialogs
- Unexpected page redirects or modal interruptions without user action
- Infinite scroll with no way to access the footer or return to previous positions
- Hover-dependent interactions on touch devices
- Fake interactions added to make screenshots look functional
- Controls that do not perform the action implied by their labels
- Excessive parallax or scroll-jacking that causes motion sickness or input lag

---

## 8. Trust and Dark Patterns
- Deliberately confusing cancellation or unsubscribe flows
- Preselected checkboxes that opt users into unwanted services or marketing
- Fake urgency or artificial countdown timers that reset on refresh
- Confusing consent dialogs designed to trick users into accepting tracking
- Hidden subscription terms or forced payment information for free trials

---

## 9. Accessibility Anti-Patterns
- Images without descriptive alternative text (or icons with redundant labels)
- Focus traps in dialogs or menus that prevent keyboard escape
- Colour used as the sole means of communicating status or error
- Custom interactive controls without keyboard event handlers (`keydown`, `keyup`)
- Missing `<label>` tags on form inputs
- Non-semantic markup (e.g. `div` tags with `onClick`) replacing native HTML elements
- Animations that ignore `prefers-reduced-motion` settings
