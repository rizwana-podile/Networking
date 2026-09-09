/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * St. Lawrence Seaway Commercial Navigation Channel
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

export const GREAT_LAKES_SEAWAY_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 45.477036,
    longitude: -73.615214,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 45.469071,
    longitude: -73.660429,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 45.461107,
    longitude: -73.705643,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 45.453143,
    longitude: -73.750857,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 45.445179,
    longitude: -73.821071,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 45.437214,
    longitude: -73.866286,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 45.394250,
    longitude: -73.911500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 45.386286,
    longitude: -73.956714,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 45.378321,
    longitude: -74.001929,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 45.370357,
    longitude: -74.072143,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 45.362393,
    longitude: -74.117357,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 45.354429,
    longitude: -74.162571,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 45.346464,
    longitude: -74.207786,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 45.303500,
    longitude: -74.253000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 45.295536,
    longitude: -74.323214,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 45.287571,
    longitude: -74.368429,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 45.279607,
    longitude: -74.413643,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 45.271643,
    longitude: -74.458857,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 45.263679,
    longitude: -74.504071,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 45.255714,
    longitude: -74.574286,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 45.212750,
    longitude: -74.619500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 45.204786,
    longitude: -74.664714,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 45.196821,
    longitude: -74.709929,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 45.188857,
    longitude: -74.755143,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 45.180893,
    longitude: -74.825357,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 45.172929,
    longitude: -74.870571,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 45.164964,
    longitude: -74.915786,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 45.122000,
    longitude: -74.961000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 45.114036,
    longitude: -75.006214,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 45.106071,
    longitude: -75.076429,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 45.098107,
    longitude: -75.121643,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 45.090143,
    longitude: -75.166857,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 45.082179,
    longitude: -75.212071,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 45.074214,
    longitude: -75.257286,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 45.031250,
    longitude: -75.327500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 45.023286,
    longitude: -75.372714,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 45.015321,
    longitude: -75.417929,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 45.007357,
    longitude: -75.463143,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 44.999393,
    longitude: -75.508357,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 44.991429,
    longitude: -75.578571,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 44.983464,
    longitude: -75.623786,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 44.940500,
    longitude: -75.669000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 44.932536,
    longitude: -75.714214,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 44.924571,
    longitude: -75.759429,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 44.916607,
    longitude: -75.829643,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 44.908643,
    longitude: -75.874857,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 44.900679,
    longitude: -75.920071,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 44.892714,
    longitude: -75.965286,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 44.849750,
    longitude: -76.010500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 44.841786,
    longitude: -76.080714,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 44.833821,
    longitude: -76.125929,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 44.825857,
    longitude: -76.171143,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 44.817893,
    longitude: -76.216357,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 44.809929,
    longitude: -76.261571,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 44.801964,
    longitude: -76.331786,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 44.759000,
    longitude: -76.377000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 44.751036,
    longitude: -76.422214,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 44.743071,
    longitude: -76.467429,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 44.735107,
    longitude: -76.512643,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 44.727143,
    longitude: -76.582857,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 44.719179,
    longitude: -76.628071,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 44.711214,
    longitude: -76.673286,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 44.668250,
    longitude: -76.718500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 44.660286,
    longitude: -76.763714,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 44.652321,
    longitude: -76.833929,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 44.644357,
    longitude: -76.879143,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 44.636393,
    longitude: -76.924357,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 44.628429,
    longitude: -76.969571,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 44.620464,
    longitude: -77.014786,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 44.577500,
    longitude: -77.085000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 44.569536,
    longitude: -77.130214,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 44.561571,
    longitude: -77.175429,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 44.553607,
    longitude: -77.220643,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 44.545643,
    longitude: -77.265857,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 44.537679,
    longitude: -77.336071,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 44.529714,
    longitude: -77.381286,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 44.486750,
    longitude: -77.426500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 44.478786,
    longitude: -77.471714,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 44.470821,
    longitude: -77.516929,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 44.462857,
    longitude: -77.587143,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 44.454893,
    longitude: -77.632357,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 44.446929,
    longitude: -77.677571,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 44.438964,
    longitude: -77.722786,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 44.396000,
    longitude: -77.768000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 44.388036,
    longitude: -77.838214,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 44.380071,
    longitude: -77.883429,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 44.372107,
    longitude: -77.928643,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 44.364143,
    longitude: -77.973857,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 44.356179,
    longitude: -78.019071,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 44.348214,
    longitude: -78.089286,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 44.305250,
    longitude: -78.134500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 44.297286,
    longitude: -78.179714,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 44.289321,
    longitude: -78.224929,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 44.281357,
    longitude: -78.270143,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 44.273393,
    longitude: -78.340357,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 44.265429,
    longitude: -78.385571,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 44.257464,
    longitude: -78.430786,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 44.214500,
    longitude: -78.476000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 44.206536,
    longitude: -78.521214,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 44.198571,
    longitude: -78.591429,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 44.190607,
    longitude: -78.636643,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 44.182643,
    longitude: -78.681857,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 44.174679,
    longitude: -78.727071,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 44.166714,
    longitude: -78.772286,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 44.123750,
    longitude: -78.842500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 44.115786,
    longitude: -78.887714,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 44.107821,
    longitude: -78.932929,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 44.099857,
    longitude: -78.978143,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 44.091893,
    longitude: -79.023357,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 44.083929,
    longitude: -79.093571,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 44.075964,
    longitude: -79.138786,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 44.033000,
    longitude: -79.184000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 44.025036,
    longitude: -79.229214,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 44.017071,
    longitude: -79.274429,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 44.009107,
    longitude: -79.344643,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 44.001143,
    longitude: -79.389857,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 43.993179,
    longitude: -79.435071,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 43.985214,
    longitude: -79.480286,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 43.942250,
    longitude: -79.525500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 43.934286,
    longitude: -79.595714,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 43.926321,
    longitude: -79.640929,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 43.918357,
    longitude: -79.686143,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 43.910393,
    longitude: -79.731357,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 43.902429,
    longitude: -79.776571,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 43.894464,
    longitude: -79.846786,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 43.851500,
    longitude: -79.892000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 43.843536,
    longitude: -79.937214,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 43.835571,
    longitude: -79.982429,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 43.827607,
    longitude: -80.027643,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 43.819643,
    longitude: -80.097857,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 43.811679,
    longitude: -80.143071,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 43.803714,
    longitude: -80.188286,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 43.760750,
    longitude: -80.233500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 43.752786,
    longitude: -80.278714,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 43.744821,
    longitude: -80.348929,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 43.736857,
    longitude: -80.394143,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 43.728893,
    longitude: -80.439357,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 43.720929,
    longitude: -80.484571,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 43.712964,
    longitude: -80.529786,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 43.670000,
    longitude: -80.600000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 43.662036,
    longitude: -80.645214,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 43.654071,
    longitude: -80.690429,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 43.646107,
    longitude: -80.735643,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 43.638143,
    longitude: -80.780857,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 43.630179,
    longitude: -80.851071,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 43.622214,
    longitude: -80.896286,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 43.579250,
    longitude: -80.941500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 43.571286,
    longitude: -80.986714,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 43.563321,
    longitude: -81.031929,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 43.555357,
    longitude: -81.102143,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 43.547393,
    longitude: -81.147357,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 43.539429,
    longitude: -81.192571,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 43.531464,
    longitude: -81.237786,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 43.488500,
    longitude: -81.283000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 43.480536,
    longitude: -81.353214,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 43.472571,
    longitude: -81.398429,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 43.464607,
    longitude: -81.443643,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 43.456643,
    longitude: -81.488857,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 43.448679,
    longitude: -81.534071,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 43.440714,
    longitude: -81.604286,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 43.397750,
    longitude: -81.649500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 43.389786,
    longitude: -81.694714,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 43.381821,
    longitude: -81.739929,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 43.373857,
    longitude: -81.785143,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 43.365893,
    longitude: -81.855357,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 43.357929,
    longitude: -81.900571,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 43.349964,
    longitude: -81.945786,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 43.307000,
    longitude: -81.991000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 43.299036,
    longitude: -82.036214,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 43.291071,
    longitude: -82.106429,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 43.283107,
    longitude: -82.151643,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 43.275143,
    longitude: -82.196857,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 43.267179,
    longitude: -82.242071,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 43.259214,
    longitude: -82.287286,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 43.216250,
    longitude: -82.357500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 43.208286,
    longitude: -82.402714,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 43.200321,
    longitude: -82.447929,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 43.192357,
    longitude: -82.493143,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 43.184393,
    longitude: -82.538357,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 43.176429,
    longitude: -82.608571,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 43.168464,
    longitude: -82.653786,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 43.125500,
    longitude: -82.699000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 43.117536,
    longitude: -82.744214,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 43.109571,
    longitude: -82.789429,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 43.101607,
    longitude: -82.859643,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 43.093643,
    longitude: -82.904857,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 43.085679,
    longitude: -82.950071,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 43.077714,
    longitude: -82.995286,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 43.034750,
    longitude: -83.040500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 43.026786,
    longitude: -83.110714,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 43.018821,
    longitude: -83.155929,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 43.010857,
    longitude: -83.201143,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 43.002893,
    longitude: -83.246357,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 42.994929,
    longitude: -83.291571,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 42.986964,
    longitude: -83.361786,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 42.944000,
    longitude: -83.407000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 42.936036,
    longitude: -83.452214,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 42.928071,
    longitude: -83.497429,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 42.920107,
    longitude: -83.542643,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 42.912143,
    longitude: -83.612857,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 42.904179,
    longitude: -83.658071,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 42.896214,
    longitude: -83.703286,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 42.853250,
    longitude: -83.748500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 42.845286,
    longitude: -83.793714,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 42.837321,
    longitude: -83.863929,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 42.829357,
    longitude: -83.909143,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 42.821393,
    longitude: -83.954357,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 42.813429,
    longitude: -83.999571,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 42.805464,
    longitude: -84.044786,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 42.762500,
    longitude: -84.115000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 42.754536,
    longitude: -84.160214,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 42.746571,
    longitude: -84.205429,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 42.738607,
    longitude: -84.250643,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 42.730643,
    longitude: -84.295857,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 42.722679,
    longitude: -84.366071,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 42.714714,
    longitude: -84.411286,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 42.671750,
    longitude: -84.456500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 42.663786,
    longitude: -84.501714,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 42.655821,
    longitude: -84.546929,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 42.647857,
    longitude: -84.617143,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 42.639893,
    longitude: -84.662357,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 42.631929,
    longitude: -84.707571,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 42.623964,
    longitude: -84.752786,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 42.581000,
    longitude: -84.798000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 42.573036,
    longitude: -84.868214,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 42.565071,
    longitude: -84.913429,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 42.557107,
    longitude: -84.958643,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 42.549143,
    longitude: -85.003857,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 42.541179,
    longitude: -85.049071,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 42.533214,
    longitude: -85.119286,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 42.490250,
    longitude: -85.164500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 42.482286,
    longitude: -85.209714,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 42.474321,
    longitude: -85.254929,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 42.466357,
    longitude: -85.300143,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 42.458393,
    longitude: -85.370357,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 42.450429,
    longitude: -85.415571,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 42.442464,
    longitude: -85.460786,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 42.399500,
    longitude: -85.506000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 42.391536,
    longitude: -85.551214,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 42.383571,
    longitude: -85.621429,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 42.375607,
    longitude: -85.666643,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 42.367643,
    longitude: -85.711857,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 42.359679,
    longitude: -85.757071,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 42.351714,
    longitude: -85.802286,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 42.308750,
    longitude: -85.872500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 42.300786,
    longitude: -85.917714,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 42.292821,
    longitude: -85.962929,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 42.284857,
    longitude: -86.008143,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 42.276893,
    longitude: -86.053357,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 42.268929,
    longitude: -86.123571,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 42.260964,
    longitude: -86.168786,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 42.218000,
    longitude: -86.214000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 42.210036,
    longitude: -86.259214,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 42.202071,
    longitude: -86.304429,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 42.194107,
    longitude: -86.374643,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 42.186143,
    longitude: -86.419857,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 42.178179,
    longitude: -86.465071,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 42.170214,
    longitude: -86.510286,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 42.127250,
    longitude: -86.555500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 42.119286,
    longitude: -86.625714,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 42.111321,
    longitude: -86.670929,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 42.103357,
    longitude: -86.716143,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 42.095393,
    longitude: -86.761357,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 42.087429,
    longitude: -86.806571,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 42.079464,
    longitude: -86.876786,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 42.036500,
    longitude: -86.922000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 42.028536,
    longitude: -86.967214,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 42.020571,
    longitude: -87.012429,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 42.012607,
    longitude: -87.057643,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 42.004643,
    longitude: -87.127857,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 41.996679,
    longitude: -87.173071,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 41.988714,
    longitude: -87.218286,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 41.945750,
    longitude: -87.263500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 41.937786,
    longitude: -87.308714,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 41.929821,
    longitude: -87.378929,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 41.921857,
    longitude: -87.424143,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 41.913893,
    longitude: -87.469357,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 41.905929,
    longitude: -87.514571,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 41.897964,
    longitude: -87.559786,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 41.855000,
    longitude: -87.630000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'St. Lawrence Seaway Commercial Navigation Channel Checkpoint #280',
    isRestrictedZone: false
  },
];

export class GreatLakesSeawayCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = GREAT_LAKES_SEAWAY_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
