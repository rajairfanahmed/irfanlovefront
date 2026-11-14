# Performance and Scalability

Read when a workload requirement, measured performance issue, caching decision, or concurrency/scaling change is in scope.

## 1. Measure first

Establish a baseline and locate the bottleneck: CPU, memory, database, network, provider latency, queue backlog, serialization, or frontend behavior. Use representative workloads. Do not optimize by intuition alone.

## 2. API performance

Bound request work and payloads. Paginate large collections. Avoid N+1 queries and repeated provider calls. Apply request/database timeouts and concurrency limits. Cache only with a defined key, scope, TTL, invalidation, consistency, and failure fallback.

## 3. Cache correctness

Never share authorization-sensitive cache entries across users/tenants. Do not use cache as the source of truth for critical state unless architecture explicitly supports it. Define what stale data means and when it is acceptable.

## 4. Database performance

Inspect query plans, indexes, joins, access patterns, pool behavior, lock contention, and transaction duration. Add indexes based on observed queries, considering write and storage costs.

## 5. Async work

Move suitable slow/retryable work to background jobs. Define queue capacity, concurrency, retry, dead-letter, idempotency, and user-visible status. Async processing does not remove the need for bounds or timeouts.

## 6. Scaling strategies

Vertical scaling adds resources to an instance. Horizontal scaling adds instances and requires shared-state/session strategy, load balancing, concurrency safety, and coordination where needed. Replicas, partitioning, sharding, and service decomposition add operational complexity; use when workload evidence justifies them.

## 7. Load testing

Define request mix, concurrency, dataset, ramp-up, duration, and acceptable latency/error thresholds. Test in safe non-production environments. Never run uncontrolled load against production or third-party services.

## 8. Scalability beyond throughput

Include availability, recovery, queue backlogs, observability, operational ownership, cost, and maintainability. Prefer simpler capacity improvements before major architecture changes when they satisfy requirements.
