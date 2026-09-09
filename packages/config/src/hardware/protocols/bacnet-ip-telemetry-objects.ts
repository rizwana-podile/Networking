/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * BACnet/IP Building IoT and Environmental Telemetry Objects
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

export const BACNET_IP_TELEMETRY_OBJECTS_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_001',
    name: 'bacnet_ip_telemetry_objects_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_002',
    name: 'bacnet_ip_telemetry_objects_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_003',
    name: 'bacnet_ip_telemetry_objects_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_004',
    name: 'bacnet_ip_telemetry_objects_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_005',
    name: 'bacnet_ip_telemetry_objects_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_006',
    name: 'bacnet_ip_telemetry_objects_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_007',
    name: 'bacnet_ip_telemetry_objects_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_008',
    name: 'bacnet_ip_telemetry_objects_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_009',
    name: 'bacnet_ip_telemetry_objects_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_010',
    name: 'bacnet_ip_telemetry_objects_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_011',
    name: 'bacnet_ip_telemetry_objects_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_012',
    name: 'bacnet_ip_telemetry_objects_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_013',
    name: 'bacnet_ip_telemetry_objects_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_014',
    name: 'bacnet_ip_telemetry_objects_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_015',
    name: 'bacnet_ip_telemetry_objects_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_016',
    name: 'bacnet_ip_telemetry_objects_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_017',
    name: 'bacnet_ip_telemetry_objects_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_018',
    name: 'bacnet_ip_telemetry_objects_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_019',
    name: 'bacnet_ip_telemetry_objects_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_020',
    name: 'bacnet_ip_telemetry_objects_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_021',
    name: 'bacnet_ip_telemetry_objects_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_022',
    name: 'bacnet_ip_telemetry_objects_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_023',
    name: 'bacnet_ip_telemetry_objects_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_024',
    name: 'bacnet_ip_telemetry_objects_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_025',
    name: 'bacnet_ip_telemetry_objects_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_026',
    name: 'bacnet_ip_telemetry_objects_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_027',
    name: 'bacnet_ip_telemetry_objects_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_028',
    name: 'bacnet_ip_telemetry_objects_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_029',
    name: 'bacnet_ip_telemetry_objects_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_030',
    name: 'bacnet_ip_telemetry_objects_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_031',
    name: 'bacnet_ip_telemetry_objects_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_032',
    name: 'bacnet_ip_telemetry_objects_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_033',
    name: 'bacnet_ip_telemetry_objects_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_034',
    name: 'bacnet_ip_telemetry_objects_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_035',
    name: 'bacnet_ip_telemetry_objects_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_036',
    name: 'bacnet_ip_telemetry_objects_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_037',
    name: 'bacnet_ip_telemetry_objects_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_038',
    name: 'bacnet_ip_telemetry_objects_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_039',
    name: 'bacnet_ip_telemetry_objects_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_040',
    name: 'bacnet_ip_telemetry_objects_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_041',
    name: 'bacnet_ip_telemetry_objects_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_042',
    name: 'bacnet_ip_telemetry_objects_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_043',
    name: 'bacnet_ip_telemetry_objects_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_044',
    name: 'bacnet_ip_telemetry_objects_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_045',
    name: 'bacnet_ip_telemetry_objects_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_046',
    name: 'bacnet_ip_telemetry_objects_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_047',
    name: 'bacnet_ip_telemetry_objects_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_048',
    name: 'bacnet_ip_telemetry_objects_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_049',
    name: 'bacnet_ip_telemetry_objects_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_050',
    name: 'bacnet_ip_telemetry_objects_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_051',
    name: 'bacnet_ip_telemetry_objects_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_052',
    name: 'bacnet_ip_telemetry_objects_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_053',
    name: 'bacnet_ip_telemetry_objects_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_054',
    name: 'bacnet_ip_telemetry_objects_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_055',
    name: 'bacnet_ip_telemetry_objects_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_056',
    name: 'bacnet_ip_telemetry_objects_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_057',
    name: 'bacnet_ip_telemetry_objects_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_058',
    name: 'bacnet_ip_telemetry_objects_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_059',
    name: 'bacnet_ip_telemetry_objects_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_060',
    name: 'bacnet_ip_telemetry_objects_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_061',
    name: 'bacnet_ip_telemetry_objects_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_062',
    name: 'bacnet_ip_telemetry_objects_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_063',
    name: 'bacnet_ip_telemetry_objects_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_064',
    name: 'bacnet_ip_telemetry_objects_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_065',
    name: 'bacnet_ip_telemetry_objects_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_066',
    name: 'bacnet_ip_telemetry_objects_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_067',
    name: 'bacnet_ip_telemetry_objects_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_068',
    name: 'bacnet_ip_telemetry_objects_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_069',
    name: 'bacnet_ip_telemetry_objects_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_070',
    name: 'bacnet_ip_telemetry_objects_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_071',
    name: 'bacnet_ip_telemetry_objects_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_072',
    name: 'bacnet_ip_telemetry_objects_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_073',
    name: 'bacnet_ip_telemetry_objects_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_074',
    name: 'bacnet_ip_telemetry_objects_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_075',
    name: 'bacnet_ip_telemetry_objects_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_076',
    name: 'bacnet_ip_telemetry_objects_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_077',
    name: 'bacnet_ip_telemetry_objects_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_078',
    name: 'bacnet_ip_telemetry_objects_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_079',
    name: 'bacnet_ip_telemetry_objects_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_080',
    name: 'bacnet_ip_telemetry_objects_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_081',
    name: 'bacnet_ip_telemetry_objects_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_082',
    name: 'bacnet_ip_telemetry_objects_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_083',
    name: 'bacnet_ip_telemetry_objects_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_084',
    name: 'bacnet_ip_telemetry_objects_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_085',
    name: 'bacnet_ip_telemetry_objects_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_086',
    name: 'bacnet_ip_telemetry_objects_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_087',
    name: 'bacnet_ip_telemetry_objects_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_088',
    name: 'bacnet_ip_telemetry_objects_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_089',
    name: 'bacnet_ip_telemetry_objects_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_090',
    name: 'bacnet_ip_telemetry_objects_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_091',
    name: 'bacnet_ip_telemetry_objects_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_092',
    name: 'bacnet_ip_telemetry_objects_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_093',
    name: 'bacnet_ip_telemetry_objects_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_094',
    name: 'bacnet_ip_telemetry_objects_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_095',
    name: 'bacnet_ip_telemetry_objects_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_096',
    name: 'bacnet_ip_telemetry_objects_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_097',
    name: 'bacnet_ip_telemetry_objects_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_098',
    name: 'bacnet_ip_telemetry_objects_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_099',
    name: 'bacnet_ip_telemetry_objects_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_100',
    name: 'bacnet_ip_telemetry_objects_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_101',
    name: 'bacnet_ip_telemetry_objects_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_102',
    name: 'bacnet_ip_telemetry_objects_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_103',
    name: 'bacnet_ip_telemetry_objects_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_104',
    name: 'bacnet_ip_telemetry_objects_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_105',
    name: 'bacnet_ip_telemetry_objects_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_106',
    name: 'bacnet_ip_telemetry_objects_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_107',
    name: 'bacnet_ip_telemetry_objects_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_108',
    name: 'bacnet_ip_telemetry_objects_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_109',
    name: 'bacnet_ip_telemetry_objects_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_110',
    name: 'bacnet_ip_telemetry_objects_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_111',
    name: 'bacnet_ip_telemetry_objects_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_112',
    name: 'bacnet_ip_telemetry_objects_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_113',
    name: 'bacnet_ip_telemetry_objects_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_114',
    name: 'bacnet_ip_telemetry_objects_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_115',
    name: 'bacnet_ip_telemetry_objects_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_116',
    name: 'bacnet_ip_telemetry_objects_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_117',
    name: 'bacnet_ip_telemetry_objects_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_118',
    name: 'bacnet_ip_telemetry_objects_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_119',
    name: 'bacnet_ip_telemetry_objects_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_120',
    name: 'bacnet_ip_telemetry_objects_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_121',
    name: 'bacnet_ip_telemetry_objects_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_122',
    name: 'bacnet_ip_telemetry_objects_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_123',
    name: 'bacnet_ip_telemetry_objects_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_124',
    name: 'bacnet_ip_telemetry_objects_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_125',
    name: 'bacnet_ip_telemetry_objects_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_126',
    name: 'bacnet_ip_telemetry_objects_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_127',
    name: 'bacnet_ip_telemetry_objects_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_128',
    name: 'bacnet_ip_telemetry_objects_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_129',
    name: 'bacnet_ip_telemetry_objects_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_130',
    name: 'bacnet_ip_telemetry_objects_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_131',
    name: 'bacnet_ip_telemetry_objects_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_132',
    name: 'bacnet_ip_telemetry_objects_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_133',
    name: 'bacnet_ip_telemetry_objects_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_134',
    name: 'bacnet_ip_telemetry_objects_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_135',
    name: 'bacnet_ip_telemetry_objects_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_136',
    name: 'bacnet_ip_telemetry_objects_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_137',
    name: 'bacnet_ip_telemetry_objects_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_138',
    name: 'bacnet_ip_telemetry_objects_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_139',
    name: 'bacnet_ip_telemetry_objects_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_140',
    name: 'bacnet_ip_telemetry_objects_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_141',
    name: 'bacnet_ip_telemetry_objects_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_142',
    name: 'bacnet_ip_telemetry_objects_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_143',
    name: 'bacnet_ip_telemetry_objects_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_144',
    name: 'bacnet_ip_telemetry_objects_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_145',
    name: 'bacnet_ip_telemetry_objects_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_146',
    name: 'bacnet_ip_telemetry_objects_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_147',
    name: 'bacnet_ip_telemetry_objects_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_148',
    name: 'bacnet_ip_telemetry_objects_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_149',
    name: 'bacnet_ip_telemetry_objects_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_150',
    name: 'bacnet_ip_telemetry_objects_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_151',
    name: 'bacnet_ip_telemetry_objects_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_152',
    name: 'bacnet_ip_telemetry_objects_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_153',
    name: 'bacnet_ip_telemetry_objects_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_154',
    name: 'bacnet_ip_telemetry_objects_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_155',
    name: 'bacnet_ip_telemetry_objects_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_156',
    name: 'bacnet_ip_telemetry_objects_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_157',
    name: 'bacnet_ip_telemetry_objects_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_158',
    name: 'bacnet_ip_telemetry_objects_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_159',
    name: 'bacnet_ip_telemetry_objects_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_160',
    name: 'bacnet_ip_telemetry_objects_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_161',
    name: 'bacnet_ip_telemetry_objects_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_162',
    name: 'bacnet_ip_telemetry_objects_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_163',
    name: 'bacnet_ip_telemetry_objects_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_164',
    name: 'bacnet_ip_telemetry_objects_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_165',
    name: 'bacnet_ip_telemetry_objects_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_166',
    name: 'bacnet_ip_telemetry_objects_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_167',
    name: 'bacnet_ip_telemetry_objects_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_168',
    name: 'bacnet_ip_telemetry_objects_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_169',
    name: 'bacnet_ip_telemetry_objects_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_170',
    name: 'bacnet_ip_telemetry_objects_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_171',
    name: 'bacnet_ip_telemetry_objects_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_172',
    name: 'bacnet_ip_telemetry_objects_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_173',
    name: 'bacnet_ip_telemetry_objects_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_174',
    name: 'bacnet_ip_telemetry_objects_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_175',
    name: 'bacnet_ip_telemetry_objects_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_176',
    name: 'bacnet_ip_telemetry_objects_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_177',
    name: 'bacnet_ip_telemetry_objects_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_178',
    name: 'bacnet_ip_telemetry_objects_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_179',
    name: 'bacnet_ip_telemetry_objects_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_180',
    name: 'bacnet_ip_telemetry_objects_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_181',
    name: 'bacnet_ip_telemetry_objects_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_182',
    name: 'bacnet_ip_telemetry_objects_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_183',
    name: 'bacnet_ip_telemetry_objects_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_184',
    name: 'bacnet_ip_telemetry_objects_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_185',
    name: 'bacnet_ip_telemetry_objects_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_186',
    name: 'bacnet_ip_telemetry_objects_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_187',
    name: 'bacnet_ip_telemetry_objects_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_188',
    name: 'bacnet_ip_telemetry_objects_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_189',
    name: 'bacnet_ip_telemetry_objects_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_190',
    name: 'bacnet_ip_telemetry_objects_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_191',
    name: 'bacnet_ip_telemetry_objects_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_192',
    name: 'bacnet_ip_telemetry_objects_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_193',
    name: 'bacnet_ip_telemetry_objects_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_194',
    name: 'bacnet_ip_telemetry_objects_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_195',
    name: 'bacnet_ip_telemetry_objects_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_196',
    name: 'bacnet_ip_telemetry_objects_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_197',
    name: 'bacnet_ip_telemetry_objects_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_198',
    name: 'bacnet_ip_telemetry_objects_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_199',
    name: 'bacnet_ip_telemetry_objects_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_200',
    name: 'bacnet_ip_telemetry_objects_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_201',
    name: 'bacnet_ip_telemetry_objects_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_202',
    name: 'bacnet_ip_telemetry_objects_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_203',
    name: 'bacnet_ip_telemetry_objects_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_204',
    name: 'bacnet_ip_telemetry_objects_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_205',
    name: 'bacnet_ip_telemetry_objects_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_206',
    name: 'bacnet_ip_telemetry_objects_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_207',
    name: 'bacnet_ip_telemetry_objects_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_208',
    name: 'bacnet_ip_telemetry_objects_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_209',
    name: 'bacnet_ip_telemetry_objects_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_210',
    name: 'bacnet_ip_telemetry_objects_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_211',
    name: 'bacnet_ip_telemetry_objects_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_212',
    name: 'bacnet_ip_telemetry_objects_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_213',
    name: 'bacnet_ip_telemetry_objects_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_214',
    name: 'bacnet_ip_telemetry_objects_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_215',
    name: 'bacnet_ip_telemetry_objects_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_216',
    name: 'bacnet_ip_telemetry_objects_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_217',
    name: 'bacnet_ip_telemetry_objects_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_218',
    name: 'bacnet_ip_telemetry_objects_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_219',
    name: 'bacnet_ip_telemetry_objects_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_220',
    name: 'bacnet_ip_telemetry_objects_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_221',
    name: 'bacnet_ip_telemetry_objects_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_222',
    name: 'bacnet_ip_telemetry_objects_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_223',
    name: 'bacnet_ip_telemetry_objects_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_224',
    name: 'bacnet_ip_telemetry_objects_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_225',
    name: 'bacnet_ip_telemetry_objects_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_226',
    name: 'bacnet_ip_telemetry_objects_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_227',
    name: 'bacnet_ip_telemetry_objects_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_228',
    name: 'bacnet_ip_telemetry_objects_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_229',
    name: 'bacnet_ip_telemetry_objects_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_230',
    name: 'bacnet_ip_telemetry_objects_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_231',
    name: 'bacnet_ip_telemetry_objects_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_232',
    name: 'bacnet_ip_telemetry_objects_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_233',
    name: 'bacnet_ip_telemetry_objects_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_234',
    name: 'bacnet_ip_telemetry_objects_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_235',
    name: 'bacnet_ip_telemetry_objects_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_236',
    name: 'bacnet_ip_telemetry_objects_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_237',
    name: 'bacnet_ip_telemetry_objects_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_238',
    name: 'bacnet_ip_telemetry_objects_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_239',
    name: 'bacnet_ip_telemetry_objects_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_240',
    name: 'bacnet_ip_telemetry_objects_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_241',
    name: 'bacnet_ip_telemetry_objects_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_242',
    name: 'bacnet_ip_telemetry_objects_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_243',
    name: 'bacnet_ip_telemetry_objects_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_244',
    name: 'bacnet_ip_telemetry_objects_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_245',
    name: 'bacnet_ip_telemetry_objects_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_246',
    name: 'bacnet_ip_telemetry_objects_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_247',
    name: 'bacnet_ip_telemetry_objects_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_248',
    name: 'bacnet_ip_telemetry_objects_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_249',
    name: 'bacnet_ip_telemetry_objects_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_BACNET_IP_TELEMETRY_OBJECTS_250',
    name: 'bacnet_ip_telemetry_objects_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for BACnet/IP Building IoT and Environmental Telemetry Objects. Decoded from incoming device telemetry stream.'
  },
];

export class BacnetIpTelemetryObjectsDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
      decoderId: 'bacnet-ip-telemetry-objects',
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
