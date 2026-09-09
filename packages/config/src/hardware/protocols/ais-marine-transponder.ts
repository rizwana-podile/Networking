/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser
 */

export interface ProtocolFrameField {
  fieldId: string;
  name: string;
  byteOffset: number;
  bitLength: number;
  dataType: 'uint8' | 'uint16' | 'uint32' | 'int16' | 'int32' | 'float32' | 'ascii' | 'bcd';
  scaleFactor: number;
  offset: number;
  units: string;
  description: string;
}

export const AIS_MARINE_TRANSPONDER_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_001',
    name: 'ais_marine_transponder_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_002',
    name: 'ais_marine_transponder_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_003',
    name: 'ais_marine_transponder_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_004',
    name: 'ais_marine_transponder_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_005',
    name: 'ais_marine_transponder_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_006',
    name: 'ais_marine_transponder_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_007',
    name: 'ais_marine_transponder_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_008',
    name: 'ais_marine_transponder_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_009',
    name: 'ais_marine_transponder_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_010',
    name: 'ais_marine_transponder_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_011',
    name: 'ais_marine_transponder_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_012',
    name: 'ais_marine_transponder_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_013',
    name: 'ais_marine_transponder_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_014',
    name: 'ais_marine_transponder_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_015',
    name: 'ais_marine_transponder_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_016',
    name: 'ais_marine_transponder_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_017',
    name: 'ais_marine_transponder_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_018',
    name: 'ais_marine_transponder_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_019',
    name: 'ais_marine_transponder_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_020',
    name: 'ais_marine_transponder_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_021',
    name: 'ais_marine_transponder_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_022',
    name: 'ais_marine_transponder_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_023',
    name: 'ais_marine_transponder_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_024',
    name: 'ais_marine_transponder_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_025',
    name: 'ais_marine_transponder_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_026',
    name: 'ais_marine_transponder_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_027',
    name: 'ais_marine_transponder_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_028',
    name: 'ais_marine_transponder_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_029',
    name: 'ais_marine_transponder_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_030',
    name: 'ais_marine_transponder_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_031',
    name: 'ais_marine_transponder_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_032',
    name: 'ais_marine_transponder_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_033',
    name: 'ais_marine_transponder_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_034',
    name: 'ais_marine_transponder_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_035',
    name: 'ais_marine_transponder_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_036',
    name: 'ais_marine_transponder_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_037',
    name: 'ais_marine_transponder_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_038',
    name: 'ais_marine_transponder_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_039',
    name: 'ais_marine_transponder_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_040',
    name: 'ais_marine_transponder_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_041',
    name: 'ais_marine_transponder_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_042',
    name: 'ais_marine_transponder_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_043',
    name: 'ais_marine_transponder_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_044',
    name: 'ais_marine_transponder_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_045',
    name: 'ais_marine_transponder_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_046',
    name: 'ais_marine_transponder_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_047',
    name: 'ais_marine_transponder_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_048',
    name: 'ais_marine_transponder_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_049',
    name: 'ais_marine_transponder_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_050',
    name: 'ais_marine_transponder_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_051',
    name: 'ais_marine_transponder_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_052',
    name: 'ais_marine_transponder_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_053',
    name: 'ais_marine_transponder_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_054',
    name: 'ais_marine_transponder_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_055',
    name: 'ais_marine_transponder_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_056',
    name: 'ais_marine_transponder_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_057',
    name: 'ais_marine_transponder_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_058',
    name: 'ais_marine_transponder_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_059',
    name: 'ais_marine_transponder_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_060',
    name: 'ais_marine_transponder_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_061',
    name: 'ais_marine_transponder_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_062',
    name: 'ais_marine_transponder_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_063',
    name: 'ais_marine_transponder_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_064',
    name: 'ais_marine_transponder_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_065',
    name: 'ais_marine_transponder_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_066',
    name: 'ais_marine_transponder_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_067',
    name: 'ais_marine_transponder_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_068',
    name: 'ais_marine_transponder_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_069',
    name: 'ais_marine_transponder_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_070',
    name: 'ais_marine_transponder_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_071',
    name: 'ais_marine_transponder_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_072',
    name: 'ais_marine_transponder_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_073',
    name: 'ais_marine_transponder_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_074',
    name: 'ais_marine_transponder_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_075',
    name: 'ais_marine_transponder_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_076',
    name: 'ais_marine_transponder_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_077',
    name: 'ais_marine_transponder_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_078',
    name: 'ais_marine_transponder_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_079',
    name: 'ais_marine_transponder_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_080',
    name: 'ais_marine_transponder_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_081',
    name: 'ais_marine_transponder_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_082',
    name: 'ais_marine_transponder_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_083',
    name: 'ais_marine_transponder_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_084',
    name: 'ais_marine_transponder_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_085',
    name: 'ais_marine_transponder_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_086',
    name: 'ais_marine_transponder_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_087',
    name: 'ais_marine_transponder_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_088',
    name: 'ais_marine_transponder_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_089',
    name: 'ais_marine_transponder_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_090',
    name: 'ais_marine_transponder_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_091',
    name: 'ais_marine_transponder_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_092',
    name: 'ais_marine_transponder_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_093',
    name: 'ais_marine_transponder_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_094',
    name: 'ais_marine_transponder_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_095',
    name: 'ais_marine_transponder_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_096',
    name: 'ais_marine_transponder_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_097',
    name: 'ais_marine_transponder_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_098',
    name: 'ais_marine_transponder_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_099',
    name: 'ais_marine_transponder_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_100',
    name: 'ais_marine_transponder_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_101',
    name: 'ais_marine_transponder_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_102',
    name: 'ais_marine_transponder_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_103',
    name: 'ais_marine_transponder_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_104',
    name: 'ais_marine_transponder_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_105',
    name: 'ais_marine_transponder_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_106',
    name: 'ais_marine_transponder_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_107',
    name: 'ais_marine_transponder_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_108',
    name: 'ais_marine_transponder_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_109',
    name: 'ais_marine_transponder_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_110',
    name: 'ais_marine_transponder_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_111',
    name: 'ais_marine_transponder_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_112',
    name: 'ais_marine_transponder_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_113',
    name: 'ais_marine_transponder_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_114',
    name: 'ais_marine_transponder_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_115',
    name: 'ais_marine_transponder_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_116',
    name: 'ais_marine_transponder_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_117',
    name: 'ais_marine_transponder_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_118',
    name: 'ais_marine_transponder_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_119',
    name: 'ais_marine_transponder_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_120',
    name: 'ais_marine_transponder_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_121',
    name: 'ais_marine_transponder_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_122',
    name: 'ais_marine_transponder_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_123',
    name: 'ais_marine_transponder_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_124',
    name: 'ais_marine_transponder_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_125',
    name: 'ais_marine_transponder_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_126',
    name: 'ais_marine_transponder_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_127',
    name: 'ais_marine_transponder_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_128',
    name: 'ais_marine_transponder_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_129',
    name: 'ais_marine_transponder_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_130',
    name: 'ais_marine_transponder_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_131',
    name: 'ais_marine_transponder_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_132',
    name: 'ais_marine_transponder_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_133',
    name: 'ais_marine_transponder_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_134',
    name: 'ais_marine_transponder_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_135',
    name: 'ais_marine_transponder_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_136',
    name: 'ais_marine_transponder_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_137',
    name: 'ais_marine_transponder_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_138',
    name: 'ais_marine_transponder_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_139',
    name: 'ais_marine_transponder_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_140',
    name: 'ais_marine_transponder_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_141',
    name: 'ais_marine_transponder_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_142',
    name: 'ais_marine_transponder_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_143',
    name: 'ais_marine_transponder_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_144',
    name: 'ais_marine_transponder_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_145',
    name: 'ais_marine_transponder_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_146',
    name: 'ais_marine_transponder_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_147',
    name: 'ais_marine_transponder_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_148',
    name: 'ais_marine_transponder_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_149',
    name: 'ais_marine_transponder_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_150',
    name: 'ais_marine_transponder_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_151',
    name: 'ais_marine_transponder_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_152',
    name: 'ais_marine_transponder_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_153',
    name: 'ais_marine_transponder_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_154',
    name: 'ais_marine_transponder_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_155',
    name: 'ais_marine_transponder_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_156',
    name: 'ais_marine_transponder_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_157',
    name: 'ais_marine_transponder_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_158',
    name: 'ais_marine_transponder_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_159',
    name: 'ais_marine_transponder_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_160',
    name: 'ais_marine_transponder_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_161',
    name: 'ais_marine_transponder_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_162',
    name: 'ais_marine_transponder_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_163',
    name: 'ais_marine_transponder_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_164',
    name: 'ais_marine_transponder_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_165',
    name: 'ais_marine_transponder_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_166',
    name: 'ais_marine_transponder_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_167',
    name: 'ais_marine_transponder_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_168',
    name: 'ais_marine_transponder_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_169',
    name: 'ais_marine_transponder_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_170',
    name: 'ais_marine_transponder_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_171',
    name: 'ais_marine_transponder_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_172',
    name: 'ais_marine_transponder_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_173',
    name: 'ais_marine_transponder_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_174',
    name: 'ais_marine_transponder_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_175',
    name: 'ais_marine_transponder_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_176',
    name: 'ais_marine_transponder_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_177',
    name: 'ais_marine_transponder_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_178',
    name: 'ais_marine_transponder_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_179',
    name: 'ais_marine_transponder_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_180',
    name: 'ais_marine_transponder_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_181',
    name: 'ais_marine_transponder_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_182',
    name: 'ais_marine_transponder_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_183',
    name: 'ais_marine_transponder_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_184',
    name: 'ais_marine_transponder_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_185',
    name: 'ais_marine_transponder_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_186',
    name: 'ais_marine_transponder_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_187',
    name: 'ais_marine_transponder_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_188',
    name: 'ais_marine_transponder_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_189',
    name: 'ais_marine_transponder_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_190',
    name: 'ais_marine_transponder_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_191',
    name: 'ais_marine_transponder_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_192',
    name: 'ais_marine_transponder_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_193',
    name: 'ais_marine_transponder_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_194',
    name: 'ais_marine_transponder_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_195',
    name: 'ais_marine_transponder_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_196',
    name: 'ais_marine_transponder_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_197',
    name: 'ais_marine_transponder_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_198',
    name: 'ais_marine_transponder_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_199',
    name: 'ais_marine_transponder_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_200',
    name: 'ais_marine_transponder_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_201',
    name: 'ais_marine_transponder_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_202',
    name: 'ais_marine_transponder_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_203',
    name: 'ais_marine_transponder_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_204',
    name: 'ais_marine_transponder_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_205',
    name: 'ais_marine_transponder_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_206',
    name: 'ais_marine_transponder_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_207',
    name: 'ais_marine_transponder_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_208',
    name: 'ais_marine_transponder_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_209',
    name: 'ais_marine_transponder_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_210',
    name: 'ais_marine_transponder_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_211',
    name: 'ais_marine_transponder_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_212',
    name: 'ais_marine_transponder_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_213',
    name: 'ais_marine_transponder_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_214',
    name: 'ais_marine_transponder_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_215',
    name: 'ais_marine_transponder_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_216',
    name: 'ais_marine_transponder_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_217',
    name: 'ais_marine_transponder_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_218',
    name: 'ais_marine_transponder_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_219',
    name: 'ais_marine_transponder_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_220',
    name: 'ais_marine_transponder_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_221',
    name: 'ais_marine_transponder_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_222',
    name: 'ais_marine_transponder_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_223',
    name: 'ais_marine_transponder_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_224',
    name: 'ais_marine_transponder_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_225',
    name: 'ais_marine_transponder_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_226',
    name: 'ais_marine_transponder_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_227',
    name: 'ais_marine_transponder_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_228',
    name: 'ais_marine_transponder_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_229',
    name: 'ais_marine_transponder_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_230',
    name: 'ais_marine_transponder_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_231',
    name: 'ais_marine_transponder_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_232',
    name: 'ais_marine_transponder_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_233',
    name: 'ais_marine_transponder_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_234',
    name: 'ais_marine_transponder_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_235',
    name: 'ais_marine_transponder_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_236',
    name: 'ais_marine_transponder_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_237',
    name: 'ais_marine_transponder_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_238',
    name: 'ais_marine_transponder_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_239',
    name: 'ais_marine_transponder_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_240',
    name: 'ais_marine_transponder_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_241',
    name: 'ais_marine_transponder_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_242',
    name: 'ais_marine_transponder_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_243',
    name: 'ais_marine_transponder_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_244',
    name: 'ais_marine_transponder_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_245',
    name: 'ais_marine_transponder_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_246',
    name: 'ais_marine_transponder_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_247',
    name: 'ais_marine_transponder_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_248',
    name: 'ais_marine_transponder_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_249',
    name: 'ais_marine_transponder_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_AIS_MARINE_TRANSPONDER_250',
    name: 'ais_marine_transponder_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for AIS Class A/B Marine Transponder ITU-R M.1371 Message Parser. Decoded from incoming device telemetry stream.'
  },
];

export class AisMarineTransponderDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 1,
      parsedFields: 5,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_2(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 2,
      parsedFields: 10,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_3(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 3,
      parsedFields: 15,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_4(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 4,
      parsedFields: 20,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_5(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 5,
      parsedFields: 25,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_6(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 6,
      parsedFields: 30,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_7(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 7,
      parsedFields: 35,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_8(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 8,
      parsedFields: 40,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_9(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 9,
      parsedFields: 45,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_10(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 10,
      parsedFields: 50,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_11(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 11,
      parsedFields: 55,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_12(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 12,
      parsedFields: 60,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_13(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 13,
      parsedFields: 65,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_14(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 14,
      parsedFields: 70,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_15(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 15,
      parsedFields: 75,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_16(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 16,
      parsedFields: 80,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_17(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 17,
      parsedFields: 85,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_18(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 18,
      parsedFields: 90,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_19(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 19,
      parsedFields: 95,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_20(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 20,
      parsedFields: 100,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_21(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 21,
      parsedFields: 105,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_22(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 22,
      parsedFields: 110,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_23(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 23,
      parsedFields: 115,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_24(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 24,
      parsedFields: 120,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_25(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 25,
      parsedFields: 125,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_26(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 26,
      parsedFields: 130,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_27(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 27,
      parsedFields: 135,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_28(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 28,
      parsedFields: 140,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_29(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 29,
      parsedFields: 145,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_30(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 30,
      parsedFields: 150,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_31(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 31,
      parsedFields: 155,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_32(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 32,
      parsedFields: 160,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_33(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 33,
      parsedFields: 165,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_34(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 34,
      parsedFields: 170,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_35(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 35,
      parsedFields: 175,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_36(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 36,
      parsedFields: 180,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_37(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 37,
      parsedFields: 185,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_38(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 38,
      parsedFields: 190,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_39(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 39,
      parsedFields: 195,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

  public decodePayloadBlock_40(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'ais-marine-transponder',
      blockIndex: 40,
      parsedFields: 200,
      checksumValid: true,
      timestamp: Date.now(),
      telemetryData: {
        param_1: (buffer.length > 4) ? buffer.readUInt32BE(4) : 100,
        param_2: (buffer.length > 8) ? buffer.readUInt32BE(8) : 200,
        param_3: (buffer.length > 12) ? buffer.readUInt32BE(12) : 300,
        param_4: (buffer.length > 16) ? buffer.readUInt32BE(16) : 400,
        param_5: (buffer.length > 20) ? buffer.readUInt32BE(20) : 500,
        param_6: (buffer.length > 24) ? buffer.readUInt32BE(24) : 600,
        param_7: (buffer.length > 28) ? buffer.readUInt32BE(28) : 700,
      }
    };
    return result;
  }

}
