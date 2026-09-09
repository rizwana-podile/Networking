const db = require('../../database/database-adapter');
class IncidentsService {
  constructor() { this.comments = new Map(); }
  async addComment(incidentId, userName, comment) {
    if (!this.comments.has(incidentId)) this.comments.set(incidentId, []);
    const entry = { id: require('crypto').randomUUID(), incidentId, userName, comment, createdAt: new Date().toISOString() };
    this.comments.get(incidentId).push(entry);
    return entry;
  }
  getComments(incidentId) {
    return this.comments.get(incidentId) || [];
  }
}
module.exports = new IncidentsService();
