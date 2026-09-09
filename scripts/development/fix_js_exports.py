# -*- coding: utf-8 -*-
import os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def w(path, content):
    p = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Created JS export:', path)

# packages/utils/src/geo.js
w("packages/utils/src/geo.js", """
const EARTH_RADIUS_KM = 6371.0;
function toRadians(deg) { return (deg * Math.PI) / 180.0; }
function toDegrees(rad) { return (rad * 180.0) / Math.PI; }
function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const dLat = toRadians(lat2 - lat1); const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return EARTH_RADIUS_KM * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
function haversineDistanceMeters(lat1, lon1, lat2, lon2) { return haversineDistanceKm(lat1, lon1, lat2, lon2) * 1000.0; }
function calculateBearing(lat1, lon1, lat2, lon2) {
  const phi1 = toRadians(lat1); const phi2 = toRadians(lat2); const deltaLambda = toRadians(lon2 - lon1);
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  return (toDegrees(Math.atan2(y, x)) + 360.0) % 360.0;
}
function pointInCircle(point, center, radiusMeters) { return haversineDistanceMeters(point[0], point[1], center[0], center[1]) <= radiusMeters; }
function calculateSpeedKph(distanceMeters, timeDeltaSeconds) { return timeDeltaSeconds > 0 ? (distanceMeters / timeDeltaSeconds) * 3.6 : 0; }
function isGpsJitter(lat1, lon1, lat2, lon2, timeDeltaSeconds, maxSpeed = 300) {
  if (timeDeltaSeconds <= 0) return true;
  return calculateSpeedKph(haversineDistanceMeters(lat1, lon1, lat2, lon2), timeDeltaSeconds) > maxSpeed;
}
module.exports = { toRadians, toDegrees, haversineDistanceKm, haversineDistanceMeters, calculateBearing, pointInCircle, calculateSpeedKph, isGpsJitter };
""")

# packages/utils/src/crypto.js
w("packages/utils/src/crypto.js", """
const crypto = require('crypto');
function generateHmacSignature(payload, secret) { return crypto.createHmac('sha256', secret).update(payload).digest('hex'); }
function verifyHmacSignature(payload, secret, expected) { return generateHmacSignature(payload, secret) === expected; }
function generateSecureToken(bytes = 32) { return crypto.randomBytes(bytes).toString('hex'); }
function hashApiKey(rawKey) { return crypto.createHash('sha256').update(rawKey).digest('hex'); }
module.exports = { generateHmacSignature, verifyHmacSignature, generateSecureToken, hashApiKey };
""")

# packages/utils/src/network.js
w("packages/utils/src/network.js", """
function calculatePercentile(values, percentile) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (percentile / 100) * (sorted.length - 1);
  const lower = Math.floor(index); const upper = Math.ceil(index); const weight = index - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}
function calculatePacketLoss(sent, received) { return sent > 0 ? (Math.max(0, sent - received) / sent) * 100.0 : 0; }
function calculateAvailabilitySla(uptimeSeconds, totalSeconds) { return totalSeconds > 0 ? Math.min(100.0, Math.max(0.0, (uptimeSeconds / totalSeconds) * 100.0)) : 100.0; }
module.exports = { calculatePercentile, calculatePacketLoss, calculateAvailabilitySla };
""")

# packages/config/src/constants.js
w("packages/config/src/constants.js", """
const ROLE_PERMISSIONS_MAP = {
  SUPER_ADMIN: ['*'],
  ADMIN: ['users.view', 'devices.view', 'devices.create', 'devices.update', 'devices.delete', 'network.view', 'network.manage', 'alerts.view', 'alerts.manage'],
  NETWORK_ADMIN: ['network.view', 'network.manage', 'network.probe', 'topology.view', 'alerts.view', 'alerts.manage'],
  NETWORK_OPERATOR: ['network.view', 'network.probe', 'alerts.view', 'alerts.acknowledge'],
  SECURITY_ANALYST: ['audit.view', 'security.inspect', 'reports.view', 'alerts.view'],
  MANAGER: ['analytics.view', 'reports.view', 'reports.generate'],
  MONITORING_OPERATOR: ['devices.view', 'locations.view', 'network.view', 'alerts.view'],
  DEVICE_OWNER: ['devices.own.view', 'locations.own.view'],
  STANDARD_USER: ['devices.view', 'network.view', 'alerts.view'],
  VIEWER: ['devices.view', 'network.view', 'alerts.view']
};
module.exports = { ROLE_PERMISSIONS_MAP };
""")
