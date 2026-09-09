/**
 * GeoNet Sentinel 3GPP Specification Model
 * System Architecture for the 5G System Stage 2 (3GPP TS 23.501)
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

export const TS_23_501_5GC_SYSTEM_ARCHITECTURE_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0001',
    name: 'Meas_ts_23_501_5gc_system_architecture_1',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0002',
    name: 'Meas_ts_23_501_5gc_system_architecture_2',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0003',
    name: 'Meas_ts_23_501_5gc_system_architecture_3',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0004',
    name: 'Meas_ts_23_501_5gc_system_architecture_4',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0005',
    name: 'Meas_ts_23_501_5gc_system_architecture_5',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0006',
    name: 'Meas_ts_23_501_5gc_system_architecture_6',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0007',
    name: 'Meas_ts_23_501_5gc_system_architecture_7',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0008',
    name: 'Meas_ts_23_501_5gc_system_architecture_8',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0009',
    name: 'Meas_ts_23_501_5gc_system_architecture_9',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0010',
    name: 'Meas_ts_23_501_5gc_system_architecture_10',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0011',
    name: 'Meas_ts_23_501_5gc_system_architecture_11',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0012',
    name: 'Meas_ts_23_501_5gc_system_architecture_12',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0013',
    name: 'Meas_ts_23_501_5gc_system_architecture_13',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0014',
    name: 'Meas_ts_23_501_5gc_system_architecture_14',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0015',
    name: 'Meas_ts_23_501_5gc_system_architecture_15',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0016',
    name: 'Meas_ts_23_501_5gc_system_architecture_16',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0017',
    name: 'Meas_ts_23_501_5gc_system_architecture_17',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0018',
    name: 'Meas_ts_23_501_5gc_system_architecture_18',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0019',
    name: 'Meas_ts_23_501_5gc_system_architecture_19',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0020',
    name: 'Meas_ts_23_501_5gc_system_architecture_20',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0021',
    name: 'Meas_ts_23_501_5gc_system_architecture_21',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0022',
    name: 'Meas_ts_23_501_5gc_system_architecture_22',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0023',
    name: 'Meas_ts_23_501_5gc_system_architecture_23',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0024',
    name: 'Meas_ts_23_501_5gc_system_architecture_24',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0025',
    name: 'Meas_ts_23_501_5gc_system_architecture_25',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0026',
    name: 'Meas_ts_23_501_5gc_system_architecture_26',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0027',
    name: 'Meas_ts_23_501_5gc_system_architecture_27',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0028',
    name: 'Meas_ts_23_501_5gc_system_architecture_28',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0029',
    name: 'Meas_ts_23_501_5gc_system_architecture_29',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0030',
    name: 'Meas_ts_23_501_5gc_system_architecture_30',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0031',
    name: 'Meas_ts_23_501_5gc_system_architecture_31',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0032',
    name: 'Meas_ts_23_501_5gc_system_architecture_32',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0033',
    name: 'Meas_ts_23_501_5gc_system_architecture_33',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0034',
    name: 'Meas_ts_23_501_5gc_system_architecture_34',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0035',
    name: 'Meas_ts_23_501_5gc_system_architecture_35',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0036',
    name: 'Meas_ts_23_501_5gc_system_architecture_36',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0037',
    name: 'Meas_ts_23_501_5gc_system_architecture_37',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0038',
    name: 'Meas_ts_23_501_5gc_system_architecture_38',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0039',
    name: 'Meas_ts_23_501_5gc_system_architecture_39',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0040',
    name: 'Meas_ts_23_501_5gc_system_architecture_40',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0041',
    name: 'Meas_ts_23_501_5gc_system_architecture_41',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0042',
    name: 'Meas_ts_23_501_5gc_system_architecture_42',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0043',
    name: 'Meas_ts_23_501_5gc_system_architecture_43',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0044',
    name: 'Meas_ts_23_501_5gc_system_architecture_44',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0045',
    name: 'Meas_ts_23_501_5gc_system_architecture_45',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0046',
    name: 'Meas_ts_23_501_5gc_system_architecture_46',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0047',
    name: 'Meas_ts_23_501_5gc_system_architecture_47',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0048',
    name: 'Meas_ts_23_501_5gc_system_architecture_48',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0049',
    name: 'Meas_ts_23_501_5gc_system_architecture_49',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0050',
    name: 'Meas_ts_23_501_5gc_system_architecture_50',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0051',
    name: 'Meas_ts_23_501_5gc_system_architecture_51',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0052',
    name: 'Meas_ts_23_501_5gc_system_architecture_52',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0053',
    name: 'Meas_ts_23_501_5gc_system_architecture_53',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0054',
    name: 'Meas_ts_23_501_5gc_system_architecture_54',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0055',
    name: 'Meas_ts_23_501_5gc_system_architecture_55',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0056',
    name: 'Meas_ts_23_501_5gc_system_architecture_56',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0057',
    name: 'Meas_ts_23_501_5gc_system_architecture_57',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0058',
    name: 'Meas_ts_23_501_5gc_system_architecture_58',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0059',
    name: 'Meas_ts_23_501_5gc_system_architecture_59',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0060',
    name: 'Meas_ts_23_501_5gc_system_architecture_60',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0061',
    name: 'Meas_ts_23_501_5gc_system_architecture_61',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0062',
    name: 'Meas_ts_23_501_5gc_system_architecture_62',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0063',
    name: 'Meas_ts_23_501_5gc_system_architecture_63',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0064',
    name: 'Meas_ts_23_501_5gc_system_architecture_64',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0065',
    name: 'Meas_ts_23_501_5gc_system_architecture_65',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0066',
    name: 'Meas_ts_23_501_5gc_system_architecture_66',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0067',
    name: 'Meas_ts_23_501_5gc_system_architecture_67',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0068',
    name: 'Meas_ts_23_501_5gc_system_architecture_68',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0069',
    name: 'Meas_ts_23_501_5gc_system_architecture_69',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0070',
    name: 'Meas_ts_23_501_5gc_system_architecture_70',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0071',
    name: 'Meas_ts_23_501_5gc_system_architecture_71',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0072',
    name: 'Meas_ts_23_501_5gc_system_architecture_72',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0073',
    name: 'Meas_ts_23_501_5gc_system_architecture_73',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0074',
    name: 'Meas_ts_23_501_5gc_system_architecture_74',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0075',
    name: 'Meas_ts_23_501_5gc_system_architecture_75',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0076',
    name: 'Meas_ts_23_501_5gc_system_architecture_76',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0077',
    name: 'Meas_ts_23_501_5gc_system_architecture_77',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0078',
    name: 'Meas_ts_23_501_5gc_system_architecture_78',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0079',
    name: 'Meas_ts_23_501_5gc_system_architecture_79',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0080',
    name: 'Meas_ts_23_501_5gc_system_architecture_80',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0081',
    name: 'Meas_ts_23_501_5gc_system_architecture_81',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0082',
    name: 'Meas_ts_23_501_5gc_system_architecture_82',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0083',
    name: 'Meas_ts_23_501_5gc_system_architecture_83',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0084',
    name: 'Meas_ts_23_501_5gc_system_architecture_84',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0085',
    name: 'Meas_ts_23_501_5gc_system_architecture_85',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0086',
    name: 'Meas_ts_23_501_5gc_system_architecture_86',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0087',
    name: 'Meas_ts_23_501_5gc_system_architecture_87',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0088',
    name: 'Meas_ts_23_501_5gc_system_architecture_88',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0089',
    name: 'Meas_ts_23_501_5gc_system_architecture_89',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0090',
    name: 'Meas_ts_23_501_5gc_system_architecture_90',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0091',
    name: 'Meas_ts_23_501_5gc_system_architecture_91',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0092',
    name: 'Meas_ts_23_501_5gc_system_architecture_92',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0093',
    name: 'Meas_ts_23_501_5gc_system_architecture_93',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0094',
    name: 'Meas_ts_23_501_5gc_system_architecture_94',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0095',
    name: 'Meas_ts_23_501_5gc_system_architecture_95',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0096',
    name: 'Meas_ts_23_501_5gc_system_architecture_96',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0097',
    name: 'Meas_ts_23_501_5gc_system_architecture_97',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0098',
    name: 'Meas_ts_23_501_5gc_system_architecture_98',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0099',
    name: 'Meas_ts_23_501_5gc_system_architecture_99',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0100',
    name: 'Meas_ts_23_501_5gc_system_architecture_100',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0101',
    name: 'Meas_ts_23_501_5gc_system_architecture_101',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0102',
    name: 'Meas_ts_23_501_5gc_system_architecture_102',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0103',
    name: 'Meas_ts_23_501_5gc_system_architecture_103',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0104',
    name: 'Meas_ts_23_501_5gc_system_architecture_104',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0105',
    name: 'Meas_ts_23_501_5gc_system_architecture_105',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0106',
    name: 'Meas_ts_23_501_5gc_system_architecture_106',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0107',
    name: 'Meas_ts_23_501_5gc_system_architecture_107',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0108',
    name: 'Meas_ts_23_501_5gc_system_architecture_108',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0109',
    name: 'Meas_ts_23_501_5gc_system_architecture_109',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0110',
    name: 'Meas_ts_23_501_5gc_system_architecture_110',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0111',
    name: 'Meas_ts_23_501_5gc_system_architecture_111',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0112',
    name: 'Meas_ts_23_501_5gc_system_architecture_112',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0113',
    name: 'Meas_ts_23_501_5gc_system_architecture_113',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0114',
    name: 'Meas_ts_23_501_5gc_system_architecture_114',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0115',
    name: 'Meas_ts_23_501_5gc_system_architecture_115',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0116',
    name: 'Meas_ts_23_501_5gc_system_architecture_116',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0117',
    name: 'Meas_ts_23_501_5gc_system_architecture_117',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0118',
    name: 'Meas_ts_23_501_5gc_system_architecture_118',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0119',
    name: 'Meas_ts_23_501_5gc_system_architecture_119',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0120',
    name: 'Meas_ts_23_501_5gc_system_architecture_120',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0121',
    name: 'Meas_ts_23_501_5gc_system_architecture_121',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0122',
    name: 'Meas_ts_23_501_5gc_system_architecture_122',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0123',
    name: 'Meas_ts_23_501_5gc_system_architecture_123',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0124',
    name: 'Meas_ts_23_501_5gc_system_architecture_124',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0125',
    name: 'Meas_ts_23_501_5gc_system_architecture_125',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0126',
    name: 'Meas_ts_23_501_5gc_system_architecture_126',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0127',
    name: 'Meas_ts_23_501_5gc_system_architecture_127',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0128',
    name: 'Meas_ts_23_501_5gc_system_architecture_128',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0129',
    name: 'Meas_ts_23_501_5gc_system_architecture_129',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0130',
    name: 'Meas_ts_23_501_5gc_system_architecture_130',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0131',
    name: 'Meas_ts_23_501_5gc_system_architecture_131',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0132',
    name: 'Meas_ts_23_501_5gc_system_architecture_132',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0133',
    name: 'Meas_ts_23_501_5gc_system_architecture_133',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0134',
    name: 'Meas_ts_23_501_5gc_system_architecture_134',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0135',
    name: 'Meas_ts_23_501_5gc_system_architecture_135',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0136',
    name: 'Meas_ts_23_501_5gc_system_architecture_136',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0137',
    name: 'Meas_ts_23_501_5gc_system_architecture_137',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0138',
    name: 'Meas_ts_23_501_5gc_system_architecture_138',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0139',
    name: 'Meas_ts_23_501_5gc_system_architecture_139',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0140',
    name: 'Meas_ts_23_501_5gc_system_architecture_140',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0141',
    name: 'Meas_ts_23_501_5gc_system_architecture_141',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0142',
    name: 'Meas_ts_23_501_5gc_system_architecture_142',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0143',
    name: 'Meas_ts_23_501_5gc_system_architecture_143',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0144',
    name: 'Meas_ts_23_501_5gc_system_architecture_144',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0145',
    name: 'Meas_ts_23_501_5gc_system_architecture_145',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0146',
    name: 'Meas_ts_23_501_5gc_system_architecture_146',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0147',
    name: 'Meas_ts_23_501_5gc_system_architecture_147',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0148',
    name: 'Meas_ts_23_501_5gc_system_architecture_148',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0149',
    name: 'Meas_ts_23_501_5gc_system_architecture_149',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0150',
    name: 'Meas_ts_23_501_5gc_system_architecture_150',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0151',
    name: 'Meas_ts_23_501_5gc_system_architecture_151',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0152',
    name: 'Meas_ts_23_501_5gc_system_architecture_152',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0153',
    name: 'Meas_ts_23_501_5gc_system_architecture_153',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0154',
    name: 'Meas_ts_23_501_5gc_system_architecture_154',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0155',
    name: 'Meas_ts_23_501_5gc_system_architecture_155',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0156',
    name: 'Meas_ts_23_501_5gc_system_architecture_156',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0157',
    name: 'Meas_ts_23_501_5gc_system_architecture_157',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0158',
    name: 'Meas_ts_23_501_5gc_system_architecture_158',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0159',
    name: 'Meas_ts_23_501_5gc_system_architecture_159',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0160',
    name: 'Meas_ts_23_501_5gc_system_architecture_160',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0161',
    name: 'Meas_ts_23_501_5gc_system_architecture_161',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0162',
    name: 'Meas_ts_23_501_5gc_system_architecture_162',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0163',
    name: 'Meas_ts_23_501_5gc_system_architecture_163',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0164',
    name: 'Meas_ts_23_501_5gc_system_architecture_164',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0165',
    name: 'Meas_ts_23_501_5gc_system_architecture_165',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0166',
    name: 'Meas_ts_23_501_5gc_system_architecture_166',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0167',
    name: 'Meas_ts_23_501_5gc_system_architecture_167',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0168',
    name: 'Meas_ts_23_501_5gc_system_architecture_168',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0169',
    name: 'Meas_ts_23_501_5gc_system_architecture_169',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0170',
    name: 'Meas_ts_23_501_5gc_system_architecture_170',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0171',
    name: 'Meas_ts_23_501_5gc_system_architecture_171',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0172',
    name: 'Meas_ts_23_501_5gc_system_architecture_172',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0173',
    name: 'Meas_ts_23_501_5gc_system_architecture_173',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0174',
    name: 'Meas_ts_23_501_5gc_system_architecture_174',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0175',
    name: 'Meas_ts_23_501_5gc_system_architecture_175',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0176',
    name: 'Meas_ts_23_501_5gc_system_architecture_176',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0177',
    name: 'Meas_ts_23_501_5gc_system_architecture_177',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0178',
    name: 'Meas_ts_23_501_5gc_system_architecture_178',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0179',
    name: 'Meas_ts_23_501_5gc_system_architecture_179',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0180',
    name: 'Meas_ts_23_501_5gc_system_architecture_180',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0181',
    name: 'Meas_ts_23_501_5gc_system_architecture_181',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0182',
    name: 'Meas_ts_23_501_5gc_system_architecture_182',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0183',
    name: 'Meas_ts_23_501_5gc_system_architecture_183',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0184',
    name: 'Meas_ts_23_501_5gc_system_architecture_184',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0185',
    name: 'Meas_ts_23_501_5gc_system_architecture_185',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0186',
    name: 'Meas_ts_23_501_5gc_system_architecture_186',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0187',
    name: 'Meas_ts_23_501_5gc_system_architecture_187',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0188',
    name: 'Meas_ts_23_501_5gc_system_architecture_188',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0189',
    name: 'Meas_ts_23_501_5gc_system_architecture_189',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0190',
    name: 'Meas_ts_23_501_5gc_system_architecture_190',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0191',
    name: 'Meas_ts_23_501_5gc_system_architecture_191',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0192',
    name: 'Meas_ts_23_501_5gc_system_architecture_192',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0193',
    name: 'Meas_ts_23_501_5gc_system_architecture_193',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0194',
    name: 'Meas_ts_23_501_5gc_system_architecture_194',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0195',
    name: 'Meas_ts_23_501_5gc_system_architecture_195',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0196',
    name: 'Meas_ts_23_501_5gc_system_architecture_196',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0197',
    name: 'Meas_ts_23_501_5gc_system_architecture_197',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0198',
    name: 'Meas_ts_23_501_5gc_system_architecture_198',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0199',
    name: 'Meas_ts_23_501_5gc_system_architecture_199',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0200',
    name: 'Meas_ts_23_501_5gc_system_architecture_200',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0201',
    name: 'Meas_ts_23_501_5gc_system_architecture_201',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0202',
    name: 'Meas_ts_23_501_5gc_system_architecture_202',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0203',
    name: 'Meas_ts_23_501_5gc_system_architecture_203',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0204',
    name: 'Meas_ts_23_501_5gc_system_architecture_204',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0205',
    name: 'Meas_ts_23_501_5gc_system_architecture_205',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0206',
    name: 'Meas_ts_23_501_5gc_system_architecture_206',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0207',
    name: 'Meas_ts_23_501_5gc_system_architecture_207',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0208',
    name: 'Meas_ts_23_501_5gc_system_architecture_208',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0209',
    name: 'Meas_ts_23_501_5gc_system_architecture_209',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0210',
    name: 'Meas_ts_23_501_5gc_system_architecture_210',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0211',
    name: 'Meas_ts_23_501_5gc_system_architecture_211',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0212',
    name: 'Meas_ts_23_501_5gc_system_architecture_212',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0213',
    name: 'Meas_ts_23_501_5gc_system_architecture_213',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0214',
    name: 'Meas_ts_23_501_5gc_system_architecture_214',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0215',
    name: 'Meas_ts_23_501_5gc_system_architecture_215',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0216',
    name: 'Meas_ts_23_501_5gc_system_architecture_216',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0217',
    name: 'Meas_ts_23_501_5gc_system_architecture_217',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0218',
    name: 'Meas_ts_23_501_5gc_system_architecture_218',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0219',
    name: 'Meas_ts_23_501_5gc_system_architecture_219',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0220',
    name: 'Meas_ts_23_501_5gc_system_architecture_220',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0221',
    name: 'Meas_ts_23_501_5gc_system_architecture_221',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0222',
    name: 'Meas_ts_23_501_5gc_system_architecture_222',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0223',
    name: 'Meas_ts_23_501_5gc_system_architecture_223',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0224',
    name: 'Meas_ts_23_501_5gc_system_architecture_224',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0225',
    name: 'Meas_ts_23_501_5gc_system_architecture_225',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0226',
    name: 'Meas_ts_23_501_5gc_system_architecture_226',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0227',
    name: 'Meas_ts_23_501_5gc_system_architecture_227',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0228',
    name: 'Meas_ts_23_501_5gc_system_architecture_228',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0229',
    name: 'Meas_ts_23_501_5gc_system_architecture_229',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0230',
    name: 'Meas_ts_23_501_5gc_system_architecture_230',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0231',
    name: 'Meas_ts_23_501_5gc_system_architecture_231',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0232',
    name: 'Meas_ts_23_501_5gc_system_architecture_232',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0233',
    name: 'Meas_ts_23_501_5gc_system_architecture_233',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0234',
    name: 'Meas_ts_23_501_5gc_system_architecture_234',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0235',
    name: 'Meas_ts_23_501_5gc_system_architecture_235',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0236',
    name: 'Meas_ts_23_501_5gc_system_architecture_236',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0237',
    name: 'Meas_ts_23_501_5gc_system_architecture_237',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0238',
    name: 'Meas_ts_23_501_5gc_system_architecture_238',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0239',
    name: 'Meas_ts_23_501_5gc_system_architecture_239',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0240',
    name: 'Meas_ts_23_501_5gc_system_architecture_240',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0241',
    name: 'Meas_ts_23_501_5gc_system_architecture_241',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0242',
    name: 'Meas_ts_23_501_5gc_system_architecture_242',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0243',
    name: 'Meas_ts_23_501_5gc_system_architecture_243',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0244',
    name: 'Meas_ts_23_501_5gc_system_architecture_244',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0245',
    name: 'Meas_ts_23_501_5gc_system_architecture_245',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0246',
    name: 'Meas_ts_23_501_5gc_system_architecture_246',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0247',
    name: 'Meas_ts_23_501_5gc_system_architecture_247',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0248',
    name: 'Meas_ts_23_501_5gc_system_architecture_248',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0249',
    name: 'Meas_ts_23_501_5gc_system_architecture_249',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0250',
    name: 'Meas_ts_23_501_5gc_system_architecture_250',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0251',
    name: 'Meas_ts_23_501_5gc_system_architecture_251',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0252',
    name: 'Meas_ts_23_501_5gc_system_architecture_252',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0253',
    name: 'Meas_ts_23_501_5gc_system_architecture_253',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0254',
    name: 'Meas_ts_23_501_5gc_system_architecture_254',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0255',
    name: 'Meas_ts_23_501_5gc_system_architecture_255',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0256',
    name: 'Meas_ts_23_501_5gc_system_architecture_256',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0257',
    name: 'Meas_ts_23_501_5gc_system_architecture_257',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0258',
    name: 'Meas_ts_23_501_5gc_system_architecture_258',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0259',
    name: 'Meas_ts_23_501_5gc_system_architecture_259',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_23_501_5GC_SYSTEM_ARCHITECTURE_0260',
    name: 'Meas_ts_23_501_5gc_system_architecture_260',
    standardReference: 'TS-23-501-5GC-SYSTEM-ARCHITECTURE',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for System Architecture for the 5G System Stage 2 (3GPP TS 23.501). Critical for cellular slicing SLA governance.'
  },
];

export class Ts235015GcSystemArchitectureProcessor {
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
