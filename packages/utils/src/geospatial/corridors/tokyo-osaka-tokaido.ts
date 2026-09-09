/**
 * GeoNet Sentinel Geospatial Corridor Definition
 * Japan Tokaido High-Speed Fiber and Transit Spine
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

export const TOKYO_OSAKA_TOKAIDO_WAYPOINTS: CorridorWaypoint[] = [
  {
    sequence: 1,
    latitude: 35.656500,
    longitude: 139.630179,
    elevationMeters: 67,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #1',
    isRestrictedZone: false
  },
  {
    sequence: 2,
    latitude: 35.658000,
    longitude: 139.620357,
    elevationMeters: 84,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #2',
    isRestrictedZone: false
  },
  {
    sequence: 3,
    latitude: 35.659500,
    longitude: 139.610536,
    elevationMeters: 101,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #3',
    isRestrictedZone: false
  },
  {
    sequence: 4,
    latitude: 35.661000,
    longitude: 139.600714,
    elevationMeters: 118,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #4',
    isRestrictedZone: false
  },
  {
    sequence: 5,
    latitude: 35.662500,
    longitude: 139.565893,
    elevationMeters: 135,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #5',
    isRestrictedZone: false
  },
  {
    sequence: 6,
    latitude: 35.664000,
    longitude: 139.556071,
    elevationMeters: 152,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #6',
    isRestrictedZone: false
  },
  {
    sequence: 7,
    latitude: 35.630500,
    longitude: 139.546250,
    elevationMeters: 169,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #7',
    isRestrictedZone: false
  },
  {
    sequence: 8,
    latitude: 35.632000,
    longitude: 139.536429,
    elevationMeters: 186,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #8',
    isRestrictedZone: false
  },
  {
    sequence: 9,
    latitude: 35.633500,
    longitude: 139.526607,
    elevationMeters: 203,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #9',
    isRestrictedZone: false
  },
  {
    sequence: 10,
    latitude: 35.635000,
    longitude: 139.491786,
    elevationMeters: 220,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #10',
    isRestrictedZone: false
  },
  {
    sequence: 11,
    latitude: 35.636500,
    longitude: 139.481964,
    elevationMeters: 237,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #11',
    isRestrictedZone: false
  },
  {
    sequence: 12,
    latitude: 35.638000,
    longitude: 139.472143,
    elevationMeters: 254,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #12',
    isRestrictedZone: false
  },
  {
    sequence: 13,
    latitude: 35.639500,
    longitude: 139.462321,
    elevationMeters: 271,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #13',
    isRestrictedZone: false
  },
  {
    sequence: 14,
    latitude: 35.606000,
    longitude: 139.452500,
    elevationMeters: 288,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #14',
    isRestrictedZone: false
  },
  {
    sequence: 15,
    latitude: 35.607500,
    longitude: 139.417679,
    elevationMeters: 305,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #15',
    isRestrictedZone: false
  },
  {
    sequence: 16,
    latitude: 35.609000,
    longitude: 139.407857,
    elevationMeters: 322,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #16',
    isRestrictedZone: false
  },
  {
    sequence: 17,
    latitude: 35.610500,
    longitude: 139.398036,
    elevationMeters: 339,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #17',
    isRestrictedZone: false
  },
  {
    sequence: 18,
    latitude: 35.612000,
    longitude: 139.388214,
    elevationMeters: 356,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #18',
    isRestrictedZone: false
  },
  {
    sequence: 19,
    latitude: 35.613500,
    longitude: 139.378393,
    elevationMeters: 373,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #19',
    isRestrictedZone: true
  },
  {
    sequence: 20,
    latitude: 35.615000,
    longitude: 139.343571,
    elevationMeters: 390,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #20',
    isRestrictedZone: false
  },
  {
    sequence: 21,
    latitude: 35.581500,
    longitude: 139.333750,
    elevationMeters: 407,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #21',
    isRestrictedZone: false
  },
  {
    sequence: 22,
    latitude: 35.583000,
    longitude: 139.323929,
    elevationMeters: 424,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #22',
    isRestrictedZone: false
  },
  {
    sequence: 23,
    latitude: 35.584500,
    longitude: 139.314107,
    elevationMeters: 441,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #23',
    isRestrictedZone: false
  },
  {
    sequence: 24,
    latitude: 35.586000,
    longitude: 139.304286,
    elevationMeters: 458,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #24',
    isRestrictedZone: false
  },
  {
    sequence: 25,
    latitude: 35.587500,
    longitude: 139.269464,
    elevationMeters: 475,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #25',
    isRestrictedZone: false
  },
  {
    sequence: 26,
    latitude: 35.589000,
    longitude: 139.259643,
    elevationMeters: 492,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #26',
    isRestrictedZone: false
  },
  {
    sequence: 27,
    latitude: 35.590500,
    longitude: 139.249821,
    elevationMeters: 509,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #27',
    isRestrictedZone: false
  },
  {
    sequence: 28,
    latitude: 35.557000,
    longitude: 139.240000,
    elevationMeters: 526,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #28',
    isRestrictedZone: false
  },
  {
    sequence: 29,
    latitude: 35.558500,
    longitude: 139.230179,
    elevationMeters: 543,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #29',
    isRestrictedZone: false
  },
  {
    sequence: 30,
    latitude: 35.560000,
    longitude: 139.195357,
    elevationMeters: 560,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #30',
    isRestrictedZone: false
  },
  {
    sequence: 31,
    latitude: 35.561500,
    longitude: 139.185536,
    elevationMeters: 577,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #31',
    isRestrictedZone: false
  },
  {
    sequence: 32,
    latitude: 35.563000,
    longitude: 139.175714,
    elevationMeters: 594,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #32',
    isRestrictedZone: false
  },
  {
    sequence: 33,
    latitude: 35.564500,
    longitude: 139.165893,
    elevationMeters: 611,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #33',
    isRestrictedZone: false
  },
  {
    sequence: 34,
    latitude: 35.566000,
    longitude: 139.156071,
    elevationMeters: 628,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #34',
    isRestrictedZone: false
  },
  {
    sequence: 35,
    latitude: 35.532500,
    longitude: 139.121250,
    elevationMeters: 645,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #35',
    isRestrictedZone: false
  },
  {
    sequence: 36,
    latitude: 35.534000,
    longitude: 139.111429,
    elevationMeters: 662,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #36',
    isRestrictedZone: false
  },
  {
    sequence: 37,
    latitude: 35.535500,
    longitude: 139.101607,
    elevationMeters: 679,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #37',
    isRestrictedZone: false
  },
  {
    sequence: 38,
    latitude: 35.537000,
    longitude: 139.091786,
    elevationMeters: 696,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #38',
    isRestrictedZone: true
  },
  {
    sequence: 39,
    latitude: 35.538500,
    longitude: 139.081964,
    elevationMeters: 63,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #39',
    isRestrictedZone: false
  },
  {
    sequence: 40,
    latitude: 35.540000,
    longitude: 139.047143,
    elevationMeters: 80,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #40',
    isRestrictedZone: false
  },
  {
    sequence: 41,
    latitude: 35.541500,
    longitude: 139.037321,
    elevationMeters: 97,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #41',
    isRestrictedZone: false
  },
  {
    sequence: 42,
    latitude: 35.508000,
    longitude: 139.027500,
    elevationMeters: 114,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #42',
    isRestrictedZone: false
  },
  {
    sequence: 43,
    latitude: 35.509500,
    longitude: 139.017679,
    elevationMeters: 131,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #43',
    isRestrictedZone: false
  },
  {
    sequence: 44,
    latitude: 35.511000,
    longitude: 139.007857,
    elevationMeters: 148,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #44',
    isRestrictedZone: false
  },
  {
    sequence: 45,
    latitude: 35.512500,
    longitude: 138.973036,
    elevationMeters: 165,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #45',
    isRestrictedZone: false
  },
  {
    sequence: 46,
    latitude: 35.514000,
    longitude: 138.963214,
    elevationMeters: 182,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #46',
    isRestrictedZone: false
  },
  {
    sequence: 47,
    latitude: 35.515500,
    longitude: 138.953393,
    elevationMeters: 199,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #47',
    isRestrictedZone: false
  },
  {
    sequence: 48,
    latitude: 35.517000,
    longitude: 138.943571,
    elevationMeters: 216,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #48',
    isRestrictedZone: false
  },
  {
    sequence: 49,
    latitude: 35.483500,
    longitude: 138.933750,
    elevationMeters: 233,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #49',
    isRestrictedZone: false
  },
  {
    sequence: 50,
    latitude: 35.485000,
    longitude: 138.898929,
    elevationMeters: 250,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #50',
    isRestrictedZone: false
  },
  {
    sequence: 51,
    latitude: 35.486500,
    longitude: 138.889107,
    elevationMeters: 267,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #51',
    isRestrictedZone: false
  },
  {
    sequence: 52,
    latitude: 35.488000,
    longitude: 138.879286,
    elevationMeters: 284,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #52',
    isRestrictedZone: false
  },
  {
    sequence: 53,
    latitude: 35.489500,
    longitude: 138.869464,
    elevationMeters: 301,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #53',
    isRestrictedZone: false
  },
  {
    sequence: 54,
    latitude: 35.491000,
    longitude: 138.859643,
    elevationMeters: 318,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #54',
    isRestrictedZone: false
  },
  {
    sequence: 55,
    latitude: 35.492500,
    longitude: 138.824821,
    elevationMeters: 335,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #55',
    isRestrictedZone: false
  },
  {
    sequence: 56,
    latitude: 35.459000,
    longitude: 138.815000,
    elevationMeters: 352,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #56',
    isRestrictedZone: false
  },
  {
    sequence: 57,
    latitude: 35.460500,
    longitude: 138.805179,
    elevationMeters: 369,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #57',
    isRestrictedZone: true
  },
  {
    sequence: 58,
    latitude: 35.462000,
    longitude: 138.795357,
    elevationMeters: 386,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #58',
    isRestrictedZone: false
  },
  {
    sequence: 59,
    latitude: 35.463500,
    longitude: 138.785536,
    elevationMeters: 403,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #59',
    isRestrictedZone: false
  },
  {
    sequence: 60,
    latitude: 35.465000,
    longitude: 138.750714,
    elevationMeters: 420,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #60',
    isRestrictedZone: false
  },
  {
    sequence: 61,
    latitude: 35.466500,
    longitude: 138.740893,
    elevationMeters: 437,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #61',
    isRestrictedZone: false
  },
  {
    sequence: 62,
    latitude: 35.468000,
    longitude: 138.731071,
    elevationMeters: 454,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #62',
    isRestrictedZone: false
  },
  {
    sequence: 63,
    latitude: 35.434500,
    longitude: 138.721250,
    elevationMeters: 471,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #63',
    isRestrictedZone: false
  },
  {
    sequence: 64,
    latitude: 35.436000,
    longitude: 138.711429,
    elevationMeters: 488,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #64',
    isRestrictedZone: false
  },
  {
    sequence: 65,
    latitude: 35.437500,
    longitude: 138.676607,
    elevationMeters: 505,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #65',
    isRestrictedZone: false
  },
  {
    sequence: 66,
    latitude: 35.439000,
    longitude: 138.666786,
    elevationMeters: 522,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #66',
    isRestrictedZone: false
  },
  {
    sequence: 67,
    latitude: 35.440500,
    longitude: 138.656964,
    elevationMeters: 539,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #67',
    isRestrictedZone: false
  },
  {
    sequence: 68,
    latitude: 35.442000,
    longitude: 138.647143,
    elevationMeters: 556,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #68',
    isRestrictedZone: false
  },
  {
    sequence: 69,
    latitude: 35.443500,
    longitude: 138.637321,
    elevationMeters: 573,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #69',
    isRestrictedZone: false
  },
  {
    sequence: 70,
    latitude: 35.410000,
    longitude: 138.602500,
    elevationMeters: 590,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #70',
    isRestrictedZone: false
  },
  {
    sequence: 71,
    latitude: 35.411500,
    longitude: 138.592679,
    elevationMeters: 607,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #71',
    isRestrictedZone: false
  },
  {
    sequence: 72,
    latitude: 35.413000,
    longitude: 138.582857,
    elevationMeters: 624,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #72',
    isRestrictedZone: false
  },
  {
    sequence: 73,
    latitude: 35.414500,
    longitude: 138.573036,
    elevationMeters: 641,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #73',
    isRestrictedZone: false
  },
  {
    sequence: 74,
    latitude: 35.416000,
    longitude: 138.563214,
    elevationMeters: 658,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #74',
    isRestrictedZone: false
  },
  {
    sequence: 75,
    latitude: 35.417500,
    longitude: 138.528393,
    elevationMeters: 675,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #75',
    isRestrictedZone: false
  },
  {
    sequence: 76,
    latitude: 35.419000,
    longitude: 138.518571,
    elevationMeters: 692,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #76',
    isRestrictedZone: true
  },
  {
    sequence: 77,
    latitude: 35.385500,
    longitude: 138.508750,
    elevationMeters: 59,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #77',
    isRestrictedZone: false
  },
  {
    sequence: 78,
    latitude: 35.387000,
    longitude: 138.498929,
    elevationMeters: 76,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #78',
    isRestrictedZone: false
  },
  {
    sequence: 79,
    latitude: 35.388500,
    longitude: 138.489107,
    elevationMeters: 93,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #79',
    isRestrictedZone: false
  },
  {
    sequence: 80,
    latitude: 35.390000,
    longitude: 138.454286,
    elevationMeters: 110,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #80',
    isRestrictedZone: false
  },
  {
    sequence: 81,
    latitude: 35.391500,
    longitude: 138.444464,
    elevationMeters: 127,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #81',
    isRestrictedZone: false
  },
  {
    sequence: 82,
    latitude: 35.393000,
    longitude: 138.434643,
    elevationMeters: 144,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #82',
    isRestrictedZone: false
  },
  {
    sequence: 83,
    latitude: 35.394500,
    longitude: 138.424821,
    elevationMeters: 161,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #83',
    isRestrictedZone: false
  },
  {
    sequence: 84,
    latitude: 35.361000,
    longitude: 138.415000,
    elevationMeters: 178,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #84',
    isRestrictedZone: false
  },
  {
    sequence: 85,
    latitude: 35.362500,
    longitude: 138.380179,
    elevationMeters: 195,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #85',
    isRestrictedZone: false
  },
  {
    sequence: 86,
    latitude: 35.364000,
    longitude: 138.370357,
    elevationMeters: 212,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #86',
    isRestrictedZone: false
  },
  {
    sequence: 87,
    latitude: 35.365500,
    longitude: 138.360536,
    elevationMeters: 229,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #87',
    isRestrictedZone: false
  },
  {
    sequence: 88,
    latitude: 35.367000,
    longitude: 138.350714,
    elevationMeters: 246,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #88',
    isRestrictedZone: false
  },
  {
    sequence: 89,
    latitude: 35.368500,
    longitude: 138.340893,
    elevationMeters: 263,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #89',
    isRestrictedZone: false
  },
  {
    sequence: 90,
    latitude: 35.370000,
    longitude: 138.306071,
    elevationMeters: 280,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #90',
    isRestrictedZone: false
  },
  {
    sequence: 91,
    latitude: 35.336500,
    longitude: 138.296250,
    elevationMeters: 297,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #91',
    isRestrictedZone: false
  },
  {
    sequence: 92,
    latitude: 35.338000,
    longitude: 138.286429,
    elevationMeters: 314,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #92',
    isRestrictedZone: false
  },
  {
    sequence: 93,
    latitude: 35.339500,
    longitude: 138.276607,
    elevationMeters: 331,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #93',
    isRestrictedZone: false
  },
  {
    sequence: 94,
    latitude: 35.341000,
    longitude: 138.266786,
    elevationMeters: 348,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #94',
    isRestrictedZone: false
  },
  {
    sequence: 95,
    latitude: 35.342500,
    longitude: 138.231964,
    elevationMeters: 365,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #95',
    isRestrictedZone: true
  },
  {
    sequence: 96,
    latitude: 35.344000,
    longitude: 138.222143,
    elevationMeters: 382,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #96',
    isRestrictedZone: false
  },
  {
    sequence: 97,
    latitude: 35.345500,
    longitude: 138.212321,
    elevationMeters: 399,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #97',
    isRestrictedZone: false
  },
  {
    sequence: 98,
    latitude: 35.312000,
    longitude: 138.202500,
    elevationMeters: 416,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #98',
    isRestrictedZone: false
  },
  {
    sequence: 99,
    latitude: 35.313500,
    longitude: 138.192679,
    elevationMeters: 433,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #99',
    isRestrictedZone: false
  },
  {
    sequence: 100,
    latitude: 35.315000,
    longitude: 138.157857,
    elevationMeters: 450,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #100',
    isRestrictedZone: false
  },
  {
    sequence: 101,
    latitude: 35.316500,
    longitude: 138.148036,
    elevationMeters: 467,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #101',
    isRestrictedZone: false
  },
  {
    sequence: 102,
    latitude: 35.318000,
    longitude: 138.138214,
    elevationMeters: 484,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #102',
    isRestrictedZone: false
  },
  {
    sequence: 103,
    latitude: 35.319500,
    longitude: 138.128393,
    elevationMeters: 501,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #103',
    isRestrictedZone: false
  },
  {
    sequence: 104,
    latitude: 35.321000,
    longitude: 138.118571,
    elevationMeters: 518,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #104',
    isRestrictedZone: false
  },
  {
    sequence: 105,
    latitude: 35.287500,
    longitude: 138.083750,
    elevationMeters: 535,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #105',
    isRestrictedZone: false
  },
  {
    sequence: 106,
    latitude: 35.289000,
    longitude: 138.073929,
    elevationMeters: 552,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #106',
    isRestrictedZone: false
  },
  {
    sequence: 107,
    latitude: 35.290500,
    longitude: 138.064107,
    elevationMeters: 569,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #107',
    isRestrictedZone: false
  },
  {
    sequence: 108,
    latitude: 35.292000,
    longitude: 138.054286,
    elevationMeters: 586,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #108',
    isRestrictedZone: false
  },
  {
    sequence: 109,
    latitude: 35.293500,
    longitude: 138.044464,
    elevationMeters: 603,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #109',
    isRestrictedZone: false
  },
  {
    sequence: 110,
    latitude: 35.295000,
    longitude: 138.009643,
    elevationMeters: 620,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #110',
    isRestrictedZone: false
  },
  {
    sequence: 111,
    latitude: 35.296500,
    longitude: 137.999821,
    elevationMeters: 637,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #111',
    isRestrictedZone: false
  },
  {
    sequence: 112,
    latitude: 35.263000,
    longitude: 137.990000,
    elevationMeters: 654,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #112',
    isRestrictedZone: false
  },
  {
    sequence: 113,
    latitude: 35.264500,
    longitude: 137.980179,
    elevationMeters: 671,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #113',
    isRestrictedZone: false
  },
  {
    sequence: 114,
    latitude: 35.266000,
    longitude: 137.970357,
    elevationMeters: 688,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #114',
    isRestrictedZone: true
  },
  {
    sequence: 115,
    latitude: 35.267500,
    longitude: 137.935536,
    elevationMeters: 55,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #115',
    isRestrictedZone: false
  },
  {
    sequence: 116,
    latitude: 35.269000,
    longitude: 137.925714,
    elevationMeters: 72,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #116',
    isRestrictedZone: false
  },
  {
    sequence: 117,
    latitude: 35.270500,
    longitude: 137.915893,
    elevationMeters: 89,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #117',
    isRestrictedZone: false
  },
  {
    sequence: 118,
    latitude: 35.272000,
    longitude: 137.906071,
    elevationMeters: 106,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #118',
    isRestrictedZone: false
  },
  {
    sequence: 119,
    latitude: 35.238500,
    longitude: 137.896250,
    elevationMeters: 123,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #119',
    isRestrictedZone: false
  },
  {
    sequence: 120,
    latitude: 35.240000,
    longitude: 137.861429,
    elevationMeters: 140,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #120',
    isRestrictedZone: false
  },
  {
    sequence: 121,
    latitude: 35.241500,
    longitude: 137.851607,
    elevationMeters: 157,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #121',
    isRestrictedZone: false
  },
  {
    sequence: 122,
    latitude: 35.243000,
    longitude: 137.841786,
    elevationMeters: 174,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #122',
    isRestrictedZone: false
  },
  {
    sequence: 123,
    latitude: 35.244500,
    longitude: 137.831964,
    elevationMeters: 191,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #123',
    isRestrictedZone: false
  },
  {
    sequence: 124,
    latitude: 35.246000,
    longitude: 137.822143,
    elevationMeters: 208,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #124',
    isRestrictedZone: false
  },
  {
    sequence: 125,
    latitude: 35.247500,
    longitude: 137.787321,
    elevationMeters: 225,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #125',
    isRestrictedZone: false
  },
  {
    sequence: 126,
    latitude: 35.214000,
    longitude: 137.777500,
    elevationMeters: 242,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #126',
    isRestrictedZone: false
  },
  {
    sequence: 127,
    latitude: 35.215500,
    longitude: 137.767679,
    elevationMeters: 259,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #127',
    isRestrictedZone: false
  },
  {
    sequence: 128,
    latitude: 35.217000,
    longitude: 137.757857,
    elevationMeters: 276,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #128',
    isRestrictedZone: false
  },
  {
    sequence: 129,
    latitude: 35.218500,
    longitude: 137.748036,
    elevationMeters: 293,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #129',
    isRestrictedZone: false
  },
  {
    sequence: 130,
    latitude: 35.220000,
    longitude: 137.713214,
    elevationMeters: 310,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #130',
    isRestrictedZone: false
  },
  {
    sequence: 131,
    latitude: 35.221500,
    longitude: 137.703393,
    elevationMeters: 327,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #131',
    isRestrictedZone: false
  },
  {
    sequence: 132,
    latitude: 35.223000,
    longitude: 137.693571,
    elevationMeters: 344,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #132',
    isRestrictedZone: false
  },
  {
    sequence: 133,
    latitude: 35.189500,
    longitude: 137.683750,
    elevationMeters: 361,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #133',
    isRestrictedZone: true
  },
  {
    sequence: 134,
    latitude: 35.191000,
    longitude: 137.673929,
    elevationMeters: 378,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #134',
    isRestrictedZone: false
  },
  {
    sequence: 135,
    latitude: 35.192500,
    longitude: 137.639107,
    elevationMeters: 395,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #135',
    isRestrictedZone: false
  },
  {
    sequence: 136,
    latitude: 35.194000,
    longitude: 137.629286,
    elevationMeters: 412,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #136',
    isRestrictedZone: false
  },
  {
    sequence: 137,
    latitude: 35.195500,
    longitude: 137.619464,
    elevationMeters: 429,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #137',
    isRestrictedZone: false
  },
  {
    sequence: 138,
    latitude: 35.197000,
    longitude: 137.609643,
    elevationMeters: 446,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #138',
    isRestrictedZone: false
  },
  {
    sequence: 139,
    latitude: 35.198500,
    longitude: 137.599821,
    elevationMeters: 463,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #139',
    isRestrictedZone: false
  },
  {
    sequence: 140,
    latitude: 35.165000,
    longitude: 137.565000,
    elevationMeters: 480,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #140',
    isRestrictedZone: false
  },
  {
    sequence: 141,
    latitude: 35.166500,
    longitude: 137.555179,
    elevationMeters: 497,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #141',
    isRestrictedZone: false
  },
  {
    sequence: 142,
    latitude: 35.168000,
    longitude: 137.545357,
    elevationMeters: 514,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #142',
    isRestrictedZone: false
  },
  {
    sequence: 143,
    latitude: 35.169500,
    longitude: 137.535536,
    elevationMeters: 531,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #143',
    isRestrictedZone: false
  },
  {
    sequence: 144,
    latitude: 35.171000,
    longitude: 137.525714,
    elevationMeters: 548,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #144',
    isRestrictedZone: false
  },
  {
    sequence: 145,
    latitude: 35.172500,
    longitude: 137.490893,
    elevationMeters: 565,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #145',
    isRestrictedZone: false
  },
  {
    sequence: 146,
    latitude: 35.174000,
    longitude: 137.481071,
    elevationMeters: 582,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #146',
    isRestrictedZone: false
  },
  {
    sequence: 147,
    latitude: 35.140500,
    longitude: 137.471250,
    elevationMeters: 599,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #147',
    isRestrictedZone: false
  },
  {
    sequence: 148,
    latitude: 35.142000,
    longitude: 137.461429,
    elevationMeters: 616,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #148',
    isRestrictedZone: false
  },
  {
    sequence: 149,
    latitude: 35.143500,
    longitude: 137.451607,
    elevationMeters: 633,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #149',
    isRestrictedZone: false
  },
  {
    sequence: 150,
    latitude: 35.145000,
    longitude: 137.416786,
    elevationMeters: 650,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #150',
    isRestrictedZone: false
  },
  {
    sequence: 151,
    latitude: 35.146500,
    longitude: 137.406964,
    elevationMeters: 667,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #151',
    isRestrictedZone: false
  },
  {
    sequence: 152,
    latitude: 35.148000,
    longitude: 137.397143,
    elevationMeters: 684,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #152',
    isRestrictedZone: true
  },
  {
    sequence: 153,
    latitude: 35.149500,
    longitude: 137.387321,
    elevationMeters: 51,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #153',
    isRestrictedZone: false
  },
  {
    sequence: 154,
    latitude: 35.116000,
    longitude: 137.377500,
    elevationMeters: 68,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #154',
    isRestrictedZone: false
  },
  {
    sequence: 155,
    latitude: 35.117500,
    longitude: 137.342679,
    elevationMeters: 85,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #155',
    isRestrictedZone: false
  },
  {
    sequence: 156,
    latitude: 35.119000,
    longitude: 137.332857,
    elevationMeters: 102,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #156',
    isRestrictedZone: false
  },
  {
    sequence: 157,
    latitude: 35.120500,
    longitude: 137.323036,
    elevationMeters: 119,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #157',
    isRestrictedZone: false
  },
  {
    sequence: 158,
    latitude: 35.122000,
    longitude: 137.313214,
    elevationMeters: 136,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #158',
    isRestrictedZone: false
  },
  {
    sequence: 159,
    latitude: 35.123500,
    longitude: 137.303393,
    elevationMeters: 153,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #159',
    isRestrictedZone: false
  },
  {
    sequence: 160,
    latitude: 35.125000,
    longitude: 137.268571,
    elevationMeters: 170,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #160',
    isRestrictedZone: false
  },
  {
    sequence: 161,
    latitude: 35.091500,
    longitude: 137.258750,
    elevationMeters: 187,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #161',
    isRestrictedZone: false
  },
  {
    sequence: 162,
    latitude: 35.093000,
    longitude: 137.248929,
    elevationMeters: 204,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #162',
    isRestrictedZone: false
  },
  {
    sequence: 163,
    latitude: 35.094500,
    longitude: 137.239107,
    elevationMeters: 221,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #163',
    isRestrictedZone: false
  },
  {
    sequence: 164,
    latitude: 35.096000,
    longitude: 137.229286,
    elevationMeters: 238,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #164',
    isRestrictedZone: false
  },
  {
    sequence: 165,
    latitude: 35.097500,
    longitude: 137.194464,
    elevationMeters: 255,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #165',
    isRestrictedZone: false
  },
  {
    sequence: 166,
    latitude: 35.099000,
    longitude: 137.184643,
    elevationMeters: 272,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #166',
    isRestrictedZone: false
  },
  {
    sequence: 167,
    latitude: 35.100500,
    longitude: 137.174821,
    elevationMeters: 289,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #167',
    isRestrictedZone: false
  },
  {
    sequence: 168,
    latitude: 35.067000,
    longitude: 137.165000,
    elevationMeters: 306,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #168',
    isRestrictedZone: false
  },
  {
    sequence: 169,
    latitude: 35.068500,
    longitude: 137.155179,
    elevationMeters: 323,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #169',
    isRestrictedZone: false
  },
  {
    sequence: 170,
    latitude: 35.070000,
    longitude: 137.120357,
    elevationMeters: 340,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #170',
    isRestrictedZone: false
  },
  {
    sequence: 171,
    latitude: 35.071500,
    longitude: 137.110536,
    elevationMeters: 357,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #171',
    isRestrictedZone: true
  },
  {
    sequence: 172,
    latitude: 35.073000,
    longitude: 137.100714,
    elevationMeters: 374,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #172',
    isRestrictedZone: false
  },
  {
    sequence: 173,
    latitude: 35.074500,
    longitude: 137.090893,
    elevationMeters: 391,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #173',
    isRestrictedZone: false
  },
  {
    sequence: 174,
    latitude: 35.076000,
    longitude: 137.081071,
    elevationMeters: 408,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #174',
    isRestrictedZone: false
  },
  {
    sequence: 175,
    latitude: 35.042500,
    longitude: 137.046250,
    elevationMeters: 425,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #175',
    isRestrictedZone: false
  },
  {
    sequence: 176,
    latitude: 35.044000,
    longitude: 137.036429,
    elevationMeters: 442,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #176',
    isRestrictedZone: false
  },
  {
    sequence: 177,
    latitude: 35.045500,
    longitude: 137.026607,
    elevationMeters: 459,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #177',
    isRestrictedZone: false
  },
  {
    sequence: 178,
    latitude: 35.047000,
    longitude: 137.016786,
    elevationMeters: 476,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #178',
    isRestrictedZone: false
  },
  {
    sequence: 179,
    latitude: 35.048500,
    longitude: 137.006964,
    elevationMeters: 493,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #179',
    isRestrictedZone: false
  },
  {
    sequence: 180,
    latitude: 35.050000,
    longitude: 136.972143,
    elevationMeters: 510,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #180',
    isRestrictedZone: false
  },
  {
    sequence: 181,
    latitude: 35.051500,
    longitude: 136.962321,
    elevationMeters: 527,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #181',
    isRestrictedZone: false
  },
  {
    sequence: 182,
    latitude: 35.018000,
    longitude: 136.952500,
    elevationMeters: 544,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #182',
    isRestrictedZone: false
  },
  {
    sequence: 183,
    latitude: 35.019500,
    longitude: 136.942679,
    elevationMeters: 561,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #183',
    isRestrictedZone: false
  },
  {
    sequence: 184,
    latitude: 35.021000,
    longitude: 136.932857,
    elevationMeters: 578,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #184',
    isRestrictedZone: false
  },
  {
    sequence: 185,
    latitude: 35.022500,
    longitude: 136.898036,
    elevationMeters: 595,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #185',
    isRestrictedZone: false
  },
  {
    sequence: 186,
    latitude: 35.024000,
    longitude: 136.888214,
    elevationMeters: 612,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #186',
    isRestrictedZone: false
  },
  {
    sequence: 187,
    latitude: 35.025500,
    longitude: 136.878393,
    elevationMeters: 629,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #187',
    isRestrictedZone: false
  },
  {
    sequence: 188,
    latitude: 35.027000,
    longitude: 136.868571,
    elevationMeters: 646,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #188',
    isRestrictedZone: false
  },
  {
    sequence: 189,
    latitude: 34.993500,
    longitude: 136.858750,
    elevationMeters: 663,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #189',
    isRestrictedZone: false
  },
  {
    sequence: 190,
    latitude: 34.995000,
    longitude: 136.823929,
    elevationMeters: 680,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #190',
    isRestrictedZone: true
  },
  {
    sequence: 191,
    latitude: 34.996500,
    longitude: 136.814107,
    elevationMeters: 697,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #191',
    isRestrictedZone: false
  },
  {
    sequence: 192,
    latitude: 34.998000,
    longitude: 136.804286,
    elevationMeters: 64,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #192',
    isRestrictedZone: false
  },
  {
    sequence: 193,
    latitude: 34.999500,
    longitude: 136.794464,
    elevationMeters: 81,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #193',
    isRestrictedZone: false
  },
  {
    sequence: 194,
    latitude: 35.001000,
    longitude: 136.784643,
    elevationMeters: 98,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #194',
    isRestrictedZone: false
  },
  {
    sequence: 195,
    latitude: 35.002500,
    longitude: 136.749821,
    elevationMeters: 115,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #195',
    isRestrictedZone: false
  },
  {
    sequence: 196,
    latitude: 34.969000,
    longitude: 136.740000,
    elevationMeters: 132,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #196',
    isRestrictedZone: false
  },
  {
    sequence: 197,
    latitude: 34.970500,
    longitude: 136.730179,
    elevationMeters: 149,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #197',
    isRestrictedZone: false
  },
  {
    sequence: 198,
    latitude: 34.972000,
    longitude: 136.720357,
    elevationMeters: 166,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #198',
    isRestrictedZone: false
  },
  {
    sequence: 199,
    latitude: 34.973500,
    longitude: 136.710536,
    elevationMeters: 183,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #199',
    isRestrictedZone: false
  },
  {
    sequence: 200,
    latitude: 34.975000,
    longitude: 136.675714,
    elevationMeters: 200,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #200',
    isRestrictedZone: false
  },
  {
    sequence: 201,
    latitude: 34.976500,
    longitude: 136.665893,
    elevationMeters: 217,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #201',
    isRestrictedZone: false
  },
  {
    sequence: 202,
    latitude: 34.978000,
    longitude: 136.656071,
    elevationMeters: 234,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #202',
    isRestrictedZone: false
  },
  {
    sequence: 203,
    latitude: 34.944500,
    longitude: 136.646250,
    elevationMeters: 251,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #203',
    isRestrictedZone: false
  },
  {
    sequence: 204,
    latitude: 34.946000,
    longitude: 136.636429,
    elevationMeters: 268,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #204',
    isRestrictedZone: false
  },
  {
    sequence: 205,
    latitude: 34.947500,
    longitude: 136.601607,
    elevationMeters: 285,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #205',
    isRestrictedZone: false
  },
  {
    sequence: 206,
    latitude: 34.949000,
    longitude: 136.591786,
    elevationMeters: 302,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #206',
    isRestrictedZone: false
  },
  {
    sequence: 207,
    latitude: 34.950500,
    longitude: 136.581964,
    elevationMeters: 319,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #207',
    isRestrictedZone: false
  },
  {
    sequence: 208,
    latitude: 34.952000,
    longitude: 136.572143,
    elevationMeters: 336,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #208',
    isRestrictedZone: false
  },
  {
    sequence: 209,
    latitude: 34.953500,
    longitude: 136.562321,
    elevationMeters: 353,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #209',
    isRestrictedZone: true
  },
  {
    sequence: 210,
    latitude: 34.920000,
    longitude: 136.527500,
    elevationMeters: 370,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #210',
    isRestrictedZone: false
  },
  {
    sequence: 211,
    latitude: 34.921500,
    longitude: 136.517679,
    elevationMeters: 387,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #211',
    isRestrictedZone: false
  },
  {
    sequence: 212,
    latitude: 34.923000,
    longitude: 136.507857,
    elevationMeters: 404,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #212',
    isRestrictedZone: false
  },
  {
    sequence: 213,
    latitude: 34.924500,
    longitude: 136.498036,
    elevationMeters: 421,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #213',
    isRestrictedZone: false
  },
  {
    sequence: 214,
    latitude: 34.926000,
    longitude: 136.488214,
    elevationMeters: 438,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #214',
    isRestrictedZone: false
  },
  {
    sequence: 215,
    latitude: 34.927500,
    longitude: 136.453393,
    elevationMeters: 455,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #215',
    isRestrictedZone: false
  },
  {
    sequence: 216,
    latitude: 34.929000,
    longitude: 136.443571,
    elevationMeters: 472,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #216',
    isRestrictedZone: false
  },
  {
    sequence: 217,
    latitude: 34.895500,
    longitude: 136.433750,
    elevationMeters: 489,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #217',
    isRestrictedZone: false
  },
  {
    sequence: 218,
    latitude: 34.897000,
    longitude: 136.423929,
    elevationMeters: 506,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #218',
    isRestrictedZone: false
  },
  {
    sequence: 219,
    latitude: 34.898500,
    longitude: 136.414107,
    elevationMeters: 523,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #219',
    isRestrictedZone: false
  },
  {
    sequence: 220,
    latitude: 34.900000,
    longitude: 136.379286,
    elevationMeters: 540,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #220',
    isRestrictedZone: false
  },
  {
    sequence: 221,
    latitude: 34.901500,
    longitude: 136.369464,
    elevationMeters: 557,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #221',
    isRestrictedZone: false
  },
  {
    sequence: 222,
    latitude: 34.903000,
    longitude: 136.359643,
    elevationMeters: 574,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #222',
    isRestrictedZone: false
  },
  {
    sequence: 223,
    latitude: 34.904500,
    longitude: 136.349821,
    elevationMeters: 591,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #223',
    isRestrictedZone: false
  },
  {
    sequence: 224,
    latitude: 34.871000,
    longitude: 136.340000,
    elevationMeters: 608,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #224',
    isRestrictedZone: false
  },
  {
    sequence: 225,
    latitude: 34.872500,
    longitude: 136.305179,
    elevationMeters: 625,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #225',
    isRestrictedZone: false
  },
  {
    sequence: 226,
    latitude: 34.874000,
    longitude: 136.295357,
    elevationMeters: 642,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #226',
    isRestrictedZone: false
  },
  {
    sequence: 227,
    latitude: 34.875500,
    longitude: 136.285536,
    elevationMeters: 659,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #227',
    isRestrictedZone: false
  },
  {
    sequence: 228,
    latitude: 34.877000,
    longitude: 136.275714,
    elevationMeters: 676,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #228',
    isRestrictedZone: true
  },
  {
    sequence: 229,
    latitude: 34.878500,
    longitude: 136.265893,
    elevationMeters: 693,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #229',
    isRestrictedZone: false
  },
  {
    sequence: 230,
    latitude: 34.880000,
    longitude: 136.231071,
    elevationMeters: 60,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #230',
    isRestrictedZone: false
  },
  {
    sequence: 231,
    latitude: 34.846500,
    longitude: 136.221250,
    elevationMeters: 77,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #231',
    isRestrictedZone: false
  },
  {
    sequence: 232,
    latitude: 34.848000,
    longitude: 136.211429,
    elevationMeters: 94,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #232',
    isRestrictedZone: false
  },
  {
    sequence: 233,
    latitude: 34.849500,
    longitude: 136.201607,
    elevationMeters: 111,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #233',
    isRestrictedZone: false
  },
  {
    sequence: 234,
    latitude: 34.851000,
    longitude: 136.191786,
    elevationMeters: 128,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #234',
    isRestrictedZone: false
  },
  {
    sequence: 235,
    latitude: 34.852500,
    longitude: 136.156964,
    elevationMeters: 145,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #235',
    isRestrictedZone: false
  },
  {
    sequence: 236,
    latitude: 34.854000,
    longitude: 136.147143,
    elevationMeters: 162,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #236',
    isRestrictedZone: false
  },
  {
    sequence: 237,
    latitude: 34.855500,
    longitude: 136.137321,
    elevationMeters: 179,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #237',
    isRestrictedZone: false
  },
  {
    sequence: 238,
    latitude: 34.822000,
    longitude: 136.127500,
    elevationMeters: 196,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #238',
    isRestrictedZone: false
  },
  {
    sequence: 239,
    latitude: 34.823500,
    longitude: 136.117679,
    elevationMeters: 213,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #239',
    isRestrictedZone: false
  },
  {
    sequence: 240,
    latitude: 34.825000,
    longitude: 136.082857,
    elevationMeters: 230,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #240',
    isRestrictedZone: false
  },
  {
    sequence: 241,
    latitude: 34.826500,
    longitude: 136.073036,
    elevationMeters: 247,
    targetSpeedKmh: 73,
    speedLimitKmh: 93,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #241',
    isRestrictedZone: false
  },
  {
    sequence: 242,
    latitude: 34.828000,
    longitude: 136.063214,
    elevationMeters: 264,
    targetSpeedKmh: 86,
    speedLimitKmh: 106,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #242',
    isRestrictedZone: false
  },
  {
    sequence: 243,
    latitude: 34.829500,
    longitude: 136.053393,
    elevationMeters: 281,
    targetSpeedKmh: 99,
    speedLimitKmh: 119,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #243',
    isRestrictedZone: false
  },
  {
    sequence: 244,
    latitude: 34.831000,
    longitude: 136.043571,
    elevationMeters: 298,
    targetSpeedKmh: 72,
    speedLimitKmh: 92,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #244',
    isRestrictedZone: false
  },
  {
    sequence: 245,
    latitude: 34.797500,
    longitude: 136.008750,
    elevationMeters: 315,
    targetSpeedKmh: 85,
    speedLimitKmh: 105,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #245',
    isRestrictedZone: false
  },
  {
    sequence: 246,
    latitude: 34.799000,
    longitude: 135.998929,
    elevationMeters: 332,
    targetSpeedKmh: 98,
    speedLimitKmh: 118,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #246',
    isRestrictedZone: false
  },
  {
    sequence: 247,
    latitude: 34.800500,
    longitude: 135.989107,
    elevationMeters: 349,
    targetSpeedKmh: 71,
    speedLimitKmh: 91,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #247',
    isRestrictedZone: true
  },
  {
    sequence: 248,
    latitude: 34.802000,
    longitude: 135.979286,
    elevationMeters: 366,
    targetSpeedKmh: 84,
    speedLimitKmh: 104,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #248',
    isRestrictedZone: false
  },
  {
    sequence: 249,
    latitude: 34.803500,
    longitude: 135.969464,
    elevationMeters: 383,
    targetSpeedKmh: 97,
    speedLimitKmh: 117,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #249',
    isRestrictedZone: false
  },
  {
    sequence: 250,
    latitude: 34.805000,
    longitude: 135.934643,
    elevationMeters: 400,
    targetSpeedKmh: 70,
    speedLimitKmh: 90,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #250',
    isRestrictedZone: false
  },
  {
    sequence: 251,
    latitude: 34.806500,
    longitude: 135.924821,
    elevationMeters: 417,
    targetSpeedKmh: 83,
    speedLimitKmh: 103,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #251',
    isRestrictedZone: false
  },
  {
    sequence: 252,
    latitude: 34.773000,
    longitude: 135.915000,
    elevationMeters: 434,
    targetSpeedKmh: 96,
    speedLimitKmh: 116,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #252',
    isRestrictedZone: false
  },
  {
    sequence: 253,
    latitude: 34.774500,
    longitude: 135.905179,
    elevationMeters: 451,
    targetSpeedKmh: 69,
    speedLimitKmh: 89,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #253',
    isRestrictedZone: false
  },
  {
    sequence: 254,
    latitude: 34.776000,
    longitude: 135.895357,
    elevationMeters: 468,
    targetSpeedKmh: 82,
    speedLimitKmh: 102,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #254',
    isRestrictedZone: false
  },
  {
    sequence: 255,
    latitude: 34.777500,
    longitude: 135.860536,
    elevationMeters: 485,
    targetSpeedKmh: 95,
    speedLimitKmh: 115,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #255',
    isRestrictedZone: false
  },
  {
    sequence: 256,
    latitude: 34.779000,
    longitude: 135.850714,
    elevationMeters: 502,
    targetSpeedKmh: 68,
    speedLimitKmh: 88,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #256',
    isRestrictedZone: false
  },
  {
    sequence: 257,
    latitude: 34.780500,
    longitude: 135.840893,
    elevationMeters: 519,
    targetSpeedKmh: 81,
    speedLimitKmh: 101,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #257',
    isRestrictedZone: false
  },
  {
    sequence: 258,
    latitude: 34.782000,
    longitude: 135.831071,
    elevationMeters: 536,
    targetSpeedKmh: 94,
    speedLimitKmh: 114,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #258',
    isRestrictedZone: false
  },
  {
    sequence: 259,
    latitude: 34.748500,
    longitude: 135.821250,
    elevationMeters: 553,
    targetSpeedKmh: 67,
    speedLimitKmh: 87,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #259',
    isRestrictedZone: false
  },
  {
    sequence: 260,
    latitude: 34.750000,
    longitude: 135.786429,
    elevationMeters: 570,
    targetSpeedKmh: 80,
    speedLimitKmh: 100,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #260',
    isRestrictedZone: false
  },
  {
    sequence: 261,
    latitude: 34.751500,
    longitude: 135.776607,
    elevationMeters: 587,
    targetSpeedKmh: 93,
    speedLimitKmh: 113,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #261',
    isRestrictedZone: false
  },
  {
    sequence: 262,
    latitude: 34.753000,
    longitude: 135.766786,
    elevationMeters: 604,
    targetSpeedKmh: 66,
    speedLimitKmh: 86,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #262',
    isRestrictedZone: false
  },
  {
    sequence: 263,
    latitude: 34.754500,
    longitude: 135.756964,
    elevationMeters: 621,
    targetSpeedKmh: 79,
    speedLimitKmh: 99,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #263',
    isRestrictedZone: false
  },
  {
    sequence: 264,
    latitude: 34.756000,
    longitude: 135.747143,
    elevationMeters: 638,
    targetSpeedKmh: 92,
    speedLimitKmh: 112,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #264',
    isRestrictedZone: false
  },
  {
    sequence: 265,
    latitude: 34.757500,
    longitude: 135.712321,
    elevationMeters: 655,
    targetSpeedKmh: 65,
    speedLimitKmh: 85,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #265',
    isRestrictedZone: false
  },
  {
    sequence: 266,
    latitude: 34.724000,
    longitude: 135.702500,
    elevationMeters: 672,
    targetSpeedKmh: 78,
    speedLimitKmh: 98,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #266',
    isRestrictedZone: true
  },
  {
    sequence: 267,
    latitude: 34.725500,
    longitude: 135.692679,
    elevationMeters: 689,
    targetSpeedKmh: 91,
    speedLimitKmh: 111,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #267',
    isRestrictedZone: false
  },
  {
    sequence: 268,
    latitude: 34.727000,
    longitude: 135.682857,
    elevationMeters: 56,
    targetSpeedKmh: 64,
    speedLimitKmh: 84,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #268',
    isRestrictedZone: false
  },
  {
    sequence: 269,
    latitude: 34.728500,
    longitude: 135.673036,
    elevationMeters: 73,
    targetSpeedKmh: 77,
    speedLimitKmh: 97,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #269',
    isRestrictedZone: false
  },
  {
    sequence: 270,
    latitude: 34.730000,
    longitude: 135.638214,
    elevationMeters: 90,
    targetSpeedKmh: 90,
    speedLimitKmh: 110,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #270',
    isRestrictedZone: false
  },
  {
    sequence: 271,
    latitude: 34.731500,
    longitude: 135.628393,
    elevationMeters: 107,
    targetSpeedKmh: 63,
    speedLimitKmh: 83,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #271',
    isRestrictedZone: false
  },
  {
    sequence: 272,
    latitude: 34.733000,
    longitude: 135.618571,
    elevationMeters: 124,
    targetSpeedKmh: 76,
    speedLimitKmh: 96,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #272',
    isRestrictedZone: false
  },
  {
    sequence: 273,
    latitude: 34.699500,
    longitude: 135.608750,
    elevationMeters: 141,
    targetSpeedKmh: 89,
    speedLimitKmh: 109,
    bearingDeg: 45.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #273',
    isRestrictedZone: false
  },
  {
    sequence: 274,
    latitude: 34.701000,
    longitude: 135.598929,
    elevationMeters: 158,
    targetSpeedKmh: 62,
    speedLimitKmh: 82,
    bearingDeg: 90.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #274',
    isRestrictedZone: false
  },
  {
    sequence: 275,
    latitude: 34.702500,
    longitude: 135.564107,
    elevationMeters: 175,
    targetSpeedKmh: 75,
    speedLimitKmh: 95,
    bearingDeg: 135.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #275',
    isRestrictedZone: false
  },
  {
    sequence: 276,
    latitude: 34.704000,
    longitude: 135.554286,
    elevationMeters: 192,
    targetSpeedKmh: 88,
    speedLimitKmh: 108,
    bearingDeg: 180.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #276',
    isRestrictedZone: false
  },
  {
    sequence: 277,
    latitude: 34.705500,
    longitude: 135.544464,
    elevationMeters: 209,
    targetSpeedKmh: 61,
    speedLimitKmh: 81,
    bearingDeg: 225.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #277',
    isRestrictedZone: false
  },
  {
    sequence: 278,
    latitude: 34.707000,
    longitude: 135.534643,
    elevationMeters: 226,
    targetSpeedKmh: 74,
    speedLimitKmh: 94,
    bearingDeg: 270.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #278',
    isRestrictedZone: false
  },
  {
    sequence: 279,
    latitude: 34.708500,
    longitude: 135.524821,
    elevationMeters: 243,
    targetSpeedKmh: 87,
    speedLimitKmh: 107,
    bearingDeg: 315.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #279',
    isRestrictedZone: false
  },
  {
    sequence: 280,
    latitude: 34.675000,
    longitude: 135.490000,
    elevationMeters: 260,
    targetSpeedKmh: 60,
    speedLimitKmh: 80,
    bearingDeg: 0.00,
    geofenceRadiusMeters: 500,
    checkpointName: 'Japan Tokaido High-Speed Fiber and Transit Spine Checkpoint #280',
    isRestrictedZone: false
  },
];

export class TokyoOsakaTokaidoCorridorManager {
  public checkTrajectoryCompliance_1(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[5];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_2(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[10];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_3(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[15];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_4(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[20];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_5(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[25];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_6(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[30];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_7(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[35];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_8(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[40];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_9(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[45];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_10(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[50];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_11(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[55];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_12(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[60];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_13(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[65];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_14(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[70];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_15(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[75];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_16(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[80];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_17(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[85];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_18(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[90];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_19(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[95];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_20(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[100];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_21(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[105];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_22(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[110];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_23(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[115];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_24(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[120];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_25(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[125];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_26(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[130];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_27(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[135];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_28(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[140];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_29(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[145];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_30(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[150];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_31(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[155];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_32(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[160];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_33(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[165];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_34(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[170];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_35(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[175];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_36(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[180];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_37(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[185];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_38(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[190];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_39(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[195];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

  public checkTrajectoryCompliance_40(lat: number, lon: number): { withinCorridor: boolean; deviationMeters: number } {
    const wp = TOKYO_OSAKA_TOKAIDO_WAYPOINTS[200];
    const dLat = (lat - wp.latitude) * 111320;
    const dLon = (lon - wp.longitude) * 111320 * Math.cos(lat * Math.PI / 180);
    const dist = Math.sqrt(dLat * dLat + dLon * dLon);
    return {
      withinCorridor: dist <= wp.geofenceRadiusMeters,
      deviationMeters: dist
    };
  }

}
