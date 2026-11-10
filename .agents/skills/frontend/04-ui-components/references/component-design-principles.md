# Component Design Principles

Purpose: how to decide what a component is responsible for, whether to reuse or build new, and how to shape its API so it stays predictable as the product grows. None of this requires every component to be generic or maximally reusable, match the approach to what the component actually needs to do.

## Responsibility and separation of concerns

A component should have one clear reason to exist, stated in a sentence someone else could understand without reading its code. If that sentence needs "and" to cover two unrelated jobs, it's probably two components. A component that renders content, fetches data, and manages page-level navigation state is carrying responsibilities that belong in different places.

## Reuse versus duplication

Reuse a component when two or more places need the same behavior and visual identity, and changes to one should reasonably apply to both. Duplicate (keep two separate, similar components) when the similarity is coincidental, when they're likely to diverge for good reasons, or when forcing a shared abstraction would make both harder to understand than two simple, separate implementations. Premature reuse is as real a cost as premature duplication, don't abstract on the first repetition, wait until a pattern is actually established.

## Composition versus configuration

Prefer composition (building a component from smaller, focused pieces, often via children or slots) over a single component configured by a growing list of props, when the variations are structural (different content, different arrangement of parts) rather than a small set of fixed states. Configuration (props and variants) fits better when the differences are a closed, well-understood set (a button's size or intent, a badge's color). A component that needs a dozen boolean props to express its possible shapes is usually a sign composition would serve better.

## Props and API design

Name props for what they mean, not how they're implemented. Use the project's actual type system to make invalid combinations unrepresentable where that's practical (a size prop as an enum of actual supported sizes, not an open string). Keep required props to what's truly required; everything else gets a sensible default only when a default actually makes sense for most callers, not just to avoid specifying it. Prefer a small number of named variants over several independent boolean flags that can combine into states nobody actually tested. Give callback props a clear, stable contract (what arguments they receive, when they fire, whether they can prevent the default action). Decide deliberately whether a component is controlled (the parent owns the state) or uncontrolled (the component owns it internally), and if both are supported, make the distinction explicit rather than letting it emerge by accident. Keep internal implementation state (animation state, a mouse-over flag) separate from state the parent needs to know about or control.

## Avoiding excessive boolean props

Each additional independent boolean roughly doubles the number of states the component can be in, most of which nobody designed, tested, or intended to support. When several booleans are mutually exclusive or represent points on the same spectrum, that's a sign they should be a single variant or enum prop instead.

## Shared components and domain-specific components

A shared, generic component (a button, a text field, a card primitive) belongs in the project's common component layer and should avoid knowledge of any specific feature. A domain-specific component (a `UserAvatarGroup`, an `OrderStatusBadge`) can and should know about its domain, and doesn't need to pretend to be generic. Don't force domain-specific logic into a shared primitive just to avoid creating a new component, and don't duplicate a generic primitive's logic inside a domain-specific wrapper when composition would do.

## Component variants

Create a variant when it expresses a real, recurring difference the product needs (a primary and secondary button that genuinely serve different purposes in the interface). Don't create a variant to match a one-off visual tweak a single screen happens to want, that's a sign either the design system needs a real new variant everywhere, or that screen needs a one-off override, not a permanent addition to the shared component's surface area.

## Design token integration

Components should consume the visual system's tokens (color roles, spacing, type, radius, shadow) rather than hardcoding values. This is how a visual-design update propagates without touching every component. When a project already has a token system, use it as-is; when it doesn't, that's a conversation with Visual Design, not something to improvise component by component.

## Component ownership and naming

Name components for what they are, not where they happen to be used first (`Card`, not `HomepageFeatureBox`), unless a component is genuinely specific to one context, in which case its name should say so. Keep a clear, discoverable location for shared components so the next person (or the next skill invocation) can find out whether something already exists before building a duplicate.

## Maintainability and testability

A component is maintainable when its behavior can be understood from its API without reading the implementation, and testable when its states and interactions can be verified without excessive setup. Keep side effects (network calls, subscriptions, timers) isolated and cleaned up properly rather than scattered through the render logic. A component with many branches based on untyped flags is hard to test exhaustively, that's a case where tightening the API (see props and API design, above) pays for itself.

## Avoiding excessive abstraction

A configuration system, a generic renderer, or a plugin-style API is justified when the actual variation it needs to support is open-ended and will keep growing. It's not justified for a fixed, small set of known variants, a direct implementation with explicit variants is easier to understand, test, and modify. If nobody can explain what problem an abstraction solves beyond "flexibility," that's a sign to simplify it.

## Avoiding tight coupling

A component shouldn't need to know about its parent's internal state, a specific page's layout, or another unrelated component's implementation to function correctly. Coupling that seems convenient early on (reaching into a sibling's state, assuming a specific parent container) tends to become the hardest thing to change later. Pass what's needed explicitly through props, context, or an agreed interface instead.

## Consistent behavior across the product

The same kind of component should behave the same way everywhere it's used (the same keyboard shortcuts, the same focus behavior, the same loading pattern) even when its visual styling differs by context. Behavioral drift is harder to spot than visual drift and usually more damaging to usability, check for it deliberately.

## Component documentation

Document a component's purpose, its props, and any non-obvious behavioral decision (why it's uncontrolled, why it doesn't support a seemingly obvious variant) at the level the project already documents things, inline comments, a dedicated doc file, or a props table, whichever convention exists. Don't generate exhaustive documentation nobody will read for a project that has no such convention.

## Integration with an existing design system

When a design system already exists, extend it: match its naming, its token usage, its composition patterns. Introducing a parallel, incompatible system is a cost the project will carry indefinitely. If the existing system is genuinely inadequate for a new requirement, say so explicitly and propose an extension, rather than quietly working around it.

## Migration and compatibility

When changing a component that's already used elsewhere in the project, check what consumes it first, and prefer a change that's backward compatible (a new optional prop, a new variant) over one that breaks existing usage, unless the task is explicitly a breaking migration. When a breaking change is necessary, identify every place it needs to be updated rather than assuming the change is isolated.