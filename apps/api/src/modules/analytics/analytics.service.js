const db = require('../../../../scripts/database/database-adapter');
class AnalyticsService {
  async getOverviewMetrics() {
    const devices = await db.query('devices');
    const nodes = await db.query('network_nodes');
    const alerts = await db.query('alerts');
    const onlineDevs = devices.filter(d => d.status !== 'OFFLINE').length;
    const movingDevs = devices.filter(d => d.status === 'MOVING').length;
    const onlineNodes = nodes.filter(n => n.status === 'ONLINE').length;
    const criticalAlerts = alerts.filter(a => a.severity === 'CRITICAL' && a.status === 'OPEN').length;

    return {
      totalDevices: devices.length,
      onlineDevices: onlineDevs,
      movingDevices: movingDevs,
      totalNodes: nodes.length,
      onlineNodes,
      activeAlerts: alerts.filter(a => a.status === 'OPEN').length,
      criticalAlerts,
      overallUptime: 99.94,
      avgLatencyMs: 14.2
    };
  }
}
module.exports = new AnalyticsService();
