/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Indian Golden Quadrilateral Highway Freight Matrix
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

export const TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 28.565929,
    longitude: 77.179536,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 28.536857,
    longitude: 77.169071,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 28.507786,
    longitude: 77.158607,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 28.478714,
    longitude: 77.148143,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 28.449643,
    longitude: 77.112679,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 28.420571,
    longitude: 77.102214,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 28.356500,
    longitude: 77.091750,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 28.327429,
    longitude: 77.081286,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 28.298357,
    longitude: 77.070821,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 28.269286,
    longitude: 77.035357,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 28.240214,
    longitude: 77.024893,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 28.211143,
    longitude: 77.014429,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 28.182071,
    longitude: 77.003964,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 28.118000,
    longitude: 76.993500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 28.088929,
    longitude: 76.958036,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 28.059857,
    longitude: 76.947571,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 28.030786,
    longitude: 76.937107,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 28.001714,
    longitude: 76.926643,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 27.972643,
    longitude: 76.916179,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 27.943571,
    longitude: 76.880714,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 27.879500,
    longitude: 76.870250,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 27.850429,
    longitude: 76.859786,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 27.821357,
    longitude: 76.849321,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 27.792286,
    longitude: 76.838857,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 27.763214,
    longitude: 76.803393,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 27.734143,
    longitude: 76.792929,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 27.705071,
    longitude: 76.782464,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 27.641000,
    longitude: 76.772000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 27.611929,
    longitude: 76.761536,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 27.582857,
    longitude: 76.726071,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 27.553786,
    longitude: 76.715607,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 27.524714,
    longitude: 76.705143,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 27.495643,
    longitude: 76.694679,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 27.466571,
    longitude: 76.684214,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 27.402500,
    longitude: 76.648750,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 27.373429,
    longitude: 76.638286,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 27.344357,
    longitude: 76.627821,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 27.315286,
    longitude: 76.617357,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 27.286214,
    longitude: 76.606893,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 27.257143,
    longitude: 76.571429,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 27.228071,
    longitude: 76.560964,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 27.164000,
    longitude: 76.550500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 27.134929,
    longitude: 76.540036,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 27.105857,
    longitude: 76.529571,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 27.076786,
    longitude: 76.494107,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 27.047714,
    longitude: 76.483643,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 27.018643,
    longitude: 76.473179,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 26.989571,
    longitude: 76.462714,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 26.925500,
    longitude: 76.452250,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 26.896429,
    longitude: 76.416786,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 26.867357,
    longitude: 76.406321,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 26.838286,
    longitude: 76.395857,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 26.809214,
    longitude: 76.385393,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 26.780143,
    longitude: 76.374929,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 26.751071,
    longitude: 76.339464,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 26.687000,
    longitude: 76.329000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 26.657929,
    longitude: 76.318536,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 26.628857,
    longitude: 76.308071,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 26.599786,
    longitude: 76.297607,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 26.570714,
    longitude: 76.262143,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 26.541643,
    longitude: 76.251679,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 26.512571,
    longitude: 76.241214,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 26.448500,
    longitude: 76.230750,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 26.419429,
    longitude: 76.220286,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 26.390357,
    longitude: 76.184821,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 26.361286,
    longitude: 76.174357,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 26.332214,
    longitude: 76.163893,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 26.303143,
    longitude: 76.153429,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 26.274071,
    longitude: 76.142964,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 26.210000,
    longitude: 76.107500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 26.180929,
    longitude: 76.097036,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 26.151857,
    longitude: 76.086571,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 26.122786,
    longitude: 76.076107,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 26.093714,
    longitude: 76.065643,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 26.064643,
    longitude: 76.030179,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 26.035571,
    longitude: 76.019714,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 25.971500,
    longitude: 76.009250,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 25.942429,
    longitude: 75.998786,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 25.913357,
    longitude: 75.988321,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 25.884286,
    longitude: 75.952857,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 25.855214,
    longitude: 75.942393,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 25.826143,
    longitude: 75.931929,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 25.797071,
    longitude: 75.921464,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 25.733000,
    longitude: 75.911000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 25.703929,
    longitude: 75.875536,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 25.674857,
    longitude: 75.865071,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 25.645786,
    longitude: 75.854607,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 25.616714,
    longitude: 75.844143,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 25.587643,
    longitude: 75.833679,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 25.558571,
    longitude: 75.798214,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 25.494500,
    longitude: 75.787750,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 25.465429,
    longitude: 75.777286,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 25.436357,
    longitude: 75.766821,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 25.407286,
    longitude: 75.756357,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 25.378214,
    longitude: 75.720893,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 25.349143,
    longitude: 75.710429,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 25.320071,
    longitude: 75.699964,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 25.256000,
    longitude: 75.689500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 25.226929,
    longitude: 75.679036,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 25.197857,
    longitude: 75.643571,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 25.168786,
    longitude: 75.633107,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 25.139714,
    longitude: 75.622643,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 25.110643,
    longitude: 75.612179,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 25.081571,
    longitude: 75.601714,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 25.017500,
    longitude: 75.566250,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 24.988429,
    longitude: 75.555786,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 24.959357,
    longitude: 75.545321,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 24.930286,
    longitude: 75.534857,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 24.901214,
    longitude: 75.524393,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 24.872143,
    longitude: 75.488929,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 24.843071,
    longitude: 75.478464,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 24.779000,
    longitude: 75.468000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 24.749929,
    longitude: 75.457536,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 24.720857,
    longitude: 75.447071,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 24.691786,
    longitude: 75.411607,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 24.662714,
    longitude: 75.401143,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 24.633643,
    longitude: 75.390679,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 24.604571,
    longitude: 75.380214,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 24.540500,
    longitude: 75.369750,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 24.511429,
    longitude: 75.334286,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 24.482357,
    longitude: 75.323821,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 24.453286,
    longitude: 75.313357,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 24.424214,
    longitude: 75.302893,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 24.395143,
    longitude: 75.292429,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 24.366071,
    longitude: 75.256964,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 24.302000,
    longitude: 75.246500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 24.272929,
    longitude: 75.236036,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 24.243857,
    longitude: 75.225571,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 24.214786,
    longitude: 75.215107,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 24.185714,
    longitude: 75.179643,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 24.156643,
    longitude: 75.169179,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 24.127571,
    longitude: 75.158714,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 24.063500,
    longitude: 75.148250,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 24.034429,
    longitude: 75.137786,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 24.005357,
    longitude: 75.102321,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 23.976286,
    longitude: 75.091857,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 23.947214,
    longitude: 75.081393,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 23.918143,
    longitude: 75.070929,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 23.889071,
    longitude: 75.060464,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 23.825000,
    longitude: 75.025000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 23.795929,
    longitude: 75.014536,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 23.766857,
    longitude: 75.004071,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 23.737786,
    longitude: 74.993607,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 23.708714,
    longitude: 74.983143,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 23.679643,
    longitude: 74.947679,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 23.650571,
    longitude: 74.937214,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 23.586500,
    longitude: 74.926750,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 23.557429,
    longitude: 74.916286,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 23.528357,
    longitude: 74.905821,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 23.499286,
    longitude: 74.870357,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 23.470214,
    longitude: 74.859893,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 23.441143,
    longitude: 74.849429,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 23.412071,
    longitude: 74.838964,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 23.348000,
    longitude: 74.828500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 23.318929,
    longitude: 74.793036,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 23.289857,
    longitude: 74.782571,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 23.260786,
    longitude: 74.772107,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 23.231714,
    longitude: 74.761643,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 23.202643,
    longitude: 74.751179,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 23.173571,
    longitude: 74.715714,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 23.109500,
    longitude: 74.705250,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 23.080429,
    longitude: 74.694786,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 23.051357,
    longitude: 74.684321,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 23.022286,
    longitude: 74.673857,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 22.993214,
    longitude: 74.638393,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 22.964143,
    longitude: 74.627929,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 22.935071,
    longitude: 74.617464,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 22.871000,
    longitude: 74.607000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 22.841929,
    longitude: 74.596536,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 22.812857,
    longitude: 74.561071,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 22.783786,
    longitude: 74.550607,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 22.754714,
    longitude: 74.540143,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 22.725643,
    longitude: 74.529679,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 22.696571,
    longitude: 74.519214,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 22.632500,
    longitude: 74.483750,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 22.603429,
    longitude: 74.473286,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 22.574357,
    longitude: 74.462821,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 22.545286,
    longitude: 74.452357,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 22.516214,
    longitude: 74.441893,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 22.487143,
    longitude: 74.406429,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 22.458071,
    longitude: 74.395964,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 22.394000,
    longitude: 74.385500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 22.364929,
    longitude: 74.375036,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 22.335857,
    longitude: 74.364571,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 22.306786,
    longitude: 74.329107,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 22.277714,
    longitude: 74.318643,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 22.248643,
    longitude: 74.308179,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 22.219571,
    longitude: 74.297714,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 22.155500,
    longitude: 74.287250,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 22.126429,
    longitude: 74.251786,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 22.097357,
    longitude: 74.241321,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 22.068286,
    longitude: 74.230857,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 22.039214,
    longitude: 74.220393,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 22.010143,
    longitude: 74.209929,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 21.981071,
    longitude: 74.174464,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 21.917000,
    longitude: 74.164000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 21.887929,
    longitude: 74.153536,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 21.858857,
    longitude: 74.143071,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 21.829786,
    longitude: 74.132607,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 21.800714,
    longitude: 74.097143,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 21.771643,
    longitude: 74.086679,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 21.742571,
    longitude: 74.076214,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 21.678500,
    longitude: 74.065750,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 21.649429,
    longitude: 74.055286,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 21.620357,
    longitude: 74.019821,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 21.591286,
    longitude: 74.009357,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 21.562214,
    longitude: 73.998893,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 21.533143,
    longitude: 73.988429,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 21.504071,
    longitude: 73.977964,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 21.440000,
    longitude: 73.942500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 21.410929,
    longitude: 73.932036,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 21.381857,
    longitude: 73.921571,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 21.352786,
    longitude: 73.911107,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 21.323714,
    longitude: 73.900643,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 21.294643,
    longitude: 73.865179,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 21.265571,
    longitude: 73.854714,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 21.201500,
    longitude: 73.844250,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 21.172429,
    longitude: 73.833786,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 21.143357,
    longitude: 73.823321,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 21.114286,
    longitude: 73.787857,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 21.085214,
    longitude: 73.777393,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 21.056143,
    longitude: 73.766929,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 21.027071,
    longitude: 73.756464,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 20.963000,
    longitude: 73.746000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 20.933929,
    longitude: 73.710536,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 20.904857,
    longitude: 73.700071,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 20.875786,
    longitude: 73.689607,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 20.846714,
    longitude: 73.679143,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 20.817643,
    longitude: 73.668679,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 20.788571,
    longitude: 73.633214,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 20.724500,
    longitude: 73.622750,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 20.695429,
    longitude: 73.612286,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 20.666357,
    longitude: 73.601821,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 20.637286,
    longitude: 73.591357,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 20.608214,
    longitude: 73.555893,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 20.579143,
    longitude: 73.545429,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 20.550071,
    longitude: 73.534964,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 20.486000,
    longitude: 73.524500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 20.456929,
    longitude: 73.514036,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 20.427857,
    longitude: 73.478571,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 20.398786,
    longitude: 73.468107,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 20.369714,
    longitude: 73.457643,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 20.340643,
    longitude: 73.447179,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 20.311571,
    longitude: 73.436714,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 20.247500,
    longitude: 73.401250,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 20.218429,
    longitude: 73.390786,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 20.189357,
    longitude: 73.380321,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 20.160286,
    longitude: 73.369857,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 20.131214,
    longitude: 73.359393,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 20.102143,
    longitude: 73.323929,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 20.073071,
    longitude: 73.313464,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 20.009000,
    longitude: 73.303000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 19.979929,
    longitude: 73.292536,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 19.950857,
    longitude: 73.282071,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 19.921786,
    longitude: 73.246607,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 19.892714,
    longitude: 73.236143,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 19.863643,
    longitude: 73.225679,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 19.834571,
    longitude: 73.215214,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 19.770500,
    longitude: 73.204750,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 19.741429,
    longitude: 73.169286,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 19.712357,
    longitude: 73.158821,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 19.683286,
    longitude: 73.148357,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 19.654214,
    longitude: 73.137893,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 19.625143,
    longitude: 73.127429,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 19.596071,
    longitude: 73.091964,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 19.532000,
    longitude: 73.081500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 19.502929,
    longitude: 73.071036,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 19.473857,
    longitude: 73.060571,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 19.444786,
    longitude: 73.050107,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 19.415714,
    longitude: 73.014643,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 19.386643,
    longitude: 73.004179,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 19.357571,
    longitude: 72.993714,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 19.293500,
    longitude: 72.983250,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 19.264429,
    longitude: 72.972786,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 19.235357,
    longitude: 72.937321,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 19.206286,
    longitude: 72.926857,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 19.177214,
    longitude: 72.916393,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 19.148143,
    longitude: 72.905929,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 19.119071,
    longitude: 72.895464,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 19.055000,
    longitude: 72.860000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Indian Golden Quadrilateral Highway Freight Matrix Checkpoint #280',
    isRestrictedZone: false
  },
];

export class TransIndiaGoldenQuadCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_INDIA_GOLDEN_QUAD_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
