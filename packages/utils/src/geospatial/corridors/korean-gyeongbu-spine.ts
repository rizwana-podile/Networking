/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * South Korea Gyeongbu Expressway and Logistics Corridor
 */

export interface CorridorWaypoint {
  sequence: number;
  latitude: number;
  longitude: number;
  elevationMeters: number;
  targetSpeedKmh: number;
  speedLimitKmh: number;
  bearingDeg: number;
  geofenceRadiusMeters: number;
  checkpointName: string;
  isRestrictedZone: boolean;
}

export const KOREAN_GYEONGBU_SPINE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 37.541464,
    longitude: 126.972500,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 37.537929,
    longitude: 126.985000,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 37.534393,
    longitude: 126.997500,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 37.530857,
    longitude: 127.010000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 37.527321,
    longitude: 126.997500,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 37.523786,
    longitude: 127.010000,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 37.485250,
    longitude: 127.022500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 37.481714,
    longitude: 127.035000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 37.478179,
    longitude: 127.047500,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 37.474643,
    longitude: 127.035000,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 37.471107,
    longitude: 127.047500,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 37.467571,
    longitude: 127.060000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 37.464036,
    longitude: 127.072500,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 37.425500,
    longitude: 127.085000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 37.421964,
    longitude: 127.072500,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 37.418429,
    longitude: 127.085000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 37.414893,
    longitude: 127.097500,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 37.411357,
    longitude: 127.110000,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 37.407821,
    longitude: 127.122500,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 37.404286,
    longitude: 127.110000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 37.365750,
    longitude: 127.122500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 37.362214,
    longitude: 127.135000,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 37.358679,
    longitude: 127.147500,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 37.355143,
    longitude: 127.160000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 37.351607,
    longitude: 127.147500,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 37.348071,
    longitude: 127.160000,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 37.344536,
    longitude: 127.172500,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 37.306000,
    longitude: 127.185000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 37.302464,
    longitude: 127.197500,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 37.298929,
    longitude: 127.185000,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 37.295393,
    longitude: 127.197500,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 37.291857,
    longitude: 127.210000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 37.288321,
    longitude: 127.222500,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 37.284786,
    longitude: 127.235000,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 37.246250,
    longitude: 127.222500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 37.242714,
    longitude: 127.235000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 37.239179,
    longitude: 127.247500,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 37.235643,
    longitude: 127.260000,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 37.232107,
    longitude: 127.272500,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 37.228571,
    longitude: 127.260000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 37.225036,
    longitude: 127.272500,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 37.186500,
    longitude: 127.285000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 37.182964,
    longitude: 127.297500,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 37.179429,
    longitude: 127.310000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 37.175893,
    longitude: 127.297500,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 37.172357,
    longitude: 127.310000,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 37.168821,
    longitude: 127.322500,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 37.165286,
    longitude: 127.335000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 37.126750,
    longitude: 127.347500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 37.123214,
    longitude: 127.335000,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 37.119679,
    longitude: 127.347500,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 37.116143,
    longitude: 127.360000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 37.112607,
    longitude: 127.372500,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 37.109071,
    longitude: 127.385000,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 37.105536,
    longitude: 127.372500,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 37.067000,
    longitude: 127.385000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 37.063464,
    longitude: 127.397500,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 37.059929,
    longitude: 127.410000,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 37.056393,
    longitude: 127.422500,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 37.052857,
    longitude: 127.410000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 37.049321,
    longitude: 127.422500,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 37.045786,
    longitude: 127.435000,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 37.007250,
    longitude: 127.447500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 37.003714,
    longitude: 127.460000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 37.000179,
    longitude: 127.447500,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 36.996643,
    longitude: 127.460000,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 36.993107,
    longitude: 127.472500,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 36.989571,
    longitude: 127.485000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 36.986036,
    longitude: 127.497500,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 36.947500,
    longitude: 127.485000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 36.943964,
    longitude: 127.497500,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 36.940429,
    longitude: 127.510000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 36.936893,
    longitude: 127.522500,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 36.933357,
    longitude: 127.535000,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 36.929821,
    longitude: 127.522500,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 36.926286,
    longitude: 127.535000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 36.887750,
    longitude: 127.547500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 36.884214,
    longitude: 127.560000,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 36.880679,
    longitude: 127.572500,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 36.877143,
    longitude: 127.560000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 36.873607,
    longitude: 127.572500,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 36.870071,
    longitude: 127.585000,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 36.866536,
    longitude: 127.597500,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 36.828000,
    longitude: 127.610000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 36.824464,
    longitude: 127.597500,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 36.820929,
    longitude: 127.610000,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 36.817393,
    longitude: 127.622500,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 36.813857,
    longitude: 127.635000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 36.810321,
    longitude: 127.647500,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 36.806786,
    longitude: 127.635000,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 36.768250,
    longitude: 127.647500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 36.764714,
    longitude: 127.660000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 36.761179,
    longitude: 127.672500,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 36.757643,
    longitude: 127.685000,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 36.754107,
    longitude: 127.672500,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 36.750571,
    longitude: 127.685000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 36.747036,
    longitude: 127.697500,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 36.708500,
    longitude: 127.710000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 36.704964,
    longitude: 127.722500,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 36.701429,
    longitude: 127.710000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 36.697893,
    longitude: 127.722500,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 36.694357,
    longitude: 127.735000,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 36.690821,
    longitude: 127.747500,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 36.687286,
    longitude: 127.760000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 36.648750,
    longitude: 127.747500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 36.645214,
    longitude: 127.760000,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 36.641679,
    longitude: 127.772500,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 36.638143,
    longitude: 127.785000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 36.634607,
    longitude: 127.797500,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 36.631071,
    longitude: 127.785000,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 36.627536,
    longitude: 127.797500,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 36.589000,
    longitude: 127.810000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 36.585464,
    longitude: 127.822500,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 36.581929,
    longitude: 127.835000,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 36.578393,
    longitude: 127.822500,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 36.574857,
    longitude: 127.835000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 36.571321,
    longitude: 127.847500,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 36.567786,
    longitude: 127.860000,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 36.529250,
    longitude: 127.872500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 36.525714,
    longitude: 127.860000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 36.522179,
    longitude: 127.872500,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 36.518643,
    longitude: 127.885000,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 36.515107,
    longitude: 127.897500,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 36.511571,
    longitude: 127.910000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 36.508036,
    longitude: 127.897500,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 36.469500,
    longitude: 127.910000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 36.465964,
    longitude: 127.922500,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 36.462429,
    longitude: 127.935000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 36.458893,
    longitude: 127.947500,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 36.455357,
    longitude: 127.935000,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 36.451821,
    longitude: 127.947500,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 36.448286,
    longitude: 127.960000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 36.409750,
    longitude: 127.972500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 36.406214,
    longitude: 127.985000,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 36.402679,
    longitude: 127.972500,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 36.399143,
    longitude: 127.985000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 36.395607,
    longitude: 127.997500,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 36.392071,
    longitude: 128.010000,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 36.388536,
    longitude: 128.022500,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 36.350000,
    longitude: 128.010000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 36.346464,
    longitude: 128.022500,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 36.342929,
    longitude: 128.035000,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 36.339393,
    longitude: 128.047500,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 36.335857,
    longitude: 128.060000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 36.332321,
    longitude: 128.047500,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 36.328786,
    longitude: 128.060000,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 36.290250,
    longitude: 128.072500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 36.286714,
    longitude: 128.085000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 36.283179,
    longitude: 128.097500,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 36.279643,
    longitude: 128.085000,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 36.276107,
    longitude: 128.097500,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 36.272571,
    longitude: 128.110000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 36.269036,
    longitude: 128.122500,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 36.230500,
    longitude: 128.135000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 36.226964,
    longitude: 128.122500,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 36.223429,
    longitude: 128.135000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 36.219893,
    longitude: 128.147500,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 36.216357,
    longitude: 128.160000,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 36.212821,
    longitude: 128.172500,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 36.209286,
    longitude: 128.160000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 36.170750,
    longitude: 128.172500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 36.167214,
    longitude: 128.185000,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 36.163679,
    longitude: 128.197500,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 36.160143,
    longitude: 128.210000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 36.156607,
    longitude: 128.197500,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 36.153071,
    longitude: 128.210000,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 36.149536,
    longitude: 128.222500,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 36.111000,
    longitude: 128.235000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 36.107464,
    longitude: 128.247500,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 36.103929,
    longitude: 128.235000,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 36.100393,
    longitude: 128.247500,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 36.096857,
    longitude: 128.260000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 36.093321,
    longitude: 128.272500,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 36.089786,
    longitude: 128.285000,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 36.051250,
    longitude: 128.272500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 36.047714,
    longitude: 128.285000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 36.044179,
    longitude: 128.297500,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 36.040643,
    longitude: 128.310000,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 36.037107,
    longitude: 128.322500,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 36.033571,
    longitude: 128.310000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 36.030036,
    longitude: 128.322500,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 35.991500,
    longitude: 128.335000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 35.987964,
    longitude: 128.347500,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 35.984429,
    longitude: 128.360000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 35.980893,
    longitude: 128.347500,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 35.977357,
    longitude: 128.360000,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 35.973821,
    longitude: 128.372500,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 35.970286,
    longitude: 128.385000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 35.931750,
    longitude: 128.397500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 35.928214,
    longitude: 128.385000,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 35.924679,
    longitude: 128.397500,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 35.921143,
    longitude: 128.410000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 35.917607,
    longitude: 128.422500,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 35.914071,
    longitude: 128.435000,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 35.910536,
    longitude: 128.422500,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 35.872000,
    longitude: 128.435000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 35.868464,
    longitude: 128.447500,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 35.864929,
    longitude: 128.460000,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 35.861393,
    longitude: 128.472500,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 35.857857,
    longitude: 128.460000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 35.854321,
    longitude: 128.472500,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 35.850786,
    longitude: 128.485000,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 35.812250,
    longitude: 128.497500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 35.808714,
    longitude: 128.510000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 35.805179,
    longitude: 128.497500,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 35.801643,
    longitude: 128.510000,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 35.798107,
    longitude: 128.522500,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 35.794571,
    longitude: 128.535000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 35.791036,
    longitude: 128.547500,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 35.752500,
    longitude: 128.535000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 35.748964,
    longitude: 128.547500,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 35.745429,
    longitude: 128.560000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 35.741893,
    longitude: 128.572500,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 35.738357,
    longitude: 128.585000,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 35.734821,
    longitude: 128.572500,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 35.731286,
    longitude: 128.585000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 35.692750,
    longitude: 128.597500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 35.689214,
    longitude: 128.610000,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 35.685679,
    longitude: 128.622500,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 35.682143,
    longitude: 128.610000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 35.678607,
    longitude: 128.622500,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 35.675071,
    longitude: 128.635000,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 35.671536,
    longitude: 128.647500,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 35.633000,
    longitude: 128.660000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 35.629464,
    longitude: 128.647500,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 35.625929,
    longitude: 128.660000,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 35.622393,
    longitude: 128.672500,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 35.618857,
    longitude: 128.685000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 35.615321,
    longitude: 128.697500,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 35.611786,
    longitude: 128.685000,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 35.573250,
    longitude: 128.697500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 35.569714,
    longitude: 128.710000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 35.566179,
    longitude: 128.722500,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 35.562643,
    longitude: 128.735000,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 35.559107,
    longitude: 128.722500,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 35.555571,
    longitude: 128.735000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 35.552036,
    longitude: 128.747500,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 35.513500,
    longitude: 128.760000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 35.509964,
    longitude: 128.772500,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 35.506429,
    longitude: 128.760000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 35.502893,
    longitude: 128.772500,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 35.499357,
    longitude: 128.785000,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 35.495821,
    longitude: 128.797500,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 35.492286,
    longitude: 128.810000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 35.453750,
    longitude: 128.797500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 35.450214,
    longitude: 128.810000,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 35.446679,
    longitude: 128.822500,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 35.443143,
    longitude: 128.835000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 35.439607,
    longitude: 128.847500,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 35.436071,
    longitude: 128.835000,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 35.432536,
    longitude: 128.847500,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 35.394000,
    longitude: 128.860000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 35.390464,
    longitude: 128.872500,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 35.386929,
    longitude: 128.885000,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 35.383393,
    longitude: 128.872500,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 35.379857,
    longitude: 128.885000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 35.376321,
    longitude: 128.897500,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 35.372786,
    longitude: 128.910000,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 35.334250,
    longitude: 128.922500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 35.330714,
    longitude: 128.910000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 35.327179,
    longitude: 128.922500,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 35.323643,
    longitude: 128.935000,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 35.320107,
    longitude: 128.947500,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 35.316571,
    longitude: 128.960000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 35.313036,
    longitude: 128.947500,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 35.274500,
    longitude: 128.960000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 35.270964,
    longitude: 128.972500,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 35.267429,
    longitude: 128.985000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 35.263893,
    longitude: 128.997500,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 35.260357,
    longitude: 128.985000,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 35.256821,
    longitude: 128.997500,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 35.253286,
    longitude: 129.010000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 35.214750,
    longitude: 129.022500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 35.211214,
    longitude: 129.035000,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 35.207679,
    longitude: 129.022500,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 35.204143,
    longitude: 129.035000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 35.200607,
    longitude: 129.047500,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 35.197071,
    longitude: 129.060000,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 35.193536,
    longitude: 129.072500,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 35.155000,
    longitude: 129.060000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'South Korea Gyeongbu Expressway and Logistics Corridor Checkpoint #280',
    isRestrictedZone: false
  },
];

export class KoreanGyeongbuSpineCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = KOREAN_GYEONGBU_SPINE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
