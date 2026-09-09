class QuotaGuard {
  constructor() { this.counters = new Map(); }
  checkQuota(keyId, limit = 120) {
    const now = Math.floor(Date.now() / 60000);
    const id = `${keyId}:${now}`;
    const count = (this.counters.get(id) || 0) + 1;
    this.counters.set(id, count);
    return count <= limit;
  }
}
module.exports = new QuotaGuard();
