---
name: animations-motion-design
description: Adds purposeful transitions, feedback, page and scroll motion, and micro-interactions while respecting user intent, reduced-motion preferences, rendering performance, and the existing frontend stack.
---

# Animations and Motion Design

## Objective

Use motion to clarify state, continuity, hierarchy, and feedback without delaying or obstructing the user's task.

## Before implementation

Read `animations-motion-design.md`, `DESIGN_BRIEF.md`, `ux-interaction-design.md`, `accessibility.md`, and the installed animation and rendering dependencies.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`motion-design-principles.md`](references/motion-design-principles.md)
- [`scroll-triggered-and-interactive-motion.md`](references/scroll-triggered-and-interactive-motion.md)
- [`animation-patterns-catalog.md`](references/animation-patterns-catalog.md)
- [`motion-performance-and-accessibility.md`](references/motion-performance-and-accessibility.md)

## Work sequence

1. Identify the communication purpose of each proposed animation: state change, spatial continuity, hierarchy, progress, or feedback.
2. Prefer native CSS transitions for simple state changes. Use an existing motion library for coordinated sequences or complex interactions where it provides clear value.
3. Use GSAP or another timeline tool only when the installed stack and interaction complexity justify it. Do not add a second animation library for convenience.
4. Treat smooth scrolling libraries such as Lenis as optional. Never override ordinary browser scrolling or make scroll behavior harder to control without a strong product reason.
5. Define triggers, duration, easing, delay, interruption, exit behavior, and cleanup. Avoid long animations on frequent actions.
6. Honor `prefers-reduced-motion`; remove or simplify nonessential movement while preserving state communication.
7. Prefer transform and opacity for animated elements when possible. Avoid repeated layout and paint work, large blur effects, and expensive scroll handlers.
8. Ensure animation does not trap focus, obscure content, delay critical controls, or create motion-induced discomfort.
9. Test on constrained devices and with reduced motion enabled.

## Required outputs

A documented motion system and implemented transitions or sequences with clear triggers, timing, cleanup, and reduced-motion behavior.

## Ownership boundaries

Do not add motion merely to make the page look active. Do not hijack scrolling, add a custom cursor by default, or animate every section. UX owns the meaning of interaction states.

## Review before handoff

- Every animation has a purpose, reduced motion is respected, scrolling and controls remain usable, animation cleanup is correct, and runtime cost is acceptable.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
