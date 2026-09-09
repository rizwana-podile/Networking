const db = require('../../database/database-adapter');
const { haversineDistanceMeters } = require('../../../../../packages/utils/src/geo');
class RouteService {
  async getRoute(deviceId, startDate, endDate) {
    const all = await db.query('device_locations');
    const filtered = all.filter(p => {
      if (p.deviceId !== deviceId) return false;
      const t = new Date(p.timestamp).getTime();
      return t >= new Date(startDate).getTime() && t <= new Date(endDate).getTime();
    }).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    let totalDist = 0;
    for (let i = 1; i < filtered.length; i++) {
      totalDist += haversineDistanceMeters(filtered[i-1].latitude, filtered[i-1].longitude, filtered[i].latitude, filtered[i].longitude);
    }

    return {
      deviceId,
      totalPoints: filtered.length,
      totalDistanceKm: (totalDist / 1000).toFixed(2),
      points: filtered
    };
  }
}
module.exports = new RouteService();
