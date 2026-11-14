# Backend Development Checklist

## Before implementation
- [ ] Requirements, actors, business rules, and acceptance criteria are understood.
- [ ] Existing repository conventions and stack are inspected.
- [ ] Architecture and module boundaries fit project size.
- [ ] Data ownership, tenant boundaries, and transaction needs are defined.
- [ ] API contract and frontend impact are understood.
- [ ] Required references have been read; irrelevant references have not been loaded.
- [ ] Relevant docs are updated without creating competing copies.
- [ ] Implementation sequence and dependencies are clear.

## During implementation
- [ ] Code follows framework conventions and existing style.
- [ ] Responsibilities are separated proportionally to complexity.
- [ ] Server-side validation and authorization are enforced.
- [ ] Database operations preserve integrity and handle concurrency.
- [ ] External calls have timeouts and bounded retry behavior.
- [ ] Secrets are not embedded in source or logs.
- [ ] Required functionality is real, not placeholder behavior.
- [ ] Tests are added with implementation.
- [ ] Scope remains controlled.

## Before completion
- [ ] Relevant unit, integration, API, and regression tests were run.
- [ ] Build/lint/type-check outcomes are recorded where applicable.
- [ ] Frontend contracts and flows are verified when in scope.
- [ ] Error and edge cases are checked.
- [ ] Security and authorization cases are tested.
- [ ] Documentation matches actual code.
- [ ] Known limitations and unrun checks are disclosed.
