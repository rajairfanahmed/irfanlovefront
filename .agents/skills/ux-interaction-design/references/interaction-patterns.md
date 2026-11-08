# Interaction Patterns

Purpose: the recurring decisions about how the system should respond to what a user does, confirm or allow and let them undo, how directly an action takes effect, and how consistently these patterns hold across the product. This file owns the decision and its reasoning; how a confirmation or undo control is actually built, its states, keyboard behavior, and accessibility, belongs to UI Components.

## Confirmation before versus undo after

Decide, per significant action, whether it needs confirmation before it happens (a prompt asking the user to verify intent) or whether it's better handled with an easy undo after it happens. Confirmation before fits actions that are expensive to reverse or affect something beyond the user's own data. Undo after generally produces a smoother experience for actions that are genuinely reversible, since it doesn't interrupt the user's flow for something that turns out to be fine. Don't default to a confirmation dialog for everything, it trains users to click through them without reading, which defeats the purpose for the cases that actually matter.

## Making undo trustworthy

When undo is the chosen pattern, give the user a real, visible window to use it, not something that vanishes before they can react, and make clear what exactly will be undone if they act. Undo needs to actually restore the prior state completely, a partial or unreliable undo is worse than no undo at all, since it teaches users not to trust it.

## Destructive action safeguards

For an action that's hard or impossible to reverse, decide the right safeguard based on how severe and how easy to trigger accidentally it is: a simple confirmation for a moderate, deliberate action; a more deliberate safeguard (retyping a name, a short delay before the action commits) for something severe and easy to trigger by habit, like a familiar button position. Don't apply the heaviest safeguard to everything, it trains users to click through without reading, which removes the protection for the cases that actually need it.

## Direct manipulation versus mediated actions

Some interactions should feel immediate and direct, dragging an item to reorder it, toggling a setting, typing into a field, where the result is visible as it happens. Others genuinely need to be mediated through an explicit step, a form, a confirmation, a separate review screen, because the action has consequences the user needs to consciously commit to. Choosing direct manipulation for something that actually needs deliberate commitment (or the reverse, burying a low-stakes, reversible action behind unnecessary ceremony) is a mismatch between the interaction's weight and the action's actual stakes.

## Optimistic versus pessimistic updates

An optimistic update shows the result immediately and reconciles with the server afterward, which feels fast but needs a real plan for what happens if the action actually fails after the user has moved on. A pessimistic update waits for confirmation before showing the result, which is slower but never shows something that didn't actually happen. Choose based on how likely failure is, how bad a visible rollback would feel, and how much the action matters, not as a blanket default for every action in the product.

## Multi-actor flow signaling

In a flow where more than one person is involved (an approval, an invitation, a shared document), decide explicitly how each party learns the current state, a visible status they can check, a notification, or both, matched to how long the wait realistically is and how much the waiting party needs to know in the moment versus whenever they next check back.

## Consistency of interaction patterns

The same kind of action (a destructive delete, a reversible toggle, a multi-step commitment) should use the same pattern everywhere it occurs in the product. A user who learns that deleting an item in one place offers undo, while deleting a similar item elsewhere asks for upfront confirmation with no undo, has to relearn the product's behavior for every new context instead of transferring what they already know.

## Verifying interaction patterns

Whether a pattern is applied consistently across the product can be checked by inspection, auditing where each type of action appears and what safeguard or feedback it uses. Whether a specific safeguard actually prevents the mistake it's meant to, without becoming an ignored formality, is harder to confirm without real usage or data from an existing version. State plainly which kind of check was actually done.
