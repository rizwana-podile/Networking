const db = require('../../../../scripts/database/database-adapter');
class ReportsService {
  async generateNetworkSlaCsv() {
    const nodes = await db.query('network_nodes');
    const headers = 'Node Name,Hostname,IP Address,Status,Latency (ms),Packet Loss (%),Uptime (%)\n';
    const rows = nodes.map(n => `"${n.name}","${n.hostname}","${n.ipAddress}","${n.status}",${n.latencyMs || 0},${n.packetLossPercent || 0},${n.uptimePercent || 99.9}`).join('\n');
    return headers + rows;
  }
  async generateFleetTelemetryCsv() {
    const devices = await db.query('devices');
    const headers = 'Device ID,Name,Type,Status,Battery (%),Latitude,Longitude,Speed (km/h),Last Seen\n';
    const rows = devices.map(d => `"${d.deviceId}","${d.name}","${d.type}","${d.status}",${d.batteryLevel || 100},${d.latitude},${d.longitude},${d.speedKph || 0},"${d.lastSeenAt}"`).join('\n');
    return headers + rows;
  }
}
module.exports = new ReportsService();
