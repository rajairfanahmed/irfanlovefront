# Project Structure and Code Quality

Purpose: the top-level organization of the codebase and the baseline standards that keep it maintainable as it grows, separate from how components specifically are organized, which belongs to `component-architecture.md`. This covers the project as a whole, its folders, its conventions, its quality gates.

## Top-level folder structure

Organize the project's top level around genuinely distinct concerns, application code, shared utilities, configuration, tests (if not co-located), build and tooling configuration, rather than an arbitrary or deeply nested structure that doesn't map to anything meaningful. Follow the framework's own conventions where it has strong opinions about structure (many frameworks expect specific folders for routes, for instance), fighting a framework's own structural conventions tends to cost more than it's worth.

## Naming conventions project-wide

Pick one consistent casing and naming convention for files and folders across the whole project, and apply it uniformly rather than letting different parts of the codebase drift into different conventions over time. When a project already has an established convention, follow it even if a different one would have been a marginally better starting choice, consistency across the existing codebase outweighs a small improvement applied inconsistently.

## Type safety

When the project uses a typed language or a type-checking layer, use it meaningfully rather than working around it, avoid broad escape hatches (an unchecked any-equivalent type) except where genuinely necessary, and type each piece of state and each function's inputs and outputs explicitly enough that mistakes surface at compile time rather than at runtime. Match the strictness level to what the project has already established; tightening a type-checking configuration for an existing, loosely typed codebase is a separate, deliberate undertaking, not something to silently ratchet up while working on an unrelated task.

## Linting and formatting

Follow the project's existing linting and formatting configuration rather than introducing a personal preference that conflicts with it. When no such configuration exists yet and one is being set up, choose rules that catch genuine bugs and inconsistencies (unused variables, unreachable code, inconsistent patterns) over purely stylistic preferences that don't affect correctness, and keep the ruleset something the team can actually satisfy without constant friction.

## Avoiding dead code

Remove code that's no longer reachable or used rather than leaving it in place commented out or behind an unused flag, dead code accumulates silently and makes the codebase harder to navigate and trust. When removing something that might still be needed, rely on version control to recover it later rather than leaving it in the live codebase as clutter.

## Dependency management

Add a new dependency only when it solves a real problem the project's existing tools don't already handle, and only after checking whether something already in the project could reasonably be extended to cover the need instead. Every dependency is an ongoing cost, bundle size, security surface, maintenance burden when it's updated or abandoned, weigh that cost against the actual value before adding one, rather than reaching for a popular library out of habit.

## Environment configuration

Keep environment-specific configuration (API endpoints, feature flags, secrets) out of the application code itself and in the project's established configuration mechanism, and never commit a real secret to version control. When a project already has an established pattern for this, follow it rather than introducing a second mechanism alongside it.

## Test organization

Where tests exist, keep them discoverable and close to what they test, co-located with the component or module where the project's conventions favor that, or in a clearly mirrored structure where they don't. This file is about where tests live and how the project is organized to support them, not what should be tested or how, which depends on what's being tested and belongs to the relevant specialist domain's own verification guidance.

## Documentation conventions

Document a module's purpose and any non-obvious architectural decision at the level the project already documents things, inline comments, a README per feature, a dedicated docs folder, whichever convention exists. Don't generate extensive documentation nobody will read for a project with no such convention, and don't leave a genuinely non-obvious decision (why a particular pattern was chosen over an apparently simpler one) entirely unexplained, someone will need that reasoning later.

## Monorepo versus single-repo considerations

A monorepo (multiple related projects or packages in one repository) is justified when there's genuine shared code or tight coordination needs across multiple deployable units, it's not a default for every project regardless of whether multiple units actually exist. A single project gains nothing from monorepo tooling and its added complexity. When a project already is a monorepo, work within its existing package boundaries rather than treating it as a single undifferentiated codebase.

## Code review and consistency standards

Where a project has established patterns for how code should look and be structured, whether from written guidelines or just from the existing code itself, match new code to those patterns rather than introducing a personally preferred alternative. Consistency within an existing codebase is usually worth more than a marginal improvement that only applies to new code, creating a codebase with two competing styles.