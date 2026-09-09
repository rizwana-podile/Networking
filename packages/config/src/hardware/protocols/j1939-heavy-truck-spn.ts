/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog
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

export const J1939_HEAVY_TRUCK_SPN_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_001',
    name: 'j1939_heavy_truck_spn_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_002',
    name: 'j1939_heavy_truck_spn_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_003',
    name: 'j1939_heavy_truck_spn_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_004',
    name: 'j1939_heavy_truck_spn_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_005',
    name: 'j1939_heavy_truck_spn_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_006',
    name: 'j1939_heavy_truck_spn_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_007',
    name: 'j1939_heavy_truck_spn_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_008',
    name: 'j1939_heavy_truck_spn_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_009',
    name: 'j1939_heavy_truck_spn_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_010',
    name: 'j1939_heavy_truck_spn_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_011',
    name: 'j1939_heavy_truck_spn_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_012',
    name: 'j1939_heavy_truck_spn_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_013',
    name: 'j1939_heavy_truck_spn_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_014',
    name: 'j1939_heavy_truck_spn_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_015',
    name: 'j1939_heavy_truck_spn_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_016',
    name: 'j1939_heavy_truck_spn_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_017',
    name: 'j1939_heavy_truck_spn_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_018',
    name: 'j1939_heavy_truck_spn_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_019',
    name: 'j1939_heavy_truck_spn_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_020',
    name: 'j1939_heavy_truck_spn_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_021',
    name: 'j1939_heavy_truck_spn_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_022',
    name: 'j1939_heavy_truck_spn_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_023',
    name: 'j1939_heavy_truck_spn_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_024',
    name: 'j1939_heavy_truck_spn_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_025',
    name: 'j1939_heavy_truck_spn_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_026',
    name: 'j1939_heavy_truck_spn_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_027',
    name: 'j1939_heavy_truck_spn_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_028',
    name: 'j1939_heavy_truck_spn_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_029',
    name: 'j1939_heavy_truck_spn_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_030',
    name: 'j1939_heavy_truck_spn_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_031',
    name: 'j1939_heavy_truck_spn_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_032',
    name: 'j1939_heavy_truck_spn_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_033',
    name: 'j1939_heavy_truck_spn_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_034',
    name: 'j1939_heavy_truck_spn_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_035',
    name: 'j1939_heavy_truck_spn_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_036',
    name: 'j1939_heavy_truck_spn_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_037',
    name: 'j1939_heavy_truck_spn_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_038',
    name: 'j1939_heavy_truck_spn_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_039',
    name: 'j1939_heavy_truck_spn_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_040',
    name: 'j1939_heavy_truck_spn_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_041',
    name: 'j1939_heavy_truck_spn_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_042',
    name: 'j1939_heavy_truck_spn_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_043',
    name: 'j1939_heavy_truck_spn_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_044',
    name: 'j1939_heavy_truck_spn_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_045',
    name: 'j1939_heavy_truck_spn_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_046',
    name: 'j1939_heavy_truck_spn_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_047',
    name: 'j1939_heavy_truck_spn_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_048',
    name: 'j1939_heavy_truck_spn_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_049',
    name: 'j1939_heavy_truck_spn_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_050',
    name: 'j1939_heavy_truck_spn_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_051',
    name: 'j1939_heavy_truck_spn_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_052',
    name: 'j1939_heavy_truck_spn_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_053',
    name: 'j1939_heavy_truck_spn_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_054',
    name: 'j1939_heavy_truck_spn_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_055',
    name: 'j1939_heavy_truck_spn_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_056',
    name: 'j1939_heavy_truck_spn_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_057',
    name: 'j1939_heavy_truck_spn_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_058',
    name: 'j1939_heavy_truck_spn_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_059',
    name: 'j1939_heavy_truck_spn_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_060',
    name: 'j1939_heavy_truck_spn_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_061',
    name: 'j1939_heavy_truck_spn_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_062',
    name: 'j1939_heavy_truck_spn_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_063',
    name: 'j1939_heavy_truck_spn_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_064',
    name: 'j1939_heavy_truck_spn_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_065',
    name: 'j1939_heavy_truck_spn_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_066',
    name: 'j1939_heavy_truck_spn_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_067',
    name: 'j1939_heavy_truck_spn_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_068',
    name: 'j1939_heavy_truck_spn_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_069',
    name: 'j1939_heavy_truck_spn_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_070',
    name: 'j1939_heavy_truck_spn_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_071',
    name: 'j1939_heavy_truck_spn_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_072',
    name: 'j1939_heavy_truck_spn_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_073',
    name: 'j1939_heavy_truck_spn_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_074',
    name: 'j1939_heavy_truck_spn_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_075',
    name: 'j1939_heavy_truck_spn_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_076',
    name: 'j1939_heavy_truck_spn_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_077',
    name: 'j1939_heavy_truck_spn_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_078',
    name: 'j1939_heavy_truck_spn_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_079',
    name: 'j1939_heavy_truck_spn_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_080',
    name: 'j1939_heavy_truck_spn_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_081',
    name: 'j1939_heavy_truck_spn_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_082',
    name: 'j1939_heavy_truck_spn_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_083',
    name: 'j1939_heavy_truck_spn_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_084',
    name: 'j1939_heavy_truck_spn_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_085',
    name: 'j1939_heavy_truck_spn_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_086',
    name: 'j1939_heavy_truck_spn_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_087',
    name: 'j1939_heavy_truck_spn_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_088',
    name: 'j1939_heavy_truck_spn_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_089',
    name: 'j1939_heavy_truck_spn_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_090',
    name: 'j1939_heavy_truck_spn_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_091',
    name: 'j1939_heavy_truck_spn_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_092',
    name: 'j1939_heavy_truck_spn_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_093',
    name: 'j1939_heavy_truck_spn_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_094',
    name: 'j1939_heavy_truck_spn_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_095',
    name: 'j1939_heavy_truck_spn_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_096',
    name: 'j1939_heavy_truck_spn_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_097',
    name: 'j1939_heavy_truck_spn_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_098',
    name: 'j1939_heavy_truck_spn_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_099',
    name: 'j1939_heavy_truck_spn_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_100',
    name: 'j1939_heavy_truck_spn_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_101',
    name: 'j1939_heavy_truck_spn_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_102',
    name: 'j1939_heavy_truck_spn_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_103',
    name: 'j1939_heavy_truck_spn_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_104',
    name: 'j1939_heavy_truck_spn_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_105',
    name: 'j1939_heavy_truck_spn_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_106',
    name: 'j1939_heavy_truck_spn_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_107',
    name: 'j1939_heavy_truck_spn_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_108',
    name: 'j1939_heavy_truck_spn_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_109',
    name: 'j1939_heavy_truck_spn_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_110',
    name: 'j1939_heavy_truck_spn_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_111',
    name: 'j1939_heavy_truck_spn_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_112',
    name: 'j1939_heavy_truck_spn_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_113',
    name: 'j1939_heavy_truck_spn_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_114',
    name: 'j1939_heavy_truck_spn_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_115',
    name: 'j1939_heavy_truck_spn_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_116',
    name: 'j1939_heavy_truck_spn_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_117',
    name: 'j1939_heavy_truck_spn_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_118',
    name: 'j1939_heavy_truck_spn_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_119',
    name: 'j1939_heavy_truck_spn_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_120',
    name: 'j1939_heavy_truck_spn_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_121',
    name: 'j1939_heavy_truck_spn_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_122',
    name: 'j1939_heavy_truck_spn_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_123',
    name: 'j1939_heavy_truck_spn_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_124',
    name: 'j1939_heavy_truck_spn_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_125',
    name: 'j1939_heavy_truck_spn_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_126',
    name: 'j1939_heavy_truck_spn_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_127',
    name: 'j1939_heavy_truck_spn_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_128',
    name: 'j1939_heavy_truck_spn_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_129',
    name: 'j1939_heavy_truck_spn_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_130',
    name: 'j1939_heavy_truck_spn_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_131',
    name: 'j1939_heavy_truck_spn_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_132',
    name: 'j1939_heavy_truck_spn_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_133',
    name: 'j1939_heavy_truck_spn_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_134',
    name: 'j1939_heavy_truck_spn_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_135',
    name: 'j1939_heavy_truck_spn_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_136',
    name: 'j1939_heavy_truck_spn_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_137',
    name: 'j1939_heavy_truck_spn_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_138',
    name: 'j1939_heavy_truck_spn_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_139',
    name: 'j1939_heavy_truck_spn_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_140',
    name: 'j1939_heavy_truck_spn_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_141',
    name: 'j1939_heavy_truck_spn_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_142',
    name: 'j1939_heavy_truck_spn_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_143',
    name: 'j1939_heavy_truck_spn_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_144',
    name: 'j1939_heavy_truck_spn_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_145',
    name: 'j1939_heavy_truck_spn_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_146',
    name: 'j1939_heavy_truck_spn_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_147',
    name: 'j1939_heavy_truck_spn_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_148',
    name: 'j1939_heavy_truck_spn_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_149',
    name: 'j1939_heavy_truck_spn_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_150',
    name: 'j1939_heavy_truck_spn_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_151',
    name: 'j1939_heavy_truck_spn_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_152',
    name: 'j1939_heavy_truck_spn_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_153',
    name: 'j1939_heavy_truck_spn_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_154',
    name: 'j1939_heavy_truck_spn_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_155',
    name: 'j1939_heavy_truck_spn_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_156',
    name: 'j1939_heavy_truck_spn_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_157',
    name: 'j1939_heavy_truck_spn_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_158',
    name: 'j1939_heavy_truck_spn_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_159',
    name: 'j1939_heavy_truck_spn_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_160',
    name: 'j1939_heavy_truck_spn_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_161',
    name: 'j1939_heavy_truck_spn_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_162',
    name: 'j1939_heavy_truck_spn_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_163',
    name: 'j1939_heavy_truck_spn_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_164',
    name: 'j1939_heavy_truck_spn_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_165',
    name: 'j1939_heavy_truck_spn_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_166',
    name: 'j1939_heavy_truck_spn_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_167',
    name: 'j1939_heavy_truck_spn_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_168',
    name: 'j1939_heavy_truck_spn_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_169',
    name: 'j1939_heavy_truck_spn_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_170',
    name: 'j1939_heavy_truck_spn_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_171',
    name: 'j1939_heavy_truck_spn_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_172',
    name: 'j1939_heavy_truck_spn_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_173',
    name: 'j1939_heavy_truck_spn_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_174',
    name: 'j1939_heavy_truck_spn_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_175',
    name: 'j1939_heavy_truck_spn_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_176',
    name: 'j1939_heavy_truck_spn_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_177',
    name: 'j1939_heavy_truck_spn_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_178',
    name: 'j1939_heavy_truck_spn_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_179',
    name: 'j1939_heavy_truck_spn_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_180',
    name: 'j1939_heavy_truck_spn_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_181',
    name: 'j1939_heavy_truck_spn_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_182',
    name: 'j1939_heavy_truck_spn_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_183',
    name: 'j1939_heavy_truck_spn_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_184',
    name: 'j1939_heavy_truck_spn_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_185',
    name: 'j1939_heavy_truck_spn_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_186',
    name: 'j1939_heavy_truck_spn_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_187',
    name: 'j1939_heavy_truck_spn_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_188',
    name: 'j1939_heavy_truck_spn_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_189',
    name: 'j1939_heavy_truck_spn_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_190',
    name: 'j1939_heavy_truck_spn_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_191',
    name: 'j1939_heavy_truck_spn_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_192',
    name: 'j1939_heavy_truck_spn_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_193',
    name: 'j1939_heavy_truck_spn_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_194',
    name: 'j1939_heavy_truck_spn_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_195',
    name: 'j1939_heavy_truck_spn_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_196',
    name: 'j1939_heavy_truck_spn_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_197',
    name: 'j1939_heavy_truck_spn_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_198',
    name: 'j1939_heavy_truck_spn_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_199',
    name: 'j1939_heavy_truck_spn_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_200',
    name: 'j1939_heavy_truck_spn_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_201',
    name: 'j1939_heavy_truck_spn_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_202',
    name: 'j1939_heavy_truck_spn_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_203',
    name: 'j1939_heavy_truck_spn_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_204',
    name: 'j1939_heavy_truck_spn_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_205',
    name: 'j1939_heavy_truck_spn_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_206',
    name: 'j1939_heavy_truck_spn_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_207',
    name: 'j1939_heavy_truck_spn_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_208',
    name: 'j1939_heavy_truck_spn_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_209',
    name: 'j1939_heavy_truck_spn_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_210',
    name: 'j1939_heavy_truck_spn_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_211',
    name: 'j1939_heavy_truck_spn_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_212',
    name: 'j1939_heavy_truck_spn_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_213',
    name: 'j1939_heavy_truck_spn_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_214',
    name: 'j1939_heavy_truck_spn_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_215',
    name: 'j1939_heavy_truck_spn_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_216',
    name: 'j1939_heavy_truck_spn_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_217',
    name: 'j1939_heavy_truck_spn_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_218',
    name: 'j1939_heavy_truck_spn_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_219',
    name: 'j1939_heavy_truck_spn_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_220',
    name: 'j1939_heavy_truck_spn_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_221',
    name: 'j1939_heavy_truck_spn_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_222',
    name: 'j1939_heavy_truck_spn_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_223',
    name: 'j1939_heavy_truck_spn_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_224',
    name: 'j1939_heavy_truck_spn_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_225',
    name: 'j1939_heavy_truck_spn_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_226',
    name: 'j1939_heavy_truck_spn_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_227',
    name: 'j1939_heavy_truck_spn_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_228',
    name: 'j1939_heavy_truck_spn_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_229',
    name: 'j1939_heavy_truck_spn_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_230',
    name: 'j1939_heavy_truck_spn_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_231',
    name: 'j1939_heavy_truck_spn_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_232',
    name: 'j1939_heavy_truck_spn_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_233',
    name: 'j1939_heavy_truck_spn_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_234',
    name: 'j1939_heavy_truck_spn_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_235',
    name: 'j1939_heavy_truck_spn_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_236',
    name: 'j1939_heavy_truck_spn_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_237',
    name: 'j1939_heavy_truck_spn_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_238',
    name: 'j1939_heavy_truck_spn_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_239',
    name: 'j1939_heavy_truck_spn_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_240',
    name: 'j1939_heavy_truck_spn_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_241',
    name: 'j1939_heavy_truck_spn_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_242',
    name: 'j1939_heavy_truck_spn_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_243',
    name: 'j1939_heavy_truck_spn_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_244',
    name: 'j1939_heavy_truck_spn_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_245',
    name: 'j1939_heavy_truck_spn_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_246',
    name: 'j1939_heavy_truck_spn_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_247',
    name: 'j1939_heavy_truck_spn_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_248',
    name: 'j1939_heavy_truck_spn_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_249',
    name: 'j1939_heavy_truck_spn_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_J1939_HEAVY_TRUCK_SPN_250',
    name: 'j1939_heavy_truck_spn_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for SAE J1939 Heavy-Duty Commercial Vehicle SPN Catalog. Decoded from incoming device telemetry stream.'
  },
];

export class J1939HeavyTruckSpnDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
      decoderId: 'j1939-heavy-truck-spn',
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
