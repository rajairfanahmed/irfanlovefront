# Performance and Scalability

Read when there is a measured performance issue, a stated traffic / scale requirement, or a design decision involving caching, concurrency, or capacity.

## 1. Measure before optimizing

Establish a baseline and identify the bottleneck: application CPU, memory, database queries, network latency, external services, queue backlog, serialization, or frontend behavior. Use representative workloads. Do not optimize based only on intuition.

## 2. API performance

- Keep requests bounded and avoid unnecessary payload fields.
- Paginate large collections and cap page sizes.
- Avoid N+1 queries and repeated external calls.
- Apply timeouts to network and database operations.
- Use concurrency limits for expensive work.
- Cache only data with a clear invalidation and consistency strategy.

## 3. Caching

Define cache key, scope, TTL, invalidation, stale-data behavior, and failure fallback. Avoid caching authorization-sensitive data across users or tenants. Do not use cache as the sole source of truth for critical state unless the architecture explicitly supports it.

## 4. Database performance

Inspect query plans, indexes, joins, document access patterns, connection pool behavior, lock contention, and transaction duration. Add or change indexes based on observed queries and assess write / storage costs.

## 5. Asynchronous processing

Move suitable slow or retryable work to background jobs. Define queue capacity, concurrency, retry, dead-letter handling, idempotency, and user-visible status. Async processing does not remove the need for timeouts and resource limits.

## 6. Scaling strategies

- Vertical scaling increases resources for an instance.
- Horizontal scaling adds instances and requires shared state / session strategy, load balancing, concurrency safety, and distributed coordination where needed.
- Database read replicas, partitioning, sharding, and service decomposition add operational complexity; use only when the workload and measurements justify them.

## 7. Load and stress testing

Use a defined workload model: expected concurrency, request mix, data volume, ramp-up, duration, and acceptable latency / error thresholds. Test in a safe non-production environment. Do not run uncontrolled load against production or third-party services.

## 8. Scalability is not only throughput

Consider reliability, recovery, queue backlogs, observability, operational ownership, cost, and maintainability. Prefer simple capacity improvements before a major architecture change when they meet the requirement.
