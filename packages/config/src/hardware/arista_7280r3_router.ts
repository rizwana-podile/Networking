/**
 * Enterprise Hardware Profile: Arista 7280R3 Series Universal Leaf and WAN Gateway Profile
 * Configuration Path: @geonet/config/hardware/arista_7280r3_router
 * Standardized Telemetry OID Tree, Sensor Thresholds & Operating Envelopes
 */

export interface Arista7280R3RouterSpec {
  chassisModel: string;
  vendorName: string;
  firmwareTarget: string;
  operatingTempMinCelsius: number;
  operatingTempMaxCelsius: number;
  powerSupplyRedundancy: 'N+1' | '2N' | 'NONE';
  snmpVersionSupported: 'v2c' | 'v3';
}

export interface Arista7280R3RouterInterfacePortV1 {
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

export class Arista7280R3RouterDiagnosticHelperV1 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV1): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV2 {
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

export class Arista7280R3RouterDiagnosticHelperV2 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV2): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV3 {
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

export class Arista7280R3RouterDiagnosticHelperV3 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV3): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV4 {
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

export class Arista7280R3RouterDiagnosticHelperV4 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV4): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV5 {
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

export class Arista7280R3RouterDiagnosticHelperV5 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV5): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV6 {
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

export class Arista7280R3RouterDiagnosticHelperV6 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV6): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV7 {
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

export class Arista7280R3RouterDiagnosticHelperV7 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV7): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV8 {
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

export class Arista7280R3RouterDiagnosticHelperV8 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV8): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV9 {
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

export class Arista7280R3RouterDiagnosticHelperV9 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV9): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV10 {
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

export class Arista7280R3RouterDiagnosticHelperV10 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV10): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV11 {
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

export class Arista7280R3RouterDiagnosticHelperV11 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV11): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV12 {
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

export class Arista7280R3RouterDiagnosticHelperV12 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV12): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV13 {
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

export class Arista7280R3RouterDiagnosticHelperV13 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV13): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV14 {
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

export class Arista7280R3RouterDiagnosticHelperV14 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV14): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV15 {
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

export class Arista7280R3RouterDiagnosticHelperV15 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV15): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV16 {
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

export class Arista7280R3RouterDiagnosticHelperV16 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV16): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV17 {
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

export class Arista7280R3RouterDiagnosticHelperV17 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV17): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV18 {
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

export class Arista7280R3RouterDiagnosticHelperV18 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV18): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV19 {
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

export class Arista7280R3RouterDiagnosticHelperV19 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV19): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV20 {
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

export class Arista7280R3RouterDiagnosticHelperV20 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV20): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV21 {
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

export class Arista7280R3RouterDiagnosticHelperV21 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV21): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV22 {
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

export class Arista7280R3RouterDiagnosticHelperV22 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV22): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV23 {
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

export class Arista7280R3RouterDiagnosticHelperV23 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV23): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV24 {
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

export class Arista7280R3RouterDiagnosticHelperV24 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV24): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV25 {
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

export class Arista7280R3RouterDiagnosticHelperV25 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV25): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV26 {
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

export class Arista7280R3RouterDiagnosticHelperV26 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV26): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV27 {
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

export class Arista7280R3RouterDiagnosticHelperV27 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV27): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV28 {
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

export class Arista7280R3RouterDiagnosticHelperV28 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV28): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV29 {
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

export class Arista7280R3RouterDiagnosticHelperV29 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV29): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV30 {
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

export class Arista7280R3RouterDiagnosticHelperV30 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV30): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV31 {
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

export class Arista7280R3RouterDiagnosticHelperV31 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV31): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV32 {
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

export class Arista7280R3RouterDiagnosticHelperV32 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV32): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV33 {
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

export class Arista7280R3RouterDiagnosticHelperV33 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV33): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV34 {
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

export class Arista7280R3RouterDiagnosticHelperV34 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV34): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV35 {
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

export class Arista7280R3RouterDiagnosticHelperV35 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV35): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV36 {
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

export class Arista7280R3RouterDiagnosticHelperV36 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV36): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV37 {
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

export class Arista7280R3RouterDiagnosticHelperV37 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV37): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV38 {
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

export class Arista7280R3RouterDiagnosticHelperV38 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV38): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV39 {
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

export class Arista7280R3RouterDiagnosticHelperV39 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV39): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV40 {
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

export class Arista7280R3RouterDiagnosticHelperV40 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV40): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV41 {
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

export class Arista7280R3RouterDiagnosticHelperV41 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV41): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV42 {
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

export class Arista7280R3RouterDiagnosticHelperV42 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV42): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV43 {
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

export class Arista7280R3RouterDiagnosticHelperV43 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV43): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV44 {
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

export class Arista7280R3RouterDiagnosticHelperV44 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV44): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV45 {
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

export class Arista7280R3RouterDiagnosticHelperV45 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV45): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV46 {
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

export class Arista7280R3RouterDiagnosticHelperV46 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV46): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV47 {
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

export class Arista7280R3RouterDiagnosticHelperV47 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV47): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV48 {
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

export class Arista7280R3RouterDiagnosticHelperV48 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV48): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV49 {
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

export class Arista7280R3RouterDiagnosticHelperV49 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV49): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV50 {
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

export class Arista7280R3RouterDiagnosticHelperV50 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV50): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV51 {
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

export class Arista7280R3RouterDiagnosticHelperV51 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV51): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV52 {
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

export class Arista7280R3RouterDiagnosticHelperV52 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV52): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV53 {
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

export class Arista7280R3RouterDiagnosticHelperV53 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV53): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV54 {
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

export class Arista7280R3RouterDiagnosticHelperV54 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV54): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV55 {
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

export class Arista7280R3RouterDiagnosticHelperV55 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV55): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV56 {
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

export class Arista7280R3RouterDiagnosticHelperV56 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV56): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV57 {
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

export class Arista7280R3RouterDiagnosticHelperV57 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV57): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV58 {
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

export class Arista7280R3RouterDiagnosticHelperV58 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV58): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV59 {
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

export class Arista7280R3RouterDiagnosticHelperV59 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV59): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV60 {
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

export class Arista7280R3RouterDiagnosticHelperV60 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV60): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV61 {
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

export class Arista7280R3RouterDiagnosticHelperV61 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV61): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV62 {
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

export class Arista7280R3RouterDiagnosticHelperV62 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV62): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV63 {
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

export class Arista7280R3RouterDiagnosticHelperV63 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV63): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV64 {
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

export class Arista7280R3RouterDiagnosticHelperV64 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV64): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV65 {
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

export class Arista7280R3RouterDiagnosticHelperV65 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV65): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV66 {
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

export class Arista7280R3RouterDiagnosticHelperV66 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV66): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV67 {
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

export class Arista7280R3RouterDiagnosticHelperV67 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV67): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV68 {
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

export class Arista7280R3RouterDiagnosticHelperV68 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV68): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV69 {
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

export class Arista7280R3RouterDiagnosticHelperV69 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV69): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV70 {
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

export class Arista7280R3RouterDiagnosticHelperV70 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV70): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV71 {
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

export class Arista7280R3RouterDiagnosticHelperV71 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV71): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV72 {
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

export class Arista7280R3RouterDiagnosticHelperV72 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV72): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV73 {
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

export class Arista7280R3RouterDiagnosticHelperV73 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV73): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV74 {
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

export class Arista7280R3RouterDiagnosticHelperV74 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV74): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV75 {
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

export class Arista7280R3RouterDiagnosticHelperV75 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV75): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV76 {
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

export class Arista7280R3RouterDiagnosticHelperV76 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV76): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV77 {
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

export class Arista7280R3RouterDiagnosticHelperV77 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV77): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV78 {
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

export class Arista7280R3RouterDiagnosticHelperV78 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV78): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV79 {
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

export class Arista7280R3RouterDiagnosticHelperV79 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV79): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV80 {
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

export class Arista7280R3RouterDiagnosticHelperV80 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV80): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV81 {
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

export class Arista7280R3RouterDiagnosticHelperV81 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV81): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV82 {
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

export class Arista7280R3RouterDiagnosticHelperV82 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV82): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV83 {
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

export class Arista7280R3RouterDiagnosticHelperV83 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV83): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV84 {
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

export class Arista7280R3RouterDiagnosticHelperV84 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV84): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV85 {
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

export class Arista7280R3RouterDiagnosticHelperV85 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV85): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV86 {
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

export class Arista7280R3RouterDiagnosticHelperV86 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV86): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV87 {
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

export class Arista7280R3RouterDiagnosticHelperV87 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV87): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV88 {
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

export class Arista7280R3RouterDiagnosticHelperV88 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV88): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV89 {
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

export class Arista7280R3RouterDiagnosticHelperV89 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV89): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7280R3RouterInterfacePortV90 {
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

export class Arista7280R3RouterDiagnosticHelperV90 {
  public static evaluateOpticalHealth(port: Arista7280R3RouterInterfacePortV90): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}
