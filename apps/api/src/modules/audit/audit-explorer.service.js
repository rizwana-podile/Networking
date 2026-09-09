const db = require('../../../../scripts/database/database-adapter');
class AuditExplorerService {
  async search(filter = {}) {
    let logs = await db.query('audit_logs');
    if (filter.action) logs = logs.filter(l => l.action.toLowerCase().includes(filter.action.toLowerCase()));
    if (filter.user) logs = logs.filter(l => l.userName.toLowerCase().includes(filter.user.toLowerCase()));
    if (filter.resource) logs = logs.filter(l => l.resource === filter.resource);
    return { items: logs.slice(-50).reverse(), total: logs.length };
  }
}
module.exports = new AuditExplorerService();
