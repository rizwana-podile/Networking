const db = require('../../../../scripts/database/database-adapter');
const locationsService = require('../locations/locations.service');

class FleetMover {
  constructor() { this.interval = null; this.isRunning = false; }
  start(tickMs = 1500) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.interval = setInterval(() => this.tick(), tickMs);
    console.log('[Simulation] GPS Fleet Mover active');
  }
  stop() {
    if (this.interval) clearInterval(this.interval);
    this.isRunning = false;
  }
  async tick() {
    const devices = await db.query('devices');
    for (const d of devices) {
      if (!d.isSimulated || d.status === 'OFFLINE') continue;
      const dLat = (Math.random() - 0.49) * 0.0012;
      const dLng = (Math.random() - 0.49) * 0.0012;
      const newLat = d.latitude + dLat;
      const newLng = d.longitude + dLng;
      const speed = parseFloat((35.0 + Math.random() * 25.0).toFixed(1));
      await locationsService.ingestLocation({
        deviceId: d.deviceId,
        latitude: newLat,
        longitude: newLng,
        speedKph: speed,
        headingDegrees: Math.floor(Math.random() * 360),
        batteryLevel: Math.max(10, d.batteryLevel - (Math.random() < 0.1 ? 1 : 0)),
        timestamp: new Date().toISOString()
      });
    }
  }
}
module.exports = new FleetMover();
