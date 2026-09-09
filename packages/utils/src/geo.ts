const EARTH_RADIUS_KM = 6371.0;
export function toRadians(deg: number): number { return (deg * Math.PI) / 180.0; }
export function toDegrees(rad: number): number { return (rad * 180.0) / Math.PI; }
export function haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLat = toRadians(lat2 - lat1); const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return EARTH_RADIUS_KM * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
export function haversineDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  return haversineDistanceKm(lat1, lon1, lat2, lon2) * 1000.0;
}
export function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const phi1 = toRadians(lat1); const phi2 = toRadians(lat2); const deltaLambda = toRadians(lon2 - lon1);
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  return (toDegrees(Math.atan2(y, x)) + 360.0) % 360.0;
}
export function pointInPolygon(point: [number, number], polygon: number[][]): boolean {
  const [lat, lng] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0]; const yi = polygon[i][1];
    const xj = polygon[j][0]; const yj = polygon[j][1];
    const intersect = yi > lng !== yj > lng && lat < ((xj - xi) * (lng - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
export function pointInCircle(point: [number, number], center: [number, number], radiusMeters: number): boolean {
  return haversineDistanceMeters(point[0], point[1], center[0], center[1]) <= radiusMeters;
}
export function calculateSpeedKph(distanceMeters: number, timeDeltaSeconds: number): number {
  return timeDeltaSeconds > 0 ? (distanceMeters / timeDeltaSeconds) * 3.6 : 0;
}
export function isGpsJitter(lat1: number, lon1: number, lat2: number, lon2: number, timeDeltaSeconds: number, maxSpeed = 300): boolean {
  if (timeDeltaSeconds <= 0) return true;
  return calculateSpeedKph(haversineDistanceMeters(lat1, lon1, lat2, lon2), timeDeltaSeconds) > maxSpeed;
}
