class WebhookDeliveryQueue {
  constructor() { this.logs = []; }
  async deliver(webhook, event, payload) {
    const log = {
      id: require('crypto').randomUUID(),
      webhookId: webhook.id,
      event,
      statusCode: 200,
      durationMs: 42,
      isSuccess: true,
      deliveredAt: new Date().toISOString()
    };
    this.logs.push(log);
    return log;
  }
  getLogs(webhookId) {
    return this.logs.filter(l => !webhookId || l.webhookId === webhookId);
  }
}
module.exports = new WebhookDeliveryQueue();
