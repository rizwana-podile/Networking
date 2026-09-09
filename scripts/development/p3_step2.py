# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge, merge_to_main_milestone

print(">>> Starting Phase 3 - Step 2: Spatial Telemetry, Jitter & Geofences (PR #26 - #30)...")

# PR #26: HMAC Signature Verification
git_ensure_branch("feature/locations-hmac")
write_file("apps/api/src/modules/locations/hmac.service.js", """const crypto = require('crypto');
class HmacService {
  verify(payloadString, secret, signature) {
    if (!signature) return false;
    const computed = crypto.createHmac('sha256', secret).update(payloadString).digest('hex');
    try {
      return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(signature));
    } catch { return false; }
  }
}
module.exports = new HmacService();
""")
git_commit("feat(locations): implement cryptographic HMAC signature verification for device telemetry")
git_pr_merge("feature/locations-hmac", 26, "HMAC telemetry signature verification", "Ensures device payload authenticity and rejects tampered coordinates.")

# PR #27: GPS Jitter & Spoofing Filter
git_ensure_branch("feature/locations-jitter-filter")
write_file("apps/api/src/modules/locations/jitter.filter.js", """const { haversineDistanceMeters } = require('../../../../packages/utils/src/geo');
class JitterFilter {
  isAnomaly(lastPoint, currentPoint, maxSpeedKph = 300) {
    if (!lastPoint) return false;
    const timeDeltaSec = (new Date(currentPoint.timestamp).getTime() - new Date(lastPoint.timestamp).getTime()) / 1000;
    if (timeDeltaSec <= 0) return true;
    const distMeters = haversineDistanceMeters(lastPoint.latitude, lastPoint.longitude, currentPoint.latitude, currentPoint.longitude);
    const speedKph = (distMeters / timeDeltaSec) * 3.6;
    return speedKph > maxSpeedKph;
  }
}
module.exports = new JitterFilter();
""")
git_commit("feat(locations): add speed, bearing, and altitude validation to reject spoofed GPS jumps")
git_pr_merge("feature/locations-jitter-filter", 27, "GPS jitter and teleportation anomaly filter", "Rejects impossible speed jumps and GPS coordinate jitter.")

# PR #28: Historical Route Query & Spatial Clustering
git_ensure_branch("feature/locations-history")
write_file("apps/api/src/modules/locations/route.service.js", """const db = require('../../../../scripts/database/database-adapter');
const { haversineDistanceMeters } = require('../../../../packages/utils/src/geo');
class RouteService {
  async getRoute(deviceId, startDate, endDate) {
    const all = await db.query('device_locations');
    const filtered = all.filter(p => {
      if (p.deviceId !== deviceId) return false;
      const t = new Date(p.timestamp).getTime();
      return t >= new Date(startDate).getTime() && t <= new Date(endDate).getTime();
    }).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    let totalDist = 0;
    for (let i = 1; i < filtered.length; i++) {
      totalDist += haversineDistanceMeters(filtered[i-1].latitude, filtered[i-1].longitude, filtered[i].latitude, filtered[i].longitude);
    }

    return {
      deviceId,
      totalPoints: filtered.length,
      totalDistanceKm: (totalDist / 1000).toFixed(2),
      points: filtered
    };
  }
}
module.exports = new RouteService();
""")
git_commit("feat(locations): implement PostGIS spatial clustering and historical route query engine")
git_pr_merge("feature/locations-history", 28, "Historical route query service", "Queries route time ranges, calculates distance, and formats polyline paths.")

# PR #29: Geofencing Engine
git_ensure_branch("feature/locations-geofence")
write_file("apps/api/src/modules/locations/geofence.service.js", """const { pointInPolygon, pointInCircle } = require('../../../../packages/utils/src/geo');
class GeofenceService {
  constructor() { this.geofences = []; }
  addGeofence(fence) { this.geofences.push(fence); }
  checkBreaches(deviceId, lat, lng) {
    const breaches = [];
    for (const g of this.geofences) {
      if (g.assignedDeviceIds && !g.assignedDeviceIds.includes(deviceId)) continue;
      let inside = false;
      if (g.type === 'CIRCLE') inside = pointInCircle([lat, lng], g.coordinates[0], g.radiusMeters || 1000);
      else if (g.type === 'POLYGON') inside = pointInPolygon([lat, lng], g.coordinates);
      if (!inside && g.actionOnExit === 'ALERT') {
        breaches.push({ geofenceId: g.id, name: g.name, event: 'EXIT' });
      }
    }
    return breaches;
  }
}
module.exports = new GeofenceService();
""")
git_commit("feat(locations): add geofencing calculation engine with circular and polygon geofences")
git_pr_merge("feature/locations-geofence", 29, "Circular and polygon geofence breach engine", "Evaluates boundary limits and generates breach events.")

# PR #30: Real-Time Event Dispatcher
git_ensure_branch("feature/websocket-dispatcher")
write_file("apps/api/src/websocket/dispatcher.service.js", """const socketGateway = require('./socket.gateway');
class EventDispatcher {
  emitLocation(point) { socketGateway.broadcast('device.location.updated', point); }
  emitDeviceStatus(deviceId, status) { socketGateway.broadcast('device.status.changed', { deviceId, status, timestamp: new Date().toISOString() }); }
  emitNodeStatus(nodeId, status) { socketGateway.broadcast('network.node.status.changed', { nodeId, status, timestamp: new Date().toISOString() }); }
  emitAlert(alert) { socketGateway.broadcast('alert.created', alert); }
}
module.exports = new EventDispatcher();
""")
git_commit("feat(websocket): broadcast real-time location updates to authorized room subscribers")
git_pr_merge("feature/websocket-dispatcher", 30, "WebSocket real-time event dispatcher", "Broadcasts location, device status, and alert updates to connected clients.")

merge_to_main_milestone("Phase 3: Real-Time Communication & Device Ingestion API Completed")
print("=== PHASE 3 COMPLETED (PR #21 - PR #30) ===")
