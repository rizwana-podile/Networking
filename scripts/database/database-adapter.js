const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function hashPassword(p) {
  return crypto.createHash('sha256').update(p + 'geonet-salt').digest('hex');
}

const DEFAULT_USERS = [
  { id: 'usr-admin', email: 'admin@geonet.io', password_hash: hashPassword('Admin@123456'), name: 'Dr. Sarah Connor', role: 'SUPER_ADMIN', isActive: true },
  { id: 'usr-sysadmin', email: 'sysadmin@geonet.io', password_hash: hashPassword('Admin@123456'), name: 'Commander John Vance', role: 'ADMIN', isActive: true },
  { id: 'usr-net-admin', email: 'netadmin@geonet.io', password_hash: hashPassword('NetAdmin@123'), name: 'Marcus Brody', role: 'NETWORK_ADMIN', isActive: true },
  { id: 'usr-operator', email: 'operator@geonet.io', password_hash: hashPassword('Operator@123'), name: 'Elena Rostova', role: 'NETWORK_OPERATOR', isActive: true },
  { id: 'usr-monitor', email: 'monitor@geonet.io', password_hash: hashPassword('Monitor@123'), name: 'David Miller', role: 'MONITORING_OPERATOR', isActive: true },
  { id: 'usr-manager', email: 'manager@geonet.io', password_hash: hashPassword('Manager@123'), name: 'Rachel Green', role: 'MANAGER', isActive: true },
  { id: 'usr-owner', email: 'owner@geonet.io', password_hash: hashPassword('Owner@123'), name: 'Carlos Mendoza', role: 'DEVICE_OWNER', isActive: true },
  { id: 'usr-user', email: 'user@geonet.io', password_hash: hashPassword('User@123'), name: 'Samantha Lee', role: 'STANDARD_USER', isActive: true },
  { id: 'usr-viewer', email: 'viewer@geonet.io', password_hash: hashPassword('Viewer@123'), name: 'Jonathan Vance', role: 'VIEWER', isActive: true }
];

class DatabaseAdapter {
  constructor() {
    this.dbFile = path.resolve(process.env.DB_FILE || path.join(process.cwd(), 'data/geonet_sentinel_data.json'));
    this.store = { users: [], devices: [], device_locations: [], network_nodes: [], network_links: [], alerts: [], notifications: [], audit_logs: [], api_keys: [], webhooks: [] };
    this.load();
  }

  ensureUsers() {
    if (!this.store.users) this.store.users = [];
    DEFAULT_USERS.forEach(defUser => {
      const idx = this.store.users.findIndex(u => u.email.toLowerCase() === defUser.email.toLowerCase());
      if (idx === -1) {
        this.store.users.push(defUser);
      } else {
        this.store.users[idx].role = defUser.role;
        this.store.users[idx].password_hash = defUser.password_hash;
        this.store.users[idx].isActive = true;
      }
    });
  }

  load() {
    try {
      if (fs.existsSync(this.dbFile)) {
        this.store = JSON.parse(fs.readFileSync(this.dbFile, 'utf8'));
      }
    } catch (e) {
      console.warn('Starting fresh database store');
    }
    this.ensureUsers();
  }

  save() {
    try {
      this.ensureUsers();
      const dir = path.dirname(this.dbFile);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(this.dbFile, JSON.stringify(this.store, null, 2), 'utf8');
    } catch (e) {
      console.error('DB save error:', e.message);
    }
  }

  async query(table) {
    if (table === 'users') {
      this.ensureUsers();
    }
    return this.store[table] || [];
  }

  async findById(table, id) {
    return (this.store[table] || []).find(x => x.id === id || x.deviceId === id);
  }

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
