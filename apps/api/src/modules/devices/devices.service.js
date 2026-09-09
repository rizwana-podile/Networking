const db = require('../../../../scripts/database/database-adapter');
const deviceKeyService = require('./device-key.service');
class DevicesService {
  async listDevices(query = {}) {
    let list = await db.query('devices');
    if (query.type) list = list.filter(d => d.type === query.type);
    if (query.status) list = list.filter(d => d.status === query.status);
    if (query.search) {
      const s = query.search.toLowerCase();
      list = list.filter(d => d.name.toLowerCase().includes(s) || d.deviceId.toLowerCase().includes(s));
    }
    return { items: list, total: list.length };
  }
  async createDevice(data) {
    const { rawKey, hash } = deviceKeyService.generateCredentials(data.name);
    const deviceId = `DEV-${Date.now().toString().slice(-6)}`;
    const newDevice = {
      deviceId,
      name: data.name,
      type: data.type || 'GPS_TRACKER',
      status: 'ONLINE',
      batteryLevel: 100,
      latitude: data.latitude || 37.7749,
      longitude: data.longitude || -122.4194,
      speedKph: 0.0,
      headingDegrees: 0,
      accuracyMeters: 3.5,
      apiKeyHash: hash,
      tags: data.tags || ['fleet'],
      isSimulated: Boolean(data.isSimulated),
      lastSeenAt: new Date().toISOString()
    };
    const created = await db.insert('devices', newDevice);
    return { device: created, apiKey: rawKey };
  }
  async updateDevice(id, data) { return db.update('devices', id, data); }
  async deleteDevice(id) { return db.delete('devices', id); }
}
module.exports = new DevicesService();
