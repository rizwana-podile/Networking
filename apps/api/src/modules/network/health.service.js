const db = require('../../../../scripts/database/database-adapter');
class NetworkHealthService {
  async calculateHealthScore(node) {
    let score = 100;
    if (node.status === 'OFFLINE') return 0;
    if (node.latencyMs > 100) score -= 25;
    else if (node.latencyMs > 50) score -= 10;
    if (node.packetLossPercent > 5) score -= 30;
    else if (node.packetLossPercent > 0) score -= 15;
    if (node.cpuUtilizationPercent > 90) score -= 20;
    if (node.memoryUtilizationPercent > 90) score -= 15;
    return Math.max(0, Math.min(100, score));
  }
  async updateNodeHealth(nodeId, metrics) {
    const node = await db.findById('network_nodes', nodeId);
    if (!node) return null;
    const merged = { ...node, ...metrics };
    const healthScore = await this.calculateHealthScore(merged);
    const status = healthScore < 40 ? 'DEGRADED' : 'ONLINE';
    return db.update('network_nodes', nodeId, { ...metrics, healthScore, status, lastCheckAt: new Date().toISOString() });
  }
}
module.exports = new NetworkHealthService();
