/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Strait of Gibraltar Strategic Maritime Chokepoint
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

export const GIBRALTAR_STRAIT_CROSS_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 35.970571,
    longitude: -5.355000,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 35.976143,
    longitude: -5.350000,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 35.981714,
    longitude: -5.345000,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 35.987286,
    longitude: -5.340000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 35.992857,
    longitude: -5.360000,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 35.998429,
    longitude: -5.355000,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 35.969000,
    longitude: -5.350000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 35.974571,
    longitude: -5.345000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 35.980143,
    longitude: -5.340000,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 35.985714,
    longitude: -5.360000,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 35.991286,
    longitude: -5.355000,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 35.996857,
    longitude: -5.350000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 36.002429,
    longitude: -5.345000,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 35.973000,
    longitude: -5.340000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 35.978571,
    longitude: -5.360000,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 35.984143,
    longitude: -5.355000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 35.989714,
    longitude: -5.350000,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 35.995286,
    longitude: -5.345000,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 36.000857,
    longitude: -5.340000,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 36.006429,
    longitude: -5.360000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 35.977000,
    longitude: -5.355000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 35.982571,
    longitude: -5.350000,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 35.988143,
    longitude: -5.345000,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 35.993714,
    longitude: -5.340000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 35.999286,
    longitude: -5.360000,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 36.004857,
    longitude: -5.355000,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 36.010429,
    longitude: -5.350000,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 35.981000,
    longitude: -5.345000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 35.986571,
    longitude: -5.340000,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 35.992143,
    longitude: -5.360000,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 35.997714,
    longitude: -5.355000,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 36.003286,
    longitude: -5.350000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 36.008857,
    longitude: -5.345000,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 36.014429,
    longitude: -5.340000,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 35.985000,
    longitude: -5.360000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 35.990571,
    longitude: -5.355000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 35.996143,
    longitude: -5.350000,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 36.001714,
    longitude: -5.345000,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 36.007286,
    longitude: -5.340000,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 36.012857,
    longitude: -5.360000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 36.018429,
    longitude: -5.355000,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 35.989000,
    longitude: -5.350000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 35.994571,
    longitude: -5.345000,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 36.000143,
    longitude: -5.340000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 36.005714,
    longitude: -5.360000,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 36.011286,
    longitude: -5.355000,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 36.016857,
    longitude: -5.350000,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 36.022429,
    longitude: -5.345000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 35.993000,
    longitude: -5.340000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 35.998571,
    longitude: -5.360000,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 36.004143,
    longitude: -5.355000,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 36.009714,
    longitude: -5.350000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 36.015286,
    longitude: -5.345000,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 36.020857,
    longitude: -5.340000,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 36.026429,
    longitude: -5.360000,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 35.997000,
    longitude: -5.355000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 36.002571,
    longitude: -5.350000,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 36.008143,
    longitude: -5.345000,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 36.013714,
    longitude: -5.340000,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 36.019286,
    longitude: -5.360000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 36.024857,
    longitude: -5.355000,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 36.030429,
    longitude: -5.350000,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 36.001000,
    longitude: -5.345000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 36.006571,
    longitude: -5.340000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 36.012143,
    longitude: -5.360000,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 36.017714,
    longitude: -5.355000,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 36.023286,
    longitude: -5.350000,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 36.028857,
    longitude: -5.345000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 36.034429,
    longitude: -5.340000,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 36.005000,
    longitude: -5.360000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 36.010571,
    longitude: -5.355000,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 36.016143,
    longitude: -5.350000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 36.021714,
    longitude: -5.345000,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 36.027286,
    longitude: -5.340000,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 36.032857,
    longitude: -5.360000,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 36.038429,
    longitude: -5.355000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 36.009000,
    longitude: -5.350000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 36.014571,
    longitude: -5.345000,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 36.020143,
    longitude: -5.340000,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 36.025714,
    longitude: -5.360000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 36.031286,
    longitude: -5.355000,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 36.036857,
    longitude: -5.350000,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 36.042429,
    longitude: -5.345000,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 36.013000,
    longitude: -5.340000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 36.018571,
    longitude: -5.360000,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 36.024143,
    longitude: -5.355000,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 36.029714,
    longitude: -5.350000,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 36.035286,
    longitude: -5.345000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 36.040857,
    longitude: -5.340000,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 36.046429,
    longitude: -5.360000,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 36.017000,
    longitude: -5.355000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 36.022571,
    longitude: -5.350000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 36.028143,
    longitude: -5.345000,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 36.033714,
    longitude: -5.340000,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 36.039286,
    longitude: -5.360000,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 36.044857,
    longitude: -5.355000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 36.050429,
    longitude: -5.350000,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 36.021000,
    longitude: -5.345000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 36.026571,
    longitude: -5.340000,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 36.032143,
    longitude: -5.360000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 36.037714,
    longitude: -5.355000,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 36.043286,
    longitude: -5.350000,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 36.048857,
    longitude: -5.345000,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 36.054429,
    longitude: -5.340000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 36.025000,
    longitude: -5.360000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 36.030571,
    longitude: -5.355000,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 36.036143,
    longitude: -5.350000,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 36.041714,
    longitude: -5.345000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 36.047286,
    longitude: -5.340000,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 36.052857,
    longitude: -5.360000,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 36.058429,
    longitude: -5.355000,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 36.029000,
    longitude: -5.350000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 36.034571,
    longitude: -5.345000,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 36.040143,
    longitude: -5.340000,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 36.045714,
    longitude: -5.360000,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 36.051286,
    longitude: -5.355000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 36.056857,
    longitude: -5.350000,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 36.062429,
    longitude: -5.345000,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 36.033000,
    longitude: -5.340000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 36.038571,
    longitude: -5.360000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 36.044143,
    longitude: -5.355000,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 36.049714,
    longitude: -5.350000,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 36.055286,
    longitude: -5.345000,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 36.060857,
    longitude: -5.340000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 36.066429,
    longitude: -5.360000,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 36.037000,
    longitude: -5.355000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 36.042571,
    longitude: -5.350000,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 36.048143,
    longitude: -5.345000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 36.053714,
    longitude: -5.340000,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 36.059286,
    longitude: -5.360000,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 36.064857,
    longitude: -5.355000,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 36.070429,
    longitude: -5.350000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 36.041000,
    longitude: -5.345000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 36.046571,
    longitude: -5.340000,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 36.052143,
    longitude: -5.360000,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 36.057714,
    longitude: -5.355000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 36.063286,
    longitude: -5.350000,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 36.068857,
    longitude: -5.345000,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 36.074429,
    longitude: -5.340000,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 36.045000,
    longitude: -5.360000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 36.050571,
    longitude: -5.355000,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 36.056143,
    longitude: -5.350000,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 36.061714,
    longitude: -5.345000,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 36.067286,
    longitude: -5.340000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 36.072857,
    longitude: -5.360000,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 36.078429,
    longitude: -5.355000,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 36.049000,
    longitude: -5.350000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 36.054571,
    longitude: -5.345000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 36.060143,
    longitude: -5.340000,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 36.065714,
    longitude: -5.360000,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 36.071286,
    longitude: -5.355000,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 36.076857,
    longitude: -5.350000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 36.082429,
    longitude: -5.345000,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 36.053000,
    longitude: -5.340000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 36.058571,
    longitude: -5.360000,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 36.064143,
    longitude: -5.355000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 36.069714,
    longitude: -5.350000,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 36.075286,
    longitude: -5.345000,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 36.080857,
    longitude: -5.340000,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 36.086429,
    longitude: -5.360000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 36.057000,
    longitude: -5.355000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 36.062571,
    longitude: -5.350000,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 36.068143,
    longitude: -5.345000,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 36.073714,
    longitude: -5.340000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 36.079286,
    longitude: -5.360000,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 36.084857,
    longitude: -5.355000,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 36.090429,
    longitude: -5.350000,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 36.061000,
    longitude: -5.345000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 36.066571,
    longitude: -5.340000,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 36.072143,
    longitude: -5.360000,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 36.077714,
    longitude: -5.355000,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 36.083286,
    longitude: -5.350000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 36.088857,
    longitude: -5.345000,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 36.094429,
    longitude: -5.340000,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 36.065000,
    longitude: -5.360000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 36.070571,
    longitude: -5.355000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 36.076143,
    longitude: -5.350000,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 36.081714,
    longitude: -5.345000,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 36.087286,
    longitude: -5.340000,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 36.092857,
    longitude: -5.360000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 36.098429,
    longitude: -5.355000,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 36.069000,
    longitude: -5.350000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 36.074571,
    longitude: -5.345000,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 36.080143,
    longitude: -5.340000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 36.085714,
    longitude: -5.360000,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 36.091286,
    longitude: -5.355000,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 36.096857,
    longitude: -5.350000,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 36.102429,
    longitude: -5.345000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 36.073000,
    longitude: -5.340000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 36.078571,
    longitude: -5.360000,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 36.084143,
    longitude: -5.355000,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 36.089714,
    longitude: -5.350000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 36.095286,
    longitude: -5.345000,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 36.100857,
    longitude: -5.340000,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 36.106429,
    longitude: -5.360000,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 36.077000,
    longitude: -5.355000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 36.082571,
    longitude: -5.350000,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 36.088143,
    longitude: -5.345000,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 36.093714,
    longitude: -5.340000,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 36.099286,
    longitude: -5.360000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 36.104857,
    longitude: -5.355000,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 36.110429,
    longitude: -5.350000,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 36.081000,
    longitude: -5.345000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 36.086571,
    longitude: -5.340000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 36.092143,
    longitude: -5.360000,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 36.097714,
    longitude: -5.355000,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 36.103286,
    longitude: -5.350000,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 36.108857,
    longitude: -5.345000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 36.114429,
    longitude: -5.340000,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 36.085000,
    longitude: -5.360000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 36.090571,
    longitude: -5.355000,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 36.096143,
    longitude: -5.350000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 36.101714,
    longitude: -5.345000,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 36.107286,
    longitude: -5.340000,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 36.112857,
    longitude: -5.360000,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 36.118429,
    longitude: -5.355000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 36.089000,
    longitude: -5.350000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 36.094571,
    longitude: -5.345000,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 36.100143,
    longitude: -5.340000,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 36.105714,
    longitude: -5.360000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 36.111286,
    longitude: -5.355000,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 36.116857,
    longitude: -5.350000,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 36.122429,
    longitude: -5.345000,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 36.093000,
    longitude: -5.340000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 36.098571,
    longitude: -5.360000,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 36.104143,
    longitude: -5.355000,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 36.109714,
    longitude: -5.350000,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 36.115286,
    longitude: -5.345000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 36.120857,
    longitude: -5.340000,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 36.126429,
    longitude: -5.360000,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 36.097000,
    longitude: -5.355000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 36.102571,
    longitude: -5.350000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 36.108143,
    longitude: -5.345000,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 36.113714,
    longitude: -5.340000,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 36.119286,
    longitude: -5.360000,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 36.124857,
    longitude: -5.355000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 36.130429,
    longitude: -5.350000,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 36.101000,
    longitude: -5.345000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 36.106571,
    longitude: -5.340000,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 36.112143,
    longitude: -5.360000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 36.117714,
    longitude: -5.355000,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 36.123286,
    longitude: -5.350000,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 36.128857,
    longitude: -5.345000,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 36.134429,
    longitude: -5.340000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 36.105000,
    longitude: -5.360000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 36.110571,
    longitude: -5.355000,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 36.116143,
    longitude: -5.350000,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 36.121714,
    longitude: -5.345000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 36.127286,
    longitude: -5.340000,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 36.132857,
    longitude: -5.360000,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 36.138429,
    longitude: -5.355000,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 36.109000,
    longitude: -5.350000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 36.114571,
    longitude: -5.345000,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 36.120143,
    longitude: -5.340000,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 36.125714,
    longitude: -5.360000,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 36.131286,
    longitude: -5.355000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 36.136857,
    longitude: -5.350000,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 36.142429,
    longitude: -5.345000,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 36.113000,
    longitude: -5.340000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 36.118571,
    longitude: -5.360000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 36.124143,
    longitude: -5.355000,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 36.129714,
    longitude: -5.350000,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 36.135286,
    longitude: -5.345000,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 36.140857,
    longitude: -5.340000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 36.146429,
    longitude: -5.360000,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 36.117000,
    longitude: -5.355000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 36.122571,
    longitude: -5.350000,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 36.128143,
    longitude: -5.345000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 36.133714,
    longitude: -5.340000,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 36.139286,
    longitude: -5.360000,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 36.144857,
    longitude: -5.355000,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 36.150429,
    longitude: -5.350000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 36.121000,
    longitude: -5.345000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 36.126571,
    longitude: -5.340000,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 36.132143,
    longitude: -5.360000,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 36.137714,
    longitude: -5.355000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 36.143286,
    longitude: -5.350000,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 36.148857,
    longitude: -5.345000,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 36.154429,
    longitude: -5.340000,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 36.125000,
    longitude: -5.360000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Gibraltar Strategic Maritime Chokepoint Checkpoint #280',
    isRestrictedZone: false
  },
];

export class GibraltarStraitCrossCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GIBRALTAR_STRAIT_CROSS_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
