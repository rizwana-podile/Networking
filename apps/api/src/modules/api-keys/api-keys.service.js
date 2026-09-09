const crypto = require('crypto');
const db = require('../../database/database-adapter');
class ApiKeysService {
  async createKey(name, scopes = ['read:all'], userId = 'usr-admin') {
    const rawSecret = `geonet_live_${crypto.randomBytes(24).toString('hex')}`;
    const hashedSecret = crypto.createHash('sha256').update(rawSecret).digest('hex');
    const keyPrefix = rawSecret.slice(0, 16);
    const key = {
      name,
      keyPrefix,
      hashedSecret,
      userId,
      scopes,
      rateLimitPerMinute: 120,
      totalRequests: 0,
      isActive: true,
      lastUsedAt: null
    };
    const created = await db.insert('api_keys', key);
    return { apiKey: created, rawSecretKey: rawSecret };
  }
  async listKeys() {
    const keys = await db.query('api_keys');
    return keys.map(k => ({ id: k.id, name: k.name, keyPrefix: k.keyPrefix, scopes: k.scopes, isActive: k.isActive, totalRequests: k.totalRequests, createdAt: k.createdAt }));
  }
  async revokeKey(id) { return db.update('api_keys', id, { isActive: false }); }
}
module.exports = new ApiKeysService();
