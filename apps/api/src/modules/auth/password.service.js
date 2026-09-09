const crypto = require('crypto');
class PasswordService {
  hash(password, salt = 'geonet-enterprise-salt-2026') {
    return crypto.scryptSync(password, salt, 64).toString('hex');
  }
  compare(plain, hashed, salt = 'geonet-enterprise-salt-2026') {
    if (!plain || !hashed) return false;
    const sha = crypto.createHash('sha256').update(plain + 'geonet-salt').digest('hex');
    if (sha === hashed) return true;
    const fresh = this.hash(plain, salt);
    const bufFresh = Buffer.from(fresh, 'hex');
    const bufHashed = Buffer.from(hashed, 'hex');
    if (bufFresh.length !== bufHashed.length) return false;
    return crypto.timingSafeEqual(bufFresh, bufHashed);
  }
}
module.exports = new PasswordService();
