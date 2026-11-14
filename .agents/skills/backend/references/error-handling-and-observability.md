# Error Handling and Observability

Read for centralized errors, logging, metrics, tracing, monitoring, production diagnosis, or runtime reliability.

## 1. Expected vs unexpected failures

Expected business failures include validation, missing resource, permission denial, state conflict, and rate limit. Unexpected failures include unhandled exceptions, infrastructure faults, and programming defects. Map internal failures to stable, safe API responses; never return stack traces, SQL details, filesystem paths, secret configuration, or raw provider errors to clients.

## 2. Centralized handling

Use the framework's established middleware, exception filters, or handler. Keep response shapes consistent. Avoid broad catch blocks that swallow errors or falsely return success. Add context and rethrow or map failures deliberately.

## 3. Structured logging

Where supported, record timestamp, severity, environment/service, request/correlation ID, operation, duration, sanitized actor/tenant/resource identifiers, error category, and safe diagnostics. Never log passwords, full tokens, secret keys, payment credentials, or unnecessary personal data. Redact headers and payload fields.

## 4. Metrics

Useful metrics include request count, latency percentiles, error rate, saturation, queue depth, job duration, database pool usage, and provider failures. Define metric meaning consistently; avoid collecting business metrics without a real operational need.

## 5. Tracing

Use distributed tracing when requests cross services/workers and operational complexity justifies it. Propagate trace context without treating it as identity.

## 6. Health checks

Distinguish liveness (process should remain running) from readiness (service can safely receive traffic). Do not expose internal dependency/configuration details publicly. Avoid expensive deep checks on every probe.

## 7. Diagnose failures

Reproduce safely, capture correlation context, inspect sanitized logs/metrics, identify the failing boundary, find root cause, add regression coverage, verify recovery, and update operational notes when useful.

## 8. Alerting and retention

Alerts should be actionable and tied to meaningful thresholds/symptoms. Avoid alert fatigue. Set retention and access to fit privacy, compliance, and operational needs.
