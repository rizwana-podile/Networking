/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Suez Canal International Maritime Transit Zone
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

export const SUEZ_MARITIME_LANE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 29.954643,
    longitude: 32.544107,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 29.964286,
    longitude: 32.548214,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 29.973929,
    longitude: 32.552321,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 29.983571,
    longitude: 32.556429,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 29.993214,
    longitude: 32.535536,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 30.002857,
    longitude: 32.539643,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 29.977500,
    longitude: 32.543750,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 29.987143,
    longitude: 32.547857,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 29.996786,
    longitude: 32.551964,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 30.006429,
    longitude: 32.531071,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 30.016071,
    longitude: 32.535179,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 30.025714,
    longitude: 32.539286,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 30.035357,
    longitude: 32.543393,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 30.010000,
    longitude: 32.547500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 30.019643,
    longitude: 32.526607,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 30.029286,
    longitude: 32.530714,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 30.038929,
    longitude: 32.534821,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 30.048571,
    longitude: 32.538929,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 30.058214,
    longitude: 32.543036,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 30.067857,
    longitude: 32.522143,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 30.042500,
    longitude: 32.526250,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 30.052143,
    longitude: 32.530357,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 30.061786,
    longitude: 32.534464,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 30.071429,
    longitude: 32.538571,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 30.081071,
    longitude: 32.517679,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 30.090714,
    longitude: 32.521786,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 30.100357,
    longitude: 32.525893,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 30.075000,
    longitude: 32.530000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 30.084643,
    longitude: 32.534107,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 30.094286,
    longitude: 32.513214,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 30.103929,
    longitude: 32.517321,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 30.113571,
    longitude: 32.521429,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 30.123214,
    longitude: 32.525536,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 30.132857,
    longitude: 32.529643,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 30.107500,
    longitude: 32.508750,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 30.117143,
    longitude: 32.512857,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 30.126786,
    longitude: 32.516964,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 30.136429,
    longitude: 32.521071,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 30.146071,
    longitude: 32.525179,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 30.155714,
    longitude: 32.504286,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 30.165357,
    longitude: 32.508393,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 30.140000,
    longitude: 32.512500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 30.149643,
    longitude: 32.516607,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 30.159286,
    longitude: 32.520714,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 30.168929,
    longitude: 32.499821,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 30.178571,
    longitude: 32.503929,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 30.188214,
    longitude: 32.508036,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 30.197857,
    longitude: 32.512143,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 30.172500,
    longitude: 32.516250,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 30.182143,
    longitude: 32.495357,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 30.191786,
    longitude: 32.499464,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 30.201429,
    longitude: 32.503571,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 30.211071,
    longitude: 32.507679,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 30.220714,
    longitude: 32.511786,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 30.230357,
    longitude: 32.490893,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 30.205000,
    longitude: 32.495000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 30.214643,
    longitude: 32.499107,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 30.224286,
    longitude: 32.503214,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 30.233929,
    longitude: 32.507321,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 30.243571,
    longitude: 32.486429,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 30.253214,
    longitude: 32.490536,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 30.262857,
    longitude: 32.494643,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 30.237500,
    longitude: 32.498750,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 30.247143,
    longitude: 32.502857,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 30.256786,
    longitude: 32.481964,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 30.266429,
    longitude: 32.486071,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 30.276071,
    longitude: 32.490179,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 30.285714,
    longitude: 32.494286,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 30.295357,
    longitude: 32.498393,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 30.270000,
    longitude: 32.477500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 30.279643,
    longitude: 32.481607,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 30.289286,
    longitude: 32.485714,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 30.298929,
    longitude: 32.489821,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 30.308571,
    longitude: 32.493929,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 30.318214,
    longitude: 32.473036,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 30.327857,
    longitude: 32.477143,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 30.302500,
    longitude: 32.481250,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 30.312143,
    longitude: 32.485357,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 30.321786,
    longitude: 32.489464,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 30.331429,
    longitude: 32.468571,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 30.341071,
    longitude: 32.472679,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 30.350714,
    longitude: 32.476786,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 30.360357,
    longitude: 32.480893,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 30.335000,
    longitude: 32.485000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 30.344643,
    longitude: 32.464107,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 30.354286,
    longitude: 32.468214,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 30.363929,
    longitude: 32.472321,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 30.373571,
    longitude: 32.476429,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 30.383214,
    longitude: 32.480536,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 30.392857,
    longitude: 32.459643,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 30.367500,
    longitude: 32.463750,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 30.377143,
    longitude: 32.467857,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 30.386786,
    longitude: 32.471964,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 30.396429,
    longitude: 32.476071,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 30.406071,
    longitude: 32.455179,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 30.415714,
    longitude: 32.459286,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 30.425357,
    longitude: 32.463393,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 30.400000,
    longitude: 32.467500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 30.409643,
    longitude: 32.471607,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 30.419286,
    longitude: 32.450714,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 30.428929,
    longitude: 32.454821,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 30.438571,
    longitude: 32.458929,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 30.448214,
    longitude: 32.463036,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 30.457857,
    longitude: 32.467143,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 30.432500,
    longitude: 32.446250,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 30.442143,
    longitude: 32.450357,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 30.451786,
    longitude: 32.454464,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 30.461429,
    longitude: 32.458571,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 30.471071,
    longitude: 32.462679,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 30.480714,
    longitude: 32.441786,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 30.490357,
    longitude: 32.445893,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 30.465000,
    longitude: 32.450000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 30.474643,
    longitude: 32.454107,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 30.484286,
    longitude: 32.458214,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 30.493929,
    longitude: 32.437321,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 30.503571,
    longitude: 32.441429,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 30.513214,
    longitude: 32.445536,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 30.522857,
    longitude: 32.449643,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 30.497500,
    longitude: 32.453750,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 30.507143,
    longitude: 32.432857,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 30.516786,
    longitude: 32.436964,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 30.526429,
    longitude: 32.441071,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 30.536071,
    longitude: 32.445179,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 30.545714,
    longitude: 32.449286,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 30.555357,
    longitude: 32.428393,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 30.530000,
    longitude: 32.432500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 30.539643,
    longitude: 32.436607,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 30.549286,
    longitude: 32.440714,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 30.558929,
    longitude: 32.444821,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 30.568571,
    longitude: 32.423929,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 30.578214,
    longitude: 32.428036,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 30.587857,
    longitude: 32.432143,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 30.562500,
    longitude: 32.436250,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 30.572143,
    longitude: 32.440357,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 30.581786,
    longitude: 32.419464,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 30.591429,
    longitude: 32.423571,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 30.601071,
    longitude: 32.427679,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 30.610714,
    longitude: 32.431786,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 30.620357,
    longitude: 32.435893,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 30.595000,
    longitude: 32.415000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 30.604643,
    longitude: 32.419107,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 30.614286,
    longitude: 32.423214,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 30.623929,
    longitude: 32.427321,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 30.633571,
    longitude: 32.431429,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 30.643214,
    longitude: 32.410536,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 30.652857,
    longitude: 32.414643,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 30.627500,
    longitude: 32.418750,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 30.637143,
    longitude: 32.422857,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 30.646786,
    longitude: 32.426964,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 30.656429,
    longitude: 32.406071,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 30.666071,
    longitude: 32.410179,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 30.675714,
    longitude: 32.414286,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 30.685357,
    longitude: 32.418393,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 30.660000,
    longitude: 32.422500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 30.669643,
    longitude: 32.401607,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 30.679286,
    longitude: 32.405714,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 30.688929,
    longitude: 32.409821,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 30.698571,
    longitude: 32.413929,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 30.708214,
    longitude: 32.418036,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 30.717857,
    longitude: 32.397143,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 30.692500,
    longitude: 32.401250,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 30.702143,
    longitude: 32.405357,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 30.711786,
    longitude: 32.409464,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 30.721429,
    longitude: 32.413571,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 30.731071,
    longitude: 32.392679,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 30.740714,
    longitude: 32.396786,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 30.750357,
    longitude: 32.400893,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 30.725000,
    longitude: 32.405000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 30.734643,
    longitude: 32.409107,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 30.744286,
    longitude: 32.388214,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 30.753929,
    longitude: 32.392321,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 30.763571,
    longitude: 32.396429,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 30.773214,
    longitude: 32.400536,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 30.782857,
    longitude: 32.404643,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 30.757500,
    longitude: 32.383750,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 30.767143,
    longitude: 32.387857,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 30.776786,
    longitude: 32.391964,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 30.786429,
    longitude: 32.396071,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 30.796071,
    longitude: 32.400179,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 30.805714,
    longitude: 32.379286,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 30.815357,
    longitude: 32.383393,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 30.790000,
    longitude: 32.387500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 30.799643,
    longitude: 32.391607,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 30.809286,
    longitude: 32.395714,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 30.818929,
    longitude: 32.374821,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 30.828571,
    longitude: 32.378929,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 30.838214,
    longitude: 32.383036,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 30.847857,
    longitude: 32.387143,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 30.822500,
    longitude: 32.391250,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 30.832143,
    longitude: 32.370357,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 30.841786,
    longitude: 32.374464,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 30.851429,
    longitude: 32.378571,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 30.861071,
    longitude: 32.382679,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 30.870714,
    longitude: 32.386786,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 30.880357,
    longitude: 32.365893,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 30.855000,
    longitude: 32.370000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 30.864643,
    longitude: 32.374107,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 30.874286,
    longitude: 32.378214,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 30.883929,
    longitude: 32.382321,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 30.893571,
    longitude: 32.361429,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 30.903214,
    longitude: 32.365536,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 30.912857,
    longitude: 32.369643,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 30.887500,
    longitude: 32.373750,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 30.897143,
    longitude: 32.377857,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 30.906786,
    longitude: 32.356964,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 30.916429,
    longitude: 32.361071,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 30.926071,
    longitude: 32.365179,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 30.935714,
    longitude: 32.369286,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 30.945357,
    longitude: 32.373393,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 30.920000,
    longitude: 32.352500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 30.929643,
    longitude: 32.356607,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 30.939286,
    longitude: 32.360714,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 30.948929,
    longitude: 32.364821,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 30.958571,
    longitude: 32.368929,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 30.968214,
    longitude: 32.348036,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 30.977857,
    longitude: 32.352143,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 30.952500,
    longitude: 32.356250,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 30.962143,
    longitude: 32.360357,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 30.971786,
    longitude: 32.364464,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 30.981429,
    longitude: 32.343571,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 30.991071,
    longitude: 32.347679,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 31.000714,
    longitude: 32.351786,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 31.010357,
    longitude: 32.355893,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 30.985000,
    longitude: 32.360000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 30.994643,
    longitude: 32.339107,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 31.004286,
    longitude: 32.343214,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 31.013929,
    longitude: 32.347321,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 31.023571,
    longitude: 32.351429,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 31.033214,
    longitude: 32.355536,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 31.042857,
    longitude: 32.334643,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 31.017500,
    longitude: 32.338750,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 31.027143,
    longitude: 32.342857,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 31.036786,
    longitude: 32.346964,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 31.046429,
    longitude: 32.351071,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 31.056071,
    longitude: 32.330179,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 31.065714,
    longitude: 32.334286,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 31.075357,
    longitude: 32.338393,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 31.050000,
    longitude: 32.342500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 31.059643,
    longitude: 32.346607,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 31.069286,
    longitude: 32.325714,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 31.078929,
    longitude: 32.329821,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 31.088571,
    longitude: 32.333929,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 31.098214,
    longitude: 32.338036,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 31.107857,
    longitude: 32.342143,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 31.082500,
    longitude: 32.321250,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 31.092143,
    longitude: 32.325357,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 31.101786,
    longitude: 32.329464,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 31.111429,
    longitude: 32.333571,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 31.121071,
    longitude: 32.337679,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 31.130714,
    longitude: 32.316786,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 31.140357,
    longitude: 32.320893,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 31.115000,
    longitude: 32.325000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 31.124643,
    longitude: 32.329107,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 31.134286,
    longitude: 32.333214,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 31.143929,
    longitude: 32.312321,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 31.153571,
    longitude: 32.316429,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 31.163214,
    longitude: 32.320536,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 31.172857,
    longitude: 32.324643,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 31.147500,
    longitude: 32.328750,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 31.157143,
    longitude: 32.307857,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 31.166786,
    longitude: 32.311964,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 31.176429,
    longitude: 32.316071,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 31.186071,
    longitude: 32.320179,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 31.195714,
    longitude: 32.324286,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 31.205357,
    longitude: 32.303393,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 31.180000,
    longitude: 32.307500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 31.189643,
    longitude: 32.311607,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 31.199286,
    longitude: 32.315714,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 31.208929,
    longitude: 32.319821,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 31.218571,
    longitude: 32.298929,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 31.228214,
    longitude: 32.303036,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 31.237857,
    longitude: 32.307143,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 31.212500,
    longitude: 32.311250,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 31.222143,
    longitude: 32.315357,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 31.231786,
    longitude: 32.294464,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 31.241429,
    longitude: 32.298571,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 31.251071,
    longitude: 32.302679,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 31.260714,
    longitude: 32.306786,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 31.270357,
    longitude: 32.310893,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 31.245000,
    longitude: 32.290000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Suez Canal International Maritime Transit Zone Checkpoint #280',
    isRestrictedZone: false
  },
];

export class SuezMaritimeLaneCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SUEZ_MARITIME_LANE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
