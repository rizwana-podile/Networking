const crypto = require('crypto');
class JwtService {
  constructor() {
    this.secret = process.env.JWT_SECRET || 'geonet-super-secret-key-2026';
    this.refreshSecret = process.env.JWT_REFRESH_SECRET || 'geonet-refresh-secret-2026';
  }
  sign(payload, isRefresh = false) {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const exp = isRefresh ? Date.now() + 7 * 86400000 : Date.now() + 3600000;
    const body = Buffer.from(JSON.stringify({ ...payload, exp })).toString('base64url');
    const secret = isRefresh ? this.refreshSecret : this.secret;
    const signature = crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest('base64url');
    return `${header}.${body}.${signature}`;
  }
  verify(token, isRefresh = false) {
    try {
      const [h, b, s] = token.split('.');
      const secret = isRefresh ? this.refreshSecret : this.secret;
      const expected = crypto.createHmac('sha256', secret).update(`${h}.${b}`).digest('base64url');
      if (s !== expected) return null;
      const payload = JSON.parse(Buffer.from(b, 'base64url').toString('utf8'));
      if (payload.exp && Date.now() > payload.exp) return null;
      return payload;
    } catch { return null; }
  }
}
module.exports = new JwtService();
