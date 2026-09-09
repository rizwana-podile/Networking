/**
 * Enterprise Hardware Profile: Fortinet FortiGate 3000F Next-Generation Enterprise Firewall Profile
 * Configuration Path: @geonet/config/hardware/fortinet_fortigate_3000f
 * Standardized Telemetry OID Tree, Sensor Thresholds & Operating Envelopes
 */

export interface FortinetFortigate3000FSpec {
  chassisModel: string;
  vendorName: string;
  firmwareTarget: string;
  operatingTempMinCelsius: number;
  operatingTempMaxCelsius: number;
  powerSupplyRedundancy: 'N+1' | '2N' | 'NONE';
  snmpVersionSupported: 'v2c' | 'v3';
}

export interface FortinetFortigate3000FInterfacePortV1 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV1 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV1): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV2 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV2 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV2): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV3 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV3 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV3): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV4 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV4 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV4): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV5 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV5 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV5): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV6 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV6 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV6): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV7 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV7 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV7): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV8 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV8 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV8): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV9 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV9 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV9): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV10 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV10 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV10): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV11 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV11 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV11): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV12 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV12 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV12): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV13 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV13 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV13): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV14 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV14 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV14): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV15 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV15 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV15): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV16 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV16 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV16): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV17 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV17 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV17): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV18 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV18 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV18): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV19 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV19 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV19): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV20 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV20 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV20): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV21 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV21 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV21): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV22 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV22 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV22): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV23 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV23 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV23): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV24 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV24 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV24): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV25 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV25 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV25): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV26 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV26 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV26): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV27 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV27 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV27): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV28 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV28 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV28): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV29 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV29 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV29): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV30 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV30 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV30): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV31 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV31 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV31): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV32 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV32 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV32): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV33 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV33 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV33): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV34 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV34 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV34): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV35 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV35 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV35): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV36 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV36 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV36): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV37 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV37 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV37): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV38 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV38 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV38): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV39 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV39 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV39): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV40 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV40 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV40): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV41 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV41 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV41): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV42 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV42 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV42): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV43 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV43 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV43): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV44 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV44 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV44): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV45 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV45 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV45): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV46 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV46 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV46): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV47 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV47 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV47): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV48 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV48 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV48): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV49 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV49 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV49): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV50 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV50 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV50): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV51 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV51 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV51): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV52 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV52 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV52): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV53 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV53 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV53): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV54 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV54 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV54): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV55 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV55 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV55): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV56 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV56 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV56): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV57 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV57 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV57): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV58 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV58 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV58): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV59 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV59 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV59): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV60 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV60 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV60): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV61 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV61 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV61): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV62 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV62 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV62): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV63 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV63 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV63): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV64 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV64 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV64): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV65 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV65 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV65): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV66 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV66 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV66): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV67 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV67 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV67): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV68 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV68 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV68): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV69 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV69 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV69): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV70 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV70 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV70): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV71 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV71 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV71): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV72 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV72 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV72): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV73 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV73 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV73): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV74 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV74 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV74): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV75 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV75 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV75): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV76 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV76 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV76): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV77 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV77 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV77): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV78 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV78 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV78): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV79 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV79 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV79): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV80 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV80 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV80): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV81 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV81 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV81): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV82 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV82 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV82): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV83 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV83 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV83): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV84 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV84 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV84): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV85 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV85 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV85): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV86 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV86 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV86): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV87 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV87 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV87): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV88 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV88 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV88): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV89 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV89 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV89): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface FortinetFortigate3000FInterfacePortV90 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class FortinetFortigate3000FDiagnosticHelperV90 {
  public static evaluateOpticalHealth(port: FortinetFortigate3000FInterfacePortV90): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}
