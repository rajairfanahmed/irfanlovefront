# Production Readiness Checklist

Use before a real release. This checklist does not itself authorize deployment.

## Application and configuration
- [ ] Production build and required checks pass.
- [ ] Runtime/environment configuration is documented and validated.
- [ ] Production secrets use an approved secure store/configuration.
- [ ] Debug features and default credentials are disabled.
- [ ] HTTPS, CORS, cookies, and security headers are appropriate.
- [ ] Request size, resource, and rate limits are configured.

## Data and dependencies
- [ ] Migrations are reviewed and tested.
- [ ] Backups and restore procedures are understood and tested as required.
- [ ] Provider credentials and webhook endpoints are configured securely.
- [ ] Queue retries, idempotency, and failed-job handling are defined.
- [ ] Data retention and deletion behavior are understood.

## Operations
- [ ] Liveness/readiness checks are appropriate.
- [ ] Logs are structured and redact sensitive values.
- [ ] Metrics, alerts, and error tracking are available as needed.
- [ ] Deployment owner and support responsibility are known.
- [ ] Rollback/mitigation steps are documented.
- [ ] Critical user journeys have a post-release smoke test.

## Authorization and safeguards
- [ ] User explicitly authorized production deployment/changes.
- [ ] Target environment and exact actions are known.
- [ ] Destructive migrations/infrastructure changes have an approved recovery plan.
