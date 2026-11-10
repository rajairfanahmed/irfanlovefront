# Component States and Behaviors

Purpose: how to decide which states a component actually needs, how they should transition, and how forms behave as a connected system rather than a collection of isolated inputs. None of the states listed below are mandatory for every component, a static display card may need none of them; a form field may need most.

## The state vocabulary

Default, hover, focus, active or pressed, selected, disabled, loading, success, error, empty, expanded and collapsed, open and closed, valid and invalid, read-only, pending, completed. Treat this as a vocabulary to draw from, not a checklist every component must satisfy. For each component, ask which of these actually apply to what it does, and define what changes, visually and behaviorally, for each one that does.

## State transitions

For every state a component can be in, know what triggers the move into it and out of it, and what happens to any content or input already present when the transition occurs (does a loading state preserve the form data underneath it, does closing a dialog discard or keep its draft content). An undefined transition is where a user ends up stuck or where data silently disappears.

## State ownership

Decide whether a piece of state belongs to the component internally (an accordion's open and closed state, if nothing outside needs to know) or needs to be visible to and controllable by its parent (a selected tab, if routing or another component needs to stay in sync). Getting this wrong in either direction either strands the parent without information it needs, or forces every consumer to manage state they shouldn't have to think about.

## Persistent versus temporary states

Some states should survive a page reload or navigation (a filled-in form field the user hasn't submitted yet, an expanded section they deliberately opened), others shouldn't (a hover state, a transient loading spinner). Decide this deliberately per component rather than letting it fall out of whatever storage mechanism happens to be easiest.

## Controlled versus internal state

A controlled component's state is driven entirely by its parent; an uncontrolled one manages its own. Mixing the two without a clear boundary (a component that's supposed to be controlled but also keeps an internal copy that can drift out of sync) is a common source of bugs where the displayed state and the actual state disagree. If a component supports both modes, make the switch between them explicit and well defined, not inferred from whichever props happen to be present.

## Pending operations

While an operation is in flight, decide what the user can and can't do: can they cancel it, can they trigger it again, is the triggering control disabled or does it show a loading indicator while remaining interactive for a different purpose. Leaving this undefined is how duplicate submissions and race conditions happen.

## Repeated user actions

If a user can trigger the same action multiple times in quick succession (clicking submit twice, double-tapping a toggle), decide explicitly whether that's idempotent, debounced, or prevented outright, rather than leaving it to whatever the framework happens to do by default.

## Failed operations and recovery

When an operation fails, the component needs to communicate what happened and give the user a real path forward: retry, edit and resubmit, or contact support, whichever actually applies. Returning to a bare default state with no explanation of the failure is a common and avoidable failure mode. Preserve whatever input the user already provided unless there's a specific reason not to.

## State synchronization

When the same underlying data is represented in more than one place (a count shown in a badge and in a detail view, a selection reflected in a list and in a summary), decide how they stay in sync, and prevent a state where they can legitimately disagree. A single source of truth, read by every view that needs it, is usually simpler to reason about than multiple copies kept manually in sync.

## Preventing contradictory states

A component should never be representable in a state that doesn't make sense (disabled and loading and showing a validation error simultaneously, for instance, unless that combination is actually meaningful for this component). When the type system or state model allows combinations that shouldn't exist, that's worth tightening rather than handling defensively in every place the component is used.

## Clear user feedback

Every state change a user causes deliberately should be perceivable, through a visual change, an announcement for assistive technology, or both, within a reasonable time. A state that changes silently (a save that succeeds with no confirmation, a filter that's applied with no visible change) leaves users unsure whether their action registered.

## Forms as a connected system

Treat a form's fields, validation, and submission as one system rather than isolated inputs:

- Every field needs a real label and, where useful, helper text, not just a placeholder (placeholders disappear on input and are not a reliable substitute for a label).
- Mark required and optional fields clearly and consistently; pick one convention for the whole form rather than mixing "required" asterisks on some fields and "(optional)" labels on others.
- Decide validation timing deliberately: on blur, on submit, or live after the first error, matched to how disruptive interrupting the user is for that specific field.
- Show inline errors next to the field they concern, in text, not color alone, and keep the field's previous value visible so the user isn't retyping from scratch.
- Define what the submit control does while a submission is pending (disable it, show a loading indicator, or both) and prevent a second submission from firing while the first is still in flight.
- When the server rejects a submission, show the real reason where it's known, map it back to the specific field when possible, and never silently clear the fields the user already filled in.
- Confirm success clearly, and decide whether the form resets, navigates away, or stays in place with its data, based on what the user would actually expect next.
- Client-side validation is for usability, catching obvious problems before a round trip, it never replaces server-side validation, which remains the actual source of truth.

## Async operation behavior

Any component that triggers a network request or other async work needs defined behavior for: the loading period, success, failure, and what happens if the component unmounts or the user navigates away before it resolves (the result shouldn't try to update a component that's no longer there). Cancel in-flight requests when their result is no longer relevant (a search-as-you-type field firing a new request before the previous one returns) rather than letting stale responses overwrite newer ones.

## Disabled versus unavailable actions

A disabled control (visibly present, not currently actionable, usually because of an unmet precondition) is different from an action that shouldn't be offered at all (hidden entirely, because the user has no permission or it's not relevant in this context). Confusing the two either shows users actions they can never actually take with no explanation, or hides something they could do if they understood what was missing. When disabling a control, prefer making the reason discoverable (helper text, a tooltip tied to a real trigger, not a hover-only tooltip on an element that can't receive focus) over leaving the user to guess.