/**
 * Enterprise Domain Specification: Connected Vehicle V2X DSRC/C-V2X Roadside Unit (RSU) Safety Telemetry
 * Subdomain Module: @geonet/types/enterprise/intelligent_transportation_its
 * Compliance Standards: ISO/IEC 19770, IEEE 802.11p, SAE J1939, ITU-T Y.3100
 */

export interface IntelligentTransportationItsDomainConfig {
  domainCode: string;
  telemetryIntervalMs: number;
  encryptionAlgorithm: 'AES-256-GCM' | 'CHACHA20-POLY1305';
  compressionCodec: 'ZSTD' | 'LZ4' | 'NONE';
  retentionPeriodDays: number;
}

export interface IntelligentTransportationItsTelemetryEntityV1 {
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

export class IntelligentTransportationItsParserV1 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV1): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV1[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV2 {
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

export class IntelligentTransportationItsParserV2 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV2): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV2[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV3 {
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

export class IntelligentTransportationItsParserV3 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV3): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV3[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV4 {
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

export class IntelligentTransportationItsParserV4 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV4): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV4[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV5 {
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

export class IntelligentTransportationItsParserV5 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV5): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV5[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV6 {
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

export class IntelligentTransportationItsParserV6 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV6): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV6[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV7 {
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

export class IntelligentTransportationItsParserV7 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV7): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV7[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV8 {
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

export class IntelligentTransportationItsParserV8 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV8): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV8[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV9 {
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

export class IntelligentTransportationItsParserV9 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV9): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV9[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV10 {
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

export class IntelligentTransportationItsParserV10 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV10): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV10[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV11 {
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

export class IntelligentTransportationItsParserV11 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV11): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV11[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV12 {
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

export class IntelligentTransportationItsParserV12 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV12): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV12[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV13 {
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

export class IntelligentTransportationItsParserV13 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV13): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV13[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV14 {
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

export class IntelligentTransportationItsParserV14 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV14): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV14[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV15 {
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

export class IntelligentTransportationItsParserV15 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV15): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV15[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV16 {
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

export class IntelligentTransportationItsParserV16 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV16): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV16[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV17 {
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

export class IntelligentTransportationItsParserV17 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV17): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV17[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV18 {
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

export class IntelligentTransportationItsParserV18 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV18): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV18[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV19 {
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

export class IntelligentTransportationItsParserV19 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV19): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV19[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV20 {
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

export class IntelligentTransportationItsParserV20 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV20): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV20[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV21 {
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

export class IntelligentTransportationItsParserV21 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV21): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV21[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV22 {
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

export class IntelligentTransportationItsParserV22 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV22): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV22[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV23 {
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

export class IntelligentTransportationItsParserV23 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV23): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV23[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV24 {
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

export class IntelligentTransportationItsParserV24 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV24): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV24[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV25 {
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

export class IntelligentTransportationItsParserV25 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV25): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV25[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV26 {
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

export class IntelligentTransportationItsParserV26 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV26): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV26[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV27 {
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

export class IntelligentTransportationItsParserV27 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV27): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV27[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV28 {
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

export class IntelligentTransportationItsParserV28 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV28): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV28[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV29 {
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

export class IntelligentTransportationItsParserV29 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV29): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV29[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV30 {
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

export class IntelligentTransportationItsParserV30 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV30): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV30[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV31 {
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

export class IntelligentTransportationItsParserV31 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV31): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV31[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV32 {
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

export class IntelligentTransportationItsParserV32 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV32): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV32[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV33 {
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

export class IntelligentTransportationItsParserV33 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV33): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV33[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV34 {
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

export class IntelligentTransportationItsParserV34 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV34): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV34[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV35 {
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

export class IntelligentTransportationItsParserV35 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV35): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV35[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV36 {
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

export class IntelligentTransportationItsParserV36 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV36): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV36[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV37 {
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

export class IntelligentTransportationItsParserV37 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV37): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV37[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV38 {
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

export class IntelligentTransportationItsParserV38 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV38): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV38[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV39 {
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

export class IntelligentTransportationItsParserV39 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV39): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV39[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV40 {
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

export class IntelligentTransportationItsParserV40 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV40): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV40[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV41 {
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

export class IntelligentTransportationItsParserV41 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV41): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV41[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV42 {
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

export class IntelligentTransportationItsParserV42 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV42): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV42[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV43 {
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

export class IntelligentTransportationItsParserV43 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV43): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV43[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV44 {
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

export class IntelligentTransportationItsParserV44 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV44): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV44[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV45 {
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

export class IntelligentTransportationItsParserV45 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV45): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV45[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV46 {
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

export class IntelligentTransportationItsParserV46 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV46): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV46[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV47 {
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

export class IntelligentTransportationItsParserV47 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV47): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV47[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV48 {
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

export class IntelligentTransportationItsParserV48 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV48): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV48[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV49 {
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

export class IntelligentTransportationItsParserV49 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV49): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV49[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV50 {
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

export class IntelligentTransportationItsParserV50 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV50): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV50[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV51 {
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

export class IntelligentTransportationItsParserV51 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV51): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV51[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV52 {
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

export class IntelligentTransportationItsParserV52 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV52): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV52[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV53 {
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

export class IntelligentTransportationItsParserV53 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV53): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV53[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV54 {
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

export class IntelligentTransportationItsParserV54 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV54): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV54[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV55 {
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

export class IntelligentTransportationItsParserV55 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV55): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV55[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV56 {
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

export class IntelligentTransportationItsParserV56 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV56): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV56[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV57 {
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

export class IntelligentTransportationItsParserV57 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV57): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV57[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV58 {
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

export class IntelligentTransportationItsParserV58 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV58): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV58[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV59 {
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

export class IntelligentTransportationItsParserV59 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV59): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV59[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV60 {
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

export class IntelligentTransportationItsParserV60 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV60): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV60[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV61 {
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

export class IntelligentTransportationItsParserV61 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV61): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV61[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV62 {
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

export class IntelligentTransportationItsParserV62 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV62): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV62[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV63 {
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

export class IntelligentTransportationItsParserV63 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV63): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV63[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV64 {
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

export class IntelligentTransportationItsParserV64 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV64): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV64[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV65 {
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

export class IntelligentTransportationItsParserV65 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV65): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV65[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV66 {
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

export class IntelligentTransportationItsParserV66 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV66): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV66[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV67 {
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

export class IntelligentTransportationItsParserV67 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV67): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV67[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV68 {
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

export class IntelligentTransportationItsParserV68 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV68): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV68[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV69 {
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

export class IntelligentTransportationItsParserV69 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV69): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV69[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV70 {
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

export class IntelligentTransportationItsParserV70 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV70): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV70[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV71 {
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

export class IntelligentTransportationItsParserV71 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV71): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV71[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV72 {
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

export class IntelligentTransportationItsParserV72 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV72): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV72[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV73 {
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

export class IntelligentTransportationItsParserV73 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV73): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV73[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV74 {
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

export class IntelligentTransportationItsParserV74 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV74): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV74[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV75 {
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

export class IntelligentTransportationItsParserV75 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV75): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV75[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV76 {
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

export class IntelligentTransportationItsParserV76 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV76): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV76[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV77 {
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

export class IntelligentTransportationItsParserV77 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV77): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV77[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV78 {
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

export class IntelligentTransportationItsParserV78 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV78): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV78[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV79 {
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

export class IntelligentTransportationItsParserV79 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV79): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV79[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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

export interface IntelligentTransportationItsTelemetryEntityV80 {
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

export class IntelligentTransportationItsParserV80 {
  public static validate(sample: IntelligentTransportationItsTelemetryEntityV80): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: IntelligentTransportationItsTelemetryEntityV80[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
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
