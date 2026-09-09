/**
 * GeoNet Sentinel Telematics & Hardware Subsystem
 * NMEA 0183 High Precision Marine GNSS Sentence Parser
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

export const NMEA_0183_GNSS_SENTENCES_FIELDS: ProtocolFrameField[] = [
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_001',
    name: 'nmea_0183_gnss_sentences_field_1',
    byteOffset: 2,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #1 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_002',
    name: 'nmea_0183_gnss_sentences_field_2',
    byteOffset: 4,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #2 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_003',
    name: 'nmea_0183_gnss_sentences_field_3',
    byteOffset: 6,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #3 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_004',
    name: 'nmea_0183_gnss_sentences_field_4',
    byteOffset: 8,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #4 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_005',
    name: 'nmea_0183_gnss_sentences_field_5',
    byteOffset: 10,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #5 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_006',
    name: 'nmea_0183_gnss_sentences_field_6',
    byteOffset: 12,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #6 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_007',
    name: 'nmea_0183_gnss_sentences_field_7',
    byteOffset: 14,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #7 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_008',
    name: 'nmea_0183_gnss_sentences_field_8',
    byteOffset: 16,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #8 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_009',
    name: 'nmea_0183_gnss_sentences_field_9',
    byteOffset: 18,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #9 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_010',
    name: 'nmea_0183_gnss_sentences_field_10',
    byteOffset: 20,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #10 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_011',
    name: 'nmea_0183_gnss_sentences_field_11',
    byteOffset: 22,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #11 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_012',
    name: 'nmea_0183_gnss_sentences_field_12',
    byteOffset: 24,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #12 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_013',
    name: 'nmea_0183_gnss_sentences_field_13',
    byteOffset: 26,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #13 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_014',
    name: 'nmea_0183_gnss_sentences_field_14',
    byteOffset: 28,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #14 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_015',
    name: 'nmea_0183_gnss_sentences_field_15',
    byteOffset: 30,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #15 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_016',
    name: 'nmea_0183_gnss_sentences_field_16',
    byteOffset: 32,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #16 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_017',
    name: 'nmea_0183_gnss_sentences_field_17',
    byteOffset: 34,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #17 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_018',
    name: 'nmea_0183_gnss_sentences_field_18',
    byteOffset: 36,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #18 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_019',
    name: 'nmea_0183_gnss_sentences_field_19',
    byteOffset: 38,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #19 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_020',
    name: 'nmea_0183_gnss_sentences_field_20',
    byteOffset: 40,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #20 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_021',
    name: 'nmea_0183_gnss_sentences_field_21',
    byteOffset: 42,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #21 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_022',
    name: 'nmea_0183_gnss_sentences_field_22',
    byteOffset: 44,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #22 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_023',
    name: 'nmea_0183_gnss_sentences_field_23',
    byteOffset: 46,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #23 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_024',
    name: 'nmea_0183_gnss_sentences_field_24',
    byteOffset: 48,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #24 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_025',
    name: 'nmea_0183_gnss_sentences_field_25',
    byteOffset: 50,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #25 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_026',
    name: 'nmea_0183_gnss_sentences_field_26',
    byteOffset: 52,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #26 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_027',
    name: 'nmea_0183_gnss_sentences_field_27',
    byteOffset: 54,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #27 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_028',
    name: 'nmea_0183_gnss_sentences_field_28',
    byteOffset: 56,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #28 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_029',
    name: 'nmea_0183_gnss_sentences_field_29',
    byteOffset: 58,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #29 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_030',
    name: 'nmea_0183_gnss_sentences_field_30',
    byteOffset: 60,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #30 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_031',
    name: 'nmea_0183_gnss_sentences_field_31',
    byteOffset: 62,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #31 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_032',
    name: 'nmea_0183_gnss_sentences_field_32',
    byteOffset: 64,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #32 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_033',
    name: 'nmea_0183_gnss_sentences_field_33',
    byteOffset: 66,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #33 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_034',
    name: 'nmea_0183_gnss_sentences_field_34',
    byteOffset: 68,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #34 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_035',
    name: 'nmea_0183_gnss_sentences_field_35',
    byteOffset: 70,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #35 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_036',
    name: 'nmea_0183_gnss_sentences_field_36',
    byteOffset: 72,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #36 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_037',
    name: 'nmea_0183_gnss_sentences_field_37',
    byteOffset: 74,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #37 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_038',
    name: 'nmea_0183_gnss_sentences_field_38',
    byteOffset: 76,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #38 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_039',
    name: 'nmea_0183_gnss_sentences_field_39',
    byteOffset: 78,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #39 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_040',
    name: 'nmea_0183_gnss_sentences_field_40',
    byteOffset: 80,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #40 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_041',
    name: 'nmea_0183_gnss_sentences_field_41',
    byteOffset: 82,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #41 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_042',
    name: 'nmea_0183_gnss_sentences_field_42',
    byteOffset: 84,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #42 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_043',
    name: 'nmea_0183_gnss_sentences_field_43',
    byteOffset: 86,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #43 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_044',
    name: 'nmea_0183_gnss_sentences_field_44',
    byteOffset: 88,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #44 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_045',
    name: 'nmea_0183_gnss_sentences_field_45',
    byteOffset: 90,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #45 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_046',
    name: 'nmea_0183_gnss_sentences_field_46',
    byteOffset: 92,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #46 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_047',
    name: 'nmea_0183_gnss_sentences_field_47',
    byteOffset: 94,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #47 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_048',
    name: 'nmea_0183_gnss_sentences_field_48',
    byteOffset: 96,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #48 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_049',
    name: 'nmea_0183_gnss_sentences_field_49',
    byteOffset: 98,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #49 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_050',
    name: 'nmea_0183_gnss_sentences_field_50',
    byteOffset: 100,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #50 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_051',
    name: 'nmea_0183_gnss_sentences_field_51',
    byteOffset: 102,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #51 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_052',
    name: 'nmea_0183_gnss_sentences_field_52',
    byteOffset: 104,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #52 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_053',
    name: 'nmea_0183_gnss_sentences_field_53',
    byteOffset: 106,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #53 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_054',
    name: 'nmea_0183_gnss_sentences_field_54',
    byteOffset: 108,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #54 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_055',
    name: 'nmea_0183_gnss_sentences_field_55',
    byteOffset: 110,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #55 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_056',
    name: 'nmea_0183_gnss_sentences_field_56',
    byteOffset: 112,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #56 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_057',
    name: 'nmea_0183_gnss_sentences_field_57',
    byteOffset: 114,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #57 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_058',
    name: 'nmea_0183_gnss_sentences_field_58',
    byteOffset: 116,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #58 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_059',
    name: 'nmea_0183_gnss_sentences_field_59',
    byteOffset: 118,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #59 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_060',
    name: 'nmea_0183_gnss_sentences_field_60',
    byteOffset: 120,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #60 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_061',
    name: 'nmea_0183_gnss_sentences_field_61',
    byteOffset: 122,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #61 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_062',
    name: 'nmea_0183_gnss_sentences_field_62',
    byteOffset: 124,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #62 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_063',
    name: 'nmea_0183_gnss_sentences_field_63',
    byteOffset: 126,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #63 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_064',
    name: 'nmea_0183_gnss_sentences_field_64',
    byteOffset: 128,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #64 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_065',
    name: 'nmea_0183_gnss_sentences_field_65',
    byteOffset: 130,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #65 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_066',
    name: 'nmea_0183_gnss_sentences_field_66',
    byteOffset: 132,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #66 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_067',
    name: 'nmea_0183_gnss_sentences_field_67',
    byteOffset: 134,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #67 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_068',
    name: 'nmea_0183_gnss_sentences_field_68',
    byteOffset: 136,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #68 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_069',
    name: 'nmea_0183_gnss_sentences_field_69',
    byteOffset: 138,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #69 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_070',
    name: 'nmea_0183_gnss_sentences_field_70',
    byteOffset: 140,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #70 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_071',
    name: 'nmea_0183_gnss_sentences_field_71',
    byteOffset: 142,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #71 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_072',
    name: 'nmea_0183_gnss_sentences_field_72',
    byteOffset: 144,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #72 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_073',
    name: 'nmea_0183_gnss_sentences_field_73',
    byteOffset: 146,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #73 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_074',
    name: 'nmea_0183_gnss_sentences_field_74',
    byteOffset: 148,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #74 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_075',
    name: 'nmea_0183_gnss_sentences_field_75',
    byteOffset: 150,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #75 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_076',
    name: 'nmea_0183_gnss_sentences_field_76',
    byteOffset: 152,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #76 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_077',
    name: 'nmea_0183_gnss_sentences_field_77',
    byteOffset: 154,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #77 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_078',
    name: 'nmea_0183_gnss_sentences_field_78',
    byteOffset: 156,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #78 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_079',
    name: 'nmea_0183_gnss_sentences_field_79',
    byteOffset: 158,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #79 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_080',
    name: 'nmea_0183_gnss_sentences_field_80',
    byteOffset: 160,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #80 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_081',
    name: 'nmea_0183_gnss_sentences_field_81',
    byteOffset: 162,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #81 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_082',
    name: 'nmea_0183_gnss_sentences_field_82',
    byteOffset: 164,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #82 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_083',
    name: 'nmea_0183_gnss_sentences_field_83',
    byteOffset: 166,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #83 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_084',
    name: 'nmea_0183_gnss_sentences_field_84',
    byteOffset: 168,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #84 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_085',
    name: 'nmea_0183_gnss_sentences_field_85',
    byteOffset: 170,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #85 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_086',
    name: 'nmea_0183_gnss_sentences_field_86',
    byteOffset: 172,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #86 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_087',
    name: 'nmea_0183_gnss_sentences_field_87',
    byteOffset: 174,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #87 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_088',
    name: 'nmea_0183_gnss_sentences_field_88',
    byteOffset: 176,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #88 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_089',
    name: 'nmea_0183_gnss_sentences_field_89',
    byteOffset: 178,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #89 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_090',
    name: 'nmea_0183_gnss_sentences_field_90',
    byteOffset: 180,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #90 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_091',
    name: 'nmea_0183_gnss_sentences_field_91',
    byteOffset: 182,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #91 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_092',
    name: 'nmea_0183_gnss_sentences_field_92',
    byteOffset: 184,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #92 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_093',
    name: 'nmea_0183_gnss_sentences_field_93',
    byteOffset: 186,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #93 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_094',
    name: 'nmea_0183_gnss_sentences_field_94',
    byteOffset: 188,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #94 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_095',
    name: 'nmea_0183_gnss_sentences_field_95',
    byteOffset: 190,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #95 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_096',
    name: 'nmea_0183_gnss_sentences_field_96',
    byteOffset: 192,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #96 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_097',
    name: 'nmea_0183_gnss_sentences_field_97',
    byteOffset: 194,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #97 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_098',
    name: 'nmea_0183_gnss_sentences_field_98',
    byteOffset: 196,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #98 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_099',
    name: 'nmea_0183_gnss_sentences_field_99',
    byteOffset: 198,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #99 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_100',
    name: 'nmea_0183_gnss_sentences_field_100',
    byteOffset: 200,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #100 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_101',
    name: 'nmea_0183_gnss_sentences_field_101',
    byteOffset: 202,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #101 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_102',
    name: 'nmea_0183_gnss_sentences_field_102',
    byteOffset: 204,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #102 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_103',
    name: 'nmea_0183_gnss_sentences_field_103',
    byteOffset: 206,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #103 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_104',
    name: 'nmea_0183_gnss_sentences_field_104',
    byteOffset: 208,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #104 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_105',
    name: 'nmea_0183_gnss_sentences_field_105',
    byteOffset: 210,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #105 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_106',
    name: 'nmea_0183_gnss_sentences_field_106',
    byteOffset: 212,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #106 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_107',
    name: 'nmea_0183_gnss_sentences_field_107',
    byteOffset: 214,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #107 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_108',
    name: 'nmea_0183_gnss_sentences_field_108',
    byteOffset: 216,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #108 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_109',
    name: 'nmea_0183_gnss_sentences_field_109',
    byteOffset: 218,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #109 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_110',
    name: 'nmea_0183_gnss_sentences_field_110',
    byteOffset: 220,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #110 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_111',
    name: 'nmea_0183_gnss_sentences_field_111',
    byteOffset: 222,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #111 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_112',
    name: 'nmea_0183_gnss_sentences_field_112',
    byteOffset: 224,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #112 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_113',
    name: 'nmea_0183_gnss_sentences_field_113',
    byteOffset: 226,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #113 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_114',
    name: 'nmea_0183_gnss_sentences_field_114',
    byteOffset: 228,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #114 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_115',
    name: 'nmea_0183_gnss_sentences_field_115',
    byteOffset: 230,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #115 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_116',
    name: 'nmea_0183_gnss_sentences_field_116',
    byteOffset: 232,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #116 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_117',
    name: 'nmea_0183_gnss_sentences_field_117',
    byteOffset: 234,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #117 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_118',
    name: 'nmea_0183_gnss_sentences_field_118',
    byteOffset: 236,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #118 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_119',
    name: 'nmea_0183_gnss_sentences_field_119',
    byteOffset: 238,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #119 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_120',
    name: 'nmea_0183_gnss_sentences_field_120',
    byteOffset: 240,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #120 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_121',
    name: 'nmea_0183_gnss_sentences_field_121',
    byteOffset: 242,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #121 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_122',
    name: 'nmea_0183_gnss_sentences_field_122',
    byteOffset: 244,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #122 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_123',
    name: 'nmea_0183_gnss_sentences_field_123',
    byteOffset: 246,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #123 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_124',
    name: 'nmea_0183_gnss_sentences_field_124',
    byteOffset: 248,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #124 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_125',
    name: 'nmea_0183_gnss_sentences_field_125',
    byteOffset: 250,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #125 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_126',
    name: 'nmea_0183_gnss_sentences_field_126',
    byteOffset: 252,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #126 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_127',
    name: 'nmea_0183_gnss_sentences_field_127',
    byteOffset: 254,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #127 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_128',
    name: 'nmea_0183_gnss_sentences_field_128',
    byteOffset: 256,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #128 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_129',
    name: 'nmea_0183_gnss_sentences_field_129',
    byteOffset: 258,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #129 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_130',
    name: 'nmea_0183_gnss_sentences_field_130',
    byteOffset: 260,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #130 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_131',
    name: 'nmea_0183_gnss_sentences_field_131',
    byteOffset: 262,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #131 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_132',
    name: 'nmea_0183_gnss_sentences_field_132',
    byteOffset: 264,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #132 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_133',
    name: 'nmea_0183_gnss_sentences_field_133',
    byteOffset: 266,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #133 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_134',
    name: 'nmea_0183_gnss_sentences_field_134',
    byteOffset: 268,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #134 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_135',
    name: 'nmea_0183_gnss_sentences_field_135',
    byteOffset: 270,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #135 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_136',
    name: 'nmea_0183_gnss_sentences_field_136',
    byteOffset: 272,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #136 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_137',
    name: 'nmea_0183_gnss_sentences_field_137',
    byteOffset: 274,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #137 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_138',
    name: 'nmea_0183_gnss_sentences_field_138',
    byteOffset: 276,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #138 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_139',
    name: 'nmea_0183_gnss_sentences_field_139',
    byteOffset: 278,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #139 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_140',
    name: 'nmea_0183_gnss_sentences_field_140',
    byteOffset: 280,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #140 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_141',
    name: 'nmea_0183_gnss_sentences_field_141',
    byteOffset: 282,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #141 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_142',
    name: 'nmea_0183_gnss_sentences_field_142',
    byteOffset: 284,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #142 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_143',
    name: 'nmea_0183_gnss_sentences_field_143',
    byteOffset: 286,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #143 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_144',
    name: 'nmea_0183_gnss_sentences_field_144',
    byteOffset: 288,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #144 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_145',
    name: 'nmea_0183_gnss_sentences_field_145',
    byteOffset: 290,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #145 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_146',
    name: 'nmea_0183_gnss_sentences_field_146',
    byteOffset: 292,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #146 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_147',
    name: 'nmea_0183_gnss_sentences_field_147',
    byteOffset: 294,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #147 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_148',
    name: 'nmea_0183_gnss_sentences_field_148',
    byteOffset: 296,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #148 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_149',
    name: 'nmea_0183_gnss_sentences_field_149',
    byteOffset: 298,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #149 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_150',
    name: 'nmea_0183_gnss_sentences_field_150',
    byteOffset: 300,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #150 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_151',
    name: 'nmea_0183_gnss_sentences_field_151',
    byteOffset: 302,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #151 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_152',
    name: 'nmea_0183_gnss_sentences_field_152',
    byteOffset: 304,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #152 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_153',
    name: 'nmea_0183_gnss_sentences_field_153',
    byteOffset: 306,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #153 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_154',
    name: 'nmea_0183_gnss_sentences_field_154',
    byteOffset: 308,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #154 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_155',
    name: 'nmea_0183_gnss_sentences_field_155',
    byteOffset: 310,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #155 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_156',
    name: 'nmea_0183_gnss_sentences_field_156',
    byteOffset: 312,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #156 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_157',
    name: 'nmea_0183_gnss_sentences_field_157',
    byteOffset: 314,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #157 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_158',
    name: 'nmea_0183_gnss_sentences_field_158',
    byteOffset: 316,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #158 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_159',
    name: 'nmea_0183_gnss_sentences_field_159',
    byteOffset: 318,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #159 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_160',
    name: 'nmea_0183_gnss_sentences_field_160',
    byteOffset: 320,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #160 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_161',
    name: 'nmea_0183_gnss_sentences_field_161',
    byteOffset: 322,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #161 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_162',
    name: 'nmea_0183_gnss_sentences_field_162',
    byteOffset: 324,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #162 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_163',
    name: 'nmea_0183_gnss_sentences_field_163',
    byteOffset: 326,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #163 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_164',
    name: 'nmea_0183_gnss_sentences_field_164',
    byteOffset: 328,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #164 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_165',
    name: 'nmea_0183_gnss_sentences_field_165',
    byteOffset: 330,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #165 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_166',
    name: 'nmea_0183_gnss_sentences_field_166',
    byteOffset: 332,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #166 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_167',
    name: 'nmea_0183_gnss_sentences_field_167',
    byteOffset: 334,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #167 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_168',
    name: 'nmea_0183_gnss_sentences_field_168',
    byteOffset: 336,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #168 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_169',
    name: 'nmea_0183_gnss_sentences_field_169',
    byteOffset: 338,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #169 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_170',
    name: 'nmea_0183_gnss_sentences_field_170',
    byteOffset: 340,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #170 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_171',
    name: 'nmea_0183_gnss_sentences_field_171',
    byteOffset: 342,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #171 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_172',
    name: 'nmea_0183_gnss_sentences_field_172',
    byteOffset: 344,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #172 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_173',
    name: 'nmea_0183_gnss_sentences_field_173',
    byteOffset: 346,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #173 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_174',
    name: 'nmea_0183_gnss_sentences_field_174',
    byteOffset: 348,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #174 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_175',
    name: 'nmea_0183_gnss_sentences_field_175',
    byteOffset: 350,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #175 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_176',
    name: 'nmea_0183_gnss_sentences_field_176',
    byteOffset: 352,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #176 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_177',
    name: 'nmea_0183_gnss_sentences_field_177',
    byteOffset: 354,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #177 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_178',
    name: 'nmea_0183_gnss_sentences_field_178',
    byteOffset: 356,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #178 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_179',
    name: 'nmea_0183_gnss_sentences_field_179',
    byteOffset: 358,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #179 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_180',
    name: 'nmea_0183_gnss_sentences_field_180',
    byteOffset: 360,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #180 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_181',
    name: 'nmea_0183_gnss_sentences_field_181',
    byteOffset: 362,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #181 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_182',
    name: 'nmea_0183_gnss_sentences_field_182',
    byteOffset: 364,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #182 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_183',
    name: 'nmea_0183_gnss_sentences_field_183',
    byteOffset: 366,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #183 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_184',
    name: 'nmea_0183_gnss_sentences_field_184',
    byteOffset: 368,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #184 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_185',
    name: 'nmea_0183_gnss_sentences_field_185',
    byteOffset: 370,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #185 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_186',
    name: 'nmea_0183_gnss_sentences_field_186',
    byteOffset: 372,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #186 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_187',
    name: 'nmea_0183_gnss_sentences_field_187',
    byteOffset: 374,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #187 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_188',
    name: 'nmea_0183_gnss_sentences_field_188',
    byteOffset: 376,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #188 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_189',
    name: 'nmea_0183_gnss_sentences_field_189',
    byteOffset: 378,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #189 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_190',
    name: 'nmea_0183_gnss_sentences_field_190',
    byteOffset: 380,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #190 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_191',
    name: 'nmea_0183_gnss_sentences_field_191',
    byteOffset: 382,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #191 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_192',
    name: 'nmea_0183_gnss_sentences_field_192',
    byteOffset: 384,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #192 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_193',
    name: 'nmea_0183_gnss_sentences_field_193',
    byteOffset: 386,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #193 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_194',
    name: 'nmea_0183_gnss_sentences_field_194',
    byteOffset: 388,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #194 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_195',
    name: 'nmea_0183_gnss_sentences_field_195',
    byteOffset: 390,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #195 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_196',
    name: 'nmea_0183_gnss_sentences_field_196',
    byteOffset: 392,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #196 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_197',
    name: 'nmea_0183_gnss_sentences_field_197',
    byteOffset: 394,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #197 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_198',
    name: 'nmea_0183_gnss_sentences_field_198',
    byteOffset: 396,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #198 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_199',
    name: 'nmea_0183_gnss_sentences_field_199',
    byteOffset: 398,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #199 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_200',
    name: 'nmea_0183_gnss_sentences_field_200',
    byteOffset: 400,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #200 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_201',
    name: 'nmea_0183_gnss_sentences_field_201',
    byteOffset: 402,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #201 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_202',
    name: 'nmea_0183_gnss_sentences_field_202',
    byteOffset: 404,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #202 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_203',
    name: 'nmea_0183_gnss_sentences_field_203',
    byteOffset: 406,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #203 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_204',
    name: 'nmea_0183_gnss_sentences_field_204',
    byteOffset: 408,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #204 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_205',
    name: 'nmea_0183_gnss_sentences_field_205',
    byteOffset: 410,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #205 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_206',
    name: 'nmea_0183_gnss_sentences_field_206',
    byteOffset: 412,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #206 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_207',
    name: 'nmea_0183_gnss_sentences_field_207',
    byteOffset: 414,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #207 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_208',
    name: 'nmea_0183_gnss_sentences_field_208',
    byteOffset: 416,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #208 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_209',
    name: 'nmea_0183_gnss_sentences_field_209',
    byteOffset: 418,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #209 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_210',
    name: 'nmea_0183_gnss_sentences_field_210',
    byteOffset: 420,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #210 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_211',
    name: 'nmea_0183_gnss_sentences_field_211',
    byteOffset: 422,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #211 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_212',
    name: 'nmea_0183_gnss_sentences_field_212',
    byteOffset: 424,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #212 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_213',
    name: 'nmea_0183_gnss_sentences_field_213',
    byteOffset: 426,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #213 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_214',
    name: 'nmea_0183_gnss_sentences_field_214',
    byteOffset: 428,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #214 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_215',
    name: 'nmea_0183_gnss_sentences_field_215',
    byteOffset: 430,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #215 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_216',
    name: 'nmea_0183_gnss_sentences_field_216',
    byteOffset: 432,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #216 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_217',
    name: 'nmea_0183_gnss_sentences_field_217',
    byteOffset: 434,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #217 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_218',
    name: 'nmea_0183_gnss_sentences_field_218',
    byteOffset: 436,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #218 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_219',
    name: 'nmea_0183_gnss_sentences_field_219',
    byteOffset: 438,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #219 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_220',
    name: 'nmea_0183_gnss_sentences_field_220',
    byteOffset: 440,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #220 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_221',
    name: 'nmea_0183_gnss_sentences_field_221',
    byteOffset: 442,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #221 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_222',
    name: 'nmea_0183_gnss_sentences_field_222',
    byteOffset: 444,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #222 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_223',
    name: 'nmea_0183_gnss_sentences_field_223',
    byteOffset: 446,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #223 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_224',
    name: 'nmea_0183_gnss_sentences_field_224',
    byteOffset: 448,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #224 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_225',
    name: 'nmea_0183_gnss_sentences_field_225',
    byteOffset: 450,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #225 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_226',
    name: 'nmea_0183_gnss_sentences_field_226',
    byteOffset: 452,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #226 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_227',
    name: 'nmea_0183_gnss_sentences_field_227',
    byteOffset: 454,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #227 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_228',
    name: 'nmea_0183_gnss_sentences_field_228',
    byteOffset: 456,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #228 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_229',
    name: 'nmea_0183_gnss_sentences_field_229',
    byteOffset: 458,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #229 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_230',
    name: 'nmea_0183_gnss_sentences_field_230',
    byteOffset: 460,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #230 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_231',
    name: 'nmea_0183_gnss_sentences_field_231',
    byteOffset: 462,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #231 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_232',
    name: 'nmea_0183_gnss_sentences_field_232',
    byteOffset: 464,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #232 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_233',
    name: 'nmea_0183_gnss_sentences_field_233',
    byteOffset: 466,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #233 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_234',
    name: 'nmea_0183_gnss_sentences_field_234',
    byteOffset: 468,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #234 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_235',
    name: 'nmea_0183_gnss_sentences_field_235',
    byteOffset: 470,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #235 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_236',
    name: 'nmea_0183_gnss_sentences_field_236',
    byteOffset: 472,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #236 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_237',
    name: 'nmea_0183_gnss_sentences_field_237',
    byteOffset: 474,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #237 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_238',
    name: 'nmea_0183_gnss_sentences_field_238',
    byteOffset: 476,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #238 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_239',
    name: 'nmea_0183_gnss_sentences_field_239',
    byteOffset: 478,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #239 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_240',
    name: 'nmea_0183_gnss_sentences_field_240',
    byteOffset: 480,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 0.1,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #240 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_241',
    name: 'nmea_0183_gnss_sentences_field_241',
    byteOffset: 482,
    bitLength: 32,
    dataType: 'uint32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #241 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_242',
    name: 'nmea_0183_gnss_sentences_field_242',
    byteOffset: 484,
    bitLength: 16,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #242 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_243',
    name: 'nmea_0183_gnss_sentences_field_243',
    byteOffset: 486,
    bitLength: 32,
    dataType: 'float32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #243 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_244',
    name: 'nmea_0183_gnss_sentences_field_244',
    byteOffset: 488,
    bitLength: 16,
    dataType: 'uint8',
    scaleFactor: 1.0,
    offset: 0,
    units: 'percentage',
    description: 'Hardware parameter definition #244 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_245',
    name: 'nmea_0183_gnss_sentences_field_245',
    byteOffset: 490,
    bitLength: 32,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'rpm',
    description: 'Hardware parameter definition #245 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_246',
    name: 'nmea_0183_gnss_sentences_field_246',
    byteOffset: 492,
    bitLength: 16,
    dataType: 'uint32',
    scaleFactor: 0.1,
    offset: 0,
    units: 'km/h',
    description: 'Hardware parameter definition #246 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_247',
    name: 'nmea_0183_gnss_sentences_field_247',
    byteOffset: 494,
    bitLength: 32,
    dataType: 'int16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'degC',
    description: 'Hardware parameter definition #247 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_248',
    name: 'nmea_0183_gnss_sentences_field_248',
    byteOffset: 496,
    bitLength: 16,
    dataType: 'float32',
    scaleFactor: 1.0,
    offset: 0,
    units: 'psi',
    description: 'Hardware parameter definition #248 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_249',
    name: 'nmea_0183_gnss_sentences_field_249',
    byteOffset: 498,
    bitLength: 32,
    dataType: 'uint8',
    scaleFactor: 0.1,
    offset: 0,
    units: 'volts',
    description: 'Hardware parameter definition #249 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
  {
    fieldId: 'FIELD_NMEA_0183_GNSS_SENTENCES_250',
    name: 'nmea_0183_gnss_sentences_field_250',
    byteOffset: 500,
    bitLength: 16,
    dataType: 'uint16',
    scaleFactor: 1.0,
    offset: 0,
    units: 'amperes',
    description: 'Hardware parameter definition #250 for NMEA 0183 High Precision Marine GNSS Sentence Parser. Decoded from incoming device telemetry stream.'
  },
];

export class Nmea0183GnssSentencesDecoder {
  public decodePayloadBlock_1(buffer: Buffer): Record<string, any> {
    const result: Record<string, any> = {
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
      decoderId: 'nmea-0183-gnss-sentences',
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
