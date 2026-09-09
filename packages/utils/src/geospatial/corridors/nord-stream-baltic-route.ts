/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Baltic Sea Critical Infrastructure Monitoring Trench
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

export const NORD_STREAM_BALTIC_ROUTE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 54.111643,
    longitude: 12.140821,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 54.138286,
    longitude: 12.191643,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 54.164929,
    longitude: 12.242464,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 54.191571,
    longitude: 12.293286,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 54.218214,
    longitude: 12.319107,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 54.244857,
    longitude: 12.369929,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 54.236500,
    longitude: 12.420750,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 54.263143,
    longitude: 12.471571,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 54.289786,
    longitude: 12.522393,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 54.316429,
    longitude: 12.548214,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 54.343071,
    longitude: 12.599036,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 54.369714,
    longitude: 12.649857,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 54.396357,
    longitude: 12.700679,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 54.388000,
    longitude: 12.751500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 54.414643,
    longitude: 12.777321,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 54.441286,
    longitude: 12.828143,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 54.467929,
    longitude: 12.878964,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 54.494571,
    longitude: 12.929786,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 54.521214,
    longitude: 12.980607,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 54.547857,
    longitude: 13.006429,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 54.539500,
    longitude: 13.057250,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 54.566143,
    longitude: 13.108071,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 54.592786,
    longitude: 13.158893,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 54.619429,
    longitude: 13.209714,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 54.646071,
    longitude: 13.235536,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 54.672714,
    longitude: 13.286357,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 54.699357,
    longitude: 13.337179,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 54.691000,
    longitude: 13.388000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 54.717643,
    longitude: 13.438821,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 54.744286,
    longitude: 13.464643,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 54.770929,
    longitude: 13.515464,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 54.797571,
    longitude: 13.566286,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 54.824214,
    longitude: 13.617107,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 54.850857,
    longitude: 13.667929,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 54.842500,
    longitude: 13.693750,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 54.869143,
    longitude: 13.744571,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 54.895786,
    longitude: 13.795393,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 54.922429,
    longitude: 13.846214,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 54.949071,
    longitude: 13.897036,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 54.975714,
    longitude: 13.922857,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 55.002357,
    longitude: 13.973679,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 54.994000,
    longitude: 14.024500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 55.020643,
    longitude: 14.075321,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 55.047286,
    longitude: 14.126143,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 55.073929,
    longitude: 14.151964,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 55.100571,
    longitude: 14.202786,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 55.127214,
    longitude: 14.253607,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 55.153857,
    longitude: 14.304429,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 55.145500,
    longitude: 14.355250,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 55.172143,
    longitude: 14.381071,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 55.198786,
    longitude: 14.431893,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 55.225429,
    longitude: 14.482714,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 55.252071,
    longitude: 14.533536,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 55.278714,
    longitude: 14.584357,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 55.305357,
    longitude: 14.610179,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 55.297000,
    longitude: 14.661000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 55.323643,
    longitude: 14.711821,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 55.350286,
    longitude: 14.762643,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 55.376929,
    longitude: 14.813464,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 55.403571,
    longitude: 14.839286,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 55.430214,
    longitude: 14.890107,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 55.456857,
    longitude: 14.940929,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 55.448500,
    longitude: 14.991750,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 55.475143,
    longitude: 15.042571,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 55.501786,
    longitude: 15.068393,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 55.528429,
    longitude: 15.119214,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 55.555071,
    longitude: 15.170036,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 55.581714,
    longitude: 15.220857,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 55.608357,
    longitude: 15.271679,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 55.600000,
    longitude: 15.297500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 55.626643,
    longitude: 15.348321,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 55.653286,
    longitude: 15.399143,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 55.679929,
    longitude: 15.449964,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 55.706571,
    longitude: 15.500786,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 55.733214,
    longitude: 15.526607,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 55.759857,
    longitude: 15.577429,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 55.751500,
    longitude: 15.628250,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 55.778143,
    longitude: 15.679071,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 55.804786,
    longitude: 15.729893,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 55.831429,
    longitude: 15.755714,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 55.858071,
    longitude: 15.806536,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 55.884714,
    longitude: 15.857357,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 55.911357,
    longitude: 15.908179,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 55.903000,
    longitude: 15.959000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 55.929643,
    longitude: 15.984821,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 55.956286,
    longitude: 16.035643,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 55.982929,
    longitude: 16.086464,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 56.009571,
    longitude: 16.137286,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 56.036214,
    longitude: 16.188107,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 56.062857,
    longitude: 16.213929,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 56.054500,
    longitude: 16.264750,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 56.081143,
    longitude: 16.315571,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 56.107786,
    longitude: 16.366393,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 56.134429,
    longitude: 16.417214,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 56.161071,
    longitude: 16.443036,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 56.187714,
    longitude: 16.493857,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 56.214357,
    longitude: 16.544679,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 56.206000,
    longitude: 16.595500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 56.232643,
    longitude: 16.646321,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 56.259286,
    longitude: 16.672143,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 56.285929,
    longitude: 16.722964,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 56.312571,
    longitude: 16.773786,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 56.339214,
    longitude: 16.824607,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 56.365857,
    longitude: 16.875429,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 56.357500,
    longitude: 16.901250,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 56.384143,
    longitude: 16.952071,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 56.410786,
    longitude: 17.002893,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 56.437429,
    longitude: 17.053714,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 56.464071,
    longitude: 17.104536,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 56.490714,
    longitude: 17.130357,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 56.517357,
    longitude: 17.181179,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 56.509000,
    longitude: 17.232000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 56.535643,
    longitude: 17.282821,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 56.562286,
    longitude: 17.333643,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 56.588929,
    longitude: 17.359464,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 56.615571,
    longitude: 17.410286,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 56.642214,
    longitude: 17.461107,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 56.668857,
    longitude: 17.511929,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 56.660500,
    longitude: 17.562750,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 56.687143,
    longitude: 17.588571,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 56.713786,
    longitude: 17.639393,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 56.740429,
    longitude: 17.690214,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 56.767071,
    longitude: 17.741036,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 56.793714,
    longitude: 17.791857,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 56.820357,
    longitude: 17.817679,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 56.812000,
    longitude: 17.868500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 56.838643,
    longitude: 17.919321,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 56.865286,
    longitude: 17.970143,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 56.891929,
    longitude: 18.020964,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 56.918571,
    longitude: 18.046786,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 56.945214,
    longitude: 18.097607,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 56.971857,
    longitude: 18.148429,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 56.963500,
    longitude: 18.199250,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 56.990143,
    longitude: 18.250071,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 57.016786,
    longitude: 18.275893,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 57.043429,
    longitude: 18.326714,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 57.070071,
    longitude: 18.377536,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 57.096714,
    longitude: 18.428357,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 57.123357,
    longitude: 18.479179,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 57.115000,
    longitude: 18.505000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 57.141643,
    longitude: 18.555821,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 57.168286,
    longitude: 18.606643,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 57.194929,
    longitude: 18.657464,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 57.221571,
    longitude: 18.708286,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 57.248214,
    longitude: 18.734107,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 57.274857,
    longitude: 18.784929,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 57.266500,
    longitude: 18.835750,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 57.293143,
    longitude: 18.886571,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 57.319786,
    longitude: 18.937393,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 57.346429,
    longitude: 18.963214,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 57.373071,
    longitude: 19.014036,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 57.399714,
    longitude: 19.064857,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 57.426357,
    longitude: 19.115679,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 57.418000,
    longitude: 19.166500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 57.444643,
    longitude: 19.192321,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 57.471286,
    longitude: 19.243143,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 57.497929,
    longitude: 19.293964,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 57.524571,
    longitude: 19.344786,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 57.551214,
    longitude: 19.395607,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 57.577857,
    longitude: 19.421429,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 57.569500,
    longitude: 19.472250,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 57.596143,
    longitude: 19.523071,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 57.622786,
    longitude: 19.573893,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 57.649429,
    longitude: 19.624714,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 57.676071,
    longitude: 19.650536,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 57.702714,
    longitude: 19.701357,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 57.729357,
    longitude: 19.752179,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 57.721000,
    longitude: 19.803000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 57.747643,
    longitude: 19.853821,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 57.774286,
    longitude: 19.879643,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 57.800929,
    longitude: 19.930464,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 57.827571,
    longitude: 19.981286,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 57.854214,
    longitude: 20.032107,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 57.880857,
    longitude: 20.082929,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 57.872500,
    longitude: 20.108750,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 57.899143,
    longitude: 20.159571,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 57.925786,
    longitude: 20.210393,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 57.952429,
    longitude: 20.261214,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 57.979071,
    longitude: 20.312036,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 58.005714,
    longitude: 20.337857,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 58.032357,
    longitude: 20.388679,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 58.024000,
    longitude: 20.439500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 58.050643,
    longitude: 20.490321,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 58.077286,
    longitude: 20.541143,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 58.103929,
    longitude: 20.566964,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 58.130571,
    longitude: 20.617786,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 58.157214,
    longitude: 20.668607,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 58.183857,
    longitude: 20.719429,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 58.175500,
    longitude: 20.770250,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 58.202143,
    longitude: 20.796071,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 58.228786,
    longitude: 20.846893,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 58.255429,
    longitude: 20.897714,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 58.282071,
    longitude: 20.948536,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 58.308714,
    longitude: 20.999357,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 58.335357,
    longitude: 21.025179,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 58.327000,
    longitude: 21.076000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 58.353643,
    longitude: 21.126821,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 58.380286,
    longitude: 21.177643,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 58.406929,
    longitude: 21.228464,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 58.433571,
    longitude: 21.254286,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 58.460214,
    longitude: 21.305107,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 58.486857,
    longitude: 21.355929,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 58.478500,
    longitude: 21.406750,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 58.505143,
    longitude: 21.457571,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 58.531786,
    longitude: 21.483393,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 58.558429,
    longitude: 21.534214,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 58.585071,
    longitude: 21.585036,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 58.611714,
    longitude: 21.635857,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 58.638357,
    longitude: 21.686679,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 58.630000,
    longitude: 21.712500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 58.656643,
    longitude: 21.763321,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 58.683286,
    longitude: 21.814143,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 58.709929,
    longitude: 21.864964,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 58.736571,
    longitude: 21.915786,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 58.763214,
    longitude: 21.941607,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 58.789857,
    longitude: 21.992429,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 58.781500,
    longitude: 22.043250,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 58.808143,
    longitude: 22.094071,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 58.834786,
    longitude: 22.144893,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 58.861429,
    longitude: 22.170714,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 58.888071,
    longitude: 22.221536,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 58.914714,
    longitude: 22.272357,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 58.941357,
    longitude: 22.323179,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 58.933000,
    longitude: 22.374000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 58.959643,
    longitude: 22.399821,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 58.986286,
    longitude: 22.450643,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 59.012929,
    longitude: 22.501464,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 59.039571,
    longitude: 22.552286,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 59.066214,
    longitude: 22.603107,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 59.092857,
    longitude: 22.628929,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 59.084500,
    longitude: 22.679750,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 59.111143,
    longitude: 22.730571,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 59.137786,
    longitude: 22.781393,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 59.164429,
    longitude: 22.832214,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 59.191071,
    longitude: 22.858036,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 59.217714,
    longitude: 22.908857,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 59.244357,
    longitude: 22.959679,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 59.236000,
    longitude: 23.010500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 59.262643,
    longitude: 23.061321,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 59.289286,
    longitude: 23.087143,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 59.315929,
    longitude: 23.137964,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 59.342571,
    longitude: 23.188786,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 59.369214,
    longitude: 23.239607,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 59.395857,
    longitude: 23.290429,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 59.387500,
    longitude: 23.316250,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 59.414143,
    longitude: 23.367071,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 59.440786,
    longitude: 23.417893,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 59.467429,
    longitude: 23.468714,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 59.494071,
    longitude: 23.519536,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 59.520714,
    longitude: 23.545357,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 59.547357,
    longitude: 23.596179,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 59.539000,
    longitude: 23.647000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 59.565643,
    longitude: 23.697821,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 59.592286,
    longitude: 23.748643,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 59.618929,
    longitude: 23.774464,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 59.645571,
    longitude: 23.825286,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 59.672214,
    longitude: 23.876107,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 59.698857,
    longitude: 23.926929,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 59.690500,
    longitude: 23.977750,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 59.717143,
    longitude: 24.003571,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 59.743786,
    longitude: 24.054393,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 59.770429,
    longitude: 24.105214,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 59.797071,
    longitude: 24.156036,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 59.823714,
    longitude: 24.206857,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 59.850357,
    longitude: 24.232679,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 59.842000,
    longitude: 24.283500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 59.868643,
    longitude: 24.334321,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 59.895286,
    longitude: 24.385143,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 59.921929,
    longitude: 24.435964,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 59.948571,
    longitude: 24.461786,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 59.975214,
    longitude: 24.512607,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 60.001857,
    longitude: 24.563429,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 59.993500,
    longitude: 24.614250,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 60.020143,
    longitude: 24.665071,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 60.046786,
    longitude: 24.690893,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 60.073429,
    longitude: 24.741714,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 60.100071,
    longitude: 24.792536,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 60.126714,
    longitude: 24.843357,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 60.153357,
    longitude: 24.894179,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 60.145000,
    longitude: 24.920000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Baltic Sea Critical Infrastructure Monitoring Trench Checkpoint #280',
    isRestrictedZone: false
  },
];

export class NordStreamBalticRouteCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = NORD_STREAM_BALTIC_ROUTE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
