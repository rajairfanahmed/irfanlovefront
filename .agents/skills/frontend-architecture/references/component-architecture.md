# Component Architecture

Purpose: how components should be organized and grouped at the codebase level, folder structure, module boundaries, and import direction, not an individual component's own responsibility or API, that belongs to UI Components' component-design-principles reference. This file is about where things live and how they relate to each other as the project scales, not what any single component does.

## Organizing by feature versus by type

A codebase can group files by technical type (all components in one folder, all hooks in another, all styles in a third) or by feature (everything related to a specific feature, its components, hooks, and styles, grouped together). Type-based organization tends to work for small projects where there aren't many features yet to group by. Feature-based organization tends to scale better as a project grows, since it keeps everything related to one part of the product changeable together without touching unrelated areas. Choose based on the project's actual current size and trajectory, not a default, and don't force a feature-based split on a project too small to have distinct features yet.

## Shared versus feature-specific components

A component used by more than one feature, or generic enough that it plausibly will be, belongs in a shared location (often `components/` or `ui/` at the project root). A component that's genuinely specific to one feature's needs belongs co-located with that feature, not promoted to the shared layer just in case it's needed elsewhere later. Promoting something to shared status prematurely tends to produce a component bent out of shape trying to serve requirements it doesn't actually have yet, wait until a second real use case appears before generalizing.

## Dependency direction

Shared, generic components should never import from feature-specific code, the dependency should only run one way, features depend on shared components, not the reverse. When a shared component starts needing to know about a specific feature's data or logic, that's a sign it's not actually generic anymore and either needs to be split, or the feature-specific part needs to be passed in rather than imported directly.

## Avoiding circular dependencies

Two modules that import from each other, even indirectly through a chain of other imports, create a circular dependency that can cause subtle bugs and makes the codebase harder to reason about. When restructuring components, check that the new organization doesn't introduce a cycle, particularly when splitting a large component into smaller pieces that each need something from the others, that's a common place for cycles to appear.

## Composition in code

Favor composing components from smaller, focused pieces (through children, slots, or explicit composition patterns the framework supports) over a single large component or a deeply nested prop-drilling chain trying to configure every variation from the top. This mirrors the composition-versus-configuration guidance in UI Components' own principles, applied here at the level of how the files and modules are actually structured, not just the component's conceptual API.

## Co-location of related files

Keep a component's styles, tests, and any component-specific types or utilities near the component itself rather than scattered across parallel folder structures that mirror each other (a components folder, a separate styles folder, a separate tests folder, each requiring a matching file for every component). Co-location makes it obvious what belongs together and reduces the chance of an orphaned style or test file nobody remembers to update.

## Naming conventions

Pick one consistent naming convention for component files and folders (a specific casing style, a specific pattern for an index or barrel file) and apply it uniformly. When a project already has an established convention, however it was chosen, follow it rather than introducing a second, competing one, consistency across the whole codebase is worth more than a marginally preferred alternative applied only to new code.

## Barrel files and public interfaces

A barrel file (an index file that re-exports a folder's contents) can make imports cleaner, but can also obscure a module's actual internal structure and sometimes hurts tree-shaking or build performance depending on the toolchain. Use one deliberately, to define a clear public interface for a module while keeping its internals free to change, not reflexively for every folder regardless of whether anything benefits from it.

## Server and client component boundaries

In a framework that distinguishes server and client components (such as a React Server Components-based framework), decide deliberately where that boundary sits: server components by default for anything that doesn't need interactivity or browser APIs, client components only where state, event handlers, or browser-only functionality genuinely require them. Pushing the client boundary too high in the tree (marking a large shared layout as client because one small interactive piece inside it needs to be) unnecessarily grows the amount of code shipped to the browser, isolate the interactive piece into its own small client component instead.

## Code splitting at component boundaries

Large components or features that aren't needed on initial load (a modal's contents, a secondary tab's view, a rarely used settings panel) are natural candidates for code splitting, so their code loads only when actually needed rather than being bundled into the initial page load. Decide this based on actual size and usage patterns, not by splitting every component reflexively, excessive splitting adds its own overhead and complexity.

## Scaling the structure

A structure that works cleanly for a small number of components can become unwieldy as the project grows, a flat components folder that was fine with fifteen components can become hard to navigate with two hundred. Revisit the organization when it's genuinely straining, not preemptively for a scale the project hasn't reached, and not so late that a necessary reorganization becomes a large, risky undertaking instead of a series of incremental improvements.