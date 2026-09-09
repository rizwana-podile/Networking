const db = require('../../../../scripts/database/database-adapter');
class LinksService {
  async listLinks() { return db.query('network_links'); }
  async createLink(data) {
    const link = {
      sourceNodeId: data.sourceNodeId,
      targetNodeId: data.targetNodeId,
      linkType: data.linkType || 'ETHERNET',
      bandwidthMbps: data.bandwidthMbps || 1000,
      latencyMs: data.latencyMs || 2.0,
      packetLossPercent: 0.0,
      status: 'OPTIMAL'
    };
    return db.insert('network_links', link);
  }
  async deleteLink(id) { return db.delete('network_links', id); }
}
module.exports = new LinksService();
