const db = require('../../database/database-adapter');
const socketGateway = require('../../websocket/socket.gateway');
class NotificationsService {
  async send(userId, title, body, severity = 'INFO', category = 'SYSTEM') {
    const item = {
      userId,
      title,
      body,
      severity,
      category,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    const created = await db.insert('notifications', item);
    socketGateway.broadcast('notification.created', created);
    return created;
  }
  async listUserNotifications(userId) {
    const list = await db.query('notifications');
    return list.filter(n => !userId || n.userId === userId);
  }
  async markAsRead(id) {
    return db.update('notifications', id, { isRead: true });
  }
}
module.exports = new NotificationsService();
