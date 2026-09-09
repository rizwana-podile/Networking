/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Saudi Trans-Arabian East-West Freight Network
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

export const SAUDI_LANDBRIDGE_TRACK_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 26.392571,
    longitude: 50.036036,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 26.380143,
    longitude: 50.002071,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 26.367714,
    longitude: 49.968107,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 26.355286,
    longitude: 49.934143,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 26.342857,
    longitude: 49.875179,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 26.330429,
    longitude: 49.841214,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 26.283000,
    longitude: 49.807250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 26.270571,
    longitude: 49.773286,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 26.258143,
    longitude: 49.739321,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 26.245714,
    longitude: 49.680357,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 26.233286,
    longitude: 49.646393,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 26.220857,
    longitude: 49.612429,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 26.208429,
    longitude: 49.578464,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 26.161000,
    longitude: 49.544500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 26.148571,
    longitude: 49.485536,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 26.136143,
    longitude: 49.451571,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 26.123714,
    longitude: 49.417607,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 26.111286,
    longitude: 49.383643,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 26.098857,
    longitude: 49.349679,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 26.086429,
    longitude: 49.290714,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 26.039000,
    longitude: 49.256750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 26.026571,
    longitude: 49.222786,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 26.014143,
    longitude: 49.188821,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 26.001714,
    longitude: 49.154857,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 25.989286,
    longitude: 49.095893,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 25.976857,
    longitude: 49.061929,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 25.964429,
    longitude: 49.027964,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 25.917000,
    longitude: 48.994000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 25.904571,
    longitude: 48.960036,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 25.892143,
    longitude: 48.901071,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 25.879714,
    longitude: 48.867107,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 25.867286,
    longitude: 48.833143,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 25.854857,
    longitude: 48.799179,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 25.842429,
    longitude: 48.765214,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 25.795000,
    longitude: 48.706250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 25.782571,
    longitude: 48.672286,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 25.770143,
    longitude: 48.638321,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 25.757714,
    longitude: 48.604357,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 25.745286,
    longitude: 48.570393,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 25.732857,
    longitude: 48.511429,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 25.720429,
    longitude: 48.477464,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 25.673000,
    longitude: 48.443500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 25.660571,
    longitude: 48.409536,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 25.648143,
    longitude: 48.375571,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 25.635714,
    longitude: 48.316607,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 25.623286,
    longitude: 48.282643,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 25.610857,
    longitude: 48.248679,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 25.598429,
    longitude: 48.214714,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 25.551000,
    longitude: 48.180750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 25.538571,
    longitude: 48.121786,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 25.526143,
    longitude: 48.087821,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 25.513714,
    longitude: 48.053857,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 25.501286,
    longitude: 48.019893,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 25.488857,
    longitude: 47.985929,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 25.476429,
    longitude: 47.926964,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 25.429000,
    longitude: 47.893000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 25.416571,
    longitude: 47.859036,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 25.404143,
    longitude: 47.825071,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 25.391714,
    longitude: 47.791107,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 25.379286,
    longitude: 47.732143,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 25.366857,
    longitude: 47.698179,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 25.354429,
    longitude: 47.664214,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 25.307000,
    longitude: 47.630250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 25.294571,
    longitude: 47.596286,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 25.282143,
    longitude: 47.537321,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 25.269714,
    longitude: 47.503357,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 25.257286,
    longitude: 47.469393,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 25.244857,
    longitude: 47.435429,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 25.232429,
    longitude: 47.401464,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 25.185000,
    longitude: 47.342500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 25.172571,
    longitude: 47.308536,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 25.160143,
    longitude: 47.274571,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 25.147714,
    longitude: 47.240607,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 25.135286,
    longitude: 47.206643,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 25.122857,
    longitude: 47.147679,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 25.110429,
    longitude: 47.113714,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 25.063000,
    longitude: 47.079750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 25.050571,
    longitude: 47.045786,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 25.038143,
    longitude: 47.011821,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 25.025714,
    longitude: 46.952857,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 25.013286,
    longitude: 46.918893,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 25.000857,
    longitude: 46.884929,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 24.988429,
    longitude: 46.850964,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 24.941000,
    longitude: 46.817000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 24.928571,
    longitude: 46.758036,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 24.916143,
    longitude: 46.724071,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 24.903714,
    longitude: 46.690107,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 24.891286,
    longitude: 46.656143,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 24.878857,
    longitude: 46.622179,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 24.866429,
    longitude: 46.563214,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 24.819000,
    longitude: 46.529250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 24.806571,
    longitude: 46.495286,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 24.794143,
    longitude: 46.461321,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 24.781714,
    longitude: 46.427357,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 24.769286,
    longitude: 46.368393,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 24.756857,
    longitude: 46.334429,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 24.744429,
    longitude: 46.300464,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 24.697000,
    longitude: 46.266500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 24.684571,
    longitude: 46.232536,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 24.672143,
    longitude: 46.173571,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 24.659714,
    longitude: 46.139607,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 24.647286,
    longitude: 46.105643,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 24.634857,
    longitude: 46.071679,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 24.622429,
    longitude: 46.037714,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 24.575000,
    longitude: 45.978750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 24.562571,
    longitude: 45.944786,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 24.550143,
    longitude: 45.910821,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 24.537714,
    longitude: 45.876857,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 24.525286,
    longitude: 45.842893,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 24.512857,
    longitude: 45.783929,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 24.500429,
    longitude: 45.749964,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 24.453000,
    longitude: 45.716000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 24.440571,
    longitude: 45.682036,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 24.428143,
    longitude: 45.648071,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 24.415714,
    longitude: 45.589107,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 24.403286,
    longitude: 45.555143,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 24.390857,
    longitude: 45.521179,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 24.378429,
    longitude: 45.487214,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 24.331000,
    longitude: 45.453250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 24.318571,
    longitude: 45.394286,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 24.306143,
    longitude: 45.360321,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 24.293714,
    longitude: 45.326357,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 24.281286,
    longitude: 45.292393,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 24.268857,
    longitude: 45.258429,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 24.256429,
    longitude: 45.199464,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 24.209000,
    longitude: 45.165500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 24.196571,
    longitude: 45.131536,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 24.184143,
    longitude: 45.097571,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 24.171714,
    longitude: 45.063607,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 24.159286,
    longitude: 45.004643,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 24.146857,
    longitude: 44.970679,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 24.134429,
    longitude: 44.936714,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 24.087000,
    longitude: 44.902750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 24.074571,
    longitude: 44.868786,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 24.062143,
    longitude: 44.809821,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 24.049714,
    longitude: 44.775857,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 24.037286,
    longitude: 44.741893,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 24.024857,
    longitude: 44.707929,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 24.012429,
    longitude: 44.673964,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 23.965000,
    longitude: 44.615000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 23.952571,
    longitude: 44.581036,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 23.940143,
    longitude: 44.547071,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 23.927714,
    longitude: 44.513107,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 23.915286,
    longitude: 44.479143,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 23.902857,
    longitude: 44.420179,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 23.890429,
    longitude: 44.386214,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 23.843000,
    longitude: 44.352250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 23.830571,
    longitude: 44.318286,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 23.818143,
    longitude: 44.284321,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 23.805714,
    longitude: 44.225357,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 23.793286,
    longitude: 44.191393,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 23.780857,
    longitude: 44.157429,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 23.768429,
    longitude: 44.123464,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 23.721000,
    longitude: 44.089500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 23.708571,
    longitude: 44.030536,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 23.696143,
    longitude: 43.996571,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 23.683714,
    longitude: 43.962607,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 23.671286,
    longitude: 43.928643,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 23.658857,
    longitude: 43.894679,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 23.646429,
    longitude: 43.835714,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 23.599000,
    longitude: 43.801750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 23.586571,
    longitude: 43.767786,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 23.574143,
    longitude: 43.733821,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 23.561714,
    longitude: 43.699857,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 23.549286,
    longitude: 43.640893,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 23.536857,
    longitude: 43.606929,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 23.524429,
    longitude: 43.572964,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 23.477000,
    longitude: 43.539000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 23.464571,
    longitude: 43.505036,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 23.452143,
    longitude: 43.446071,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 23.439714,
    longitude: 43.412107,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 23.427286,
    longitude: 43.378143,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 23.414857,
    longitude: 43.344179,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 23.402429,
    longitude: 43.310214,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 23.355000,
    longitude: 43.251250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 23.342571,
    longitude: 43.217286,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 23.330143,
    longitude: 43.183321,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 23.317714,
    longitude: 43.149357,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 23.305286,
    longitude: 43.115393,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 23.292857,
    longitude: 43.056429,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 23.280429,
    longitude: 43.022464,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 23.233000,
    longitude: 42.988500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 23.220571,
    longitude: 42.954536,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 23.208143,
    longitude: 42.920571,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 23.195714,
    longitude: 42.861607,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 23.183286,
    longitude: 42.827643,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 23.170857,
    longitude: 42.793679,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 23.158429,
    longitude: 42.759714,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 23.111000,
    longitude: 42.725750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 23.098571,
    longitude: 42.666786,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 23.086143,
    longitude: 42.632821,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 23.073714,
    longitude: 42.598857,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 23.061286,
    longitude: 42.564893,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 23.048857,
    longitude: 42.530929,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 23.036429,
    longitude: 42.471964,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 22.989000,
    longitude: 42.438000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 22.976571,
    longitude: 42.404036,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 22.964143,
    longitude: 42.370071,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 22.951714,
    longitude: 42.336107,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 22.939286,
    longitude: 42.277143,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 22.926857,
    longitude: 42.243179,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 22.914429,
    longitude: 42.209214,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 22.867000,
    longitude: 42.175250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 22.854571,
    longitude: 42.141286,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 22.842143,
    longitude: 42.082321,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 22.829714,
    longitude: 42.048357,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 22.817286,
    longitude: 42.014393,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 22.804857,
    longitude: 41.980429,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 22.792429,
    longitude: 41.946464,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 22.745000,
    longitude: 41.887500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 22.732571,
    longitude: 41.853536,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 22.720143,
    longitude: 41.819571,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 22.707714,
    longitude: 41.785607,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 22.695286,
    longitude: 41.751643,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 22.682857,
    longitude: 41.692679,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 22.670429,
    longitude: 41.658714,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 22.623000,
    longitude: 41.624750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 22.610571,
    longitude: 41.590786,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 22.598143,
    longitude: 41.556821,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 22.585714,
    longitude: 41.497857,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 22.573286,
    longitude: 41.463893,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 22.560857,
    longitude: 41.429929,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 22.548429,
    longitude: 41.395964,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 22.501000,
    longitude: 41.362000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 22.488571,
    longitude: 41.303036,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 22.476143,
    longitude: 41.269071,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 22.463714,
    longitude: 41.235107,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 22.451286,
    longitude: 41.201143,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 22.438857,
    longitude: 41.167179,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 22.426429,
    longitude: 41.108214,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 22.379000,
    longitude: 41.074250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 22.366571,
    longitude: 41.040286,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 22.354143,
    longitude: 41.006321,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 22.341714,
    longitude: 40.972357,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 22.329286,
    longitude: 40.913393,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 22.316857,
    longitude: 40.879429,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 22.304429,
    longitude: 40.845464,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 22.257000,
    longitude: 40.811500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 22.244571,
    longitude: 40.777536,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 22.232143,
    longitude: 40.718571,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 22.219714,
    longitude: 40.684607,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 22.207286,
    longitude: 40.650643,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 22.194857,
    longitude: 40.616679,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 22.182429,
    longitude: 40.582714,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 22.135000,
    longitude: 40.523750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 22.122571,
    longitude: 40.489786,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 22.110143,
    longitude: 40.455821,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 22.097714,
    longitude: 40.421857,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 22.085286,
    longitude: 40.387893,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 22.072857,
    longitude: 40.328929,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 22.060429,
    longitude: 40.294964,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 22.013000,
    longitude: 40.261000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 22.000571,
    longitude: 40.227036,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 21.988143,
    longitude: 40.193071,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 21.975714,
    longitude: 40.134107,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 21.963286,
    longitude: 40.100143,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 21.950857,
    longitude: 40.066179,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 21.938429,
    longitude: 40.032214,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 21.891000,
    longitude: 39.998250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 21.878571,
    longitude: 39.939286,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 21.866143,
    longitude: 39.905321,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 21.853714,
    longitude: 39.871357,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 21.841286,
    longitude: 39.837393,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 21.828857,
    longitude: 39.803429,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 21.816429,
    longitude: 39.744464,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 21.769000,
    longitude: 39.710500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 21.756571,
    longitude: 39.676536,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 21.744143,
    longitude: 39.642571,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 21.731714,
    longitude: 39.608607,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 21.719286,
    longitude: 39.549643,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 21.706857,
    longitude: 39.515679,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 21.694429,
    longitude: 39.481714,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 21.647000,
    longitude: 39.447750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 21.634571,
    longitude: 39.413786,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 21.622143,
    longitude: 39.354821,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 21.609714,
    longitude: 39.320857,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 21.597286,
    longitude: 39.286893,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 21.584857,
    longitude: 39.252929,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 21.572429,
    longitude: 39.218964,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 21.525000,
    longitude: 39.160000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Saudi Trans-Arabian East-West Freight Network Checkpoint #280',
    isRestrictedZone: false
  },
];

export class SaudiLandbridgeTrackCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SAUDI_LANDBRIDGE_TRACK_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
