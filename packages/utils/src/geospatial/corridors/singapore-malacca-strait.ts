/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Strait of Malacca Vessel Traffic Separation Scheme
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

export const SINGAPORE_MALACCA_STRAIT_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 1.294714,
    longitude: 103.832429,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 1.314429,
    longitude: 103.824857,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 1.334143,
    longitude: 103.817286,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 1.353857,
    longitude: 103.809714,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 1.373571,
    longitude: 103.777143,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 1.393286,
    longitude: 103.769571,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 1.378000,
    longitude: 103.762000,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 1.397714,
    longitude: 103.754429,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 1.417429,
    longitude: 103.746857,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 1.437143,
    longitude: 103.714286,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 1.456857,
    longitude: 103.706714,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 1.476571,
    longitude: 103.699143,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 1.496286,
    longitude: 103.691571,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 1.481000,
    longitude: 103.684000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 1.500714,
    longitude: 103.651429,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 1.520429,
    longitude: 103.643857,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 1.540143,
    longitude: 103.636286,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 1.559857,
    longitude: 103.628714,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 1.579571,
    longitude: 103.621143,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 1.599286,
    longitude: 103.588571,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 1.584000,
    longitude: 103.581000,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 1.603714,
    longitude: 103.573429,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 1.623429,
    longitude: 103.565857,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 1.643143,
    longitude: 103.558286,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 1.662857,
    longitude: 103.525714,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 1.682571,
    longitude: 103.518143,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 1.702286,
    longitude: 103.510571,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 1.687000,
    longitude: 103.503000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 1.706714,
    longitude: 103.495429,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 1.726429,
    longitude: 103.462857,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 1.746143,
    longitude: 103.455286,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 1.765857,
    longitude: 103.447714,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 1.785571,
    longitude: 103.440143,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 1.805286,
    longitude: 103.432571,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 1.790000,
    longitude: 103.400000,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 1.809714,
    longitude: 103.392429,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 1.829429,
    longitude: 103.384857,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 1.849143,
    longitude: 103.377286,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 1.868857,
    longitude: 103.369714,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 1.888571,
    longitude: 103.337143,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 1.908286,
    longitude: 103.329571,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 1.893000,
    longitude: 103.322000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 1.912714,
    longitude: 103.314429,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 1.932429,
    longitude: 103.306857,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 1.952143,
    longitude: 103.274286,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 1.971857,
    longitude: 103.266714,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 1.991571,
    longitude: 103.259143,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 2.011286,
    longitude: 103.251571,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 1.996000,
    longitude: 103.244000,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 2.015714,
    longitude: 103.211429,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 2.035429,
    longitude: 103.203857,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 2.055143,
    longitude: 103.196286,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 2.074857,
    longitude: 103.188714,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 2.094571,
    longitude: 103.181143,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 2.114286,
    longitude: 103.148571,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 2.099000,
    longitude: 103.141000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 2.118714,
    longitude: 103.133429,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 2.138429,
    longitude: 103.125857,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 2.158143,
    longitude: 103.118286,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 2.177857,
    longitude: 103.085714,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 2.197571,
    longitude: 103.078143,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 2.217286,
    longitude: 103.070571,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 2.202000,
    longitude: 103.063000,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 2.221714,
    longitude: 103.055429,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 2.241429,
    longitude: 103.022857,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 2.261143,
    longitude: 103.015286,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 2.280857,
    longitude: 103.007714,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 2.300571,
    longitude: 103.000143,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 2.320286,
    longitude: 102.992571,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 2.305000,
    longitude: 102.960000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 2.324714,
    longitude: 102.952429,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 2.344429,
    longitude: 102.944857,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 2.364143,
    longitude: 102.937286,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 2.383857,
    longitude: 102.929714,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 2.403571,
    longitude: 102.897143,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 2.423286,
    longitude: 102.889571,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 2.408000,
    longitude: 102.882000,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 2.427714,
    longitude: 102.874429,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 2.447429,
    longitude: 102.866857,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 2.467143,
    longitude: 102.834286,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 2.486857,
    longitude: 102.826714,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 2.506571,
    longitude: 102.819143,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 2.526286,
    longitude: 102.811571,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 2.511000,
    longitude: 102.804000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 2.530714,
    longitude: 102.771429,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 2.550429,
    longitude: 102.763857,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 2.570143,
    longitude: 102.756286,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 2.589857,
    longitude: 102.748714,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 2.609571,
    longitude: 102.741143,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 2.629286,
    longitude: 102.708571,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 2.614000,
    longitude: 102.701000,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 2.633714,
    longitude: 102.693429,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 2.653429,
    longitude: 102.685857,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 2.673143,
    longitude: 102.678286,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 2.692857,
    longitude: 102.645714,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 2.712571,
    longitude: 102.638143,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 2.732286,
    longitude: 102.630571,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 2.717000,
    longitude: 102.623000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 2.736714,
    longitude: 102.615429,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 2.756429,
    longitude: 102.582857,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 2.776143,
    longitude: 102.575286,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 2.795857,
    longitude: 102.567714,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 2.815571,
    longitude: 102.560143,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 2.835286,
    longitude: 102.552571,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 2.820000,
    longitude: 102.520000,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 2.839714,
    longitude: 102.512429,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 2.859429,
    longitude: 102.504857,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 2.879143,
    longitude: 102.497286,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 2.898857,
    longitude: 102.489714,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 2.918571,
    longitude: 102.457143,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 2.938286,
    longitude: 102.449571,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 2.923000,
    longitude: 102.442000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 2.942714,
    longitude: 102.434429,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 2.962429,
    longitude: 102.426857,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 2.982143,
    longitude: 102.394286,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 3.001857,
    longitude: 102.386714,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 3.021571,
    longitude: 102.379143,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 3.041286,
    longitude: 102.371571,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 3.026000,
    longitude: 102.364000,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 3.045714,
    longitude: 102.331429,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 3.065429,
    longitude: 102.323857,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 3.085143,
    longitude: 102.316286,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 3.104857,
    longitude: 102.308714,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 3.124571,
    longitude: 102.301143,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 3.144286,
    longitude: 102.268571,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 3.129000,
    longitude: 102.261000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 3.148714,
    longitude: 102.253429,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 3.168429,
    longitude: 102.245857,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 3.188143,
    longitude: 102.238286,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 3.207857,
    longitude: 102.205714,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 3.227571,
    longitude: 102.198143,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 3.247286,
    longitude: 102.190571,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 3.232000,
    longitude: 102.183000,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 3.251714,
    longitude: 102.175429,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 3.271429,
    longitude: 102.142857,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 3.291143,
    longitude: 102.135286,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 3.310857,
    longitude: 102.127714,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 3.330571,
    longitude: 102.120143,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 3.350286,
    longitude: 102.112571,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 3.335000,
    longitude: 102.080000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 3.354714,
    longitude: 102.072429,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 3.374429,
    longitude: 102.064857,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 3.394143,
    longitude: 102.057286,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 3.413857,
    longitude: 102.049714,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 3.433571,
    longitude: 102.017143,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 3.453286,
    longitude: 102.009571,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 3.438000,
    longitude: 102.002000,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 3.457714,
    longitude: 101.994429,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 3.477429,
    longitude: 101.986857,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 3.497143,
    longitude: 101.954286,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 3.516857,
    longitude: 101.946714,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 3.536571,
    longitude: 101.939143,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 3.556286,
    longitude: 101.931571,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 3.541000,
    longitude: 101.924000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 3.560714,
    longitude: 101.891429,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 3.580429,
    longitude: 101.883857,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 3.600143,
    longitude: 101.876286,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 3.619857,
    longitude: 101.868714,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 3.639571,
    longitude: 101.861143,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 3.659286,
    longitude: 101.828571,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 3.644000,
    longitude: 101.821000,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 3.663714,
    longitude: 101.813429,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 3.683429,
    longitude: 101.805857,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 3.703143,
    longitude: 101.798286,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 3.722857,
    longitude: 101.765714,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 3.742571,
    longitude: 101.758143,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 3.762286,
    longitude: 101.750571,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 3.747000,
    longitude: 101.743000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 3.766714,
    longitude: 101.735429,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 3.786429,
    longitude: 101.702857,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 3.806143,
    longitude: 101.695286,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 3.825857,
    longitude: 101.687714,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 3.845571,
    longitude: 101.680143,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 3.865286,
    longitude: 101.672571,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 3.850000,
    longitude: 101.640000,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 3.869714,
    longitude: 101.632429,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 3.889429,
    longitude: 101.624857,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 3.909143,
    longitude: 101.617286,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 3.928857,
    longitude: 101.609714,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 3.948571,
    longitude: 101.577143,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 3.968286,
    longitude: 101.569571,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 3.953000,
    longitude: 101.562000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 3.972714,
    longitude: 101.554429,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 3.992429,
    longitude: 101.546857,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 4.012143,
    longitude: 101.514286,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 4.031857,
    longitude: 101.506714,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 4.051571,
    longitude: 101.499143,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 4.071286,
    longitude: 101.491571,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 4.056000,
    longitude: 101.484000,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 4.075714,
    longitude: 101.451429,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 4.095429,
    longitude: 101.443857,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 4.115143,
    longitude: 101.436286,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 4.134857,
    longitude: 101.428714,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 4.154571,
    longitude: 101.421143,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 4.174286,
    longitude: 101.388571,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 4.159000,
    longitude: 101.381000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 4.178714,
    longitude: 101.373429,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 4.198429,
    longitude: 101.365857,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 4.218143,
    longitude: 101.358286,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 4.237857,
    longitude: 101.325714,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 4.257571,
    longitude: 101.318143,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 4.277286,
    longitude: 101.310571,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 4.262000,
    longitude: 101.303000,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 4.281714,
    longitude: 101.295429,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 4.301429,
    longitude: 101.262857,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 4.321143,
    longitude: 101.255286,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 4.340857,
    longitude: 101.247714,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 4.360571,
    longitude: 101.240143,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 4.380286,
    longitude: 101.232571,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 4.365000,
    longitude: 101.200000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 4.384714,
    longitude: 101.192429,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 4.404429,
    longitude: 101.184857,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 4.424143,
    longitude: 101.177286,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 4.443857,
    longitude: 101.169714,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 4.463571,
    longitude: 101.137143,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 4.483286,
    longitude: 101.129571,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 4.468000,
    longitude: 101.122000,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 4.487714,
    longitude: 101.114429,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 4.507429,
    longitude: 101.106857,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 4.527143,
    longitude: 101.074286,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 4.546857,
    longitude: 101.066714,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 4.566571,
    longitude: 101.059143,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 4.586286,
    longitude: 101.051571,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 4.571000,
    longitude: 101.044000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 4.590714,
    longitude: 101.011429,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 4.610429,
    longitude: 101.003857,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 4.630143,
    longitude: 100.996286,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 4.649857,
    longitude: 100.988714,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 4.669571,
    longitude: 100.981143,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 4.689286,
    longitude: 100.948571,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 4.674000,
    longitude: 100.941000,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 4.693714,
    longitude: 100.933429,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 4.713429,
    longitude: 100.925857,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 4.733143,
    longitude: 100.918286,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 4.752857,
    longitude: 100.885714,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 4.772571,
    longitude: 100.878143,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 4.792286,
    longitude: 100.870571,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 4.777000,
    longitude: 100.863000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 4.796714,
    longitude: 100.855429,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 4.816429,
    longitude: 100.822857,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 4.836143,
    longitude: 100.815286,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 4.855857,
    longitude: 100.807714,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 4.875571,
    longitude: 100.800143,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 4.895286,
    longitude: 100.792571,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 4.880000,
    longitude: 100.760000,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 4.899714,
    longitude: 100.752429,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 4.919429,
    longitude: 100.744857,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 4.939143,
    longitude: 100.737286,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 4.958857,
    longitude: 100.729714,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 4.978571,
    longitude: 100.697143,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 4.998286,
    longitude: 100.689571,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 4.983000,
    longitude: 100.682000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 5.002714,
    longitude: 100.674429,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 5.022429,
    longitude: 100.666857,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 5.042143,
    longitude: 100.634286,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 5.061857,
    longitude: 100.626714,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 5.081571,
    longitude: 100.619143,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 5.101286,
    longitude: 100.611571,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 5.086000,
    longitude: 100.604000,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 5.105714,
    longitude: 100.571429,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 5.125429,
    longitude: 100.563857,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 5.145143,
    longitude: 100.556286,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 5.164857,
    longitude: 100.548714,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 5.184571,
    longitude: 100.541143,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 5.204286,
    longitude: 100.508571,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 5.189000,
    longitude: 100.501000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 5.208714,
    longitude: 100.493429,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 5.228429,
    longitude: 100.485857,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 5.248143,
    longitude: 100.478286,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 5.267857,
    longitude: 100.445714,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 5.287571,
    longitude: 100.438143,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 5.307286,
    longitude: 100.430571,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 5.292000,
    longitude: 100.423000,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 5.311714,
    longitude: 100.415429,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 5.331429,
    longitude: 100.382857,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 5.351143,
    longitude: 100.375286,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 5.370857,
    longitude: 100.367714,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 5.390571,
    longitude: 100.360143,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 5.410286,
    longitude: 100.352571,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 5.395000,
    longitude: 100.320000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Strait of Malacca Vessel Traffic Separation Scheme Checkpoint #280',
    isRestrictedZone: false
  },
];

export class SingaporeMalaccaStraitCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = SINGAPORE_MALACCA_STRAIT_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
