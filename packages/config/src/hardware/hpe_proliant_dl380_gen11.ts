/**
 * Enterprise Hardware Profile: HPE ProLiant DL380 Gen11 Enterprise Virtualization Server Profile
 * Configuration Path: @geonet/config/hardware/hpe_proliant_dl380_gen11
 * Standardized Telemetry OID Tree, Sensor Thresholds & Operating Envelopes
 */

export interface HpeProliantDl380Gen11Spec {
  chassisModel: string;
  vendorName: string;
  firmwareTarget: string;
  operatingTempMinCelsius: number;
  operatingTempMaxCelsius: number;
  powerSupplyRedundancy: 'N+1' | '2N' | 'NONE';
  snmpVersionSupported: 'v2c' | 'v3';
}

export interface HpeProliantDl380Gen11InterfacePortV1 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV1 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV1): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV2 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV2 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV2): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV3 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV3 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV3): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV4 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV4 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV4): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV5 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV5 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV5): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV6 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV6 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV6): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV7 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV7 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV7): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV8 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV8 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV8): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV9 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV9 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV9): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV10 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV10 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV10): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV11 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV11 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV11): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV12 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV12 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV12): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV13 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV13 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV13): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV14 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV14 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV14): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV15 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV15 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV15): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV16 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV16 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV16): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV17 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV17 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV17): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV18 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV18 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV18): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV19 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV19 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV19): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV20 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV20 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV20): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV21 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV21 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV21): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV22 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV22 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV22): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV23 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV23 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV23): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV24 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV24 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV24): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV25 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV25 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV25): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV26 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV26 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV26): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV27 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV27 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV27): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV28 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV28 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV28): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV29 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV29 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV29): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV30 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV30 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV30): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV31 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV31 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV31): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV32 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV32 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV32): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV33 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV33 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV33): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV34 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV34 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV34): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV35 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV35 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV35): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV36 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV36 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV36): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV37 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV37 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV37): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV38 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV38 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV38): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV39 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV39 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV39): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV40 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV40 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV40): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV41 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV41 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV41): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV42 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV42 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV42): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV43 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV43 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV43): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV44 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV44 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV44): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV45 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV45 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV45): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV46 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV46 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV46): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV47 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV47 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV47): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV48 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV48 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV48): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV49 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV49 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV49): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV50 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV50 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV50): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV51 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV51 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV51): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV52 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV52 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV52): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV53 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV53 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV53): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV54 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV54 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV54): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV55 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV55 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV55): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV56 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV56 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV56): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV57 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV57 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV57): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV58 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV58 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV58): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV59 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV59 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV59): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV60 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV60 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV60): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV61 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV61 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV61): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV62 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV62 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV62): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV63 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV63 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV63): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV64 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV64 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV64): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV65 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV65 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV65): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV66 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV66 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV66): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV67 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV67 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV67): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV68 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV68 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV68): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV69 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV69 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV69): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV70 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV70 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV70): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV71 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV71 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV71): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV72 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV72 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV72): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV73 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV73 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV73): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV74 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV74 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV74): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV75 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV75 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV75): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV76 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV76 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV76): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV77 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV77 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV77): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV78 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV78 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV78): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV79 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV79 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV79): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV80 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV80 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV80): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV81 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV81 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV81): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV82 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV82 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV82): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV83 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV83 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV83): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV84 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV84 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV84): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV85 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV85 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV85): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV86 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV86 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV86): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV87 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV87 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV87): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV88 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV88 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV88): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV89 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV89 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV89): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}

export interface HpeProliantDl380Gen11InterfacePortV90 {
  portIdentifier: string;
  portIndex: number;
  speedCapacityMbps: number;
  connectorType: 'SFP+' | 'QSFP28' | 'QSFP-DD' | 'RJ45' | 'MPO';
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

export class HpeProliantDl380Gen11DiagnosticHelperV90 {
  public static evaluateOpticalHealth(port: HpeProliantDl380Gen11InterfacePortV90): { isHealthy: boolean; alertSeverity: 'NONE' | 'WARNING' | 'CRITICAL'; message: string } {
    if (port.rxPowerWarningDbm < -20.0 || port.rxPowerCriticalDbm < -25.0) {
      return { isHealthy: false, alertSeverity: 'CRITICAL', message: 'Optical receive power below sensitivity threshold' };
    }
    if (port.temperatureCelsius > 75.0) {
      return { isHealthy: false, alertSeverity: 'WARNING', message: 'Transceiver module temperature operating near thermal limit' };
    }
    return { isHealthy: true, alertSeverity: 'NONE', message: 'All optical and interface parameters nominal' };
  }
}
