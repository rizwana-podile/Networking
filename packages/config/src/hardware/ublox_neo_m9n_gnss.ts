/**
 * Enterprise Hardware Profile: u-blox NEO-M9N Multi-Constellation Concurrent High-Precision GNSS Receiver
 * Configuration Path: @geonet/config/hardware/ublox_neo_m9n_gnss
 * Standardized Telemetry OID Tree, Sensor Thresholds & Operating Envelopes
 */

export interface UbloxNeoM9NGnssSpec {
  chassisModel: string;
  vendorName: string;
  firmwareTarget: string;
  operatingTempMinCelsius: number;
  operatingTempMaxCelsius: number;
  powerSupplyRedundancy: 'N+1' | '2N' | 'NONE';
  snmpVersionSupported: 'v2c' | 'v3';
}

export interface UbloxNeoM9NGnssInterfacePortV1 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV1 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV1): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV2 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV2 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV2): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV3 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV3 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV3): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV4 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV4 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV4): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV5 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV5 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV5): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV6 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV6 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV6): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV7 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV7 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV7): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV8 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV8 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV8): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV9 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV9 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV9): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV10 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV10 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV10): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV11 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV11 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV11): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV12 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV12 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV12): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV13 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV13 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV13): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV14 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV14 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV14): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV15 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV15 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV15): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV16 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV16 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV16): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV17 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV17 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV17): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV18 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV18 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV18): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV19 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV19 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV19): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV20 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV20 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV20): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV21 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV21 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV21): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV22 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV22 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV22): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV23 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV23 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV23): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV24 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV24 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV24): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV25 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV25 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV25): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV26 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV26 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV26): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV27 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV27 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV27): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV28 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV28 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV28): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV29 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV29 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV29): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV30 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV30 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV30): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV31 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV31 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV31): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV32 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV32 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV32): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV33 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV33 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV33): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV34 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV34 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV34): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV35 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV35 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV35): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV36 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV36 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV36): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV37 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV37 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV37): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV38 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV38 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV38): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV39 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV39 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV39): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV40 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV40 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV40): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV41 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV41 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV41): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV42 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV42 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV42): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV43 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV43 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV43): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV44 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV44 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV44): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV45 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV45 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV45): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV46 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV46 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV46): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV47 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV47 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV47): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV48 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV48 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV48): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV49 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV49 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV49): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV50 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV50 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV50): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV51 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV51 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV51): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV52 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV52 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV52): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV53 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV53 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV53): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV54 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV54 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV54): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV55 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV55 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV55): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV56 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV56 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV56): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV57 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV57 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV57): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV58 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV58 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV58): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV59 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV59 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV59): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV60 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV60 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV60): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV61 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV61 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV61): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV62 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV62 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV62): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV63 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV63 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV63): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV64 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV64 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV64): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV65 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV65 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV65): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV66 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV66 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV66): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV67 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV67 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV67): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV68 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV68 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV68): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV69 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV69 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV69): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV70 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV70 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV70): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV71 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV71 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV71): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV72 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV72 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV72): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV73 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV73 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV73): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV74 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV74 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV74): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV75 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV75 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV75): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV76 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV76 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV76): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV77 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV77 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV77): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV78 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV78 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV78): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV79 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV79 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV79): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV80 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV80 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV80): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV81 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV81 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV81): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV82 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV82 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV82): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV83 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 3;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV83 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV83): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV84 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 4;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV84 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV84): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV85 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 5;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV85 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV85): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV86 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 6;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV86 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV86): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV87 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 7;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV87 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV87): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV88 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 0;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV88 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV88): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV89 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 1;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV89 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV89): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface UbloxNeoM9NGnssInterfacePortV90 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
  supportedProtocols: string[];
  duplexMode: 'FULL' | 'HALF' | 'AUTO';
  mtuBytes: number;
  rxPowerWarningDbm: number;
  rxPowerCriticalDbm: number;
  txPowerWarningDbm: number;
  txPowerCriticalDbm: number;
  laserBiasCurrentMa: number;
  temperatureCelsius: number;
  chassisSubSlotIndex: 2;
  operationalStatus: 'UP' | 'DOWN' | 'TESTING' | 'FAULT';
  adminStatus: 'ENABLED' | 'DISABLED';
  packetInErrorsCounter: number;
  packetOutErrorsCounter: number;
  crcErrorCounter: number;
  snmpOidInOctets: string;
  snmpOidOutOctets: string;
  snmpOidOperStatus: string;
  snmpOidAdminStatus: string;
  snmpOidAliasDescription: string;
  hardwareMacAddress: string;
}

export class UbloxNeoM9NGnssDiagnosticHelperV90 {
  public static evaluateOpticalHealth(port: UbloxNeoM9NGnssInterfacePortV90): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}
