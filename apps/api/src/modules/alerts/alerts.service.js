const db = require('../../../../scripts/database/database-adapter');
class AlertsService {
  async listAlerts(status) {
    let list = await db.query('alerts');
    if (status) list = list.filter(a => a.status === status);
    return { items: list, total: list.length };
  }
  async acknowledgeAlert(id, userName = 'System Operator') {
    return db.update('alerts', id, {
      status: 'ACKNOWLEDGED',
      acknowledgedByUserName: userName,
      acknowledgedAt: new Date().toISOString()
    });
  }
  async resolveAlert(id, userName = 'System Operator', notes = 'Resolved through automated check') {
    return db.update('alerts', id, {
      status: 'RESOLVED',
      resolvedByUserName: userName,
      resolvedAt: new Date().toISOString(),
      resolutionNotes: notes
    });
  }
  async createAlert(data) {
    return db.insert('alerts', {
      ruleId: data.ruleId || 'rule-auto',
      ruleName: data.ruleName,
      targetType: data.targetType || 'NODE',
      targetId: data.targetId,
      targetName: data.targetName,
      severity: data.severity || 'MEDIUM',
      status: 'OPEN',
      metricType: data.metricType,
      currentValue: data.currentValue,
      thresholdValue: data.thresholdValue,
      message: data.message
    });
  }
}
module.exports = new AlertsService();
