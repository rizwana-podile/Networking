/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * CalAmp LMU-Direct Vehicle Tracker Protocol Parser
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

export const CALAMP_LM_DIRECT_PARSER_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_001',
    name: 'calamp_lm_direct_parser_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_002',
    name: 'calamp_lm_direct_parser_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_003',
    name: 'calamp_lm_direct_parser_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_004',
    name: 'calamp_lm_direct_parser_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_005',
    name: 'calamp_lm_direct_parser_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_006',
    name: 'calamp_lm_direct_parser_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_007',
    name: 'calamp_lm_direct_parser_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_008',
    name: 'calamp_lm_direct_parser_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_009',
    name: 'calamp_lm_direct_parser_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_010',
    name: 'calamp_lm_direct_parser_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_011',
    name: 'calamp_lm_direct_parser_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_012',
    name: 'calamp_lm_direct_parser_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_013',
    name: 'calamp_lm_direct_parser_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_014',
    name: 'calamp_lm_direct_parser_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_015',
    name: 'calamp_lm_direct_parser_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_016',
    name: 'calamp_lm_direct_parser_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_017',
    name: 'calamp_lm_direct_parser_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_018',
    name: 'calamp_lm_direct_parser_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_019',
    name: 'calamp_lm_direct_parser_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_020',
    name: 'calamp_lm_direct_parser_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_021',
    name: 'calamp_lm_direct_parser_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_022',
    name: 'calamp_lm_direct_parser_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_023',
    name: 'calamp_lm_direct_parser_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_024',
    name: 'calamp_lm_direct_parser_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_025',
    name: 'calamp_lm_direct_parser_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_026',
    name: 'calamp_lm_direct_parser_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_027',
    name: 'calamp_lm_direct_parser_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_028',
    name: 'calamp_lm_direct_parser_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_029',
    name: 'calamp_lm_direct_parser_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_030',
    name: 'calamp_lm_direct_parser_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_031',
    name: 'calamp_lm_direct_parser_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_032',
    name: 'calamp_lm_direct_parser_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_033',
    name: 'calamp_lm_direct_parser_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_034',
    name: 'calamp_lm_direct_parser_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_035',
    name: 'calamp_lm_direct_parser_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_036',
    name: 'calamp_lm_direct_parser_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_037',
    name: 'calamp_lm_direct_parser_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_038',
    name: 'calamp_lm_direct_parser_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_039',
    name: 'calamp_lm_direct_parser_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_040',
    name: 'calamp_lm_direct_parser_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_041',
    name: 'calamp_lm_direct_parser_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_042',
    name: 'calamp_lm_direct_parser_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_043',
    name: 'calamp_lm_direct_parser_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_044',
    name: 'calamp_lm_direct_parser_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_045',
    name: 'calamp_lm_direct_parser_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_046',
    name: 'calamp_lm_direct_parser_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_047',
    name: 'calamp_lm_direct_parser_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_048',
    name: 'calamp_lm_direct_parser_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_049',
    name: 'calamp_lm_direct_parser_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_050',
    name: 'calamp_lm_direct_parser_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_051',
    name: 'calamp_lm_direct_parser_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_052',
    name: 'calamp_lm_direct_parser_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_053',
    name: 'calamp_lm_direct_parser_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_054',
    name: 'calamp_lm_direct_parser_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_055',
    name: 'calamp_lm_direct_parser_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_056',
    name: 'calamp_lm_direct_parser_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_057',
    name: 'calamp_lm_direct_parser_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_058',
    name: 'calamp_lm_direct_parser_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_059',
    name: 'calamp_lm_direct_parser_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_060',
    name: 'calamp_lm_direct_parser_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_061',
    name: 'calamp_lm_direct_parser_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_062',
    name: 'calamp_lm_direct_parser_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_063',
    name: 'calamp_lm_direct_parser_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_064',
    name: 'calamp_lm_direct_parser_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_065',
    name: 'calamp_lm_direct_parser_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_066',
    name: 'calamp_lm_direct_parser_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_067',
    name: 'calamp_lm_direct_parser_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_068',
    name: 'calamp_lm_direct_parser_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_069',
    name: 'calamp_lm_direct_parser_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_070',
    name: 'calamp_lm_direct_parser_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_071',
    name: 'calamp_lm_direct_parser_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_072',
    name: 'calamp_lm_direct_parser_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_073',
    name: 'calamp_lm_direct_parser_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_074',
    name: 'calamp_lm_direct_parser_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_075',
    name: 'calamp_lm_direct_parser_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_076',
    name: 'calamp_lm_direct_parser_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_077',
    name: 'calamp_lm_direct_parser_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_078',
    name: 'calamp_lm_direct_parser_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_079',
    name: 'calamp_lm_direct_parser_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_080',
    name: 'calamp_lm_direct_parser_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_081',
    name: 'calamp_lm_direct_parser_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_082',
    name: 'calamp_lm_direct_parser_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_083',
    name: 'calamp_lm_direct_parser_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_084',
    name: 'calamp_lm_direct_parser_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_085',
    name: 'calamp_lm_direct_parser_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_086',
    name: 'calamp_lm_direct_parser_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_087',
    name: 'calamp_lm_direct_parser_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_088',
    name: 'calamp_lm_direct_parser_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_089',
    name: 'calamp_lm_direct_parser_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_090',
    name: 'calamp_lm_direct_parser_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_091',
    name: 'calamp_lm_direct_parser_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_092',
    name: 'calamp_lm_direct_parser_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_093',
    name: 'calamp_lm_direct_parser_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_094',
    name: 'calamp_lm_direct_parser_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_095',
    name: 'calamp_lm_direct_parser_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_096',
    name: 'calamp_lm_direct_parser_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_097',
    name: 'calamp_lm_direct_parser_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_098',
    name: 'calamp_lm_direct_parser_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_099',
    name: 'calamp_lm_direct_parser_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_100',
    name: 'calamp_lm_direct_parser_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_101',
    name: 'calamp_lm_direct_parser_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_102',
    name: 'calamp_lm_direct_parser_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_103',
    name: 'calamp_lm_direct_parser_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_104',
    name: 'calamp_lm_direct_parser_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_105',
    name: 'calamp_lm_direct_parser_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_106',
    name: 'calamp_lm_direct_parser_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_107',
    name: 'calamp_lm_direct_parser_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_108',
    name: 'calamp_lm_direct_parser_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_109',
    name: 'calamp_lm_direct_parser_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_110',
    name: 'calamp_lm_direct_parser_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_111',
    name: 'calamp_lm_direct_parser_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_112',
    name: 'calamp_lm_direct_parser_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_113',
    name: 'calamp_lm_direct_parser_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_114',
    name: 'calamp_lm_direct_parser_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_115',
    name: 'calamp_lm_direct_parser_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_116',
    name: 'calamp_lm_direct_parser_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_117',
    name: 'calamp_lm_direct_parser_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_118',
    name: 'calamp_lm_direct_parser_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_119',
    name: 'calamp_lm_direct_parser_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_120',
    name: 'calamp_lm_direct_parser_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_121',
    name: 'calamp_lm_direct_parser_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_122',
    name: 'calamp_lm_direct_parser_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_123',
    name: 'calamp_lm_direct_parser_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_124',
    name: 'calamp_lm_direct_parser_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_125',
    name: 'calamp_lm_direct_parser_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_126',
    name: 'calamp_lm_direct_parser_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_127',
    name: 'calamp_lm_direct_parser_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_128',
    name: 'calamp_lm_direct_parser_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_129',
    name: 'calamp_lm_direct_parser_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_130',
    name: 'calamp_lm_direct_parser_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_131',
    name: 'calamp_lm_direct_parser_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_132',
    name: 'calamp_lm_direct_parser_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_133',
    name: 'calamp_lm_direct_parser_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_134',
    name: 'calamp_lm_direct_parser_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_135',
    name: 'calamp_lm_direct_parser_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_136',
    name: 'calamp_lm_direct_parser_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_137',
    name: 'calamp_lm_direct_parser_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_138',
    name: 'calamp_lm_direct_parser_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_139',
    name: 'calamp_lm_direct_parser_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_140',
    name: 'calamp_lm_direct_parser_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_141',
    name: 'calamp_lm_direct_parser_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_142',
    name: 'calamp_lm_direct_parser_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_143',
    name: 'calamp_lm_direct_parser_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_144',
    name: 'calamp_lm_direct_parser_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_145',
    name: 'calamp_lm_direct_parser_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_146',
    name: 'calamp_lm_direct_parser_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_147',
    name: 'calamp_lm_direct_parser_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_148',
    name: 'calamp_lm_direct_parser_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_149',
    name: 'calamp_lm_direct_parser_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_150',
    name: 'calamp_lm_direct_parser_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_151',
    name: 'calamp_lm_direct_parser_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_152',
    name: 'calamp_lm_direct_parser_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_153',
    name: 'calamp_lm_direct_parser_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_154',
    name: 'calamp_lm_direct_parser_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_155',
    name: 'calamp_lm_direct_parser_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_156',
    name: 'calamp_lm_direct_parser_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_157',
    name: 'calamp_lm_direct_parser_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_158',
    name: 'calamp_lm_direct_parser_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_159',
    name: 'calamp_lm_direct_parser_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_160',
    name: 'calamp_lm_direct_parser_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_161',
    name: 'calamp_lm_direct_parser_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_162',
    name: 'calamp_lm_direct_parser_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_163',
    name: 'calamp_lm_direct_parser_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_164',
    name: 'calamp_lm_direct_parser_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_165',
    name: 'calamp_lm_direct_parser_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_166',
    name: 'calamp_lm_direct_parser_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_167',
    name: 'calamp_lm_direct_parser_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_168',
    name: 'calamp_lm_direct_parser_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_169',
    name: 'calamp_lm_direct_parser_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_170',
    name: 'calamp_lm_direct_parser_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_171',
    name: 'calamp_lm_direct_parser_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_172',
    name: 'calamp_lm_direct_parser_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_173',
    name: 'calamp_lm_direct_parser_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_174',
    name: 'calamp_lm_direct_parser_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_175',
    name: 'calamp_lm_direct_parser_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_176',
    name: 'calamp_lm_direct_parser_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_177',
    name: 'calamp_lm_direct_parser_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_178',
    name: 'calamp_lm_direct_parser_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_179',
    name: 'calamp_lm_direct_parser_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_180',
    name: 'calamp_lm_direct_parser_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_181',
    name: 'calamp_lm_direct_parser_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_182',
    name: 'calamp_lm_direct_parser_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_183',
    name: 'calamp_lm_direct_parser_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_184',
    name: 'calamp_lm_direct_parser_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_185',
    name: 'calamp_lm_direct_parser_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_186',
    name: 'calamp_lm_direct_parser_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_187',
    name: 'calamp_lm_direct_parser_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_188',
    name: 'calamp_lm_direct_parser_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_189',
    name: 'calamp_lm_direct_parser_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_190',
    name: 'calamp_lm_direct_parser_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_191',
    name: 'calamp_lm_direct_parser_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_192',
    name: 'calamp_lm_direct_parser_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_193',
    name: 'calamp_lm_direct_parser_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_194',
    name: 'calamp_lm_direct_parser_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_195',
    name: 'calamp_lm_direct_parser_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_196',
    name: 'calamp_lm_direct_parser_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_197',
    name: 'calamp_lm_direct_parser_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_198',
    name: 'calamp_lm_direct_parser_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_199',
    name: 'calamp_lm_direct_parser_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_200',
    name: 'calamp_lm_direct_parser_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_201',
    name: 'calamp_lm_direct_parser_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_202',
    name: 'calamp_lm_direct_parser_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_203',
    name: 'calamp_lm_direct_parser_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_204',
    name: 'calamp_lm_direct_parser_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_205',
    name: 'calamp_lm_direct_parser_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_206',
    name: 'calamp_lm_direct_parser_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_207',
    name: 'calamp_lm_direct_parser_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_208',
    name: 'calamp_lm_direct_parser_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_209',
    name: 'calamp_lm_direct_parser_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_210',
    name: 'calamp_lm_direct_parser_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_211',
    name: 'calamp_lm_direct_parser_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_212',
    name: 'calamp_lm_direct_parser_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_213',
    name: 'calamp_lm_direct_parser_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_214',
    name: 'calamp_lm_direct_parser_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_215',
    name: 'calamp_lm_direct_parser_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_216',
    name: 'calamp_lm_direct_parser_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_217',
    name: 'calamp_lm_direct_parser_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_218',
    name: 'calamp_lm_direct_parser_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_219',
    name: 'calamp_lm_direct_parser_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_220',
    name: 'calamp_lm_direct_parser_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_221',
    name: 'calamp_lm_direct_parser_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_222',
    name: 'calamp_lm_direct_parser_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_223',
    name: 'calamp_lm_direct_parser_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_224',
    name: 'calamp_lm_direct_parser_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_225',
    name: 'calamp_lm_direct_parser_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_226',
    name: 'calamp_lm_direct_parser_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_227',
    name: 'calamp_lm_direct_parser_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_228',
    name: 'calamp_lm_direct_parser_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_229',
    name: 'calamp_lm_direct_parser_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_230',
    name: 'calamp_lm_direct_parser_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_231',
    name: 'calamp_lm_direct_parser_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_232',
    name: 'calamp_lm_direct_parser_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_233',
    name: 'calamp_lm_direct_parser_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_234',
    name: 'calamp_lm_direct_parser_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_235',
    name: 'calamp_lm_direct_parser_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_236',
    name: 'calamp_lm_direct_parser_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_237',
    name: 'calamp_lm_direct_parser_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_238',
    name: 'calamp_lm_direct_parser_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_239',
    name: 'calamp_lm_direct_parser_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_240',
    name: 'calamp_lm_direct_parser_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_241',
    name: 'calamp_lm_direct_parser_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_242',
    name: 'calamp_lm_direct_parser_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_243',
    name: 'calamp_lm_direct_parser_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_244',
    name: 'calamp_lm_direct_parser_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_245',
    name: 'calamp_lm_direct_parser_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_246',
    name: 'calamp_lm_direct_parser_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_247',
    name: 'calamp_lm_direct_parser_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_248',
    name: 'calamp_lm_direct_parser_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_249',
    name: 'calamp_lm_direct_parser_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_CALAMP_LM_DIRECT_PARSER_250',
    name: 'calamp_lm_direct_parser_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for CalAmp LMU-Direct Vehicle Tracker Protocol Parser. Decoded from incoming device telemetry stream.'
  },
];

export class CalampLmDirectParserDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
      decoderId: 'calamp-lm-direct-parser',
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
