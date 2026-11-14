# Deployment and DevOps

Read when packaging, configuring, releasing, hosting, containerizing, or operating a backend.

## 1. Environment separation

Separate development, test, staging, and production configuration. Validate required settings at startup. Never bundle production secrets into images, source, frontend assets, or build artifacts.

## 2. Reproducible runtime

Document install, build, migration, start, and health-check commands. Use the runtime/build process expected by the stack. Do not assume a host or cloud provider.

## 3. Containers

When Docker is justified, use a minimal maintained base, reproducible installs, non-root runtime where practical, health checks, correct signal handling, and separate build/runtime config. Keep secrets out of layers and exclude local caches/dev artifacts. Do not add Docker solely for appearance.

## 4. CI/CD

A pipeline may include install, format/lint, type-check, unit/integration tests, build, dependency/security checks, artifact generation, migration review, staged deployment, smoke tests, and rollback. Select controls proportional to risk. Protect deployment credentials and limit production release permissions.

## 5. Database releases

Coordinate code/schema changes. Prefer backward-compatible expand-and-contract migrations for rolling deploys. Test migrations, verify backups for risky work, and define rollback/recovery. Do not execute destructive production migrations without explicit authorization.

## 6. Release readiness

Confirm environment/secrets, build/tests, migration safety, HTTPS/CORS/cookies/headers, health checks/logs, backups/recovery, rollback, monitoring, and ownership.

## 7. Deployment authorization

Preparing configuration is not deploying. Do not deploy, change DNS, rotate live secrets, modify production databases, or incur cloud costs without explicit user authorization for the target environment and action.

## 8. Post-deployment checks

When authorized and possible, verify service health, critical APIs, database connectivity, logs/error rate, and key user journeys. A successful deployment command alone is not proof the release works.
