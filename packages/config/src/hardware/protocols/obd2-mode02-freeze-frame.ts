/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder
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

export const OBD2_MODE02_FREEZE_FRAME_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_001',
    name: 'obd2_mode02_freeze_frame_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_002',
    name: 'obd2_mode02_freeze_frame_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_003',
    name: 'obd2_mode02_freeze_frame_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_004',
    name: 'obd2_mode02_freeze_frame_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_005',
    name: 'obd2_mode02_freeze_frame_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_006',
    name: 'obd2_mode02_freeze_frame_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_007',
    name: 'obd2_mode02_freeze_frame_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_008',
    name: 'obd2_mode02_freeze_frame_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_009',
    name: 'obd2_mode02_freeze_frame_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_010',
    name: 'obd2_mode02_freeze_frame_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_011',
    name: 'obd2_mode02_freeze_frame_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_012',
    name: 'obd2_mode02_freeze_frame_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_013',
    name: 'obd2_mode02_freeze_frame_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_014',
    name: 'obd2_mode02_freeze_frame_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_015',
    name: 'obd2_mode02_freeze_frame_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_016',
    name: 'obd2_mode02_freeze_frame_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_017',
    name: 'obd2_mode02_freeze_frame_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_018',
    name: 'obd2_mode02_freeze_frame_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_019',
    name: 'obd2_mode02_freeze_frame_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_020',
    name: 'obd2_mode02_freeze_frame_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_021',
    name: 'obd2_mode02_freeze_frame_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_022',
    name: 'obd2_mode02_freeze_frame_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_023',
    name: 'obd2_mode02_freeze_frame_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_024',
    name: 'obd2_mode02_freeze_frame_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_025',
    name: 'obd2_mode02_freeze_frame_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_026',
    name: 'obd2_mode02_freeze_frame_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_027',
    name: 'obd2_mode02_freeze_frame_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_028',
    name: 'obd2_mode02_freeze_frame_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_029',
    name: 'obd2_mode02_freeze_frame_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_030',
    name: 'obd2_mode02_freeze_frame_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_031',
    name: 'obd2_mode02_freeze_frame_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_032',
    name: 'obd2_mode02_freeze_frame_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_033',
    name: 'obd2_mode02_freeze_frame_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_034',
    name: 'obd2_mode02_freeze_frame_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_035',
    name: 'obd2_mode02_freeze_frame_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_036',
    name: 'obd2_mode02_freeze_frame_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_037',
    name: 'obd2_mode02_freeze_frame_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_038',
    name: 'obd2_mode02_freeze_frame_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_039',
    name: 'obd2_mode02_freeze_frame_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_040',
    name: 'obd2_mode02_freeze_frame_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_041',
    name: 'obd2_mode02_freeze_frame_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_042',
    name: 'obd2_mode02_freeze_frame_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_043',
    name: 'obd2_mode02_freeze_frame_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_044',
    name: 'obd2_mode02_freeze_frame_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_045',
    name: 'obd2_mode02_freeze_frame_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_046',
    name: 'obd2_mode02_freeze_frame_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_047',
    name: 'obd2_mode02_freeze_frame_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_048',
    name: 'obd2_mode02_freeze_frame_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_049',
    name: 'obd2_mode02_freeze_frame_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_050',
    name: 'obd2_mode02_freeze_frame_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_051',
    name: 'obd2_mode02_freeze_frame_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_052',
    name: 'obd2_mode02_freeze_frame_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_053',
    name: 'obd2_mode02_freeze_frame_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_054',
    name: 'obd2_mode02_freeze_frame_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_055',
    name: 'obd2_mode02_freeze_frame_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_056',
    name: 'obd2_mode02_freeze_frame_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_057',
    name: 'obd2_mode02_freeze_frame_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_058',
    name: 'obd2_mode02_freeze_frame_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_059',
    name: 'obd2_mode02_freeze_frame_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_060',
    name: 'obd2_mode02_freeze_frame_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_061',
    name: 'obd2_mode02_freeze_frame_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_062',
    name: 'obd2_mode02_freeze_frame_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_063',
    name: 'obd2_mode02_freeze_frame_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_064',
    name: 'obd2_mode02_freeze_frame_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_065',
    name: 'obd2_mode02_freeze_frame_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_066',
    name: 'obd2_mode02_freeze_frame_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_067',
    name: 'obd2_mode02_freeze_frame_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_068',
    name: 'obd2_mode02_freeze_frame_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_069',
    name: 'obd2_mode02_freeze_frame_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_070',
    name: 'obd2_mode02_freeze_frame_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_071',
    name: 'obd2_mode02_freeze_frame_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_072',
    name: 'obd2_mode02_freeze_frame_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_073',
    name: 'obd2_mode02_freeze_frame_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_074',
    name: 'obd2_mode02_freeze_frame_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_075',
    name: 'obd2_mode02_freeze_frame_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_076',
    name: 'obd2_mode02_freeze_frame_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_077',
    name: 'obd2_mode02_freeze_frame_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_078',
    name: 'obd2_mode02_freeze_frame_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_079',
    name: 'obd2_mode02_freeze_frame_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_080',
    name: 'obd2_mode02_freeze_frame_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_081',
    name: 'obd2_mode02_freeze_frame_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_082',
    name: 'obd2_mode02_freeze_frame_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_083',
    name: 'obd2_mode02_freeze_frame_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_084',
    name: 'obd2_mode02_freeze_frame_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_085',
    name: 'obd2_mode02_freeze_frame_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_086',
    name: 'obd2_mode02_freeze_frame_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_087',
    name: 'obd2_mode02_freeze_frame_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_088',
    name: 'obd2_mode02_freeze_frame_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_089',
    name: 'obd2_mode02_freeze_frame_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_090',
    name: 'obd2_mode02_freeze_frame_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_091',
    name: 'obd2_mode02_freeze_frame_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_092',
    name: 'obd2_mode02_freeze_frame_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_093',
    name: 'obd2_mode02_freeze_frame_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_094',
    name: 'obd2_mode02_freeze_frame_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_095',
    name: 'obd2_mode02_freeze_frame_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_096',
    name: 'obd2_mode02_freeze_frame_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_097',
    name: 'obd2_mode02_freeze_frame_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_098',
    name: 'obd2_mode02_freeze_frame_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_099',
    name: 'obd2_mode02_freeze_frame_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_100',
    name: 'obd2_mode02_freeze_frame_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_101',
    name: 'obd2_mode02_freeze_frame_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_102',
    name: 'obd2_mode02_freeze_frame_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_103',
    name: 'obd2_mode02_freeze_frame_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_104',
    name: 'obd2_mode02_freeze_frame_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_105',
    name: 'obd2_mode02_freeze_frame_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_106',
    name: 'obd2_mode02_freeze_frame_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_107',
    name: 'obd2_mode02_freeze_frame_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_108',
    name: 'obd2_mode02_freeze_frame_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_109',
    name: 'obd2_mode02_freeze_frame_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_110',
    name: 'obd2_mode02_freeze_frame_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_111',
    name: 'obd2_mode02_freeze_frame_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_112',
    name: 'obd2_mode02_freeze_frame_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_113',
    name: 'obd2_mode02_freeze_frame_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_114',
    name: 'obd2_mode02_freeze_frame_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_115',
    name: 'obd2_mode02_freeze_frame_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_116',
    name: 'obd2_mode02_freeze_frame_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_117',
    name: 'obd2_mode02_freeze_frame_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_118',
    name: 'obd2_mode02_freeze_frame_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_119',
    name: 'obd2_mode02_freeze_frame_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_120',
    name: 'obd2_mode02_freeze_frame_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_121',
    name: 'obd2_mode02_freeze_frame_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_122',
    name: 'obd2_mode02_freeze_frame_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_123',
    name: 'obd2_mode02_freeze_frame_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_124',
    name: 'obd2_mode02_freeze_frame_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_125',
    name: 'obd2_mode02_freeze_frame_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_126',
    name: 'obd2_mode02_freeze_frame_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_127',
    name: 'obd2_mode02_freeze_frame_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_128',
    name: 'obd2_mode02_freeze_frame_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_129',
    name: 'obd2_mode02_freeze_frame_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_130',
    name: 'obd2_mode02_freeze_frame_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_131',
    name: 'obd2_mode02_freeze_frame_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_132',
    name: 'obd2_mode02_freeze_frame_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_133',
    name: 'obd2_mode02_freeze_frame_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_134',
    name: 'obd2_mode02_freeze_frame_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_135',
    name: 'obd2_mode02_freeze_frame_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_136',
    name: 'obd2_mode02_freeze_frame_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_137',
    name: 'obd2_mode02_freeze_frame_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_138',
    name: 'obd2_mode02_freeze_frame_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_139',
    name: 'obd2_mode02_freeze_frame_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_140',
    name: 'obd2_mode02_freeze_frame_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_141',
    name: 'obd2_mode02_freeze_frame_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_142',
    name: 'obd2_mode02_freeze_frame_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_143',
    name: 'obd2_mode02_freeze_frame_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_144',
    name: 'obd2_mode02_freeze_frame_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_145',
    name: 'obd2_mode02_freeze_frame_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_146',
    name: 'obd2_mode02_freeze_frame_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_147',
    name: 'obd2_mode02_freeze_frame_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_148',
    name: 'obd2_mode02_freeze_frame_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_149',
    name: 'obd2_mode02_freeze_frame_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_150',
    name: 'obd2_mode02_freeze_frame_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_151',
    name: 'obd2_mode02_freeze_frame_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_152',
    name: 'obd2_mode02_freeze_frame_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_153',
    name: 'obd2_mode02_freeze_frame_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_154',
    name: 'obd2_mode02_freeze_frame_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_155',
    name: 'obd2_mode02_freeze_frame_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_156',
    name: 'obd2_mode02_freeze_frame_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_157',
    name: 'obd2_mode02_freeze_frame_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_158',
    name: 'obd2_mode02_freeze_frame_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_159',
    name: 'obd2_mode02_freeze_frame_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_160',
    name: 'obd2_mode02_freeze_frame_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_161',
    name: 'obd2_mode02_freeze_frame_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_162',
    name: 'obd2_mode02_freeze_frame_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_163',
    name: 'obd2_mode02_freeze_frame_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_164',
    name: 'obd2_mode02_freeze_frame_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_165',
    name: 'obd2_mode02_freeze_frame_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_166',
    name: 'obd2_mode02_freeze_frame_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_167',
    name: 'obd2_mode02_freeze_frame_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_168',
    name: 'obd2_mode02_freeze_frame_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_169',
    name: 'obd2_mode02_freeze_frame_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_170',
    name: 'obd2_mode02_freeze_frame_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_171',
    name: 'obd2_mode02_freeze_frame_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_172',
    name: 'obd2_mode02_freeze_frame_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_173',
    name: 'obd2_mode02_freeze_frame_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_174',
    name: 'obd2_mode02_freeze_frame_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_175',
    name: 'obd2_mode02_freeze_frame_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_176',
    name: 'obd2_mode02_freeze_frame_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_177',
    name: 'obd2_mode02_freeze_frame_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_178',
    name: 'obd2_mode02_freeze_frame_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_179',
    name: 'obd2_mode02_freeze_frame_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_180',
    name: 'obd2_mode02_freeze_frame_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_181',
    name: 'obd2_mode02_freeze_frame_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_182',
    name: 'obd2_mode02_freeze_frame_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_183',
    name: 'obd2_mode02_freeze_frame_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_184',
    name: 'obd2_mode02_freeze_frame_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_185',
    name: 'obd2_mode02_freeze_frame_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_186',
    name: 'obd2_mode02_freeze_frame_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_187',
    name: 'obd2_mode02_freeze_frame_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_188',
    name: 'obd2_mode02_freeze_frame_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_189',
    name: 'obd2_mode02_freeze_frame_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_190',
    name: 'obd2_mode02_freeze_frame_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_191',
    name: 'obd2_mode02_freeze_frame_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_192',
    name: 'obd2_mode02_freeze_frame_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_193',
    name: 'obd2_mode02_freeze_frame_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_194',
    name: 'obd2_mode02_freeze_frame_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_195',
    name: 'obd2_mode02_freeze_frame_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_196',
    name: 'obd2_mode02_freeze_frame_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_197',
    name: 'obd2_mode02_freeze_frame_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_198',
    name: 'obd2_mode02_freeze_frame_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_199',
    name: 'obd2_mode02_freeze_frame_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_200',
    name: 'obd2_mode02_freeze_frame_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_201',
    name: 'obd2_mode02_freeze_frame_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_202',
    name: 'obd2_mode02_freeze_frame_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_203',
    name: 'obd2_mode02_freeze_frame_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_204',
    name: 'obd2_mode02_freeze_frame_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_205',
    name: 'obd2_mode02_freeze_frame_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_206',
    name: 'obd2_mode02_freeze_frame_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_207',
    name: 'obd2_mode02_freeze_frame_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_208',
    name: 'obd2_mode02_freeze_frame_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_209',
    name: 'obd2_mode02_freeze_frame_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_210',
    name: 'obd2_mode02_freeze_frame_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_211',
    name: 'obd2_mode02_freeze_frame_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_212',
    name: 'obd2_mode02_freeze_frame_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_213',
    name: 'obd2_mode02_freeze_frame_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_214',
    name: 'obd2_mode02_freeze_frame_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_215',
    name: 'obd2_mode02_freeze_frame_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_216',
    name: 'obd2_mode02_freeze_frame_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_217',
    name: 'obd2_mode02_freeze_frame_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_218',
    name: 'obd2_mode02_freeze_frame_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_219',
    name: 'obd2_mode02_freeze_frame_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_220',
    name: 'obd2_mode02_freeze_frame_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_221',
    name: 'obd2_mode02_freeze_frame_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_222',
    name: 'obd2_mode02_freeze_frame_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_223',
    name: 'obd2_mode02_freeze_frame_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_224',
    name: 'obd2_mode02_freeze_frame_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_225',
    name: 'obd2_mode02_freeze_frame_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_226',
    name: 'obd2_mode02_freeze_frame_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_227',
    name: 'obd2_mode02_freeze_frame_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_228',
    name: 'obd2_mode02_freeze_frame_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_229',
    name: 'obd2_mode02_freeze_frame_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_230',
    name: 'obd2_mode02_freeze_frame_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_231',
    name: 'obd2_mode02_freeze_frame_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_232',
    name: 'obd2_mode02_freeze_frame_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_233',
    name: 'obd2_mode02_freeze_frame_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_234',
    name: 'obd2_mode02_freeze_frame_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_235',
    name: 'obd2_mode02_freeze_frame_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_236',
    name: 'obd2_mode02_freeze_frame_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_237',
    name: 'obd2_mode02_freeze_frame_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_238',
    name: 'obd2_mode02_freeze_frame_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_239',
    name: 'obd2_mode02_freeze_frame_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_240',
    name: 'obd2_mode02_freeze_frame_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_241',
    name: 'obd2_mode02_freeze_frame_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_242',
    name: 'obd2_mode02_freeze_frame_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_243',
    name: 'obd2_mode02_freeze_frame_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_244',
    name: 'obd2_mode02_freeze_frame_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_245',
    name: 'obd2_mode02_freeze_frame_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_246',
    name: 'obd2_mode02_freeze_frame_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_247',
    name: 'obd2_mode02_freeze_frame_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_248',
    name: 'obd2_mode02_freeze_frame_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_249',
    name: 'obd2_mode02_freeze_frame_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_OBD2_MODE02_FREEZE_FRAME_250',
    name: 'obd2_mode02_freeze_frame_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for SAE J1979 OBD-II Mode 02 Freeze Frame Parameter Decoder. Decoded from incoming device telemetry stream.'
  },
];

export class Obd2Mode02FreezeFrameDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
      decoderId: 'obd2-mode02-freeze-frame',
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
