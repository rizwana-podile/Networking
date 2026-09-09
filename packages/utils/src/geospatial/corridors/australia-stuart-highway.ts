/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Australia Stuart Highway Central Logistics Corridor
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

export const AUSTRALIA_STUART_HIGHWAY_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: -12.510107,
    longitude: 130.845857,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: -12.545214,
    longitude: 130.861714,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: -12.580321,
    longitude: 130.877571,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: -12.615429,
    longitude: 130.893429,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: -12.650536,
    longitude: 130.884286,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: -12.685643,
    longitude: 130.900143,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: -12.755750,
    longitude: 130.916000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: -12.790857,
    longitude: 130.931857,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: -12.825964,
    longitude: 130.947714,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: -12.861071,
    longitude: 130.938571,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: -12.896179,
    longitude: 130.954429,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: -12.931286,
    longitude: 130.970286,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: -12.966393,
    longitude: 130.986143,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: -13.036500,
    longitude: 131.002000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: -13.071607,
    longitude: 130.992857,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: -13.106714,
    longitude: 131.008714,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: -13.141821,
    longitude: 131.024571,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: -13.176929,
    longitude: 131.040429,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: -13.212036,
    longitude: 131.056286,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: -13.247143,
    longitude: 131.047143,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: -13.317250,
    longitude: 131.063000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: -13.352357,
    longitude: 131.078857,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: -13.387464,
    longitude: 131.094714,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: -13.422571,
    longitude: 131.110571,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: -13.457679,
    longitude: 131.101429,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: -13.492786,
    longitude: 131.117286,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: -13.527893,
    longitude: 131.133143,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: -13.598000,
    longitude: 131.149000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: -13.633107,
    longitude: 131.164857,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: -13.668214,
    longitude: 131.155714,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: -13.703321,
    longitude: 131.171571,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: -13.738429,
    longitude: 131.187429,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: -13.773536,
    longitude: 131.203286,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: -13.808643,
    longitude: 131.219143,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: -13.878750,
    longitude: 131.210000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: -13.913857,
    longitude: 131.225857,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: -13.948964,
    longitude: 131.241714,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: -13.984071,
    longitude: 131.257571,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: -14.019179,
    longitude: 131.273429,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: -14.054286,
    longitude: 131.264286,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: -14.089393,
    longitude: 131.280143,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: -14.159500,
    longitude: 131.296000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: -14.194607,
    longitude: 131.311857,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: -14.229714,
    longitude: 131.327714,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: -14.264821,
    longitude: 131.318571,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: -14.299929,
    longitude: 131.334429,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: -14.335036,
    longitude: 131.350286,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: -14.370143,
    longitude: 131.366143,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: -14.440250,
    longitude: 131.382000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: -14.475357,
    longitude: 131.372857,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: -14.510464,
    longitude: 131.388714,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: -14.545571,
    longitude: 131.404571,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: -14.580679,
    longitude: 131.420429,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: -14.615786,
    longitude: 131.436286,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: -14.650893,
    longitude: 131.427143,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: -14.721000,
    longitude: 131.443000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: -14.756107,
    longitude: 131.458857,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: -14.791214,
    longitude: 131.474714,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: -14.826321,
    longitude: 131.490571,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: -14.861429,
    longitude: 131.481429,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: -14.896536,
    longitude: 131.497286,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: -14.931643,
    longitude: 131.513143,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: -15.001750,
    longitude: 131.529000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: -15.036857,
    longitude: 131.544857,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: -15.071964,
    longitude: 131.535714,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: -15.107071,
    longitude: 131.551571,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: -15.142179,
    longitude: 131.567429,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: -15.177286,
    longitude: 131.583286,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: -15.212393,
    longitude: 131.599143,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: -15.282500,
    longitude: 131.590000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: -15.317607,
    longitude: 131.605857,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: -15.352714,
    longitude: 131.621714,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: -15.387821,
    longitude: 131.637571,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: -15.422929,
    longitude: 131.653429,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: -15.458036,
    longitude: 131.644286,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: -15.493143,
    longitude: 131.660143,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: -15.563250,
    longitude: 131.676000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: -15.598357,
    longitude: 131.691857,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: -15.633464,
    longitude: 131.707714,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: -15.668571,
    longitude: 131.698571,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: -15.703679,
    longitude: 131.714429,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: -15.738786,
    longitude: 131.730286,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: -15.773893,
    longitude: 131.746143,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: -15.844000,
    longitude: 131.762000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: -15.879107,
    longitude: 131.752857,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: -15.914214,
    longitude: 131.768714,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: -15.949321,
    longitude: 131.784571,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: -15.984429,
    longitude: 131.800429,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: -16.019536,
    longitude: 131.816286,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: -16.054643,
    longitude: 131.807143,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: -16.124750,
    longitude: 131.823000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: -16.159857,
    longitude: 131.838857,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: -16.194964,
    longitude: 131.854714,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: -16.230071,
    longitude: 131.870571,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: -16.265179,
    longitude: 131.861429,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: -16.300286,
    longitude: 131.877286,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: -16.335393,
    longitude: 131.893143,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: -16.405500,
    longitude: 131.909000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: -16.440607,
    longitude: 131.924857,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: -16.475714,
    longitude: 131.915714,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: -16.510821,
    longitude: 131.931571,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: -16.545929,
    longitude: 131.947429,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: -16.581036,
    longitude: 131.963286,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: -16.616143,
    longitude: 131.979143,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: -16.686250,
    longitude: 131.970000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: -16.721357,
    longitude: 131.985857,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: -16.756464,
    longitude: 132.001714,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: -16.791571,
    longitude: 132.017571,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: -16.826679,
    longitude: 132.033429,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: -16.861786,
    longitude: 132.024286,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: -16.896893,
    longitude: 132.040143,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: -16.967000,
    longitude: 132.056000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: -17.002107,
    longitude: 132.071857,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: -17.037214,
    longitude: 132.087714,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: -17.072321,
    longitude: 132.078571,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: -17.107429,
    longitude: 132.094429,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: -17.142536,
    longitude: 132.110286,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: -17.177643,
    longitude: 132.126143,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: -17.247750,
    longitude: 132.142000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: -17.282857,
    longitude: 132.132857,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: -17.317964,
    longitude: 132.148714,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: -17.353071,
    longitude: 132.164571,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: -17.388179,
    longitude: 132.180429,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: -17.423286,
    longitude: 132.196286,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: -17.458393,
    longitude: 132.187143,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: -17.528500,
    longitude: 132.203000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: -17.563607,
    longitude: 132.218857,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: -17.598714,
    longitude: 132.234714,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: -17.633821,
    longitude: 132.250571,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: -17.668929,
    longitude: 132.241429,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: -17.704036,
    longitude: 132.257286,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: -17.739143,
    longitude: 132.273143,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: -17.809250,
    longitude: 132.289000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: -17.844357,
    longitude: 132.304857,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: -17.879464,
    longitude: 132.295714,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: -17.914571,
    longitude: 132.311571,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: -17.949679,
    longitude: 132.327429,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: -17.984786,
    longitude: 132.343286,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: -18.019893,
    longitude: 132.359143,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: -18.090000,
    longitude: 132.350000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: -18.125107,
    longitude: 132.365857,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: -18.160214,
    longitude: 132.381714,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: -18.195321,
    longitude: 132.397571,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: -18.230429,
    longitude: 132.413429,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: -18.265536,
    longitude: 132.404286,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: -18.300643,
    longitude: 132.420143,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: -18.370750,
    longitude: 132.436000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: -18.405857,
    longitude: 132.451857,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: -18.440964,
    longitude: 132.467714,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: -18.476071,
    longitude: 132.458571,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: -18.511179,
    longitude: 132.474429,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: -18.546286,
    longitude: 132.490286,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: -18.581393,
    longitude: 132.506143,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: -18.651500,
    longitude: 132.522000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: -18.686607,
    longitude: 132.512857,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: -18.721714,
    longitude: 132.528714,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: -18.756821,
    longitude: 132.544571,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: -18.791929,
    longitude: 132.560429,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: -18.827036,
    longitude: 132.576286,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: -18.862143,
    longitude: 132.567143,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: -18.932250,
    longitude: 132.583000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: -18.967357,
    longitude: 132.598857,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: -19.002464,
    longitude: 132.614714,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: -19.037571,
    longitude: 132.630571,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: -19.072679,
    longitude: 132.621429,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: -19.107786,
    longitude: 132.637286,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: -19.142893,
    longitude: 132.653143,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: -19.213000,
    longitude: 132.669000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: -19.248107,
    longitude: 132.684857,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: -19.283214,
    longitude: 132.675714,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: -19.318321,
    longitude: 132.691571,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: -19.353429,
    longitude: 132.707429,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: -19.388536,
    longitude: 132.723286,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: -19.423643,
    longitude: 132.739143,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: -19.493750,
    longitude: 132.730000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: -19.528857,
    longitude: 132.745857,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: -19.563964,
    longitude: 132.761714,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: -19.599071,
    longitude: 132.777571,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: -19.634179,
    longitude: 132.793429,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: -19.669286,
    longitude: 132.784286,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: -19.704393,
    longitude: 132.800143,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: -19.774500,
    longitude: 132.816000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: -19.809607,
    longitude: 132.831857,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: -19.844714,
    longitude: 132.847714,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: -19.879821,
    longitude: 132.838571,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: -19.914929,
    longitude: 132.854429,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: -19.950036,
    longitude: 132.870286,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: -19.985143,
    longitude: 132.886143,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: -20.055250,
    longitude: 132.902000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: -20.090357,
    longitude: 132.892857,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: -20.125464,
    longitude: 132.908714,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: -20.160571,
    longitude: 132.924571,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: -20.195679,
    longitude: 132.940429,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: -20.230786,
    longitude: 132.956286,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: -20.265893,
    longitude: 132.947143,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: -20.336000,
    longitude: 132.963000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: -20.371107,
    longitude: 132.978857,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: -20.406214,
    longitude: 132.994714,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: -20.441321,
    longitude: 133.010571,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: -20.476429,
    longitude: 133.001429,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: -20.511536,
    longitude: 133.017286,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: -20.546643,
    longitude: 133.033143,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: -20.616750,
    longitude: 133.049000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: -20.651857,
    longitude: 133.064857,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: -20.686964,
    longitude: 133.055714,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: -20.722071,
    longitude: 133.071571,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: -20.757179,
    longitude: 133.087429,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: -20.792286,
    longitude: 133.103286,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: -20.827393,
    longitude: 133.119143,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: -20.897500,
    longitude: 133.110000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: -20.932607,
    longitude: 133.125857,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: -20.967714,
    longitude: 133.141714,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: -21.002821,
    longitude: 133.157571,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: -21.037929,
    longitude: 133.173429,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: -21.073036,
    longitude: 133.164286,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: -21.108143,
    longitude: 133.180143,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: -21.178250,
    longitude: 133.196000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: -21.213357,
    longitude: 133.211857,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: -21.248464,
    longitude: 133.227714,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: -21.283571,
    longitude: 133.218571,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: -21.318679,
    longitude: 133.234429,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: -21.353786,
    longitude: 133.250286,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: -21.388893,
    longitude: 133.266143,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: -21.459000,
    longitude: 133.282000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: -21.494107,
    longitude: 133.272857,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: -21.529214,
    longitude: 133.288714,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: -21.564321,
    longitude: 133.304571,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: -21.599429,
    longitude: 133.320429,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: -21.634536,
    longitude: 133.336286,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: -21.669643,
    longitude: 133.327143,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: -21.739750,
    longitude: 133.343000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: -21.774857,
    longitude: 133.358857,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: -21.809964,
    longitude: 133.374714,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: -21.845071,
    longitude: 133.390571,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: -21.880179,
    longitude: 133.381429,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: -21.915286,
    longitude: 133.397286,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: -21.950393,
    longitude: 133.413143,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: -22.020500,
    longitude: 133.429000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: -22.055607,
    longitude: 133.444857,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: -22.090714,
    longitude: 133.435714,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: -22.125821,
    longitude: 133.451571,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: -22.160929,
    longitude: 133.467429,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: -22.196036,
    longitude: 133.483286,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: -22.231143,
    longitude: 133.499143,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: -22.301250,
    longitude: 133.490000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: -22.336357,
    longitude: 133.505857,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: -22.371464,
    longitude: 133.521714,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: -22.406571,
    longitude: 133.537571,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: -22.441679,
    longitude: 133.553429,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: -22.476786,
    longitude: 133.544286,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: -22.511893,
    longitude: 133.560143,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: -22.582000,
    longitude: 133.576000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: -22.617107,
    longitude: 133.591857,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: -22.652214,
    longitude: 133.607714,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: -22.687321,
    longitude: 133.598571,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: -22.722429,
    longitude: 133.614429,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: -22.757536,
    longitude: 133.630286,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: -22.792643,
    longitude: 133.646143,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: -22.862750,
    longitude: 133.662000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: -22.897857,
    longitude: 133.652857,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: -22.932964,
    longitude: 133.668714,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: -22.968071,
    longitude: 133.684571,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: -23.003179,
    longitude: 133.700429,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: -23.038286,
    longitude: 133.716286,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: -23.073393,
    longitude: 133.707143,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: -23.143500,
    longitude: 133.723000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: -23.178607,
    longitude: 133.738857,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: -23.213714,
    longitude: 133.754714,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: -23.248821,
    longitude: 133.770571,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: -23.283929,
    longitude: 133.761429,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: -23.319036,
    longitude: 133.777286,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: -23.354143,
    longitude: 133.793143,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: -23.424250,
    longitude: 133.809000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: -23.459357,
    longitude: 133.824857,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: -23.494464,
    longitude: 133.815714,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: -23.529571,
    longitude: 133.831571,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: -23.564679,
    longitude: 133.847429,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: -23.599786,
    longitude: 133.863286,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: -23.634893,
    longitude: 133.879143,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: -23.705000,
    longitude: 133.870000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Australia Stuart Highway Central Logistics Corridor Checkpoint #280',
    isRestrictedZone: false
  },
];

export class AustraliaStuartHighwayCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = AUSTRALIA_STUART_HIGHWAY_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
