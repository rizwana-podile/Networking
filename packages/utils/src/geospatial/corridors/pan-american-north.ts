/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Pan-American Freight Corridor North America Section
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

export const PAN_AMERICAN_NORTH_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 29.819714,
    longitude: -95.464143,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 29.894429,
    longitude: -95.558286,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 29.969143,
    longitude: -95.652429,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 30.043857,
    longitude: -95.746571,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 30.118571,
    longitude: -95.865714,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 30.193286,
    longitude: -95.959857,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 30.233000,
    longitude: -96.054000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 30.307714,
    longitude: -96.148143,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 30.382429,
    longitude: -96.242286,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 30.457143,
    longitude: -96.361429,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 30.531857,
    longitude: -96.455571,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 30.606571,
    longitude: -96.549714,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 30.681286,
    longitude: -96.643857,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 30.721000,
    longitude: -96.738000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 30.795714,
    longitude: -96.857143,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 30.870429,
    longitude: -96.951286,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 30.945143,
    longitude: -97.045429,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 31.019857,
    longitude: -97.139571,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 31.094571,
    longitude: -97.233714,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 31.169286,
    longitude: -97.352857,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 31.209000,
    longitude: -97.447000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 31.283714,
    longitude: -97.541143,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 31.358429,
    longitude: -97.635286,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 31.433143,
    longitude: -97.729429,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 31.507857,
    longitude: -97.848571,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 31.582571,
    longitude: -97.942714,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 31.657286,
    longitude: -98.036857,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 31.697000,
    longitude: -98.131000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 31.771714,
    longitude: -98.225143,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 31.846429,
    longitude: -98.344286,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 31.921143,
    longitude: -98.438429,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 31.995857,
    longitude: -98.532571,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 32.070571,
    longitude: -98.626714,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 32.145286,
    longitude: -98.720857,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 32.185000,
    longitude: -98.840000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 32.259714,
    longitude: -98.934143,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 32.334429,
    longitude: -99.028286,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 32.409143,
    longitude: -99.122429,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 32.483857,
    longitude: -99.216571,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 32.558571,
    longitude: -99.335714,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 32.633286,
    longitude: -99.429857,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 32.673000,
    longitude: -99.524000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 32.747714,
    longitude: -99.618143,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 32.822429,
    longitude: -99.712286,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 32.897143,
    longitude: -99.831429,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 32.971857,
    longitude: -99.925571,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 33.046571,
    longitude: -100.019714,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 33.121286,
    longitude: -100.113857,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 33.161000,
    longitude: -100.208000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 33.235714,
    longitude: -100.327143,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 33.310429,
    longitude: -100.421286,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 33.385143,
    longitude: -100.515429,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 33.459857,
    longitude: -100.609571,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 33.534571,
    longitude: -100.703714,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 33.609286,
    longitude: -100.822857,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 33.649000,
    longitude: -100.917000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 33.723714,
    longitude: -101.011143,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 33.798429,
    longitude: -101.105286,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 33.873143,
    longitude: -101.199429,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 33.947857,
    longitude: -101.318571,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 34.022571,
    longitude: -101.412714,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 34.097286,
    longitude: -101.506857,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 34.137000,
    longitude: -101.601000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 34.211714,
    longitude: -101.695143,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 34.286429,
    longitude: -101.814286,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 34.361143,
    longitude: -101.908429,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 34.435857,
    longitude: -102.002571,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 34.510571,
    longitude: -102.096714,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 34.585286,
    longitude: -102.190857,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 34.625000,
    longitude: -102.310000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 34.699714,
    longitude: -102.404143,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 34.774429,
    longitude: -102.498286,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 34.849143,
    longitude: -102.592429,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 34.923857,
    longitude: -102.686571,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 34.998571,
    longitude: -102.805714,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 35.073286,
    longitude: -102.899857,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 35.113000,
    longitude: -102.994000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 35.187714,
    longitude: -103.088143,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 35.262429,
    longitude: -103.182286,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 35.337143,
    longitude: -103.301429,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 35.411857,
    longitude: -103.395571,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 35.486571,
    longitude: -103.489714,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 35.561286,
    longitude: -103.583857,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 35.601000,
    longitude: -103.678000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 35.675714,
    longitude: -103.797143,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 35.750429,
    longitude: -103.891286,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 35.825143,
    longitude: -103.985429,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 35.899857,
    longitude: -104.079571,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 35.974571,
    longitude: -104.173714,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 36.049286,
    longitude: -104.292857,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 36.089000,
    longitude: -104.387000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 36.163714,
    longitude: -104.481143,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 36.238429,
    longitude: -104.575286,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 36.313143,
    longitude: -104.669429,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 36.387857,
    longitude: -104.788571,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 36.462571,
    longitude: -104.882714,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 36.537286,
    longitude: -104.976857,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 36.577000,
    longitude: -105.071000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 36.651714,
    longitude: -105.165143,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 36.726429,
    longitude: -105.284286,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 36.801143,
    longitude: -105.378429,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 36.875857,
    longitude: -105.472571,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 36.950571,
    longitude: -105.566714,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 37.025286,
    longitude: -105.660857,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 37.065000,
    longitude: -105.780000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 37.139714,
    longitude: -105.874143,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 37.214429,
    longitude: -105.968286,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 37.289143,
    longitude: -106.062429,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 37.363857,
    longitude: -106.156571,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 37.438571,
    longitude: -106.275714,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 37.513286,
    longitude: -106.369857,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 37.553000,
    longitude: -106.464000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 37.627714,
    longitude: -106.558143,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 37.702429,
    longitude: -106.652286,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 37.777143,
    longitude: -106.771429,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 37.851857,
    longitude: -106.865571,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 37.926571,
    longitude: -106.959714,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 38.001286,
    longitude: -107.053857,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 38.041000,
    longitude: -107.148000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 38.115714,
    longitude: -107.267143,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 38.190429,
    longitude: -107.361286,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 38.265143,
    longitude: -107.455429,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 38.339857,
    longitude: -107.549571,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 38.414571,
    longitude: -107.643714,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 38.489286,
    longitude: -107.762857,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 38.529000,
    longitude: -107.857000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 38.603714,
    longitude: -107.951143,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 38.678429,
    longitude: -108.045286,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 38.753143,
    longitude: -108.139429,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 38.827857,
    longitude: -108.258571,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 38.902571,
    longitude: -108.352714,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 38.977286,
    longitude: -108.446857,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 39.017000,
    longitude: -108.541000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 39.091714,
    longitude: -108.635143,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 39.166429,
    longitude: -108.754286,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 39.241143,
    longitude: -108.848429,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 39.315857,
    longitude: -108.942571,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 39.390571,
    longitude: -109.036714,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 39.465286,
    longitude: -109.130857,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 39.505000,
    longitude: -109.250000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 39.579714,
    longitude: -109.344143,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 39.654429,
    longitude: -109.438286,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 39.729143,
    longitude: -109.532429,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 39.803857,
    longitude: -109.626571,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 39.878571,
    longitude: -109.745714,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 39.953286,
    longitude: -109.839857,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 39.993000,
    longitude: -109.934000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 40.067714,
    longitude: -110.028143,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 40.142429,
    longitude: -110.122286,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 40.217143,
    longitude: -110.241429,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 40.291857,
    longitude: -110.335571,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 40.366571,
    longitude: -110.429714,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 40.441286,
    longitude: -110.523857,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 40.481000,
    longitude: -110.618000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 40.555714,
    longitude: -110.737143,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 40.630429,
    longitude: -110.831286,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 40.705143,
    longitude: -110.925429,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 40.779857,
    longitude: -111.019571,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 40.854571,
    longitude: -111.113714,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 40.929286,
    longitude: -111.232857,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 40.969000,
    longitude: -111.327000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 41.043714,
    longitude: -111.421143,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 41.118429,
    longitude: -111.515286,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 41.193143,
    longitude: -111.609429,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 41.267857,
    longitude: -111.728571,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 41.342571,
    longitude: -111.822714,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 41.417286,
    longitude: -111.916857,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 41.457000,
    longitude: -112.011000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 41.531714,
    longitude: -112.105143,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 41.606429,
    longitude: -112.224286,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 41.681143,
    longitude: -112.318429,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 41.755857,
    longitude: -112.412571,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 41.830571,
    longitude: -112.506714,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 41.905286,
    longitude: -112.600857,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 41.945000,
    longitude: -112.720000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 42.019714,
    longitude: -112.814143,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 42.094429,
    longitude: -112.908286,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 42.169143,
    longitude: -113.002429,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 42.243857,
    longitude: -113.096571,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 42.318571,
    longitude: -113.215714,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 42.393286,
    longitude: -113.309857,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 42.433000,
    longitude: -113.404000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 42.507714,
    longitude: -113.498143,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 42.582429,
    longitude: -113.592286,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 42.657143,
    longitude: -113.711429,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 42.731857,
    longitude: -113.805571,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 42.806571,
    longitude: -113.899714,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 42.881286,
    longitude: -113.993857,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 42.921000,
    longitude: -114.088000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 42.995714,
    longitude: -114.207143,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 43.070429,
    longitude: -114.301286,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 43.145143,
    longitude: -114.395429,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 43.219857,
    longitude: -114.489571,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 43.294571,
    longitude: -114.583714,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 43.369286,
    longitude: -114.702857,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 43.409000,
    longitude: -114.797000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 43.483714,
    longitude: -114.891143,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 43.558429,
    longitude: -114.985286,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 43.633143,
    longitude: -115.079429,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 43.707857,
    longitude: -115.198571,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 43.782571,
    longitude: -115.292714,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 43.857286,
    longitude: -115.386857,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 43.897000,
    longitude: -115.481000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 43.971714,
    longitude: -115.575143,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 44.046429,
    longitude: -115.694286,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 44.121143,
    longitude: -115.788429,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 44.195857,
    longitude: -115.882571,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 44.270571,
    longitude: -115.976714,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 44.345286,
    longitude: -116.070857,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 44.385000,
    longitude: -116.190000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 44.459714,
    longitude: -116.284143,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 44.534429,
    longitude: -116.378286,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 44.609143,
    longitude: -116.472429,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 44.683857,
    longitude: -116.566571,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 44.758571,
    longitude: -116.685714,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 44.833286,
    longitude: -116.779857,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 44.873000,
    longitude: -116.874000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 44.947714,
    longitude: -116.968143,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 45.022429,
    longitude: -117.062286,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 45.097143,
    longitude: -117.181429,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 45.171857,
    longitude: -117.275571,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 45.246571,
    longitude: -117.369714,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 45.321286,
    longitude: -117.463857,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 45.361000,
    longitude: -117.558000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 45.435714,
    longitude: -117.677143,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 45.510429,
    longitude: -117.771286,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 45.585143,
    longitude: -117.865429,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 45.659857,
    longitude: -117.959571,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 45.734571,
    longitude: -118.053714,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 45.809286,
    longitude: -118.172857,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 45.849000,
    longitude: -118.267000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 45.923714,
    longitude: -118.361143,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 45.998429,
    longitude: -118.455286,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 46.073143,
    longitude: -118.549429,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 46.147857,
    longitude: -118.668571,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 46.222571,
    longitude: -118.762714,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 46.297286,
    longitude: -118.856857,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 46.337000,
    longitude: -118.951000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 46.411714,
    longitude: -119.045143,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 46.486429,
    longitude: -119.164286,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 46.561143,
    longitude: -119.258429,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 46.635857,
    longitude: -119.352571,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 46.710571,
    longitude: -119.446714,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 46.785286,
    longitude: -119.540857,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 46.825000,
    longitude: -119.660000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 46.899714,
    longitude: -119.754143,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 46.974429,
    longitude: -119.848286,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 47.049143,
    longitude: -119.942429,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 47.123857,
    longitude: -120.036571,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 47.198571,
    longitude: -120.155714,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 47.273286,
    longitude: -120.249857,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 47.313000,
    longitude: -120.344000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 47.387714,
    longitude: -120.438143,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 47.462429,
    longitude: -120.532286,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 47.537143,
    longitude: -120.651429,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 47.611857,
    longitude: -120.745571,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 47.686571,
    longitude: -120.839714,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 47.761286,
    longitude: -120.933857,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 47.801000,
    longitude: -121.028000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 47.875714,
    longitude: -121.147143,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 47.950429,
    longitude: -121.241286,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 48.025143,
    longitude: -121.335429,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 48.099857,
    longitude: -121.429571,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 48.174571,
    longitude: -121.523714,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 48.249286,
    longitude: -121.642857,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 48.289000,
    longitude: -121.737000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 48.363714,
    longitude: -121.831143,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 48.438429,
    longitude: -121.925286,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 48.513143,
    longitude: -122.019429,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 48.587857,
    longitude: -122.138571,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 48.662571,
    longitude: -122.232714,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 48.737286,
    longitude: -122.326857,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 48.777000,
    longitude: -122.421000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 48.851714,
    longitude: -122.515143,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 48.926429,
    longitude: -122.634286,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 49.001143,
    longitude: -122.728429,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 49.075857,
    longitude: -122.822571,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 49.150571,
    longitude: -122.916714,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 49.225286,
    longitude: -123.010857,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 49.265000,
    longitude: -123.130000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Pan-American Freight Corridor North America Section Checkpoint #280',
    isRestrictedZone: false
  },
];

export class PanAmericanNorthCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PAN_AMERICAN_NORTH_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
