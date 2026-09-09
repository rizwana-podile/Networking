const db = require('../../../scripts/database/database-adapter');
class RollupWorker {
  async rollupMetrics() {
    // 5-minute metric aggregation
    const nodes = await db.query('network_nodes');
    const totalLatency = nodes.reduce((a, b) => a + (b.latencyMs || 0), 0);
    const avgLatency = nodes.length > 0 ? totalLatency / nodes.length : 0;
    return { timestamp: new Date().toISOString(), avgLatency: parseFloat(avgLatency.toFixed(2)), totalNodes: nodes.length };
  }
}
module.exports = new RollupWorker();
