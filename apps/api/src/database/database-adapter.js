const fs = require('fs');
const path = require('path');
class DatabaseAdapter {
  constructor() {
    this.dbFile = path.resolve(process.env.DB_FILE || path.join(process.cwd(), 'data/geonet_sentinel_data.json'));
    this.store = { users: [], devices: [], device_locations: [], network_nodes: [], network_links: [], alerts: [], notifications: [], audit_logs: [], api_keys: [], webhooks: [] };
    this.load();
  }
  load() {
    try {
      if (fs.existsSync(this.dbFile)) this.store = JSON.parse(fs.readFileSync(this.dbFile, 'utf8'));
    } catch (e) { console.warn('Starting fresh database store'); }
  }
  save() {
    try {
      const dir = path.dirname(this.dbFile);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(this.dbFile, JSON.stringify(this.store, null, 2), 'utf8');
    } catch (e) { console.error('DB save error:', e.message); }
  }
  async query(table) { return this.store[table] || []; }
  async findById(table, id) { return (this.store[table] || []).find(x => x.id === id || x.deviceId === id); }
  async insert(table, record) {
    if (!this.store[table]) this.store[table] = [];
    const item = { id: record.id || require('crypto').randomUUID(), ...record, createdAt: new Date().toISOString() };
    this.store[table].push(item);
    this.save();
    return item;
  }
  async update(table, id, updates) {
    const list = this.store[table] || [];
    const idx = list.findIndex(x => x.id === id || x.deviceId === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates, updatedAt: new Date().toISOString() };
    this.save();
    return list[idx];
  }
  async delete(table, id) {
    const list = this.store[table] || [];
    const idx = list.findIndex(x => x.id === id || x.deviceId === id);
    if (idx === -1) return false;
    list.splice(idx, 1);
    this.save();
    return true;
  }
}
module.exports = new DatabaseAdapter();
