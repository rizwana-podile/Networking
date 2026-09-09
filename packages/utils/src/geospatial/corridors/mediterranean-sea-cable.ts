/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Mediterranean Subsea Optical Communication Trunks
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

export const MEDITERRANEAN_SEA_CABLE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 36.723321,
    longitude: 3.158321,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 36.711643,
    longitude: 3.276643,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 36.699964,
    longitude: 3.394964,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 36.688286,
    longitude: 3.513286,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 36.676607,
    longitude: 3.606607,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 36.664929,
    longitude: 3.724929,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 36.618250,
    longitude: 3.843250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 36.606571,
    longitude: 3.961571,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 36.594893,
    longitude: 4.079893,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 36.583214,
    longitude: 4.173214,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 36.571536,
    longitude: 4.291536,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 36.559857,
    longitude: 4.409857,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 36.548179,
    longitude: 4.528179,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 36.501500,
    longitude: 4.646500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 36.489821,
    longitude: 4.739821,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 36.478143,
    longitude: 4.858143,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 36.466464,
    longitude: 4.976464,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 36.454786,
    longitude: 5.094786,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 36.443107,
    longitude: 5.213107,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 36.431429,
    longitude: 5.306429,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 36.384750,
    longitude: 5.424750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 36.373071,
    longitude: 5.543071,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 36.361393,
    longitude: 5.661393,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 36.349714,
    longitude: 5.779714,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 36.338036,
    longitude: 5.873036,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 36.326357,
    longitude: 5.991357,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 36.314679,
    longitude: 6.109679,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 36.268000,
    longitude: 6.228000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 36.256321,
    longitude: 6.346321,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 36.244643,
    longitude: 6.439643,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 36.232964,
    longitude: 6.557964,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 36.221286,
    longitude: 6.676286,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 36.209607,
    longitude: 6.794607,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 36.197929,
    longitude: 6.912929,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 36.151250,
    longitude: 7.006250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 36.139571,
    longitude: 7.124571,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 36.127893,
    longitude: 7.242893,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 36.116214,
    longitude: 7.361214,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 36.104536,
    longitude: 7.479536,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 36.092857,
    longitude: 7.572857,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 36.081179,
    longitude: 7.691179,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 36.034500,
    longitude: 7.809500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 36.022821,
    longitude: 7.927821,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 36.011143,
    longitude: 8.046143,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 35.999464,
    longitude: 8.139464,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 35.987786,
    longitude: 8.257786,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 35.976107,
    longitude: 8.376107,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 35.964429,
    longitude: 8.494429,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 35.917750,
    longitude: 8.612750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 35.906071,
    longitude: 8.706071,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 35.894393,
    longitude: 8.824393,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 35.882714,
    longitude: 8.942714,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 35.871036,
    longitude: 9.061036,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 35.859357,
    longitude: 9.179357,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 35.847679,
    longitude: 9.272679,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 35.801000,
    longitude: 9.391000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 35.789321,
    longitude: 9.509321,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 35.777643,
    longitude: 9.627643,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 35.765964,
    longitude: 9.745964,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 35.754286,
    longitude: 9.839286,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 35.742607,
    longitude: 9.957607,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 35.730929,
    longitude: 10.075929,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 35.684250,
    longitude: 10.194250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 35.672571,
    longitude: 10.312571,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 35.660893,
    longitude: 10.405893,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 35.649214,
    longitude: 10.524214,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 35.637536,
    longitude: 10.642536,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 35.625857,
    longitude: 10.760857,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 35.614179,
    longitude: 10.879179,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 35.567500,
    longitude: 10.972500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 35.555821,
    longitude: 11.090821,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 35.544143,
    longitude: 11.209143,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 35.532464,
    longitude: 11.327464,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 35.520786,
    longitude: 11.445786,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 35.509107,
    longitude: 11.539107,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 35.497429,
    longitude: 11.657429,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 35.450750,
    longitude: 11.775750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 35.439071,
    longitude: 11.894071,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 35.427393,
    longitude: 12.012393,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 35.415714,
    longitude: 12.105714,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 35.404036,
    longitude: 12.224036,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 35.392357,
    longitude: 12.342357,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 35.380679,
    longitude: 12.460679,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 35.334000,
    longitude: 12.579000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 35.322321,
    longitude: 12.672321,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 35.310643,
    longitude: 12.790643,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 35.298964,
    longitude: 12.908964,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 35.287286,
    longitude: 13.027286,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 35.275607,
    longitude: 13.145607,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 35.263929,
    longitude: 13.238929,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 35.217250,
    longitude: 13.357250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 35.205571,
    longitude: 13.475571,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 35.193893,
    longitude: 13.593893,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 35.182214,
    longitude: 13.712214,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 35.170536,
    longitude: 13.805536,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 35.158857,
    longitude: 13.923857,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 35.147179,
    longitude: 14.042179,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 35.100500,
    longitude: 14.160500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 35.088821,
    longitude: 14.278821,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 35.077143,
    longitude: 14.372143,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 35.065464,
    longitude: 14.490464,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 35.053786,
    longitude: 14.608786,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 35.042107,
    longitude: 14.727107,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 35.030429,
    longitude: 14.845429,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 34.983750,
    longitude: 14.938750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 34.972071,
    longitude: 15.057071,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 34.960393,
    longitude: 15.175393,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 34.948714,
    longitude: 15.293714,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 34.937036,
    longitude: 15.412036,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 34.925357,
    longitude: 15.505357,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 34.913679,
    longitude: 15.623679,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 34.867000,
    longitude: 15.742000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 34.855321,
    longitude: 15.860321,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 34.843643,
    longitude: 15.978643,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 34.831964,
    longitude: 16.071964,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 34.820286,
    longitude: 16.190286,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 34.808607,
    longitude: 16.308607,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 34.796929,
    longitude: 16.426929,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 34.750250,
    longitude: 16.545250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 34.738571,
    longitude: 16.638571,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 34.726893,
    longitude: 16.756893,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 34.715214,
    longitude: 16.875214,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 34.703536,
    longitude: 16.993536,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 34.691857,
    longitude: 17.111857,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 34.680179,
    longitude: 17.205179,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 34.633500,
    longitude: 17.323500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 34.621821,
    longitude: 17.441821,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 34.610143,
    longitude: 17.560143,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 34.598464,
    longitude: 17.678464,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 34.586786,
    longitude: 17.771786,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 34.575107,
    longitude: 17.890107,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 34.563429,
    longitude: 18.008429,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 34.516750,
    longitude: 18.126750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 34.505071,
    longitude: 18.245071,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 34.493393,
    longitude: 18.338393,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 34.481714,
    longitude: 18.456714,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 34.470036,
    longitude: 18.575036,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 34.458357,
    longitude: 18.693357,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 34.446679,
    longitude: 18.811679,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 34.400000,
    longitude: 18.905000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 34.388321,
    longitude: 19.023321,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 34.376643,
    longitude: 19.141643,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 34.364964,
    longitude: 19.259964,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 34.353286,
    longitude: 19.378286,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 34.341607,
    longitude: 19.471607,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 34.329929,
    longitude: 19.589929,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 34.283250,
    longitude: 19.708250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 34.271571,
    longitude: 19.826571,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 34.259893,
    longitude: 19.944893,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 34.248214,
    longitude: 20.038214,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 34.236536,
    longitude: 20.156536,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 34.224857,
    longitude: 20.274857,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 34.213179,
    longitude: 20.393179,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 34.166500,
    longitude: 20.511500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 34.154821,
    longitude: 20.604821,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 34.143143,
    longitude: 20.723143,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 34.131464,
    longitude: 20.841464,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 34.119786,
    longitude: 20.959786,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 34.108107,
    longitude: 21.078107,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 34.096429,
    longitude: 21.171429,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 34.049750,
    longitude: 21.289750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 34.038071,
    longitude: 21.408071,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 34.026393,
    longitude: 21.526393,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 34.014714,
    longitude: 21.644714,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 34.003036,
    longitude: 21.738036,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 33.991357,
    longitude: 21.856357,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 33.979679,
    longitude: 21.974679,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 33.933000,
    longitude: 22.093000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 33.921321,
    longitude: 22.211321,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 33.909643,
    longitude: 22.304643,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 33.897964,
    longitude: 22.422964,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 33.886286,
    longitude: 22.541286,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 33.874607,
    longitude: 22.659607,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 33.862929,
    longitude: 22.777929,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 33.816250,
    longitude: 22.871250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 33.804571,
    longitude: 22.989571,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 33.792893,
    longitude: 23.107893,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 33.781214,
    longitude: 23.226214,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 33.769536,
    longitude: 23.344536,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 33.757857,
    longitude: 23.437857,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 33.746179,
    longitude: 23.556179,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 33.699500,
    longitude: 23.674500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 33.687821,
    longitude: 23.792821,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 33.676143,
    longitude: 23.911143,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 33.664464,
    longitude: 24.004464,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 33.652786,
    longitude: 24.122786,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 33.641107,
    longitude: 24.241107,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 33.629429,
    longitude: 24.359429,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 33.582750,
    longitude: 24.477750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 33.571071,
    longitude: 24.571071,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 33.559393,
    longitude: 24.689393,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 33.547714,
    longitude: 24.807714,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 33.536036,
    longitude: 24.926036,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 33.524357,
    longitude: 25.044357,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 33.512679,
    longitude: 25.137679,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 33.466000,
    longitude: 25.256000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 33.454321,
    longitude: 25.374321,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 33.442643,
    longitude: 25.492643,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 33.430964,
    longitude: 25.610964,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 33.419286,
    longitude: 25.704286,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 33.407607,
    longitude: 25.822607,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 33.395929,
    longitude: 25.940929,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 33.349250,
    longitude: 26.059250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 33.337571,
    longitude: 26.177571,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 33.325893,
    longitude: 26.270893,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 33.314214,
    longitude: 26.389214,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 33.302536,
    longitude: 26.507536,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 33.290857,
    longitude: 26.625857,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 33.279179,
    longitude: 26.744179,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 33.232500,
    longitude: 26.837500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 33.220821,
    longitude: 26.955821,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 33.209143,
    longitude: 27.074143,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 33.197464,
    longitude: 27.192464,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 33.185786,
    longitude: 27.310786,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 33.174107,
    longitude: 27.404107,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 33.162429,
    longitude: 27.522429,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 33.115750,
    longitude: 27.640750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 33.104071,
    longitude: 27.759071,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 33.092393,
    longitude: 27.877393,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 33.080714,
    longitude: 27.970714,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 33.069036,
    longitude: 28.089036,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 33.057357,
    longitude: 28.207357,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 33.045679,
    longitude: 28.325679,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 32.999000,
    longitude: 28.444000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 32.987321,
    longitude: 28.537321,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 32.975643,
    longitude: 28.655643,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 32.963964,
    longitude: 28.773964,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 32.952286,
    longitude: 28.892286,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 32.940607,
    longitude: 29.010607,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 32.928929,
    longitude: 29.103929,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 32.882250,
    longitude: 29.222250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 32.870571,
    longitude: 29.340571,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 32.858893,
    longitude: 29.458893,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 32.847214,
    longitude: 29.577214,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 32.835536,
    longitude: 29.670536,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 32.823857,
    longitude: 29.788857,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 32.812179,
    longitude: 29.907179,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 32.765500,
    longitude: 30.025500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 32.753821,
    longitude: 30.143821,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 32.742143,
    longitude: 30.237143,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 32.730464,
    longitude: 30.355464,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 32.718786,
    longitude: 30.473786,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 32.707107,
    longitude: 30.592107,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 32.695429,
    longitude: 30.710429,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 32.648750,
    longitude: 30.803750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 32.637071,
    longitude: 30.922071,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 32.625393,
    longitude: 31.040393,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 32.613714,
    longitude: 31.158714,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 32.602036,
    longitude: 31.277036,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 32.590357,
    longitude: 31.370357,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 32.578679,
    longitude: 31.488679,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 32.532000,
    longitude: 31.607000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 32.520321,
    longitude: 31.725321,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 32.508643,
    longitude: 31.843643,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 32.496964,
    longitude: 31.936964,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 32.485286,
    longitude: 32.055286,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 32.473607,
    longitude: 32.173607,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 32.461929,
    longitude: 32.291929,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 32.415250,
    longitude: 32.410250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 32.403571,
    longitude: 32.503571,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 32.391893,
    longitude: 32.621893,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 32.380214,
    longitude: 32.740214,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 32.368536,
    longitude: 32.858536,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 32.356857,
    longitude: 32.976857,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 32.345179,
    longitude: 33.070179,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 32.298500,
    longitude: 33.188500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 32.286821,
    longitude: 33.306821,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 32.275143,
    longitude: 33.425143,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 32.263464,
    longitude: 33.543464,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 32.251786,
    longitude: 33.636786,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 32.240107,
    longitude: 33.755107,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 32.228429,
    longitude: 33.873429,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 32.181750,
    longitude: 33.991750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 32.170071,
    longitude: 34.110071,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 32.158393,
    longitude: 34.203393,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 32.146714,
    longitude: 34.321714,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 32.135036,
    longitude: 34.440036,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 32.123357,
    longitude: 34.558357,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 32.111679,
    longitude: 34.676679,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 32.065000,
    longitude: 34.770000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Mediterranean Subsea Optical Communication Trunks Checkpoint #280',
    isRestrictedZone: false
  },
];

export class MediterraneanSeaCableCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = MEDITERRANEAN_SEA_CABLE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
