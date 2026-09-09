const db = require('../../../../scripts/database/database-adapter');
class FaultInjector {
  async injectLatencySpike(nodeId, spikeMs = 200) {
    return db.update('network_nodes', nodeId, { latencyMs: spikeMs, status: 'DEGRADED' });
  }
  async injectPacketLoss(nodeId, lossPercent = 15) {
    return db.update('network_nodes', nodeId, { packetLossPercent: lossPercent, status: 'DEGRADED' });
  }
  async injectNodeDown(nodeId) {
    return db.update('network_nodes', nodeId, { status: 'OFFLINE', healthScore: 0 });
  }
  async recoverNode(nodeId) {
    return db.update('network_nodes', nodeId, { latencyMs: 8.5, packetLossPercent: 0.0, status: 'ONLINE', healthScore: 98 });
  }
}
module.exports = new FaultInjector();
