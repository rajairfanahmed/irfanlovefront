# Production Readiness Checklist

Use when preparing a real release. This checklist does not itself authorize deployment.

## Application and configuration
- [ ] Production build and required tests pass.
- [ ] Runtime and environment configuration are documented and validated.
- [ ] Production secrets are stored in an approved secret manager or secure environment configuration.
- [ ] Debug features and default credentials are disabled.
- [ ] HTTPS, CORS, cookies, and security headers are configured appropriately.
- [ ] Resource limits, request size limits, and rate limits are configured.

## Data and dependencies
- [ ] Migrations are reviewed and tested.
- [ ] Backups and restore procedures are understood and tested as required.
- [ ] External service credentials and webhook endpoints are configured securely.
- [ ] Queue retries, idempotency, and failed-job handling are defined.
- [ ] Data retention and deletion behavior are understood.

## Operations
- [ ] Liveness / readiness checks are appropriate.
- [ ] Logs are structured and redact sensitive values.
- [ ] Metrics, alerts, and error tracking are available as needed.
- [ ] Deployment owner and support responsibility are known.
- [ ] Rollback or mitigation steps are documented.
- [ ] Critical user journeys have a safe post-release smoke test.

## Authorization
- [ ] User has explicitly authorized production deployment or production changes.
- [ ] Target environment and exact actions are confirmed.
- [ ] Destructive migrations and infrastructure changes have an approved recovery plan.
