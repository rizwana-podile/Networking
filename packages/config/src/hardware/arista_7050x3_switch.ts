/**
 * Enterprise Hardware Profile: Arista 7050X3 10/25/100GbE High-Radix Enterprise Fabric Switch
 * Configuration Path: @geonet/config/hardware/arista_7050x3_switch
 * Standardized Telemetry OID Tree, Sensor Thresholds & Operating Envelopes
 */

export interface Arista7050X3SwitchSpec {
  chassisModel: string;
  vendorName: string;
  firmwareTarget: string;
  operatingTempMinCelsius: number;
  operatingTempMaxCelsius: number;
  powerSupplyRedundancy: 'N+1' | '2N' | 'NONE';
  snmpVersionSupported: 'v2c' | 'v3';
}

export interface Arista7050X3SwitchInterfacePortV1 {
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

export class Arista7050X3SwitchDiagnosticHelperV1 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV1): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV2 {
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

export class Arista7050X3SwitchDiagnosticHelperV2 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV2): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV3 {
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

export class Arista7050X3SwitchDiagnosticHelperV3 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV3): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV4 {
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

export class Arista7050X3SwitchDiagnosticHelperV4 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV4): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV5 {
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

export class Arista7050X3SwitchDiagnosticHelperV5 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV5): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV6 {
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

export class Arista7050X3SwitchDiagnosticHelperV6 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV6): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV7 {
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

export class Arista7050X3SwitchDiagnosticHelperV7 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV7): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV8 {
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

export class Arista7050X3SwitchDiagnosticHelperV8 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV8): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV9 {
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

export class Arista7050X3SwitchDiagnosticHelperV9 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV9): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV10 {
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

export class Arista7050X3SwitchDiagnosticHelperV10 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV10): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV11 {
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

export class Arista7050X3SwitchDiagnosticHelperV11 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV11): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV12 {
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

export class Arista7050X3SwitchDiagnosticHelperV12 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV12): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV13 {
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

export class Arista7050X3SwitchDiagnosticHelperV13 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV13): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV14 {
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

export class Arista7050X3SwitchDiagnosticHelperV14 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV14): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV15 {
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

export class Arista7050X3SwitchDiagnosticHelperV15 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV15): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV16 {
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

export class Arista7050X3SwitchDiagnosticHelperV16 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV16): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV17 {
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

export class Arista7050X3SwitchDiagnosticHelperV17 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV17): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV18 {
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

export class Arista7050X3SwitchDiagnosticHelperV18 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV18): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV19 {
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

export class Arista7050X3SwitchDiagnosticHelperV19 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV19): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV20 {
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

export class Arista7050X3SwitchDiagnosticHelperV20 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV20): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV21 {
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

export class Arista7050X3SwitchDiagnosticHelperV21 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV21): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV22 {
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

export class Arista7050X3SwitchDiagnosticHelperV22 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV22): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV23 {
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

export class Arista7050X3SwitchDiagnosticHelperV23 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV23): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV24 {
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

export class Arista7050X3SwitchDiagnosticHelperV24 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV24): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV25 {
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

export class Arista7050X3SwitchDiagnosticHelperV25 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV25): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV26 {
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

export class Arista7050X3SwitchDiagnosticHelperV26 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV26): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV27 {
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

export class Arista7050X3SwitchDiagnosticHelperV27 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV27): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV28 {
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

export class Arista7050X3SwitchDiagnosticHelperV28 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV28): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV29 {
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

export class Arista7050X3SwitchDiagnosticHelperV29 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV29): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV30 {
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

export class Arista7050X3SwitchDiagnosticHelperV30 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV30): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV31 {
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

export class Arista7050X3SwitchDiagnosticHelperV31 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV31): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV32 {
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

export class Arista7050X3SwitchDiagnosticHelperV32 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV32): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV33 {
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

export class Arista7050X3SwitchDiagnosticHelperV33 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV33): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV34 {
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

export class Arista7050X3SwitchDiagnosticHelperV34 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV34): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV35 {
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

export class Arista7050X3SwitchDiagnosticHelperV35 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV35): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV36 {
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

export class Arista7050X3SwitchDiagnosticHelperV36 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV36): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV37 {
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

export class Arista7050X3SwitchDiagnosticHelperV37 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV37): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV38 {
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

export class Arista7050X3SwitchDiagnosticHelperV38 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV38): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV39 {
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

export class Arista7050X3SwitchDiagnosticHelperV39 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV39): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV40 {
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

export class Arista7050X3SwitchDiagnosticHelperV40 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV40): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV41 {
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

export class Arista7050X3SwitchDiagnosticHelperV41 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV41): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV42 {
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

export class Arista7050X3SwitchDiagnosticHelperV42 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV42): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV43 {
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

export class Arista7050X3SwitchDiagnosticHelperV43 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV43): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV44 {
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

export class Arista7050X3SwitchDiagnosticHelperV44 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV44): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV45 {
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

export class Arista7050X3SwitchDiagnosticHelperV45 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV45): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV46 {
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

export class Arista7050X3SwitchDiagnosticHelperV46 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV46): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV47 {
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

export class Arista7050X3SwitchDiagnosticHelperV47 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV47): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV48 {
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

export class Arista7050X3SwitchDiagnosticHelperV48 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV48): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV49 {
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

export class Arista7050X3SwitchDiagnosticHelperV49 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV49): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV50 {
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

export class Arista7050X3SwitchDiagnosticHelperV50 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV50): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV51 {
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

export class Arista7050X3SwitchDiagnosticHelperV51 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV51): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV52 {
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

export class Arista7050X3SwitchDiagnosticHelperV52 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV52): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV53 {
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

export class Arista7050X3SwitchDiagnosticHelperV53 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV53): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV54 {
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

export class Arista7050X3SwitchDiagnosticHelperV54 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV54): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV55 {
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

export class Arista7050X3SwitchDiagnosticHelperV55 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV55): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV56 {
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

export class Arista7050X3SwitchDiagnosticHelperV56 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV56): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV57 {
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

export class Arista7050X3SwitchDiagnosticHelperV57 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV57): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV58 {
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

export class Arista7050X3SwitchDiagnosticHelperV58 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV58): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV59 {
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

export class Arista7050X3SwitchDiagnosticHelperV59 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV59): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV60 {
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

export class Arista7050X3SwitchDiagnosticHelperV60 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV60): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV61 {
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

export class Arista7050X3SwitchDiagnosticHelperV61 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV61): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV62 {
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

export class Arista7050X3SwitchDiagnosticHelperV62 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV62): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV63 {
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

export class Arista7050X3SwitchDiagnosticHelperV63 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV63): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV64 {
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

export class Arista7050X3SwitchDiagnosticHelperV64 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV64): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV65 {
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

export class Arista7050X3SwitchDiagnosticHelperV65 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV65): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV66 {
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

export class Arista7050X3SwitchDiagnosticHelperV66 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV66): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV67 {
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

export class Arista7050X3SwitchDiagnosticHelperV67 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV67): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV68 {
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

export class Arista7050X3SwitchDiagnosticHelperV68 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV68): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV69 {
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

export class Arista7050X3SwitchDiagnosticHelperV69 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV69): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV70 {
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

export class Arista7050X3SwitchDiagnosticHelperV70 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV70): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV71 {
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

export class Arista7050X3SwitchDiagnosticHelperV71 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV71): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV72 {
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

export class Arista7050X3SwitchDiagnosticHelperV72 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV72): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV73 {
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

export class Arista7050X3SwitchDiagnosticHelperV73 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV73): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV74 {
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

export class Arista7050X3SwitchDiagnosticHelperV74 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV74): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV75 {
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

export class Arista7050X3SwitchDiagnosticHelperV75 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV75): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV76 {
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

export class Arista7050X3SwitchDiagnosticHelperV76 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV76): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV77 {
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

export class Arista7050X3SwitchDiagnosticHelperV77 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV77): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV78 {
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

export class Arista7050X3SwitchDiagnosticHelperV78 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV78): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV79 {
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

export class Arista7050X3SwitchDiagnosticHelperV79 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV79): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV80 {
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

export class Arista7050X3SwitchDiagnosticHelperV80 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV80): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV81 {
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

export class Arista7050X3SwitchDiagnosticHelperV81 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV81): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV82 {
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

export class Arista7050X3SwitchDiagnosticHelperV82 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV82): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV83 {
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

export class Arista7050X3SwitchDiagnosticHelperV83 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV83): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV84 {
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

export class Arista7050X3SwitchDiagnosticHelperV84 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV84): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV85 {
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

export class Arista7050X3SwitchDiagnosticHelperV85 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV85): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV86 {
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

export class Arista7050X3SwitchDiagnosticHelperV86 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV86): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV87 {
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

export class Arista7050X3SwitchDiagnosticHelperV87 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV87): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV88 {
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

export class Arista7050X3SwitchDiagnosticHelperV88 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV88): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV89 {
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

export class Arista7050X3SwitchDiagnosticHelperV89 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV89): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface Arista7050X3SwitchInterfacePortV90 {
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

export class Arista7050X3SwitchDiagnosticHelperV90 {
  public static evaluateOpticalHealth(port: Arista7050X3SwitchInterfacePortV90): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}
