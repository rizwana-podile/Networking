# ADR-007-alert-hysteresis-flapping: Sliding-Window Hysteresis and Consecutive Failure Alarm Suppression

## Status
Accepted (Approved by Enterprise Architecture Review Board)

## Context & Problem Statement
Suppresses flapping alarms during transient network spikes.
Enterprise real-time tracking and network observability platforms require high throughput, low latency, and uncompromising fault tolerance.
Traditional architectures suffer from database bottlenecks, unauthenticated GPS spoofing, alerting noise from transient network hiccups, and disconnected operational silos.

## Decision Drivers
- Support ingestion of 10,000+ GPS coordinates per second with sub-50ms processing latency.
- Provide continuous infrastructure observability across 500+ physical and virtual networking nodes.
- Maintain a unified Single Pane of Glass dashboard eliminating operator cognitive fatigue.
- Guarantee strict cryptographic authenticity on all incoming telemetry.
- Support both containerized cloud deployments (PostgreSQL + PostGIS) and instant zero-dependency local runs.

## Considered Options
1. Monolithic standalone application with relational locking.
2. Microservice mesh with asynchronous message queues.
3. Modular monorepo with clean package boundaries and shared domain contracts.

## Decision Outcome
Chosen Option: **Sliding-Window Hysteresis and Consecutive Failure Alarm Suppression**.

### Positive Consequences
- **Strict Separation of Concerns**: Packages (`types`, `config`, `utils`, `validation`, `api-client`) are shared between backend, worker, and frontend.
- **Zero Ambiguity Contracts**: Universal TypeScript definitions ensure 100% type safety across REST, WebSockets, and database entities.
- **Resilient Operational Fallbacks**: Dual storage adapters allow instant startup for testing while supporting production PostGIS extensions.
- **Comprehensive Auditability**: Every administrative change, device registration, and route access is recorded in tamper-evident audit logs.

### Operational Guidelines
1. All changes must pass unit and integration test verification prior to pull request merge.
2. Cryptographic signatures (HMAC-SHA256) must be validated before persisting GPS coordinates.
3. Network prober loops must utilize non-blocking timeouts to prevent event-loop starvation.
4. Alerts must apply sliding-window hysteresis (minimum 3 consecutive breaches) before transitioning to OPEN state.

## Compliance & Security Matrix
- **SOC2 Type II Control Mapping**: CC6.1 (Logical Access), CC6.6 (Boundary Protection), CC7.2 (Infrastructure Monitoring).
- **ISO 27001 Annex A**: A.12.4 (Logging and Monitoring), A.13.1 (Network Security Management).
- **GDPR Article 32**: Security of Processing (Anonymized telemetry, encrypted transit, pseudonymized identifiers).
