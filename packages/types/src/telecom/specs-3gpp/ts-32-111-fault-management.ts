/**
 * GeoNet Sentinel 3GPP Specification Model
 * Telecommunication Management Fault Management and Alarms (3GPP TS 32.111)
 */

export interface ThreeGppMeasurementDefinition {
  id: string;
  name: string;
  standardReference: string;
  aggregationType: 'SUM' | 'AVERAGE' | 'MAX' | 'MIN' | 'PERCENTILE_95';
  samplingIntervalSec: number;
  unit: string;
  description: string;
}

export const TS_32_111_FAULT_MANAGEMENT_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0001',
    name: 'Meas_ts_32_111_fault_management_1',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0002',
    name: 'Meas_ts_32_111_fault_management_2',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0003',
    name: 'Meas_ts_32_111_fault_management_3',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0004',
    name: 'Meas_ts_32_111_fault_management_4',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0005',
    name: 'Meas_ts_32_111_fault_management_5',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0006',
    name: 'Meas_ts_32_111_fault_management_6',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0007',
    name: 'Meas_ts_32_111_fault_management_7',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0008',
    name: 'Meas_ts_32_111_fault_management_8',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0009',
    name: 'Meas_ts_32_111_fault_management_9',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0010',
    name: 'Meas_ts_32_111_fault_management_10',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0011',
    name: 'Meas_ts_32_111_fault_management_11',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0012',
    name: 'Meas_ts_32_111_fault_management_12',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0013',
    name: 'Meas_ts_32_111_fault_management_13',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0014',
    name: 'Meas_ts_32_111_fault_management_14',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0015',
    name: 'Meas_ts_32_111_fault_management_15',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0016',
    name: 'Meas_ts_32_111_fault_management_16',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0017',
    name: 'Meas_ts_32_111_fault_management_17',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0018',
    name: 'Meas_ts_32_111_fault_management_18',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0019',
    name: 'Meas_ts_32_111_fault_management_19',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0020',
    name: 'Meas_ts_32_111_fault_management_20',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0021',
    name: 'Meas_ts_32_111_fault_management_21',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0022',
    name: 'Meas_ts_32_111_fault_management_22',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0023',
    name: 'Meas_ts_32_111_fault_management_23',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0024',
    name: 'Meas_ts_32_111_fault_management_24',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0025',
    name: 'Meas_ts_32_111_fault_management_25',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0026',
    name: 'Meas_ts_32_111_fault_management_26',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0027',
    name: 'Meas_ts_32_111_fault_management_27',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0028',
    name: 'Meas_ts_32_111_fault_management_28',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0029',
    name: 'Meas_ts_32_111_fault_management_29',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0030',
    name: 'Meas_ts_32_111_fault_management_30',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0031',
    name: 'Meas_ts_32_111_fault_management_31',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0032',
    name: 'Meas_ts_32_111_fault_management_32',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0033',
    name: 'Meas_ts_32_111_fault_management_33',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0034',
    name: 'Meas_ts_32_111_fault_management_34',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0035',
    name: 'Meas_ts_32_111_fault_management_35',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0036',
    name: 'Meas_ts_32_111_fault_management_36',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0037',
    name: 'Meas_ts_32_111_fault_management_37',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0038',
    name: 'Meas_ts_32_111_fault_management_38',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0039',
    name: 'Meas_ts_32_111_fault_management_39',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0040',
    name: 'Meas_ts_32_111_fault_management_40',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0041',
    name: 'Meas_ts_32_111_fault_management_41',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0042',
    name: 'Meas_ts_32_111_fault_management_42',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0043',
    name: 'Meas_ts_32_111_fault_management_43',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0044',
    name: 'Meas_ts_32_111_fault_management_44',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0045',
    name: 'Meas_ts_32_111_fault_management_45',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0046',
    name: 'Meas_ts_32_111_fault_management_46',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0047',
    name: 'Meas_ts_32_111_fault_management_47',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0048',
    name: 'Meas_ts_32_111_fault_management_48',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0049',
    name: 'Meas_ts_32_111_fault_management_49',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0050',
    name: 'Meas_ts_32_111_fault_management_50',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0051',
    name: 'Meas_ts_32_111_fault_management_51',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0052',
    name: 'Meas_ts_32_111_fault_management_52',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0053',
    name: 'Meas_ts_32_111_fault_management_53',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0054',
    name: 'Meas_ts_32_111_fault_management_54',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0055',
    name: 'Meas_ts_32_111_fault_management_55',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0056',
    name: 'Meas_ts_32_111_fault_management_56',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0057',
    name: 'Meas_ts_32_111_fault_management_57',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0058',
    name: 'Meas_ts_32_111_fault_management_58',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0059',
    name: 'Meas_ts_32_111_fault_management_59',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0060',
    name: 'Meas_ts_32_111_fault_management_60',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0061',
    name: 'Meas_ts_32_111_fault_management_61',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0062',
    name: 'Meas_ts_32_111_fault_management_62',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0063',
    name: 'Meas_ts_32_111_fault_management_63',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0064',
    name: 'Meas_ts_32_111_fault_management_64',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0065',
    name: 'Meas_ts_32_111_fault_management_65',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0066',
    name: 'Meas_ts_32_111_fault_management_66',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0067',
    name: 'Meas_ts_32_111_fault_management_67',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0068',
    name: 'Meas_ts_32_111_fault_management_68',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0069',
    name: 'Meas_ts_32_111_fault_management_69',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0070',
    name: 'Meas_ts_32_111_fault_management_70',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0071',
    name: 'Meas_ts_32_111_fault_management_71',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0072',
    name: 'Meas_ts_32_111_fault_management_72',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0073',
    name: 'Meas_ts_32_111_fault_management_73',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0074',
    name: 'Meas_ts_32_111_fault_management_74',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0075',
    name: 'Meas_ts_32_111_fault_management_75',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0076',
    name: 'Meas_ts_32_111_fault_management_76',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0077',
    name: 'Meas_ts_32_111_fault_management_77',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0078',
    name: 'Meas_ts_32_111_fault_management_78',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0079',
    name: 'Meas_ts_32_111_fault_management_79',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0080',
    name: 'Meas_ts_32_111_fault_management_80',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0081',
    name: 'Meas_ts_32_111_fault_management_81',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0082',
    name: 'Meas_ts_32_111_fault_management_82',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0083',
    name: 'Meas_ts_32_111_fault_management_83',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0084',
    name: 'Meas_ts_32_111_fault_management_84',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0085',
    name: 'Meas_ts_32_111_fault_management_85',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0086',
    name: 'Meas_ts_32_111_fault_management_86',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0087',
    name: 'Meas_ts_32_111_fault_management_87',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0088',
    name: 'Meas_ts_32_111_fault_management_88',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0089',
    name: 'Meas_ts_32_111_fault_management_89',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0090',
    name: 'Meas_ts_32_111_fault_management_90',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0091',
    name: 'Meas_ts_32_111_fault_management_91',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0092',
    name: 'Meas_ts_32_111_fault_management_92',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0093',
    name: 'Meas_ts_32_111_fault_management_93',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0094',
    name: 'Meas_ts_32_111_fault_management_94',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0095',
    name: 'Meas_ts_32_111_fault_management_95',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0096',
    name: 'Meas_ts_32_111_fault_management_96',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0097',
    name: 'Meas_ts_32_111_fault_management_97',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0098',
    name: 'Meas_ts_32_111_fault_management_98',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0099',
    name: 'Meas_ts_32_111_fault_management_99',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0100',
    name: 'Meas_ts_32_111_fault_management_100',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0101',
    name: 'Meas_ts_32_111_fault_management_101',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0102',
    name: 'Meas_ts_32_111_fault_management_102',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0103',
    name: 'Meas_ts_32_111_fault_management_103',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0104',
    name: 'Meas_ts_32_111_fault_management_104',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0105',
    name: 'Meas_ts_32_111_fault_management_105',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0106',
    name: 'Meas_ts_32_111_fault_management_106',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0107',
    name: 'Meas_ts_32_111_fault_management_107',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0108',
    name: 'Meas_ts_32_111_fault_management_108',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0109',
    name: 'Meas_ts_32_111_fault_management_109',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0110',
    name: 'Meas_ts_32_111_fault_management_110',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0111',
    name: 'Meas_ts_32_111_fault_management_111',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0112',
    name: 'Meas_ts_32_111_fault_management_112',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0113',
    name: 'Meas_ts_32_111_fault_management_113',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0114',
    name: 'Meas_ts_32_111_fault_management_114',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0115',
    name: 'Meas_ts_32_111_fault_management_115',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0116',
    name: 'Meas_ts_32_111_fault_management_116',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0117',
    name: 'Meas_ts_32_111_fault_management_117',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0118',
    name: 'Meas_ts_32_111_fault_management_118',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0119',
    name: 'Meas_ts_32_111_fault_management_119',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0120',
    name: 'Meas_ts_32_111_fault_management_120',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0121',
    name: 'Meas_ts_32_111_fault_management_121',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0122',
    name: 'Meas_ts_32_111_fault_management_122',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0123',
    name: 'Meas_ts_32_111_fault_management_123',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0124',
    name: 'Meas_ts_32_111_fault_management_124',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0125',
    name: 'Meas_ts_32_111_fault_management_125',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0126',
    name: 'Meas_ts_32_111_fault_management_126',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0127',
    name: 'Meas_ts_32_111_fault_management_127',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0128',
    name: 'Meas_ts_32_111_fault_management_128',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0129',
    name: 'Meas_ts_32_111_fault_management_129',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0130',
    name: 'Meas_ts_32_111_fault_management_130',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0131',
    name: 'Meas_ts_32_111_fault_management_131',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0132',
    name: 'Meas_ts_32_111_fault_management_132',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0133',
    name: 'Meas_ts_32_111_fault_management_133',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0134',
    name: 'Meas_ts_32_111_fault_management_134',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0135',
    name: 'Meas_ts_32_111_fault_management_135',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0136',
    name: 'Meas_ts_32_111_fault_management_136',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0137',
    name: 'Meas_ts_32_111_fault_management_137',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0138',
    name: 'Meas_ts_32_111_fault_management_138',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0139',
    name: 'Meas_ts_32_111_fault_management_139',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0140',
    name: 'Meas_ts_32_111_fault_management_140',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0141',
    name: 'Meas_ts_32_111_fault_management_141',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0142',
    name: 'Meas_ts_32_111_fault_management_142',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0143',
    name: 'Meas_ts_32_111_fault_management_143',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0144',
    name: 'Meas_ts_32_111_fault_management_144',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0145',
    name: 'Meas_ts_32_111_fault_management_145',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0146',
    name: 'Meas_ts_32_111_fault_management_146',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0147',
    name: 'Meas_ts_32_111_fault_management_147',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0148',
    name: 'Meas_ts_32_111_fault_management_148',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0149',
    name: 'Meas_ts_32_111_fault_management_149',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0150',
    name: 'Meas_ts_32_111_fault_management_150',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0151',
    name: 'Meas_ts_32_111_fault_management_151',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0152',
    name: 'Meas_ts_32_111_fault_management_152',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0153',
    name: 'Meas_ts_32_111_fault_management_153',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0154',
    name: 'Meas_ts_32_111_fault_management_154',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0155',
    name: 'Meas_ts_32_111_fault_management_155',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0156',
    name: 'Meas_ts_32_111_fault_management_156',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0157',
    name: 'Meas_ts_32_111_fault_management_157',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0158',
    name: 'Meas_ts_32_111_fault_management_158',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0159',
    name: 'Meas_ts_32_111_fault_management_159',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0160',
    name: 'Meas_ts_32_111_fault_management_160',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0161',
    name: 'Meas_ts_32_111_fault_management_161',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0162',
    name: 'Meas_ts_32_111_fault_management_162',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0163',
    name: 'Meas_ts_32_111_fault_management_163',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0164',
    name: 'Meas_ts_32_111_fault_management_164',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0165',
    name: 'Meas_ts_32_111_fault_management_165',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0166',
    name: 'Meas_ts_32_111_fault_management_166',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0167',
    name: 'Meas_ts_32_111_fault_management_167',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0168',
    name: 'Meas_ts_32_111_fault_management_168',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0169',
    name: 'Meas_ts_32_111_fault_management_169',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0170',
    name: 'Meas_ts_32_111_fault_management_170',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0171',
    name: 'Meas_ts_32_111_fault_management_171',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0172',
    name: 'Meas_ts_32_111_fault_management_172',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0173',
    name: 'Meas_ts_32_111_fault_management_173',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0174',
    name: 'Meas_ts_32_111_fault_management_174',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0175',
    name: 'Meas_ts_32_111_fault_management_175',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0176',
    name: 'Meas_ts_32_111_fault_management_176',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0177',
    name: 'Meas_ts_32_111_fault_management_177',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0178',
    name: 'Meas_ts_32_111_fault_management_178',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0179',
    name: 'Meas_ts_32_111_fault_management_179',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0180',
    name: 'Meas_ts_32_111_fault_management_180',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0181',
    name: 'Meas_ts_32_111_fault_management_181',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0182',
    name: 'Meas_ts_32_111_fault_management_182',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0183',
    name: 'Meas_ts_32_111_fault_management_183',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0184',
    name: 'Meas_ts_32_111_fault_management_184',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0185',
    name: 'Meas_ts_32_111_fault_management_185',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0186',
    name: 'Meas_ts_32_111_fault_management_186',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0187',
    name: 'Meas_ts_32_111_fault_management_187',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0188',
    name: 'Meas_ts_32_111_fault_management_188',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0189',
    name: 'Meas_ts_32_111_fault_management_189',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0190',
    name: 'Meas_ts_32_111_fault_management_190',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0191',
    name: 'Meas_ts_32_111_fault_management_191',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0192',
    name: 'Meas_ts_32_111_fault_management_192',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0193',
    name: 'Meas_ts_32_111_fault_management_193',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0194',
    name: 'Meas_ts_32_111_fault_management_194',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0195',
    name: 'Meas_ts_32_111_fault_management_195',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0196',
    name: 'Meas_ts_32_111_fault_management_196',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0197',
    name: 'Meas_ts_32_111_fault_management_197',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0198',
    name: 'Meas_ts_32_111_fault_management_198',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0199',
    name: 'Meas_ts_32_111_fault_management_199',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0200',
    name: 'Meas_ts_32_111_fault_management_200',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0201',
    name: 'Meas_ts_32_111_fault_management_201',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0202',
    name: 'Meas_ts_32_111_fault_management_202',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0203',
    name: 'Meas_ts_32_111_fault_management_203',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0204',
    name: 'Meas_ts_32_111_fault_management_204',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0205',
    name: 'Meas_ts_32_111_fault_management_205',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0206',
    name: 'Meas_ts_32_111_fault_management_206',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0207',
    name: 'Meas_ts_32_111_fault_management_207',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0208',
    name: 'Meas_ts_32_111_fault_management_208',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0209',
    name: 'Meas_ts_32_111_fault_management_209',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0210',
    name: 'Meas_ts_32_111_fault_management_210',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0211',
    name: 'Meas_ts_32_111_fault_management_211',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0212',
    name: 'Meas_ts_32_111_fault_management_212',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0213',
    name: 'Meas_ts_32_111_fault_management_213',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0214',
    name: 'Meas_ts_32_111_fault_management_214',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0215',
    name: 'Meas_ts_32_111_fault_management_215',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0216',
    name: 'Meas_ts_32_111_fault_management_216',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0217',
    name: 'Meas_ts_32_111_fault_management_217',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0218',
    name: 'Meas_ts_32_111_fault_management_218',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0219',
    name: 'Meas_ts_32_111_fault_management_219',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0220',
    name: 'Meas_ts_32_111_fault_management_220',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0221',
    name: 'Meas_ts_32_111_fault_management_221',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0222',
    name: 'Meas_ts_32_111_fault_management_222',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0223',
    name: 'Meas_ts_32_111_fault_management_223',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0224',
    name: 'Meas_ts_32_111_fault_management_224',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0225',
    name: 'Meas_ts_32_111_fault_management_225',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0226',
    name: 'Meas_ts_32_111_fault_management_226',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0227',
    name: 'Meas_ts_32_111_fault_management_227',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0228',
    name: 'Meas_ts_32_111_fault_management_228',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0229',
    name: 'Meas_ts_32_111_fault_management_229',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0230',
    name: 'Meas_ts_32_111_fault_management_230',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0231',
    name: 'Meas_ts_32_111_fault_management_231',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0232',
    name: 'Meas_ts_32_111_fault_management_232',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0233',
    name: 'Meas_ts_32_111_fault_management_233',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0234',
    name: 'Meas_ts_32_111_fault_management_234',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0235',
    name: 'Meas_ts_32_111_fault_management_235',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0236',
    name: 'Meas_ts_32_111_fault_management_236',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0237',
    name: 'Meas_ts_32_111_fault_management_237',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0238',
    name: 'Meas_ts_32_111_fault_management_238',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0239',
    name: 'Meas_ts_32_111_fault_management_239',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0240',
    name: 'Meas_ts_32_111_fault_management_240',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0241',
    name: 'Meas_ts_32_111_fault_management_241',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0242',
    name: 'Meas_ts_32_111_fault_management_242',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0243',
    name: 'Meas_ts_32_111_fault_management_243',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0244',
    name: 'Meas_ts_32_111_fault_management_244',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0245',
    name: 'Meas_ts_32_111_fault_management_245',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0246',
    name: 'Meas_ts_32_111_fault_management_246',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0247',
    name: 'Meas_ts_32_111_fault_management_247',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0248',
    name: 'Meas_ts_32_111_fault_management_248',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0249',
    name: 'Meas_ts_32_111_fault_management_249',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0250',
    name: 'Meas_ts_32_111_fault_management_250',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0251',
    name: 'Meas_ts_32_111_fault_management_251',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0252',
    name: 'Meas_ts_32_111_fault_management_252',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0253',
    name: 'Meas_ts_32_111_fault_management_253',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0254',
    name: 'Meas_ts_32_111_fault_management_254',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0255',
    name: 'Meas_ts_32_111_fault_management_255',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0256',
    name: 'Meas_ts_32_111_fault_management_256',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0257',
    name: 'Meas_ts_32_111_fault_management_257',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0258',
    name: 'Meas_ts_32_111_fault_management_258',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0259',
    name: 'Meas_ts_32_111_fault_management_259',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_111_FAULT_MANAGEMENT_0260',
    name: 'Meas_ts_32_111_fault_management_260',
    standardReference: 'TS-32-111-FAULT-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for Telecommunication Management Fault Management and Alarms (3GPP TS 32.111). Critical for cellular slicing SLA governance.'
  },
];

export class Ts32111FaultManagementProcessor {
  public computeSliceKpi_1(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 15;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_2(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 30;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_3(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 45;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_4(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 60;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_5(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 75;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_6(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 90;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_7(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 105;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_8(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 120;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_9(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 135;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_10(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 150;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_11(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 165;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_12(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 180;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_13(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 195;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_14(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 210;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_15(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 225;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_16(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 240;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_17(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 255;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_18(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 270;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_19(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 285;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_20(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 300;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_21(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 315;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_22(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 330;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_23(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 345;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_24(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 360;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_25(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 375;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_26(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 390;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_27(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 405;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_28(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 420;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_29(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 435;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_30(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 450;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_31(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 465;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_32(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 480;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_33(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 495;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_34(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 510;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_35(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 525;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_36(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 540;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_37(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 555;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_38(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 570;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_39(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 585;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_40(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 600;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_41(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 615;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_42(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 630;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_43(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 645;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_44(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 660;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_45(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 675;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_46(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 690;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_47(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 705;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_48(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 720;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_49(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 735;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

  public computeSliceKpi_50(cellId: string, samples: number[]): { cellId: string; score: number; passed: boolean } {
    if (!samples || samples.length === 0) return { cellId, score: 0, passed: false };
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const threshold = 750;
    return {
      cellId,
      score: avg,
      passed: avg <= threshold
    };
  }

}
