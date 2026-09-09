# Operational Runbook: API Gateway Ingestion DDoS Attack Mitigation
**Runbook Identifier**: RB-008-api-ddos-rate-limit-mitigation
**Classification**: STRICTLY INTERNAL / MISSION CRITICAL
**Target SLA Response**: Under 5 Minutes (SEV-1 / SEV-2)

## 1. Incident Overview & Trigger Conditions
This runbook governs emergency remediation procedures for: API Gateway Ingestion DDoS Attack Mitigation.
Triggered automatically when the Alert Engine detects sustained threshold breaches exceeding hysteresis limits.

## 2. Immediate Diagnostic Checklist
1. Verify active cluster health via `/api/v1/system/health`.
2. Inspect real-time network topology canvas at `/topology`.
3. Review unacknowledged alarms in the Incident Command Console (`/alerts`).
4. Confirm database replica lag and PostGIS spatial query execution latency.
5. Check Redis pub/sub queue depth and worker heartbeat indicators.

## 3. Step-by-Step Remediation Workflows
### Phase 1: Containment & Diagnostic Verification Step 1
- **Action**: Execute diagnostic probe sweep across impacted tier 1.
- **Command**: `npm run probe -- --tier=1 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 1 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_1`.

### Phase 2: Containment & Diagnostic Verification Step 2
- **Action**: Execute diagnostic probe sweep across impacted tier 2.
- **Command**: `npm run probe -- --tier=2 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 2 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_2`.

### Phase 3: Containment & Diagnostic Verification Step 3
- **Action**: Execute diagnostic probe sweep across impacted tier 3.
- **Command**: `npm run probe -- --tier=3 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 3 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_3`.

### Phase 4: Containment & Diagnostic Verification Step 4
- **Action**: Execute diagnostic probe sweep across impacted tier 4.
- **Command**: `npm run probe -- --tier=4 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 4 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_4`.

### Phase 5: Containment & Diagnostic Verification Step 5
- **Action**: Execute diagnostic probe sweep across impacted tier 5.
- **Command**: `npm run probe -- --tier=5 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 5 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_5`.

### Phase 6: Containment & Diagnostic Verification Step 6
- **Action**: Execute diagnostic probe sweep across impacted tier 6.
- **Command**: `npm run probe -- --tier=6 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 6 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_6`.

### Phase 7: Containment & Diagnostic Verification Step 7
- **Action**: Execute diagnostic probe sweep across impacted tier 7.
- **Command**: `npm run probe -- --tier=7 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 7 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_7`.

### Phase 8: Containment & Diagnostic Verification Step 8
- **Action**: Execute diagnostic probe sweep across impacted tier 8.
- **Command**: `npm run probe -- --tier=8 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 8 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_8`.

### Phase 9: Containment & Diagnostic Verification Step 9
- **Action**: Execute diagnostic probe sweep across impacted tier 9.
- **Command**: `npm run probe -- --tier=9 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 9 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_9`.

### Phase 10: Containment & Diagnostic Verification Step 10
- **Action**: Execute diagnostic probe sweep across impacted tier 10.
- **Command**: `npm run probe -- --tier=10 --target=datacenter-west`
- **Expected Outcome**: Return code 0 with latency delta under 15ms.
- **Rollback Contingency**: If latency exceeds 200ms, immediately isolate link tier 10 via Topology Inspector.
- **Audit Verification**: Ensure an audit log entry is recorded under action `DISASTER_RECOVERY_TIER_10`.

## 4. Post-Mortem & Forensic Audit Requirements
1. Capture full JSON telemetry snapshot from `/api/v1/reports/network-sla`.
2. Export security audit log trail filtered by incident timeframe.
3. Convene post-incident review within 24 hours to update threshold parameters.
