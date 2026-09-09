/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Panama Canal Interoceanic Waterway and Tracking Zone
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

export const PANAMA_CANAL_TRANSIT_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 8.941429,
    longitude: -79.556250,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 8.947857,
    longitude: -79.552500,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 8.954286,
    longitude: -79.548750,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 8.960714,
    longitude: -79.545000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 8.967143,
    longitude: -79.566250,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 8.973571,
    longitude: -79.562500,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 8.945000,
    longitude: -79.558750,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 8.951429,
    longitude: -79.555000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 8.957857,
    longitude: -79.551250,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 8.964286,
    longitude: -79.572500,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 8.970714,
    longitude: -79.568750,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 8.977143,
    longitude: -79.565000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 8.983571,
    longitude: -79.561250,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 8.955000,
    longitude: -79.557500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 8.961429,
    longitude: -79.578750,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 8.967857,
    longitude: -79.575000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 8.974286,
    longitude: -79.571250,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 8.980714,
    longitude: -79.567500,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 8.987143,
    longitude: -79.563750,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 8.993571,
    longitude: -79.585000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 8.965000,
    longitude: -79.581250,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 8.971429,
    longitude: -79.577500,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 8.977857,
    longitude: -79.573750,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 8.984286,
    longitude: -79.570000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 8.990714,
    longitude: -79.591250,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 8.997143,
    longitude: -79.587500,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 9.003571,
    longitude: -79.583750,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 8.975000,
    longitude: -79.580000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 8.981429,
    longitude: -79.576250,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 8.987857,
    longitude: -79.597500,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 8.994286,
    longitude: -79.593750,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 9.000714,
    longitude: -79.590000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 9.007143,
    longitude: -79.586250,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 9.013571,
    longitude: -79.582500,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 8.985000,
    longitude: -79.603750,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 8.991429,
    longitude: -79.600000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 8.997857,
    longitude: -79.596250,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 9.004286,
    longitude: -79.592500,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 9.010714,
    longitude: -79.588750,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 9.017143,
    longitude: -79.610000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 9.023571,
    longitude: -79.606250,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 8.995000,
    longitude: -79.602500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 9.001429,
    longitude: -79.598750,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 9.007857,
    longitude: -79.595000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 9.014286,
    longitude: -79.616250,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 9.020714,
    longitude: -79.612500,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 9.027143,
    longitude: -79.608750,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 9.033571,
    longitude: -79.605000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 9.005000,
    longitude: -79.601250,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 9.011429,
    longitude: -79.622500,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 9.017857,
    longitude: -79.618750,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 9.024286,
    longitude: -79.615000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 9.030714,
    longitude: -79.611250,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 9.037143,
    longitude: -79.607500,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 9.043571,
    longitude: -79.628750,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 9.015000,
    longitude: -79.625000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 9.021429,
    longitude: -79.621250,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 9.027857,
    longitude: -79.617500,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 9.034286,
    longitude: -79.613750,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 9.040714,
    longitude: -79.635000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 9.047143,
    longitude: -79.631250,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 9.053571,
    longitude: -79.627500,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 9.025000,
    longitude: -79.623750,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 9.031429,
    longitude: -79.620000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 9.037857,
    longitude: -79.641250,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 9.044286,
    longitude: -79.637500,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 9.050714,
    longitude: -79.633750,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 9.057143,
    longitude: -79.630000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 9.063571,
    longitude: -79.626250,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 9.035000,
    longitude: -79.647500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 9.041429,
    longitude: -79.643750,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 9.047857,
    longitude: -79.640000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 9.054286,
    longitude: -79.636250,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 9.060714,
    longitude: -79.632500,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 9.067143,
    longitude: -79.653750,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 9.073571,
    longitude: -79.650000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 9.045000,
    longitude: -79.646250,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 9.051429,
    longitude: -79.642500,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 9.057857,
    longitude: -79.638750,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 9.064286,
    longitude: -79.660000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 9.070714,
    longitude: -79.656250,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 9.077143,
    longitude: -79.652500,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 9.083571,
    longitude: -79.648750,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 9.055000,
    longitude: -79.645000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 9.061429,
    longitude: -79.666250,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 9.067857,
    longitude: -79.662500,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 9.074286,
    longitude: -79.658750,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 9.080714,
    longitude: -79.655000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 9.087143,
    longitude: -79.651250,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 9.093571,
    longitude: -79.672500,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 9.065000,
    longitude: -79.668750,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 9.071429,
    longitude: -79.665000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 9.077857,
    longitude: -79.661250,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 9.084286,
    longitude: -79.657500,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 9.090714,
    longitude: -79.678750,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 9.097143,
    longitude: -79.675000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 9.103571,
    longitude: -79.671250,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 9.075000,
    longitude: -79.667500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 9.081429,
    longitude: -79.663750,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 9.087857,
    longitude: -79.685000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 9.094286,
    longitude: -79.681250,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 9.100714,
    longitude: -79.677500,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 9.107143,
    longitude: -79.673750,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 9.113571,
    longitude: -79.670000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 9.085000,
    longitude: -79.691250,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 9.091429,
    longitude: -79.687500,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 9.097857,
    longitude: -79.683750,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 9.104286,
    longitude: -79.680000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 9.110714,
    longitude: -79.676250,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 9.117143,
    longitude: -79.697500,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 9.123571,
    longitude: -79.693750,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 9.095000,
    longitude: -79.690000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 9.101429,
    longitude: -79.686250,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 9.107857,
    longitude: -79.682500,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 9.114286,
    longitude: -79.703750,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 9.120714,
    longitude: -79.700000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 9.127143,
    longitude: -79.696250,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 9.133571,
    longitude: -79.692500,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 9.105000,
    longitude: -79.688750,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 9.111429,
    longitude: -79.710000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 9.117857,
    longitude: -79.706250,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 9.124286,
    longitude: -79.702500,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 9.130714,
    longitude: -79.698750,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 9.137143,
    longitude: -79.695000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 9.143571,
    longitude: -79.716250,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 9.115000,
    longitude: -79.712500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 9.121429,
    longitude: -79.708750,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 9.127857,
    longitude: -79.705000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 9.134286,
    longitude: -79.701250,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 9.140714,
    longitude: -79.722500,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 9.147143,
    longitude: -79.718750,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 9.153571,
    longitude: -79.715000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 9.125000,
    longitude: -79.711250,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 9.131429,
    longitude: -79.707500,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 9.137857,
    longitude: -79.728750,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 9.144286,
    longitude: -79.725000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 9.150714,
    longitude: -79.721250,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 9.157143,
    longitude: -79.717500,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 9.163571,
    longitude: -79.713750,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 9.135000,
    longitude: -79.735000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 9.141429,
    longitude: -79.731250,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 9.147857,
    longitude: -79.727500,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 9.154286,
    longitude: -79.723750,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 9.160714,
    longitude: -79.720000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 9.167143,
    longitude: -79.741250,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 9.173571,
    longitude: -79.737500,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 9.145000,
    longitude: -79.733750,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 9.151429,
    longitude: -79.730000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 9.157857,
    longitude: -79.726250,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 9.164286,
    longitude: -79.747500,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 9.170714,
    longitude: -79.743750,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 9.177143,
    longitude: -79.740000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 9.183571,
    longitude: -79.736250,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 9.155000,
    longitude: -79.732500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 9.161429,
    longitude: -79.753750,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 9.167857,
    longitude: -79.750000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 9.174286,
    longitude: -79.746250,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 9.180714,
    longitude: -79.742500,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 9.187143,
    longitude: -79.738750,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 9.193571,
    longitude: -79.760000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 9.165000,
    longitude: -79.756250,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 9.171429,
    longitude: -79.752500,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 9.177857,
    longitude: -79.748750,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 9.184286,
    longitude: -79.745000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 9.190714,
    longitude: -79.766250,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 9.197143,
    longitude: -79.762500,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 9.203571,
    longitude: -79.758750,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 9.175000,
    longitude: -79.755000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 9.181429,
    longitude: -79.751250,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 9.187857,
    longitude: -79.772500,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 9.194286,
    longitude: -79.768750,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 9.200714,
    longitude: -79.765000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 9.207143,
    longitude: -79.761250,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 9.213571,
    longitude: -79.757500,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 9.185000,
    longitude: -79.778750,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 9.191429,
    longitude: -79.775000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 9.197857,
    longitude: -79.771250,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 9.204286,
    longitude: -79.767500,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 9.210714,
    longitude: -79.763750,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 9.217143,
    longitude: -79.785000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 9.223571,
    longitude: -79.781250,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 9.195000,
    longitude: -79.777500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 9.201429,
    longitude: -79.773750,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 9.207857,
    longitude: -79.770000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 9.214286,
    longitude: -79.791250,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 9.220714,
    longitude: -79.787500,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 9.227143,
    longitude: -79.783750,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 9.233571,
    longitude: -79.780000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 9.205000,
    longitude: -79.776250,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 9.211429,
    longitude: -79.797500,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 9.217857,
    longitude: -79.793750,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 9.224286,
    longitude: -79.790000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 9.230714,
    longitude: -79.786250,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 9.237143,
    longitude: -79.782500,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 9.243571,
    longitude: -79.803750,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 9.215000,
    longitude: -79.800000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 9.221429,
    longitude: -79.796250,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 9.227857,
    longitude: -79.792500,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 9.234286,
    longitude: -79.788750,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 9.240714,
    longitude: -79.810000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 9.247143,
    longitude: -79.806250,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 9.253571,
    longitude: -79.802500,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 9.225000,
    longitude: -79.798750,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 9.231429,
    longitude: -79.795000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 9.237857,
    longitude: -79.816250,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 9.244286,
    longitude: -79.812500,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 9.250714,
    longitude: -79.808750,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 9.257143,
    longitude: -79.805000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 9.263571,
    longitude: -79.801250,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 9.235000,
    longitude: -79.822500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 9.241429,
    longitude: -79.818750,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 9.247857,
    longitude: -79.815000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 9.254286,
    longitude: -79.811250,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 9.260714,
    longitude: -79.807500,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 9.267143,
    longitude: -79.828750,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 9.273571,
    longitude: -79.825000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 9.245000,
    longitude: -79.821250,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 9.251429,
    longitude: -79.817500,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 9.257857,
    longitude: -79.813750,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 9.264286,
    longitude: -79.835000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 9.270714,
    longitude: -79.831250,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 9.277143,
    longitude: -79.827500,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 9.283571,
    longitude: -79.823750,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 9.255000,
    longitude: -79.820000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 9.261429,
    longitude: -79.841250,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 9.267857,
    longitude: -79.837500,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 9.274286,
    longitude: -79.833750,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 9.280714,
    longitude: -79.830000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 9.287143,
    longitude: -79.826250,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 9.293571,
    longitude: -79.847500,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 9.265000,
    longitude: -79.843750,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 9.271429,
    longitude: -79.840000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 9.277857,
    longitude: -79.836250,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 9.284286,
    longitude: -79.832500,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 9.290714,
    longitude: -79.853750,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 9.297143,
    longitude: -79.850000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 9.303571,
    longitude: -79.846250,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 9.275000,
    longitude: -79.842500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 9.281429,
    longitude: -79.838750,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 9.287857,
    longitude: -79.860000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 9.294286,
    longitude: -79.856250,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 9.300714,
    longitude: -79.852500,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 9.307143,
    longitude: -79.848750,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 9.313571,
    longitude: -79.845000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 9.285000,
    longitude: -79.866250,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 9.291429,
    longitude: -79.862500,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 9.297857,
    longitude: -79.858750,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 9.304286,
    longitude: -79.855000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 9.310714,
    longitude: -79.851250,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 9.317143,
    longitude: -79.872500,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 9.323571,
    longitude: -79.868750,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 9.295000,
    longitude: -79.865000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 9.301429,
    longitude: -79.861250,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 9.307857,
    longitude: -79.857500,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 9.314286,
    longitude: -79.878750,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 9.320714,
    longitude: -79.875000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 9.327143,
    longitude: -79.871250,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 9.333571,
    longitude: -79.867500,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 9.305000,
    longitude: -79.863750,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 9.311429,
    longitude: -79.885000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 9.317857,
    longitude: -79.881250,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 9.324286,
    longitude: -79.877500,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 9.330714,
    longitude: -79.873750,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 9.337143,
    longitude: -79.870000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 9.343571,
    longitude: -79.891250,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 9.315000,
    longitude: -79.887500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 9.321429,
    longitude: -79.883750,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 9.327857,
    longitude: -79.880000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 9.334286,
    longitude: -79.876250,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 9.340714,
    longitude: -79.897500,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 9.347143,
    longitude: -79.893750,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 9.353571,
    longitude: -79.890000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 9.325000,
    longitude: -79.886250,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 9.331429,
    longitude: -79.882500,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 9.337857,
    longitude: -79.903750,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 9.344286,
    longitude: -79.900000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 9.350714,
    longitude: -79.896250,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 9.357143,
    longitude: -79.892500,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 9.363571,
    longitude: -79.888750,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 9.335000,
    longitude: -79.910000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Panama Canal Interoceanic Waterway and Tracking Zone Checkpoint #280',
    isRestrictedZone: false
  },
];

export class PanamaCanalTransitCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = PANAMA_CANAL_TRANSIT_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
