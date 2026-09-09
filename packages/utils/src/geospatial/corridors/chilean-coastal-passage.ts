/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Chilean Pacific Coastal Navigation and Tracking Spine
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

export const CHILEAN_COASTAL_PASSAGE_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: -33.121857,
    longitude: -71.612500,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: -33.188714,
    longitude: -71.605000,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: -33.255571,
    longitude: -71.597500,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: -33.322429,
    longitude: -71.590000,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: -33.389286,
    longitude: -71.607500,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: -33.456143,
    longitude: -71.600000,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: -33.558000,
    longitude: -71.592500,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: -33.624857,
    longitude: -71.585000,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: -33.691714,
    longitude: -71.577500,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: -33.758571,
    longitude: -71.595000,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: -33.825429,
    longitude: -71.587500,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: -33.892286,
    longitude: -71.580000,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: -33.959143,
    longitude: -71.572500,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: -34.061000,
    longitude: -71.565000,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: -34.127857,
    longitude: -71.582500,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: -34.194714,
    longitude: -71.575000,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: -34.261571,
    longitude: -71.567500,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: -34.328429,
    longitude: -71.560000,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: -34.395286,
    longitude: -71.552500,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: -34.462143,
    longitude: -71.570000,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: -34.564000,
    longitude: -71.562500,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: -34.630857,
    longitude: -71.555000,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: -34.697714,
    longitude: -71.547500,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: -34.764571,
    longitude: -71.540000,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: -34.831429,
    longitude: -71.557500,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: -34.898286,
    longitude: -71.550000,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: -34.965143,
    longitude: -71.542500,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: -35.067000,
    longitude: -71.535000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: -35.133857,
    longitude: -71.527500,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: -35.200714,
    longitude: -71.545000,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: -35.267571,
    longitude: -71.537500,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: -35.334429,
    longitude: -71.530000,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: -35.401286,
    longitude: -71.522500,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: -35.468143,
    longitude: -71.515000,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: -35.570000,
    longitude: -71.532500,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: -35.636857,
    longitude: -71.525000,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: -35.703714,
    longitude: -71.517500,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: -35.770571,
    longitude: -71.510000,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: -35.837429,
    longitude: -71.502500,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: -35.904286,
    longitude: -71.520000,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: -35.971143,
    longitude: -71.512500,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: -36.073000,
    longitude: -71.505000,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: -36.139857,
    longitude: -71.497500,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: -36.206714,
    longitude: -71.490000,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: -36.273571,
    longitude: -71.507500,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: -36.340429,
    longitude: -71.500000,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: -36.407286,
    longitude: -71.492500,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: -36.474143,
    longitude: -71.485000,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: -36.576000,
    longitude: -71.477500,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: -36.642857,
    longitude: -71.495000,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: -36.709714,
    longitude: -71.487500,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: -36.776571,
    longitude: -71.480000,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: -36.843429,
    longitude: -71.472500,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: -36.910286,
    longitude: -71.465000,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: -36.977143,
    longitude: -71.482500,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: -37.079000,
    longitude: -71.475000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: -37.145857,
    longitude: -71.467500,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: -37.212714,
    longitude: -71.460000,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: -37.279571,
    longitude: -71.452500,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: -37.346429,
    longitude: -71.470000,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: -37.413286,
    longitude: -71.462500,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: -37.480143,
    longitude: -71.455000,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: -37.582000,
    longitude: -71.447500,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: -37.648857,
    longitude: -71.440000,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: -37.715714,
    longitude: -71.457500,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: -37.782571,
    longitude: -71.450000,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: -37.849429,
    longitude: -71.442500,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: -37.916286,
    longitude: -71.435000,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: -37.983143,
    longitude: -71.427500,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: -38.085000,
    longitude: -71.445000,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: -38.151857,
    longitude: -71.437500,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: -38.218714,
    longitude: -71.430000,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: -38.285571,
    longitude: -71.422500,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: -38.352429,
    longitude: -71.415000,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: -38.419286,
    longitude: -71.432500,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: -38.486143,
    longitude: -71.425000,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: -38.588000,
    longitude: -71.417500,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: -38.654857,
    longitude: -71.410000,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: -38.721714,
    longitude: -71.402500,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: -38.788571,
    longitude: -71.420000,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: -38.855429,
    longitude: -71.412500,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: -38.922286,
    longitude: -71.405000,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: -38.989143,
    longitude: -71.397500,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: -39.091000,
    longitude: -71.390000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: -39.157857,
    longitude: -71.407500,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: -39.224714,
    longitude: -71.400000,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: -39.291571,
    longitude: -71.392500,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: -39.358429,
    longitude: -71.385000,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: -39.425286,
    longitude: -71.377500,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: -39.492143,
    longitude: -71.395000,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: -39.594000,
    longitude: -71.387500,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: -39.660857,
    longitude: -71.380000,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: -39.727714,
    longitude: -71.372500,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: -39.794571,
    longitude: -71.365000,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: -39.861429,
    longitude: -71.382500,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: -39.928286,
    longitude: -71.375000,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: -39.995143,
    longitude: -71.367500,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: -40.097000,
    longitude: -71.360000,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: -40.163857,
    longitude: -71.352500,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: -40.230714,
    longitude: -71.370000,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: -40.297571,
    longitude: -71.362500,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: -40.364429,
    longitude: -71.355000,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: -40.431286,
    longitude: -71.347500,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: -40.498143,
    longitude: -71.340000,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: -40.600000,
    longitude: -71.357500,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: -40.666857,
    longitude: -71.350000,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: -40.733714,
    longitude: -71.342500,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: -40.800571,
    longitude: -71.335000,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: -40.867429,
    longitude: -71.327500,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: -40.934286,
    longitude: -71.345000,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: -41.001143,
    longitude: -71.337500,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: -41.103000,
    longitude: -71.330000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: -41.169857,
    longitude: -71.322500,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: -41.236714,
    longitude: -71.315000,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: -41.303571,
    longitude: -71.332500,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: -41.370429,
    longitude: -71.325000,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: -41.437286,
    longitude: -71.317500,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: -41.504143,
    longitude: -71.310000,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: -41.606000,
    longitude: -71.302500,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: -41.672857,
    longitude: -71.320000,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: -41.739714,
    longitude: -71.312500,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: -41.806571,
    longitude: -71.305000,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: -41.873429,
    longitude: -71.297500,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: -41.940286,
    longitude: -71.290000,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: -42.007143,
    longitude: -71.307500,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: -42.109000,
    longitude: -71.300000,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: -42.175857,
    longitude: -71.292500,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: -42.242714,
    longitude: -71.285000,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: -42.309571,
    longitude: -71.277500,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: -42.376429,
    longitude: -71.295000,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: -42.443286,
    longitude: -71.287500,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: -42.510143,
    longitude: -71.280000,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: -42.612000,
    longitude: -71.272500,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: -42.678857,
    longitude: -71.265000,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: -42.745714,
    longitude: -71.282500,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: -42.812571,
    longitude: -71.275000,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: -42.879429,
    longitude: -71.267500,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: -42.946286,
    longitude: -71.260000,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: -43.013143,
    longitude: -71.252500,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: -43.115000,
    longitude: -71.270000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: -43.181857,
    longitude: -71.262500,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: -43.248714,
    longitude: -71.255000,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: -43.315571,
    longitude: -71.247500,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: -43.382429,
    longitude: -71.240000,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: -43.449286,
    longitude: -71.257500,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: -43.516143,
    longitude: -71.250000,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: -43.618000,
    longitude: -71.242500,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: -43.684857,
    longitude: -71.235000,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: -43.751714,
    longitude: -71.227500,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: -43.818571,
    longitude: -71.245000,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: -43.885429,
    longitude: -71.237500,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: -43.952286,
    longitude: -71.230000,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: -44.019143,
    longitude: -71.222500,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: -44.121000,
    longitude: -71.215000,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: -44.187857,
    longitude: -71.232500,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: -44.254714,
    longitude: -71.225000,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: -44.321571,
    longitude: -71.217500,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: -44.388429,
    longitude: -71.210000,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: -44.455286,
    longitude: -71.202500,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: -44.522143,
    longitude: -71.220000,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: -44.624000,
    longitude: -71.212500,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: -44.690857,
    longitude: -71.205000,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: -44.757714,
    longitude: -71.197500,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: -44.824571,
    longitude: -71.190000,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: -44.891429,
    longitude: -71.207500,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: -44.958286,
    longitude: -71.200000,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: -45.025143,
    longitude: -71.192500,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: -45.127000,
    longitude: -71.185000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: -45.193857,
    longitude: -71.177500,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: -45.260714,
    longitude: -71.195000,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: -45.327571,
    longitude: -71.187500,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: -45.394429,
    longitude: -71.180000,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: -45.461286,
    longitude: -71.172500,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: -45.528143,
    longitude: -71.165000,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: -45.630000,
    longitude: -71.182500,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: -45.696857,
    longitude: -71.175000,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: -45.763714,
    longitude: -71.167500,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: -45.830571,
    longitude: -71.160000,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: -45.897429,
    longitude: -71.152500,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: -45.964286,
    longitude: -71.170000,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: -46.031143,
    longitude: -71.162500,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: -46.133000,
    longitude: -71.155000,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: -46.199857,
    longitude: -71.147500,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: -46.266714,
    longitude: -71.140000,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: -46.333571,
    longitude: -71.157500,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: -46.400429,
    longitude: -71.150000,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: -46.467286,
    longitude: -71.142500,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: -46.534143,
    longitude: -71.135000,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: -46.636000,
    longitude: -71.127500,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: -46.702857,
    longitude: -71.145000,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: -46.769714,
    longitude: -71.137500,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: -46.836571,
    longitude: -71.130000,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: -46.903429,
    longitude: -71.122500,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: -46.970286,
    longitude: -71.115000,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: -47.037143,
    longitude: -71.132500,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: -47.139000,
    longitude: -71.125000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: -47.205857,
    longitude: -71.117500,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: -47.272714,
    longitude: -71.110000,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: -47.339571,
    longitude: -71.102500,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: -47.406429,
    longitude: -71.120000,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: -47.473286,
    longitude: -71.112500,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: -47.540143,
    longitude: -71.105000,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: -47.642000,
    longitude: -71.097500,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: -47.708857,
    longitude: -71.090000,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: -47.775714,
    longitude: -71.107500,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: -47.842571,
    longitude: -71.100000,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: -47.909429,
    longitude: -71.092500,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: -47.976286,
    longitude: -71.085000,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: -48.043143,
    longitude: -71.077500,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: -48.145000,
    longitude: -71.095000,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: -48.211857,
    longitude: -71.087500,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: -48.278714,
    longitude: -71.080000,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: -48.345571,
    longitude: -71.072500,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: -48.412429,
    longitude: -71.065000,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: -48.479286,
    longitude: -71.082500,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: -48.546143,
    longitude: -71.075000,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: -48.648000,
    longitude: -71.067500,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: -48.714857,
    longitude: -71.060000,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: -48.781714,
    longitude: -71.052500,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: -48.848571,
    longitude: -71.070000,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: -48.915429,
    longitude: -71.062500,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: -48.982286,
    longitude: -71.055000,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: -49.049143,
    longitude: -71.047500,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: -49.151000,
    longitude: -71.040000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: -49.217857,
    longitude: -71.057500,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: -49.284714,
    longitude: -71.050000,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: -49.351571,
    longitude: -71.042500,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: -49.418429,
    longitude: -71.035000,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: -49.485286,
    longitude: -71.027500,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: -49.552143,
    longitude: -71.045000,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: -49.654000,
    longitude: -71.037500,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: -49.720857,
    longitude: -71.030000,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: -49.787714,
    longitude: -71.022500,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: -49.854571,
    longitude: -71.015000,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: -49.921429,
    longitude: -71.032500,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: -49.988286,
    longitude: -71.025000,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: -50.055143,
    longitude: -71.017500,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: -50.157000,
    longitude: -71.010000,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: -50.223857,
    longitude: -71.002500,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: -50.290714,
    longitude: -71.020000,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: -50.357571,
    longitude: -71.012500,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: -50.424429,
    longitude: -71.005000,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: -50.491286,
    longitude: -70.997500,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: -50.558143,
    longitude: -70.990000,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: -50.660000,
    longitude: -71.007500,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: -50.726857,
    longitude: -71.000000,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: -50.793714,
    longitude: -70.992500,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: -50.860571,
    longitude: -70.985000,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: -50.927429,
    longitude: -70.977500,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: -50.994286,
    longitude: -70.995000,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: -51.061143,
    longitude: -70.987500,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: -51.163000,
    longitude: -70.980000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: -51.229857,
    longitude: -70.972500,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: -51.296714,
    longitude: -70.965000,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: -51.363571,
    longitude: -70.982500,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: -51.430429,
    longitude: -70.975000,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: -51.497286,
    longitude: -70.967500,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: -51.564143,
    longitude: -70.960000,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: -51.666000,
    longitude: -70.952500,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: -51.732857,
    longitude: -70.970000,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: -51.799714,
    longitude: -70.962500,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: -51.866571,
    longitude: -70.955000,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: -51.933429,
    longitude: -70.947500,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: -52.000286,
    longitude: -70.940000,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: -52.067143,
    longitude: -70.957500,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: -52.169000,
    longitude: -70.950000,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: -52.235857,
    longitude: -70.942500,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: -52.302714,
    longitude: -70.935000,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: -52.369571,
    longitude: -70.927500,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: -52.436429,
    longitude: -70.945000,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: -52.503286,
    longitude: -70.937500,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: -52.570143,
    longitude: -70.930000,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: -52.672000,
    longitude: -70.922500,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: -52.738857,
    longitude: -70.915000,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: -52.805714,
    longitude: -70.932500,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: -52.872571,
    longitude: -70.925000,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: -52.939429,
    longitude: -70.917500,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: -53.006286,
    longitude: -70.910000,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: -53.073143,
    longitude: -70.902500,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: -53.175000,
    longitude: -70.920000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Chilean Pacific Coastal Navigation and Tracking Spine Checkpoint #280',
    isRestrictedZone: false
  },
];

export class ChileanCoastalPassageCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = CHILEAN_COASTAL_PASSAGE_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
