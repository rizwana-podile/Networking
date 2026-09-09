const db = require('../../../../scripts/database/database-adapter');
class NetworkNodesService {
  async listNodes(query = {}) {
    let nodes = await db.query('network_nodes');
    if (query.type) nodes = nodes.filter(n => n.type === query.type);
    if (query.status) nodes = nodes.filter(n => n.status === query.status);
    if (query.search) {
      const s = query.search.toLowerCase();
      nodes = nodes.filter(n => n.name.toLowerCase().includes(s) || n.ipAddress.includes(s));
    }
    return { items: nodes, total: nodes.length };
  }
  async getNodeById(id) { return db.findById('network_nodes', id); }
  async createNode(data) {
    const node = {
      name: data.name,
      hostname: data.hostname || `${data.name.toLowerCase().replace(/\s+/g, '-')}.geonet.net`,
      ipAddress: data.ipAddress,
      type: data.type || 'SERVER',
      status: 'ONLINE',
      monitoringIntervalSeconds: data.monitoringIntervalSeconds || 30,
      lastCheckAt: new Date().toISOString(),
      latencyMs: 12.0,
      packetLossPercent: 0.0,
      uptimePercent: 99.95,
      healthScore: 100,
      cpuUtilizationPercent: 25.0,
      memoryUtilizationPercent: 40.0,
      diskUtilizationPercent: 35.0,
      activeIncidentsCount: 0,
      isSimulated: Boolean(data.isSimulated)
    };
    return db.insert('network_nodes', node);
  }
  async updateNode(id, data) { return db.update('network_nodes', id, data); }
  async deleteNode(id) { return db.delete('network_nodes', id); }
}
module.exports = new NetworkNodesService();
