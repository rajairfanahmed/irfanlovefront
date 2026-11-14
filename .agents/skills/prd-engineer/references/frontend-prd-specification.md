# Frontend PRD Specification

## Purpose

Describe the complete user-facing product experience in enough detail that the Design Engineer and Frontend Engineering skills can produce and implement it without guessing product behavior.

The Frontend PRD defines interface requirements and behavior. It is not a substitute for the Design Engineer's detailed visual design brief or component-level implementation plan.

## Product-level frontend context

Document:
- Supported surfaces: desktop web, mobile web, native app, desktop app, or other.
- User roles and permission-aware experiences.
- Primary journeys and navigation model.
- Brand/design inputs supplied by the user.
- Accessibility, language, localization, device, and browser constraints.
- Public/private page distinction and SEO needs.

## Page and route specification

For every required page/screen, define:
1. Route or screen identifier and access rules.
2. Page purpose and primary user task.
3. Entry points and exit/navigation destinations.
4. Information hierarchy and content required.
5. Layout regions and key sections, without inventing a visual treatment that has not been approved.
6. Components, controls, and important reusable patterns.
7. User actions and expected results.
8. Data the page needs and the agreed API/operation supplying it.
9. Initial, loading, empty, partial, success, failure, disabled, offline, and unauthorized states where applicable.
10. Responsive transformations and touch behavior.
11. Accessibility and keyboard requirements.
12. Page-specific acceptance criteria.

## Component and interaction specification

For each meaningful component, define its purpose, variants, states, inputs, outputs, action, validation, focus behavior, and responsive constraints. Do not merely list component names.

For forms, specify:
- Field label, semantic type, required/optional status, constraints, formatting, placeholder/help text when needed.
- Client-side validation timing and messages.
- Server validation mapping and how errors are presented.
- Submission pending state, duplicate-submit prevention, success behavior, and retry behavior.
- Keyboard and screen-reader expectations.

For destructive, financial, irreversible, or privacy-sensitive actions, specify confirmation and recovery behavior.

## Frontend data and API behavior

For every user action that reads or changes server data, link to the exact API/operation ID in `api-contract.md` or `BACKEND_PRD.md`. Define:
- When the call occurs.
- Required inputs and data dependencies.
- Loading and disabled behavior.
- Success handling and state refresh/invalidation.
- Error mapping, field errors, retry affordance, and fallback.
- Empty and partial data behavior.
- Authorization failures and expired-session handling.

Never invent an endpoint, response property, or authentication mechanism. If the backend contract is open, record an explicit dependency and do not pretend the integration is finalized.

## Visual direction

Record approved direction, visual references, brand assets, typography preferences, density, tone, and constraints supplied or approved by the user. Avoid forcing a generic aesthetic or a category stereotype. Where the user has not selected a visual direction, describe the design problem and open choices for discussion.

Hand off page structure, interaction intent, and visual constraints to the existing Design Engineer skill for detailed synthesis. The Design Engineer must not change approved product behavior without raising the change for approval.

## Responsive and accessibility requirements

Specify responsive intent from the beginning, not only as a late enhancement. Identify layout transformations, content priority, navigation adaptation, touch target constraints, and any mobile-specific workflows.

Accessibility is a design and implementation invariant. Specify semantic structure, labels, keyboard operation, focus order/management, contrast expectations, status announcements, and reduced-motion behavior where relevant.

## SEO

For indexable public pages, define metadata/content expectations, canonical behavior, structured data needs, sitemap/robots requirements, and rendering/indexing constraints. Do not apply public SEO patterns to private authenticated screens.

## Frontend acceptance

Use observable outcomes. Include normal, validation, permission, failure, and responsive scenarios when relevant. Frontend acceptance criteria must align with backend behavior and product acceptance criteria.
