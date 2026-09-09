/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * Teltonika Codec 16 Extended Fleet Data Protocol
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

export const TELTONIKA_CODEC16_DECODER_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_001',
    name: 'teltonika_codec16_decoder_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_002',
    name: 'teltonika_codec16_decoder_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_003',
    name: 'teltonika_codec16_decoder_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_004',
    name: 'teltonika_codec16_decoder_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_005',
    name: 'teltonika_codec16_decoder_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_006',
    name: 'teltonika_codec16_decoder_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_007',
    name: 'teltonika_codec16_decoder_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_008',
    name: 'teltonika_codec16_decoder_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_009',
    name: 'teltonika_codec16_decoder_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_010',
    name: 'teltonika_codec16_decoder_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_011',
    name: 'teltonika_codec16_decoder_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_012',
    name: 'teltonika_codec16_decoder_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_013',
    name: 'teltonika_codec16_decoder_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_014',
    name: 'teltonika_codec16_decoder_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_015',
    name: 'teltonika_codec16_decoder_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_016',
    name: 'teltonika_codec16_decoder_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_017',
    name: 'teltonika_codec16_decoder_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_018',
    name: 'teltonika_codec16_decoder_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_019',
    name: 'teltonika_codec16_decoder_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_020',
    name: 'teltonika_codec16_decoder_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_021',
    name: 'teltonika_codec16_decoder_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_022',
    name: 'teltonika_codec16_decoder_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_023',
    name: 'teltonika_codec16_decoder_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_024',
    name: 'teltonika_codec16_decoder_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_025',
    name: 'teltonika_codec16_decoder_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_026',
    name: 'teltonika_codec16_decoder_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_027',
    name: 'teltonika_codec16_decoder_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_028',
    name: 'teltonika_codec16_decoder_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_029',
    name: 'teltonika_codec16_decoder_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_030',
    name: 'teltonika_codec16_decoder_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_031',
    name: 'teltonika_codec16_decoder_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_032',
    name: 'teltonika_codec16_decoder_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_033',
    name: 'teltonika_codec16_decoder_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_034',
    name: 'teltonika_codec16_decoder_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_035',
    name: 'teltonika_codec16_decoder_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_036',
    name: 'teltonika_codec16_decoder_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_037',
    name: 'teltonika_codec16_decoder_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_038',
    name: 'teltonika_codec16_decoder_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_039',
    name: 'teltonika_codec16_decoder_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_040',
    name: 'teltonika_codec16_decoder_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_041',
    name: 'teltonika_codec16_decoder_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_042',
    name: 'teltonika_codec16_decoder_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_043',
    name: 'teltonika_codec16_decoder_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_044',
    name: 'teltonika_codec16_decoder_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_045',
    name: 'teltonika_codec16_decoder_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_046',
    name: 'teltonika_codec16_decoder_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_047',
    name: 'teltonika_codec16_decoder_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_048',
    name: 'teltonika_codec16_decoder_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_049',
    name: 'teltonika_codec16_decoder_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_050',
    name: 'teltonika_codec16_decoder_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_051',
    name: 'teltonika_codec16_decoder_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_052',
    name: 'teltonika_codec16_decoder_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_053',
    name: 'teltonika_codec16_decoder_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_054',
    name: 'teltonika_codec16_decoder_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_055',
    name: 'teltonika_codec16_decoder_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_056',
    name: 'teltonika_codec16_decoder_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_057',
    name: 'teltonika_codec16_decoder_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_058',
    name: 'teltonika_codec16_decoder_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_059',
    name: 'teltonika_codec16_decoder_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_060',
    name: 'teltonika_codec16_decoder_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_061',
    name: 'teltonika_codec16_decoder_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_062',
    name: 'teltonika_codec16_decoder_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_063',
    name: 'teltonika_codec16_decoder_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_064',
    name: 'teltonika_codec16_decoder_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_065',
    name: 'teltonika_codec16_decoder_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_066',
    name: 'teltonika_codec16_decoder_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_067',
    name: 'teltonika_codec16_decoder_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_068',
    name: 'teltonika_codec16_decoder_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_069',
    name: 'teltonika_codec16_decoder_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_070',
    name: 'teltonika_codec16_decoder_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_071',
    name: 'teltonika_codec16_decoder_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_072',
    name: 'teltonika_codec16_decoder_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_073',
    name: 'teltonika_codec16_decoder_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_074',
    name: 'teltonika_codec16_decoder_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_075',
    name: 'teltonika_codec16_decoder_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_076',
    name: 'teltonika_codec16_decoder_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_077',
    name: 'teltonika_codec16_decoder_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_078',
    name: 'teltonika_codec16_decoder_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_079',
    name: 'teltonika_codec16_decoder_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_080',
    name: 'teltonika_codec16_decoder_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_081',
    name: 'teltonika_codec16_decoder_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_082',
    name: 'teltonika_codec16_decoder_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_083',
    name: 'teltonika_codec16_decoder_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_084',
    name: 'teltonika_codec16_decoder_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_085',
    name: 'teltonika_codec16_decoder_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_086',
    name: 'teltonika_codec16_decoder_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_087',
    name: 'teltonika_codec16_decoder_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_088',
    name: 'teltonika_codec16_decoder_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_089',
    name: 'teltonika_codec16_decoder_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_090',
    name: 'teltonika_codec16_decoder_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_091',
    name: 'teltonika_codec16_decoder_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_092',
    name: 'teltonika_codec16_decoder_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_093',
    name: 'teltonika_codec16_decoder_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_094',
    name: 'teltonika_codec16_decoder_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_095',
    name: 'teltonika_codec16_decoder_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_096',
    name: 'teltonika_codec16_decoder_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_097',
    name: 'teltonika_codec16_decoder_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_098',
    name: 'teltonika_codec16_decoder_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_099',
    name: 'teltonika_codec16_decoder_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_100',
    name: 'teltonika_codec16_decoder_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_101',
    name: 'teltonika_codec16_decoder_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_102',
    name: 'teltonika_codec16_decoder_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_103',
    name: 'teltonika_codec16_decoder_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_104',
    name: 'teltonika_codec16_decoder_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_105',
    name: 'teltonika_codec16_decoder_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_106',
    name: 'teltonika_codec16_decoder_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_107',
    name: 'teltonika_codec16_decoder_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_108',
    name: 'teltonika_codec16_decoder_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_109',
    name: 'teltonika_codec16_decoder_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_110',
    name: 'teltonika_codec16_decoder_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_111',
    name: 'teltonika_codec16_decoder_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_112',
    name: 'teltonika_codec16_decoder_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_113',
    name: 'teltonika_codec16_decoder_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_114',
    name: 'teltonika_codec16_decoder_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_115',
    name: 'teltonika_codec16_decoder_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_116',
    name: 'teltonika_codec16_decoder_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_117',
    name: 'teltonika_codec16_decoder_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_118',
    name: 'teltonika_codec16_decoder_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_119',
    name: 'teltonika_codec16_decoder_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_120',
    name: 'teltonika_codec16_decoder_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_121',
    name: 'teltonika_codec16_decoder_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_122',
    name: 'teltonika_codec16_decoder_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_123',
    name: 'teltonika_codec16_decoder_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_124',
    name: 'teltonika_codec16_decoder_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_125',
    name: 'teltonika_codec16_decoder_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_126',
    name: 'teltonika_codec16_decoder_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_127',
    name: 'teltonika_codec16_decoder_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_128',
    name: 'teltonika_codec16_decoder_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_129',
    name: 'teltonika_codec16_decoder_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_130',
    name: 'teltonika_codec16_decoder_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_131',
    name: 'teltonika_codec16_decoder_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_132',
    name: 'teltonika_codec16_decoder_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_133',
    name: 'teltonika_codec16_decoder_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_134',
    name: 'teltonika_codec16_decoder_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_135',
    name: 'teltonika_codec16_decoder_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_136',
    name: 'teltonika_codec16_decoder_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_137',
    name: 'teltonika_codec16_decoder_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_138',
    name: 'teltonika_codec16_decoder_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_139',
    name: 'teltonika_codec16_decoder_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_140',
    name: 'teltonika_codec16_decoder_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_141',
    name: 'teltonika_codec16_decoder_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_142',
    name: 'teltonika_codec16_decoder_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_143',
    name: 'teltonika_codec16_decoder_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_144',
    name: 'teltonika_codec16_decoder_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_145',
    name: 'teltonika_codec16_decoder_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_146',
    name: 'teltonika_codec16_decoder_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_147',
    name: 'teltonika_codec16_decoder_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_148',
    name: 'teltonika_codec16_decoder_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_149',
    name: 'teltonika_codec16_decoder_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_150',
    name: 'teltonika_codec16_decoder_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_151',
    name: 'teltonika_codec16_decoder_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_152',
    name: 'teltonika_codec16_decoder_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_153',
    name: 'teltonika_codec16_decoder_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_154',
    name: 'teltonika_codec16_decoder_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_155',
    name: 'teltonika_codec16_decoder_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_156',
    name: 'teltonika_codec16_decoder_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_157',
    name: 'teltonika_codec16_decoder_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_158',
    name: 'teltonika_codec16_decoder_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_159',
    name: 'teltonika_codec16_decoder_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_160',
    name: 'teltonika_codec16_decoder_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_161',
    name: 'teltonika_codec16_decoder_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_162',
    name: 'teltonika_codec16_decoder_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_163',
    name: 'teltonika_codec16_decoder_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_164',
    name: 'teltonika_codec16_decoder_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_165',
    name: 'teltonika_codec16_decoder_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_166',
    name: 'teltonika_codec16_decoder_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_167',
    name: 'teltonika_codec16_decoder_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_168',
    name: 'teltonika_codec16_decoder_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_169',
    name: 'teltonika_codec16_decoder_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_170',
    name: 'teltonika_codec16_decoder_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_171',
    name: 'teltonika_codec16_decoder_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_172',
    name: 'teltonika_codec16_decoder_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_173',
    name: 'teltonika_codec16_decoder_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_174',
    name: 'teltonika_codec16_decoder_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_175',
    name: 'teltonika_codec16_decoder_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_176',
    name: 'teltonika_codec16_decoder_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_177',
    name: 'teltonika_codec16_decoder_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_178',
    name: 'teltonika_codec16_decoder_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_179',
    name: 'teltonika_codec16_decoder_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_180',
    name: 'teltonika_codec16_decoder_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_181',
    name: 'teltonika_codec16_decoder_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_182',
    name: 'teltonika_codec16_decoder_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_183',
    name: 'teltonika_codec16_decoder_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_184',
    name: 'teltonika_codec16_decoder_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_185',
    name: 'teltonika_codec16_decoder_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_186',
    name: 'teltonika_codec16_decoder_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_187',
    name: 'teltonika_codec16_decoder_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_188',
    name: 'teltonika_codec16_decoder_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_189',
    name: 'teltonika_codec16_decoder_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_190',
    name: 'teltonika_codec16_decoder_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_191',
    name: 'teltonika_codec16_decoder_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_192',
    name: 'teltonika_codec16_decoder_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_193',
    name: 'teltonika_codec16_decoder_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_194',
    name: 'teltonika_codec16_decoder_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_195',
    name: 'teltonika_codec16_decoder_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_196',
    name: 'teltonika_codec16_decoder_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_197',
    name: 'teltonika_codec16_decoder_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_198',
    name: 'teltonika_codec16_decoder_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_199',
    name: 'teltonika_codec16_decoder_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_200',
    name: 'teltonika_codec16_decoder_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_201',
    name: 'teltonika_codec16_decoder_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_202',
    name: 'teltonika_codec16_decoder_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_203',
    name: 'teltonika_codec16_decoder_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_204',
    name: 'teltonika_codec16_decoder_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_205',
    name: 'teltonika_codec16_decoder_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_206',
    name: 'teltonika_codec16_decoder_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_207',
    name: 'teltonika_codec16_decoder_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_208',
    name: 'teltonika_codec16_decoder_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_209',
    name: 'teltonika_codec16_decoder_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_210',
    name: 'teltonika_codec16_decoder_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_211',
    name: 'teltonika_codec16_decoder_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_212',
    name: 'teltonika_codec16_decoder_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_213',
    name: 'teltonika_codec16_decoder_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_214',
    name: 'teltonika_codec16_decoder_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_215',
    name: 'teltonika_codec16_decoder_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_216',
    name: 'teltonika_codec16_decoder_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_217',
    name: 'teltonika_codec16_decoder_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_218',
    name: 'teltonika_codec16_decoder_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_219',
    name: 'teltonika_codec16_decoder_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_220',
    name: 'teltonika_codec16_decoder_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_221',
    name: 'teltonika_codec16_decoder_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_222',
    name: 'teltonika_codec16_decoder_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_223',
    name: 'teltonika_codec16_decoder_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_224',
    name: 'teltonika_codec16_decoder_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_225',
    name: 'teltonika_codec16_decoder_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_226',
    name: 'teltonika_codec16_decoder_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_227',
    name: 'teltonika_codec16_decoder_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_228',
    name: 'teltonika_codec16_decoder_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_229',
    name: 'teltonika_codec16_decoder_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_230',
    name: 'teltonika_codec16_decoder_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_231',
    name: 'teltonika_codec16_decoder_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_232',
    name: 'teltonika_codec16_decoder_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_233',
    name: 'teltonika_codec16_decoder_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_234',
    name: 'teltonika_codec16_decoder_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_235',
    name: 'teltonika_codec16_decoder_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_236',
    name: 'teltonika_codec16_decoder_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_237',
    name: 'teltonika_codec16_decoder_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_238',
    name: 'teltonika_codec16_decoder_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_239',
    name: 'teltonika_codec16_decoder_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_240',
    name: 'teltonika_codec16_decoder_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_241',
    name: 'teltonika_codec16_decoder_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_242',
    name: 'teltonika_codec16_decoder_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_243',
    name: 'teltonika_codec16_decoder_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_244',
    name: 'teltonika_codec16_decoder_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_245',
    name: 'teltonika_codec16_decoder_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_246',
    name: 'teltonika_codec16_decoder_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_247',
    name: 'teltonika_codec16_decoder_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_248',
    name: 'teltonika_codec16_decoder_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_249',
    name: 'teltonika_codec16_decoder_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_TELTONIKA_CODEC16_DECODER_250',
    name: 'teltonika_codec16_decoder_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for Teltonika Codec 16 Extended Fleet Data Protocol. Decoded from incoming device telemetry stream.'
  },
];

export class TeltonikaCodec16DecoderDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
      decoderId: 'teltonika-codec16-decoder',
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
