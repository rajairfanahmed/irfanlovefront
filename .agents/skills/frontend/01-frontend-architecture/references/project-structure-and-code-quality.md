# Project Structure and Code Quality

## Start from the repository

Inspect the actual project before choosing a folder convention. Identify the entry points, routes, shared layouts, feature modules, reusable components, styling layer, assets, data access, test locations, generated files, and build configuration. Follow local conventions unless they create a measurable maintenance or correctness problem.

## Organize around stable responsibilities

A structure should make it easy to find a route, feature, reusable UI element, domain type, and integration. Feature-oriented boundaries are useful when features have their own views, hooks, schemas, and tests. Shared modules should contain genuinely shared capabilities, not unrelated code placed together for convenience.

Avoid:
- a single oversized `components/` folder containing all application logic;
- generic `utils/` files with unrelated functions;
- one component per tiny markup fragment without a reuse or clarity benefit;
- folder structures that mirror a theoretical architecture rather than actual product needs;
- duplicate types or constants that can drift.

## Code quality rules

- Keep components focused and keep data transformations testable.
- Use strict typing where the project supports it. Avoid `any` as a way to silence uncertainty.
- Validate external data at system boundaries when its shape is not guaranteed.
- Keep secrets and server-only dependencies out of browser bundles.
- Avoid hidden side effects during render.
- Prefer explicit dependencies and stable public interfaces.
- Follow the installed formatter, lint rules, and test framework.

## Refactoring threshold

Refactor when the current structure obstructs the requested work, repeats meaningful behavior, hides ownership, or causes measurable defects. Do not reorganize the entire application as a side effect of a small feature.
