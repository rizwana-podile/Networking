/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Central Asian Silk Road Continental Land Bridge
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

export const SILK_ROAD_ECONOMIC_BELT_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 43.203107,
    longitude: 76.817821,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 43.201214,
    longitude: 76.795643,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 43.199321,
    longitude: 76.773464,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 43.197429,
    longitude: 76.751286,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 43.195536,
    longitude: 76.704107,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 43.193643,
    longitude: 76.681929,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 43.156750,
    longitude: 76.659750,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 43.154857,
    longitude: 76.637571,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 43.152964,
    longitude: 76.615393,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 43.151071,
    longitude: 76.568214,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 43.149179,
    longitude: 76.546036,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 43.147286,
    longitude: 76.523857,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 43.145393,
    longitude: 76.501679,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 43.108500,
    longitude: 76.479500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 43.106607,
    longitude: 76.432321,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 43.104714,
    longitude: 76.410143,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 43.102821,
    longitude: 76.387964,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 43.100929,
    longitude: 76.365786,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 43.099036,
    longitude: 76.343607,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 43.097143,
    longitude: 76.296429,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 43.060250,
    longitude: 76.274250,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 43.058357,
    longitude: 76.252071,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 43.056464,
    longitude: 76.229893,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 43.054571,
    longitude: 76.207714,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 43.052679,
    longitude: 76.160536,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 43.050786,
    longitude: 76.138357,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 43.048893,
    longitude: 76.116179,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 43.012000,
    longitude: 76.094000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 43.010107,
    longitude: 76.071821,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 43.008214,
    longitude: 76.024643,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 43.006321,
    longitude: 76.002464,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 43.004429,
    longitude: 75.980286,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 43.002536,
    longitude: 75.958107,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 43.000643,
    longitude: 75.935929,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 42.963750,
    longitude: 75.888750,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 42.961857,
    longitude: 75.866571,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 42.959964,
    longitude: 75.844393,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 42.958071,
    longitude: 75.822214,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 42.956179,
    longitude: 75.800036,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 42.954286,
    longitude: 75.752857,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 42.952393,
    longitude: 75.730679,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 42.915500,
    longitude: 75.708500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 42.913607,
    longitude: 75.686321,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 42.911714,
    longitude: 75.664143,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 42.909821,
    longitude: 75.616964,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 42.907929,
    longitude: 75.594786,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 42.906036,
    longitude: 75.572607,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 42.904143,
    longitude: 75.550429,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 42.867250,
    longitude: 75.528250,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 42.865357,
    longitude: 75.481071,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 42.863464,
    longitude: 75.458893,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 42.861571,
    longitude: 75.436714,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 42.859679,
    longitude: 75.414536,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 42.857786,
    longitude: 75.392357,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 42.855893,
    longitude: 75.345179,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 42.819000,
    longitude: 75.323000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 42.817107,
    longitude: 75.300821,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 42.815214,
    longitude: 75.278643,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 42.813321,
    longitude: 75.256464,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 42.811429,
    longitude: 75.209286,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 42.809536,
    longitude: 75.187107,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 42.807643,
    longitude: 75.164929,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 42.770750,
    longitude: 75.142750,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 42.768857,
    longitude: 75.120571,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 42.766964,
    longitude: 75.073393,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 42.765071,
    longitude: 75.051214,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 42.763179,
    longitude: 75.029036,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 42.761286,
    longitude: 75.006857,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 42.759393,
    longitude: 74.984679,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 42.722500,
    longitude: 74.937500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 42.720607,
    longitude: 74.915321,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 42.718714,
    longitude: 74.893143,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 42.716821,
    longitude: 74.870964,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 42.714929,
    longitude: 74.848786,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 42.713036,
    longitude: 74.801607,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 42.711143,
    longitude: 74.779429,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 42.674250,
    longitude: 74.757250,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 42.672357,
    longitude: 74.735071,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 42.670464,
    longitude: 74.712893,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 42.668571,
    longitude: 74.665714,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 42.666679,
    longitude: 74.643536,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 42.664786,
    longitude: 74.621357,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 42.662893,
    longitude: 74.599179,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 42.626000,
    longitude: 74.577000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 42.624107,
    longitude: 74.529821,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 42.622214,
    longitude: 74.507643,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 42.620321,
    longitude: 74.485464,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 42.618429,
    longitude: 74.463286,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 42.616536,
    longitude: 74.441107,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 42.614643,
    longitude: 74.393929,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 42.577750,
    longitude: 74.371750,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 42.575857,
    longitude: 74.349571,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 42.573964,
    longitude: 74.327393,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 42.572071,
    longitude: 74.305214,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 42.570179,
    longitude: 74.258036,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 42.568286,
    longitude: 74.235857,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 42.566393,
    longitude: 74.213679,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 42.529500,
    longitude: 74.191500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 42.527607,
    longitude: 74.169321,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 42.525714,
    longitude: 74.122143,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 42.523821,
    longitude: 74.099964,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 42.521929,
    longitude: 74.077786,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 42.520036,
    longitude: 74.055607,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 42.518143,
    longitude: 74.033429,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 42.481250,
    longitude: 73.986250,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 42.479357,
    longitude: 73.964071,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 42.477464,
    longitude: 73.941893,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 42.475571,
    longitude: 73.919714,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 42.473679,
    longitude: 73.897536,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 42.471786,
    longitude: 73.850357,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 42.469893,
    longitude: 73.828179,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 42.433000,
    longitude: 73.806000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 42.431107,
    longitude: 73.783821,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 42.429214,
    longitude: 73.761643,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 42.427321,
    longitude: 73.714464,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 42.425429,
    longitude: 73.692286,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 42.423536,
    longitude: 73.670107,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 42.421643,
    longitude: 73.647929,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 42.384750,
    longitude: 73.625750,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 42.382857,
    longitude: 73.578571,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 42.380964,
    longitude: 73.556393,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 42.379071,
    longitude: 73.534214,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 42.377179,
    longitude: 73.512036,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 42.375286,
    longitude: 73.489857,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 42.373393,
    longitude: 73.442679,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 42.336500,
    longitude: 73.420500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 42.334607,
    longitude: 73.398321,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 42.332714,
    longitude: 73.376143,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 42.330821,
    longitude: 73.353964,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 42.328929,
    longitude: 73.306786,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 42.327036,
    longitude: 73.284607,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 42.325143,
    longitude: 73.262429,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 42.288250,
    longitude: 73.240250,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 42.286357,
    longitude: 73.218071,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 42.284464,
    longitude: 73.170893,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 42.282571,
    longitude: 73.148714,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 42.280679,
    longitude: 73.126536,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 42.278786,
    longitude: 73.104357,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 42.276893,
    longitude: 73.082179,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 42.240000,
    longitude: 73.035000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 42.238107,
    longitude: 73.012821,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 42.236214,
    longitude: 72.990643,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 42.234321,
    longitude: 72.968464,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 42.232429,
    longitude: 72.946286,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 42.230536,
    longitude: 72.899107,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 42.228643,
    longitude: 72.876929,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 42.191750,
    longitude: 72.854750,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 42.189857,
    longitude: 72.832571,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 42.187964,
    longitude: 72.810393,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 42.186071,
    longitude: 72.763214,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 42.184179,
    longitude: 72.741036,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 42.182286,
    longitude: 72.718857,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 42.180393,
    longitude: 72.696679,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 42.143500,
    longitude: 72.674500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 42.141607,
    longitude: 72.627321,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 42.139714,
    longitude: 72.605143,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 42.137821,
    longitude: 72.582964,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 42.135929,
    longitude: 72.560786,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 42.134036,
    longitude: 72.538607,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 42.132143,
    longitude: 72.491429,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 42.095250,
    longitude: 72.469250,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 42.093357,
    longitude: 72.447071,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 42.091464,
    longitude: 72.424893,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 42.089571,
    longitude: 72.402714,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 42.087679,
    longitude: 72.355536,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 42.085786,
    longitude: 72.333357,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 42.083893,
    longitude: 72.311179,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 42.047000,
    longitude: 72.289000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 42.045107,
    longitude: 72.266821,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 42.043214,
    longitude: 72.219643,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 42.041321,
    longitude: 72.197464,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 42.039429,
    longitude: 72.175286,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 42.037536,
    longitude: 72.153107,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 42.035643,
    longitude: 72.130929,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 41.998750,
    longitude: 72.083750,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 41.996857,
    longitude: 72.061571,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 41.994964,
    longitude: 72.039393,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 41.993071,
    longitude: 72.017214,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 41.991179,
    longitude: 71.995036,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 41.989286,
    longitude: 71.947857,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 41.987393,
    longitude: 71.925679,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 41.950500,
    longitude: 71.903500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 41.948607,
    longitude: 71.881321,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 41.946714,
    longitude: 71.859143,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 41.944821,
    longitude: 71.811964,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 41.942929,
    longitude: 71.789786,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 41.941036,
    longitude: 71.767607,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 41.939143,
    longitude: 71.745429,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 41.902250,
    longitude: 71.723250,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 41.900357,
    longitude: 71.676071,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 41.898464,
    longitude: 71.653893,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 41.896571,
    longitude: 71.631714,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 41.894679,
    longitude: 71.609536,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 41.892786,
    longitude: 71.587357,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 41.890893,
    longitude: 71.540179,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 41.854000,
    longitude: 71.518000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 41.852107,
    longitude: 71.495821,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 41.850214,
    longitude: 71.473643,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 41.848321,
    longitude: 71.451464,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 41.846429,
    longitude: 71.404286,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 41.844536,
    longitude: 71.382107,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 41.842643,
    longitude: 71.359929,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 41.805750,
    longitude: 71.337750,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 41.803857,
    longitude: 71.315571,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 41.801964,
    longitude: 71.268393,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 41.800071,
    longitude: 71.246214,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 41.798179,
    longitude: 71.224036,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 41.796286,
    longitude: 71.201857,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 41.794393,
    longitude: 71.179679,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 41.757500,
    longitude: 71.132500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 41.755607,
    longitude: 71.110321,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 41.753714,
    longitude: 71.088143,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 41.751821,
    longitude: 71.065964,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 41.749929,
    longitude: 71.043786,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 41.748036,
    longitude: 70.996607,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 41.746143,
    longitude: 70.974429,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 41.709250,
    longitude: 70.952250,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 41.707357,
    longitude: 70.930071,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 41.705464,
    longitude: 70.907893,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 41.703571,
    longitude: 70.860714,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 41.701679,
    longitude: 70.838536,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 41.699786,
    longitude: 70.816357,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 41.697893,
    longitude: 70.794179,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 41.661000,
    longitude: 70.772000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 41.659107,
    longitude: 70.724821,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 41.657214,
    longitude: 70.702643,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 41.655321,
    longitude: 70.680464,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 41.653429,
    longitude: 70.658286,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 41.651536,
    longitude: 70.636107,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 41.649643,
    longitude: 70.588929,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 41.612750,
    longitude: 70.566750,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 41.610857,
    longitude: 70.544571,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 41.608964,
    longitude: 70.522393,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 41.607071,
    longitude: 70.500214,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 41.605179,
    longitude: 70.453036,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 41.603286,
    longitude: 70.430857,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 41.601393,
    longitude: 70.408679,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 41.564500,
    longitude: 70.386500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 41.562607,
    longitude: 70.364321,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 41.560714,
    longitude: 70.317143,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 41.558821,
    longitude: 70.294964,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 41.556929,
    longitude: 70.272786,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 41.555036,
    longitude: 70.250607,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 41.553143,
    longitude: 70.228429,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 41.516250,
    longitude: 70.181250,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 41.514357,
    longitude: 70.159071,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 41.512464,
    longitude: 70.136893,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 41.510571,
    longitude: 70.114714,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 41.508679,
    longitude: 70.092536,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 41.506786,
    longitude: 70.045357,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 41.504893,
    longitude: 70.023179,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 41.468000,
    longitude: 70.001000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 41.466107,
    longitude: 69.978821,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 41.464214,
    longitude: 69.956643,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 41.462321,
    longitude: 69.909464,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 41.460429,
    longitude: 69.887286,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 41.458536,
    longitude: 69.865107,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 41.456643,
    longitude: 69.842929,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 41.419750,
    longitude: 69.820750,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 41.417857,
    longitude: 69.773571,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 41.415964,
    longitude: 69.751393,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 41.414071,
    longitude: 69.729214,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 41.412179,
    longitude: 69.707036,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 41.410286,
    longitude: 69.684857,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 41.408393,
    longitude: 69.637679,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 41.371500,
    longitude: 69.615500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 41.369607,
    longitude: 69.593321,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 41.367714,
    longitude: 69.571143,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 41.365821,
    longitude: 69.548964,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 41.363929,
    longitude: 69.501786,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 41.362036,
    longitude: 69.479607,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 41.360143,
    longitude: 69.457429,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 41.323250,
    longitude: 69.435250,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 41.321357,
    longitude: 69.413071,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 41.319464,
    longitude: 69.365893,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 41.317571,
    longitude: 69.343714,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 41.315679,
    longitude: 69.321536,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 41.313786,
    longitude: 69.299357,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 41.311893,
    longitude: 69.277179,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 41.275000,
    longitude: 69.230000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Central Asian Silk Road Continental Land Bridge Checkpoint #280',
    isRestrictedZone: false
  },
];

export class SilkRoadEconomicBeltCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SILK_ROAD_ECONOMIC_BELT_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
