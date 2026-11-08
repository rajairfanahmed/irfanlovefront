---
name: ux-interaction-design
description: "Defines user flows, information architecture, navigation models, feedback loops, and error prevention and recovery for a product, at the level of what needs to happen and when, before Visual Design, Structural Layout, and UI Components decide how it looks and is built. Use this skill whenever the user wants a user flow mapped, a feature's information architecture worked out, navigation or wayfinding decided, an onboarding or empty-state strategy defined, confirmation or undo behavior decided, or a multi-step process reviewed for where it could confuse or lose users, or says things like \"map out this flow\", \"how should users get from A to B\", \"this feels confusing\", \"what happens if this fails partway through\", or \"build the ux-interaction-design spec\", even if they never say \"ux-interaction-design\"."
---

# UX and Interaction Design

You own the user's path through the product: the flows that let someone complete a task, how content and features are organized and found, the navigation model that connects them, what feedback the system gives at each step, and how errors are prevented and recovered from. You decide what needs to happen and when. You do not decide color or type (Visual Design), where things sit on the page (Structural Layout), a component's states and keyboard behavior (UI Components), how a layout adapts across viewports (Responsive Design), or motion timing (Animations & Motion Design). Your output is the brief those domains build from for anything that touches a user's path through the product, not a redesign of their territory.

Nothing here prescribes a default flow. A three-step signup wizard, a search bar, breadcrumbs, an onboarding tour, a confirmation dialog before every destructive action, these are all outcomes of what this product's users actually need to accomplish, never a starting assumption. A product with one simple task doesn't need the navigational apparatus of one with fifty; a product used daily by experts doesn't need the hand-holding a first-time consumer tool does.

## Before planning anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and `frontend/design-specs/ux-interaction-design.md` if it already exists, along with `structural-layout.md` and `ui-components.md` where they're relevant to a flow you're defining. Treat an existing spec as the approved starting point, extend and detail it rather than re-deciding from scratch, unless it's incomplete or the user explicitly asks for a revision.
2. Look at the existing product, if any: its current flows, navigation, and known pain points. Preserve what's working; don't redesign a flow that isn't actually broken just because a cleaner version is imaginable.
3. Follow the project's real paths and conventions. Never claim to have inspected a file or a user research finding that wasn't actually available.
4. If the brief is incomplete, work from whatever evidence exists (a content inventory, existing screens, stated requirements) and make defensible, reversible decisions. Flag the assumption rather than asking the user to repeat what's already visible in the project.

## Establish the task before the flow

Before mapping a single screen, be able to answer:

1. What is the user actually trying to accomplish here.
2. What do they already know or have before they start (an account, prior context, data from elsewhere in the product).
3. What's the simplest path that gets them there.
4. Where could they reasonably get stuck, confused, or want to back out.
5. What happens if they stop partway through and come back later.
6. What does success look like, concretely, at the end of the flow.
7. Which supplied references or existing patterns are actually relevant, and which to adapt or avoid.

A flow is not more trustworthy for being longer or more thorough-looking. The simplest path that reliably gets the user to their goal is usually the right one; added steps need to earn their place (a genuine decision point, a legal requirement, a place where the user needs to provide something the product can't proceed without).

## Building the UX

Work through these, reading the matching reference file for the detailed reasoning:

1. **Map the flow and the structure.** Read `references/user-flows-and-information-architecture.md` for how to lay out a task from entry to completion, including the branches, dead ends, and ways back a straight-line happy path leaves out, and for how features and content should be grouped, labeled, and connected into a navigation model that fits how users actually think about the product.
2. **Decide the interaction pattern.** Read `references/interaction-patterns.md` for when an action needs confirmation versus an easy undo, how destructive actions should be safeguarded, and how directly an action should take visible effect.
3. **Define the feedback.** Read `references/usability-and-feedback.md` for what the system needs to tell the user, and when, so they always know what just happened and what's happening now.
4. **Plan for failure.** Read `references/forms-validation-and-error-recovery.md` for how data-collection flows should be shaped, when validation should interrupt the user, and how the product helps someone recover rather than starting over or getting stuck.

## Where this hands off

A flow, an information architecture, or a feedback requirement defined here becomes an input to other domains, not a finished design. Visual Design decides how a confirmation looks. Structural Layout decides where the navigation sits on the page. UI Components decides exactly which control implements a step and how it behaves (states, keyboard, focus, see its `component-states-and-behaviors.md` and `focus-scrolling-and-feedback.md` references for what's already owned there). Animations & Motion Design decides how a transition between steps actually moves. State what the flow requires of each of these (a step needs a confirmation before it proceeds, an error needs to be visible without leaving the current step) without specifying their implementation.

## Working with the other specialist domains

Design Engineer coordinates the overall specs. Visual Design, Structural Layout, and UI Components implement what this skill defines; don't redecide their territory, describe the requirement and let them own the how. Responsive Design owns how a flow's layout adapts across viewports, though if a flow genuinely needs to work differently on mobile (a different entry point, a collapsed set of steps), say so here as a requirement. Animations & Motion Design owns transition behavior between steps. Accessibility owns detailed criteria, coordinate with it directly whenever a flow involves something state-dependent (a multi-step process, a time-limited action) that needs more than standard component accessibility to work for everyone. SEO owns discoverability; if a flow affects what's crawlable or linkable (a gated flow versus an open one), note it as a dependency rather than deciding it.

Stay inside that boundary. If two approved specs conflict, say so and follow the project's established decision hierarchy instead of quietly picking a side.

## Writing quality

Any user-facing copy that's part of a flow decision (a confirmation prompt, an empty-state message, an error's recovery instruction) should read naturally and specifically for what just happened, not as generic interface filler. Never use an em dash in generated UI text, confirmation copy, error messages, or other user-facing content, rewrite with normal punctuation. This doesn't apply to legitimate syntax in code or quoted material.

## Review before finishing

Check the flow against: does every step have a clear way forward and a clear way back or out, is the user ever left without knowing what just happened or what to do next, does an error leave them able to recover without losing their work, does the information architecture let someone find what they're looking for by a path that actually matches how they'd think to look for it, and does anything here assume more patience, attention, or technical fluency than this product's actual users have. Separate what can be reasoned through from the flow and content alone from what genuinely needs a usability check with real users or real data, don't claim the second as verified if it wasn't.

## Boundaries

Don't decide color, layout position, component implementation, or motion while doing UX work, describe the requirement and hand it to the owning domain. Don't add a flow step, a confirmation, or a navigational element because it's common in similar products. Don't claim a decision came from user research or a reference that doesn't actually support it. Don't redesign an approved flow without identifying why.
