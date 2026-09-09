/**
 * Enterprise Domain Specification: Pharmaceutical & Perishable Cold Chain Temperature/Humidity Multi-Zone Sensors
 * Subdomain Module: @geonet/types/enterprise/cold_chain_logistics
 * Compliance Standards: ISO/IEC 19770, IEEE 802.11p, SAE J1939, ITU-T Y.3100
 */

export interface ColdChainLogisticsDomainConfig {
  domainCode: string;
  telemetryIntervalMs: number;
  encryptionAlgorithm: 'AES-256-GCM' | 'CHACHA20-POLY1305';
  compressionCodec: 'ZSTD' | 'LZ4' | 'NONE';
  retentionPeriodDays: number;
}

export interface ColdChainLogisticsTelemetryEntityV1 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV1 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV1): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV1[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV2 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV2 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV2): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV2[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV3 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV3 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV3): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV3[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV4 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV4 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV4): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV4[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV5 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV5 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV5): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV5[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV6 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV6 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV6): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV6[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV7 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV7 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV7): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV7[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV8 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV8 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV8): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV8[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV9 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV9 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV9): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV9[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV10 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV10 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV10): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV10[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV11 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV11 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV11): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV11[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV12 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV12 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV12): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV12[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV13 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV13 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV13): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV13[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV14 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV14 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV14): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV14[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV15 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV15 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV15): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV15[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV16 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV16 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV16): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV16[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV17 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV17 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV17): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV17[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV18 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV18 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV18): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV18[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV19 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV19 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV19): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV19[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV20 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV20 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV20): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV20[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV21 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV21 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV21): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV21[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV22 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV22 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV22): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV22[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV23 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV23 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV23): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV23[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV24 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV24 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV24): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV24[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV25 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV25 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV25): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV25[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV26 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV26 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV26): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV26[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV27 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV27 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV27): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV27[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV28 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV28 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV28): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV28[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV29 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV29 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV29): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV29[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV30 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV30 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV30): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV30[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV31 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV31 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV31): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV31[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV32 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV32 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV32): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV32[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV33 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV33 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV33): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV33[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV34 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV34 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV34): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV34[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV35 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV35 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV35): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV35[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV36 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV36 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV36): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV36[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV37 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV37 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV37): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV37[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV38 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV38 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV38): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV38[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV39 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV39 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV39): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV39[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV40 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV40 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV40): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV40[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV41 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV41 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV41): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV41[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV42 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV42 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV42): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV42[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV43 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV43 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV43): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV43[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV44 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV44 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV44): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV44[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV45 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV45 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV45): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV45[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV46 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV46 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV46): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV46[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV47 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV47 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV47): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV47[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV48 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV48 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV48): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV48[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV49 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV49 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV49): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV49[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV50 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV50 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV50): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV50[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV51 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV51 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV51): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV51[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV52 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV52 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV52): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV52[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV53 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV53 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV53): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV53[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV54 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV54 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV54): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV54[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV55 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV55 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV55): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV55[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV56 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV56 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV56): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV56[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV57 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV57 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV57): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV57[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV58 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV58 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV58): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV58[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV59 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV59 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV59): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV59[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV60 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV60 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV60): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV60[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV61 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV61 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV61): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV61[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV62 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV62 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV62): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV62[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV63 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV63 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV63): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV63[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV64 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV64 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV64): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV64[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV65 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV65 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV65): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV65[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV66 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV66 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV66): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV66[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV67 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV67 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV67): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV67[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV68 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV68 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV68): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV68[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV69 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV69 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV69): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV69[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV70 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV70 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV70): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV70[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV71 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV71 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV71): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV71[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV72 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV72 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV72): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV72[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV73 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV73 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV73): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV73[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV74 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV74 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV74): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV74[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV75 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV75 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV75): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV75[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV76 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV76 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV76): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV76[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV77 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV77 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV77): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV77[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV78 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV78 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV78): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV78[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV79 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV79 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV79): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV79[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface ColdChainLogisticsTelemetryEntityV80 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class ColdChainLogisticsParserV80 {
  public static validate(sample: ColdChainLogisticsTelemetryEntityV80): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: ColdChainLogisticsTelemetryEntityV80[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}
