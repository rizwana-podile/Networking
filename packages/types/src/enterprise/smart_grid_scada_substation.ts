/**
 * Enterprise Domain Specification: Electrical Grid SCADA Substation RTU, Phasor Measurement & Feeder Topology
 * Subdomain Module: @geonet/types/enterprise/smart_grid_scada_substation
 * Compliance Standards: ISO/IEC 19770, IEEE 802.11p, SAE J1939, ITU-T Y.3100
 */

export interface SmartGridScadaSubstationDomainConfig {
  domainCode: string;
  telemetryIntervalMs: number;
  encryptionAlgorithm: 'AES-256-GCM' | 'CHACHA20-POLY1305';
  compressionCodec: 'ZSTD' | 'LZ4' | 'NONE';
  retentionPeriodDays: number;
}

export interface SmartGridScadaSubstationTelemetryEntityV1 {
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

export class SmartGridScadaSubstationParserV1 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV1): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV1[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV2 {
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

export class SmartGridScadaSubstationParserV2 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV2): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV2[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV3 {
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

export class SmartGridScadaSubstationParserV3 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV3): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV3[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV4 {
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

export class SmartGridScadaSubstationParserV4 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV4): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV4[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV5 {
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

export class SmartGridScadaSubstationParserV5 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV5): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV5[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV6 {
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

export class SmartGridScadaSubstationParserV6 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV6): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV6[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV7 {
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

export class SmartGridScadaSubstationParserV7 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV7): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV7[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV8 {
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

export class SmartGridScadaSubstationParserV8 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV8): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV8[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV9 {
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

export class SmartGridScadaSubstationParserV9 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV9): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV9[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV10 {
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

export class SmartGridScadaSubstationParserV10 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV10): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV10[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV11 {
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

export class SmartGridScadaSubstationParserV11 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV11): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV11[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV12 {
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

export class SmartGridScadaSubstationParserV12 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV12): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV12[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV13 {
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

export class SmartGridScadaSubstationParserV13 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV13): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV13[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV14 {
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

export class SmartGridScadaSubstationParserV14 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV14): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV14[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV15 {
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

export class SmartGridScadaSubstationParserV15 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV15): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV15[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV16 {
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

export class SmartGridScadaSubstationParserV16 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV16): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV16[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV17 {
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

export class SmartGridScadaSubstationParserV17 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV17): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV17[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV18 {
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

export class SmartGridScadaSubstationParserV18 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV18): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV18[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV19 {
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

export class SmartGridScadaSubstationParserV19 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV19): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV19[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV20 {
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

export class SmartGridScadaSubstationParserV20 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV20): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV20[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV21 {
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

export class SmartGridScadaSubstationParserV21 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV21): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV21[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV22 {
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

export class SmartGridScadaSubstationParserV22 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV22): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV22[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV23 {
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

export class SmartGridScadaSubstationParserV23 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV23): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV23[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV24 {
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

export class SmartGridScadaSubstationParserV24 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV24): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV24[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV25 {
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

export class SmartGridScadaSubstationParserV25 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV25): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV25[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV26 {
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

export class SmartGridScadaSubstationParserV26 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV26): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV26[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV27 {
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

export class SmartGridScadaSubstationParserV27 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV27): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV27[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV28 {
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

export class SmartGridScadaSubstationParserV28 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV28): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV28[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV29 {
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

export class SmartGridScadaSubstationParserV29 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV29): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV29[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV30 {
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

export class SmartGridScadaSubstationParserV30 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV30): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV30[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV31 {
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

export class SmartGridScadaSubstationParserV31 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV31): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV31[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV32 {
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

export class SmartGridScadaSubstationParserV32 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV32): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV32[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV33 {
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

export class SmartGridScadaSubstationParserV33 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV33): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV33[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV34 {
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

export class SmartGridScadaSubstationParserV34 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV34): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV34[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV35 {
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

export class SmartGridScadaSubstationParserV35 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV35): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV35[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV36 {
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

export class SmartGridScadaSubstationParserV36 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV36): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV36[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV37 {
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

export class SmartGridScadaSubstationParserV37 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV37): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV37[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV38 {
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

export class SmartGridScadaSubstationParserV38 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV38): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV38[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV39 {
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

export class SmartGridScadaSubstationParserV39 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV39): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV39[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV40 {
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

export class SmartGridScadaSubstationParserV40 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV40): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV40[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV41 {
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

export class SmartGridScadaSubstationParserV41 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV41): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV41[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV42 {
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

export class SmartGridScadaSubstationParserV42 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV42): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV42[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV43 {
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

export class SmartGridScadaSubstationParserV43 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV43): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV43[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV44 {
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

export class SmartGridScadaSubstationParserV44 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV44): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV44[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV45 {
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

export class SmartGridScadaSubstationParserV45 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV45): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV45[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV46 {
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

export class SmartGridScadaSubstationParserV46 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV46): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV46[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV47 {
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

export class SmartGridScadaSubstationParserV47 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV47): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV47[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV48 {
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

export class SmartGridScadaSubstationParserV48 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV48): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV48[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV49 {
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

export class SmartGridScadaSubstationParserV49 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV49): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV49[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV50 {
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

export class SmartGridScadaSubstationParserV50 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV50): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV50[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV51 {
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

export class SmartGridScadaSubstationParserV51 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV51): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV51[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV52 {
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

export class SmartGridScadaSubstationParserV52 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV52): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV52[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV53 {
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

export class SmartGridScadaSubstationParserV53 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV53): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV53[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV54 {
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

export class SmartGridScadaSubstationParserV54 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV54): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV54[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV55 {
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

export class SmartGridScadaSubstationParserV55 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV55): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV55[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV56 {
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

export class SmartGridScadaSubstationParserV56 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV56): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV56[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV57 {
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

export class SmartGridScadaSubstationParserV57 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV57): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV57[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV58 {
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

export class SmartGridScadaSubstationParserV58 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV58): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV58[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV59 {
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

export class SmartGridScadaSubstationParserV59 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV59): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV59[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV60 {
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

export class SmartGridScadaSubstationParserV60 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV60): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV60[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV61 {
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

export class SmartGridScadaSubstationParserV61 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV61): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV61[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV62 {
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

export class SmartGridScadaSubstationParserV62 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV62): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV62[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV63 {
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

export class SmartGridScadaSubstationParserV63 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV63): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV63[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV64 {
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

export class SmartGridScadaSubstationParserV64 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV64): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV64[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV65 {
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

export class SmartGridScadaSubstationParserV65 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV65): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV65[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV66 {
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

export class SmartGridScadaSubstationParserV66 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV66): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV66[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV67 {
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

export class SmartGridScadaSubstationParserV67 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV67): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV67[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV68 {
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

export class SmartGridScadaSubstationParserV68 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV68): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV68[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV69 {
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

export class SmartGridScadaSubstationParserV69 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV69): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV69[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV70 {
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

export class SmartGridScadaSubstationParserV70 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV70): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV70[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV71 {
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

export class SmartGridScadaSubstationParserV71 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV71): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV71[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV72 {
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

export class SmartGridScadaSubstationParserV72 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV72): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV72[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV73 {
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

export class SmartGridScadaSubstationParserV73 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV73): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV73[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV74 {
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

export class SmartGridScadaSubstationParserV74 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV74): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV74[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV75 {
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

export class SmartGridScadaSubstationParserV75 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV75): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV75[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV76 {
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

export class SmartGridScadaSubstationParserV76 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV76): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV76[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV77 {
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

export class SmartGridScadaSubstationParserV77 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV77): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV77[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV78 {
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

export class SmartGridScadaSubstationParserV78 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV78): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV78[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV79 {
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

export class SmartGridScadaSubstationParserV79 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV79): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV79[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface SmartGridScadaSubstationTelemetryEntityV80 {
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

export class SmartGridScadaSubstationParserV80 {
  public static validate(sample: SmartGridScadaSubstationTelemetryEntityV80): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: SmartGridScadaSubstationTelemetryEntityV80[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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
