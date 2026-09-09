/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Bosphorus and Turkish Straits Maritime Traffic Lane
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

export const BOSPHORUS_BLACK_SEA_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 41.000857,
    longitude: 28.965500,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 41.006714,
    longitude: 28.971000,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 41.012571,
    longitude: 28.976500,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 41.018429,
    longitude: 28.982000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 41.024286,
    longitude: 28.962500,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 41.030143,
    longitude: 28.968000,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 41.001000,
    longitude: 28.973500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 41.006857,
    longitude: 28.979000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 41.012714,
    longitude: 28.984500,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 41.018571,
    longitude: 28.965000,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 41.024429,
    longitude: 28.970500,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 41.030286,
    longitude: 28.976000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 41.036143,
    longitude: 28.981500,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 41.007000,
    longitude: 28.987000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 41.012857,
    longitude: 28.967500,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 41.018714,
    longitude: 28.973000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 41.024571,
    longitude: 28.978500,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 41.030429,
    longitude: 28.984000,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 41.036286,
    longitude: 28.989500,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 41.042143,
    longitude: 28.970000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 41.013000,
    longitude: 28.975500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 41.018857,
    longitude: 28.981000,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 41.024714,
    longitude: 28.986500,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 41.030571,
    longitude: 28.992000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 41.036429,
    longitude: 28.972500,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 41.042286,
    longitude: 28.978000,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 41.048143,
    longitude: 28.983500,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 41.019000,
    longitude: 28.989000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 41.024857,
    longitude: 28.994500,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 41.030714,
    longitude: 28.975000,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 41.036571,
    longitude: 28.980500,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 41.042429,
    longitude: 28.986000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 41.048286,
    longitude: 28.991500,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 41.054143,
    longitude: 28.997000,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 41.025000,
    longitude: 28.977500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 41.030857,
    longitude: 28.983000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 41.036714,
    longitude: 28.988500,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 41.042571,
    longitude: 28.994000,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 41.048429,
    longitude: 28.999500,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 41.054286,
    longitude: 28.980000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 41.060143,
    longitude: 28.985500,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 41.031000,
    longitude: 28.991000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 41.036857,
    longitude: 28.996500,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 41.042714,
    longitude: 29.002000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 41.048571,
    longitude: 28.982500,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 41.054429,
    longitude: 28.988000,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 41.060286,
    longitude: 28.993500,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 41.066143,
    longitude: 28.999000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 41.037000,
    longitude: 29.004500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 41.042857,
    longitude: 28.985000,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 41.048714,
    longitude: 28.990500,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 41.054571,
    longitude: 28.996000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 41.060429,
    longitude: 29.001500,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 41.066286,
    longitude: 29.007000,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 41.072143,
    longitude: 28.987500,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 41.043000,
    longitude: 28.993000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 41.048857,
    longitude: 28.998500,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 41.054714,
    longitude: 29.004000,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 41.060571,
    longitude: 29.009500,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 41.066429,
    longitude: 28.990000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 41.072286,
    longitude: 28.995500,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 41.078143,
    longitude: 29.001000,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 41.049000,
    longitude: 29.006500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 41.054857,
    longitude: 29.012000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 41.060714,
    longitude: 28.992500,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 41.066571,
    longitude: 28.998000,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 41.072429,
    longitude: 29.003500,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 41.078286,
    longitude: 29.009000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 41.084143,
    longitude: 29.014500,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 41.055000,
    longitude: 28.995000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 41.060857,
    longitude: 29.000500,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 41.066714,
    longitude: 29.006000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 41.072571,
    longitude: 29.011500,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 41.078429,
    longitude: 29.017000,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 41.084286,
    longitude: 28.997500,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 41.090143,
    longitude: 29.003000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 41.061000,
    longitude: 29.008500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 41.066857,
    longitude: 29.014000,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 41.072714,
    longitude: 29.019500,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 41.078571,
    longitude: 29.000000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 41.084429,
    longitude: 29.005500,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 41.090286,
    longitude: 29.011000,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 41.096143,
    longitude: 29.016500,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 41.067000,
    longitude: 29.022000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 41.072857,
    longitude: 29.002500,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 41.078714,
    longitude: 29.008000,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 41.084571,
    longitude: 29.013500,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 41.090429,
    longitude: 29.019000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 41.096286,
    longitude: 29.024500,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 41.102143,
    longitude: 29.005000,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 41.073000,
    longitude: 29.010500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 41.078857,
    longitude: 29.016000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 41.084714,
    longitude: 29.021500,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 41.090571,
    longitude: 29.027000,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 41.096429,
    longitude: 29.007500,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 41.102286,
    longitude: 29.013000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 41.108143,
    longitude: 29.018500,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 41.079000,
    longitude: 29.024000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 41.084857,
    longitude: 29.029500,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 41.090714,
    longitude: 29.010000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 41.096571,
    longitude: 29.015500,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 41.102429,
    longitude: 29.021000,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 41.108286,
    longitude: 29.026500,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 41.114143,
    longitude: 29.032000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 41.085000,
    longitude: 29.012500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 41.090857,
    longitude: 29.018000,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 41.096714,
    longitude: 29.023500,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 41.102571,
    longitude: 29.029000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 41.108429,
    longitude: 29.034500,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 41.114286,
    longitude: 29.015000,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 41.120143,
    longitude: 29.020500,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 41.091000,
    longitude: 29.026000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 41.096857,
    longitude: 29.031500,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 41.102714,
    longitude: 29.037000,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 41.108571,
    longitude: 29.017500,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 41.114429,
    longitude: 29.023000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 41.120286,
    longitude: 29.028500,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 41.126143,
    longitude: 29.034000,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 41.097000,
    longitude: 29.039500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 41.102857,
    longitude: 29.020000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 41.108714,
    longitude: 29.025500,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 41.114571,
    longitude: 29.031000,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 41.120429,
    longitude: 29.036500,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 41.126286,
    longitude: 29.042000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 41.132143,
    longitude: 29.022500,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 41.103000,
    longitude: 29.028000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 41.108857,
    longitude: 29.033500,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 41.114714,
    longitude: 29.039000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 41.120571,
    longitude: 29.044500,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 41.126429,
    longitude: 29.025000,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 41.132286,
    longitude: 29.030500,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 41.138143,
    longitude: 29.036000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 41.109000,
    longitude: 29.041500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 41.114857,
    longitude: 29.047000,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 41.120714,
    longitude: 29.027500,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 41.126571,
    longitude: 29.033000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 41.132429,
    longitude: 29.038500,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 41.138286,
    longitude: 29.044000,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 41.144143,
    longitude: 29.049500,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 41.115000,
    longitude: 29.030000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 41.120857,
    longitude: 29.035500,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 41.126714,
    longitude: 29.041000,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 41.132571,
    longitude: 29.046500,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 41.138429,
    longitude: 29.052000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 41.144286,
    longitude: 29.032500,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 41.150143,
    longitude: 29.038000,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 41.121000,
    longitude: 29.043500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 41.126857,
    longitude: 29.049000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 41.132714,
    longitude: 29.054500,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 41.138571,
    longitude: 29.035000,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 41.144429,
    longitude: 29.040500,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 41.150286,
    longitude: 29.046000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 41.156143,
    longitude: 29.051500,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 41.127000,
    longitude: 29.057000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 41.132857,
    longitude: 29.037500,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 41.138714,
    longitude: 29.043000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 41.144571,
    longitude: 29.048500,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 41.150429,
    longitude: 29.054000,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 41.156286,
    longitude: 29.059500,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 41.162143,
    longitude: 29.040000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 41.133000,
    longitude: 29.045500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 41.138857,
    longitude: 29.051000,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 41.144714,
    longitude: 29.056500,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 41.150571,
    longitude: 29.062000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 41.156429,
    longitude: 29.042500,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 41.162286,
    longitude: 29.048000,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 41.168143,
    longitude: 29.053500,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 41.139000,
    longitude: 29.059000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 41.144857,
    longitude: 29.064500,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 41.150714,
    longitude: 29.045000,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 41.156571,
    longitude: 29.050500,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 41.162429,
    longitude: 29.056000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 41.168286,
    longitude: 29.061500,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 41.174143,
    longitude: 29.067000,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 41.145000,
    longitude: 29.047500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 41.150857,
    longitude: 29.053000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 41.156714,
    longitude: 29.058500,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 41.162571,
    longitude: 29.064000,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 41.168429,
    longitude: 29.069500,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 41.174286,
    longitude: 29.050000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 41.180143,
    longitude: 29.055500,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 41.151000,
    longitude: 29.061000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 41.156857,
    longitude: 29.066500,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 41.162714,
    longitude: 29.072000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 41.168571,
    longitude: 29.052500,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 41.174429,
    longitude: 29.058000,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 41.180286,
    longitude: 29.063500,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 41.186143,
    longitude: 29.069000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 41.157000,
    longitude: 29.074500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 41.162857,
    longitude: 29.055000,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 41.168714,
    longitude: 29.060500,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 41.174571,
    longitude: 29.066000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 41.180429,
    longitude: 29.071500,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 41.186286,
    longitude: 29.077000,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 41.192143,
    longitude: 29.057500,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 41.163000,
    longitude: 29.063000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 41.168857,
    longitude: 29.068500,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 41.174714,
    longitude: 29.074000,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 41.180571,
    longitude: 29.079500,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 41.186429,
    longitude: 29.060000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 41.192286,
    longitude: 29.065500,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 41.198143,
    longitude: 29.071000,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 41.169000,
    longitude: 29.076500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 41.174857,
    longitude: 29.082000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 41.180714,
    longitude: 29.062500,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 41.186571,
    longitude: 29.068000,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 41.192429,
    longitude: 29.073500,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 41.198286,
    longitude: 29.079000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 41.204143,
    longitude: 29.084500,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 41.175000,
    longitude: 29.065000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 41.180857,
    longitude: 29.070500,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 41.186714,
    longitude: 29.076000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 41.192571,
    longitude: 29.081500,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 41.198429,
    longitude: 29.087000,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 41.204286,
    longitude: 29.067500,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 41.210143,
    longitude: 29.073000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 41.181000,
    longitude: 29.078500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 41.186857,
    longitude: 29.084000,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 41.192714,
    longitude: 29.089500,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 41.198571,
    longitude: 29.070000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 41.204429,
    longitude: 29.075500,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 41.210286,
    longitude: 29.081000,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 41.216143,
    longitude: 29.086500,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 41.187000,
    longitude: 29.092000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 41.192857,
    longitude: 29.072500,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 41.198714,
    longitude: 29.078000,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 41.204571,
    longitude: 29.083500,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 41.210429,
    longitude: 29.089000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 41.216286,
    longitude: 29.094500,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 41.222143,
    longitude: 29.075000,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 41.193000,
    longitude: 29.080500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 41.198857,
    longitude: 29.086000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 41.204714,
    longitude: 29.091500,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 41.210571,
    longitude: 29.097000,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 41.216429,
    longitude: 29.077500,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 41.222286,
    longitude: 29.083000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 41.228143,
    longitude: 29.088500,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 41.199000,
    longitude: 29.094000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 41.204857,
    longitude: 29.099500,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 41.210714,
    longitude: 29.080000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 41.216571,
    longitude: 29.085500,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 41.222429,
    longitude: 29.091000,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 41.228286,
    longitude: 29.096500,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 41.234143,
    longitude: 29.102000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 41.205000,
    longitude: 29.082500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 41.210857,
    longitude: 29.088000,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 41.216714,
    longitude: 29.093500,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 41.222571,
    longitude: 29.099000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 41.228429,
    longitude: 29.104500,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 41.234286,
    longitude: 29.085000,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 41.240143,
    longitude: 29.090500,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 41.211000,
    longitude: 29.096000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 41.216857,
    longitude: 29.101500,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 41.222714,
    longitude: 29.107000,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 41.228571,
    longitude: 29.087500,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 41.234429,
    longitude: 29.093000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 41.240286,
    longitude: 29.098500,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 41.246143,
    longitude: 29.104000,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 41.217000,
    longitude: 29.109500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 41.222857,
    longitude: 29.090000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 41.228714,
    longitude: 29.095500,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 41.234571,
    longitude: 29.101000,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 41.240429,
    longitude: 29.106500,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 41.246286,
    longitude: 29.112000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 41.252143,
    longitude: 29.092500,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 41.223000,
    longitude: 29.098000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 41.228857,
    longitude: 29.103500,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 41.234714,
    longitude: 29.109000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 41.240571,
    longitude: 29.114500,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 41.246429,
    longitude: 29.095000,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 41.252286,
    longitude: 29.100500,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 41.258143,
    longitude: 29.106000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 41.229000,
    longitude: 29.111500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 41.234857,
    longitude: 29.117000,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 41.240714,
    longitude: 29.097500,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 41.246571,
    longitude: 29.103000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 41.252429,
    longitude: 29.108500,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 41.258286,
    longitude: 29.114000,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 41.264143,
    longitude: 29.119500,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 41.235000,
    longitude: 29.100000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Bosphorus and Turkish Straits Maritime Traffic Lane Checkpoint #280',
    isRestrictedZone: false
  },
];

export class BosphorusBlackSeaCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = BOSPHORUS_BLACK_SEA_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
