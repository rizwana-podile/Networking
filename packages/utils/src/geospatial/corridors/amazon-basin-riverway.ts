/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Amazon Basin Inland Navigational and Sensor Network
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

export const AMAZON_BASIN_RIVERWAY_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: -3.114071,
    longitude: -59.983857,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: -3.103143,
    longitude: -59.937714,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: -3.092214,
    longitude: -59.891571,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: -3.081286,
    longitude: -59.845429,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: -3.070357,
    longitude: -59.824286,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: -3.059429,
    longitude: -59.778143,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: -3.083500,
    longitude: -59.732000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: -3.072571,
    longitude: -59.685857,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: -3.061643,
    longitude: -59.639714,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: -3.050714,
    longitude: -59.618571,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: -3.039786,
    longitude: -59.572429,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: -3.028857,
    longitude: -59.526286,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: -3.017929,
    longitude: -59.480143,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: -3.042000,
    longitude: -59.434000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: -3.031071,
    longitude: -59.412857,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: -3.020143,
    longitude: -59.366714,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: -3.009214,
    longitude: -59.320571,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: -2.998286,
    longitude: -59.274429,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: -2.987357,
    longitude: -59.228286,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: -2.976429,
    longitude: -59.207143,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: -3.000500,
    longitude: -59.161000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: -2.989571,
    longitude: -59.114857,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: -2.978643,
    longitude: -59.068714,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: -2.967714,
    longitude: -59.022571,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: -2.956786,
    longitude: -59.001429,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: -2.945857,
    longitude: -58.955286,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: -2.934929,
    longitude: -58.909143,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: -2.959000,
    longitude: -58.863000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: -2.948071,
    longitude: -58.816857,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: -2.937143,
    longitude: -58.795714,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: -2.926214,
    longitude: -58.749571,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: -2.915286,
    longitude: -58.703429,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: -2.904357,
    longitude: -58.657286,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: -2.893429,
    longitude: -58.611143,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: -2.917500,
    longitude: -58.590000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: -2.906571,
    longitude: -58.543857,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: -2.895643,
    longitude: -58.497714,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: -2.884714,
    longitude: -58.451571,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: -2.873786,
    longitude: -58.405429,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: -2.862857,
    longitude: -58.384286,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: -2.851929,
    longitude: -58.338143,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: -2.876000,
    longitude: -58.292000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: -2.865071,
    longitude: -58.245857,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: -2.854143,
    longitude: -58.199714,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: -2.843214,
    longitude: -58.178571,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: -2.832286,
    longitude: -58.132429,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: -2.821357,
    longitude: -58.086286,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: -2.810429,
    longitude: -58.040143,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: -2.834500,
    longitude: -57.994000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: -2.823571,
    longitude: -57.972857,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: -2.812643,
    longitude: -57.926714,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: -2.801714,
    longitude: -57.880571,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: -2.790786,
    longitude: -57.834429,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: -2.779857,
    longitude: -57.788286,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: -2.768929,
    longitude: -57.767143,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: -2.793000,
    longitude: -57.721000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: -2.782071,
    longitude: -57.674857,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: -2.771143,
    longitude: -57.628714,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: -2.760214,
    longitude: -57.582571,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: -2.749286,
    longitude: -57.561429,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: -2.738357,
    longitude: -57.515286,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: -2.727429,
    longitude: -57.469143,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: -2.751500,
    longitude: -57.423000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: -2.740571,
    longitude: -57.376857,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: -2.729643,
    longitude: -57.355714,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: -2.718714,
    longitude: -57.309571,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: -2.707786,
    longitude: -57.263429,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: -2.696857,
    longitude: -57.217286,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: -2.685929,
    longitude: -57.171143,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: -2.710000,
    longitude: -57.150000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: -2.699071,
    longitude: -57.103857,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: -2.688143,
    longitude: -57.057714,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: -2.677214,
    longitude: -57.011571,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: -2.666286,
    longitude: -56.965429,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: -2.655357,
    longitude: -56.944286,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: -2.644429,
    longitude: -56.898143,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: -2.668500,
    longitude: -56.852000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: -2.657571,
    longitude: -56.805857,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: -2.646643,
    longitude: -56.759714,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: -2.635714,
    longitude: -56.738571,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: -2.624786,
    longitude: -56.692429,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: -2.613857,
    longitude: -56.646286,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: -2.602929,
    longitude: -56.600143,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: -2.627000,
    longitude: -56.554000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: -2.616071,
    longitude: -56.532857,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: -2.605143,
    longitude: -56.486714,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: -2.594214,
    longitude: -56.440571,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: -2.583286,
    longitude: -56.394429,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: -2.572357,
    longitude: -56.348286,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: -2.561429,
    longitude: -56.327143,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: -2.585500,
    longitude: -56.281000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: -2.574571,
    longitude: -56.234857,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: -2.563643,
    longitude: -56.188714,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: -2.552714,
    longitude: -56.142571,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: -2.541786,
    longitude: -56.121429,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: -2.530857,
    longitude: -56.075286,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: -2.519929,
    longitude: -56.029143,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: -2.544000,
    longitude: -55.983000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: -2.533071,
    longitude: -55.936857,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: -2.522143,
    longitude: -55.915714,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: -2.511214,
    longitude: -55.869571,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: -2.500286,
    longitude: -55.823429,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: -2.489357,
    longitude: -55.777286,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: -2.478429,
    longitude: -55.731143,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: -2.502500,
    longitude: -55.710000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: -2.491571,
    longitude: -55.663857,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: -2.480643,
    longitude: -55.617714,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: -2.469714,
    longitude: -55.571571,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: -2.458786,
    longitude: -55.525429,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: -2.447857,
    longitude: -55.504286,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: -2.436929,
    longitude: -55.458143,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: -2.461000,
    longitude: -55.412000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: -2.450071,
    longitude: -55.365857,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: -2.439143,
    longitude: -55.319714,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: -2.428214,
    longitude: -55.298571,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: -2.417286,
    longitude: -55.252429,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: -2.406357,
    longitude: -55.206286,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: -2.395429,
    longitude: -55.160143,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: -2.419500,
    longitude: -55.114000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: -2.408571,
    longitude: -55.092857,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: -2.397643,
    longitude: -55.046714,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: -2.386714,
    longitude: -55.000571,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: -2.375786,
    longitude: -54.954429,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: -2.364857,
    longitude: -54.908286,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: -2.353929,
    longitude: -54.887143,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: -2.378000,
    longitude: -54.841000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: -2.367071,
    longitude: -54.794857,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: -2.356143,
    longitude: -54.748714,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: -2.345214,
    longitude: -54.702571,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: -2.334286,
    longitude: -54.681429,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: -2.323357,
    longitude: -54.635286,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: -2.312429,
    longitude: -54.589143,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: -2.336500,
    longitude: -54.543000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: -2.325571,
    longitude: -54.496857,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: -2.314643,
    longitude: -54.475714,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: -2.303714,
    longitude: -54.429571,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: -2.292786,
    longitude: -54.383429,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: -2.281857,
    longitude: -54.337286,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: -2.270929,
    longitude: -54.291143,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: -2.295000,
    longitude: -54.270000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: -2.284071,
    longitude: -54.223857,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: -2.273143,
    longitude: -54.177714,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: -2.262214,
    longitude: -54.131571,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: -2.251286,
    longitude: -54.085429,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: -2.240357,
    longitude: -54.064286,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: -2.229429,
    longitude: -54.018143,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: -2.253500,
    longitude: -53.972000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: -2.242571,
    longitude: -53.925857,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: -2.231643,
    longitude: -53.879714,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: -2.220714,
    longitude: -53.858571,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: -2.209786,
    longitude: -53.812429,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: -2.198857,
    longitude: -53.766286,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: -2.187929,
    longitude: -53.720143,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: -2.212000,
    longitude: -53.674000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: -2.201071,
    longitude: -53.652857,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: -2.190143,
    longitude: -53.606714,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: -2.179214,
    longitude: -53.560571,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: -2.168286,
    longitude: -53.514429,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: -2.157357,
    longitude: -53.468286,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: -2.146429,
    longitude: -53.447143,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: -2.170500,
    longitude: -53.401000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: -2.159571,
    longitude: -53.354857,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: -2.148643,
    longitude: -53.308714,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: -2.137714,
    longitude: -53.262571,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: -2.126786,
    longitude: -53.241429,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: -2.115857,
    longitude: -53.195286,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: -2.104929,
    longitude: -53.149143,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: -2.129000,
    longitude: -53.103000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: -2.118071,
    longitude: -53.056857,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: -2.107143,
    longitude: -53.035714,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: -2.096214,
    longitude: -52.989571,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: -2.085286,
    longitude: -52.943429,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: -2.074357,
    longitude: -52.897286,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: -2.063429,
    longitude: -52.851143,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: -2.087500,
    longitude: -52.830000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: -2.076571,
    longitude: -52.783857,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: -2.065643,
    longitude: -52.737714,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: -2.054714,
    longitude: -52.691571,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: -2.043786,
    longitude: -52.645429,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: -2.032857,
    longitude: -52.624286,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: -2.021929,
    longitude: -52.578143,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: -2.046000,
    longitude: -52.532000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: -2.035071,
    longitude: -52.485857,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: -2.024143,
    longitude: -52.439714,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: -2.013214,
    longitude: -52.418571,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: -2.002286,
    longitude: -52.372429,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: -1.991357,
    longitude: -52.326286,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: -1.980429,
    longitude: -52.280143,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: -2.004500,
    longitude: -52.234000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: -1.993571,
    longitude: -52.212857,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: -1.982643,
    longitude: -52.166714,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: -1.971714,
    longitude: -52.120571,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: -1.960786,
    longitude: -52.074429,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: -1.949857,
    longitude: -52.028286,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: -1.938929,
    longitude: -52.007143,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: -1.963000,
    longitude: -51.961000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: -1.952071,
    longitude: -51.914857,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: -1.941143,
    longitude: -51.868714,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: -1.930214,
    longitude: -51.822571,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: -1.919286,
    longitude: -51.801429,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: -1.908357,
    longitude: -51.755286,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: -1.897429,
    longitude: -51.709143,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: -1.921500,
    longitude: -51.663000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: -1.910571,
    longitude: -51.616857,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: -1.899643,
    longitude: -51.595714,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: -1.888714,
    longitude: -51.549571,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: -1.877786,
    longitude: -51.503429,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: -1.866857,
    longitude: -51.457286,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: -1.855929,
    longitude: -51.411143,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: -1.880000,
    longitude: -51.390000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: -1.869071,
    longitude: -51.343857,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: -1.858143,
    longitude: -51.297714,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: -1.847214,
    longitude: -51.251571,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: -1.836286,
    longitude: -51.205429,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: -1.825357,
    longitude: -51.184286,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: -1.814429,
    longitude: -51.138143,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: -1.838500,
    longitude: -51.092000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: -1.827571,
    longitude: -51.045857,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: -1.816643,
    longitude: -50.999714,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: -1.805714,
    longitude: -50.978571,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: -1.794786,
    longitude: -50.932429,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: -1.783857,
    longitude: -50.886286,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: -1.772929,
    longitude: -50.840143,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: -1.797000,
    longitude: -50.794000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: -1.786071,
    longitude: -50.772857,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: -1.775143,
    longitude: -50.726714,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: -1.764214,
    longitude: -50.680571,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: -1.753286,
    longitude: -50.634429,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: -1.742357,
    longitude: -50.588286,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: -1.731429,
    longitude: -50.567143,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: -1.755500,
    longitude: -50.521000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: -1.744571,
    longitude: -50.474857,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: -1.733643,
    longitude: -50.428714,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: -1.722714,
    longitude: -50.382571,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: -1.711786,
    longitude: -50.361429,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: -1.700857,
    longitude: -50.315286,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: -1.689929,
    longitude: -50.269143,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: -1.714000,
    longitude: -50.223000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: -1.703071,
    longitude: -50.176857,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: -1.692143,
    longitude: -50.155714,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: -1.681214,
    longitude: -50.109571,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: -1.670286,
    longitude: -50.063429,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: -1.659357,
    longitude: -50.017286,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: -1.648429,
    longitude: -49.971143,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: -1.672500,
    longitude: -49.950000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: -1.661571,
    longitude: -49.903857,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: -1.650643,
    longitude: -49.857714,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: -1.639714,
    longitude: -49.811571,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: -1.628786,
    longitude: -49.765429,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: -1.617857,
    longitude: -49.744286,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: -1.606929,
    longitude: -49.698143,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: -1.631000,
    longitude: -49.652000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: -1.620071,
    longitude: -49.605857,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: -1.609143,
    longitude: -49.559714,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: -1.598214,
    longitude: -49.538571,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: -1.587286,
    longitude: -49.492429,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: -1.576357,
    longitude: -49.446286,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: -1.565429,
    longitude: -49.400143,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: -1.589500,
    longitude: -49.354000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: -1.578571,
    longitude: -49.332857,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: -1.567643,
    longitude: -49.286714,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: -1.556714,
    longitude: -49.240571,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: -1.545786,
    longitude: -49.194429,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: -1.534857,
    longitude: -49.148286,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: -1.523929,
    longitude: -49.127143,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: -1.548000,
    longitude: -49.081000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: -1.537071,
    longitude: -49.034857,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: -1.526143,
    longitude: -48.988714,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: -1.515214,
    longitude: -48.942571,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: -1.504286,
    longitude: -48.921429,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: -1.493357,
    longitude: -48.875286,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: -1.482429,
    longitude: -48.829143,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: -1.506500,
    longitude: -48.783000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: -1.495571,
    longitude: -48.736857,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: -1.484643,
    longitude: -48.715714,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: -1.473714,
    longitude: -48.669571,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: -1.462786,
    longitude: -48.623429,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: -1.451857,
    longitude: -48.577286,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: -1.440929,
    longitude: -48.531143,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: -1.465000,
    longitude: -48.510000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Amazon Basin Inland Navigational and Sensor Network Checkpoint #280',
    isRestrictedZone: false
  },
];

export class AmazonBasinRiverwayCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AMAZON_BASIN_RIVERWAY_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
