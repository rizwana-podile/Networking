const crypto = require('crypto');
class SessionService {
  constructor() { this.sessions = new Map(); }
  createSession(userId, ip, userAgent) {
    const id = crypto.randomUUID();
    const session = { id, userId, ip, userAgent, createdAt: new Date().toISOString(), lastActiveAt: new Date().toISOString() };
    this.sessions.set(id, session);
    return session;
  }
  getUserSessions(userId) {
    return Array.from(this.sessions.values()).filter(s => s.userId === userId);
  }
  revokeSession(sessionId) {
    return this.sessions.delete(sessionId);
  }
}
module.exports = new SessionService();
