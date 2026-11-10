# Error Handling and Observability

Read when implementing centralized errors, logs, metrics, tracing, monitoring, or diagnosing runtime behavior.

## 1. Error-handling design

Separate expected business errors from unexpected system failures. Examples of expected errors include validation failure, missing resource, permission denial, state conflict, and rate limit. Unexpected failures include unhandled exceptions, infrastructure faults, and programming defects.

Map internal errors to stable, safe API responses. Do not return stack traces, SQL details, filesystem paths, secret configuration, or raw provider errors to clients.

## 2. Centralized handling

Use the framework's established error middleware, exception filters, or handler. Keep response shape consistent. Avoid broad catch blocks that swallow errors or falsely report success. Add context and rethrow or map errors deliberately.

## 3. Structured logging

Where supported, use structured logs with fields such as:
- Timestamp and severity.
- Environment and service / component.
- Request or correlation ID.
- Operation name and duration.
- Safe actor / tenant / resource identifiers where justified.
- Error category and sanitized diagnostic details.

Never log passwords, full tokens, secret keys, payment credentials, or unnecessary sensitive personal data. Redact headers and payload fields carefully.

## 4. Metrics

Useful service metrics may include request count, latency percentiles, error rate, saturation, queue depth, job duration, database pool usage, and external dependency failures. Measure business metrics only where needed and define their meaning consistently.

## 5. Tracing

Use distributed tracing when requests cross several services or asynchronous workers and the operational complexity justifies it. Propagate correlation / trace context without exposing it as trusted identity.

## 6. Health checks

Distinguish:
- **Liveness:** process is alive and should not be restarted.
- **Readiness:** service can safely receive traffic, considering required dependencies.

Do not expose detailed internal dependency or configuration information publicly. Health endpoints should not perform expensive deep checks on every probe.

## 7. Failure diagnosis

When investigating a defect:
1. Reproduce with a safe test case.
2. Capture the request / job context and correlation ID.
3. Inspect sanitized logs and relevant metrics.
4. Identify the failing boundary (validation, domain, data store, network, provider, or runtime).
5. Determine root cause rather than patching only the visible symptom.
6. Add a regression test.
7. Verify recovery behavior and update operational notes if needed.

## 8. Alerting and retention

Alerts should be actionable and based on meaningful thresholds or symptoms. Avoid alert fatigue. Set log / metric retention and access according to operational, privacy, and compliance needs. Monitor sensitive administrative events where appropriate.
