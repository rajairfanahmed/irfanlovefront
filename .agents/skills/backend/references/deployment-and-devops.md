# Deployment and DevOps

Read when packaging, configuring, releasing, hosting, containerizing, or operating a backend.

## 1. Environment separation

Keep development, testing, staging, and production configuration separate. Validate required configuration at startup. Use safe defaults for local development and never bundle production secrets into images, source code, or frontend assets.

## 2. Build and runtime

Document reproducible install, build, migration, start, and health-check commands. Use the runtime and build process expected by the existing stack. Avoid assuming a particular hosting platform.

## 3. Containers

When Docker is appropriate:
- Use a minimal, maintained base image.
- Pin dependencies and use reproducible builds.
- Run as a non-root user where practical.
- Keep secrets out of image layers.
- Use health checks and correct signal handling.
- Separate build-time and runtime configuration.
- Avoid copying local caches, secrets, or development artifacts into the image.

Do not add Docker solely for appearance if the project has no container requirement.

## 4. CI / CD

A typical pipeline may include dependency installation, formatting / lint, type checking, unit tests, integration tests, build, security / dependency checks, artifact creation, migration review, staged deployment, smoke tests, and rollback handling. Select steps proportionally to project risk.

Protect deployment credentials and restrict who can trigger production releases.

## 5. Database releases

Coordinate code and schema changes. Prefer backward-compatible expand-and-contract migrations for rolling deployments. Take and verify backups before risky operations. Confirm migration behavior and rollback / recovery plans. Do not run destructive production migrations without explicit authorization.

## 6. Release readiness

Before a release, confirm:
- Correct environment and secrets are configured.
- Build and tests pass to the agreed standard.
- Migrations are reviewed and tested.
- HTTPS, allowed origins, cookies, and security headers are configured.
- Health checks and logs are available.
- Backups and recovery are understood.
- Rollback or mitigation steps exist.
- Monitoring and ownership are defined.

## 7. Deployment execution safeguards

Distinguish preparing deployment configuration from actually deploying. Do not deploy, change DNS, rotate live secrets, modify production databases, or incur cloud costs without explicit user authorization. State exactly which actions are proposed and which were performed.

## 8. Post-deployment verification

When authorized and possible, verify service health, critical API paths, logs, error rate, database connectivity, and key user journeys. A successful deploy command alone is not proof that the release works.
