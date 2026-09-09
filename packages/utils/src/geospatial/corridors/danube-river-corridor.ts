/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Danube Waterway Trans-European Transport Network
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

export const DANUBE_RIVER_CORRIDOR_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 48.179143,
    longitude: 16.412429,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 48.173286,
    longitude: 16.464857,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 48.167429,
    longitude: 16.517286,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 48.161571,
    longitude: 16.569714,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 48.155714,
    longitude: 16.597143,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 48.149857,
    longitude: 16.649571,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 48.109000,
    longitude: 16.702000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 48.103143,
    longitude: 16.754429,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 48.097286,
    longitude: 16.806857,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 48.091429,
    longitude: 16.834286,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 48.085571,
    longitude: 16.886714,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 48.079714,
    longitude: 16.939143,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 48.073857,
    longitude: 16.991571,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 48.033000,
    longitude: 17.044000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 48.027143,
    longitude: 17.071429,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 48.021286,
    longitude: 17.123857,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 48.015429,
    longitude: 17.176286,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 48.009571,
    longitude: 17.228714,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 48.003714,
    longitude: 17.281143,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 47.997857,
    longitude: 17.308571,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 47.957000,
    longitude: 17.361000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 47.951143,
    longitude: 17.413429,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 47.945286,
    longitude: 17.465857,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 47.939429,
    longitude: 17.518286,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 47.933571,
    longitude: 17.545714,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 47.927714,
    longitude: 17.598143,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 47.921857,
    longitude: 17.650571,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 47.881000,
    longitude: 17.703000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 47.875143,
    longitude: 17.755429,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 47.869286,
    longitude: 17.782857,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 47.863429,
    longitude: 17.835286,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 47.857571,
    longitude: 17.887714,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 47.851714,
    longitude: 17.940143,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 47.845857,
    longitude: 17.992571,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 47.805000,
    longitude: 18.020000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 47.799143,
    longitude: 18.072429,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 47.793286,
    longitude: 18.124857,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 47.787429,
    longitude: 18.177286,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 47.781571,
    longitude: 18.229714,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 47.775714,
    longitude: 18.257143,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 47.769857,
    longitude: 18.309571,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 47.729000,
    longitude: 18.362000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 47.723143,
    longitude: 18.414429,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 47.717286,
    longitude: 18.466857,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 47.711429,
    longitude: 18.494286,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 47.705571,
    longitude: 18.546714,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 47.699714,
    longitude: 18.599143,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 47.693857,
    longitude: 18.651571,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 47.653000,
    longitude: 18.704000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 47.647143,
    longitude: 18.731429,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 47.641286,
    longitude: 18.783857,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 47.635429,
    longitude: 18.836286,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 47.629571,
    longitude: 18.888714,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 47.623714,
    longitude: 18.941143,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 47.617857,
    longitude: 18.968571,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 47.577000,
    longitude: 19.021000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 47.571143,
    longitude: 19.073429,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 47.565286,
    longitude: 19.125857,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 47.559429,
    longitude: 19.178286,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 47.553571,
    longitude: 19.205714,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 47.547714,
    longitude: 19.258143,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 47.541857,
    longitude: 19.310571,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 47.501000,
    longitude: 19.363000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 47.495143,
    longitude: 19.415429,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 47.489286,
    longitude: 19.442857,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 47.483429,
    longitude: 19.495286,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 47.477571,
    longitude: 19.547714,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 47.471714,
    longitude: 19.600143,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 47.465857,
    longitude: 19.652571,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 47.425000,
    longitude: 19.680000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 47.419143,
    longitude: 19.732429,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 47.413286,
    longitude: 19.784857,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 47.407429,
    longitude: 19.837286,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 47.401571,
    longitude: 19.889714,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 47.395714,
    longitude: 19.917143,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 47.389857,
    longitude: 19.969571,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 47.349000,
    longitude: 20.022000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 47.343143,
    longitude: 20.074429,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 47.337286,
    longitude: 20.126857,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 47.331429,
    longitude: 20.154286,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 47.325571,
    longitude: 20.206714,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 47.319714,
    longitude: 20.259143,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 47.313857,
    longitude: 20.311571,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 47.273000,
    longitude: 20.364000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 47.267143,
    longitude: 20.391429,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 47.261286,
    longitude: 20.443857,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 47.255429,
    longitude: 20.496286,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 47.249571,
    longitude: 20.548714,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 47.243714,
    longitude: 20.601143,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 47.237857,
    longitude: 20.628571,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 47.197000,
    longitude: 20.681000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 47.191143,
    longitude: 20.733429,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 47.185286,
    longitude: 20.785857,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 47.179429,
    longitude: 20.838286,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 47.173571,
    longitude: 20.865714,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 47.167714,
    longitude: 20.918143,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 47.161857,
    longitude: 20.970571,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 47.121000,
    longitude: 21.023000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 47.115143,
    longitude: 21.075429,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 47.109286,
    longitude: 21.102857,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 47.103429,
    longitude: 21.155286,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 47.097571,
    longitude: 21.207714,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 47.091714,
    longitude: 21.260143,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 47.085857,
    longitude: 21.312571,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 47.045000,
    longitude: 21.340000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 47.039143,
    longitude: 21.392429,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 47.033286,
    longitude: 21.444857,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 47.027429,
    longitude: 21.497286,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 47.021571,
    longitude: 21.549714,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 47.015714,
    longitude: 21.577143,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 47.009857,
    longitude: 21.629571,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 46.969000,
    longitude: 21.682000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 46.963143,
    longitude: 21.734429,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 46.957286,
    longitude: 21.786857,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 46.951429,
    longitude: 21.814286,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 46.945571,
    longitude: 21.866714,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 46.939714,
    longitude: 21.919143,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 46.933857,
    longitude: 21.971571,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 46.893000,
    longitude: 22.024000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 46.887143,
    longitude: 22.051429,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 46.881286,
    longitude: 22.103857,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 46.875429,
    longitude: 22.156286,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 46.869571,
    longitude: 22.208714,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 46.863714,
    longitude: 22.261143,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 46.857857,
    longitude: 22.288571,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 46.817000,
    longitude: 22.341000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 46.811143,
    longitude: 22.393429,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 46.805286,
    longitude: 22.445857,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 46.799429,
    longitude: 22.498286,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 46.793571,
    longitude: 22.525714,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 46.787714,
    longitude: 22.578143,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 46.781857,
    longitude: 22.630571,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 46.741000,
    longitude: 22.683000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 46.735143,
    longitude: 22.735429,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 46.729286,
    longitude: 22.762857,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 46.723429,
    longitude: 22.815286,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 46.717571,
    longitude: 22.867714,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 46.711714,
    longitude: 22.920143,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 46.705857,
    longitude: 22.972571,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 46.665000,
    longitude: 23.000000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 46.659143,
    longitude: 23.052429,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 46.653286,
    longitude: 23.104857,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 46.647429,
    longitude: 23.157286,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 46.641571,
    longitude: 23.209714,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 46.635714,
    longitude: 23.237143,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 46.629857,
    longitude: 23.289571,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 46.589000,
    longitude: 23.342000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 46.583143,
    longitude: 23.394429,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 46.577286,
    longitude: 23.446857,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 46.571429,
    longitude: 23.474286,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 46.565571,
    longitude: 23.526714,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 46.559714,
    longitude: 23.579143,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 46.553857,
    longitude: 23.631571,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 46.513000,
    longitude: 23.684000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 46.507143,
    longitude: 23.711429,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 46.501286,
    longitude: 23.763857,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 46.495429,
    longitude: 23.816286,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 46.489571,
    longitude: 23.868714,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 46.483714,
    longitude: 23.921143,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 46.477857,
    longitude: 23.948571,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 46.437000,
    longitude: 24.001000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 46.431143,
    longitude: 24.053429,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 46.425286,
    longitude: 24.105857,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 46.419429,
    longitude: 24.158286,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 46.413571,
    longitude: 24.185714,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 46.407714,
    longitude: 24.238143,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 46.401857,
    longitude: 24.290571,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 46.361000,
    longitude: 24.343000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 46.355143,
    longitude: 24.395429,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 46.349286,
    longitude: 24.422857,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 46.343429,
    longitude: 24.475286,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 46.337571,
    longitude: 24.527714,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 46.331714,
    longitude: 24.580143,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 46.325857,
    longitude: 24.632571,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 46.285000,
    longitude: 24.660000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 46.279143,
    longitude: 24.712429,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 46.273286,
    longitude: 24.764857,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 46.267429,
    longitude: 24.817286,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 46.261571,
    longitude: 24.869714,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 46.255714,
    longitude: 24.897143,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 46.249857,
    longitude: 24.949571,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 46.209000,
    longitude: 25.002000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 46.203143,
    longitude: 25.054429,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 46.197286,
    longitude: 25.106857,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 46.191429,
    longitude: 25.134286,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 46.185571,
    longitude: 25.186714,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 46.179714,
    longitude: 25.239143,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 46.173857,
    longitude: 25.291571,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 46.133000,
    longitude: 25.344000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 46.127143,
    longitude: 25.371429,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 46.121286,
    longitude: 25.423857,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 46.115429,
    longitude: 25.476286,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 46.109571,
    longitude: 25.528714,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 46.103714,
    longitude: 25.581143,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 46.097857,
    longitude: 25.608571,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 46.057000,
    longitude: 25.661000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 46.051143,
    longitude: 25.713429,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 46.045286,
    longitude: 25.765857,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 46.039429,
    longitude: 25.818286,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 46.033571,
    longitude: 25.845714,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 46.027714,
    longitude: 25.898143,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 46.021857,
    longitude: 25.950571,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 45.981000,
    longitude: 26.003000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 45.975143,
    longitude: 26.055429,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 45.969286,
    longitude: 26.082857,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 45.963429,
    longitude: 26.135286,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 45.957571,
    longitude: 26.187714,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 45.951714,
    longitude: 26.240143,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 45.945857,
    longitude: 26.292571,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 45.905000,
    longitude: 26.320000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 45.899143,
    longitude: 26.372429,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 45.893286,
    longitude: 26.424857,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 45.887429,
    longitude: 26.477286,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 45.881571,
    longitude: 26.529714,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 45.875714,
    longitude: 26.557143,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 45.869857,
    longitude: 26.609571,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 45.829000,
    longitude: 26.662000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 45.823143,
    longitude: 26.714429,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 45.817286,
    longitude: 26.766857,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 45.811429,
    longitude: 26.794286,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 45.805571,
    longitude: 26.846714,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 45.799714,
    longitude: 26.899143,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 45.793857,
    longitude: 26.951571,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 45.753000,
    longitude: 27.004000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 45.747143,
    longitude: 27.031429,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 45.741286,
    longitude: 27.083857,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 45.735429,
    longitude: 27.136286,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 45.729571,
    longitude: 27.188714,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 45.723714,
    longitude: 27.241143,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 45.717857,
    longitude: 27.268571,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 45.677000,
    longitude: 27.321000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 45.671143,
    longitude: 27.373429,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 45.665286,
    longitude: 27.425857,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 45.659429,
    longitude: 27.478286,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 45.653571,
    longitude: 27.505714,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 45.647714,
    longitude: 27.558143,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 45.641857,
    longitude: 27.610571,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 45.601000,
    longitude: 27.663000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 45.595143,
    longitude: 27.715429,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 45.589286,
    longitude: 27.742857,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 45.583429,
    longitude: 27.795286,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 45.577571,
    longitude: 27.847714,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 45.571714,
    longitude: 27.900143,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 45.565857,
    longitude: 27.952571,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 45.525000,
    longitude: 27.980000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 45.519143,
    longitude: 28.032429,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 45.513286,
    longitude: 28.084857,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 45.507429,
    longitude: 28.137286,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 45.501571,
    longitude: 28.189714,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 45.495714,
    longitude: 28.217143,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 45.489857,
    longitude: 28.269571,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 45.449000,
    longitude: 28.322000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 45.443143,
    longitude: 28.374429,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 45.437286,
    longitude: 28.426857,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 45.431429,
    longitude: 28.454286,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 45.425571,
    longitude: 28.506714,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 45.419714,
    longitude: 28.559143,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 45.413857,
    longitude: 28.611571,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 45.373000,
    longitude: 28.664000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 45.367143,
    longitude: 28.691429,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 45.361286,
    longitude: 28.743857,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 45.355429,
    longitude: 28.796286,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 45.349571,
    longitude: 28.848714,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 45.343714,
    longitude: 28.901143,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 45.337857,
    longitude: 28.928571,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 45.297000,
    longitude: 28.981000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 45.291143,
    longitude: 29.033429,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 45.285286,
    longitude: 29.085857,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 45.279429,
    longitude: 29.138286,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 45.273571,
    longitude: 29.165714,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 45.267714,
    longitude: 29.218143,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 45.261857,
    longitude: 29.270571,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 45.221000,
    longitude: 29.323000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 45.215143,
    longitude: 29.375429,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 45.209286,
    longitude: 29.402857,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 45.203429,
    longitude: 29.455286,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 45.197571,
    longitude: 29.507714,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 45.191714,
    longitude: 29.560143,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 45.185857,
    longitude: 29.612571,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 45.145000,
    longitude: 29.640000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Danube Waterway Trans-European Transport Network Checkpoint #280',
    isRestrictedZone: false
  },
];

export class DanubeRiverCorridorCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = DANUBE_RIVER_CORRIDOR_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
