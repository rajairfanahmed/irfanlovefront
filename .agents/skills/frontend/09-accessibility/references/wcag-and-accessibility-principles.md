# WCAG and Accessibility Principles

Purpose: how to reason about accessibility conformance rather than apply it as a fixed checklist, what WCAG actually asks for, what a conformance level means in practice, and how to prioritize when not everything can be fixed at once.

## The four principles (POUR)

WCAG is organized around four principles, and every success criterion serves one of them:

- **Perceivable**: information and interface elements must be presentable in ways every user can perceive, not relying on a single sense alone (sight, hearing) to convey something essential.
- **Operable**: interface elements and navigation must be operable by a range of input methods, not assuming a mouse, not assuming a specific timing, not assuming a specific range of motor ability.
- **Understandable**: information and the operation of the interface must be understandable, readable content, predictable behavior, help identifying and recovering from mistakes.
- **Robust**: content must be robust enough to be interpreted reliably by a wide range of assistive technology, now and as that technology evolves, which is why correct semantics matter more than a specific tool's current behavior.

When evaluating an issue, identify which principle it actually violates, this clarifies what the real problem is rather than treating every issue as an undifferentiated "accessibility problem."

## Conformance levels

WCAG defines three conformance levels, A, AA, and AAA, each building on the one before it. Level A covers the most basic accessibility barriers. Level AA, the common target for most products and the one most legal and organizational standards reference, covers a broader and more rigorous set of requirements and is generally achievable for most content. Level AAA is the most stringent and isn't a universal requirement, it includes some criteria that are genuinely difficult or impossible to satisfy for certain kinds of content. Confirm which level actually applies to this project rather than assuming AA by default, though AA is the right assumption when nothing more specific is stated or required.

## What a success criterion actually asks

A WCAG success criterion is written to be testable, it describes a condition that either holds or doesn't, not a vague aspiration. Read a criterion for what it specifically requires rather than a loose paraphrase of its general theme, two criteria that sound similar in casual description (contrast, for instance, has separate criteria for text, for UI components, and for graphics) often have different, specific thresholds and scopes. When in doubt about what a criterion actually requires, check its precise wording and its official understanding document rather than working from memory of the general idea.

## Disability categories and their actual needs

Accessibility serves people with visual disabilities (blindness, low vision, color vision deficiency), auditory disabilities (deafness, hard of hearing), motor disabilities (limited fine motor control, limited range of motion, reliance on alternative input devices), and cognitive and learning disabilities (memory, attention, reading, language processing differences), along with people experiencing a temporary or situational limitation (an injury, bright sunlight on a screen, a noisy environment, one hand occupied). Keep the actual person and their actual need in view rather than treating "accessibility" as an abstract compliance category, a specific criterion exists because it addresses a specific, real barrier for a specific group of people.

## Accessibility is not just legal compliance

Meeting a conformance level is a genuine, necessary bar, but it's a floor, not the goal itself. A product can meet every applicable success criterion and still be meaningfully harder to use for a disabled user than it needs to be, verbose or confusing content structure, for instance, might pass WCAG's letter while still being a poor experience. Treat the standard as the minimum verified bar, and treat genuine usability for people who rely on assistive technology as the actual objective it's trying to approximate.

## Severity and prioritization

Not every accessibility issue carries equal weight. A barrier that prevents a user from completing a core task entirely (an inoperable form, a keyboard trap blocking an entire flow) is more urgent than one that creates friction without blocking the task (a suboptimal but still parsable heading structure). When a full fix isn't immediately possible, prioritize issues that completely block a task over ones that degrade it, and prioritize issues affecting a core, frequently used flow over an edge case or rarely visited page. State the prioritization reasoning explicitly rather than listing issues with no indication of which ones matter most.

## Common misconceptions

Accessible doesn't mean unstyled or visually plain, a well-designed, visually rich interface can be fully accessible when its underlying structure and behavior are correct. Automated testing passing doesn't mean the product is accessible, automated tools catch a real but limited fraction of actual WCAG criteria, most meaningfully require human judgment or genuine assistive technology testing to verify. Accessibility isn't only about screen readers, it covers keyboard operation, cognitive load, motor limitations, and more, a product that only considers screen reader users while ignoring keyboard-only or motor-impaired users has only addressed part of the picture.

## Applying principles to a specific finding

When reviewing something specific, state which principle and which concrete success criterion it relates to, what the actual barrier is for a real user, and what would resolve it, rather than a generic "this isn't accessible" with no actionable specifics. A finding that can't be tied to a concrete criterion or a concrete user impact is worth double-checking before reporting it as an issue.