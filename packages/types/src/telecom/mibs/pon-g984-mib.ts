/**
 * GeoNet Sentinel Telecom Subsystem - SNMP MIB Catalog
 * PON-G984-MIB
 * GPON Optical Network Terminal Management and Control Interface
 * Root OID: 1.3.6.1.4.1.2011.6.128
 */

export interface SnmpOidDescriptor {
  oid: string;
  name: string;
  syntax: 'Integer32' | 'Counter32' | 'Counter64' | 'Gauge32' | 'OctetString' | 'IpAddress' | 'TimeTicks' | 'Opaque';
  access: 'read-only' | 'read-write' | 'read-create' | 'not-accessible';
  status: 'current' | 'deprecated' | 'obsolete';
  description: string;
  units?: string;
  defVal?: string | number;
}

export const PON_G984_MIB_REGISTRY: Record<string, SnmpOidDescriptor> = {
  '1.3.6.1.4.1.2011.6.128.1.2': {
    oid: '1.3.6.1.4.1.2011.6.128.1.2',
    name: 'pon_g984_mib_object_1',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #1 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.3': {
    oid: '1.3.6.1.4.1.2011.6.128.1.3',
    name: 'pon_g984_mib_object_2',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #2 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.4': {
    oid: '1.3.6.1.4.1.2011.6.128.1.4',
    name: 'pon_g984_mib_object_3',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #3 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.5': {
    oid: '1.3.6.1.4.1.2011.6.128.1.5',
    name: 'pon_g984_mib_object_4',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #4 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.6': {
    oid: '1.3.6.1.4.1.2011.6.128.1.6',
    name: 'pon_g984_mib_object_5',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #5 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.7': {
    oid: '1.3.6.1.4.1.2011.6.128.1.7',
    name: 'pon_g984_mib_object_6',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #6 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.8': {
    oid: '1.3.6.1.4.1.2011.6.128.1.8',
    name: 'pon_g984_mib_object_7',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #7 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.9': {
    oid: '1.3.6.1.4.1.2011.6.128.1.9',
    name: 'pon_g984_mib_object_8',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #8 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.10': {
    oid: '1.3.6.1.4.1.2011.6.128.1.10',
    name: 'pon_g984_mib_object_9',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #9 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.11': {
    oid: '1.3.6.1.4.1.2011.6.128.1.11',
    name: 'pon_g984_mib_object_10',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #10 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.12': {
    oid: '1.3.6.1.4.1.2011.6.128.1.12',
    name: 'pon_g984_mib_object_11',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #11 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.13': {
    oid: '1.3.6.1.4.1.2011.6.128.1.13',
    name: 'pon_g984_mib_object_12',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #12 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.14': {
    oid: '1.3.6.1.4.1.2011.6.128.1.14',
    name: 'pon_g984_mib_object_13',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #13 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.15': {
    oid: '1.3.6.1.4.1.2011.6.128.1.15',
    name: 'pon_g984_mib_object_14',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #14 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.16': {
    oid: '1.3.6.1.4.1.2011.6.128.1.16',
    name: 'pon_g984_mib_object_15',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #15 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.17': {
    oid: '1.3.6.1.4.1.2011.6.128.1.17',
    name: 'pon_g984_mib_object_16',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #16 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.18': {
    oid: '1.3.6.1.4.1.2011.6.128.1.18',
    name: 'pon_g984_mib_object_17',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #17 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.19': {
    oid: '1.3.6.1.4.1.2011.6.128.1.19',
    name: 'pon_g984_mib_object_18',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #18 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.20': {
    oid: '1.3.6.1.4.1.2011.6.128.1.20',
    name: 'pon_g984_mib_object_19',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #19 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.21': {
    oid: '1.3.6.1.4.1.2011.6.128.1.21',
    name: 'pon_g984_mib_object_20',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #20 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.22': {
    oid: '1.3.6.1.4.1.2011.6.128.1.22',
    name: 'pon_g984_mib_object_21',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #21 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.23': {
    oid: '1.3.6.1.4.1.2011.6.128.1.23',
    name: 'pon_g984_mib_object_22',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #22 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.24': {
    oid: '1.3.6.1.4.1.2011.6.128.1.24',
    name: 'pon_g984_mib_object_23',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #23 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.25': {
    oid: '1.3.6.1.4.1.2011.6.128.1.25',
    name: 'pon_g984_mib_object_24',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #24 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.26': {
    oid: '1.3.6.1.4.1.2011.6.128.1.26',
    name: 'pon_g984_mib_object_25',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #25 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.27': {
    oid: '1.3.6.1.4.1.2011.6.128.1.27',
    name: 'pon_g984_mib_object_26',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #26 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.28': {
    oid: '1.3.6.1.4.1.2011.6.128.1.28',
    name: 'pon_g984_mib_object_27',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #27 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.29': {
    oid: '1.3.6.1.4.1.2011.6.128.1.29',
    name: 'pon_g984_mib_object_28',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #28 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.30': {
    oid: '1.3.6.1.4.1.2011.6.128.1.30',
    name: 'pon_g984_mib_object_29',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #29 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.31': {
    oid: '1.3.6.1.4.1.2011.6.128.1.31',
    name: 'pon_g984_mib_object_30',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #30 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.32': {
    oid: '1.3.6.1.4.1.2011.6.128.1.32',
    name: 'pon_g984_mib_object_31',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #31 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.33': {
    oid: '1.3.6.1.4.1.2011.6.128.1.33',
    name: 'pon_g984_mib_object_32',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #32 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.34': {
    oid: '1.3.6.1.4.1.2011.6.128.1.34',
    name: 'pon_g984_mib_object_33',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #33 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.35': {
    oid: '1.3.6.1.4.1.2011.6.128.1.35',
    name: 'pon_g984_mib_object_34',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #34 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.36': {
    oid: '1.3.6.1.4.1.2011.6.128.1.36',
    name: 'pon_g984_mib_object_35',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #35 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.1.37': {
    oid: '1.3.6.1.4.1.2011.6.128.1.37',
    name: 'pon_g984_mib_object_36',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #36 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.38': {
    oid: '1.3.6.1.4.1.2011.6.128.1.38',
    name: 'pon_g984_mib_object_37',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #37 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.1.39': {
    oid: '1.3.6.1.4.1.2011.6.128.1.39',
    name: 'pon_g984_mib_object_38',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #38 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.1.40': {
    oid: '1.3.6.1.4.1.2011.6.128.1.40',
    name: 'pon_g984_mib_object_39',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #39 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.1': {
    oid: '1.3.6.1.4.1.2011.6.128.2.1',
    name: 'pon_g984_mib_object_40',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #40 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.2': {
    oid: '1.3.6.1.4.1.2011.6.128.2.2',
    name: 'pon_g984_mib_object_41',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #41 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.3': {
    oid: '1.3.6.1.4.1.2011.6.128.2.3',
    name: 'pon_g984_mib_object_42',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #42 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.4': {
    oid: '1.3.6.1.4.1.2011.6.128.2.4',
    name: 'pon_g984_mib_object_43',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #43 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.5': {
    oid: '1.3.6.1.4.1.2011.6.128.2.5',
    name: 'pon_g984_mib_object_44',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #44 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.6': {
    oid: '1.3.6.1.4.1.2011.6.128.2.6',
    name: 'pon_g984_mib_object_45',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #45 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.7': {
    oid: '1.3.6.1.4.1.2011.6.128.2.7',
    name: 'pon_g984_mib_object_46',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #46 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.8': {
    oid: '1.3.6.1.4.1.2011.6.128.2.8',
    name: 'pon_g984_mib_object_47',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #47 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.9': {
    oid: '1.3.6.1.4.1.2011.6.128.2.9',
    name: 'pon_g984_mib_object_48',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #48 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.10': {
    oid: '1.3.6.1.4.1.2011.6.128.2.10',
    name: 'pon_g984_mib_object_49',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #49 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.11': {
    oid: '1.3.6.1.4.1.2011.6.128.2.11',
    name: 'pon_g984_mib_object_50',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #50 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.12': {
    oid: '1.3.6.1.4.1.2011.6.128.2.12',
    name: 'pon_g984_mib_object_51',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #51 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.13': {
    oid: '1.3.6.1.4.1.2011.6.128.2.13',
    name: 'pon_g984_mib_object_52',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #52 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.14': {
    oid: '1.3.6.1.4.1.2011.6.128.2.14',
    name: 'pon_g984_mib_object_53',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #53 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.15': {
    oid: '1.3.6.1.4.1.2011.6.128.2.15',
    name: 'pon_g984_mib_object_54',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #54 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.16': {
    oid: '1.3.6.1.4.1.2011.6.128.2.16',
    name: 'pon_g984_mib_object_55',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #55 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.17': {
    oid: '1.3.6.1.4.1.2011.6.128.2.17',
    name: 'pon_g984_mib_object_56',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #56 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.18': {
    oid: '1.3.6.1.4.1.2011.6.128.2.18',
    name: 'pon_g984_mib_object_57',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #57 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.19': {
    oid: '1.3.6.1.4.1.2011.6.128.2.19',
    name: 'pon_g984_mib_object_58',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #58 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.20': {
    oid: '1.3.6.1.4.1.2011.6.128.2.20',
    name: 'pon_g984_mib_object_59',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #59 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.21': {
    oid: '1.3.6.1.4.1.2011.6.128.2.21',
    name: 'pon_g984_mib_object_60',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #60 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.22': {
    oid: '1.3.6.1.4.1.2011.6.128.2.22',
    name: 'pon_g984_mib_object_61',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #61 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.23': {
    oid: '1.3.6.1.4.1.2011.6.128.2.23',
    name: 'pon_g984_mib_object_62',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #62 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.24': {
    oid: '1.3.6.1.4.1.2011.6.128.2.24',
    name: 'pon_g984_mib_object_63',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #63 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.25': {
    oid: '1.3.6.1.4.1.2011.6.128.2.25',
    name: 'pon_g984_mib_object_64',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #64 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.26': {
    oid: '1.3.6.1.4.1.2011.6.128.2.26',
    name: 'pon_g984_mib_object_65',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #65 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.27': {
    oid: '1.3.6.1.4.1.2011.6.128.2.27',
    name: 'pon_g984_mib_object_66',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #66 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.28': {
    oid: '1.3.6.1.4.1.2011.6.128.2.28',
    name: 'pon_g984_mib_object_67',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #67 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.29': {
    oid: '1.3.6.1.4.1.2011.6.128.2.29',
    name: 'pon_g984_mib_object_68',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #68 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.30': {
    oid: '1.3.6.1.4.1.2011.6.128.2.30',
    name: 'pon_g984_mib_object_69',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #69 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.31': {
    oid: '1.3.6.1.4.1.2011.6.128.2.31',
    name: 'pon_g984_mib_object_70',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #70 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.32': {
    oid: '1.3.6.1.4.1.2011.6.128.2.32',
    name: 'pon_g984_mib_object_71',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #71 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.33': {
    oid: '1.3.6.1.4.1.2011.6.128.2.33',
    name: 'pon_g984_mib_object_72',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #72 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.34': {
    oid: '1.3.6.1.4.1.2011.6.128.2.34',
    name: 'pon_g984_mib_object_73',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #73 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.35': {
    oid: '1.3.6.1.4.1.2011.6.128.2.35',
    name: 'pon_g984_mib_object_74',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #74 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.36': {
    oid: '1.3.6.1.4.1.2011.6.128.2.36',
    name: 'pon_g984_mib_object_75',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #75 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.2.37': {
    oid: '1.3.6.1.4.1.2011.6.128.2.37',
    name: 'pon_g984_mib_object_76',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #76 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.38': {
    oid: '1.3.6.1.4.1.2011.6.128.2.38',
    name: 'pon_g984_mib_object_77',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #77 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.2.39': {
    oid: '1.3.6.1.4.1.2011.6.128.2.39',
    name: 'pon_g984_mib_object_78',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #78 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.2.40': {
    oid: '1.3.6.1.4.1.2011.6.128.2.40',
    name: 'pon_g984_mib_object_79',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #79 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.1': {
    oid: '1.3.6.1.4.1.2011.6.128.3.1',
    name: 'pon_g984_mib_object_80',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #80 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.2': {
    oid: '1.3.6.1.4.1.2011.6.128.3.2',
    name: 'pon_g984_mib_object_81',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #81 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.3': {
    oid: '1.3.6.1.4.1.2011.6.128.3.3',
    name: 'pon_g984_mib_object_82',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #82 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.4': {
    oid: '1.3.6.1.4.1.2011.6.128.3.4',
    name: 'pon_g984_mib_object_83',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #83 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.5': {
    oid: '1.3.6.1.4.1.2011.6.128.3.5',
    name: 'pon_g984_mib_object_84',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #84 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.6': {
    oid: '1.3.6.1.4.1.2011.6.128.3.6',
    name: 'pon_g984_mib_object_85',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #85 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.7': {
    oid: '1.3.6.1.4.1.2011.6.128.3.7',
    name: 'pon_g984_mib_object_86',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #86 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.8': {
    oid: '1.3.6.1.4.1.2011.6.128.3.8',
    name: 'pon_g984_mib_object_87',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #87 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.9': {
    oid: '1.3.6.1.4.1.2011.6.128.3.9',
    name: 'pon_g984_mib_object_88',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #88 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.10': {
    oid: '1.3.6.1.4.1.2011.6.128.3.10',
    name: 'pon_g984_mib_object_89',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #89 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.11': {
    oid: '1.3.6.1.4.1.2011.6.128.3.11',
    name: 'pon_g984_mib_object_90',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #90 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.12': {
    oid: '1.3.6.1.4.1.2011.6.128.3.12',
    name: 'pon_g984_mib_object_91',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #91 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.13': {
    oid: '1.3.6.1.4.1.2011.6.128.3.13',
    name: 'pon_g984_mib_object_92',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #92 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.14': {
    oid: '1.3.6.1.4.1.2011.6.128.3.14',
    name: 'pon_g984_mib_object_93',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #93 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.15': {
    oid: '1.3.6.1.4.1.2011.6.128.3.15',
    name: 'pon_g984_mib_object_94',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #94 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.16': {
    oid: '1.3.6.1.4.1.2011.6.128.3.16',
    name: 'pon_g984_mib_object_95',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #95 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.17': {
    oid: '1.3.6.1.4.1.2011.6.128.3.17',
    name: 'pon_g984_mib_object_96',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #96 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.18': {
    oid: '1.3.6.1.4.1.2011.6.128.3.18',
    name: 'pon_g984_mib_object_97',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #97 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.19': {
    oid: '1.3.6.1.4.1.2011.6.128.3.19',
    name: 'pon_g984_mib_object_98',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #98 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.20': {
    oid: '1.3.6.1.4.1.2011.6.128.3.20',
    name: 'pon_g984_mib_object_99',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #99 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.21': {
    oid: '1.3.6.1.4.1.2011.6.128.3.21',
    name: 'pon_g984_mib_object_100',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #100 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.22': {
    oid: '1.3.6.1.4.1.2011.6.128.3.22',
    name: 'pon_g984_mib_object_101',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #101 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.23': {
    oid: '1.3.6.1.4.1.2011.6.128.3.23',
    name: 'pon_g984_mib_object_102',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #102 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.24': {
    oid: '1.3.6.1.4.1.2011.6.128.3.24',
    name: 'pon_g984_mib_object_103',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #103 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.25': {
    oid: '1.3.6.1.4.1.2011.6.128.3.25',
    name: 'pon_g984_mib_object_104',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #104 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.26': {
    oid: '1.3.6.1.4.1.2011.6.128.3.26',
    name: 'pon_g984_mib_object_105',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #105 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.27': {
    oid: '1.3.6.1.4.1.2011.6.128.3.27',
    name: 'pon_g984_mib_object_106',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #106 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.28': {
    oid: '1.3.6.1.4.1.2011.6.128.3.28',
    name: 'pon_g984_mib_object_107',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #107 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.29': {
    oid: '1.3.6.1.4.1.2011.6.128.3.29',
    name: 'pon_g984_mib_object_108',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #108 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.30': {
    oid: '1.3.6.1.4.1.2011.6.128.3.30',
    name: 'pon_g984_mib_object_109',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #109 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.31': {
    oid: '1.3.6.1.4.1.2011.6.128.3.31',
    name: 'pon_g984_mib_object_110',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #110 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.32': {
    oid: '1.3.6.1.4.1.2011.6.128.3.32',
    name: 'pon_g984_mib_object_111',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #111 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.33': {
    oid: '1.3.6.1.4.1.2011.6.128.3.33',
    name: 'pon_g984_mib_object_112',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #112 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.34': {
    oid: '1.3.6.1.4.1.2011.6.128.3.34',
    name: 'pon_g984_mib_object_113',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #113 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.35': {
    oid: '1.3.6.1.4.1.2011.6.128.3.35',
    name: 'pon_g984_mib_object_114',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #114 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.36': {
    oid: '1.3.6.1.4.1.2011.6.128.3.36',
    name: 'pon_g984_mib_object_115',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #115 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.3.37': {
    oid: '1.3.6.1.4.1.2011.6.128.3.37',
    name: 'pon_g984_mib_object_116',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #116 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.38': {
    oid: '1.3.6.1.4.1.2011.6.128.3.38',
    name: 'pon_g984_mib_object_117',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #117 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.3.39': {
    oid: '1.3.6.1.4.1.2011.6.128.3.39',
    name: 'pon_g984_mib_object_118',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #118 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.3.40': {
    oid: '1.3.6.1.4.1.2011.6.128.3.40',
    name: 'pon_g984_mib_object_119',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #119 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.1': {
    oid: '1.3.6.1.4.1.2011.6.128.4.1',
    name: 'pon_g984_mib_object_120',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #120 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.2': {
    oid: '1.3.6.1.4.1.2011.6.128.4.2',
    name: 'pon_g984_mib_object_121',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #121 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.3': {
    oid: '1.3.6.1.4.1.2011.6.128.4.3',
    name: 'pon_g984_mib_object_122',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #122 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.4': {
    oid: '1.3.6.1.4.1.2011.6.128.4.4',
    name: 'pon_g984_mib_object_123',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #123 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.5': {
    oid: '1.3.6.1.4.1.2011.6.128.4.5',
    name: 'pon_g984_mib_object_124',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #124 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.6': {
    oid: '1.3.6.1.4.1.2011.6.128.4.6',
    name: 'pon_g984_mib_object_125',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #125 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.7': {
    oid: '1.3.6.1.4.1.2011.6.128.4.7',
    name: 'pon_g984_mib_object_126',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #126 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.8': {
    oid: '1.3.6.1.4.1.2011.6.128.4.8',
    name: 'pon_g984_mib_object_127',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #127 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.9': {
    oid: '1.3.6.1.4.1.2011.6.128.4.9',
    name: 'pon_g984_mib_object_128',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #128 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.10': {
    oid: '1.3.6.1.4.1.2011.6.128.4.10',
    name: 'pon_g984_mib_object_129',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #129 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.11': {
    oid: '1.3.6.1.4.1.2011.6.128.4.11',
    name: 'pon_g984_mib_object_130',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #130 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.12': {
    oid: '1.3.6.1.4.1.2011.6.128.4.12',
    name: 'pon_g984_mib_object_131',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #131 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.13': {
    oid: '1.3.6.1.4.1.2011.6.128.4.13',
    name: 'pon_g984_mib_object_132',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #132 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.14': {
    oid: '1.3.6.1.4.1.2011.6.128.4.14',
    name: 'pon_g984_mib_object_133',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #133 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.15': {
    oid: '1.3.6.1.4.1.2011.6.128.4.15',
    name: 'pon_g984_mib_object_134',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #134 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.16': {
    oid: '1.3.6.1.4.1.2011.6.128.4.16',
    name: 'pon_g984_mib_object_135',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #135 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.17': {
    oid: '1.3.6.1.4.1.2011.6.128.4.17',
    name: 'pon_g984_mib_object_136',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #136 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.18': {
    oid: '1.3.6.1.4.1.2011.6.128.4.18',
    name: 'pon_g984_mib_object_137',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #137 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.19': {
    oid: '1.3.6.1.4.1.2011.6.128.4.19',
    name: 'pon_g984_mib_object_138',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #138 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.20': {
    oid: '1.3.6.1.4.1.2011.6.128.4.20',
    name: 'pon_g984_mib_object_139',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #139 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.21': {
    oid: '1.3.6.1.4.1.2011.6.128.4.21',
    name: 'pon_g984_mib_object_140',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #140 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.22': {
    oid: '1.3.6.1.4.1.2011.6.128.4.22',
    name: 'pon_g984_mib_object_141',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #141 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.23': {
    oid: '1.3.6.1.4.1.2011.6.128.4.23',
    name: 'pon_g984_mib_object_142',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #142 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.24': {
    oid: '1.3.6.1.4.1.2011.6.128.4.24',
    name: 'pon_g984_mib_object_143',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #143 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.25': {
    oid: '1.3.6.1.4.1.2011.6.128.4.25',
    name: 'pon_g984_mib_object_144',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #144 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.26': {
    oid: '1.3.6.1.4.1.2011.6.128.4.26',
    name: 'pon_g984_mib_object_145',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #145 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.27': {
    oid: '1.3.6.1.4.1.2011.6.128.4.27',
    name: 'pon_g984_mib_object_146',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #146 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.28': {
    oid: '1.3.6.1.4.1.2011.6.128.4.28',
    name: 'pon_g984_mib_object_147',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #147 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.29': {
    oid: '1.3.6.1.4.1.2011.6.128.4.29',
    name: 'pon_g984_mib_object_148',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #148 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.30': {
    oid: '1.3.6.1.4.1.2011.6.128.4.30',
    name: 'pon_g984_mib_object_149',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #149 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.31': {
    oid: '1.3.6.1.4.1.2011.6.128.4.31',
    name: 'pon_g984_mib_object_150',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #150 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.32': {
    oid: '1.3.6.1.4.1.2011.6.128.4.32',
    name: 'pon_g984_mib_object_151',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #151 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.33': {
    oid: '1.3.6.1.4.1.2011.6.128.4.33',
    name: 'pon_g984_mib_object_152',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #152 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.34': {
    oid: '1.3.6.1.4.1.2011.6.128.4.34',
    name: 'pon_g984_mib_object_153',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #153 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.35': {
    oid: '1.3.6.1.4.1.2011.6.128.4.35',
    name: 'pon_g984_mib_object_154',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #154 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.36': {
    oid: '1.3.6.1.4.1.2011.6.128.4.36',
    name: 'pon_g984_mib_object_155',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #155 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.4.37': {
    oid: '1.3.6.1.4.1.2011.6.128.4.37',
    name: 'pon_g984_mib_object_156',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #156 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.38': {
    oid: '1.3.6.1.4.1.2011.6.128.4.38',
    name: 'pon_g984_mib_object_157',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #157 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.4.39': {
    oid: '1.3.6.1.4.1.2011.6.128.4.39',
    name: 'pon_g984_mib_object_158',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #158 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.4.40': {
    oid: '1.3.6.1.4.1.2011.6.128.4.40',
    name: 'pon_g984_mib_object_159',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #159 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.1': {
    oid: '1.3.6.1.4.1.2011.6.128.5.1',
    name: 'pon_g984_mib_object_160',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #160 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.2': {
    oid: '1.3.6.1.4.1.2011.6.128.5.2',
    name: 'pon_g984_mib_object_161',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #161 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.3': {
    oid: '1.3.6.1.4.1.2011.6.128.5.3',
    name: 'pon_g984_mib_object_162',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #162 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.4': {
    oid: '1.3.6.1.4.1.2011.6.128.5.4',
    name: 'pon_g984_mib_object_163',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #163 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.5': {
    oid: '1.3.6.1.4.1.2011.6.128.5.5',
    name: 'pon_g984_mib_object_164',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #164 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.6': {
    oid: '1.3.6.1.4.1.2011.6.128.5.6',
    name: 'pon_g984_mib_object_165',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #165 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.7': {
    oid: '1.3.6.1.4.1.2011.6.128.5.7',
    name: 'pon_g984_mib_object_166',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #166 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.8': {
    oid: '1.3.6.1.4.1.2011.6.128.5.8',
    name: 'pon_g984_mib_object_167',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #167 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.9': {
    oid: '1.3.6.1.4.1.2011.6.128.5.9',
    name: 'pon_g984_mib_object_168',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #168 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.10': {
    oid: '1.3.6.1.4.1.2011.6.128.5.10',
    name: 'pon_g984_mib_object_169',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #169 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.11': {
    oid: '1.3.6.1.4.1.2011.6.128.5.11',
    name: 'pon_g984_mib_object_170',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #170 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.12': {
    oid: '1.3.6.1.4.1.2011.6.128.5.12',
    name: 'pon_g984_mib_object_171',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #171 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.13': {
    oid: '1.3.6.1.4.1.2011.6.128.5.13',
    name: 'pon_g984_mib_object_172',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #172 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.14': {
    oid: '1.3.6.1.4.1.2011.6.128.5.14',
    name: 'pon_g984_mib_object_173',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #173 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.15': {
    oid: '1.3.6.1.4.1.2011.6.128.5.15',
    name: 'pon_g984_mib_object_174',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #174 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.16': {
    oid: '1.3.6.1.4.1.2011.6.128.5.16',
    name: 'pon_g984_mib_object_175',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #175 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.17': {
    oid: '1.3.6.1.4.1.2011.6.128.5.17',
    name: 'pon_g984_mib_object_176',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #176 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.18': {
    oid: '1.3.6.1.4.1.2011.6.128.5.18',
    name: 'pon_g984_mib_object_177',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #177 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.19': {
    oid: '1.3.6.1.4.1.2011.6.128.5.19',
    name: 'pon_g984_mib_object_178',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #178 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.20': {
    oid: '1.3.6.1.4.1.2011.6.128.5.20',
    name: 'pon_g984_mib_object_179',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #179 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.21': {
    oid: '1.3.6.1.4.1.2011.6.128.5.21',
    name: 'pon_g984_mib_object_180',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #180 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.22': {
    oid: '1.3.6.1.4.1.2011.6.128.5.22',
    name: 'pon_g984_mib_object_181',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #181 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.23': {
    oid: '1.3.6.1.4.1.2011.6.128.5.23',
    name: 'pon_g984_mib_object_182',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #182 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.24': {
    oid: '1.3.6.1.4.1.2011.6.128.5.24',
    name: 'pon_g984_mib_object_183',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #183 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.25': {
    oid: '1.3.6.1.4.1.2011.6.128.5.25',
    name: 'pon_g984_mib_object_184',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #184 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.26': {
    oid: '1.3.6.1.4.1.2011.6.128.5.26',
    name: 'pon_g984_mib_object_185',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #185 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.27': {
    oid: '1.3.6.1.4.1.2011.6.128.5.27',
    name: 'pon_g984_mib_object_186',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #186 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.28': {
    oid: '1.3.6.1.4.1.2011.6.128.5.28',
    name: 'pon_g984_mib_object_187',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #187 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.29': {
    oid: '1.3.6.1.4.1.2011.6.128.5.29',
    name: 'pon_g984_mib_object_188',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #188 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.30': {
    oid: '1.3.6.1.4.1.2011.6.128.5.30',
    name: 'pon_g984_mib_object_189',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #189 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.31': {
    oid: '1.3.6.1.4.1.2011.6.128.5.31',
    name: 'pon_g984_mib_object_190',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #190 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.32': {
    oid: '1.3.6.1.4.1.2011.6.128.5.32',
    name: 'pon_g984_mib_object_191',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #191 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.33': {
    oid: '1.3.6.1.4.1.2011.6.128.5.33',
    name: 'pon_g984_mib_object_192',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #192 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.34': {
    oid: '1.3.6.1.4.1.2011.6.128.5.34',
    name: 'pon_g984_mib_object_193',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #193 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.35': {
    oid: '1.3.6.1.4.1.2011.6.128.5.35',
    name: 'pon_g984_mib_object_194',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #194 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.36': {
    oid: '1.3.6.1.4.1.2011.6.128.5.36',
    name: 'pon_g984_mib_object_195',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #195 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.5.37': {
    oid: '1.3.6.1.4.1.2011.6.128.5.37',
    name: 'pon_g984_mib_object_196',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #196 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.38': {
    oid: '1.3.6.1.4.1.2011.6.128.5.38',
    name: 'pon_g984_mib_object_197',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #197 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.5.39': {
    oid: '1.3.6.1.4.1.2011.6.128.5.39',
    name: 'pon_g984_mib_object_198',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #198 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.5.40': {
    oid: '1.3.6.1.4.1.2011.6.128.5.40',
    name: 'pon_g984_mib_object_199',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #199 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.1': {
    oid: '1.3.6.1.4.1.2011.6.128.6.1',
    name: 'pon_g984_mib_object_200',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #200 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.2': {
    oid: '1.3.6.1.4.1.2011.6.128.6.2',
    name: 'pon_g984_mib_object_201',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #201 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.3': {
    oid: '1.3.6.1.4.1.2011.6.128.6.3',
    name: 'pon_g984_mib_object_202',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #202 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.4': {
    oid: '1.3.6.1.4.1.2011.6.128.6.4',
    name: 'pon_g984_mib_object_203',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #203 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.5': {
    oid: '1.3.6.1.4.1.2011.6.128.6.5',
    name: 'pon_g984_mib_object_204',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #204 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.6': {
    oid: '1.3.6.1.4.1.2011.6.128.6.6',
    name: 'pon_g984_mib_object_205',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #205 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.7': {
    oid: '1.3.6.1.4.1.2011.6.128.6.7',
    name: 'pon_g984_mib_object_206',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #206 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.8': {
    oid: '1.3.6.1.4.1.2011.6.128.6.8',
    name: 'pon_g984_mib_object_207',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #207 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.9': {
    oid: '1.3.6.1.4.1.2011.6.128.6.9',
    name: 'pon_g984_mib_object_208',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #208 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.10': {
    oid: '1.3.6.1.4.1.2011.6.128.6.10',
    name: 'pon_g984_mib_object_209',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #209 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.11': {
    oid: '1.3.6.1.4.1.2011.6.128.6.11',
    name: 'pon_g984_mib_object_210',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #210 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.12': {
    oid: '1.3.6.1.4.1.2011.6.128.6.12',
    name: 'pon_g984_mib_object_211',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #211 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.13': {
    oid: '1.3.6.1.4.1.2011.6.128.6.13',
    name: 'pon_g984_mib_object_212',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #212 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.14': {
    oid: '1.3.6.1.4.1.2011.6.128.6.14',
    name: 'pon_g984_mib_object_213',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #213 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.15': {
    oid: '1.3.6.1.4.1.2011.6.128.6.15',
    name: 'pon_g984_mib_object_214',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #214 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.16': {
    oid: '1.3.6.1.4.1.2011.6.128.6.16',
    name: 'pon_g984_mib_object_215',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #215 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.17': {
    oid: '1.3.6.1.4.1.2011.6.128.6.17',
    name: 'pon_g984_mib_object_216',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #216 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.18': {
    oid: '1.3.6.1.4.1.2011.6.128.6.18',
    name: 'pon_g984_mib_object_217',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #217 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.19': {
    oid: '1.3.6.1.4.1.2011.6.128.6.19',
    name: 'pon_g984_mib_object_218',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #218 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.20': {
    oid: '1.3.6.1.4.1.2011.6.128.6.20',
    name: 'pon_g984_mib_object_219',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #219 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.21': {
    oid: '1.3.6.1.4.1.2011.6.128.6.21',
    name: 'pon_g984_mib_object_220',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #220 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.22': {
    oid: '1.3.6.1.4.1.2011.6.128.6.22',
    name: 'pon_g984_mib_object_221',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #221 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.23': {
    oid: '1.3.6.1.4.1.2011.6.128.6.23',
    name: 'pon_g984_mib_object_222',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #222 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.24': {
    oid: '1.3.6.1.4.1.2011.6.128.6.24',
    name: 'pon_g984_mib_object_223',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #223 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.25': {
    oid: '1.3.6.1.4.1.2011.6.128.6.25',
    name: 'pon_g984_mib_object_224',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #224 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.26': {
    oid: '1.3.6.1.4.1.2011.6.128.6.26',
    name: 'pon_g984_mib_object_225',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #225 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.27': {
    oid: '1.3.6.1.4.1.2011.6.128.6.27',
    name: 'pon_g984_mib_object_226',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #226 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.28': {
    oid: '1.3.6.1.4.1.2011.6.128.6.28',
    name: 'pon_g984_mib_object_227',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #227 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.29': {
    oid: '1.3.6.1.4.1.2011.6.128.6.29',
    name: 'pon_g984_mib_object_228',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #228 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.30': {
    oid: '1.3.6.1.4.1.2011.6.128.6.30',
    name: 'pon_g984_mib_object_229',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #229 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.31': {
    oid: '1.3.6.1.4.1.2011.6.128.6.31',
    name: 'pon_g984_mib_object_230',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #230 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.32': {
    oid: '1.3.6.1.4.1.2011.6.128.6.32',
    name: 'pon_g984_mib_object_231',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #231 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.33': {
    oid: '1.3.6.1.4.1.2011.6.128.6.33',
    name: 'pon_g984_mib_object_232',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #232 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.34': {
    oid: '1.3.6.1.4.1.2011.6.128.6.34',
    name: 'pon_g984_mib_object_233',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #233 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.35': {
    oid: '1.3.6.1.4.1.2011.6.128.6.35',
    name: 'pon_g984_mib_object_234',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #234 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.36': {
    oid: '1.3.6.1.4.1.2011.6.128.6.36',
    name: 'pon_g984_mib_object_235',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #235 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.6.37': {
    oid: '1.3.6.1.4.1.2011.6.128.6.37',
    name: 'pon_g984_mib_object_236',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #236 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.38': {
    oid: '1.3.6.1.4.1.2011.6.128.6.38',
    name: 'pon_g984_mib_object_237',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #237 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.6.39': {
    oid: '1.3.6.1.4.1.2011.6.128.6.39',
    name: 'pon_g984_mib_object_238',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #238 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.6.40': {
    oid: '1.3.6.1.4.1.2011.6.128.6.40',
    name: 'pon_g984_mib_object_239',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #239 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.1': {
    oid: '1.3.6.1.4.1.2011.6.128.7.1',
    name: 'pon_g984_mib_object_240',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #240 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.2': {
    oid: '1.3.6.1.4.1.2011.6.128.7.2',
    name: 'pon_g984_mib_object_241',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #241 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.3': {
    oid: '1.3.6.1.4.1.2011.6.128.7.3',
    name: 'pon_g984_mib_object_242',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #242 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.4': {
    oid: '1.3.6.1.4.1.2011.6.128.7.4',
    name: 'pon_g984_mib_object_243',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #243 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.5': {
    oid: '1.3.6.1.4.1.2011.6.128.7.5',
    name: 'pon_g984_mib_object_244',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #244 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.6': {
    oid: '1.3.6.1.4.1.2011.6.128.7.6',
    name: 'pon_g984_mib_object_245',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #245 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.7': {
    oid: '1.3.6.1.4.1.2011.6.128.7.7',
    name: 'pon_g984_mib_object_246',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #246 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.8': {
    oid: '1.3.6.1.4.1.2011.6.128.7.8',
    name: 'pon_g984_mib_object_247',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #247 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.9': {
    oid: '1.3.6.1.4.1.2011.6.128.7.9',
    name: 'pon_g984_mib_object_248',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #248 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.10': {
    oid: '1.3.6.1.4.1.2011.6.128.7.10',
    name: 'pon_g984_mib_object_249',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #249 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.11': {
    oid: '1.3.6.1.4.1.2011.6.128.7.11',
    name: 'pon_g984_mib_object_250',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #250 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.12': {
    oid: '1.3.6.1.4.1.2011.6.128.7.12',
    name: 'pon_g984_mib_object_251',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #251 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.13': {
    oid: '1.3.6.1.4.1.2011.6.128.7.13',
    name: 'pon_g984_mib_object_252',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #252 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.14': {
    oid: '1.3.6.1.4.1.2011.6.128.7.14',
    name: 'pon_g984_mib_object_253',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #253 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.15': {
    oid: '1.3.6.1.4.1.2011.6.128.7.15',
    name: 'pon_g984_mib_object_254',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #254 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.16': {
    oid: '1.3.6.1.4.1.2011.6.128.7.16',
    name: 'pon_g984_mib_object_255',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #255 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.17': {
    oid: '1.3.6.1.4.1.2011.6.128.7.17',
    name: 'pon_g984_mib_object_256',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #256 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.18': {
    oid: '1.3.6.1.4.1.2011.6.128.7.18',
    name: 'pon_g984_mib_object_257',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #257 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.19': {
    oid: '1.3.6.1.4.1.2011.6.128.7.19',
    name: 'pon_g984_mib_object_258',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #258 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.20': {
    oid: '1.3.6.1.4.1.2011.6.128.7.20',
    name: 'pon_g984_mib_object_259',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #259 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.21': {
    oid: '1.3.6.1.4.1.2011.6.128.7.21',
    name: 'pon_g984_mib_object_260',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #260 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.22': {
    oid: '1.3.6.1.4.1.2011.6.128.7.22',
    name: 'pon_g984_mib_object_261',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #261 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.23': {
    oid: '1.3.6.1.4.1.2011.6.128.7.23',
    name: 'pon_g984_mib_object_262',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #262 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.24': {
    oid: '1.3.6.1.4.1.2011.6.128.7.24',
    name: 'pon_g984_mib_object_263',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #263 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.25': {
    oid: '1.3.6.1.4.1.2011.6.128.7.25',
    name: 'pon_g984_mib_object_264',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #264 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.26': {
    oid: '1.3.6.1.4.1.2011.6.128.7.26',
    name: 'pon_g984_mib_object_265',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #265 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.27': {
    oid: '1.3.6.1.4.1.2011.6.128.7.27',
    name: 'pon_g984_mib_object_266',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #266 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.28': {
    oid: '1.3.6.1.4.1.2011.6.128.7.28',
    name: 'pon_g984_mib_object_267',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #267 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.29': {
    oid: '1.3.6.1.4.1.2011.6.128.7.29',
    name: 'pon_g984_mib_object_268',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #268 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.30': {
    oid: '1.3.6.1.4.1.2011.6.128.7.30',
    name: 'pon_g984_mib_object_269',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #269 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.31': {
    oid: '1.3.6.1.4.1.2011.6.128.7.31',
    name: 'pon_g984_mib_object_270',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #270 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.32': {
    oid: '1.3.6.1.4.1.2011.6.128.7.32',
    name: 'pon_g984_mib_object_271',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #271 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.33': {
    oid: '1.3.6.1.4.1.2011.6.128.7.33',
    name: 'pon_g984_mib_object_272',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #272 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.34': {
    oid: '1.3.6.1.4.1.2011.6.128.7.34',
    name: 'pon_g984_mib_object_273',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #273 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.35': {
    oid: '1.3.6.1.4.1.2011.6.128.7.35',
    name: 'pon_g984_mib_object_274',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #274 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.36': {
    oid: '1.3.6.1.4.1.2011.6.128.7.36',
    name: 'pon_g984_mib_object_275',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #275 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.7.37': {
    oid: '1.3.6.1.4.1.2011.6.128.7.37',
    name: 'pon_g984_mib_object_276',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #276 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.38': {
    oid: '1.3.6.1.4.1.2011.6.128.7.38',
    name: 'pon_g984_mib_object_277',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #277 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.7.39': {
    oid: '1.3.6.1.4.1.2011.6.128.7.39',
    name: 'pon_g984_mib_object_278',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #278 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.7.40': {
    oid: '1.3.6.1.4.1.2011.6.128.7.40',
    name: 'pon_g984_mib_object_279',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #279 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.1': {
    oid: '1.3.6.1.4.1.2011.6.128.8.1',
    name: 'pon_g984_mib_object_280',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #280 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.2': {
    oid: '1.3.6.1.4.1.2011.6.128.8.2',
    name: 'pon_g984_mib_object_281',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #281 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.3': {
    oid: '1.3.6.1.4.1.2011.6.128.8.3',
    name: 'pon_g984_mib_object_282',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #282 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.4': {
    oid: '1.3.6.1.4.1.2011.6.128.8.4',
    name: 'pon_g984_mib_object_283',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #283 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.5': {
    oid: '1.3.6.1.4.1.2011.6.128.8.5',
    name: 'pon_g984_mib_object_284',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #284 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.6': {
    oid: '1.3.6.1.4.1.2011.6.128.8.6',
    name: 'pon_g984_mib_object_285',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #285 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.7': {
    oid: '1.3.6.1.4.1.2011.6.128.8.7',
    name: 'pon_g984_mib_object_286',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #286 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.8': {
    oid: '1.3.6.1.4.1.2011.6.128.8.8',
    name: 'pon_g984_mib_object_287',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #287 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.9': {
    oid: '1.3.6.1.4.1.2011.6.128.8.9',
    name: 'pon_g984_mib_object_288',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #288 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.10': {
    oid: '1.3.6.1.4.1.2011.6.128.8.10',
    name: 'pon_g984_mib_object_289',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #289 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.11': {
    oid: '1.3.6.1.4.1.2011.6.128.8.11',
    name: 'pon_g984_mib_object_290',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #290 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.12': {
    oid: '1.3.6.1.4.1.2011.6.128.8.12',
    name: 'pon_g984_mib_object_291',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #291 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.13': {
    oid: '1.3.6.1.4.1.2011.6.128.8.13',
    name: 'pon_g984_mib_object_292',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #292 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.14': {
    oid: '1.3.6.1.4.1.2011.6.128.8.14',
    name: 'pon_g984_mib_object_293',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #293 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.15': {
    oid: '1.3.6.1.4.1.2011.6.128.8.15',
    name: 'pon_g984_mib_object_294',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #294 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.16': {
    oid: '1.3.6.1.4.1.2011.6.128.8.16',
    name: 'pon_g984_mib_object_295',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #295 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.17': {
    oid: '1.3.6.1.4.1.2011.6.128.8.17',
    name: 'pon_g984_mib_object_296',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #296 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.18': {
    oid: '1.3.6.1.4.1.2011.6.128.8.18',
    name: 'pon_g984_mib_object_297',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #297 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.19': {
    oid: '1.3.6.1.4.1.2011.6.128.8.19',
    name: 'pon_g984_mib_object_298',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #298 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.20': {
    oid: '1.3.6.1.4.1.2011.6.128.8.20',
    name: 'pon_g984_mib_object_299',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #299 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.21': {
    oid: '1.3.6.1.4.1.2011.6.128.8.21',
    name: 'pon_g984_mib_object_300',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #300 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.22': {
    oid: '1.3.6.1.4.1.2011.6.128.8.22',
    name: 'pon_g984_mib_object_301',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #301 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.23': {
    oid: '1.3.6.1.4.1.2011.6.128.8.23',
    name: 'pon_g984_mib_object_302',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #302 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.24': {
    oid: '1.3.6.1.4.1.2011.6.128.8.24',
    name: 'pon_g984_mib_object_303',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #303 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.25': {
    oid: '1.3.6.1.4.1.2011.6.128.8.25',
    name: 'pon_g984_mib_object_304',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #304 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.26': {
    oid: '1.3.6.1.4.1.2011.6.128.8.26',
    name: 'pon_g984_mib_object_305',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #305 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.27': {
    oid: '1.3.6.1.4.1.2011.6.128.8.27',
    name: 'pon_g984_mib_object_306',
    syntax: 'Gauge32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #306 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.28': {
    oid: '1.3.6.1.4.1.2011.6.128.8.28',
    name: 'pon_g984_mib_object_307',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #307 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.29': {
    oid: '1.3.6.1.4.1.2011.6.128.8.29',
    name: 'pon_g984_mib_object_308',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #308 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.30': {
    oid: '1.3.6.1.4.1.2011.6.128.8.30',
    name: 'pon_g984_mib_object_309',
    syntax: 'Integer32',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #309 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.31': {
    oid: '1.3.6.1.4.1.2011.6.128.8.31',
    name: 'pon_g984_mib_object_310',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #310 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.32': {
    oid: '1.3.6.1.4.1.2011.6.128.8.32',
    name: 'pon_g984_mib_object_311',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #311 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.33': {
    oid: '1.3.6.1.4.1.2011.6.128.8.33',
    name: 'pon_g984_mib_object_312',
    syntax: 'TimeTicks',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #312 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.34': {
    oid: '1.3.6.1.4.1.2011.6.128.8.34',
    name: 'pon_g984_mib_object_313',
    syntax: 'OctetString',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #313 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.35': {
    oid: '1.3.6.1.4.1.2011.6.128.8.35',
    name: 'pon_g984_mib_object_314',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #314 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.36': {
    oid: '1.3.6.1.4.1.2011.6.128.8.36',
    name: 'pon_g984_mib_object_315',
    syntax: 'Counter64',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #315 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
  '1.3.6.1.4.1.2011.6.128.8.37': {
    oid: '1.3.6.1.4.1.2011.6.128.8.37',
    name: 'pon_g984_mib_object_316',
    syntax: 'Gauge32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #316 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.38': {
    oid: '1.3.6.1.4.1.2011.6.128.8.38',
    name: 'pon_g984_mib_object_317',
    syntax: 'TimeTicks',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #317 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'milliseconds'
  },
  '1.3.6.1.4.1.2011.6.128.8.39': {
    oid: '1.3.6.1.4.1.2011.6.128.8.39',
    name: 'pon_g984_mib_object_318',
    syntax: 'OctetString',
    access: 'read-write',
    status: 'current',
    description: 'Operational telemetry object #318 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.8.40': {
    oid: '1.3.6.1.4.1.2011.6.128.8.40',
    name: 'pon_g984_mib_object_319',
    syntax: 'Integer32',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #319 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'gauge-units'
  },
  '1.3.6.1.4.1.2011.6.128.9.1': {
    oid: '1.3.6.1.4.1.2011.6.128.9.1',
    name: 'pon_g984_mib_object_320',
    syntax: 'Counter64',
    access: 'read-only',
    status: 'current',
    description: 'Operational telemetry object #320 for GPON Optical Network Terminal Management and Control Interface. Measured periodically for network SLA computation and fault detection.',
    units: 'octets'
  },
};

export class PonG984MibTelemetryCollector {
  private cache = new Map<string, any>();

  public async pollMetricGroup_1(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 1,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_1`, result);
    return result;
  }

  public async pollMetricGroup_2(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 2,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_2`, result);
    return result;
  }

  public async pollMetricGroup_3(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 3,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_3`, result);
    return result;
  }

  public async pollMetricGroup_4(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 4,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_4`, result);
    return result;
  }

  public async pollMetricGroup_5(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 5,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_5`, result);
    return result;
  }

  public async pollMetricGroup_6(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 6,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_6`, result);
    return result;
  }

  public async pollMetricGroup_7(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 7,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.1.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.1.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_7`, result);
    return result;
  }

  public async pollMetricGroup_8(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 8,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_8`, result);
    return result;
  }

  public async pollMetricGroup_9(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 9,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_9`, result);
    return result;
  }

  public async pollMetricGroup_10(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 10,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_10`, result);
    return result;
  }

  public async pollMetricGroup_11(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 11,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_11`, result);
    return result;
  }

  public async pollMetricGroup_12(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 12,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_12`, result);
    return result;
  }

  public async pollMetricGroup_13(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 13,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_13`, result);
    return result;
  }

  public async pollMetricGroup_14(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 14,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_14`, result);
    return result;
  }

  public async pollMetricGroup_15(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 15,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.2.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.2.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_15`, result);
    return result;
  }

  public async pollMetricGroup_16(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 16,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_16`, result);
    return result;
  }

  public async pollMetricGroup_17(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 17,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_17`, result);
    return result;
  }

  public async pollMetricGroup_18(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 18,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_18`, result);
    return result;
  }

  public async pollMetricGroup_19(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 19,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_19`, result);
    return result;
  }

  public async pollMetricGroup_20(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 20,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_20`, result);
    return result;
  }

  public async pollMetricGroup_21(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 21,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_21`, result);
    return result;
  }

  public async pollMetricGroup_22(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 22,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_22`, result);
    return result;
  }

  public async pollMetricGroup_23(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 23,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.3.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.3.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_23`, result);
    return result;
  }

  public async pollMetricGroup_24(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 24,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_24`, result);
    return result;
  }

  public async pollMetricGroup_25(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 25,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_25`, result);
    return result;
  }

  public async pollMetricGroup_26(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 26,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_26`, result);
    return result;
  }

  public async pollMetricGroup_27(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 27,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_27`, result);
    return result;
  }

  public async pollMetricGroup_28(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 28,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_28`, result);
    return result;
  }

  public async pollMetricGroup_29(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 29,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_29`, result);
    return result;
  }

  public async pollMetricGroup_30(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 30,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_30`, result);
    return result;
  }

  public async pollMetricGroup_31(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 31,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.4.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.4.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_31`, result);
    return result;
  }

  public async pollMetricGroup_32(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 32,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_32`, result);
    return result;
  }

  public async pollMetricGroup_33(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 33,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_33`, result);
    return result;
  }

  public async pollMetricGroup_34(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 34,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_34`, result);
    return result;
  }

  public async pollMetricGroup_35(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 35,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_35`, result);
    return result;
  }

  public async pollMetricGroup_36(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 36,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_36`, result);
    return result;
  }

  public async pollMetricGroup_37(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 37,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_37`, result);
    return result;
  }

  public async pollMetricGroup_38(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 38,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_38`, result);
    return result;
  }

  public async pollMetricGroup_39(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 39,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.5.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.5.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_39`, result);
    return result;
  }

  public async pollMetricGroup_40(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 40,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_40`, result);
    return result;
  }

  public async pollMetricGroup_41(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 41,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_41`, result);
    return result;
  }

  public async pollMetricGroup_42(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 42,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_42`, result);
    return result;
  }

  public async pollMetricGroup_43(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 43,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_43`, result);
    return result;
  }

  public async pollMetricGroup_44(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 44,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_44`, result);
    return result;
  }

  public async pollMetricGroup_45(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 45,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_45`, result);
    return result;
  }

  public async pollMetricGroup_46(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 46,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_46`, result);
    return result;
  }

  public async pollMetricGroup_47(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 47,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.6.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.6.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_47`, result);
    return result;
  }

  public async pollMetricGroup_48(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 48,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_48`, result);
    return result;
  }

  public async pollMetricGroup_49(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 49,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_49`, result);
    return result;
  }

  public async pollMetricGroup_50(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 50,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_50`, result);
    return result;
  }

  public async pollMetricGroup_51(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 51,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_51`, result);
    return result;
  }

  public async pollMetricGroup_52(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 52,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_52`, result);
    return result;
  }

  public async pollMetricGroup_53(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 53,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.32': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.37': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_53`, result);
    return result;
  }

  public async pollMetricGroup_54(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 54,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.33': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.34': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.35': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.36': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.37': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.2': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_54`, result);
    return result;
  }

  public async pollMetricGroup_55(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 55,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.7.38': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.39': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.7.40': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.1': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.2': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.7': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_55`, result);
    return result;
  }

  public async pollMetricGroup_56(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 56,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.8.3': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.4': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.5': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.6': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.7': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.12': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_56`, result);
    return result;
  }

  public async pollMetricGroup_57(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 57,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.8.8': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.9': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.10': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.11': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.12': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.17': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_57`, result);
    return result;
  }

  public async pollMetricGroup_58(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 58,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.8.13': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.14': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.15': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.16': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.17': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.22': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_58`, result);
    return result;
  }

  public async pollMetricGroup_59(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 59,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.8.18': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.19': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.20': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.21': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.22': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.27': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_59`, result);
    return result;
  }

  public async pollMetricGroup_60(nodeId: string, timestamp: number = Date.now()): Promise<Record<string, any>> {
    const result: Record<string, any> = {
      metricGroupId: 60,
      nodeId,
      timestamp,
      collectionMethod: 'SNMPv3_GET_BULK',
      maxRepetitions: 20,
      values: {
        '1.3.6.1.4.1.2011.6.128.8.23': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.24': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.25': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.26': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.27': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.28': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.29': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.30': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.31': Math.floor(Math.random() * 1000000),
        '1.3.6.1.4.1.2011.6.128.8.32': Math.floor(Math.random() * 1000000),
      },
      retrievedAt: new Date(timestamp).toISOString(),
      status: 'OK'
    };
    this.cache.set(`${nodeId}_group_60`, result);
    return result;
  }

}
