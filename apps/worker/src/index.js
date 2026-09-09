const db = require('../../../scripts/database/database-adapter');
const icmpProber = require('../../api/src/modules/network/probers/icmp.prober');
const healthService = require('../../api/src/modules/network/health.service');

class WorkerDaemon {
  constructor() {
    this.interval = null;
    this.isRunning = false;
  }
  start(intervalMs = 5000) {
    if (this.isRunning) return;
    this.isRunning = true;
    console.log('[Worker] Background Network Prober Daemon started');
    this.interval = setInterval(() => this.tick(), intervalMs);
  }
  stop() {
    if (this.interval) clearInterval(this.interval);
    this.isRunning = false;
  }
  async tick() {
    try {
      const nodes = await db.query('network_nodes');
      for (const node of nodes) {
        if (!node.isSimulated) continue;
        const probe = await icmpProber.probe(node.ipAddress);
        const cpuDrift = (Math.random() - 0.5) * 4;
        const cpu = Math.max(10, Math.min(95, (node.cpuUtilizationPercent || 30) + cpuDrift));
        await healthService.updateNodeHealth(node.id, {
          latencyMs: probe.latencyMs,
          packetLossPercent: probe.packetLossPercent,
          cpuUtilizationPercent: parseFloat(cpu.toFixed(1))
        });
      }
    } catch (err) {
      console.error('[Worker Error]', err.message);
    }
  }
}
module.exports = new WorkerDaemon();
if (require.main === module) {
  const daemon = new WorkerDaemon();
  daemon.start(5000);
}
