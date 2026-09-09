/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Trans-Canada Highway Intermodal Commercial Axis
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

export const TRANS_CANADIAN_CORRIDOR_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 43.666393,
    longitude: -79.508893,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 43.697786,
    longitude: -79.627786,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 43.729179,
    longitude: -79.746679,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 43.760571,
    longitude: -79.865571,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 43.791964,
    longitude: -80.009464,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 43.823357,
    longitude: -80.128357,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 43.819750,
    longitude: -80.247250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 43.851143,
    longitude: -80.366143,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 43.882536,
    longitude: -80.485036,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 43.913929,
    longitude: -80.628929,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 43.945321,
    longitude: -80.747821,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 43.976714,
    longitude: -80.866714,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 44.008107,
    longitude: -80.985607,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 44.004500,
    longitude: -81.104500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 44.035893,
    longitude: -81.248393,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 44.067286,
    longitude: -81.367286,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 44.098679,
    longitude: -81.486179,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 44.130071,
    longitude: -81.605071,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 44.161464,
    longitude: -81.723964,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 44.192857,
    longitude: -81.867857,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 44.189250,
    longitude: -81.986750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 44.220643,
    longitude: -82.105643,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 44.252036,
    longitude: -82.224536,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 44.283429,
    longitude: -82.343429,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 44.314821,
    longitude: -82.487321,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 44.346214,
    longitude: -82.606214,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 44.377607,
    longitude: -82.725107,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 44.374000,
    longitude: -82.844000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 44.405393,
    longitude: -82.962893,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 44.436786,
    longitude: -83.106786,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 44.468179,
    longitude: -83.225679,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 44.499571,
    longitude: -83.344571,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 44.530964,
    longitude: -83.463464,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 44.562357,
    longitude: -83.582357,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 44.558750,
    longitude: -83.726250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 44.590143,
    longitude: -83.845143,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 44.621536,
    longitude: -83.964036,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 44.652929,
    longitude: -84.082929,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 44.684321,
    longitude: -84.201821,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 44.715714,
    longitude: -84.345714,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 44.747107,
    longitude: -84.464607,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 44.743500,
    longitude: -84.583500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 44.774893,
    longitude: -84.702393,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 44.806286,
    longitude: -84.821286,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 44.837679,
    longitude: -84.965179,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 44.869071,
    longitude: -85.084071,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 44.900464,
    longitude: -85.202964,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 44.931857,
    longitude: -85.321857,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 44.928250,
    longitude: -85.440750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 44.959643,
    longitude: -85.584643,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 44.991036,
    longitude: -85.703536,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 45.022429,
    longitude: -85.822429,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 45.053821,
    longitude: -85.941321,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 45.085214,
    longitude: -86.060214,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 45.116607,
    longitude: -86.204107,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 45.113000,
    longitude: -86.323000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 45.144393,
    longitude: -86.441893,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 45.175786,
    longitude: -86.560786,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 45.207179,
    longitude: -86.679679,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 45.238571,
    longitude: -86.823571,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 45.269964,
    longitude: -86.942464,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 45.301357,
    longitude: -87.061357,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 45.297750,
    longitude: -87.180250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 45.329143,
    longitude: -87.299143,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 45.360536,
    longitude: -87.443036,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 45.391929,
    longitude: -87.561929,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 45.423321,
    longitude: -87.680821,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 45.454714,
    longitude: -87.799714,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 45.486107,
    longitude: -87.918607,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 45.482500,
    longitude: -88.062500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 45.513893,
    longitude: -88.181393,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 45.545286,
    longitude: -88.300286,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 45.576679,
    longitude: -88.419179,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 45.608071,
    longitude: -88.538071,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 45.639464,
    longitude: -88.681964,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 45.670857,
    longitude: -88.800857,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 45.667250,
    longitude: -88.919750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 45.698643,
    longitude: -89.038643,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 45.730036,
    longitude: -89.157536,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 45.761429,
    longitude: -89.301429,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 45.792821,
    longitude: -89.420321,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 45.824214,
    longitude: -89.539214,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 45.855607,
    longitude: -89.658107,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 45.852000,
    longitude: -89.777000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 45.883393,
    longitude: -89.920893,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 45.914786,
    longitude: -90.039786,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 45.946179,
    longitude: -90.158679,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 45.977571,
    longitude: -90.277571,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 46.008964,
    longitude: -90.396464,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 46.040357,
    longitude: -90.540357,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 46.036750,
    longitude: -90.659250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 46.068143,
    longitude: -90.778143,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 46.099536,
    longitude: -90.897036,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 46.130929,
    longitude: -91.015929,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 46.162321,
    longitude: -91.159821,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 46.193714,
    longitude: -91.278714,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 46.225107,
    longitude: -91.397607,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 46.221500,
    longitude: -91.516500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 46.252893,
    longitude: -91.635393,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 46.284286,
    longitude: -91.779286,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 46.315679,
    longitude: -91.898179,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 46.347071,
    longitude: -92.017071,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 46.378464,
    longitude: -92.135964,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 46.409857,
    longitude: -92.254857,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 46.406250,
    longitude: -92.398750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 46.437643,
    longitude: -92.517643,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 46.469036,
    longitude: -92.636536,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 46.500429,
    longitude: -92.755429,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 46.531821,
    longitude: -92.874321,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 46.563214,
    longitude: -93.018214,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 46.594607,
    longitude: -93.137107,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 46.591000,
    longitude: -93.256000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 46.622393,
    longitude: -93.374893,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 46.653786,
    longitude: -93.493786,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 46.685179,
    longitude: -93.637679,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 46.716571,
    longitude: -93.756571,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 46.747964,
    longitude: -93.875464,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 46.779357,
    longitude: -93.994357,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 46.775750,
    longitude: -94.113250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 46.807143,
    longitude: -94.257143,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 46.838536,
    longitude: -94.376036,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 46.869929,
    longitude: -94.494929,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 46.901321,
    longitude: -94.613821,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 46.932714,
    longitude: -94.732714,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 46.964107,
    longitude: -94.876607,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 46.960500,
    longitude: -94.995500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 46.991893,
    longitude: -95.114393,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 47.023286,
    longitude: -95.233286,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 47.054679,
    longitude: -95.352179,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 47.086071,
    longitude: -95.496071,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 47.117464,
    longitude: -95.614964,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 47.148857,
    longitude: -95.733857,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 47.145250,
    longitude: -95.852750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 47.176643,
    longitude: -95.971643,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 47.208036,
    longitude: -96.115536,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 47.239429,
    longitude: -96.234429,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 47.270821,
    longitude: -96.353321,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 47.302214,
    longitude: -96.472214,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 47.333607,
    longitude: -96.591107,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 47.330000,
    longitude: -96.735000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 47.361393,
    longitude: -96.853893,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 47.392786,
    longitude: -96.972786,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 47.424179,
    longitude: -97.091679,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 47.455571,
    longitude: -97.210571,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 47.486964,
    longitude: -97.354464,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 47.518357,
    longitude: -97.473357,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 47.514750,
    longitude: -97.592250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 47.546143,
    longitude: -97.711143,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 47.577536,
    longitude: -97.830036,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 47.608929,
    longitude: -97.973929,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 47.640321,
    longitude: -98.092821,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 47.671714,
    longitude: -98.211714,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 47.703107,
    longitude: -98.330607,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 47.699500,
    longitude: -98.449500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 47.730893,
    longitude: -98.593393,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 47.762286,
    longitude: -98.712286,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 47.793679,
    longitude: -98.831179,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 47.825071,
    longitude: -98.950071,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 47.856464,
    longitude: -99.068964,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 47.887857,
    longitude: -99.212857,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 47.884250,
    longitude: -99.331750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 47.915643,
    longitude: -99.450643,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 47.947036,
    longitude: -99.569536,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 47.978429,
    longitude: -99.688429,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 48.009821,
    longitude: -99.832321,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 48.041214,
    longitude: -99.951214,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 48.072607,
    longitude: -100.070107,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 48.069000,
    longitude: -100.189000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 48.100393,
    longitude: -100.307893,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 48.131786,
    longitude: -100.451786,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 48.163179,
    longitude: -100.570679,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 48.194571,
    longitude: -100.689571,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 48.225964,
    longitude: -100.808464,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 48.257357,
    longitude: -100.927357,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 48.253750,
    longitude: -101.071250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 48.285143,
    longitude: -101.190143,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 48.316536,
    longitude: -101.309036,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 48.347929,
    longitude: -101.427929,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 48.379321,
    longitude: -101.546821,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 48.410714,
    longitude: -101.690714,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 48.442107,
    longitude: -101.809607,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 48.438500,
    longitude: -101.928500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 48.469893,
    longitude: -102.047393,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 48.501286,
    longitude: -102.166286,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 48.532679,
    longitude: -102.310179,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 48.564071,
    longitude: -102.429071,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 48.595464,
    longitude: -102.547964,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 48.626857,
    longitude: -102.666857,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 48.623250,
    longitude: -102.785750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 48.654643,
    longitude: -102.929643,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 48.686036,
    longitude: -103.048536,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 48.717429,
    longitude: -103.167429,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 48.748821,
    longitude: -103.286321,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 48.780214,
    longitude: -103.405214,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 48.811607,
    longitude: -103.549107,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 48.808000,
    longitude: -103.668000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 48.839393,
    longitude: -103.786893,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 48.870786,
    longitude: -103.905786,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 48.902179,
    longitude: -104.024679,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 48.933571,
    longitude: -104.168571,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 48.964964,
    longitude: -104.287464,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 48.996357,
    longitude: -104.406357,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 48.992750,
    longitude: -104.525250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 49.024143,
    longitude: -104.644143,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 49.055536,
    longitude: -104.788036,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 49.086929,
    longitude: -104.906929,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 49.118321,
    longitude: -105.025821,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 49.149714,
    longitude: -105.144714,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 49.181107,
    longitude: -105.263607,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 49.177500,
    longitude: -105.407500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 49.208893,
    longitude: -105.526393,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 49.240286,
    longitude: -105.645286,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 49.271679,
    longitude: -105.764179,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 49.303071,
    longitude: -105.883071,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 49.334464,
    longitude: -106.026964,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 49.365857,
    longitude: -106.145857,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 49.362250,
    longitude: -106.264750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 49.393643,
    longitude: -106.383643,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 49.425036,
    longitude: -106.502536,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 49.456429,
    longitude: -106.646429,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 49.487821,
    longitude: -106.765321,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 49.519214,
    longitude: -106.884214,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 49.550607,
    longitude: -107.003107,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 49.547000,
    longitude: -107.122000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 49.578393,
    longitude: -107.265893,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 49.609786,
    longitude: -107.384786,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 49.641179,
    longitude: -107.503679,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 49.672571,
    longitude: -107.622571,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 49.703964,
    longitude: -107.741464,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 49.735357,
    longitude: -107.885357,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 49.731750,
    longitude: -108.004250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 49.763143,
    longitude: -108.123143,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 49.794536,
    longitude: -108.242036,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 49.825929,
    longitude: -108.360929,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 49.857321,
    longitude: -108.504821,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 49.888714,
    longitude: -108.623714,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 49.920107,
    longitude: -108.742607,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 49.916500,
    longitude: -108.861500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 49.947893,
    longitude: -108.980393,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 49.979286,
    longitude: -109.124286,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 50.010679,
    longitude: -109.243179,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 50.042071,
    longitude: -109.362071,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 50.073464,
    longitude: -109.480964,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 50.104857,
    longitude: -109.599857,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 50.101250,
    longitude: -109.743750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 50.132643,
    longitude: -109.862643,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 50.164036,
    longitude: -109.981536,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 50.195429,
    longitude: -110.100429,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 50.226821,
    longitude: -110.219321,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 50.258214,
    longitude: -110.363214,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 50.289607,
    longitude: -110.482107,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 50.286000,
    longitude: -110.601000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 50.317393,
    longitude: -110.719893,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 50.348786,
    longitude: -110.838786,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 50.380179,
    longitude: -110.982679,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 50.411571,
    longitude: -111.101571,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 50.442964,
    longitude: -111.220464,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 50.474357,
    longitude: -111.339357,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 50.470750,
    longitude: -111.458250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 50.502143,
    longitude: -111.602143,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 50.533536,
    longitude: -111.721036,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 50.564929,
    longitude: -111.839929,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 50.596321,
    longitude: -111.958821,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 50.627714,
    longitude: -112.077714,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 50.659107,
    longitude: -112.221607,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 50.655500,
    longitude: -112.340500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 50.686893,
    longitude: -112.459393,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 50.718286,
    longitude: -112.578286,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 50.749679,
    longitude: -112.697179,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 50.781071,
    longitude: -112.841071,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 50.812464,
    longitude: -112.959964,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 50.843857,
    longitude: -113.078857,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 50.840250,
    longitude: -113.197750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 50.871643,
    longitude: -113.316643,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 50.903036,
    longitude: -113.460536,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 50.934429,
    longitude: -113.579429,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 50.965821,
    longitude: -113.698321,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 50.997214,
    longitude: -113.817214,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 51.028607,
    longitude: -113.936107,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 51.025000,
    longitude: -114.080000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Trans-Canada Highway Intermodal Commercial Axis Checkpoint #280',
    isRestrictedZone: false
  },
];

export class TransCanadianCorridorCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TRANS_CANADIAN_CORRIDOR_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
