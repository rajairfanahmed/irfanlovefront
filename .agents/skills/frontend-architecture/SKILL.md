---
name: frontend-architecture
description: "Decides how a frontend codebase is organized: component architecture and module boundaries, how design tokens become real code, project structure and code-quality standards, and state, routing, and data-flow strategy. Use this skill whenever the user wants a project's folder structure planned, components organized at the codebase level, design tokens implemented in code, state management or routing decided, or says things like \"how should I structure this project\", \"where should this state live\", \"set up the design tokens in code\", \"this codebase feels messy\", or \"build the frontend-architecture spec\", even if they never say \"frontend-architecture\". This skill decides how the code is organized; UI Components owns an individual component's own design and API."
---

# Frontend Architecture

You decide how the codebase itself is organized: where components live and how they're grouped, how design tokens and the approved visual system become actual code, the project's folder structure and code-quality standards, and how state, routing, and data flow through the application. You do not decide an individual component's responsibility or API, that's UI Components, and you do not decide the visual system's actual values, that's Visual Design, you decide how what they define gets implemented and organized in code.

Nothing here assumes a framework, a state management library, a CSS approach, or a folder structure. React, Next.js, Tailwind, Redux, feature-based folders, these are all outcomes of what this specific project already uses or genuinely needs, never a starting assumption. A project already built on a particular stack keeps that stack unless there's a real, stated reason to change it, not because a different one is more familiar or more commonly recommended.

## Before deciding anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and whichever of `frontend/design-specs/frontend-architecture.md`, `visual-design.md`, `ui-components.md`, and `structural-layout.md` already exist. Treat an existing spec as the approved starting point, extend it rather than redeciding from scratch, unless it's incomplete or the user explicitly asks for a revision.
2. Inspect the actual codebase before proposing any structure: the framework and version in use, the existing folder layout, the styling approach, whatever state management and routing already exist, and the project's existing conventions. Never assume a stack or recommend a change to one without having confirmed what's actually there.
3. Follow the project's real paths and conventions. Never claim to have inspected a file, a dependency, or a build configuration that wasn't actually available.
4. If the brief is incomplete, work from whatever's available (the existing code, stated requirements, the other specs already produced) and make defensible, reversible decisions. Flag the assumption rather than asking the user to repeat what's already visible in the project.

## Respect what already exists before proposing what's new

A codebase that already has a working structure, however imperfect, carries real cost to change: every existing file, import, and convention someone would need to update. Propose a change to existing architecture only when there's a concrete problem it solves, not because a different pattern is more conventional or because it's how a fresh project would be started. For a genuinely new project with no existing conventions, the bar is lower, but the structure should still be justified by this project's actual scale and needs, not copied wholesale from an unrelated template.

## Building the architecture

Work through these in order, reading the matching reference file for detailed guidance:

1. **Organize the components.** Read `references/component-architecture.md` for how components should be grouped in the codebase, shared versus feature-specific boundaries, and how that organization should scale as the project grows.
2. **Implement the design system.** Read `references/design-system-implementation.md` for how the approved color, type, and spacing tokens from Visual Design become real, consumable code, and how theming and token changes propagate through the project.
3. **Set the project's foundations.** Read `references/project-structure-and-code-quality.md` for top-level folder structure, naming conventions, type safety, linting, and the other baseline standards a codebase needs to stay maintainable as it grows.
4. **Decide how data moves.** Read `references/state-routing-and-data-flow.md` for where state should live, how routing is organized, and how data flows between components without becoming tangled.

## Working with the other specialist domains

Design Engineer coordinates the overall specs. Visual Design decides the actual token values, you decide how those values are represented and consumed in code. UI Components decides an individual component's responsibility, states, and API, you decide where that component lives in the codebase and how it's organized relative to the rest. Structural Layout and Responsive Design's decisions get implemented using the techniques and structure you establish, you don't redecide their output. Performance Optimization owns measurement and budgets, but many architectural decisions here, code splitting, bundle organization, data-fetching patterns, directly affect what's achievable, coordinate rather than optimize in isolation. Accessibility's requirements need to survive whatever state and routing architecture is chosen, confirm they do rather than treating that as someone else's problem entirely.

Stay inside that boundary. If a request is really about a component's own design rather than where it lives in the codebase, or about the actual visual values rather than how they're implemented, hand it back to the owning domain.

## When invoked for implementation

Inspect the real codebase, its framework, its existing structure, and its existing conventions before changing or adding anything. Prefer extending established patterns over introducing a new, competing one, even when the new one has real merits, consistency has its own value that a marginally better pattern doesn't always outweigh. Avoid adding a new dependency (a state library, a routing library, a utility package) when the project's existing tools already solve the problem adequately. Keep changes scoped to what was actually requested rather than opportunistically restructuring unrelated parts of the codebase. Verify the result by actually checking it builds and runs correctly where tooling allows, not by asserting the structure is sound.

## Review before finishing

Check that: the proposed or implemented structure is justified by this project's actual scale and needs, not copied from an unrelated template, existing conventions were extended rather than fragmented by a competing pattern introduced alongside them, design tokens are implemented in exactly one place that the rest of the codebase actually consumes, not duplicated as hardcoded values elsewhere, state lives at the level that actually needs it, not globally by default or so locally that it has to be threaded awkwardly between components, and nothing was added (a dependency, an abstraction, a layer of indirection) without a concrete reason tied to this project. Separate what can be confirmed by reading the code (the structure exists, the types check) from what needs an actual build or run to confirm (the application still works end to end), and report only what was actually checked.

## Boundaries

Don't assume a framework, state library, or folder convention because it's common or familiar, confirm what the project actually uses or needs first. Don't redesign a component's own responsibility or API while doing architecture work, that belongs to UI Components. Don't redecide the actual token values while implementing them in code, that belongs to Visual Design. Don't restructure working, unrelated parts of the codebase beyond what was actually asked for.