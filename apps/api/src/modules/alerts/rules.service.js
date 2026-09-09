const db = require('../../database/database-adapter');
class RulesService {
  constructor() {
    this.rules = [
      { id: 'rule-latency', name: 'High Latency SLA Breach', metric: 'LATENCY_MS', op: 'GT', threshold: 100, severity: 'HIGH' },
      { id: 'rule-loss', name: 'Packet Drop Critical Alarm', metric: 'PACKET_LOSS_PERCENT', op: 'GT', threshold: 5, severity: 'CRITICAL' },
      { id: 'rule-cpu', name: 'Host CPU Saturation', metric: 'CPU_UTILIZATION_PERCENT', op: 'GT', threshold: 90, severity: 'CRITICAL' }
    ];
  }
  getRules() { return this.rules; }
  evaluate(metricType, value) {
    const matched = [];
    for (const r of this.rules) {
      if (r.metric === metricType) {
        if (r.op === 'GT' && value > r.threshold) matched.push(r);
        else if (r.op === 'LT' && value < r.threshold) matched.push(r);
      }
    }
    return matched;
  }
}
module.exports = new RulesService();
