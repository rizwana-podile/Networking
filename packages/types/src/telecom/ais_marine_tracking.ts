/**
 * Enterprise Telecommunications Protocol Specification: Automatic Identification System (AIS) Maritime Transponder Spec
 * Module: @geonet/types/telecom/ais_marine_tracking
 * Standard Compliance: 3GPP TS 38.401, IETF RFC Standards, ITU-T G.8032
 */

export interface AutomaticIdentificationSystemAISMaritimeTransponderSpecConfig {
  samplingIntervalMs: number;
  collectionEnabled: boolean;
  highWatermarkThreshold: number;
  lowWatermarkThreshold: number;
  retryAttempts: number;
  timeoutMs: number;
}

export interface AisMarineTrackingRecordV1 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV1 = Partial<AisMarineTrackingRecordV1> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV2 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV2 = Partial<AisMarineTrackingRecordV2> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV3 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV3 = Partial<AisMarineTrackingRecordV3> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV4 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV4 = Partial<AisMarineTrackingRecordV4> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV5 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV5 = Partial<AisMarineTrackingRecordV5> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV6 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV6 = Partial<AisMarineTrackingRecordV6> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV7 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV7 = Partial<AisMarineTrackingRecordV7> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV8 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV8 = Partial<AisMarineTrackingRecordV8> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV9 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV9 = Partial<AisMarineTrackingRecordV9> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV10 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV10 = Partial<AisMarineTrackingRecordV10> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV11 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV11 = Partial<AisMarineTrackingRecordV11> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV12 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV12 = Partial<AisMarineTrackingRecordV12> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV13 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV13 = Partial<AisMarineTrackingRecordV13> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV14 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV14 = Partial<AisMarineTrackingRecordV14> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV15 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV15 = Partial<AisMarineTrackingRecordV15> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV16 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV16 = Partial<AisMarineTrackingRecordV16> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV17 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV17 = Partial<AisMarineTrackingRecordV17> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV18 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV18 = Partial<AisMarineTrackingRecordV18> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV19 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV19 = Partial<AisMarineTrackingRecordV19> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV20 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV20 = Partial<AisMarineTrackingRecordV20> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV21 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV21 = Partial<AisMarineTrackingRecordV21> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV22 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV22 = Partial<AisMarineTrackingRecordV22> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV23 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV23 = Partial<AisMarineTrackingRecordV23> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV24 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV24 = Partial<AisMarineTrackingRecordV24> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV25 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV25 = Partial<AisMarineTrackingRecordV25> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV26 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV26 = Partial<AisMarineTrackingRecordV26> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV27 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV27 = Partial<AisMarineTrackingRecordV27> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV28 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV28 = Partial<AisMarineTrackingRecordV28> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV29 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV29 = Partial<AisMarineTrackingRecordV29> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV30 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV30 = Partial<AisMarineTrackingRecordV30> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV31 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV31 = Partial<AisMarineTrackingRecordV31> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV32 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV32 = Partial<AisMarineTrackingRecordV32> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV33 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV33 = Partial<AisMarineTrackingRecordV33> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV34 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV34 = Partial<AisMarineTrackingRecordV34> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV35 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV35 = Partial<AisMarineTrackingRecordV35> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV36 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV36 = Partial<AisMarineTrackingRecordV36> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV37 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV37 = Partial<AisMarineTrackingRecordV37> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV38 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV38 = Partial<AisMarineTrackingRecordV38> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV39 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV39 = Partial<AisMarineTrackingRecordV39> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface AisMarineTrackingRecordV40 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  ais_type1_positionreport_primaryMetric: number;
  ais_type1_positionreport_secondaryMetric: number;
  ais_type1_positionreport_baselineAverage: number;
  ais_type1_positionreport_peakObserved: number;
  ais_type1_positionreport_standardDeviation: number;
  ais_type1_positionreport_rawHexSample: string;
  ais_type1_positionreport_metadataTag: Record<string, string>;
  ais_type4_basestationreport_primaryMetric: number;
  ais_type4_basestationreport_secondaryMetric: number;
  ais_type4_basestationreport_baselineAverage: number;
  ais_type4_basestationreport_peakObserved: number;
  ais_type4_basestationreport_standardDeviation: number;
  ais_type4_basestationreport_rawHexSample: string;
  ais_type4_basestationreport_metadataTag: Record<string, string>;
  ais_type5_voyagedata_primaryMetric: number;
  ais_type5_voyagedata_secondaryMetric: number;
  ais_type5_voyagedata_baselineAverage: number;
  ais_type5_voyagedata_peakObserved: number;
  ais_type5_voyagedata_standardDeviation: number;
  ais_type5_voyagedata_rawHexSample: string;
  ais_type5_voyagedata_metadataTag: Record<string, string>;
  ais_type24_staticdata_primaryMetric: number;
  ais_type24_staticdata_secondaryMetric: number;
  ais_type24_staticdata_baselineAverage: number;
  ais_type24_staticdata_peakObserved: number;
  ais_type24_staticdata_standardDeviation: number;
  ais_type24_staticdata_rawHexSample: string;
  ais_type24_staticdata_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type AisMarineTrackingFilterV40 = Partial<AisMarineTrackingRecordV40> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};
