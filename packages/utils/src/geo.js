const EARTH_RADIUS_KM = 6371.0;
function toRadians(deg) { return (deg * Math.PI) / 180.0; }
function toDegrees(rad) { return (rad * 180.0) / Math.PI; }
function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const dLat = toRadians(lat2 - lat1); const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return EARTH_RADIUS_KM * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
function haversineDistanceMeters(lat1, lon1, lat2, lon2) { return haversineDistanceKm(lat1, lon1, lat2, lon2) * 1000.0; }
function calculateBearing(lat1, lon1, lat2, lon2) {
  const phi1 = toRadians(lat1); const phi2 = toRadians(lat2); const deltaLambda = toRadians(lon2 - lon1);
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  return (toDegrees(Math.atan2(y, x)) + 360.0) % 360.0;
}
function pointInCircle(point, center, radiusMeters) { return haversineDistanceMeters(point[0], point[1], center[0], center[1]) <= radiusMeters; }
function calculateSpeedKph(distanceMeters, timeDeltaSeconds) { return timeDeltaSeconds > 0 ? (distanceMeters / timeDeltaSeconds) * 3.6 : 0; }
function isGpsJitter(lat1, lon1, lat2, lon2, timeDeltaSeconds, maxSpeed = 300) {
  if (timeDeltaSeconds <= 0) return true;
  return calculateSpeedKph(haversineDistanceMeters(lat1, lon1, lat2, lon2), timeDeltaSeconds) > maxSpeed;
}
module.exports = { toRadians, toDegrees, haversineDistanceKm, haversineDistanceMeters, calculateBearing, pointInCircle, calculateSpeedKph, isGpsJitter };
