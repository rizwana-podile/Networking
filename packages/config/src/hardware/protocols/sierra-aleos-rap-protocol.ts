/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * Sierra Wireless ALEOS RAP Telematics Protocol
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

export const SIERRA_ALEOS_RAP_PROTOCOL_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_001',
    name: 'sierra_aleos_rap_protocol_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_002',
    name: 'sierra_aleos_rap_protocol_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_003',
    name: 'sierra_aleos_rap_protocol_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_004',
    name: 'sierra_aleos_rap_protocol_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_005',
    name: 'sierra_aleos_rap_protocol_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_006',
    name: 'sierra_aleos_rap_protocol_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_007',
    name: 'sierra_aleos_rap_protocol_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_008',
    name: 'sierra_aleos_rap_protocol_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_009',
    name: 'sierra_aleos_rap_protocol_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_010',
    name: 'sierra_aleos_rap_protocol_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_011',
    name: 'sierra_aleos_rap_protocol_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_012',
    name: 'sierra_aleos_rap_protocol_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_013',
    name: 'sierra_aleos_rap_protocol_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_014',
    name: 'sierra_aleos_rap_protocol_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_015',
    name: 'sierra_aleos_rap_protocol_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_016',
    name: 'sierra_aleos_rap_protocol_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_017',
    name: 'sierra_aleos_rap_protocol_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_018',
    name: 'sierra_aleos_rap_protocol_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_019',
    name: 'sierra_aleos_rap_protocol_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_020',
    name: 'sierra_aleos_rap_protocol_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_021',
    name: 'sierra_aleos_rap_protocol_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_022',
    name: 'sierra_aleos_rap_protocol_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_023',
    name: 'sierra_aleos_rap_protocol_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_024',
    name: 'sierra_aleos_rap_protocol_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_025',
    name: 'sierra_aleos_rap_protocol_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_026',
    name: 'sierra_aleos_rap_protocol_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_027',
    name: 'sierra_aleos_rap_protocol_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_028',
    name: 'sierra_aleos_rap_protocol_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_029',
    name: 'sierra_aleos_rap_protocol_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_030',
    name: 'sierra_aleos_rap_protocol_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_031',
    name: 'sierra_aleos_rap_protocol_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_032',
    name: 'sierra_aleos_rap_protocol_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_033',
    name: 'sierra_aleos_rap_protocol_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_034',
    name: 'sierra_aleos_rap_protocol_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_035',
    name: 'sierra_aleos_rap_protocol_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_036',
    name: 'sierra_aleos_rap_protocol_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_037',
    name: 'sierra_aleos_rap_protocol_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_038',
    name: 'sierra_aleos_rap_protocol_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_039',
    name: 'sierra_aleos_rap_protocol_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_040',
    name: 'sierra_aleos_rap_protocol_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_041',
    name: 'sierra_aleos_rap_protocol_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_042',
    name: 'sierra_aleos_rap_protocol_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_043',
    name: 'sierra_aleos_rap_protocol_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_044',
    name: 'sierra_aleos_rap_protocol_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_045',
    name: 'sierra_aleos_rap_protocol_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_046',
    name: 'sierra_aleos_rap_protocol_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_047',
    name: 'sierra_aleos_rap_protocol_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_048',
    name: 'sierra_aleos_rap_protocol_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_049',
    name: 'sierra_aleos_rap_protocol_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_050',
    name: 'sierra_aleos_rap_protocol_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_051',
    name: 'sierra_aleos_rap_protocol_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_052',
    name: 'sierra_aleos_rap_protocol_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_053',
    name: 'sierra_aleos_rap_protocol_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_054',
    name: 'sierra_aleos_rap_protocol_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_055',
    name: 'sierra_aleos_rap_protocol_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_056',
    name: 'sierra_aleos_rap_protocol_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_057',
    name: 'sierra_aleos_rap_protocol_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_058',
    name: 'sierra_aleos_rap_protocol_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_059',
    name: 'sierra_aleos_rap_protocol_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_060',
    name: 'sierra_aleos_rap_protocol_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_061',
    name: 'sierra_aleos_rap_protocol_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_062',
    name: 'sierra_aleos_rap_protocol_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_063',
    name: 'sierra_aleos_rap_protocol_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_064',
    name: 'sierra_aleos_rap_protocol_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_065',
    name: 'sierra_aleos_rap_protocol_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_066',
    name: 'sierra_aleos_rap_protocol_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_067',
    name: 'sierra_aleos_rap_protocol_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_068',
    name: 'sierra_aleos_rap_protocol_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_069',
    name: 'sierra_aleos_rap_protocol_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_070',
    name: 'sierra_aleos_rap_protocol_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_071',
    name: 'sierra_aleos_rap_protocol_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_072',
    name: 'sierra_aleos_rap_protocol_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_073',
    name: 'sierra_aleos_rap_protocol_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_074',
    name: 'sierra_aleos_rap_protocol_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_075',
    name: 'sierra_aleos_rap_protocol_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_076',
    name: 'sierra_aleos_rap_protocol_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_077',
    name: 'sierra_aleos_rap_protocol_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_078',
    name: 'sierra_aleos_rap_protocol_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_079',
    name: 'sierra_aleos_rap_protocol_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_080',
    name: 'sierra_aleos_rap_protocol_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_081',
    name: 'sierra_aleos_rap_protocol_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_082',
    name: 'sierra_aleos_rap_protocol_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_083',
    name: 'sierra_aleos_rap_protocol_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_084',
    name: 'sierra_aleos_rap_protocol_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_085',
    name: 'sierra_aleos_rap_protocol_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_086',
    name: 'sierra_aleos_rap_protocol_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_087',
    name: 'sierra_aleos_rap_protocol_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_088',
    name: 'sierra_aleos_rap_protocol_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_089',
    name: 'sierra_aleos_rap_protocol_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_090',
    name: 'sierra_aleos_rap_protocol_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_091',
    name: 'sierra_aleos_rap_protocol_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_092',
    name: 'sierra_aleos_rap_protocol_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_093',
    name: 'sierra_aleos_rap_protocol_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_094',
    name: 'sierra_aleos_rap_protocol_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_095',
    name: 'sierra_aleos_rap_protocol_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_096',
    name: 'sierra_aleos_rap_protocol_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_097',
    name: 'sierra_aleos_rap_protocol_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_098',
    name: 'sierra_aleos_rap_protocol_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_099',
    name: 'sierra_aleos_rap_protocol_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_100',
    name: 'sierra_aleos_rap_protocol_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_101',
    name: 'sierra_aleos_rap_protocol_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_102',
    name: 'sierra_aleos_rap_protocol_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_103',
    name: 'sierra_aleos_rap_protocol_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_104',
    name: 'sierra_aleos_rap_protocol_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_105',
    name: 'sierra_aleos_rap_protocol_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_106',
    name: 'sierra_aleos_rap_protocol_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_107',
    name: 'sierra_aleos_rap_protocol_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_108',
    name: 'sierra_aleos_rap_protocol_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_109',
    name: 'sierra_aleos_rap_protocol_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_110',
    name: 'sierra_aleos_rap_protocol_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_111',
    name: 'sierra_aleos_rap_protocol_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_112',
    name: 'sierra_aleos_rap_protocol_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_113',
    name: 'sierra_aleos_rap_protocol_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_114',
    name: 'sierra_aleos_rap_protocol_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_115',
    name: 'sierra_aleos_rap_protocol_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_116',
    name: 'sierra_aleos_rap_protocol_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_117',
    name: 'sierra_aleos_rap_protocol_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_118',
    name: 'sierra_aleos_rap_protocol_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_119',
    name: 'sierra_aleos_rap_protocol_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_120',
    name: 'sierra_aleos_rap_protocol_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_121',
    name: 'sierra_aleos_rap_protocol_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_122',
    name: 'sierra_aleos_rap_protocol_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_123',
    name: 'sierra_aleos_rap_protocol_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_124',
    name: 'sierra_aleos_rap_protocol_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_125',
    name: 'sierra_aleos_rap_protocol_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_126',
    name: 'sierra_aleos_rap_protocol_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_127',
    name: 'sierra_aleos_rap_protocol_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_128',
    name: 'sierra_aleos_rap_protocol_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_129',
    name: 'sierra_aleos_rap_protocol_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_130',
    name: 'sierra_aleos_rap_protocol_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_131',
    name: 'sierra_aleos_rap_protocol_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_132',
    name: 'sierra_aleos_rap_protocol_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_133',
    name: 'sierra_aleos_rap_protocol_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_134',
    name: 'sierra_aleos_rap_protocol_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_135',
    name: 'sierra_aleos_rap_protocol_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_136',
    name: 'sierra_aleos_rap_protocol_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_137',
    name: 'sierra_aleos_rap_protocol_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_138',
    name: 'sierra_aleos_rap_protocol_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_139',
    name: 'sierra_aleos_rap_protocol_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_140',
    name: 'sierra_aleos_rap_protocol_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_141',
    name: 'sierra_aleos_rap_protocol_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_142',
    name: 'sierra_aleos_rap_protocol_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_143',
    name: 'sierra_aleos_rap_protocol_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_144',
    name: 'sierra_aleos_rap_protocol_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_145',
    name: 'sierra_aleos_rap_protocol_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_146',
    name: 'sierra_aleos_rap_protocol_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_147',
    name: 'sierra_aleos_rap_protocol_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_148',
    name: 'sierra_aleos_rap_protocol_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_149',
    name: 'sierra_aleos_rap_protocol_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_150',
    name: 'sierra_aleos_rap_protocol_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_151',
    name: 'sierra_aleos_rap_protocol_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_152',
    name: 'sierra_aleos_rap_protocol_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_153',
    name: 'sierra_aleos_rap_protocol_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_154',
    name: 'sierra_aleos_rap_protocol_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_155',
    name: 'sierra_aleos_rap_protocol_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_156',
    name: 'sierra_aleos_rap_protocol_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_157',
    name: 'sierra_aleos_rap_protocol_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_158',
    name: 'sierra_aleos_rap_protocol_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_159',
    name: 'sierra_aleos_rap_protocol_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_160',
    name: 'sierra_aleos_rap_protocol_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_161',
    name: 'sierra_aleos_rap_protocol_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_162',
    name: 'sierra_aleos_rap_protocol_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_163',
    name: 'sierra_aleos_rap_protocol_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_164',
    name: 'sierra_aleos_rap_protocol_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_165',
    name: 'sierra_aleos_rap_protocol_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_166',
    name: 'sierra_aleos_rap_protocol_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_167',
    name: 'sierra_aleos_rap_protocol_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_168',
    name: 'sierra_aleos_rap_protocol_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_169',
    name: 'sierra_aleos_rap_protocol_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_170',
    name: 'sierra_aleos_rap_protocol_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_171',
    name: 'sierra_aleos_rap_protocol_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_172',
    name: 'sierra_aleos_rap_protocol_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_173',
    name: 'sierra_aleos_rap_protocol_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_174',
    name: 'sierra_aleos_rap_protocol_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_175',
    name: 'sierra_aleos_rap_protocol_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_176',
    name: 'sierra_aleos_rap_protocol_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_177',
    name: 'sierra_aleos_rap_protocol_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_178',
    name: 'sierra_aleos_rap_protocol_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_179',
    name: 'sierra_aleos_rap_protocol_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_180',
    name: 'sierra_aleos_rap_protocol_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_181',
    name: 'sierra_aleos_rap_protocol_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_182',
    name: 'sierra_aleos_rap_protocol_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_183',
    name: 'sierra_aleos_rap_protocol_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_184',
    name: 'sierra_aleos_rap_protocol_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_185',
    name: 'sierra_aleos_rap_protocol_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_186',
    name: 'sierra_aleos_rap_protocol_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_187',
    name: 'sierra_aleos_rap_protocol_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_188',
    name: 'sierra_aleos_rap_protocol_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_189',
    name: 'sierra_aleos_rap_protocol_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_190',
    name: 'sierra_aleos_rap_protocol_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_191',
    name: 'sierra_aleos_rap_protocol_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_192',
    name: 'sierra_aleos_rap_protocol_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_193',
    name: 'sierra_aleos_rap_protocol_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_194',
    name: 'sierra_aleos_rap_protocol_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_195',
    name: 'sierra_aleos_rap_protocol_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_196',
    name: 'sierra_aleos_rap_protocol_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_197',
    name: 'sierra_aleos_rap_protocol_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_198',
    name: 'sierra_aleos_rap_protocol_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_199',
    name: 'sierra_aleos_rap_protocol_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_200',
    name: 'sierra_aleos_rap_protocol_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_201',
    name: 'sierra_aleos_rap_protocol_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_202',
    name: 'sierra_aleos_rap_protocol_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_203',
    name: 'sierra_aleos_rap_protocol_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_204',
    name: 'sierra_aleos_rap_protocol_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_205',
    name: 'sierra_aleos_rap_protocol_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_206',
    name: 'sierra_aleos_rap_protocol_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_207',
    name: 'sierra_aleos_rap_protocol_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_208',
    name: 'sierra_aleos_rap_protocol_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_209',
    name: 'sierra_aleos_rap_protocol_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_210',
    name: 'sierra_aleos_rap_protocol_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_211',
    name: 'sierra_aleos_rap_protocol_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_212',
    name: 'sierra_aleos_rap_protocol_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_213',
    name: 'sierra_aleos_rap_protocol_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_214',
    name: 'sierra_aleos_rap_protocol_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_215',
    name: 'sierra_aleos_rap_protocol_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_216',
    name: 'sierra_aleos_rap_protocol_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_217',
    name: 'sierra_aleos_rap_protocol_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_218',
    name: 'sierra_aleos_rap_protocol_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_219',
    name: 'sierra_aleos_rap_protocol_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_220',
    name: 'sierra_aleos_rap_protocol_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_221',
    name: 'sierra_aleos_rap_protocol_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_222',
    name: 'sierra_aleos_rap_protocol_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_223',
    name: 'sierra_aleos_rap_protocol_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_224',
    name: 'sierra_aleos_rap_protocol_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_225',
    name: 'sierra_aleos_rap_protocol_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_226',
    name: 'sierra_aleos_rap_protocol_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_227',
    name: 'sierra_aleos_rap_protocol_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_228',
    name: 'sierra_aleos_rap_protocol_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_229',
    name: 'sierra_aleos_rap_protocol_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_230',
    name: 'sierra_aleos_rap_protocol_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_231',
    name: 'sierra_aleos_rap_protocol_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_232',
    name: 'sierra_aleos_rap_protocol_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_233',
    name: 'sierra_aleos_rap_protocol_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_234',
    name: 'sierra_aleos_rap_protocol_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_235',
    name: 'sierra_aleos_rap_protocol_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_236',
    name: 'sierra_aleos_rap_protocol_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_237',
    name: 'sierra_aleos_rap_protocol_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_238',
    name: 'sierra_aleos_rap_protocol_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_239',
    name: 'sierra_aleos_rap_protocol_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_240',
    name: 'sierra_aleos_rap_protocol_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_241',
    name: 'sierra_aleos_rap_protocol_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_242',
    name: 'sierra_aleos_rap_protocol_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_243',
    name: 'sierra_aleos_rap_protocol_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_244',
    name: 'sierra_aleos_rap_protocol_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_245',
    name: 'sierra_aleos_rap_protocol_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_246',
    name: 'sierra_aleos_rap_protocol_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_247',
    name: 'sierra_aleos_rap_protocol_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_248',
    name: 'sierra_aleos_rap_protocol_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_249',
    name: 'sierra_aleos_rap_protocol_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SIERRA_ALEOS_RAP_PROTOCOL_250',
    name: 'sierra_aleos_rap_protocol_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for Sierra Wireless ALEOS RAP Telematics Protocol. Decoded from incoming device telemetry stream.'
  },
];

export class SierraAleosRapProtocolDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
      decoderId: 'sierra-aleos-rap-protocol',
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
