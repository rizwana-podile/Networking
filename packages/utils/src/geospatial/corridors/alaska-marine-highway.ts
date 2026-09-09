/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Alaska Coastal Marine Highway and Satellite Coverage Zone
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

export const ALASKA_MARINE_HIGHWAY_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 58.300393,
    longitude: -134.470321,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 58.315786,
    longitude: -134.520643,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 58.331179,
    longitude: -134.570964,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 58.346571,
    longitude: -134.621286,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 58.361964,
    longitude: -134.696607,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 58.377357,
    longitude: -134.746929,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 58.357750,
    longitude: -134.797250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 58.373143,
    longitude: -134.847571,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 58.388536,
    longitude: -134.897893,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 58.403929,
    longitude: -134.973214,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 58.419321,
    longitude: -135.023536,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 58.434714,
    longitude: -135.073857,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 58.450107,
    longitude: -135.124179,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 58.430500,
    longitude: -135.174500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 58.445893,
    longitude: -135.249821,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 58.461286,
    longitude: -135.300143,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 58.476679,
    longitude: -135.350464,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 58.492071,
    longitude: -135.400786,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 58.507464,
    longitude: -135.451107,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 58.522857,
    longitude: -135.526429,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 58.503250,
    longitude: -135.576750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 58.518643,
    longitude: -135.627071,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 58.534036,
    longitude: -135.677393,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 58.549429,
    longitude: -135.727714,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 58.564821,
    longitude: -135.803036,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 58.580214,
    longitude: -135.853357,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 58.595607,
    longitude: -135.903679,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 58.576000,
    longitude: -135.954000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 58.591393,
    longitude: -136.004321,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 58.606786,
    longitude: -136.079643,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 58.622179,
    longitude: -136.129964,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 58.637571,
    longitude: -136.180286,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 58.652964,
    longitude: -136.230607,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 58.668357,
    longitude: -136.280929,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 58.648750,
    longitude: -136.356250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 58.664143,
    longitude: -136.406571,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 58.679536,
    longitude: -136.456893,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 58.694929,
    longitude: -136.507214,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 58.710321,
    longitude: -136.557536,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 58.725714,
    longitude: -136.632857,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 58.741107,
    longitude: -136.683179,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 58.721500,
    longitude: -136.733500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 58.736893,
    longitude: -136.783821,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 58.752286,
    longitude: -136.834143,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 58.767679,
    longitude: -136.909464,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 58.783071,
    longitude: -136.959786,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 58.798464,
    longitude: -137.010107,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 58.813857,
    longitude: -137.060429,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 58.794250,
    longitude: -137.110750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 58.809643,
    longitude: -137.186071,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 58.825036,
    longitude: -137.236393,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 58.840429,
    longitude: -137.286714,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 58.855821,
    longitude: -137.337036,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 58.871214,
    longitude: -137.387357,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 58.886607,
    longitude: -137.462679,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 58.867000,
    longitude: -137.513000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 58.882393,
    longitude: -137.563321,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 58.897786,
    longitude: -137.613643,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 58.913179,
    longitude: -137.663964,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 58.928571,
    longitude: -137.739286,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 58.943964,
    longitude: -137.789607,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 58.959357,
    longitude: -137.839929,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 58.939750,
    longitude: -137.890250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 58.955143,
    longitude: -137.940571,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 58.970536,
    longitude: -138.015893,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 58.985929,
    longitude: -138.066214,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 59.001321,
    longitude: -138.116536,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 59.016714,
    longitude: -138.166857,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 59.032107,
    longitude: -138.217179,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 59.012500,
    longitude: -138.292500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 59.027893,
    longitude: -138.342821,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 59.043286,
    longitude: -138.393143,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 59.058679,
    longitude: -138.443464,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 59.074071,
    longitude: -138.493786,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 59.089464,
    longitude: -138.569107,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 59.104857,
    longitude: -138.619429,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 59.085250,
    longitude: -138.669750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 59.100643,
    longitude: -138.720071,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 59.116036,
    longitude: -138.770393,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 59.131429,
    longitude: -138.845714,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 59.146821,
    longitude: -138.896036,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 59.162214,
    longitude: -138.946357,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 59.177607,
    longitude: -138.996679,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 59.158000,
    longitude: -139.047000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 59.173393,
    longitude: -139.122321,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 59.188786,
    longitude: -139.172643,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 59.204179,
    longitude: -139.222964,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 59.219571,
    longitude: -139.273286,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 59.234964,
    longitude: -139.323607,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 59.250357,
    longitude: -139.398929,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 59.230750,
    longitude: -139.449250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 59.246143,
    longitude: -139.499571,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 59.261536,
    longitude: -139.549893,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 59.276929,
    longitude: -139.600214,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 59.292321,
    longitude: -139.675536,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 59.307714,
    longitude: -139.725857,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 59.323107,
    longitude: -139.776179,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 59.303500,
    longitude: -139.826500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 59.318893,
    longitude: -139.876821,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 59.334286,
    longitude: -139.952143,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 59.349679,
    longitude: -140.002464,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 59.365071,
    longitude: -140.052786,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 59.380464,
    longitude: -140.103107,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 59.395857,
    longitude: -140.153429,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 59.376250,
    longitude: -140.228750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 59.391643,
    longitude: -140.279071,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 59.407036,
    longitude: -140.329393,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 59.422429,
    longitude: -140.379714,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 59.437821,
    longitude: -140.430036,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 59.453214,
    longitude: -140.505357,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 59.468607,
    longitude: -140.555679,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 59.449000,
    longitude: -140.606000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 59.464393,
    longitude: -140.656321,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 59.479786,
    longitude: -140.706643,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 59.495179,
    longitude: -140.781964,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 59.510571,
    longitude: -140.832286,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 59.525964,
    longitude: -140.882607,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 59.541357,
    longitude: -140.932929,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 59.521750,
    longitude: -140.983250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 59.537143,
    longitude: -141.058571,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 59.552536,
    longitude: -141.108893,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 59.567929,
    longitude: -141.159214,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 59.583321,
    longitude: -141.209536,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 59.598714,
    longitude: -141.259857,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 59.614107,
    longitude: -141.335179,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 59.594500,
    longitude: -141.385500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 59.609893,
    longitude: -141.435821,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 59.625286,
    longitude: -141.486143,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 59.640679,
    longitude: -141.536464,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 59.656071,
    longitude: -141.611786,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 59.671464,
    longitude: -141.662107,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 59.686857,
    longitude: -141.712429,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 59.667250,
    longitude: -141.762750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 59.682643,
    longitude: -141.813071,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 59.698036,
    longitude: -141.888393,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 59.713429,
    longitude: -141.938714,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 59.728821,
    longitude: -141.989036,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 59.744214,
    longitude: -142.039357,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 59.759607,
    longitude: -142.089679,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 59.740000,
    longitude: -142.165000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 59.755393,
    longitude: -142.215321,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 59.770786,
    longitude: -142.265643,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 59.786179,
    longitude: -142.315964,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 59.801571,
    longitude: -142.366286,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 59.816964,
    longitude: -142.441607,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 59.832357,
    longitude: -142.491929,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 59.812750,
    longitude: -142.542250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 59.828143,
    longitude: -142.592571,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 59.843536,
    longitude: -142.642893,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 59.858929,
    longitude: -142.718214,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 59.874321,
    longitude: -142.768536,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 59.889714,
    longitude: -142.818857,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 59.905107,
    longitude: -142.869179,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 59.885500,
    longitude: -142.919500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 59.900893,
    longitude: -142.994821,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 59.916286,
    longitude: -143.045143,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 59.931679,
    longitude: -143.095464,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 59.947071,
    longitude: -143.145786,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 59.962464,
    longitude: -143.196107,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 59.977857,
    longitude: -143.271429,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 59.958250,
    longitude: -143.321750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 59.973643,
    longitude: -143.372071,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 59.989036,
    longitude: -143.422393,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 60.004429,
    longitude: -143.472714,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 60.019821,
    longitude: -143.548036,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 60.035214,
    longitude: -143.598357,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 60.050607,
    longitude: -143.648679,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 60.031000,
    longitude: -143.699000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 60.046393,
    longitude: -143.749321,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 60.061786,
    longitude: -143.824643,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 60.077179,
    longitude: -143.874964,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 60.092571,
    longitude: -143.925286,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 60.107964,
    longitude: -143.975607,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 60.123357,
    longitude: -144.025929,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 60.103750,
    longitude: -144.101250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 60.119143,
    longitude: -144.151571,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 60.134536,
    longitude: -144.201893,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 60.149929,
    longitude: -144.252214,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 60.165321,
    longitude: -144.302536,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 60.180714,
    longitude: -144.377857,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 60.196107,
    longitude: -144.428179,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 60.176500,
    longitude: -144.478500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 60.191893,
    longitude: -144.528821,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 60.207286,
    longitude: -144.579143,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 60.222679,
    longitude: -144.654464,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 60.238071,
    longitude: -144.704786,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 60.253464,
    longitude: -144.755107,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 60.268857,
    longitude: -144.805429,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 60.249250,
    longitude: -144.855750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 60.264643,
    longitude: -144.931071,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 60.280036,
    longitude: -144.981393,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 60.295429,
    longitude: -145.031714,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 60.310821,
    longitude: -145.082036,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 60.326214,
    longitude: -145.132357,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 60.341607,
    longitude: -145.207679,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 60.322000,
    longitude: -145.258000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 60.337393,
    longitude: -145.308321,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 60.352786,
    longitude: -145.358643,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 60.368179,
    longitude: -145.408964,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 60.383571,
    longitude: -145.484286,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 60.398964,
    longitude: -145.534607,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 60.414357,
    longitude: -145.584929,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 60.394750,
    longitude: -145.635250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 60.410143,
    longitude: -145.685571,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 60.425536,
    longitude: -145.760893,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 60.440929,
    longitude: -145.811214,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 60.456321,
    longitude: -145.861536,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 60.471714,
    longitude: -145.911857,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 60.487107,
    longitude: -145.962179,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 60.467500,
    longitude: -146.037500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 60.482893,
    longitude: -146.087821,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 60.498286,
    longitude: -146.138143,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 60.513679,
    longitude: -146.188464,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 60.529071,
    longitude: -146.238786,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 60.544464,
    longitude: -146.314107,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 60.559857,
    longitude: -146.364429,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 60.540250,
    longitude: -146.414750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 60.555643,
    longitude: -146.465071,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 60.571036,
    longitude: -146.515393,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 60.586429,
    longitude: -146.590714,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 60.601821,
    longitude: -146.641036,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 60.617214,
    longitude: -146.691357,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 60.632607,
    longitude: -146.741679,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 60.613000,
    longitude: -146.792000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 60.628393,
    longitude: -146.867321,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 60.643786,
    longitude: -146.917643,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 60.659179,
    longitude: -146.967964,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 60.674571,
    longitude: -147.018286,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 60.689964,
    longitude: -147.068607,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 60.705357,
    longitude: -147.143929,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 60.685750,
    longitude: -147.194250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 60.701143,
    longitude: -147.244571,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 60.716536,
    longitude: -147.294893,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 60.731929,
    longitude: -147.345214,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 60.747321,
    longitude: -147.420536,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 60.762714,
    longitude: -147.470857,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 60.778107,
    longitude: -147.521179,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 60.758500,
    longitude: -147.571500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 60.773893,
    longitude: -147.621821,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 60.789286,
    longitude: -147.697143,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 60.804679,
    longitude: -147.747464,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 60.820071,
    longitude: -147.797786,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 60.835464,
    longitude: -147.848107,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 60.850857,
    longitude: -147.898429,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 60.831250,
    longitude: -147.973750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 60.846643,
    longitude: -148.024071,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 60.862036,
    longitude: -148.074393,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 60.877429,
    longitude: -148.124714,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 60.892821,
    longitude: -148.175036,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 60.908214,
    longitude: -148.250357,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 60.923607,
    longitude: -148.300679,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 60.904000,
    longitude: -148.351000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 60.919393,
    longitude: -148.401321,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 60.934786,
    longitude: -148.451643,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 60.950179,
    longitude: -148.526964,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 60.965571,
    longitude: -148.577286,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 60.980964,
    longitude: -148.627607,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 60.996357,
    longitude: -148.677929,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 60.976750,
    longitude: -148.728250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 60.992143,
    longitude: -148.803571,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 61.007536,
    longitude: -148.853893,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 61.022929,
    longitude: -148.904214,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 61.038321,
    longitude: -148.954536,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 61.053714,
    longitude: -149.004857,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 61.069107,
    longitude: -149.080179,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 61.049500,
    longitude: -149.130500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 61.064893,
    longitude: -149.180821,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 61.080286,
    longitude: -149.231143,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 61.095679,
    longitude: -149.281464,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 61.111071,
    longitude: -149.356786,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 61.126464,
    longitude: -149.407107,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 61.141857,
    longitude: -149.457429,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 61.122250,
    longitude: -149.507750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 61.137643,
    longitude: -149.558071,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 61.153036,
    longitude: -149.633393,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 61.168429,
    longitude: -149.683714,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 61.183821,
    longitude: -149.734036,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 61.199214,
    longitude: -149.784357,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 61.214607,
    longitude: -149.834679,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 61.195000,
    longitude: -149.910000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Alaska Coastal Marine Highway and Satellite Coverage Zone Checkpoint #280',
    isRestrictedZone: false
  },
];

export class AlaskaMarineHighwayCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = ALASKA_MARINE_HIGHWAY_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
