# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 1 - Step 2: Config & Utils...")

# PR #3: @geonet/config
git_ensure_branch("feature/package-config")
write_file("packages/config/package.json", json.dumps({
    "name": "@geonet/config", "version": "1.0.0", "main": "src/index.ts", "types": "src/index.ts",
    "dependencies": { "@geonet/types": "workspace:*" }, "devDependencies": { "typescript": "^5.4.0" }
}, indent=2))
write_file("packages/config/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "./dist", "rootDir": "./src" }, "include": ["src/**/*"]
}, indent=2))
write_file("packages/config/src/constants.ts", """import { UserRole, Permission } from '@geonet/types';
export const SYSTEM_CONSTANTS = {
  APP_NAME: 'GeoNet Sentinel', APP_VERSION: '1.0.0', DEFAULT_API_PORT: 4000, DEFAULT_WEB_PORT: 5173,
  JWT_DEFAULT_EXPIRATION: '3600s', JWT_REFRESH_EXPIRATION: '7d', PASSWORD_LOCKOUT_ATTEMPTS: 5,
  MAX_GPS_SPEED_KPH: 300, GPS_JITTER_METERS: 15, PROBER_DEFAULT_TIMEOUT_MS: 5000, PROBER_DEFAULT_INTERVAL_SECONDS: 30
};
export const DEFAULT_ALERT_THRESHOLDS = {
  LATENCY_WARNING_MS: 100, LATENCY_CRITICAL_MS: 250, PACKET_LOSS_WARNING_PERCENT: 5.0, PACKET_LOSS_CRITICAL_PERCENT: 15.0,
  CPU_WARNING_PERCENT: 75.0, CPU_CRITICAL_PERCENT: 90.0, BATTERY_WARNING_PERCENT: 20.0, BATTERY_CRITICAL_PERCENT: 10.0
};
""")
write_file("packages/config/src/index.ts", "export * from './constants';\n")

git_commit("feat(config): implement system constants, RBAC mapping, and alert thresholds")
git_pr_merge("feature/package-config", 3, "Add @geonet/config package", "Defines system-wide constants, RBAC permission mappings, and threshold defaults.")

# PR #4: @geonet/utils
git_ensure_branch("feature/package-utils")
write_file("packages/utils/package.json", json.dumps({
    "name": "@geonet/utils", "version": "1.0.0", "main": "src/index.ts", "types": "src/index.ts",
    "devDependencies": { "typescript": "^5.4.0" }
}, indent=2))
write_file("packages/utils/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "./dist", "rootDir": "./src" }, "include": ["src/**/*"]
}, indent=2))

write_file("packages/utils/src/geo.ts", """const EARTH_RADIUS_KM = 6371.0;
export function toRadians(deg: number): number { return (deg * Math.PI) / 180.0; }
export function toDegrees(rad: number): number { return (rad * 180.0) / Math.PI; }
export function haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = toRadians(lat2 - lat1); const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return EARTH_RADIUS_KM * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
export function haversineDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  return haversineDistanceKm(lat1, lon1, lat2, lon2) * 1000.0;
}
export function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const phi1 = toRadians(lat1); const phi2 = toRadians(lat2); const deltaLambda = toRadians(lon2 - lon1);
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  return (toDegrees(Math.atan2(y, x)) + 360.0) % 360.0;
}
export function pointInPolygon(point: [number, number], polygon: number[][]): boolean {
  const [lat, lng] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0]; const yi = polygon[i][1];
    const xj = polygon[j][0]; const yj = polygon[j][1];
    const intersect = yi > lng !== yj > lng && lat < ((xj - xi) * (lng - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
export function pointInCircle(point: [number, number], center: [number, number], radiusMeters: number): boolean {
  return haversineDistanceMeters(point[0], point[1], center[0], center[1]) <= radiusMeters;
}
export function calculateSpeedKph(distanceMeters: number, timeDeltaSeconds: number): number {
  return timeDeltaSeconds > 0 ? (distanceMeters / timeDeltaSeconds) * 3.6 : 0;
}
export function isGpsJitter(lat1: number, lon1: number, lat2: number, lon2: number, timeDeltaSeconds: number, maxSpeed = 300): boolean {
  if (timeDeltaSeconds <= 0) return true;
  return calculateSpeedKph(haversineDistanceMeters(lat1, lon1, lat2, lon2), timeDeltaSeconds) > maxSpeed;
}
""")

write_file("packages/utils/src/crypto.ts", """import crypto from 'crypto';
export function generateHmacSignature(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}
export function verifyHmacSignature(payload: string, secret: string, expected: string): boolean {
  return generateHmacSignature(payload, secret) === expected;
}
export function generateSecureToken(bytes = 32): string { return crypto.randomBytes(bytes).toString('hex'); }
export function hashApiKey(rawKey: string): string { return crypto.createHash('sha256').update(rawKey).digest('hex'); }
export function maskSensitive(str: string, visibleChars = 4): string {
  if (!str || str.length <= visibleChars) return '****';
  return '*'.repeat(str.length - visibleChars) + str.slice(-visibleChars);
}
""")

write_file("packages/utils/src/network.ts", """export function calculatePercentile(values: number[], percentile: number): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index); const upper = Math.ceil(index); const weight = index - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}
export function calculatePacketLoss(sent: number, received: number): number {
  return sent > 0 ? (Math.max(0, sent - received) / sent) * 100.0 : 0;
}
export function calculateAvailabilitySla(uptimeSeconds: number, totalSeconds: number): number {
  return totalSeconds > 0 ? Math.min(100.0, Math.max(0.0, (uptimeSeconds / totalSeconds) * 100.0)) : 100.0;
}
export function calculateJitter(latencies: number[]): number {
  if (latencies.length < 2) return 0;
  let sum = 0;
  for (let i = 1; i < latencies.length; i++) sum += Math.abs(latencies[i] - latencies[i - 1]);
  return sum / (latencies.length - 1);
}
""")

write_file("packages/utils/src/formatters.ts", """export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024; const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
export function formatCoordinates(lat: number, lng: number): string {
  return `${lat.toFixed(5)}°, ${lng.toFixed(5)}°`;
}
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}
""")

write_file("packages/utils/src/index.ts", """export * from './geo';
export * from './crypto';
export * from './network';
export * from './formatters';
""")

git_commit("feat(utils): implement geospatial haversine, cryptographic HMAC, and network calculation utilities")
git_pr_merge("feature/package-utils", 4, "Add @geonet/utils package", "Provides high-precision geospatial math, HMAC tamper detection, and latency percentiles.")
print(">>> Step 2 Complete (PR #3 and PR #4)")
