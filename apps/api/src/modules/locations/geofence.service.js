const { pointInPolygon, pointInCircle } = require('../../../../../packages/utils/src/geo');
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
