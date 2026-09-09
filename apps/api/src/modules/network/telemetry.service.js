const db = require('../../database/database-adapter');
class TelemetryService {
  async ingestNodeMetrics(nodeId, metrics) {
    const node = await db.findById('network_nodes', nodeId);
    if (!node) throw new Error('Node not found');
    return db.update('network_nodes', nodeId, {
      cpuUtilizationPercent: metrics.cpu,
      memoryUtilizationPercent: metrics.memory,
      diskUtilizationPercent: metrics.disk,
      lastCheckAt: new Date().toISOString()
    });
  }
}
module.exports = new TelemetryService();
