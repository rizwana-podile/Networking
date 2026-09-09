const { haversineDistanceMeters } = require('../../../../packages/utils/src/geo');
class JitterFilter {
  isAnomaly(lastPoint, currentPoint, maxSpeedKph = 300) {
    if (!lastPoint) return false;
    const timeDeltaSec = (new Date(currentPoint.timestamp).getTime() - new Date(lastPoint.timestamp).getTime()) / 1000;
    if (timeDeltaSec <= 0) return true;
    const distMeters = haversineDistanceMeters(lastPoint.latitude, lastPoint.longitude, currentPoint.latitude, currentPoint.longitude);
    const speedKph = (distMeters / timeDeltaSec) * 3.6;
    return speedKph > maxSpeedKph;
  }
}
module.exports = new JitterFilter();
