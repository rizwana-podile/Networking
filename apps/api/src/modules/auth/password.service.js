const crypto = require('crypto');
class PasswordService {
  hash(password, salt = 'geonet-enterprise-salt-2026') {
    return crypto.scryptSync(password, salt, 64).toString('hex');
  }
  compare(plain, hashed, salt = 'geonet-enterprise-salt-2026') {
    const fresh = this.hash(plain, salt);
    return crypto.timingSafeEqual(Buffer.from(fresh, 'hex'), Buffer.from(hashed, 'hex'));
  }
}
module.exports = new PasswordService();
