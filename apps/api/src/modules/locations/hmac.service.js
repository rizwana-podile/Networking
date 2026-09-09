const crypto = require('crypto');
class HmacService {
  verify(payloadString, secret, signature) {
    if (!signature) return false;
    const computed = crypto.createHmac('sha256', secret).update(payloadString).digest('hex');
    try {
      return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(signature));
    } catch { return false; }
  }
}
module.exports = new HmacService();
