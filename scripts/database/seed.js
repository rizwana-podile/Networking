const db = require('./database-adapter');
const crypto = require('crypto');
function hashPassword(p) { return crypto.createHash('sha256').update(p + 'geonet-salt').digest('hex'); }
async function seed() {
  console.log('Seeding GeoNet Sentinel database...');
  const users = [
    { id: 'usr-admin', email: 'admin@geonet.io', password_hash: hashPassword('Admin@123456'), name: 'Dr. Sarah Connor', role: 'SUPER_ADMIN', isActive: true },
    { id: 'usr-net-admin', email: 'netadmin@geonet.io', password_hash: hashPassword('NetAdmin@123'), name: 'Marcus Brody', role: 'NETWORK_ADMIN', isActive: true },
    { id: 'usr-operator', email: 'operator@geonet.io', password_hash: hashPassword('Operator@123'), name: 'Elena Rostova', role: 'NETWORK_OPERATOR', isActive: true },
    { id: 'usr-viewer', email: 'viewer@geonet.io', password_hash: hashPassword('Viewer@123'), name: 'Jonathan Vance', role: 'VIEWER', isActive: true }
  ];
  for (const u of users) await db.insert('users', u);

  const devices = [
    { deviceId: 'DEV-GPS-001', name: 'Rapid Response Cruiser 01', type: 'FLEET_VEHICLE', lat: 37.7749, lng: -122.4194, speed: 45.2, battery: 94 },
    { deviceId: 'DEV-GPS-002', name: 'Logistics Hauler Alpha', type: 'FLEET_VEHICLE', lat: 37.7833, lng: -122.4167, speed: 58.0, battery: 88 },
    { deviceId: 'DEV-GPS-003', name: 'Inspection Drone UAV-X', type: 'DRONE_UAV', lat: 37.7690, lng: -122.4467, speed: 32.5, battery: 72 },
    { deviceId: 'DEV-GPS-004', name: 'Courier Van Express 04', type: 'FLEET_VEHICLE', lat: 37.7500, lng: -122.4200, speed: 38.4, battery: 85 }
  ];
  for (const d of devices) {
    await db.insert('devices', { id: d.deviceId, deviceId: d.deviceId, name: d.name, type: d.type, status: 'MOVING', batteryLevel: d.battery, latitude: d.lat, longitude: d.lng, speedKph: d.speed, headingDegrees: 180, accuracyMeters: 4, isSimulated: true, tags: ['fleet'], lastSeenAt: new Date().toISOString() });
    for (let i = 5; i >= 0; i--) {
      await db.insert('device_locations', { deviceId: d.deviceId, latitude: d.lat + (Math.random() - 0.5) * 0.01, longitude: d.lng + (Math.random() - 0.5) * 0.01, speedKph: d.speed, headingDegrees: 180, accuracyMeters: 4, batteryLevel: d.battery, networkStatus: 'ONLINE', timestamp: new Date(Date.now() - i * 60000).toISOString() });
    }
  }

  const nodes = [
    { id: 'node-gw-01', name: 'Core Gateway US-West', ipAddress: '10.0.0.1', type: 'GATEWAY', status: 'ONLINE', latency: 4.2, loss: 0.0, cpu: 32, ram: 48, disk: 30 },
    { id: 'node-rtr-01', name: 'Border Router Alpha', ipAddress: '10.0.0.2', type: 'ROUTER', status: 'ONLINE', latency: 8.5, loss: 0.0, cpu: 45, ram: 52, disk: 35 },
    { id: 'node-sw-01', name: 'Distribution Switch Agg-1', ipAddress: '10.0.1.1', type: 'SWITCH', status: 'ONLINE', latency: 2.1, loss: 0.0, cpu: 22, ram: 38, disk: 18 },
    { id: 'node-srv-api', name: 'API Cluster Node 01', ipAddress: '10.0.2.10', type: 'SERVER', status: 'ONLINE', latency: 12.4, loss: 0.0, cpu: 65, ram: 78, disk: 55 },
    { id: 'node-srv-db', name: 'Spatial DB Primary', ipAddress: '10.0.2.20', type: 'DATABASE', status: 'ONLINE', latency: 6.8, loss: 0.0, cpu: 58, ram: 82, disk: 70 },
    { id: 'node-edge-backup', name: 'Disaster Recovery Edge', ipAddress: '10.0.9.1', type: 'SERVER', status: 'DEGRADED', latency: 145.0, loss: 4.5, cpu: 88, ram: 91, disk: 85 }
  ];
  for (const n of nodes) await db.insert('network_nodes', { ...n, monitoringIntervalSeconds: 30, lastCheckAt: new Date().toISOString(), uptimePercent: 99.9, healthScore: n.status === 'ONLINE' ? 98 : 65, activeIncidentsCount: 0, isSimulated: true });

  await db.insert('alerts', { ruleId: 'rule-latency', ruleName: 'Edge Node Latency SLA Exceeded', targetType: 'NODE', targetId: 'node-edge-backup', targetName: 'Disaster Recovery Edge', severity: 'HIGH', status: 'OPEN', metricType: 'LATENCY_MS', currentValue: 145.0, thresholdValue: 100.0, message: 'Latency spike detected' });
  console.log('Seeding finished!');
}
seed();
