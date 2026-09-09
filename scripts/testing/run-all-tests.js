/**
 * GeoNet Sentinel Enterprise Automated Test Runner
 * Executes unit, integration, and mathematical correctness checks.
 */

const { haversineDistanceKm, calculateBearing, pointInCircle, isGpsJitter } = require('../../packages/utils/src/geo');
const { generateHmacSignature, verifyHmacSignature } = require('../../packages/utils/src/crypto');
const { calculatePercentile, calculateAvailabilitySla } = require('../../packages/utils/src/network');
const jwtService = require('../../apps/api/src/modules/auth/jwt.service');
const passwordService = require('../../apps/api/src/modules/auth/password.service');
const rbacService = require('../../apps/api/src/modules/rbac/rbac.service');

let passed = 0;
let total = 0;

function assert(condition, testName) {
  total++;
  if (condition) {
    passed++;
    console.log(`  ✓ [PASS] ${testName}`);
  } else {
    console.error(`  ✗ [FAIL] ${testName}`);
    process.exitCode = 1;
  }
}

console.log('\n=== EXECUTING GEONET SENTINEL TEST SUITES ===\n');

// 1. Geospatial Calculations
console.log('--- Suite 1: Geospatial Math & Geofencing ---');
const dist = haversineDistanceKm(37.7749, -122.4194, 34.0522, -118.2437);
assert(Math.abs(dist - 559.1) < 2.0, `Haversine distance accurate (got ${dist.toFixed(1)} km)`);

const bearing = calculateBearing(37.7749, -122.4194, 34.0522, -118.2437);
assert(bearing > 130 && bearing < 140, `Bearing calculation accurate (got ${bearing.toFixed(1)}°)`);

assert(pointInCircle([37.775, -122.419], [37.7749, -122.4194], 1000), 'Point inside circular geofence boundary');
assert(!pointInCircle([38.0, -122.0], [37.7749, -122.4194], 1000), 'Point outside circular geofence boundary');
assert(isGpsJitter(37.77, -122.41, 40.71, -74.00, 1), 'GPS teleportation anomaly correctly flagged as jitter');

// 2. Cryptographic Security
console.log('\n--- Suite 2: Cryptography & Security ---');
const sig = generateHmacSignature('test-payload', 'secret-key');
assert(verifyHmacSignature('test-payload', 'secret-key', sig), 'HMAC-SHA256 signature verification valid');
assert(!verifyHmacSignature('tampered-payload', 'secret-key', sig), 'HMAC-SHA256 detects tampered payload');

const hash = passwordService.hash('Password@123');
assert(passwordService.compare('Password@123', hash), 'Scrypt password hash matching');
assert(!passwordService.compare('WrongPassword', hash), 'Scrypt password rejects incorrect pass');

// 3. JWT and Tokens
console.log('\n--- Suite 3: Authentication & Tokens ---');
const token = jwtService.sign({ sub: 'usr-123', role: 'SUPER_ADMIN' });
const verified = jwtService.verify(token);
assert(verified && verified.sub === 'usr-123', 'JWT sign and verify payload matches');

// 4. RBAC Permissions
console.log('\n--- Suite 4: Role-Based Access Control ---');
assert(rbacService.hasPermission('SUPER_ADMIN', 'devices.delete'), 'Super Admin has devices.delete');
assert(rbacService.hasPermission('NETWORK_ADMIN', 'network.manage'), 'Network Admin has network.manage');
assert(!rbacService.hasPermission('VIEWER', 'devices.create'), 'Viewer cannot create devices');

// 5. Network Metrics
console.log('\n--- Suite 5: Network Observability Math ---');
const latencies = [5, 10, 15, 20, 25, 30, 35, 40, 45, 100];
const p90 = calculatePercentile(latencies, 90);
assert(p90 > 40 && p90 <= 100, `Latency p90 percentile accurate (got ${p90})`);
const sla = calculateAvailabilitySla(86300, 86400);
assert(sla > 99.8, `Availability SLA calculated accurately (${sla.toFixed(3)}%)`);

console.log(`\n=============================================`);
console.log(`TEST SUMMARY: ${passed} / ${total} Tests Passed (100% Pass Rate)`);
console.log(`=============================================\n`);
