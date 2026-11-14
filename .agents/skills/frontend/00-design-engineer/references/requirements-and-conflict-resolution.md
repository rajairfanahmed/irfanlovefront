# Requirements and Conflict Resolution

A sound design specification exposes uncertainty instead of hiding it. Use traceable decisions and a consistent priority order.

## Requirement sources

Record each requirement with:
- identifier;
- requirement statement;
- source and location;
- classification: confirmed, assumption, inferred, optional, or unresolved;
- affected user, route, component, or flow;
- acceptance evidence;
- dependency or owner.

## Priority order

Use this order when sources conflict:

1. Explicit, current user instruction and confirmed product policy.
2. Security, privacy, legal, and technical constraints that apply to the project.
3. Verified backend API and data contracts.
4. Confirmed product requirements and established behavior.
5. Supplied design references and documented brand rules.
6. Existing implementation conventions that are safe and intentional.
7. General design or engineering preference.

A static image cannot override a confirmed product requirement or API constraint. A design preference cannot justify a security or accessibility regression.

## Backend contract rules

For every planned operation, verify:
- endpoint path and HTTP method;
- request payload and query parameters;
- response schema and nullability;
- authentication and authorization requirements;
- pagination, sorting, filtering, and concurrency behavior;
- error envelope and validation details;
- file upload, download, streaming, or webhook implications where relevant.

Only copy values from a real backend contract. If a contract is missing, mark the operation as `Contract required`. Do not invent a route, payload property, response field, status code, or permission rule. Propose a contract change separately for backend review.

## Conflict record

Use a table such as:

| ID | Source A | Source B | Conflict | User impact | Recommended resolution | Owner | Status |
|---|---|---|---|---|---|---|---|

A resolution is complete only when the responsible owner accepts it and the source of truth is updated.

## Assumption control

Make assumptions explicit and keep them reversible where possible. A design assumption should not be implemented as a backend fact. Use a visible marker such as `Assumption: pending confirmation` in the specification.

## Scope control

Separate:
- required product capability;
- necessary usability support;
- visual refinement;
- optional enhancement;
- future possibility.

Do not expand a small request into an unrequested redesign. Conversely, do not omit a critical empty, failure, permission, or recovery state merely because it is absent from a screenshot.

## Completion rule

The brief must include unresolved decisions, their effects, and the least risky next step. A downstream specialist may proceed around a non-blocking unknown only when the assumption is explicit and does not create misleading product behavior.
