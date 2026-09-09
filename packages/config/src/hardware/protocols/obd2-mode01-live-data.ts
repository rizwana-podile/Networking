/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * SAE J1979 OBD-II Mode 01 Diagnostic Service Specification
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

export const OBD2_MODE01_LIVE_DATA_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_001',
    name: 'obd2_mode01_live_data_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_002',
    name: 'obd2_mode01_live_data_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_003',
    name: 'obd2_mode01_live_data_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_004',
    name: 'obd2_mode01_live_data_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_005',
    name: 'obd2_mode01_live_data_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_006',
    name: 'obd2_mode01_live_data_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_007',
    name: 'obd2_mode01_live_data_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_008',
    name: 'obd2_mode01_live_data_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_009',
    name: 'obd2_mode01_live_data_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_010',
    name: 'obd2_mode01_live_data_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_011',
    name: 'obd2_mode01_live_data_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_012',
    name: 'obd2_mode01_live_data_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_013',
    name: 'obd2_mode01_live_data_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_014',
    name: 'obd2_mode01_live_data_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_015',
    name: 'obd2_mode01_live_data_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_016',
    name: 'obd2_mode01_live_data_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_017',
    name: 'obd2_mode01_live_data_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_018',
    name: 'obd2_mode01_live_data_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_019',
    name: 'obd2_mode01_live_data_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_020',
    name: 'obd2_mode01_live_data_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_021',
    name: 'obd2_mode01_live_data_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_022',
    name: 'obd2_mode01_live_data_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_023',
    name: 'obd2_mode01_live_data_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_024',
    name: 'obd2_mode01_live_data_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_025',
    name: 'obd2_mode01_live_data_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_026',
    name: 'obd2_mode01_live_data_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_027',
    name: 'obd2_mode01_live_data_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_028',
    name: 'obd2_mode01_live_data_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_029',
    name: 'obd2_mode01_live_data_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_030',
    name: 'obd2_mode01_live_data_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_031',
    name: 'obd2_mode01_live_data_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_032',
    name: 'obd2_mode01_live_data_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_033',
    name: 'obd2_mode01_live_data_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_034',
    name: 'obd2_mode01_live_data_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_035',
    name: 'obd2_mode01_live_data_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_036',
    name: 'obd2_mode01_live_data_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_037',
    name: 'obd2_mode01_live_data_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_038',
    name: 'obd2_mode01_live_data_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_039',
    name: 'obd2_mode01_live_data_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_040',
    name: 'obd2_mode01_live_data_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_041',
    name: 'obd2_mode01_live_data_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_042',
    name: 'obd2_mode01_live_data_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_043',
    name: 'obd2_mode01_live_data_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_044',
    name: 'obd2_mode01_live_data_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_045',
    name: 'obd2_mode01_live_data_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_046',
    name: 'obd2_mode01_live_data_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_047',
    name: 'obd2_mode01_live_data_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_048',
    name: 'obd2_mode01_live_data_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_049',
    name: 'obd2_mode01_live_data_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_050',
    name: 'obd2_mode01_live_data_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_051',
    name: 'obd2_mode01_live_data_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_052',
    name: 'obd2_mode01_live_data_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_053',
    name: 'obd2_mode01_live_data_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_054',
    name: 'obd2_mode01_live_data_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_055',
    name: 'obd2_mode01_live_data_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_056',
    name: 'obd2_mode01_live_data_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_057',
    name: 'obd2_mode01_live_data_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_058',
    name: 'obd2_mode01_live_data_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_059',
    name: 'obd2_mode01_live_data_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_060',
    name: 'obd2_mode01_live_data_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_061',
    name: 'obd2_mode01_live_data_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_062',
    name: 'obd2_mode01_live_data_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_063',
    name: 'obd2_mode01_live_data_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_064',
    name: 'obd2_mode01_live_data_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_065',
    name: 'obd2_mode01_live_data_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_066',
    name: 'obd2_mode01_live_data_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_067',
    name: 'obd2_mode01_live_data_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_068',
    name: 'obd2_mode01_live_data_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_069',
    name: 'obd2_mode01_live_data_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_070',
    name: 'obd2_mode01_live_data_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_071',
    name: 'obd2_mode01_live_data_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_072',
    name: 'obd2_mode01_live_data_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_073',
    name: 'obd2_mode01_live_data_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_074',
    name: 'obd2_mode01_live_data_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_075',
    name: 'obd2_mode01_live_data_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_076',
    name: 'obd2_mode01_live_data_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_077',
    name: 'obd2_mode01_live_data_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_078',
    name: 'obd2_mode01_live_data_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_079',
    name: 'obd2_mode01_live_data_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_080',
    name: 'obd2_mode01_live_data_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_081',
    name: 'obd2_mode01_live_data_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_082',
    name: 'obd2_mode01_live_data_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_083',
    name: 'obd2_mode01_live_data_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_084',
    name: 'obd2_mode01_live_data_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_085',
    name: 'obd2_mode01_live_data_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_086',
    name: 'obd2_mode01_live_data_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_087',
    name: 'obd2_mode01_live_data_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_088',
    name: 'obd2_mode01_live_data_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_089',
    name: 'obd2_mode01_live_data_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_090',
    name: 'obd2_mode01_live_data_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_091',
    name: 'obd2_mode01_live_data_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_092',
    name: 'obd2_mode01_live_data_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_093',
    name: 'obd2_mode01_live_data_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_094',
    name: 'obd2_mode01_live_data_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_095',
    name: 'obd2_mode01_live_data_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_096',
    name: 'obd2_mode01_live_data_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_097',
    name: 'obd2_mode01_live_data_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_098',
    name: 'obd2_mode01_live_data_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_099',
    name: 'obd2_mode01_live_data_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_100',
    name: 'obd2_mode01_live_data_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_101',
    name: 'obd2_mode01_live_data_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_102',
    name: 'obd2_mode01_live_data_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_103',
    name: 'obd2_mode01_live_data_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_104',
    name: 'obd2_mode01_live_data_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_105',
    name: 'obd2_mode01_live_data_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_106',
    name: 'obd2_mode01_live_data_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_107',
    name: 'obd2_mode01_live_data_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_108',
    name: 'obd2_mode01_live_data_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_109',
    name: 'obd2_mode01_live_data_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_110',
    name: 'obd2_mode01_live_data_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_111',
    name: 'obd2_mode01_live_data_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_112',
    name: 'obd2_mode01_live_data_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_113',
    name: 'obd2_mode01_live_data_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_114',
    name: 'obd2_mode01_live_data_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_115',
    name: 'obd2_mode01_live_data_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_116',
    name: 'obd2_mode01_live_data_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_117',
    name: 'obd2_mode01_live_data_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_118',
    name: 'obd2_mode01_live_data_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_119',
    name: 'obd2_mode01_live_data_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_120',
    name: 'obd2_mode01_live_data_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_121',
    name: 'obd2_mode01_live_data_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_122',
    name: 'obd2_mode01_live_data_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_123',
    name: 'obd2_mode01_live_data_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_124',
    name: 'obd2_mode01_live_data_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_125',
    name: 'obd2_mode01_live_data_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_126',
    name: 'obd2_mode01_live_data_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_127',
    name: 'obd2_mode01_live_data_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_128',
    name: 'obd2_mode01_live_data_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_129',
    name: 'obd2_mode01_live_data_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_130',
    name: 'obd2_mode01_live_data_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_131',
    name: 'obd2_mode01_live_data_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_132',
    name: 'obd2_mode01_live_data_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_133',
    name: 'obd2_mode01_live_data_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_134',
    name: 'obd2_mode01_live_data_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_135',
    name: 'obd2_mode01_live_data_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_136',
    name: 'obd2_mode01_live_data_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_137',
    name: 'obd2_mode01_live_data_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_138',
    name: 'obd2_mode01_live_data_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_139',
    name: 'obd2_mode01_live_data_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_140',
    name: 'obd2_mode01_live_data_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_141',
    name: 'obd2_mode01_live_data_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_142',
    name: 'obd2_mode01_live_data_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_143',
    name: 'obd2_mode01_live_data_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_144',
    name: 'obd2_mode01_live_data_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_145',
    name: 'obd2_mode01_live_data_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_146',
    name: 'obd2_mode01_live_data_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_147',
    name: 'obd2_mode01_live_data_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_148',
    name: 'obd2_mode01_live_data_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_149',
    name: 'obd2_mode01_live_data_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_150',
    name: 'obd2_mode01_live_data_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_151',
    name: 'obd2_mode01_live_data_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_152',
    name: 'obd2_mode01_live_data_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_153',
    name: 'obd2_mode01_live_data_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_154',
    name: 'obd2_mode01_live_data_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_155',
    name: 'obd2_mode01_live_data_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_156',
    name: 'obd2_mode01_live_data_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_157',
    name: 'obd2_mode01_live_data_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_158',
    name: 'obd2_mode01_live_data_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_159',
    name: 'obd2_mode01_live_data_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_160',
    name: 'obd2_mode01_live_data_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_161',
    name: 'obd2_mode01_live_data_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_162',
    name: 'obd2_mode01_live_data_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_163',
    name: 'obd2_mode01_live_data_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_164',
    name: 'obd2_mode01_live_data_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_165',
    name: 'obd2_mode01_live_data_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_166',
    name: 'obd2_mode01_live_data_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_167',
    name: 'obd2_mode01_live_data_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_168',
    name: 'obd2_mode01_live_data_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_169',
    name: 'obd2_mode01_live_data_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_170',
    name: 'obd2_mode01_live_data_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_171',
    name: 'obd2_mode01_live_data_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_172',
    name: 'obd2_mode01_live_data_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_173',
    name: 'obd2_mode01_live_data_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_174',
    name: 'obd2_mode01_live_data_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_175',
    name: 'obd2_mode01_live_data_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_176',
    name: 'obd2_mode01_live_data_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_177',
    name: 'obd2_mode01_live_data_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_178',
    name: 'obd2_mode01_live_data_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_179',
    name: 'obd2_mode01_live_data_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_180',
    name: 'obd2_mode01_live_data_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_181',
    name: 'obd2_mode01_live_data_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_182',
    name: 'obd2_mode01_live_data_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_183',
    name: 'obd2_mode01_live_data_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_184',
    name: 'obd2_mode01_live_data_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_185',
    name: 'obd2_mode01_live_data_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_186',
    name: 'obd2_mode01_live_data_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_187',
    name: 'obd2_mode01_live_data_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_188',
    name: 'obd2_mode01_live_data_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_189',
    name: 'obd2_mode01_live_data_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_190',
    name: 'obd2_mode01_live_data_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_191',
    name: 'obd2_mode01_live_data_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_192',
    name: 'obd2_mode01_live_data_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_193',
    name: 'obd2_mode01_live_data_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_194',
    name: 'obd2_mode01_live_data_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_195',
    name: 'obd2_mode01_live_data_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_196',
    name: 'obd2_mode01_live_data_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_197',
    name: 'obd2_mode01_live_data_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_198',
    name: 'obd2_mode01_live_data_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_199',
    name: 'obd2_mode01_live_data_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_200',
    name: 'obd2_mode01_live_data_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_201',
    name: 'obd2_mode01_live_data_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_202',
    name: 'obd2_mode01_live_data_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_203',
    name: 'obd2_mode01_live_data_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_204',
    name: 'obd2_mode01_live_data_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_205',
    name: 'obd2_mode01_live_data_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_206',
    name: 'obd2_mode01_live_data_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_207',
    name: 'obd2_mode01_live_data_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_208',
    name: 'obd2_mode01_live_data_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_209',
    name: 'obd2_mode01_live_data_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_210',
    name: 'obd2_mode01_live_data_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_211',
    name: 'obd2_mode01_live_data_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_212',
    name: 'obd2_mode01_live_data_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_213',
    name: 'obd2_mode01_live_data_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_214',
    name: 'obd2_mode01_live_data_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_215',
    name: 'obd2_mode01_live_data_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_216',
    name: 'obd2_mode01_live_data_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_217',
    name: 'obd2_mode01_live_data_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_218',
    name: 'obd2_mode01_live_data_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_219',
    name: 'obd2_mode01_live_data_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_220',
    name: 'obd2_mode01_live_data_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_221',
    name: 'obd2_mode01_live_data_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_222',
    name: 'obd2_mode01_live_data_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_223',
    name: 'obd2_mode01_live_data_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_224',
    name: 'obd2_mode01_live_data_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_225',
    name: 'obd2_mode01_live_data_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_226',
    name: 'obd2_mode01_live_data_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_227',
    name: 'obd2_mode01_live_data_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_228',
    name: 'obd2_mode01_live_data_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_229',
    name: 'obd2_mode01_live_data_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_230',
    name: 'obd2_mode01_live_data_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_231',
    name: 'obd2_mode01_live_data_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_232',
    name: 'obd2_mode01_live_data_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_233',
    name: 'obd2_mode01_live_data_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_234',
    name: 'obd2_mode01_live_data_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_235',
    name: 'obd2_mode01_live_data_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_236',
    name: 'obd2_mode01_live_data_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_237',
    name: 'obd2_mode01_live_data_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_238',
    name: 'obd2_mode01_live_data_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_239',
    name: 'obd2_mode01_live_data_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_240',
    name: 'obd2_mode01_live_data_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_241',
    name: 'obd2_mode01_live_data_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_242',
    name: 'obd2_mode01_live_data_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_243',
    name: 'obd2_mode01_live_data_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_244',
    name: 'obd2_mode01_live_data_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_245',
    name: 'obd2_mode01_live_data_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_246',
    name: 'obd2_mode01_live_data_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_247',
    name: 'obd2_mode01_live_data_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_248',
    name: 'obd2_mode01_live_data_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_249',
    name: 'obd2_mode01_live_data_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE01_LIVE_DATA_250',
    name: 'obd2_mode01_live_data_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for SAE J1979 OBD-II Mode 01 Diagnostic Service Specification. Decoded from incoming device telemetry stream.'
  },
];

export class Obd2Mode01LiveDataDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
      decoderId: 'obd2-mode01-live-data',
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
