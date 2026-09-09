/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * US Interstate-80 East-West Logistics Trunk Route
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

export const US_I80_INTERSTATE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 40.689500,
    longitude: -74.177893,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 40.684000,
    longitude: -74.345786,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 40.678500,
    longitude: -74.513679,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 40.673000,
    longitude: -74.681571,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 40.667500,
    longitude: -74.874464,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 40.662000,
    longitude: -75.042357,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 40.621500,
    longitude: -75.210250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 40.616000,
    longitude: -75.378143,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 40.610500,
    longitude: -75.546036,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 40.605000,
    longitude: -75.738929,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 40.599500,
    longitude: -75.906821,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 40.594000,
    longitude: -76.074714,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 40.588500,
    longitude: -76.242607,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 40.548000,
    longitude: -76.410500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 40.542500,
    longitude: -76.603393,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 40.537000,
    longitude: -76.771286,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 40.531500,
    longitude: -76.939179,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 40.526000,
    longitude: -77.107071,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 40.520500,
    longitude: -77.274964,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 40.515000,
    longitude: -77.467857,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 40.474500,
    longitude: -77.635750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 40.469000,
    longitude: -77.803643,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 40.463500,
    longitude: -77.971536,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 40.458000,
    longitude: -78.139429,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 40.452500,
    longitude: -78.332321,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 40.447000,
    longitude: -78.500214,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 40.441500,
    longitude: -78.668107,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 40.401000,
    longitude: -78.836000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 40.395500,
    longitude: -79.003893,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 40.390000,
    longitude: -79.196786,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 40.384500,
    longitude: -79.364679,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 40.379000,
    longitude: -79.532571,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 40.373500,
    longitude: -79.700464,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 40.368000,
    longitude: -79.868357,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 40.327500,
    longitude: -80.061250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 40.322000,
    longitude: -80.229143,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 40.316500,
    longitude: -80.397036,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 40.311000,
    longitude: -80.564929,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 40.305500,
    longitude: -80.732821,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 40.300000,
    longitude: -80.925714,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 40.294500,
    longitude: -81.093607,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 40.254000,
    longitude: -81.261500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 40.248500,
    longitude: -81.429393,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 40.243000,
    longitude: -81.597286,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 40.237500,
    longitude: -81.790179,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 40.232000,
    longitude: -81.958071,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 40.226500,
    longitude: -82.125964,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 40.221000,
    longitude: -82.293857,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 40.180500,
    longitude: -82.461750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 40.175000,
    longitude: -82.654643,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 40.169500,
    longitude: -82.822536,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 40.164000,
    longitude: -82.990429,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 40.158500,
    longitude: -83.158321,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 40.153000,
    longitude: -83.326214,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 40.147500,
    longitude: -83.519107,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 40.107000,
    longitude: -83.687000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 40.101500,
    longitude: -83.854893,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 40.096000,
    longitude: -84.022786,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 40.090500,
    longitude: -84.190679,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 40.085000,
    longitude: -84.383571,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 40.079500,
    longitude: -84.551464,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 40.074000,
    longitude: -84.719357,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 40.033500,
    longitude: -84.887250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 40.028000,
    longitude: -85.055143,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 40.022500,
    longitude: -85.248036,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 40.017000,
    longitude: -85.415929,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 40.011500,
    longitude: -85.583821,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 40.006000,
    longitude: -85.751714,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 40.000500,
    longitude: -85.919607,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 39.960000,
    longitude: -86.112500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 39.954500,
    longitude: -86.280393,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 39.949000,
    longitude: -86.448286,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 39.943500,
    longitude: -86.616179,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 39.938000,
    longitude: -86.784071,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 39.932500,
    longitude: -86.976964,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 39.927000,
    longitude: -87.144857,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 39.886500,
    longitude: -87.312750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 39.881000,
    longitude: -87.480643,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 39.875500,
    longitude: -87.648536,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 39.870000,
    longitude: -87.841429,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 39.864500,
    longitude: -88.009321,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 39.859000,
    longitude: -88.177214,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 39.853500,
    longitude: -88.345107,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 39.813000,
    longitude: -88.513000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 39.807500,
    longitude: -88.705893,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 39.802000,
    longitude: -88.873786,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 39.796500,
    longitude: -89.041679,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 39.791000,
    longitude: -89.209571,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 39.785500,
    longitude: -89.377464,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 39.780000,
    longitude: -89.570357,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 39.739500,
    longitude: -89.738250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 39.734000,
    longitude: -89.906143,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 39.728500,
    longitude: -90.074036,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 39.723000,
    longitude: -90.241929,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 39.717500,
    longitude: -90.434821,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 39.712000,
    longitude: -90.602714,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 39.706500,
    longitude: -90.770607,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 39.666000,
    longitude: -90.938500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 39.660500,
    longitude: -91.106393,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 39.655000,
    longitude: -91.299286,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 39.649500,
    longitude: -91.467179,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 39.644000,
    longitude: -91.635071,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 39.638500,
    longitude: -91.802964,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 39.633000,
    longitude: -91.970857,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 39.592500,
    longitude: -92.163750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 39.587000,
    longitude: -92.331643,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 39.581500,
    longitude: -92.499536,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 39.576000,
    longitude: -92.667429,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 39.570500,
    longitude: -92.835321,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 39.565000,
    longitude: -93.028214,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 39.559500,
    longitude: -93.196107,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 39.519000,
    longitude: -93.364000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 39.513500,
    longitude: -93.531893,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 39.508000,
    longitude: -93.699786,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 39.502500,
    longitude: -93.892679,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 39.497000,
    longitude: -94.060571,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 39.491500,
    longitude: -94.228464,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 39.486000,
    longitude: -94.396357,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 39.445500,
    longitude: -94.564250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 39.440000,
    longitude: -94.757143,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 39.434500,
    longitude: -94.925036,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 39.429000,
    longitude: -95.092929,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 39.423500,
    longitude: -95.260821,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 39.418000,
    longitude: -95.428714,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 39.412500,
    longitude: -95.621607,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 39.372000,
    longitude: -95.789500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 39.366500,
    longitude: -95.957393,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 39.361000,
    longitude: -96.125286,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 39.355500,
    longitude: -96.293179,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 39.350000,
    longitude: -96.486071,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 39.344500,
    longitude: -96.653964,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 39.339000,
    longitude: -96.821857,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 39.298500,
    longitude: -96.989750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 39.293000,
    longitude: -97.157643,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 39.287500,
    longitude: -97.350536,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 39.282000,
    longitude: -97.518429,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 39.276500,
    longitude: -97.686321,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 39.271000,
    longitude: -97.854214,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 39.265500,
    longitude: -98.022107,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 39.225000,
    longitude: -98.215000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 39.219500,
    longitude: -98.382893,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 39.214000,
    longitude: -98.550786,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 39.208500,
    longitude: -98.718679,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 39.203000,
    longitude: -98.886571,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 39.197500,
    longitude: -99.079464,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 39.192000,
    longitude: -99.247357,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 39.151500,
    longitude: -99.415250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 39.146000,
    longitude: -99.583143,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 39.140500,
    longitude: -99.751036,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 39.135000,
    longitude: -99.943929,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 39.129500,
    longitude: -100.111821,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 39.124000,
    longitude: -100.279714,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 39.118500,
    longitude: -100.447607,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 39.078000,
    longitude: -100.615500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 39.072500,
    longitude: -100.808393,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 39.067000,
    longitude: -100.976286,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 39.061500,
    longitude: -101.144179,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 39.056000,
    longitude: -101.312071,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 39.050500,
    longitude: -101.479964,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 39.045000,
    longitude: -101.672857,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 39.004500,
    longitude: -101.840750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 38.999000,
    longitude: -102.008643,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 38.993500,
    longitude: -102.176536,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 38.988000,
    longitude: -102.344429,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 38.982500,
    longitude: -102.537321,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 38.977000,
    longitude: -102.705214,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 38.971500,
    longitude: -102.873107,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 38.931000,
    longitude: -103.041000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 38.925500,
    longitude: -103.208893,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 38.920000,
    longitude: -103.401786,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 38.914500,
    longitude: -103.569679,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 38.909000,
    longitude: -103.737571,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 38.903500,
    longitude: -103.905464,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 38.898000,
    longitude: -104.073357,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 38.857500,
    longitude: -104.266250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 38.852000,
    longitude: -104.434143,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 38.846500,
    longitude: -104.602036,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 38.841000,
    longitude: -104.769929,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 38.835500,
    longitude: -104.937821,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 38.830000,
    longitude: -105.130714,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 38.824500,
    longitude: -105.298607,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 38.784000,
    longitude: -105.466500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 38.778500,
    longitude: -105.634393,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 38.773000,
    longitude: -105.802286,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 38.767500,
    longitude: -105.995179,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 38.762000,
    longitude: -106.163071,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 38.756500,
    longitude: -106.330964,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 38.751000,
    longitude: -106.498857,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 38.710500,
    longitude: -106.666750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 38.705000,
    longitude: -106.859643,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 38.699500,
    longitude: -107.027536,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 38.694000,
    longitude: -107.195429,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 38.688500,
    longitude: -107.363321,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 38.683000,
    longitude: -107.531214,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 38.677500,
    longitude: -107.724107,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 38.637000,
    longitude: -107.892000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 38.631500,
    longitude: -108.059893,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 38.626000,
    longitude: -108.227786,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 38.620500,
    longitude: -108.395679,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 38.615000,
    longitude: -108.588571,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 38.609500,
    longitude: -108.756464,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 38.604000,
    longitude: -108.924357,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 38.563500,
    longitude: -109.092250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 38.558000,
    longitude: -109.260143,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 38.552500,
    longitude: -109.453036,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 38.547000,
    longitude: -109.620929,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 38.541500,
    longitude: -109.788821,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 38.536000,
    longitude: -109.956714,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 38.530500,
    longitude: -110.124607,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 38.490000,
    longitude: -110.317500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 38.484500,
    longitude: -110.485393,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 38.479000,
    longitude: -110.653286,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 38.473500,
    longitude: -110.821179,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 38.468000,
    longitude: -110.989071,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 38.462500,
    longitude: -111.181964,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 38.457000,
    longitude: -111.349857,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 38.416500,
    longitude: -111.517750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 38.411000,
    longitude: -111.685643,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 38.405500,
    longitude: -111.853536,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 38.400000,
    longitude: -112.046429,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 38.394500,
    longitude: -112.214321,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 38.389000,
    longitude: -112.382214,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 38.383500,
    longitude: -112.550107,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 38.343000,
    longitude: -112.718000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 38.337500,
    longitude: -112.910893,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 38.332000,
    longitude: -113.078786,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 38.326500,
    longitude: -113.246679,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 38.321000,
    longitude: -113.414571,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 38.315500,
    longitude: -113.582464,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 38.310000,
    longitude: -113.775357,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 38.269500,
    longitude: -113.943250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 38.264000,
    longitude: -114.111143,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 38.258500,
    longitude: -114.279036,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 38.253000,
    longitude: -114.446929,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 38.247500,
    longitude: -114.639821,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 38.242000,
    longitude: -114.807714,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 38.236500,
    longitude: -114.975607,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 38.196000,
    longitude: -115.143500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 38.190500,
    longitude: -115.311393,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 38.185000,
    longitude: -115.504286,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 38.179500,
    longitude: -115.672179,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 38.174000,
    longitude: -115.840071,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 38.168500,
    longitude: -116.007964,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 38.163000,
    longitude: -116.175857,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 38.122500,
    longitude: -116.368750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 38.117000,
    longitude: -116.536643,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 38.111500,
    longitude: -116.704536,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 38.106000,
    longitude: -116.872429,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 38.100500,
    longitude: -117.040321,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 38.095000,
    longitude: -117.233214,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 38.089500,
    longitude: -117.401107,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 38.049000,
    longitude: -117.569000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 38.043500,
    longitude: -117.736893,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 38.038000,
    longitude: -117.904786,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 38.032500,
    longitude: -118.097679,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 38.027000,
    longitude: -118.265571,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 38.021500,
    longitude: -118.433464,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 38.016000,
    longitude: -118.601357,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 37.975500,
    longitude: -118.769250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 37.970000,
    longitude: -118.962143,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 37.964500,
    longitude: -119.130036,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 37.959000,
    longitude: -119.297929,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 37.953500,
    longitude: -119.465821,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 37.948000,
    longitude: -119.633714,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 37.942500,
    longitude: -119.826607,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 37.902000,
    longitude: -119.994500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 37.896500,
    longitude: -120.162393,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 37.891000,
    longitude: -120.330286,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 37.885500,
    longitude: -120.498179,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 37.880000,
    longitude: -120.691071,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 37.874500,
    longitude: -120.858964,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 37.869000,
    longitude: -121.026857,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 37.828500,
    longitude: -121.194750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 37.823000,
    longitude: -121.362643,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 37.817500,
    longitude: -121.555536,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 37.812000,
    longitude: -121.723429,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 37.806500,
    longitude: -121.891321,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 37.801000,
    longitude: -122.059214,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 37.795500,
    longitude: -122.227107,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 37.755000,
    longitude: -122.420000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'US Interstate-80 East-West Logistics Trunk Route Checkpoint #280',
    isRestrictedZone: false
  },
];

export class UsI80InterstateCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = US_I80_INTERSTATE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
