# State, Routing, and Data Flow

Purpose: where state should live, how routing is organized, and how data moves through the application without becoming tangled. This is architectural strategy, not an individual component's own internal state (a hover flag, a local toggle), which UI Components already owns as part of a component's own design.

## Deciding where state belongs

State should live at the lowest level that can reasonably own it, and no lower. A value only one component uses belongs inside that component. A value several sibling components need belongs in their shared parent or an equivalent shared scope. A value genuinely needed across distant, unrelated parts of the application belongs in a more global mechanism. Lifting state higher than it needs to be makes a system harder to reason about and causes components to re-render for changes they don't care about; leaving it too local forces awkward prop-drilling or duplicated state that can drift out of sync. Reassess this as the application grows, a decision that was right when a feature was small can need revisiting once more components depend on the same value.

## Local state versus shared application state

Prefer a component's own local state for anything that doesn't need to be shared or persisted beyond that component's lifetime. Reach for a shared or global state mechanism only when state genuinely needs to be read or changed from multiple, otherwise unrelated parts of the application. Don't default to a global store for everything, a large pool of loosely related global state is often harder to maintain than well-scoped local state plus a few deliberately chosen shared values.

## Choosing a state management approach

Use what the framework already provides (built-in state and context mechanisms) until there's a concrete reason it's not enough, performance problems from excessive re-renders, state logic complex enough that a more structured approach genuinely helps, or a need (like time-travel debugging or cross-tab sync) a dedicated library specifically solves. Adding a state management library because it's commonly recommended, without a concrete problem it solves for this project, adds a dependency and a learning cost without a matching benefit. When the project already has an established state management approach, use it rather than introducing a second, competing one.

## Server state versus client state

Data that originates from and is owned by a server (fetched records, data that can change independently of the current user's actions) is a different kind of state from purely client-side UI state (a modal's open state, a form's current input before submission). Server state usually benefits from a dedicated data-fetching and caching approach (handling loading, error, staleness, and refetching) rather than being managed with the same tools as client-only UI state, which don't typically address caching or synchronization with a server's actual data. Keep the two categories conceptually distinct even when the specific library in use blurs the line.

## Routing structure

Organize routes to mirror the application's actual information architecture (see the ux-interaction-design skill's navigation and structure guidance) rather than an arbitrary technical grouping. Use the framework's file-based or configuration-based routing conventions as they're designed to be used, fighting a framework's routing conventions to achieve a structure it doesn't naturally support tends to create fragile, hard-to-maintain routing logic. Keep nested layouts and shared route segments genuinely shared, not duplicated across similar routes.

## URL as state

Data that affects what's shown and that a user would reasonably expect to bookmark, share, or navigate back to (a search query, an active filter, a selected tab, pagination position) belongs in the URL, not purely in component state, state that only the URL holds disappears on refresh or can't be shared with someone else by sending a link. Not every piece of state needs this treatment, but anything meeting that bar should get it.

## Data flow between components

Favor passing data down explicitly through props for a shallow, closely related component tree, and reach for context or a shared state mechanism only when the same data would otherwise need to pass through several intermediate components that don't themselves use it. That kind of pass-through, often called prop drilling, is a sign the data's natural home is higher or more shared than where it currently lives, not necessarily a problem to fix with the first available escape hatch, check whether restructuring the component tree itself would solve it before reaching for a global mechanism.

## Avoiding data loading waterfalls

When a view needs data from more than one source, check whether those requests can be initiated in parallel rather than one only starting after a previous one resolves, a sequential chain of otherwise-independent requests adds up to real, avoidable delay. This is a data-flow and architecture decision as much as a performance one, structure the code so independent data needs are fetched independently by default, coordinate specific performance targets with Performance Optimization.

## Form state as part of the broader strategy

A form's in-progress state (current field values, validation state) usually fits as local or form-scoped state rather than global application state, even for a complex, multi-step form, since it's rarely needed outside the form itself until submission. Decide how submission results then flow into the broader application state (does a successful submission update already-loaded server state, trigger a refetch, or redirect away) deliberately, rather than leaving the form's output disconnected from the rest of the application's data.

## Keeping state and routing changes isolated

When changing how state or routing works in one part of the application, check what else depends on the current structure before changing it, a shared piece of state or a route structure another feature already relies on can break in ways that aren't obvious from looking at the feature being changed alone.