const crypto = require('crypto');
const db = require('../../../../scripts/database/database-adapter');
class WebhooksService {
  async registerWebhook(name, targetUrl, events = ['alert.created']) {
    const secret = crypto.randomBytes(32).toString('hex');
    const hook = { name, targetUrl, secret, events, isActive: true, retryCount: 3, createdAt: new Date().toISOString() };
    return db.insert('webhooks', hook);
  }
  async listWebhooks() { return db.query('webhooks'); }
}
module.exports = new WebhooksService();
