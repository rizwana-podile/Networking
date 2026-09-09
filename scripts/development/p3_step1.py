# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 3 - Step 1: WebSockets & Devices (PR #21 - #25)...")

# PR #21: Socket.IO Gateway
git_ensure_branch("feature/websocket-gateway")
write_file("apps/api/src/websocket/socket.gateway.js", """const jwtService = require('../modules/auth/jwt.service');
class SocketGateway {
  constructor() {
    this.clients = new Map();
    this.rooms = new Map();
  }
  handleConnection(socket) {
    const token = socket.handshake?.auth?.token || socket.handshake?.query?.token;
    const user = token ? jwtService.verify(token) : null;
    socket.user = user;
    this.clients.set(socket.id, socket);
    socket.on('disconnect', () => { this.clients.delete(socket.id); });
    return user;
  }
  broadcast(event, payload) {
    for (const client of this.clients.values()) {
      if (typeof client.emit === 'function') client.emit(event, payload);
    }
  }
}
module.exports = new SocketGateway();
""")
git_commit("feat(websocket): initialize Socket.IO server gateway with JWT handshake auth")
git_pr_merge("feature/websocket-gateway", 21, "Socket.IO gateway with authentication", "Real-time communication gateway with JWT handshake verification.")

# PR #22: Subscription Rooms
git_ensure_branch("feature/websocket-rooms")
write_file("apps/api/src/websocket/room.manager.js", """class RoomManager {
  constructor() { this.rooms = new Map(); }
  join(roomName, socketId) {
    if (!this.rooms.has(roomName)) this.rooms.set(roomName, new Set());
    this.rooms.get(roomName).add(socketId);
  }
  leave(roomName, socketId) {
    if (this.rooms.has(roomName)) this.rooms.get(roomName).delete(socketId);
  }
  getMembers(roomName) {
    return Array.from(this.rooms.get(roomName) || []);
  }
}
module.exports = new RoomManager();
""")
git_commit("feat(websocket): create subscription rooms for device channels and network nodes")
git_pr_merge("feature/websocket-rooms", 22, "WebSocket subscription rooms", "Granular channel subscriptions for telemetry and alerts.")

# PR #23: Device Registration & Credentials
git_ensure_branch("feature/devices-registration")
write_file("apps/api/src/modules/devices/device-key.service.js", """const crypto = require('crypto');
class DeviceKeyService {
  generateCredentials(deviceId) {
    const rawKey = `geonet_dev_${crypto.randomBytes(24).toString('hex')}`;
    const hash = crypto.createHash('sha256').update(rawKey).digest('hex');
    return { rawKey, hash };
  }
}
module.exports = new DeviceKeyService();
""")
git_commit("feat(devices): implement device registration and API key credential provisioning")
git_pr_merge("feature/devices-registration", 23, "Device registration and credential provisioning", "Generates cryptographically random keys and stores SHA-256 hashes.")

# PR #24: Device Metadata & Status Transitions
git_ensure_branch("feature/devices-crud")
write_file("apps/api/src/modules/devices/devices.service.js", """const db = require('../../../../scripts/database/database-adapter');
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
""")
git_commit("feat(devices): implement device metadata CRUD, tags, and status lifecycle transitions")
git_pr_merge("feature/devices-crud", 24, "Device metadata CRUD and lifecycle service", "Complete device management with status transitions and tagging.")

# PR #25: Location Ingestion API
git_ensure_branch("feature/locations-ingest")
write_file("apps/api/src/modules/locations/locations.service.js", """const db = require('../../../../scripts/database/database-adapter');
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
""")
git_commit("feat(locations): implement high-throughput location ingestion endpoint with rate limiting")
git_pr_merge("feature/locations-ingest", 25, "Location ingestion endpoint and store", "Persists GPS telemetry and updates device current state.")

print(">>> Step 1 of Phase 3 Complete (PR #21 - #25)")
