/**
 * Enterprise Domain Specification: Pipeline Cathodic Protection, Intelligent Pigging & Acoustic Leak Detection
 * Subdomain Module: @geonet/types/enterprise/oil_gas_pipeline_integrity
 * Compliance Standards: ISO/IEC 19770, IEEE 802.11p, SAE J1939, ITU-T Y.3100
 */

export interface OilGasPipelineIntegrityDomainConfig {
  domainCode: string;
  telemetryIntervalMs: number;
  encryptionAlgorithm: 'AES-256-GCM' | 'CHACHA20-POLY1305';
  compressionCodec: 'ZSTD' | 'LZ4' | 'NONE';
  retentionPeriodDays: number;
}

export interface OilGasPipelineIntegrityTelemetryEntityV1 {
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

export class OilGasPipelineIntegrityParserV1 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV1): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV1[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV2 {
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

export class OilGasPipelineIntegrityParserV2 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV2): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV2[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV3 {
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

export class OilGasPipelineIntegrityParserV3 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV3): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV3[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV4 {
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

export class OilGasPipelineIntegrityParserV4 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV4): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV4[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV5 {
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

export class OilGasPipelineIntegrityParserV5 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV5): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV5[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV6 {
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

export class OilGasPipelineIntegrityParserV6 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV6): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV6[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV7 {
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

export class OilGasPipelineIntegrityParserV7 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV7): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV7[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV8 {
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

export class OilGasPipelineIntegrityParserV8 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV8): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV8[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV9 {
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

export class OilGasPipelineIntegrityParserV9 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV9): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV9[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV10 {
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

export class OilGasPipelineIntegrityParserV10 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV10): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV10[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV11 {
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

export class OilGasPipelineIntegrityParserV11 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV11): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV11[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV12 {
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

export class OilGasPipelineIntegrityParserV12 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV12): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV12[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV13 {
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

export class OilGasPipelineIntegrityParserV13 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV13): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV13[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV14 {
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

export class OilGasPipelineIntegrityParserV14 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV14): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV14[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV15 {
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

export class OilGasPipelineIntegrityParserV15 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV15): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV15[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV16 {
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

export class OilGasPipelineIntegrityParserV16 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV16): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV16[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV17 {
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

export class OilGasPipelineIntegrityParserV17 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV17): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV17[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV18 {
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

export class OilGasPipelineIntegrityParserV18 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV18): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV18[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV19 {
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

export class OilGasPipelineIntegrityParserV19 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV19): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV19[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV20 {
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

export class OilGasPipelineIntegrityParserV20 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV20): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV20[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV21 {
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

export class OilGasPipelineIntegrityParserV21 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV21): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV21[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV22 {
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

export class OilGasPipelineIntegrityParserV22 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV22): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV22[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV23 {
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

export class OilGasPipelineIntegrityParserV23 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV23): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV23[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV24 {
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

export class OilGasPipelineIntegrityParserV24 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV24): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV24[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV25 {
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

export class OilGasPipelineIntegrityParserV25 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV25): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV25[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV26 {
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

export class OilGasPipelineIntegrityParserV26 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV26): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV26[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV27 {
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

export class OilGasPipelineIntegrityParserV27 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV27): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV27[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV28 {
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

export class OilGasPipelineIntegrityParserV28 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV28): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV28[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV29 {
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

export class OilGasPipelineIntegrityParserV29 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV29): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV29[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV30 {
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

export class OilGasPipelineIntegrityParserV30 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV30): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV30[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV31 {
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

export class OilGasPipelineIntegrityParserV31 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV31): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV31[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV32 {
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

export class OilGasPipelineIntegrityParserV32 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV32): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV32[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV33 {
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

export class OilGasPipelineIntegrityParserV33 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV33): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV33[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV34 {
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

export class OilGasPipelineIntegrityParserV34 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV34): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV34[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV35 {
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

export class OilGasPipelineIntegrityParserV35 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV35): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV35[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV36 {
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

export class OilGasPipelineIntegrityParserV36 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV36): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV36[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV37 {
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

export class OilGasPipelineIntegrityParserV37 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV37): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV37[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV38 {
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

export class OilGasPipelineIntegrityParserV38 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV38): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV38[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV39 {
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

export class OilGasPipelineIntegrityParserV39 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV39): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV39[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV40 {
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

export class OilGasPipelineIntegrityParserV40 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV40): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV40[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV41 {
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

export class OilGasPipelineIntegrityParserV41 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV41): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV41[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV42 {
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

export class OilGasPipelineIntegrityParserV42 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV42): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV42[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV43 {
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

export class OilGasPipelineIntegrityParserV43 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV43): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV43[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV44 {
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

export class OilGasPipelineIntegrityParserV44 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV44): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV44[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV45 {
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

export class OilGasPipelineIntegrityParserV45 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV45): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV45[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV46 {
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

export class OilGasPipelineIntegrityParserV46 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV46): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV46[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV47 {
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

export class OilGasPipelineIntegrityParserV47 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV47): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV47[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV48 {
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

export class OilGasPipelineIntegrityParserV48 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV48): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV48[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV49 {
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

export class OilGasPipelineIntegrityParserV49 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV49): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV49[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV50 {
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

export class OilGasPipelineIntegrityParserV50 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV50): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV50[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV51 {
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

export class OilGasPipelineIntegrityParserV51 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV51): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV51[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV52 {
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

export class OilGasPipelineIntegrityParserV52 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV52): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV52[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV53 {
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

export class OilGasPipelineIntegrityParserV53 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV53): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV53[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV54 {
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

export class OilGasPipelineIntegrityParserV54 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV54): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV54[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV55 {
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

export class OilGasPipelineIntegrityParserV55 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV55): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV55[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV56 {
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

export class OilGasPipelineIntegrityParserV56 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV56): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV56[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV57 {
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

export class OilGasPipelineIntegrityParserV57 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV57): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV57[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV58 {
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

export class OilGasPipelineIntegrityParserV58 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV58): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV58[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV59 {
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

export class OilGasPipelineIntegrityParserV59 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV59): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV59[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV60 {
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

export class OilGasPipelineIntegrityParserV60 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV60): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV60[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV61 {
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

export class OilGasPipelineIntegrityParserV61 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV61): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV61[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV62 {
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

export class OilGasPipelineIntegrityParserV62 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV62): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV62[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV63 {
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

export class OilGasPipelineIntegrityParserV63 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV63): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV63[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV64 {
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

export class OilGasPipelineIntegrityParserV64 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV64): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV64[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV65 {
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

export class OilGasPipelineIntegrityParserV65 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV65): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV65[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV66 {
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

export class OilGasPipelineIntegrityParserV66 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV66): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV66[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV67 {
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

export class OilGasPipelineIntegrityParserV67 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV67): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV67[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV68 {
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

export class OilGasPipelineIntegrityParserV68 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV68): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV68[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV69 {
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

export class OilGasPipelineIntegrityParserV69 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV69): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV69[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV70 {
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

export class OilGasPipelineIntegrityParserV70 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV70): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV70[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV71 {
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

export class OilGasPipelineIntegrityParserV71 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV71): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV71[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV72 {
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

export class OilGasPipelineIntegrityParserV72 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV72): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV72[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV73 {
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

export class OilGasPipelineIntegrityParserV73 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV73): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV73[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV74 {
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

export class OilGasPipelineIntegrityParserV74 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV74): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV74[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV75 {
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

export class OilGasPipelineIntegrityParserV75 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV75): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV75[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV76 {
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

export class OilGasPipelineIntegrityParserV76 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV76): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV76[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV77 {
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

export class OilGasPipelineIntegrityParserV77 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV77): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV77[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV78 {
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

export class OilGasPipelineIntegrityParserV78 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV78): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV78[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV79 {
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

export class OilGasPipelineIntegrityParserV79 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV79): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV79[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface OilGasPipelineIntegrityTelemetryEntityV80 {
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

export class OilGasPipelineIntegrityParserV80 {
  public static validate(sample: OilGasPipelineIntegrityTelemetryEntityV80): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: OilGasPipelineIntegrityTelemetryEntityV80[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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
