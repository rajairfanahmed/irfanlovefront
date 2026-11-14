# State, Routing, and Data Flow

## Classify state before choosing a store

- **Ephemeral UI state:** open menu, active tab, local disclosure, temporary input focus.
- **URL state:** search terms, filters, sorting, pagination, selected record, shareable view.
- **Server state:** records, permissions, subscriptions, inventory, profile, and other backend-owned truth.
- **Session or identity state:** determined by the documented auth integration.
- **Persistent client preference:** theme or local display preference when persistence is appropriate.

Keep state as close as possible to the component or route that owns it. Use a shared store only when multiple independent parts of the application must coordinate and the existing framework mechanisms are insufficient.

## Routing

Define public, authenticated, role-sensitive, and not-found routes deliberately. Protect sensitive data on the server or backend. A hidden link or client redirect is not an access-control boundary. Preserve browser history, direct navigation, refresh, and deep links.

## Data access

Use a typed request layer that respects the backend contract. Centralize error parsing, authentication integration, request cancellation, serialization, and cache policy. Do not hide status codes or validation details that the interface needs to explain a failure.

## Caching and consistency

Define cache ownership, freshness, invalidation, and optimistic updates explicitly. Do not cache private or user-specific responses in a shared public cache. Follow backend versioning, ETag, pagination, and concurrency contracts where provided.

## Rendering boundaries

Use client-side code only where interactivity or browser APIs require it. Keep public content renderable and indexable according to the SEO requirements. Follow the installed framework version's current documentation for server and client components.
