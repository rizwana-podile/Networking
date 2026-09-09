/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Scandinavian-Mediterranean Northern Freight Highway
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

export const NORDIC_BALTIC_CORRIDOR_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 59.296964,
    longitude: 18.035357,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 59.288929,
    longitude: 18.020714,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 59.280893,
    longitude: 18.006071,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 59.272857,
    longitude: 17.991429,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 59.264821,
    longitude: 17.951786,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 59.256786,
    longitude: 17.937143,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 59.213750,
    longitude: 17.922500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 59.205714,
    longitude: 17.907857,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 59.197679,
    longitude: 17.893214,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 59.189643,
    longitude: 17.853571,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 59.181607,
    longitude: 17.838929,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 59.173571,
    longitude: 17.824286,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 59.165536,
    longitude: 17.809643,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 59.122500,
    longitude: 17.795000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 59.114464,
    longitude: 17.755357,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 59.106429,
    longitude: 17.740714,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 59.098393,
    longitude: 17.726071,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 59.090357,
    longitude: 17.711429,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 59.082321,
    longitude: 17.696786,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 59.074286,
    longitude: 17.657143,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 59.031250,
    longitude: 17.642500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 59.023214,
    longitude: 17.627857,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 59.015179,
    longitude: 17.613214,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 59.007143,
    longitude: 17.598571,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 58.999107,
    longitude: 17.558929,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 58.991071,
    longitude: 17.544286,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 58.983036,
    longitude: 17.529643,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 58.940000,
    longitude: 17.515000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 58.931964,
    longitude: 17.500357,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 58.923929,
    longitude: 17.460714,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 58.915893,
    longitude: 17.446071,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 58.907857,
    longitude: 17.431429,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 58.899821,
    longitude: 17.416786,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 58.891786,
    longitude: 17.402143,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 58.848750,
    longitude: 17.362500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 58.840714,
    longitude: 17.347857,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 58.832679,
    longitude: 17.333214,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 58.824643,
    longitude: 17.318571,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 58.816607,
    longitude: 17.303929,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 58.808571,
    longitude: 17.264286,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 58.800536,
    longitude: 17.249643,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 58.757500,
    longitude: 17.235000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 58.749464,
    longitude: 17.220357,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 58.741429,
    longitude: 17.205714,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 58.733393,
    longitude: 17.166071,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 58.725357,
    longitude: 17.151429,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 58.717321,
    longitude: 17.136786,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 58.709286,
    longitude: 17.122143,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 58.666250,
    longitude: 17.107500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 58.658214,
    longitude: 17.067857,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 58.650179,
    longitude: 17.053214,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 58.642143,
    longitude: 17.038571,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 58.634107,
    longitude: 17.023929,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 58.626071,
    longitude: 17.009286,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 58.618036,
    longitude: 16.969643,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 58.575000,
    longitude: 16.955000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 58.566964,
    longitude: 16.940357,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 58.558929,
    longitude: 16.925714,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 58.550893,
    longitude: 16.911071,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 58.542857,
    longitude: 16.871429,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 58.534821,
    longitude: 16.856786,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 58.526786,
    longitude: 16.842143,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 58.483750,
    longitude: 16.827500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 58.475714,
    longitude: 16.812857,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 58.467679,
    longitude: 16.773214,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 58.459643,
    longitude: 16.758571,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 58.451607,
    longitude: 16.743929,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 58.443571,
    longitude: 16.729286,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 58.435536,
    longitude: 16.714643,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 58.392500,
    longitude: 16.675000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 58.384464,
    longitude: 16.660357,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 58.376429,
    longitude: 16.645714,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 58.368393,
    longitude: 16.631071,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 58.360357,
    longitude: 16.616429,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 58.352321,
    longitude: 16.576786,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 58.344286,
    longitude: 16.562143,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 58.301250,
    longitude: 16.547500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 58.293214,
    longitude: 16.532857,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 58.285179,
    longitude: 16.518214,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 58.277143,
    longitude: 16.478571,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 58.269107,
    longitude: 16.463929,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 58.261071,
    longitude: 16.449286,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 58.253036,
    longitude: 16.434643,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 58.210000,
    longitude: 16.420000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 58.201964,
    longitude: 16.380357,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 58.193929,
    longitude: 16.365714,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 58.185893,
    longitude: 16.351071,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 58.177857,
    longitude: 16.336429,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 58.169821,
    longitude: 16.321786,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 58.161786,
    longitude: 16.282143,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 58.118750,
    longitude: 16.267500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 58.110714,
    longitude: 16.252857,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 58.102679,
    longitude: 16.238214,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 58.094643,
    longitude: 16.223571,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 58.086607,
    longitude: 16.183929,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 58.078571,
    longitude: 16.169286,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 58.070536,
    longitude: 16.154643,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 58.027500,
    longitude: 16.140000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 58.019464,
    longitude: 16.125357,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 58.011429,
    longitude: 16.085714,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 58.003393,
    longitude: 16.071071,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 57.995357,
    longitude: 16.056429,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 57.987321,
    longitude: 16.041786,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 57.979286,
    longitude: 16.027143,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 57.936250,
    longitude: 15.987500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 57.928214,
    longitude: 15.972857,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 57.920179,
    longitude: 15.958214,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 57.912143,
    longitude: 15.943571,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 57.904107,
    longitude: 15.928929,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 57.896071,
    longitude: 15.889286,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 57.888036,
    longitude: 15.874643,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 57.845000,
    longitude: 15.860000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 57.836964,
    longitude: 15.845357,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 57.828929,
    longitude: 15.830714,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 57.820893,
    longitude: 15.791071,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 57.812857,
    longitude: 15.776429,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 57.804821,
    longitude: 15.761786,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 57.796786,
    longitude: 15.747143,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 57.753750,
    longitude: 15.732500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 57.745714,
    longitude: 15.692857,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 57.737679,
    longitude: 15.678214,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 57.729643,
    longitude: 15.663571,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 57.721607,
    longitude: 15.648929,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 57.713571,
    longitude: 15.634286,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 57.705536,
    longitude: 15.594643,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 57.662500,
    longitude: 15.580000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 57.654464,
    longitude: 15.565357,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 57.646429,
    longitude: 15.550714,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 57.638393,
    longitude: 15.536071,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 57.630357,
    longitude: 15.496429,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 57.622321,
    longitude: 15.481786,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 57.614286,
    longitude: 15.467143,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 57.571250,
    longitude: 15.452500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 57.563214,
    longitude: 15.437857,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 57.555179,
    longitude: 15.398214,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 57.547143,
    longitude: 15.383571,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 57.539107,
    longitude: 15.368929,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 57.531071,
    longitude: 15.354286,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 57.523036,
    longitude: 15.339643,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 57.480000,
    longitude: 15.300000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 57.471964,
    longitude: 15.285357,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 57.463929,
    longitude: 15.270714,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 57.455893,
    longitude: 15.256071,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 57.447857,
    longitude: 15.241429,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 57.439821,
    longitude: 15.201786,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 57.431786,
    longitude: 15.187143,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 57.388750,
    longitude: 15.172500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 57.380714,
    longitude: 15.157857,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 57.372679,
    longitude: 15.143214,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 57.364643,
    longitude: 15.103571,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 57.356607,
    longitude: 15.088929,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 57.348571,
    longitude: 15.074286,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 57.340536,
    longitude: 15.059643,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 57.297500,
    longitude: 15.045000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 57.289464,
    longitude: 15.005357,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 57.281429,
    longitude: 14.990714,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 57.273393,
    longitude: 14.976071,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 57.265357,
    longitude: 14.961429,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 57.257321,
    longitude: 14.946786,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 57.249286,
    longitude: 14.907143,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 57.206250,
    longitude: 14.892500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 57.198214,
    longitude: 14.877857,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 57.190179,
    longitude: 14.863214,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 57.182143,
    longitude: 14.848571,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 57.174107,
    longitude: 14.808929,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 57.166071,
    longitude: 14.794286,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 57.158036,
    longitude: 14.779643,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 57.115000,
    longitude: 14.765000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 57.106964,
    longitude: 14.750357,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 57.098929,
    longitude: 14.710714,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 57.090893,
    longitude: 14.696071,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 57.082857,
    longitude: 14.681429,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 57.074821,
    longitude: 14.666786,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 57.066786,
    longitude: 14.652143,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 57.023750,
    longitude: 14.612500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 57.015714,
    longitude: 14.597857,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 57.007679,
    longitude: 14.583214,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 56.999643,
    longitude: 14.568571,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 56.991607,
    longitude: 14.553929,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 56.983571,
    longitude: 14.514286,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 56.975536,
    longitude: 14.499643,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 56.932500,
    longitude: 14.485000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 56.924464,
    longitude: 14.470357,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 56.916429,
    longitude: 14.455714,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 56.908393,
    longitude: 14.416071,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 56.900357,
    longitude: 14.401429,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 56.892321,
    longitude: 14.386786,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 56.884286,
    longitude: 14.372143,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 56.841250,
    longitude: 14.357500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 56.833214,
    longitude: 14.317857,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 56.825179,
    longitude: 14.303214,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 56.817143,
    longitude: 14.288571,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 56.809107,
    longitude: 14.273929,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 56.801071,
    longitude: 14.259286,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 56.793036,
    longitude: 14.219643,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 56.750000,
    longitude: 14.205000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 56.741964,
    longitude: 14.190357,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 56.733929,
    longitude: 14.175714,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 56.725893,
    longitude: 14.161071,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 56.717857,
    longitude: 14.121429,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 56.709821,
    longitude: 14.106786,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 56.701786,
    longitude: 14.092143,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 56.658750,
    longitude: 14.077500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 56.650714,
    longitude: 14.062857,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 56.642679,
    longitude: 14.023214,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 56.634643,
    longitude: 14.008571,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 56.626607,
    longitude: 13.993929,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 56.618571,
    longitude: 13.979286,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 56.610536,
    longitude: 13.964643,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 56.567500,
    longitude: 13.925000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 56.559464,
    longitude: 13.910357,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 56.551429,
    longitude: 13.895714,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 56.543393,
    longitude: 13.881071,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 56.535357,
    longitude: 13.866429,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 56.527321,
    longitude: 13.826786,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 56.519286,
    longitude: 13.812143,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 56.476250,
    longitude: 13.797500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 56.468214,
    longitude: 13.782857,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 56.460179,
    longitude: 13.768214,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 56.452143,
    longitude: 13.728571,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 56.444107,
    longitude: 13.713929,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 56.436071,
    longitude: 13.699286,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 56.428036,
    longitude: 13.684643,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 56.385000,
    longitude: 13.670000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 56.376964,
    longitude: 13.630357,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 56.368929,
    longitude: 13.615714,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 56.360893,
    longitude: 13.601071,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 56.352857,
    longitude: 13.586429,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 56.344821,
    longitude: 13.571786,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 56.336786,
    longitude: 13.532143,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 56.293750,
    longitude: 13.517500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 56.285714,
    longitude: 13.502857,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 56.277679,
    longitude: 13.488214,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 56.269643,
    longitude: 13.473571,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 56.261607,
    longitude: 13.433929,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 56.253571,
    longitude: 13.419286,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 56.245536,
    longitude: 13.404643,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 56.202500,
    longitude: 13.390000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 56.194464,
    longitude: 13.375357,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 56.186429,
    longitude: 13.335714,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 56.178393,
    longitude: 13.321071,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 56.170357,
    longitude: 13.306429,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 56.162321,
    longitude: 13.291786,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 56.154286,
    longitude: 13.277143,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 56.111250,
    longitude: 13.237500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 56.103214,
    longitude: 13.222857,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 56.095179,
    longitude: 13.208214,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 56.087143,
    longitude: 13.193571,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 56.079107,
    longitude: 13.178929,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 56.071071,
    longitude: 13.139286,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 56.063036,
    longitude: 13.124643,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 56.020000,
    longitude: 13.110000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 56.011964,
    longitude: 13.095357,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 56.003929,
    longitude: 13.080714,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 55.995893,
    longitude: 13.041071,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 55.987857,
    longitude: 13.026429,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 55.979821,
    longitude: 13.011786,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 55.971786,
    longitude: 12.997143,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 55.928750,
    longitude: 12.982500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 55.920714,
    longitude: 12.942857,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 55.912679,
    longitude: 12.928214,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 55.904643,
    longitude: 12.913571,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 55.896607,
    longitude: 12.898929,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 55.888571,
    longitude: 12.884286,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 55.880536,
    longitude: 12.844643,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 55.837500,
    longitude: 12.830000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 55.829464,
    longitude: 12.815357,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 55.821429,
    longitude: 12.800714,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 55.813393,
    longitude: 12.786071,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 55.805357,
    longitude: 12.746429,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 55.797321,
    longitude: 12.731786,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 55.789286,
    longitude: 12.717143,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 55.746250,
    longitude: 12.702500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 55.738214,
    longitude: 12.687857,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 55.730179,
    longitude: 12.648214,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 55.722143,
    longitude: 12.633571,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 55.714107,
    longitude: 12.618929,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 55.706071,
    longitude: 12.604286,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 55.698036,
    longitude: 12.589643,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 55.655000,
    longitude: 12.550000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Scandinavian-Mediterranean Northern Freight Highway Checkpoint #280',
    isRestrictedZone: false
  },
];

export class NordicBalticCorridorCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORDIC_BALTIC_CORRIDOR_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
