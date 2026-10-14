# Motion and Responsive Design

## Interaction Design

### Interaction categories
Click, tap, hover, keyboard, focus, selection, expansion/collapse, drag and drop, touch gestures, scrolling, inline editing, keyboard shortcuts, contextual actions, form submission, navigation, background processing

### Interaction sequence
Triggering action → state transition → visual feedback → result

### Interaction states
Default, hover, focus, active, selected, disabled, loading, expanded, collapsed, empty, success, error, validation failure, permission denied, offline, unsaved changes

---

## Motion Design

### Motion intentionality
Do not treat motion as a package-installation task or decorative finish. Before adding any animation, define:
- What it communicates (feedback, hierarchy, continuity, spatial relationship, comprehension)
- What triggers it (user action, state change, scroll position, page load)
- How it responds to user input
- Whether it improves the experience or merely decorates it

### Motion categories
Entry and exit transitions, hover motion, scroll-triggered effects, scroll-linked animation, parallax, staggered elements, shared-element transitions, layout changes, loading animations, chart transitions, animated icons, cursor effects, background motion, reduced-motion alternatives

### Motion properties
Duration, easing, distance, direction, scale, opacity, sequencing, trigger, interruption, continuity between states, relationship to user action

### Motion purposes
- **Functional:** Feedback, state communication, orientation, spatial relationships
- **Decorative:** Visual personality, atmosphere, brand expression, delight

Distinguish animation that provides orientation, feedback, or context from motion that is primarily decorative. Do not infer exact duration, easing curves, or animation libraries from a static image.

### Motion quality
- Duration and easing appropriate to the action
- Transitions that communicate spatial relationships
- Staggering that establishes hierarchy
- Loading animations that indicate progress honestly
- Reduced-motion alternatives that preserve essential feedback
- Motion that does not delay or obstruct user actions
- Performance-conscious animation

### Motion anti-patterns
- Excessive parallax that distracts from content
- Ornamental cursor effects without functional purpose
- Repeated reveal animations on every section
- Blanket transition utilities applied uniformly
- Fake interactions added to make screenshots appear sophisticated
- Motion libraries added without checking the installed stack first
- Any advertised control that does not do what its label implies

### Motion library guidance
Use GSAP, Lenis, or other motion libraries only when suitable for the existing project and the requested experience. Inspect the installed stack before adding dependencies. Do not add motion dependencies merely to have them available.

---

## Responsive Design

### Responsive principles
Fluid layouts, content reflow, breakpoints, adaptive navigation, text wrapping, mobile ergonomics, touch interaction, responsive information density

### Responsive considerations
- Content prioritization across viewports
- Layout transformation
- Column reduction
- Navigation adaptation
- Image cropping and responsive images
- Typography scaling
- Spacing changes
- Component resizing
- Overflow management
- Sticky behaviour
- Touch target placement
- Desktop-to-mobile interaction changes
- Orientation changes
- Tablet and intermediate layouts
- RTL adaptation where applicable

### Responsive quality checks
- No unintended horizontal overflow
- Text remains readable
- Controls remain usable
- Important content not clipped
- Navigation works across viewport sizes
- Sticky/fixed elements do not obstruct content
- Tables and charts have usable narrow-screen treatments
- Responsive changes preserve task priorities

### Responsive verification honesty
Distinguish between a genuinely responsive layout, a breakpoint-specific arrangement, and a separately designed mobile experience when sufficient evidence exists. Never claim a page is fully responsive without inspecting it at appropriate viewport sizes. If visual inspection tools are not available, state the limitation.

---

## Frontend Implementation Constraints
- Semantic HTML
- Reusable components
- Design tokens
- State management
- Accessible component behaviour
- Browser compatibility
- Maintainable CSS

## Real-World Interface States
Loading, empty data, errors, slow requests, partial results, missing information, permission restrictions, offline operation, session expiration

## Quality Checks
Visual consistency, responsive testing, functionality, accessibility, rendering behaviour, performance, regression testing

Reference: ISO 9241-210:2019 for human-centred design throughout the lifecycle of interactive systems.
