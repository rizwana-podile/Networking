const crypto = require('crypto');
class DeviceKeyService {
  generateCredentials(deviceId) {
    const rawKey = `geonet_dev_${crypto.randomBytes(24).toString('hex')}`;
    const hash = crypto.createHash('sha256').update(rawKey).digest('hex');
    return { rawKey, hash };
  }
}
module.exports = new DeviceKeyService();
