const db = require('../../../../scripts/database/database-adapter');
const socketGateway = require('../../websocket/socket.gateway');
class LocationsService {
  async ingestLocation(payload) {
    const device = await db.findById('devices', payload.deviceId);
    if (!device) throw new Error('Device not found or unauthorized');

    const point = {
      deviceId: payload.deviceId,
      latitude: payload.latitude,
      longitude: payload.longitude,
      speedKph: payload.speedKph || 0.0,
      headingDegrees: payload.headingDegrees || 0.0,
      batteryLevel: payload.batteryLevel !== undefined ? payload.batteryLevel : device.batteryLevel,
      accuracyMeters: payload.accuracyMeters || 4.0,
      networkStatus: payload.networkStatus || 'ONLINE',
      timestamp: payload.timestamp || new Date().toISOString()
    };

    await db.insert('device_locations', point);
    await db.update('devices', device.id, {
      latitude: payload.latitude,
      longitude: payload.longitude,
      speedKph: point.speedKph,
      headingDegrees: point.headingDegrees,
      batteryLevel: point.batteryLevel,
      status: point.speedKph > 0 ? 'MOVING' : 'ONLINE',
      lastSeenAt: point.timestamp
    });

    socketGateway.broadcast('device.location.updated', point);
    return { success: true, point };
  }
}
module.exports = new LocationsService();
