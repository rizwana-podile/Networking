/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Sub-Saharan North-South Transit and Fiber Backbone
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

export const CAPE_TO_CAIRO_ARTERY_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: -33.701571,
    longitude: 18.460750,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: -33.468143,
    longitude: 18.511500,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: -33.234714,
    longitude: 18.562250,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: -33.001286,
    longitude: 18.613000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: -32.767857,
    longitude: 18.638750,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: -32.534429,
    longitude: 18.689500,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: -32.336000,
    longitude: 18.740250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: -32.102571,
    longitude: 18.791000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: -31.869143,
    longitude: 18.841750,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: -31.635714,
    longitude: 18.867500,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: -31.402286,
    longitude: 18.918250,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: -31.168857,
    longitude: 18.969000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: -30.935429,
    longitude: 19.019750,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: -30.737000,
    longitude: 19.070500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: -30.503571,
    longitude: 19.096250,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: -30.270143,
    longitude: 19.147000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: -30.036714,
    longitude: 19.197750,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: -29.803286,
    longitude: 19.248500,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: -29.569857,
    longitude: 19.299250,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: -29.336429,
    longitude: 19.325000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: -29.138000,
    longitude: 19.375750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: -28.904571,
    longitude: 19.426500,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: -28.671143,
    longitude: 19.477250,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: -28.437714,
    longitude: 19.528000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: -28.204286,
    longitude: 19.553750,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: -27.970857,
    longitude: 19.604500,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: -27.737429,
    longitude: 19.655250,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: -27.539000,
    longitude: 19.706000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: -27.305571,
    longitude: 19.756750,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: -27.072143,
    longitude: 19.782500,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: -26.838714,
    longitude: 19.833250,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: -26.605286,
    longitude: 19.884000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: -26.371857,
    longitude: 19.934750,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: -26.138429,
    longitude: 19.985500,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: -25.940000,
    longitude: 20.011250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: -25.706571,
    longitude: 20.062000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: -25.473143,
    longitude: 20.112750,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: -25.239714,
    longitude: 20.163500,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: -25.006286,
    longitude: 20.214250,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: -24.772857,
    longitude: 20.240000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: -24.539429,
    longitude: 20.290750,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: -24.341000,
    longitude: 20.341500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: -24.107571,
    longitude: 20.392250,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: -23.874143,
    longitude: 20.443000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: -23.640714,
    longitude: 20.468750,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: -23.407286,
    longitude: 20.519500,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: -23.173857,
    longitude: 20.570250,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: -22.940429,
    longitude: 20.621000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: -22.742000,
    longitude: 20.671750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: -22.508571,
    longitude: 20.697500,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: -22.275143,
    longitude: 20.748250,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: -22.041714,
    longitude: 20.799000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: -21.808286,
    longitude: 20.849750,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: -21.574857,
    longitude: 20.900500,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: -21.341429,
    longitude: 20.926250,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: -21.143000,
    longitude: 20.977000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: -20.909571,
    longitude: 21.027750,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: -20.676143,
    longitude: 21.078500,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: -20.442714,
    longitude: 21.129250,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: -20.209286,
    longitude: 21.155000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: -19.975857,
    longitude: 21.205750,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: -19.742429,
    longitude: 21.256500,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: -19.544000,
    longitude: 21.307250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: -19.310571,
    longitude: 21.358000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: -19.077143,
    longitude: 21.383750,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: -18.843714,
    longitude: 21.434500,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: -18.610286,
    longitude: 21.485250,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: -18.376857,
    longitude: 21.536000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: -18.143429,
    longitude: 21.586750,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: -17.945000,
    longitude: 21.612500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: -17.711571,
    longitude: 21.663250,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: -17.478143,
    longitude: 21.714000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: -17.244714,
    longitude: 21.764750,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: -17.011286,
    longitude: 21.815500,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: -16.777857,
    longitude: 21.841250,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: -16.544429,
    longitude: 21.892000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: -16.346000,
    longitude: 21.942750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: -16.112571,
    longitude: 21.993500,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: -15.879143,
    longitude: 22.044250,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: -15.645714,
    longitude: 22.070000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: -15.412286,
    longitude: 22.120750,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: -15.178857,
    longitude: 22.171500,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: -14.945429,
    longitude: 22.222250,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: -14.747000,
    longitude: 22.273000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: -14.513571,
    longitude: 22.298750,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: -14.280143,
    longitude: 22.349500,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: -14.046714,
    longitude: 22.400250,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: -13.813286,
    longitude: 22.451000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: -13.579857,
    longitude: 22.501750,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: -13.346429,
    longitude: 22.527500,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: -13.148000,
    longitude: 22.578250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: -12.914571,
    longitude: 22.629000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: -12.681143,
    longitude: 22.679750,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: -12.447714,
    longitude: 22.730500,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: -12.214286,
    longitude: 22.756250,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: -11.980857,
    longitude: 22.807000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: -11.747429,
    longitude: 22.857750,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: -11.549000,
    longitude: 22.908500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: -11.315571,
    longitude: 22.959250,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: -11.082143,
    longitude: 22.985000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: -10.848714,
    longitude: 23.035750,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: -10.615286,
    longitude: 23.086500,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: -10.381857,
    longitude: 23.137250,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: -10.148429,
    longitude: 23.188000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: -9.950000,
    longitude: 23.213750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: -9.716571,
    longitude: 23.264500,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: -9.483143,
    longitude: 23.315250,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: -9.249714,
    longitude: 23.366000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: -9.016286,
    longitude: 23.416750,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: -8.782857,
    longitude: 23.442500,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: -8.549429,
    longitude: 23.493250,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: -8.351000,
    longitude: 23.544000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: -8.117571,
    longitude: 23.594750,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: -7.884143,
    longitude: 23.645500,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: -7.650714,
    longitude: 23.671250,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: -7.417286,
    longitude: 23.722000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: -7.183857,
    longitude: 23.772750,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: -6.950429,
    longitude: 23.823500,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: -6.752000,
    longitude: 23.874250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: -6.518571,
    longitude: 23.900000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: -6.285143,
    longitude: 23.950750,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: -6.051714,
    longitude: 24.001500,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: -5.818286,
    longitude: 24.052250,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: -5.584857,
    longitude: 24.103000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: -5.351429,
    longitude: 24.128750,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: -5.153000,
    longitude: 24.179500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: -4.919571,
    longitude: 24.230250,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: -4.686143,
    longitude: 24.281000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: -4.452714,
    longitude: 24.331750,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: -4.219286,
    longitude: 24.357500,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: -3.985857,
    longitude: 24.408250,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: -3.752429,
    longitude: 24.459000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: -3.554000,
    longitude: 24.509750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: -3.320571,
    longitude: 24.560500,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: -3.087143,
    longitude: 24.586250,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: -2.853714,
    longitude: 24.637000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: -2.620286,
    longitude: 24.687750,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: -2.386857,
    longitude: 24.738500,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: -2.153429,
    longitude: 24.789250,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: -1.955000,
    longitude: 24.815000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: -1.721571,
    longitude: 24.865750,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: -1.488143,
    longitude: 24.916500,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: -1.254714,
    longitude: 24.967250,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: -1.021286,
    longitude: 25.018000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: -0.787857,
    longitude: 25.043750,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: -0.554429,
    longitude: 25.094500,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: -0.356000,
    longitude: 25.145250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: -0.122571,
    longitude: 25.196000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 0.110857,
    longitude: 25.246750,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 0.344286,
    longitude: 25.272500,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 0.577714,
    longitude: 25.323250,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 0.811143,
    longitude: 25.374000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 1.044571,
    longitude: 25.424750,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 1.243000,
    longitude: 25.475500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 1.476429,
    longitude: 25.501250,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 1.709857,
    longitude: 25.552000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 1.943286,
    longitude: 25.602750,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 2.176714,
    longitude: 25.653500,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 2.410143,
    longitude: 25.704250,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 2.643571,
    longitude: 25.730000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 2.842000,
    longitude: 25.780750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 3.075429,
    longitude: 25.831500,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 3.308857,
    longitude: 25.882250,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 3.542286,
    longitude: 25.933000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 3.775714,
    longitude: 25.958750,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 4.009143,
    longitude: 26.009500,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 4.242571,
    longitude: 26.060250,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 4.441000,
    longitude: 26.111000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 4.674429,
    longitude: 26.161750,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 4.907857,
    longitude: 26.187500,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 5.141286,
    longitude: 26.238250,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 5.374714,
    longitude: 26.289000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 5.608143,
    longitude: 26.339750,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 5.841571,
    longitude: 26.390500,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 6.040000,
    longitude: 26.416250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 6.273429,
    longitude: 26.467000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 6.506857,
    longitude: 26.517750,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 6.740286,
    longitude: 26.568500,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 6.973714,
    longitude: 26.619250,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 7.207143,
    longitude: 26.645000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 7.440571,
    longitude: 26.695750,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 7.639000,
    longitude: 26.746500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 7.872429,
    longitude: 26.797250,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 8.105857,
    longitude: 26.848000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 8.339286,
    longitude: 26.873750,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 8.572714,
    longitude: 26.924500,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 8.806143,
    longitude: 26.975250,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 9.039571,
    longitude: 27.026000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 9.238000,
    longitude: 27.076750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 9.471429,
    longitude: 27.102500,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 9.704857,
    longitude: 27.153250,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 9.938286,
    longitude: 27.204000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 10.171714,
    longitude: 27.254750,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 10.405143,
    longitude: 27.305500,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 10.638571,
    longitude: 27.331250,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 10.837000,
    longitude: 27.382000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 11.070429,
    longitude: 27.432750,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 11.303857,
    longitude: 27.483500,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 11.537286,
    longitude: 27.534250,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 11.770714,
    longitude: 27.560000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 12.004143,
    longitude: 27.610750,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 12.237571,
    longitude: 27.661500,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 12.436000,
    longitude: 27.712250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 12.669429,
    longitude: 27.763000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 12.902857,
    longitude: 27.788750,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 13.136286,
    longitude: 27.839500,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 13.369714,
    longitude: 27.890250,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 13.603143,
    longitude: 27.941000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 13.836571,
    longitude: 27.991750,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 14.035000,
    longitude: 28.017500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 14.268429,
    longitude: 28.068250,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 14.501857,
    longitude: 28.119000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 14.735286,
    longitude: 28.169750,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 14.968714,
    longitude: 28.220500,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 15.202143,
    longitude: 28.246250,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 15.435571,
    longitude: 28.297000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 15.634000,
    longitude: 28.347750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 15.867429,
    longitude: 28.398500,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 16.100857,
    longitude: 28.449250,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 16.334286,
    longitude: 28.475000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 16.567714,
    longitude: 28.525750,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 16.801143,
    longitude: 28.576500,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 17.034571,
    longitude: 28.627250,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 17.233000,
    longitude: 28.678000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 17.466429,
    longitude: 28.703750,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 17.699857,
    longitude: 28.754500,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 17.933286,
    longitude: 28.805250,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 18.166714,
    longitude: 28.856000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 18.400143,
    longitude: 28.906750,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 18.633571,
    longitude: 28.932500,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 18.832000,
    longitude: 28.983250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 19.065429,
    longitude: 29.034000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 19.298857,
    longitude: 29.084750,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 19.532286,
    longitude: 29.135500,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 19.765714,
    longitude: 29.161250,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 19.999143,
    longitude: 29.212000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 20.232571,
    longitude: 29.262750,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 20.431000,
    longitude: 29.313500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 20.664429,
    longitude: 29.364250,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 20.897857,
    longitude: 29.390000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 21.131286,
    longitude: 29.440750,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 21.364714,
    longitude: 29.491500,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 21.598143,
    longitude: 29.542250,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 21.831571,
    longitude: 29.593000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 22.030000,
    longitude: 29.618750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 22.263429,
    longitude: 29.669500,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 22.496857,
    longitude: 29.720250,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 22.730286,
    longitude: 29.771000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 22.963714,
    longitude: 29.821750,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 23.197143,
    longitude: 29.847500,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 23.430571,
    longitude: 29.898250,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 23.629000,
    longitude: 29.949000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 23.862429,
    longitude: 29.999750,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 24.095857,
    longitude: 30.050500,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 24.329286,
    longitude: 30.076250,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 24.562714,
    longitude: 30.127000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 24.796143,
    longitude: 30.177750,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 25.029571,
    longitude: 30.228500,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 25.228000,
    longitude: 30.279250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 25.461429,
    longitude: 30.305000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 25.694857,
    longitude: 30.355750,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 25.928286,
    longitude: 30.406500,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 26.161714,
    longitude: 30.457250,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 26.395143,
    longitude: 30.508000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 26.628571,
    longitude: 30.533750,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 26.827000,
    longitude: 30.584500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 27.060429,
    longitude: 30.635250,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 27.293857,
    longitude: 30.686000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 27.527286,
    longitude: 30.736750,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 27.760714,
    longitude: 30.762500,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 27.994143,
    longitude: 30.813250,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 28.227571,
    longitude: 30.864000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 28.426000,
    longitude: 30.914750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 28.659429,
    longitude: 30.965500,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 28.892857,
    longitude: 30.991250,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 29.126286,
    longitude: 31.042000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 29.359714,
    longitude: 31.092750,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 29.593143,
    longitude: 31.143500,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 29.826571,
    longitude: 31.194250,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 30.025000,
    longitude: 31.220000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Sub-Saharan North-South Transit and Fiber Backbone Checkpoint #280',
    isRestrictedZone: false
  },
];

export class CapeToCairoArteryCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CAPE_TO_CAIRO_ARTERY_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
