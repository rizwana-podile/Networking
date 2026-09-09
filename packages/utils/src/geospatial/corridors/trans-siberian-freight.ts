/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Eurasian Trans-Siberian Freight Logistics Corridor
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

export const TRANS_SIBERIAN_FREIGHT_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 55.694857,
    longitude: 37.941643,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 55.654714,
    longitude: 38.283286,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 55.614571,
    longitude: 38.624929,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 55.574429,
    longitude: 38.966571,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 55.534286,
    longitude: 39.283214,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 55.494143,
    longitude: 39.624857,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 55.419000,
    longitude: 39.966500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 55.378857,
    longitude: 40.308143,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 55.338714,
    longitude: 40.649786,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 55.298571,
    longitude: 40.966429,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 55.258429,
    longitude: 41.308071,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 55.218286,
    longitude: 41.649714,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 55.178143,
    longitude: 41.991357,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 55.103000,
    longitude: 42.333000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 55.062857,
    longitude: 42.649643,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 55.022714,
    longitude: 42.991286,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 54.982571,
    longitude: 43.332929,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 54.942429,
    longitude: 43.674571,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 54.902286,
    longitude: 44.016214,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 54.862143,
    longitude: 44.332857,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 54.787000,
    longitude: 44.674500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 54.746857,
    longitude: 45.016143,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 54.706714,
    longitude: 45.357786,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 54.666571,
    longitude: 45.699429,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 54.626429,
    longitude: 46.016071,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 54.586286,
    longitude: 46.357714,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 54.546143,
    longitude: 46.699357,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 54.471000,
    longitude: 47.041000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 54.430857,
    longitude: 47.382643,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 54.390714,
    longitude: 47.699286,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 54.350571,
    longitude: 48.040929,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 54.310429,
    longitude: 48.382571,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 54.270286,
    longitude: 48.724214,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 54.230143,
    longitude: 49.065857,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 54.155000,
    longitude: 49.382500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 54.114857,
    longitude: 49.724143,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 54.074714,
    longitude: 50.065786,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 54.034571,
    longitude: 50.407429,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 53.994429,
    longitude: 50.749071,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 53.954286,
    longitude: 51.065714,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 53.914143,
    longitude: 51.407357,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 53.839000,
    longitude: 51.749000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 53.798857,
    longitude: 52.090643,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 53.758714,
    longitude: 52.432286,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 53.718571,
    longitude: 52.748929,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 53.678429,
    longitude: 53.090571,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 53.638286,
    longitude: 53.432214,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 53.598143,
    longitude: 53.773857,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 53.523000,
    longitude: 54.115500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 53.482857,
    longitude: 54.432143,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 53.442714,
    longitude: 54.773786,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 53.402571,
    longitude: 55.115429,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 53.362429,
    longitude: 55.457071,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 53.322286,
    longitude: 55.798714,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 53.282143,
    longitude: 56.115357,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 53.207000,
    longitude: 56.457000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 53.166857,
    longitude: 56.798643,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 53.126714,
    longitude: 57.140286,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 53.086571,
    longitude: 57.481929,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 53.046429,
    longitude: 57.798571,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 53.006286,
    longitude: 58.140214,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 52.966143,
    longitude: 58.481857,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 52.891000,
    longitude: 58.823500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 52.850857,
    longitude: 59.165143,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 52.810714,
    longitude: 59.481786,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 52.770571,
    longitude: 59.823429,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 52.730429,
    longitude: 60.165071,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 52.690286,
    longitude: 60.506714,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 52.650143,
    longitude: 60.848357,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 52.575000,
    longitude: 61.165000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 52.534857,
    longitude: 61.506643,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 52.494714,
    longitude: 61.848286,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 52.454571,
    longitude: 62.189929,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 52.414429,
    longitude: 62.531571,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 52.374286,
    longitude: 62.848214,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 52.334143,
    longitude: 63.189857,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 52.259000,
    longitude: 63.531500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 52.218857,
    longitude: 63.873143,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 52.178714,
    longitude: 64.214786,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 52.138571,
    longitude: 64.531429,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 52.098429,
    longitude: 64.873071,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 52.058286,
    longitude: 65.214714,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 52.018143,
    longitude: 65.556357,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 51.943000,
    longitude: 65.898000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 51.902857,
    longitude: 66.214643,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 51.862714,
    longitude: 66.556286,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 51.822571,
    longitude: 66.897929,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 51.782429,
    longitude: 67.239571,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 51.742286,
    longitude: 67.581214,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 51.702143,
    longitude: 67.897857,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 51.627000,
    longitude: 68.239500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 51.586857,
    longitude: 68.581143,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 51.546714,
    longitude: 68.922786,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 51.506571,
    longitude: 69.264429,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 51.466429,
    longitude: 69.581071,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 51.426286,
    longitude: 69.922714,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 51.386143,
    longitude: 70.264357,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 51.311000,
    longitude: 70.606000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 51.270857,
    longitude: 70.947643,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 51.230714,
    longitude: 71.264286,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 51.190571,
    longitude: 71.605929,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 51.150429,
    longitude: 71.947571,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 51.110286,
    longitude: 72.289214,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 51.070143,
    longitude: 72.630857,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 50.995000,
    longitude: 72.947500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 50.954857,
    longitude: 73.289143,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 50.914714,
    longitude: 73.630786,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 50.874571,
    longitude: 73.972429,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 50.834429,
    longitude: 74.314071,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 50.794286,
    longitude: 74.630714,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 50.754143,
    longitude: 74.972357,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 50.679000,
    longitude: 75.314000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 50.638857,
    longitude: 75.655643,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 50.598714,
    longitude: 75.997286,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 50.558571,
    longitude: 76.313929,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 50.518429,
    longitude: 76.655571,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 50.478286,
    longitude: 76.997214,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 50.438143,
    longitude: 77.338857,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 50.363000,
    longitude: 77.680500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 50.322857,
    longitude: 77.997143,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 50.282714,
    longitude: 78.338786,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 50.242571,
    longitude: 78.680429,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 50.202429,
    longitude: 79.022071,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 50.162286,
    longitude: 79.363714,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 50.122143,
    longitude: 79.680357,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 50.047000,
    longitude: 80.022000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 50.006857,
    longitude: 80.363643,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 49.966714,
    longitude: 80.705286,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 49.926571,
    longitude: 81.046929,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 49.886429,
    longitude: 81.363571,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 49.846286,
    longitude: 81.705214,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 49.806143,
    longitude: 82.046857,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 49.731000,
    longitude: 82.388500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 49.690857,
    longitude: 82.730143,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 49.650714,
    longitude: 83.046786,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 49.610571,
    longitude: 83.388429,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 49.570429,
    longitude: 83.730071,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 49.530286,
    longitude: 84.071714,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 49.490143,
    longitude: 84.413357,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 49.415000,
    longitude: 84.730000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 49.374857,
    longitude: 85.071643,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 49.334714,
    longitude: 85.413286,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 49.294571,
    longitude: 85.754929,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 49.254429,
    longitude: 86.096571,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 49.214286,
    longitude: 86.413214,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 49.174143,
    longitude: 86.754857,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 49.099000,
    longitude: 87.096500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 49.058857,
    longitude: 87.438143,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 49.018714,
    longitude: 87.779786,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 48.978571,
    longitude: 88.096429,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 48.938429,
    longitude: 88.438071,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 48.898286,
    longitude: 88.779714,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 48.858143,
    longitude: 89.121357,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 48.783000,
    longitude: 89.463000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 48.742857,
    longitude: 89.779643,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 48.702714,
    longitude: 90.121286,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 48.662571,
    longitude: 90.462929,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 48.622429,
    longitude: 90.804571,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 48.582286,
    longitude: 91.146214,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 48.542143,
    longitude: 91.462857,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 48.467000,
    longitude: 91.804500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 48.426857,
    longitude: 92.146143,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 48.386714,
    longitude: 92.487786,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 48.346571,
    longitude: 92.829429,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 48.306429,
    longitude: 93.146071,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 48.266286,
    longitude: 93.487714,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 48.226143,
    longitude: 93.829357,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 48.151000,
    longitude: 94.171000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 48.110857,
    longitude: 94.512643,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 48.070714,
    longitude: 94.829286,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 48.030571,
    longitude: 95.170929,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 47.990429,
    longitude: 95.512571,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 47.950286,
    longitude: 95.854214,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 47.910143,
    longitude: 96.195857,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 47.835000,
    longitude: 96.512500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 47.794857,
    longitude: 96.854143,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 47.754714,
    longitude: 97.195786,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 47.714571,
    longitude: 97.537429,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 47.674429,
    longitude: 97.879071,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 47.634286,
    longitude: 98.195714,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 47.594143,
    longitude: 98.537357,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 47.519000,
    longitude: 98.879000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 47.478857,
    longitude: 99.220643,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 47.438714,
    longitude: 99.562286,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 47.398571,
    longitude: 99.878929,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 47.358429,
    longitude: 100.220571,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 47.318286,
    longitude: 100.562214,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 47.278143,
    longitude: 100.903857,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 47.203000,
    longitude: 101.245500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 47.162857,
    longitude: 101.562143,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 47.122714,
    longitude: 101.903786,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 47.082571,
    longitude: 102.245429,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 47.042429,
    longitude: 102.587071,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 47.002286,
    longitude: 102.928714,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 46.962143,
    longitude: 103.245357,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 46.887000,
    longitude: 103.587000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 46.846857,
    longitude: 103.928643,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 46.806714,
    longitude: 104.270286,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 46.766571,
    longitude: 104.611929,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 46.726429,
    longitude: 104.928571,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 46.686286,
    longitude: 105.270214,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 46.646143,
    longitude: 105.611857,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 46.571000,
    longitude: 105.953500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 46.530857,
    longitude: 106.295143,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 46.490714,
    longitude: 106.611786,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 46.450571,
    longitude: 106.953429,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 46.410429,
    longitude: 107.295071,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 46.370286,
    longitude: 107.636714,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 46.330143,
    longitude: 107.978357,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 46.255000,
    longitude: 108.295000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 46.214857,
    longitude: 108.636643,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 46.174714,
    longitude: 108.978286,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 46.134571,
    longitude: 109.319929,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 46.094429,
    longitude: 109.661571,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 46.054286,
    longitude: 109.978214,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 46.014143,
    longitude: 110.319857,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 45.939000,
    longitude: 110.661500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 45.898857,
    longitude: 111.003143,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 45.858714,
    longitude: 111.344786,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 45.818571,
    longitude: 111.661429,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 45.778429,
    longitude: 112.003071,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 45.738286,
    longitude: 112.344714,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 45.698143,
    longitude: 112.686357,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 45.623000,
    longitude: 113.028000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 45.582857,
    longitude: 113.344643,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 45.542714,
    longitude: 113.686286,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 45.502571,
    longitude: 114.027929,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 45.462429,
    longitude: 114.369571,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 45.422286,
    longitude: 114.711214,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 45.382143,
    longitude: 115.027857,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 45.307000,
    longitude: 115.369500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 45.266857,
    longitude: 115.711143,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 45.226714,
    longitude: 116.052786,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 45.186571,
    longitude: 116.394429,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 45.146429,
    longitude: 116.711071,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 45.106286,
    longitude: 117.052714,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 45.066143,
    longitude: 117.394357,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 44.991000,
    longitude: 117.736000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 44.950857,
    longitude: 118.077643,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 44.910714,
    longitude: 118.394286,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 44.870571,
    longitude: 118.735929,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 44.830429,
    longitude: 119.077571,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 44.790286,
    longitude: 119.419214,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 44.750143,
    longitude: 119.760857,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 44.675000,
    longitude: 120.077500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 44.634857,
    longitude: 120.419143,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 44.594714,
    longitude: 120.760786,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 44.554571,
    longitude: 121.102429,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 44.514429,
    longitude: 121.444071,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 44.474286,
    longitude: 121.760714,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 44.434143,
    longitude: 122.102357,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 44.359000,
    longitude: 122.444000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 44.318857,
    longitude: 122.785643,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 44.278714,
    longitude: 123.127286,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 44.238571,
    longitude: 123.443929,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 44.198429,
    longitude: 123.785571,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 44.158286,
    longitude: 124.127214,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 44.118143,
    longitude: 124.468857,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 44.043000,
    longitude: 124.810500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 44.002857,
    longitude: 125.127143,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 43.962714,
    longitude: 125.468786,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 43.922571,
    longitude: 125.810429,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 43.882429,
    longitude: 126.152071,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 43.842286,
    longitude: 126.493714,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 43.802143,
    longitude: 126.810357,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 43.727000,
    longitude: 127.152000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 43.686857,
    longitude: 127.493643,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 43.646714,
    longitude: 127.835286,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 43.606571,
    longitude: 128.176929,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 43.566429,
    longitude: 128.493571,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 43.526286,
    longitude: 128.835214,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 43.486143,
    longitude: 129.176857,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 43.411000,
    longitude: 129.518500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 43.370857,
    longitude: 129.860143,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 43.330714,
    longitude: 130.176786,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 43.290571,
    longitude: 130.518429,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 43.250429,
    longitude: 130.860071,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 43.210286,
    longitude: 131.201714,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 43.170143,
    longitude: 131.543357,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 43.095000,
    longitude: 131.860000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Eurasian Trans-Siberian Freight Logistics Corridor Checkpoint #280',
    isRestrictedZone: false
  },
];

export class TransSiberianFreightCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_SIBERIAN_FREIGHT_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
