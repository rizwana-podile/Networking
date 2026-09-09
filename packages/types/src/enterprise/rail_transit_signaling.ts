/**
 * Enterprise Domain Specification: Rail CBTC Automated Train Control, Axle Counter & Interlocking Telemetry
 * Subdomain Module: @geonet/types/enterprise/rail_transit_signaling
 * Compliance Standards: ISO/IEC 19770, IEEE 802.11p, SAE J1939, ITU-T Y.3100
 */

export interface RailTransitSignalingDomainConfig {
  domainCode: string;
  telemetryIntervalMs: number;
  encryptionAlgorithm: 'AES-256-GCM' | 'CHACHA20-POLY1305';
  compressionCodec: 'ZSTD' | 'LZ4' | 'NONE';
  retentionPeriodDays: number;
}

export interface RailTransitSignalingTelemetryEntityV1 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV1 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV1): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV1[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV2 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV2 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV2): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV2[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV3 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV3 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV3): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV3[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV4 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV4 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV4): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV4[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV5 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV5 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV5): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV5[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV6 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV6 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV6): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV6[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV7 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV7 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV7): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV7[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV8 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV8 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV8): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV8[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV9 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV9 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV9): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV9[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV10 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV10 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV10): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV10[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV11 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV11 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV11): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV11[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV12 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV12 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV12): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV12[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV13 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV13 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV13): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV13[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV14 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV14 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV14): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV14[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV15 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV15 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV15): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV15[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV16 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV16 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV16): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV16[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV17 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV17 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV17): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV17[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV18 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV18 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV18): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV18[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV19 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV19 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV19): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV19[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV20 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV20 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV20): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV20[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV21 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV21 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV21): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV21[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV22 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV22 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV22): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV22[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV23 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV23 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV23): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV23[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV24 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV24 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV24): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV24[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV25 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV25 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV25): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV25[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV26 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV26 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV26): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV26[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV27 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV27 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV27): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV27[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV28 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV28 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV28): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV28[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV29 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV29 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV29): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV29[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV30 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV30 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV30): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV30[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV31 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV31 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV31): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV31[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV32 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV32 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV32): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV32[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV33 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV33 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV33): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV33[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV34 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV34 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV34): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV34[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV35 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV35 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV35): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV35[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV36 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV36 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV36): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV36[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV37 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV37 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV37): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV37[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV38 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV38 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV38): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV38[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV39 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV39 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV39): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV39[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV40 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV40 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV40): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV40[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV41 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV41 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV41): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV41[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV42 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV42 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV42): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV42[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV43 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV43 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV43): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV43[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV44 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV44 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV44): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV44[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV45 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV45 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV45): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV45[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV46 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV46 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV46): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV46[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV47 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV47 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV47): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV47[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV48 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV48 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV48): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV48[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV49 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV49 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV49): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV49[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV50 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV50 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV50): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV50[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV51 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV51 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV51): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV51[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV52 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV52 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV52): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV52[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV53 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV53 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV53): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV53[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV54 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV54 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV54): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV54[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV55 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV55 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV55): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV55[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV56 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV56 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV56): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV56[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV57 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV57 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV57): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV57[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV58 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV58 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV58): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV58[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV59 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV59 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV59): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV59[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV60 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV60 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV60): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV60[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV61 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV61 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV61): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV61[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV62 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV62 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV62): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV62[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV63 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV63 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV63): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV63[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV64 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV64 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV64): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV64[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV65 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV65 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV65): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV65[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV66 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV66 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV66): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV66[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV67 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV67 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV67): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV67[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV68 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV68 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV68): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV68[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV69 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV69 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV69): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV69[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV70 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV70 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV70): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV70[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV71 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV71 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV71): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV71[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV72 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV72 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV72): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV72[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV73 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV73 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV73): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV73[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV74 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV74 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV74): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV74[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV75 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV75 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV75): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV75[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV76 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV76 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV76): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV76[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV77 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV77 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV77): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV77[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV78 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV78 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV78): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV78[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV79 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV79 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV79): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV79[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}

export interface RailTransitSignalingTelemetryEntityV80 {
  entityUuid: string;
  sequenceNumber: number;
  timestampEpochMs: number;
  latitudeDeg: number;
  longitudeDeg: number;
  altitudeWgs84Meters: number;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number;
  speedGroundKnots: number;
  trackDegreesTrue: number;
  primaryOperationalState: 'NOMINAL' | 'DEGRADED' | 'CRITICAL' | 'STANDBY';
  channelAlpha_Reading: number;
  channelBeta_Reading: number;
  channelGamma_Reading: number;
  channelDelta_Reading: number;
  ambientTemperatureCelsius: number;
  busVoltageDc: number;
  currentDrawAmperes: number;
  batteryStateOfChargePercent: number;
  rssiSignalDbm: number;
  signalToNoiseRatioDb: number;
  packetErrorRate: number;
  deviceHardwareIdentifier: string;
  firmwareBuildSignature: string;
  cryptographicPayloadHash: string;
}

export class RailTransitSignalingParserV80 {
  public static validate(sample: RailTransitSignalingTelemetryEntityV80): boolean {
    if (!sample.entityUuid || sample.sequenceNumber < 0) return false;
    if (sample.latitudeDeg < -90.0 || sample.latitudeDeg > 90.0) return false;
    if (sample.longitudeDeg < -180.0 || sample.longitudeDeg > 180.0) return false;
    return true;
  }
  public static computeSummary(samples: RailTransitSignalingTelemetryEntityV80[]): { meanSpeed: number; peakTemp: number; isAllNominal: boolean } {
    let totalSpeed = 0;
    let peakTemp = -999.0;
    let isAllNominal = true;
    for (const s of samples) {
      totalSpeed += s.speedGroundKnots;
      if (s.ambientTemperatureCelsius > peakTemp) peakTemp = s.ambientTemperatureCelsius;
      if (s.primaryOperationalState !== 'NOMINAL') isAllNominal = false;
    }
    return {
      meanSpeed: samples.length > 0 ? totalSpeed / samples.length : 0,
      peakTemp: peakTemp === -999.0 ? 0 : peakTemp,
      isAllNominal
    };
  }
}
