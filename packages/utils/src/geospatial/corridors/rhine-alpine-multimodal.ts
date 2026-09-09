/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Rhine-Alpine European Core Freight Corridor
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

export const RHINE_ALPINE_MULTIMODAL_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 51.883143,
    longitude: 4.480893,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 51.861286,
    longitude: 4.501786,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 51.839429,
    longitude: 4.522679,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 51.817571,
    longitude: 4.543571,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 51.795714,
    longitude: 4.539464,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 51.773857,
    longitude: 4.560357,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 51.717000,
    longitude: 4.581250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 51.695143,
    longitude: 4.602143,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 51.673286,
    longitude: 4.623036,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 51.651429,
    longitude: 4.618929,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 51.629571,
    longitude: 4.639821,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 51.607714,
    longitude: 4.660714,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 51.585857,
    longitude: 4.681607,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 51.529000,
    longitude: 4.702500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 51.507143,
    longitude: 4.698393,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 51.485286,
    longitude: 4.719286,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 51.463429,
    longitude: 4.740179,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 51.441571,
    longitude: 4.761071,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 51.419714,
    longitude: 4.781964,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 51.397857,
    longitude: 4.777857,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 51.341000,
    longitude: 4.798750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 51.319143,
    longitude: 4.819643,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 51.297286,
    longitude: 4.840536,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 51.275429,
    longitude: 4.861429,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 51.253571,
    longitude: 4.857321,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 51.231714,
    longitude: 4.878214,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 51.209857,
    longitude: 4.899107,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 51.153000,
    longitude: 4.920000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 51.131143,
    longitude: 4.940893,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 51.109286,
    longitude: 4.936786,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 51.087429,
    longitude: 4.957679,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 51.065571,
    longitude: 4.978571,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 51.043714,
    longitude: 4.999464,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 51.021857,
    longitude: 5.020357,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 50.965000,
    longitude: 5.016250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 50.943143,
    longitude: 5.037143,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 50.921286,
    longitude: 5.058036,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 50.899429,
    longitude: 5.078929,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 50.877571,
    longitude: 5.099821,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 50.855714,
    longitude: 5.095714,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 50.833857,
    longitude: 5.116607,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 50.777000,
    longitude: 5.137500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 50.755143,
    longitude: 5.158393,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 50.733286,
    longitude: 5.179286,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 50.711429,
    longitude: 5.175179,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 50.689571,
    longitude: 5.196071,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 50.667714,
    longitude: 5.216964,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 50.645857,
    longitude: 5.237857,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 50.589000,
    longitude: 5.258750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 50.567143,
    longitude: 5.254643,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 50.545286,
    longitude: 5.275536,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 50.523429,
    longitude: 5.296429,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 50.501571,
    longitude: 5.317321,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 50.479714,
    longitude: 5.338214,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 50.457857,
    longitude: 5.334107,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 50.401000,
    longitude: 5.355000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 50.379143,
    longitude: 5.375893,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 50.357286,
    longitude: 5.396786,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 50.335429,
    longitude: 5.417679,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 50.313571,
    longitude: 5.413571,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 50.291714,
    longitude: 5.434464,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 50.269857,
    longitude: 5.455357,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 50.213000,
    longitude: 5.476250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 50.191143,
    longitude: 5.497143,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 50.169286,
    longitude: 5.493036,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 50.147429,
    longitude: 5.513929,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 50.125571,
    longitude: 5.534821,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 50.103714,
    longitude: 5.555714,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 50.081857,
    longitude: 5.576607,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 50.025000,
    longitude: 5.572500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 50.003143,
    longitude: 5.593393,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 49.981286,
    longitude: 5.614286,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 49.959429,
    longitude: 5.635179,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 49.937571,
    longitude: 5.656071,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 49.915714,
    longitude: 5.651964,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 49.893857,
    longitude: 5.672857,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 49.837000,
    longitude: 5.693750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 49.815143,
    longitude: 5.714643,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 49.793286,
    longitude: 5.735536,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 49.771429,
    longitude: 5.731429,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 49.749571,
    longitude: 5.752321,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 49.727714,
    longitude: 5.773214,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 49.705857,
    longitude: 5.794107,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 49.649000,
    longitude: 5.815000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 49.627143,
    longitude: 5.810893,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 49.605286,
    longitude: 5.831786,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 49.583429,
    longitude: 5.852679,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 49.561571,
    longitude: 5.873571,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 49.539714,
    longitude: 5.894464,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 49.517857,
    longitude: 5.890357,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 49.461000,
    longitude: 5.911250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 49.439143,
    longitude: 5.932143,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 49.417286,
    longitude: 5.953036,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 49.395429,
    longitude: 5.973929,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 49.373571,
    longitude: 5.969821,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 49.351714,
    longitude: 5.990714,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 49.329857,
    longitude: 6.011607,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 49.273000,
    longitude: 6.032500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 49.251143,
    longitude: 6.053393,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 49.229286,
    longitude: 6.049286,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 49.207429,
    longitude: 6.070179,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 49.185571,
    longitude: 6.091071,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 49.163714,
    longitude: 6.111964,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 49.141857,
    longitude: 6.132857,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 49.085000,
    longitude: 6.128750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 49.063143,
    longitude: 6.149643,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 49.041286,
    longitude: 6.170536,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 49.019429,
    longitude: 6.191429,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 48.997571,
    longitude: 6.212321,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 48.975714,
    longitude: 6.208214,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 48.953857,
    longitude: 6.229107,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 48.897000,
    longitude: 6.250000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 48.875143,
    longitude: 6.270893,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 48.853286,
    longitude: 6.291786,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 48.831429,
    longitude: 6.287679,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 48.809571,
    longitude: 6.308571,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 48.787714,
    longitude: 6.329464,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 48.765857,
    longitude: 6.350357,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 48.709000,
    longitude: 6.371250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 48.687143,
    longitude: 6.367143,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 48.665286,
    longitude: 6.388036,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 48.643429,
    longitude: 6.408929,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 48.621571,
    longitude: 6.429821,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 48.599714,
    longitude: 6.450714,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 48.577857,
    longitude: 6.446607,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 48.521000,
    longitude: 6.467500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 48.499143,
    longitude: 6.488393,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 48.477286,
    longitude: 6.509286,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 48.455429,
    longitude: 6.530179,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 48.433571,
    longitude: 6.526071,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 48.411714,
    longitude: 6.546964,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 48.389857,
    longitude: 6.567857,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 48.333000,
    longitude: 6.588750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 48.311143,
    longitude: 6.609643,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 48.289286,
    longitude: 6.605536,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 48.267429,
    longitude: 6.626429,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 48.245571,
    longitude: 6.647321,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 48.223714,
    longitude: 6.668214,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 48.201857,
    longitude: 6.689107,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 48.145000,
    longitude: 6.685000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 48.123143,
    longitude: 6.705893,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 48.101286,
    longitude: 6.726786,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 48.079429,
    longitude: 6.747679,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 48.057571,
    longitude: 6.768571,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 48.035714,
    longitude: 6.764464,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 48.013857,
    longitude: 6.785357,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 47.957000,
    longitude: 6.806250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 47.935143,
    longitude: 6.827143,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 47.913286,
    longitude: 6.848036,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 47.891429,
    longitude: 6.843929,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 47.869571,
    longitude: 6.864821,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 47.847714,
    longitude: 6.885714,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 47.825857,
    longitude: 6.906607,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 47.769000,
    longitude: 6.927500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 47.747143,
    longitude: 6.923393,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 47.725286,
    longitude: 6.944286,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 47.703429,
    longitude: 6.965179,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 47.681571,
    longitude: 6.986071,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 47.659714,
    longitude: 7.006964,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 47.637857,
    longitude: 7.002857,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 47.581000,
    longitude: 7.023750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 47.559143,
    longitude: 7.044643,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 47.537286,
    longitude: 7.065536,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 47.515429,
    longitude: 7.086429,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 47.493571,
    longitude: 7.082321,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 47.471714,
    longitude: 7.103214,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 47.449857,
    longitude: 7.124107,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 47.393000,
    longitude: 7.145000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 47.371143,
    longitude: 7.165893,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 47.349286,
    longitude: 7.161786,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 47.327429,
    longitude: 7.182679,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 47.305571,
    longitude: 7.203571,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 47.283714,
    longitude: 7.224464,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 47.261857,
    longitude: 7.245357,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 47.205000,
    longitude: 7.241250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 47.183143,
    longitude: 7.262143,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 47.161286,
    longitude: 7.283036,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 47.139429,
    longitude: 7.303929,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 47.117571,
    longitude: 7.324821,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 47.095714,
    longitude: 7.320714,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 47.073857,
    longitude: 7.341607,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 47.017000,
    longitude: 7.362500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 46.995143,
    longitude: 7.383393,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 46.973286,
    longitude: 7.404286,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 46.951429,
    longitude: 7.400179,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 46.929571,
    longitude: 7.421071,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 46.907714,
    longitude: 7.441964,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 46.885857,
    longitude: 7.462857,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 46.829000,
    longitude: 7.483750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 46.807143,
    longitude: 7.479643,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 46.785286,
    longitude: 7.500536,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 46.763429,
    longitude: 7.521429,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 46.741571,
    longitude: 7.542321,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 46.719714,
    longitude: 7.563214,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 46.697857,
    longitude: 7.559107,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 46.641000,
    longitude: 7.580000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 46.619143,
    longitude: 7.600893,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 46.597286,
    longitude: 7.621786,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 46.575429,
    longitude: 7.642679,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 46.553571,
    longitude: 7.638571,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 46.531714,
    longitude: 7.659464,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 46.509857,
    longitude: 7.680357,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 46.453000,
    longitude: 7.701250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 46.431143,
    longitude: 7.722143,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 46.409286,
    longitude: 7.718036,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 46.387429,
    longitude: 7.738929,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 46.365571,
    longitude: 7.759821,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 46.343714,
    longitude: 7.780714,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 46.321857,
    longitude: 7.801607,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 46.265000,
    longitude: 7.797500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 46.243143,
    longitude: 7.818393,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 46.221286,
    longitude: 7.839286,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 46.199429,
    longitude: 7.860179,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 46.177571,
    longitude: 7.881071,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 46.155714,
    longitude: 7.876964,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 46.133857,
    longitude: 7.897857,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 46.077000,
    longitude: 7.918750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 46.055143,
    longitude: 7.939643,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 46.033286,
    longitude: 7.960536,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 46.011429,
    longitude: 7.956429,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 45.989571,
    longitude: 7.977321,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 45.967714,
    longitude: 7.998214,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 45.945857,
    longitude: 8.019107,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 45.889000,
    longitude: 8.040000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 45.867143,
    longitude: 8.035893,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 45.845286,
    longitude: 8.056786,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 45.823429,
    longitude: 8.077679,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 45.801571,
    longitude: 8.098571,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 45.779714,
    longitude: 8.119464,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 45.757857,
    longitude: 8.115357,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 45.701000,
    longitude: 8.136250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 45.679143,
    longitude: 8.157143,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 45.657286,
    longitude: 8.178036,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 45.635429,
    longitude: 8.198929,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 45.613571,
    longitude: 8.194821,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 45.591714,
    longitude: 8.215714,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 45.569857,
    longitude: 8.236607,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 45.513000,
    longitude: 8.257500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 45.491143,
    longitude: 8.278393,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 45.469286,
    longitude: 8.274286,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 45.447429,
    longitude: 8.295179,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 45.425571,
    longitude: 8.316071,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 45.403714,
    longitude: 8.336964,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 45.381857,
    longitude: 8.357857,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 45.325000,
    longitude: 8.353750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 45.303143,
    longitude: 8.374643,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 45.281286,
    longitude: 8.395536,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 45.259429,
    longitude: 8.416429,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 45.237571,
    longitude: 8.437321,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 45.215714,
    longitude: 8.433214,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 45.193857,
    longitude: 8.454107,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 45.137000,
    longitude: 8.475000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 45.115143,
    longitude: 8.495893,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 45.093286,
    longitude: 8.516786,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 45.071429,
    longitude: 8.512679,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 45.049571,
    longitude: 8.533571,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 45.027714,
    longitude: 8.554464,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 45.005857,
    longitude: 8.575357,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 44.949000,
    longitude: 8.596250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 44.927143,
    longitude: 8.592143,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 44.905286,
    longitude: 8.613036,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 44.883429,
    longitude: 8.633929,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 44.861571,
    longitude: 8.654821,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 44.839714,
    longitude: 8.675714,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 44.817857,
    longitude: 8.671607,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 44.761000,
    longitude: 8.692500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 44.739143,
    longitude: 8.713393,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 44.717286,
    longitude: 8.734286,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 44.695429,
    longitude: 8.755179,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 44.673571,
    longitude: 8.751071,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 44.651714,
    longitude: 8.771964,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 44.629857,
    longitude: 8.792857,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 44.573000,
    longitude: 8.813750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 44.551143,
    longitude: 8.834643,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 44.529286,
    longitude: 8.830536,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 44.507429,
    longitude: 8.851429,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 44.485571,
    longitude: 8.872321,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 44.463714,
    longitude: 8.893214,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 44.441857,
    longitude: 8.914107,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 44.385000,
    longitude: 8.910000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Rhine-Alpine European Core Freight Corridor Checkpoint #280',
    isRestrictedZone: false
  },
];

export class RhineAlpineMultimodalCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = RHINE_ALPINE_MULTIMODAL_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
