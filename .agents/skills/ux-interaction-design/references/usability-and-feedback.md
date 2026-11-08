# Usability and Feedback

Purpose: what the system needs to tell the user, and when, so they always know what just happened, what's happening now, and what to expect next. This file decides what feedback a flow requires; how that feedback is implemented accessibly (a live region, a toast, a focus change) belongs to UI Components' focus and feedback reference.

## Every action needs a perceivable response

Any action a user deliberately takes needs some form of acknowledgment within a reasonable time, whether that's an immediate visual change, a loading indicator, or an eventual confirmation. An action that produces no perceivable change leaves the user unsure whether it registered at all, which leads to repeated attempts, abandoned tasks, or lost trust in the product.

## Matching feedback to the stakes

A low-stakes, instantly reversible action (toggling a preference) needs only a light, immediate acknowledgment. A high-stakes or hard-to-reverse action (deleting data, submitting a payment) needs clearer, more deliberate feedback, often paired with the confirmation or undo pattern decided in `interaction-patterns.md`. Calibrate the weight of the feedback to what's actually at risk, not uniformly across every action.

## Immediate versus eventual feedback

Some actions complete instantly and can be acknowledged the moment they happen. Others take real time (a file upload, a long-running process) and need an honest accounting of that time: a loading state immediately, progress indication if the duration is unpredictable or long, and a clear, separate confirmation when the result is actually ready. Don't show an immediate success state for something that hasn't actually finished.

## System status over time

Beyond individual actions, a user working through a multi-step process or waiting on a longer operation needs an ongoing sense of where things stand: how many steps remain, roughly how long something will take if that's knowable, and whether anything requires their attention. Silence during a long wait reads as the product being stuck, even when it isn't.

## Empty states

Every place that can show a list, a search result, or a collection needs a defined empty state, not just a blank area. A good empty state tells the user why it's empty (nothing added yet, no results matched, an error occurred) and, where relevant, what to do next. Distinguish a genuinely empty state from a filtered-to-empty state, these need different messages and different recovery actions.

## First-time and zero-data experiences

A section a new user is seeing for the first time, with no data of their own yet, is a specific case of an empty state that often deserves more context than a returning user's empty state would, since the new user doesn't yet know what normally goes there. Decide deliberately whether this needs onboarding content or whether a well-written empty state alone is sufficient, don't default to a guided tour for something a clear, in-place message would handle.

## Progress and multi-step awareness

In a flow with multiple steps, let the user see where they are in the sequence and roughly how much remains, when the sequence is fixed and knowable. For a flow whose length genuinely varies based on the user's own choices, be honest about that rather than showing a fixed step count that turns out to be wrong.

## Avoiding feedback fatigue

Not every minor internal state change needs user-facing feedback. Reserve confirmations, toasts, and notifications for things the user actually needs to know, feedback on every trivial action trains users to ignore all of it, including the messages that matter. Fewer, better-targeted signals are more effective than comprehensive but constant ones.

## Consistency of feedback patterns

The same kind of event (a successful save, a validation error, a destructive confirmation) should produce the same kind of feedback everywhere it occurs in the product. A user who learns what a particular pattern means in one place should be able to rely on that meaning holding elsewhere.

## Verifying feedback

Whether every significant action has some defined feedback can be checked by inspection, walking through the flow and confirming nothing happens silently. Whether a specific piece of feedback actually reads clearly and at the right moment to someone encountering it for the first time is harder to self-certify, state plainly whether this was checked against real use or only reasoned through.
