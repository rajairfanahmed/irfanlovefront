# Backend Development Checklist

## Before implementation
- [ ] Requirements, business rules, actors, and acceptance criteria are understood.
- [ ] Existing repository conventions and stack are inspected.
- [ ] Architecture and module boundaries are appropriate to project size.
- [ ] Data ownership, tenant boundaries, and transaction needs are defined.
- [ ] API contracts and frontend impact are understood.
- [ ] Required references have been read; irrelevant references have not been loaded.
- [ ] Required project documentation is created or updated without duplication.
- [ ] Implementation sequence and dependencies are clear.

## During implementation
- [ ] Code follows the chosen framework's conventions.
- [ ] Responsibilities are separated appropriately.
- [ ] Server-side validation is implemented.
- [ ] Authorization is enforced on protected operations.
- [ ] Database operations preserve integrity and handle concurrency appropriately.
- [ ] External calls have appropriate timeout and failure handling.
- [ ] Secrets are not embedded in source code or logs.
- [ ] No placeholder behavior is used as a substitute for required functionality.
- [ ] Tests are added with the implementation.
- [ ] Changes remain within scope.

## Before completion
- [ ] Relevant unit, integration, API, and regression tests have been run.
- [ ] Build / lint / type-check results are recorded where applicable.
- [ ] Frontend contracts and user flows are verified when in scope.
- [ ] Error responses and edge cases are checked.
- [ ] Security and authorization cases are tested.
- [ ] Documentation matches actual code.
- [ ] Known limitations and unrun checks are disclosed.
