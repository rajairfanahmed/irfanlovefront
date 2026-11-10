# Forms, Validation, and Error Recovery

Purpose: how data-collection flows should be shaped, when and how validation should interrupt the user, and how a flow helps someone recover when something goes wrong rather than losing their work or starting over. This is flow-level strategy; a specific field's markup, inline error display, and keyboard behavior belong to UI Components.

## Forms as a flow decision, not just a screen

Decide whether a form should be one step or several based on how much it's asking for and how related the fields are, not on a fixed preference for either. A short, closely related set of fields usually works better as one step; a long or conceptually distinct set (account details, then payment, then confirmation) usually works better split, so the user isn't confronted with everything at once. Ask only for what the product actually needs to proceed, and ask for anything optional later, after the user has already gotten value, rather than up front where it adds friction before they've decided the product is worth it.

## Validation timing

Decide deliberately when a field's validity is checked: as the user types, when they leave the field, or only on submission, matched to how disruptive interrupting them is for that specific field and how likely they are to get it wrong. A field prone to format mistakes (an email, a password meeting specific rules) often benefits from feedback as the user types or on blur; a field that depends on another field's value is often better checked on submission, once the full picture is available.

## Prevention before recovery

The best error handling is the error that never happens. Before designing a recovery path, check whether the flow itself can prevent the mistake: constraining input to valid options instead of validating free text after the fact, disabling an action until its prerequisites are met instead of letting it fail, showing the consequence of a destructive action before it's taken instead of after. Recovery design is still necessary, prevention just reduces how often it's needed.

## Anticipating where flows break

Walk through a flow looking specifically for where a realistic user, not an ideal one, could go wrong: a field left blank, a value outside what's expected, a network failure mid-submission, a session that expires while they're still working, two people editing the same thing at once, a step revisited out of order. A flow that's only been checked against the happy path will have real, undocumented failure modes in production.

## Distinguishing error types

Not every failure is the same kind of problem, and each needs a different response:

- **User input errors** (a required field left empty, an invalid format): point to exactly what needs to change, in place, without discarding what they already entered correctly.
- **System or network errors** (a request that fails for reasons outside the user's control): make clear it wasn't something they did wrong, and offer a retry where that's meaningful.
- **Permission or state errors** (an action that's not available given who they are or what's already happened): explain why, not just that it failed, and where possible offer the path to resolve it.
- **Catastrophic or unexpected errors**: fail safely, without losing the user's in-progress work, and give them a way forward even if it's just returning to a known-good state.

## Preserving user input

Whenever a flow can fail after a user has entered information, whatever can be preserved should be preserved, across a validation failure, a network error, a session timeout, or an accidental navigation away and back. Re-entering the same information from scratch after an error is one of the most common reasons users abandon a task entirely.

## Recovery paths, not dead ends

Every error state needs a next action available to the user, retry, go back and fix something specific, contact support, or a documented reason the action genuinely can't proceed right now. An error message with no path forward leaves the user stuck with no way to resolve it themselves.

## Partial failure in multi-step or multi-item operations

When an operation covers multiple items or steps and some succeed while others fail (a bulk action, a multi-file upload), tell the user specifically what succeeded and what didn't, not just an aggregate success or failure.

## Timeouts and expiration

When a flow involves a time limit (a session, a reserved item, a time-sensitive offer), make the limit visible before it's reached, not just enforced silently when it expires. Give a warning with enough time to act, and when expiration does happen, explain what happened and offer the clearest path to resume or restart.

## Concurrent edits and state conflicts

When more than one actor can affect the same data, decide how the conflict surfaces: whichever change happens last silently wins, the user is warned and asked to resolve it, or the system merges non-conflicting changes automatically. Silent, unexplained data loss from an unresolved conflict is one of the more damaging failure modes to trust in a product.

## Communicating what actually happened

An error message should say what happened and, where it's knowable, why, in language the user can act on, not a raw system error or an error code with no explanation. Where the full technical detail is genuinely useful to a developer or a support team, make it available without making it the primary thing a regular user has to read.

## Verifying error handling

Whether an error path exists and preserves input can be checked by inspection or by deliberately triggering the failure. Whether a given message actually reads clearly to someone encountering it for the first time is harder to self-certify, state plainly whether this was checked against a real failure or only reasoned through.
