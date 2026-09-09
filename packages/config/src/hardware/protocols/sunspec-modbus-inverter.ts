/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * SunSpec Alliance Modbus Inverter and Solar Sensor Register Map
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

export const SUNSPEC_MODBUS_INVERTER_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_001',
    name: 'sunspec_modbus_inverter_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_002',
    name: 'sunspec_modbus_inverter_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_003',
    name: 'sunspec_modbus_inverter_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_004',
    name: 'sunspec_modbus_inverter_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_005',
    name: 'sunspec_modbus_inverter_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_006',
    name: 'sunspec_modbus_inverter_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_007',
    name: 'sunspec_modbus_inverter_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_008',
    name: 'sunspec_modbus_inverter_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_009',
    name: 'sunspec_modbus_inverter_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_010',
    name: 'sunspec_modbus_inverter_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_011',
    name: 'sunspec_modbus_inverter_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_012',
    name: 'sunspec_modbus_inverter_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_013',
    name: 'sunspec_modbus_inverter_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_014',
    name: 'sunspec_modbus_inverter_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_015',
    name: 'sunspec_modbus_inverter_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_016',
    name: 'sunspec_modbus_inverter_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_017',
    name: 'sunspec_modbus_inverter_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_018',
    name: 'sunspec_modbus_inverter_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_019',
    name: 'sunspec_modbus_inverter_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_020',
    name: 'sunspec_modbus_inverter_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_021',
    name: 'sunspec_modbus_inverter_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_022',
    name: 'sunspec_modbus_inverter_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_023',
    name: 'sunspec_modbus_inverter_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_024',
    name: 'sunspec_modbus_inverter_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_025',
    name: 'sunspec_modbus_inverter_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_026',
    name: 'sunspec_modbus_inverter_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_027',
    name: 'sunspec_modbus_inverter_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_028',
    name: 'sunspec_modbus_inverter_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_029',
    name: 'sunspec_modbus_inverter_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_030',
    name: 'sunspec_modbus_inverter_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_031',
    name: 'sunspec_modbus_inverter_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_032',
    name: 'sunspec_modbus_inverter_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_033',
    name: 'sunspec_modbus_inverter_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_034',
    name: 'sunspec_modbus_inverter_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_035',
    name: 'sunspec_modbus_inverter_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_036',
    name: 'sunspec_modbus_inverter_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_037',
    name: 'sunspec_modbus_inverter_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_038',
    name: 'sunspec_modbus_inverter_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_039',
    name: 'sunspec_modbus_inverter_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_040',
    name: 'sunspec_modbus_inverter_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_041',
    name: 'sunspec_modbus_inverter_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_042',
    name: 'sunspec_modbus_inverter_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_043',
    name: 'sunspec_modbus_inverter_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_044',
    name: 'sunspec_modbus_inverter_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_045',
    name: 'sunspec_modbus_inverter_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_046',
    name: 'sunspec_modbus_inverter_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_047',
    name: 'sunspec_modbus_inverter_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_048',
    name: 'sunspec_modbus_inverter_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_049',
    name: 'sunspec_modbus_inverter_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_050',
    name: 'sunspec_modbus_inverter_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_051',
    name: 'sunspec_modbus_inverter_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_052',
    name: 'sunspec_modbus_inverter_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_053',
    name: 'sunspec_modbus_inverter_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_054',
    name: 'sunspec_modbus_inverter_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_055',
    name: 'sunspec_modbus_inverter_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_056',
    name: 'sunspec_modbus_inverter_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_057',
    name: 'sunspec_modbus_inverter_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_058',
    name: 'sunspec_modbus_inverter_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_059',
    name: 'sunspec_modbus_inverter_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_060',
    name: 'sunspec_modbus_inverter_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_061',
    name: 'sunspec_modbus_inverter_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_062',
    name: 'sunspec_modbus_inverter_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_063',
    name: 'sunspec_modbus_inverter_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_064',
    name: 'sunspec_modbus_inverter_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_065',
    name: 'sunspec_modbus_inverter_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_066',
    name: 'sunspec_modbus_inverter_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_067',
    name: 'sunspec_modbus_inverter_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_068',
    name: 'sunspec_modbus_inverter_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_069',
    name: 'sunspec_modbus_inverter_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_070',
    name: 'sunspec_modbus_inverter_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_071',
    name: 'sunspec_modbus_inverter_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_072',
    name: 'sunspec_modbus_inverter_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_073',
    name: 'sunspec_modbus_inverter_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_074',
    name: 'sunspec_modbus_inverter_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_075',
    name: 'sunspec_modbus_inverter_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_076',
    name: 'sunspec_modbus_inverter_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_077',
    name: 'sunspec_modbus_inverter_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_078',
    name: 'sunspec_modbus_inverter_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_079',
    name: 'sunspec_modbus_inverter_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_080',
    name: 'sunspec_modbus_inverter_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_081',
    name: 'sunspec_modbus_inverter_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_082',
    name: 'sunspec_modbus_inverter_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_083',
    name: 'sunspec_modbus_inverter_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_084',
    name: 'sunspec_modbus_inverter_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_085',
    name: 'sunspec_modbus_inverter_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_086',
    name: 'sunspec_modbus_inverter_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_087',
    name: 'sunspec_modbus_inverter_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_088',
    name: 'sunspec_modbus_inverter_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_089',
    name: 'sunspec_modbus_inverter_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_090',
    name: 'sunspec_modbus_inverter_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_091',
    name: 'sunspec_modbus_inverter_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_092',
    name: 'sunspec_modbus_inverter_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_093',
    name: 'sunspec_modbus_inverter_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_094',
    name: 'sunspec_modbus_inverter_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_095',
    name: 'sunspec_modbus_inverter_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_096',
    name: 'sunspec_modbus_inverter_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_097',
    name: 'sunspec_modbus_inverter_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_098',
    name: 'sunspec_modbus_inverter_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_099',
    name: 'sunspec_modbus_inverter_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_100',
    name: 'sunspec_modbus_inverter_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_101',
    name: 'sunspec_modbus_inverter_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_102',
    name: 'sunspec_modbus_inverter_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_103',
    name: 'sunspec_modbus_inverter_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_104',
    name: 'sunspec_modbus_inverter_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_105',
    name: 'sunspec_modbus_inverter_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_106',
    name: 'sunspec_modbus_inverter_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_107',
    name: 'sunspec_modbus_inverter_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_108',
    name: 'sunspec_modbus_inverter_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_109',
    name: 'sunspec_modbus_inverter_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_110',
    name: 'sunspec_modbus_inverter_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_111',
    name: 'sunspec_modbus_inverter_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_112',
    name: 'sunspec_modbus_inverter_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_113',
    name: 'sunspec_modbus_inverter_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_114',
    name: 'sunspec_modbus_inverter_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_115',
    name: 'sunspec_modbus_inverter_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_116',
    name: 'sunspec_modbus_inverter_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_117',
    name: 'sunspec_modbus_inverter_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_118',
    name: 'sunspec_modbus_inverter_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_119',
    name: 'sunspec_modbus_inverter_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_120',
    name: 'sunspec_modbus_inverter_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_121',
    name: 'sunspec_modbus_inverter_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_122',
    name: 'sunspec_modbus_inverter_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_123',
    name: 'sunspec_modbus_inverter_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_124',
    name: 'sunspec_modbus_inverter_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_125',
    name: 'sunspec_modbus_inverter_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_126',
    name: 'sunspec_modbus_inverter_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_127',
    name: 'sunspec_modbus_inverter_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_128',
    name: 'sunspec_modbus_inverter_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_129',
    name: 'sunspec_modbus_inverter_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_130',
    name: 'sunspec_modbus_inverter_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_131',
    name: 'sunspec_modbus_inverter_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_132',
    name: 'sunspec_modbus_inverter_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_133',
    name: 'sunspec_modbus_inverter_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_134',
    name: 'sunspec_modbus_inverter_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_135',
    name: 'sunspec_modbus_inverter_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_136',
    name: 'sunspec_modbus_inverter_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_137',
    name: 'sunspec_modbus_inverter_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_138',
    name: 'sunspec_modbus_inverter_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_139',
    name: 'sunspec_modbus_inverter_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_140',
    name: 'sunspec_modbus_inverter_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_141',
    name: 'sunspec_modbus_inverter_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_142',
    name: 'sunspec_modbus_inverter_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_143',
    name: 'sunspec_modbus_inverter_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_144',
    name: 'sunspec_modbus_inverter_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_145',
    name: 'sunspec_modbus_inverter_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_146',
    name: 'sunspec_modbus_inverter_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_147',
    name: 'sunspec_modbus_inverter_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_148',
    name: 'sunspec_modbus_inverter_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_149',
    name: 'sunspec_modbus_inverter_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_150',
    name: 'sunspec_modbus_inverter_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_151',
    name: 'sunspec_modbus_inverter_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_152',
    name: 'sunspec_modbus_inverter_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_153',
    name: 'sunspec_modbus_inverter_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_154',
    name: 'sunspec_modbus_inverter_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_155',
    name: 'sunspec_modbus_inverter_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_156',
    name: 'sunspec_modbus_inverter_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_157',
    name: 'sunspec_modbus_inverter_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_158',
    name: 'sunspec_modbus_inverter_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_159',
    name: 'sunspec_modbus_inverter_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_160',
    name: 'sunspec_modbus_inverter_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_161',
    name: 'sunspec_modbus_inverter_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_162',
    name: 'sunspec_modbus_inverter_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_163',
    name: 'sunspec_modbus_inverter_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_164',
    name: 'sunspec_modbus_inverter_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_165',
    name: 'sunspec_modbus_inverter_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_166',
    name: 'sunspec_modbus_inverter_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_167',
    name: 'sunspec_modbus_inverter_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_168',
    name: 'sunspec_modbus_inverter_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_169',
    name: 'sunspec_modbus_inverter_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_170',
    name: 'sunspec_modbus_inverter_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_171',
    name: 'sunspec_modbus_inverter_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_172',
    name: 'sunspec_modbus_inverter_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_173',
    name: 'sunspec_modbus_inverter_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_174',
    name: 'sunspec_modbus_inverter_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_175',
    name: 'sunspec_modbus_inverter_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_176',
    name: 'sunspec_modbus_inverter_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_177',
    name: 'sunspec_modbus_inverter_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_178',
    name: 'sunspec_modbus_inverter_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_179',
    name: 'sunspec_modbus_inverter_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_180',
    name: 'sunspec_modbus_inverter_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_181',
    name: 'sunspec_modbus_inverter_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_182',
    name: 'sunspec_modbus_inverter_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_183',
    name: 'sunspec_modbus_inverter_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_184',
    name: 'sunspec_modbus_inverter_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_185',
    name: 'sunspec_modbus_inverter_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_186',
    name: 'sunspec_modbus_inverter_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_187',
    name: 'sunspec_modbus_inverter_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_188',
    name: 'sunspec_modbus_inverter_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_189',
    name: 'sunspec_modbus_inverter_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_190',
    name: 'sunspec_modbus_inverter_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_191',
    name: 'sunspec_modbus_inverter_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_192',
    name: 'sunspec_modbus_inverter_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_193',
    name: 'sunspec_modbus_inverter_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_194',
    name: 'sunspec_modbus_inverter_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_195',
    name: 'sunspec_modbus_inverter_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_196',
    name: 'sunspec_modbus_inverter_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_197',
    name: 'sunspec_modbus_inverter_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_198',
    name: 'sunspec_modbus_inverter_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_199',
    name: 'sunspec_modbus_inverter_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_200',
    name: 'sunspec_modbus_inverter_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_201',
    name: 'sunspec_modbus_inverter_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_202',
    name: 'sunspec_modbus_inverter_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_203',
    name: 'sunspec_modbus_inverter_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_204',
    name: 'sunspec_modbus_inverter_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_205',
    name: 'sunspec_modbus_inverter_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_206',
    name: 'sunspec_modbus_inverter_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_207',
    name: 'sunspec_modbus_inverter_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_208',
    name: 'sunspec_modbus_inverter_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_209',
    name: 'sunspec_modbus_inverter_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_210',
    name: 'sunspec_modbus_inverter_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_211',
    name: 'sunspec_modbus_inverter_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_212',
    name: 'sunspec_modbus_inverter_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_213',
    name: 'sunspec_modbus_inverter_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_214',
    name: 'sunspec_modbus_inverter_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_215',
    name: 'sunspec_modbus_inverter_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_216',
    name: 'sunspec_modbus_inverter_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_217',
    name: 'sunspec_modbus_inverter_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_218',
    name: 'sunspec_modbus_inverter_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_219',
    name: 'sunspec_modbus_inverter_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_220',
    name: 'sunspec_modbus_inverter_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_221',
    name: 'sunspec_modbus_inverter_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_222',
    name: 'sunspec_modbus_inverter_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_223',
    name: 'sunspec_modbus_inverter_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_224',
    name: 'sunspec_modbus_inverter_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_225',
    name: 'sunspec_modbus_inverter_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_226',
    name: 'sunspec_modbus_inverter_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_227',
    name: 'sunspec_modbus_inverter_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_228',
    name: 'sunspec_modbus_inverter_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_229',
    name: 'sunspec_modbus_inverter_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_230',
    name: 'sunspec_modbus_inverter_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_231',
    name: 'sunspec_modbus_inverter_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_232',
    name: 'sunspec_modbus_inverter_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_233',
    name: 'sunspec_modbus_inverter_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_234',
    name: 'sunspec_modbus_inverter_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_235',
    name: 'sunspec_modbus_inverter_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_236',
    name: 'sunspec_modbus_inverter_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_237',
    name: 'sunspec_modbus_inverter_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_238',
    name: 'sunspec_modbus_inverter_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_239',
    name: 'sunspec_modbus_inverter_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_240',
    name: 'sunspec_modbus_inverter_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_241',
    name: 'sunspec_modbus_inverter_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_242',
    name: 'sunspec_modbus_inverter_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_243',
    name: 'sunspec_modbus_inverter_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_244',
    name: 'sunspec_modbus_inverter_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_245',
    name: 'sunspec_modbus_inverter_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_246',
    name: 'sunspec_modbus_inverter_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_247',
    name: 'sunspec_modbus_inverter_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_248',
    name: 'sunspec_modbus_inverter_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_249',
    name: 'sunspec_modbus_inverter_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_SUNSPEC_MODBUS_INVERTER_250',
    name: 'sunspec_modbus_inverter_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for SunSpec Alliance Modbus Inverter and Solar Sensor Register Map. Decoded from incoming device telemetry stream.'
  },
];

export class SunspecModbusInverterDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
      decoderId: 'sunspec-modbus-inverter',
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
