/**
 * Enterprise Telecommunications Protocol Specification: Arista EOS Cloud Network Fabric & VoQ Buffer Monitoring MIB
 * Module: @geonet/types/telecom/snmp_arista_eos
 * Standard Compliance: 3GPP TS 38.401, IETF RFC Standards, ITU-T G.8032
 */

export interface AristaEOSCloudNetworkFabric&VoQBufferMonitoringMIBConfig {
  samplingIntervalMs: number;
  collectionEnabled: boolean;
  highWatermarkThreshold: number;
  lowWatermarkThreshold: number;
  retryAttempts: number;
  timeoutMs: number;
}

export interface SnmpAristaEosRecordV1 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV1 = Partial<SnmpAristaEosRecordV1> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV2 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV2 = Partial<SnmpAristaEosRecordV2> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV3 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV3 = Partial<SnmpAristaEosRecordV3> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV4 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV4 = Partial<SnmpAristaEosRecordV4> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV5 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV5 = Partial<SnmpAristaEosRecordV5> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV6 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV6 = Partial<SnmpAristaEosRecordV6> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV7 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV7 = Partial<SnmpAristaEosRecordV7> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV8 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV8 = Partial<SnmpAristaEosRecordV8> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV9 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV9 = Partial<SnmpAristaEosRecordV9> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV10 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV10 = Partial<SnmpAristaEosRecordV10> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV11 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV11 = Partial<SnmpAristaEosRecordV11> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV12 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV12 = Partial<SnmpAristaEosRecordV12> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV13 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV13 = Partial<SnmpAristaEosRecordV13> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV14 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV14 = Partial<SnmpAristaEosRecordV14> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV15 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV15 = Partial<SnmpAristaEosRecordV15> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV16 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV16 = Partial<SnmpAristaEosRecordV16> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV17 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV17 = Partial<SnmpAristaEosRecordV17> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV18 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV18 = Partial<SnmpAristaEosRecordV18> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV19 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV19 = Partial<SnmpAristaEosRecordV19> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV20 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV20 = Partial<SnmpAristaEosRecordV20> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV21 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV21 = Partial<SnmpAristaEosRecordV21> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV22 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV22 = Partial<SnmpAristaEosRecordV22> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV23 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV23 = Partial<SnmpAristaEosRecordV23> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV24 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV24 = Partial<SnmpAristaEosRecordV24> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV25 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV25 = Partial<SnmpAristaEosRecordV25> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV26 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV26 = Partial<SnmpAristaEosRecordV26> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV27 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV27 = Partial<SnmpAristaEosRecordV27> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV28 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV28 = Partial<SnmpAristaEosRecordV28> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV29 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV29 = Partial<SnmpAristaEosRecordV29> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV30 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV30 = Partial<SnmpAristaEosRecordV30> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV31 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV31 = Partial<SnmpAristaEosRecordV31> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV32 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV32 = Partial<SnmpAristaEosRecordV32> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV33 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV33 = Partial<SnmpAristaEosRecordV33> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV34 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV34 = Partial<SnmpAristaEosRecordV34> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV35 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV35 = Partial<SnmpAristaEosRecordV35> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV36 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV36 = Partial<SnmpAristaEosRecordV36> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV37 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV37 = Partial<SnmpAristaEosRecordV37> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV38 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV38 = Partial<SnmpAristaEosRecordV38> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV39 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV39 = Partial<SnmpAristaEosRecordV39> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};

export interface SnmpAristaEosRecordV40 {
  id: string;
  timestamp: string;
  nodeIdentifier: string;
  chassisSlot: number;
  interfaceIndex: number;
  protocolVersion: string;
  checksum: string;
  operationalState: 'UP' | 'DOWN' | 'TESTING' | 'DORMANT' | 'DEGRADED';
  aristavoqallocatedbytes_primaryMetric: number;
  aristavoqallocatedbytes_secondaryMetric: number;
  aristavoqallocatedbytes_baselineAverage: number;
  aristavoqallocatedbytes_peakObserved: number;
  aristavoqallocatedbytes_standardDeviation: number;
  aristavoqallocatedbytes_rawHexSample: string;
  aristavoqallocatedbytes_metadataTag: Record<string, string>;
  aristabuffercongestiondrops_primaryMetric: number;
  aristabuffercongestiondrops_secondaryMetric: number;
  aristabuffercongestiondrops_baselineAverage: number;
  aristabuffercongestiondrops_peakObserved: number;
  aristabuffercongestiondrops_standardDeviation: number;
  aristabuffercongestiondrops_rawHexSample: string;
  aristabuffercongestiondrops_metadataTag: Record<string, string>;
  aristaflowcounter_primaryMetric: number;
  aristaflowcounter_secondaryMetric: number;
  aristaflowcounter_baselineAverage: number;
  aristaflowcounter_peakObserved: number;
  aristaflowcounter_standardDeviation: number;
  aristaflowcounter_rawHexSample: string;
  aristaflowcounter_metadataTag: Record<string, string>;
  aristatransceiverdom_primaryMetric: number;
  aristatransceiverdom_secondaryMetric: number;
  aristatransceiverdom_baselineAverage: number;
  aristatransceiverdom_peakObserved: number;
  aristatransceiverdom_standardDeviation: number;
  aristatransceiverdom_rawHexSample: string;
  aristatransceiverdom_metadataTag: Record<string, string>;
  diagnosticFlags: number[];
  auditHash: string;
}

export type SnmpAristaEosFilterV40 = Partial<SnmpAristaEosRecordV40> & {
  startDate?: string;
  endDate?: string;
  limit?: number;
  cursor?: string;
  sortOrder?: 'ASC' | 'DESC';
};
