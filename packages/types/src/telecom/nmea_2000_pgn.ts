/**
 * Enterprise Telecommunications Protocol Specification: NMEA-2000 CAN-Bus Parameter Group Numbers (PGN) Specifications
 * Module: @geonet/types/telecom/nmea_2000_pgn
 * Standard Compliance: 3GPP TS 38.401, IETF RFC Standards, ITU-T G.8032
 */

export interface NMEA2000CANBusParameterGroupNumbersPGNSpecificationsConfig {
  samplingIntervalMs: number;
  collectionEnabled: boolean;
  highWatermarkThreshold: number;
  lowWatermarkThreshold: number;
  retryAttempts: number;
  timeoutMs: number;
}

export interface Nmea2000PgnRecordV1 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV1 = Partial<Nmea2000PgnRecordV1> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV2 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV2 = Partial<Nmea2000PgnRecordV2> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV3 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV3 = Partial<Nmea2000PgnRecordV3> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV4 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV4 = Partial<Nmea2000PgnRecordV4> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV5 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV5 = Partial<Nmea2000PgnRecordV5> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV6 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV6 = Partial<Nmea2000PgnRecordV6> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV7 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV7 = Partial<Nmea2000PgnRecordV7> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV8 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV8 = Partial<Nmea2000PgnRecordV8> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV9 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV9 = Partial<Nmea2000PgnRecordV9> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV10 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV10 = Partial<Nmea2000PgnRecordV10> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV11 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV11 = Partial<Nmea2000PgnRecordV11> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV12 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV12 = Partial<Nmea2000PgnRecordV12> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV13 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV13 = Partial<Nmea2000PgnRecordV13> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV14 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV14 = Partial<Nmea2000PgnRecordV14> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV15 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV15 = Partial<Nmea2000PgnRecordV15> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV16 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV16 = Partial<Nmea2000PgnRecordV16> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV17 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV17 = Partial<Nmea2000PgnRecordV17> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV18 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV18 = Partial<Nmea2000PgnRecordV18> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV19 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV19 = Partial<Nmea2000PgnRecordV19> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV20 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV20 = Partial<Nmea2000PgnRecordV20> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV21 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV21 = Partial<Nmea2000PgnRecordV21> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV22 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV22 = Partial<Nmea2000PgnRecordV22> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV23 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV23 = Partial<Nmea2000PgnRecordV23> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV24 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV24 = Partial<Nmea2000PgnRecordV24> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV25 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV25 = Partial<Nmea2000PgnRecordV25> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV26 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV26 = Partial<Nmea2000PgnRecordV26> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV27 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV27 = Partial<Nmea2000PgnRecordV27> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV28 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV28 = Partial<Nmea2000PgnRecordV28> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV29 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV29 = Partial<Nmea2000PgnRecordV29> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV30 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV30 = Partial<Nmea2000PgnRecordV30> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV31 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV31 = Partial<Nmea2000PgnRecordV31> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV32 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV32 = Partial<Nmea2000PgnRecordV32> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV33 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV33 = Partial<Nmea2000PgnRecordV33> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV34 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV34 = Partial<Nmea2000PgnRecordV34> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV35 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV35 = Partial<Nmea2000PgnRecordV35> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV36 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV36 = Partial<Nmea2000PgnRecordV36> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV37 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV37 = Partial<Nmea2000PgnRecordV37> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV38 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV38 = Partial<Nmea2000PgnRecordV38> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV39 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV39 = Partial<Nmea2000PgnRecordV39> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface Nmea2000PgnRecordV40 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  pgn129025_positionrapid_primaryMetric: number;
  pgn129025_positionrapid_secondaryMetric: number;
  pgn129025_positionrapid_baselineAverage: number;
  pgn129025_positionrapid_peakObserved: number;
  pgn129025_positionrapid_standardDeviation: number;
  pgn129025_positionrapid_rawHexSample: string;
  pgn129025_positionrapid_metadataTag: Record<string, string>;
  pgn129026_cogsograpid_primaryMetric: number;
  pgn129026_cogsograpid_secondaryMetric: number;
  pgn129026_cogsograpid_baselineAverage: number;
  pgn129026_cogsograpid_peakObserved: number;
  pgn129026_cogsograpid_standardDeviation: number;
  pgn129026_cogsograpid_rawHexSample: string;
  pgn129026_cogsograpid_metadataTag: Record<string, string>;
  pgn129029_gnsspositiondata_primaryMetric: number;
  pgn129029_gnsspositiondata_secondaryMetric: number;
  pgn129029_gnsspositiondata_baselineAverage: number;
  pgn129029_gnsspositiondata_peakObserved: number;
  pgn129029_gnsspositiondata_standardDeviation: number;
  pgn129029_gnsspositiondata_rawHexSample: string;
  pgn129029_gnsspositiondata_metadataTag: Record<string, string>;
  pgn127250_vesselheading_primaryMetric: number;
  pgn127250_vesselheading_secondaryMetric: number;
  pgn127250_vesselheading_baselineAverage: number;
  pgn127250_vesselheading_peakObserved: number;
  pgn127250_vesselheading_standardDeviation: number;
  pgn127250_vesselheading_rawHexSample: string;
  pgn127250_vesselheading_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type Nmea2000PgnFilterV40 = Partial<Nmea2000PgnRecordV40> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};
