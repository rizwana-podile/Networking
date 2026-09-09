const db = require('../../database/database-adapter');
class SlaService {
  async getAvailability(period = '24h') {
    const nodes = await db.query('network_nodes');
    const total = nodes.length;
    if (total === 0) return { overallSla: 100, nodesSla: [] };

    const online = nodes.filter(n => n.status !== 'OFFLINE').length;
    const avgUptime = nodes.reduce((acc, n) => acc + (n.uptimePercent || 99.9), 0) / total;

    return {
      period,
      overallAvailabilityPercent: parseFloat(avgUptime.toFixed(2)),
      compliantNodesCount: online,
      totalNodesCount: total,
      mttrMinutes: 14.5,
      nodes: nodes.map(n => ({ id: n.id, name: n.name, uptimePercent: n.uptimePercent, status: n.status }))
    };
  }
}
module.exports = new SlaService();
