const db = require('../../database/database-adapter');
class AuditService {
  async log(action, resource, details = {}, req = null) {
    const user = req ? req.user : null;
    const entry = {
      action,
      resource,
      userId: user ? user.id : 'SYSTEM',
      userName: user ? user.name : 'System Automator',
      userRole: user ? user.role : 'SYSTEM',
      ipAddress: req ? req.ip || '127.0.0.1' : '127.0.0.1',
      details,
      status: 'SUCCESS',
      timestamp: new Date().toISOString()
    };
    return db.insert('audit_logs', entry);
  }
  async getLogs(limit = 50) {
    const logs = await db.query('audit_logs');
    return logs.slice(-limit).reverse();
  }
}
module.exports = new AuditService();
