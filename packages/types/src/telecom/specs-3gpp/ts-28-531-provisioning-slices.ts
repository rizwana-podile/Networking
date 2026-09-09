/**
 * GeoNet Sentinel 3GPP Specification Model
 * Management and Orchestration of 5G Network Slicing (3GPP TS 28.531)
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

export const TS_28_531_PROVISIONING_SLICES_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0001',
    name: 'Meas_ts_28_531_provisioning_slices_1',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0002',
    name: 'Meas_ts_28_531_provisioning_slices_2',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0003',
    name: 'Meas_ts_28_531_provisioning_slices_3',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0004',
    name: 'Meas_ts_28_531_provisioning_slices_4',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0005',
    name: 'Meas_ts_28_531_provisioning_slices_5',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0006',
    name: 'Meas_ts_28_531_provisioning_slices_6',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0007',
    name: 'Meas_ts_28_531_provisioning_slices_7',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0008',
    name: 'Meas_ts_28_531_provisioning_slices_8',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0009',
    name: 'Meas_ts_28_531_provisioning_slices_9',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0010',
    name: 'Meas_ts_28_531_provisioning_slices_10',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0011',
    name: 'Meas_ts_28_531_provisioning_slices_11',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0012',
    name: 'Meas_ts_28_531_provisioning_slices_12',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0013',
    name: 'Meas_ts_28_531_provisioning_slices_13',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0014',
    name: 'Meas_ts_28_531_provisioning_slices_14',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0015',
    name: 'Meas_ts_28_531_provisioning_slices_15',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0016',
    name: 'Meas_ts_28_531_provisioning_slices_16',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0017',
    name: 'Meas_ts_28_531_provisioning_slices_17',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0018',
    name: 'Meas_ts_28_531_provisioning_slices_18',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0019',
    name: 'Meas_ts_28_531_provisioning_slices_19',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0020',
    name: 'Meas_ts_28_531_provisioning_slices_20',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0021',
    name: 'Meas_ts_28_531_provisioning_slices_21',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0022',
    name: 'Meas_ts_28_531_provisioning_slices_22',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0023',
    name: 'Meas_ts_28_531_provisioning_slices_23',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0024',
    name: 'Meas_ts_28_531_provisioning_slices_24',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0025',
    name: 'Meas_ts_28_531_provisioning_slices_25',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0026',
    name: 'Meas_ts_28_531_provisioning_slices_26',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0027',
    name: 'Meas_ts_28_531_provisioning_slices_27',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0028',
    name: 'Meas_ts_28_531_provisioning_slices_28',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0029',
    name: 'Meas_ts_28_531_provisioning_slices_29',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0030',
    name: 'Meas_ts_28_531_provisioning_slices_30',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0031',
    name: 'Meas_ts_28_531_provisioning_slices_31',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0032',
    name: 'Meas_ts_28_531_provisioning_slices_32',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0033',
    name: 'Meas_ts_28_531_provisioning_slices_33',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0034',
    name: 'Meas_ts_28_531_provisioning_slices_34',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0035',
    name: 'Meas_ts_28_531_provisioning_slices_35',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0036',
    name: 'Meas_ts_28_531_provisioning_slices_36',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0037',
    name: 'Meas_ts_28_531_provisioning_slices_37',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0038',
    name: 'Meas_ts_28_531_provisioning_slices_38',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0039',
    name: 'Meas_ts_28_531_provisioning_slices_39',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0040',
    name: 'Meas_ts_28_531_provisioning_slices_40',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0041',
    name: 'Meas_ts_28_531_provisioning_slices_41',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0042',
    name: 'Meas_ts_28_531_provisioning_slices_42',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0043',
    name: 'Meas_ts_28_531_provisioning_slices_43',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0044',
    name: 'Meas_ts_28_531_provisioning_slices_44',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0045',
    name: 'Meas_ts_28_531_provisioning_slices_45',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0046',
    name: 'Meas_ts_28_531_provisioning_slices_46',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0047',
    name: 'Meas_ts_28_531_provisioning_slices_47',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0048',
    name: 'Meas_ts_28_531_provisioning_slices_48',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0049',
    name: 'Meas_ts_28_531_provisioning_slices_49',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0050',
    name: 'Meas_ts_28_531_provisioning_slices_50',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0051',
    name: 'Meas_ts_28_531_provisioning_slices_51',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0052',
    name: 'Meas_ts_28_531_provisioning_slices_52',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0053',
    name: 'Meas_ts_28_531_provisioning_slices_53',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0054',
    name: 'Meas_ts_28_531_provisioning_slices_54',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0055',
    name: 'Meas_ts_28_531_provisioning_slices_55',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0056',
    name: 'Meas_ts_28_531_provisioning_slices_56',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0057',
    name: 'Meas_ts_28_531_provisioning_slices_57',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0058',
    name: 'Meas_ts_28_531_provisioning_slices_58',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0059',
    name: 'Meas_ts_28_531_provisioning_slices_59',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0060',
    name: 'Meas_ts_28_531_provisioning_slices_60',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0061',
    name: 'Meas_ts_28_531_provisioning_slices_61',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0062',
    name: 'Meas_ts_28_531_provisioning_slices_62',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0063',
    name: 'Meas_ts_28_531_provisioning_slices_63',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0064',
    name: 'Meas_ts_28_531_provisioning_slices_64',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0065',
    name: 'Meas_ts_28_531_provisioning_slices_65',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0066',
    name: 'Meas_ts_28_531_provisioning_slices_66',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0067',
    name: 'Meas_ts_28_531_provisioning_slices_67',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0068',
    name: 'Meas_ts_28_531_provisioning_slices_68',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0069',
    name: 'Meas_ts_28_531_provisioning_slices_69',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0070',
    name: 'Meas_ts_28_531_provisioning_slices_70',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0071',
    name: 'Meas_ts_28_531_provisioning_slices_71',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0072',
    name: 'Meas_ts_28_531_provisioning_slices_72',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0073',
    name: 'Meas_ts_28_531_provisioning_slices_73',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0074',
    name: 'Meas_ts_28_531_provisioning_slices_74',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0075',
    name: 'Meas_ts_28_531_provisioning_slices_75',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0076',
    name: 'Meas_ts_28_531_provisioning_slices_76',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0077',
    name: 'Meas_ts_28_531_provisioning_slices_77',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0078',
    name: 'Meas_ts_28_531_provisioning_slices_78',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0079',
    name: 'Meas_ts_28_531_provisioning_slices_79',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0080',
    name: 'Meas_ts_28_531_provisioning_slices_80',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0081',
    name: 'Meas_ts_28_531_provisioning_slices_81',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0082',
    name: 'Meas_ts_28_531_provisioning_slices_82',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0083',
    name: 'Meas_ts_28_531_provisioning_slices_83',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0084',
    name: 'Meas_ts_28_531_provisioning_slices_84',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0085',
    name: 'Meas_ts_28_531_provisioning_slices_85',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0086',
    name: 'Meas_ts_28_531_provisioning_slices_86',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0087',
    name: 'Meas_ts_28_531_provisioning_slices_87',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0088',
    name: 'Meas_ts_28_531_provisioning_slices_88',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0089',
    name: 'Meas_ts_28_531_provisioning_slices_89',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0090',
    name: 'Meas_ts_28_531_provisioning_slices_90',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0091',
    name: 'Meas_ts_28_531_provisioning_slices_91',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0092',
    name: 'Meas_ts_28_531_provisioning_slices_92',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0093',
    name: 'Meas_ts_28_531_provisioning_slices_93',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0094',
    name: 'Meas_ts_28_531_provisioning_slices_94',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0095',
    name: 'Meas_ts_28_531_provisioning_slices_95',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0096',
    name: 'Meas_ts_28_531_provisioning_slices_96',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0097',
    name: 'Meas_ts_28_531_provisioning_slices_97',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0098',
    name: 'Meas_ts_28_531_provisioning_slices_98',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0099',
    name: 'Meas_ts_28_531_provisioning_slices_99',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0100',
    name: 'Meas_ts_28_531_provisioning_slices_100',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0101',
    name: 'Meas_ts_28_531_provisioning_slices_101',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0102',
    name: 'Meas_ts_28_531_provisioning_slices_102',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0103',
    name: 'Meas_ts_28_531_provisioning_slices_103',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0104',
    name: 'Meas_ts_28_531_provisioning_slices_104',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0105',
    name: 'Meas_ts_28_531_provisioning_slices_105',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0106',
    name: 'Meas_ts_28_531_provisioning_slices_106',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0107',
    name: 'Meas_ts_28_531_provisioning_slices_107',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0108',
    name: 'Meas_ts_28_531_provisioning_slices_108',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0109',
    name: 'Meas_ts_28_531_provisioning_slices_109',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0110',
    name: 'Meas_ts_28_531_provisioning_slices_110',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0111',
    name: 'Meas_ts_28_531_provisioning_slices_111',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0112',
    name: 'Meas_ts_28_531_provisioning_slices_112',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0113',
    name: 'Meas_ts_28_531_provisioning_slices_113',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0114',
    name: 'Meas_ts_28_531_provisioning_slices_114',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0115',
    name: 'Meas_ts_28_531_provisioning_slices_115',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0116',
    name: 'Meas_ts_28_531_provisioning_slices_116',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0117',
    name: 'Meas_ts_28_531_provisioning_slices_117',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0118',
    name: 'Meas_ts_28_531_provisioning_slices_118',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0119',
    name: 'Meas_ts_28_531_provisioning_slices_119',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0120',
    name: 'Meas_ts_28_531_provisioning_slices_120',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0121',
    name: 'Meas_ts_28_531_provisioning_slices_121',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0122',
    name: 'Meas_ts_28_531_provisioning_slices_122',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0123',
    name: 'Meas_ts_28_531_provisioning_slices_123',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0124',
    name: 'Meas_ts_28_531_provisioning_slices_124',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0125',
    name: 'Meas_ts_28_531_provisioning_slices_125',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0126',
    name: 'Meas_ts_28_531_provisioning_slices_126',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0127',
    name: 'Meas_ts_28_531_provisioning_slices_127',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0128',
    name: 'Meas_ts_28_531_provisioning_slices_128',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0129',
    name: 'Meas_ts_28_531_provisioning_slices_129',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0130',
    name: 'Meas_ts_28_531_provisioning_slices_130',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0131',
    name: 'Meas_ts_28_531_provisioning_slices_131',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0132',
    name: 'Meas_ts_28_531_provisioning_slices_132',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0133',
    name: 'Meas_ts_28_531_provisioning_slices_133',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0134',
    name: 'Meas_ts_28_531_provisioning_slices_134',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0135',
    name: 'Meas_ts_28_531_provisioning_slices_135',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0136',
    name: 'Meas_ts_28_531_provisioning_slices_136',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0137',
    name: 'Meas_ts_28_531_provisioning_slices_137',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0138',
    name: 'Meas_ts_28_531_provisioning_slices_138',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0139',
    name: 'Meas_ts_28_531_provisioning_slices_139',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0140',
    name: 'Meas_ts_28_531_provisioning_slices_140',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0141',
    name: 'Meas_ts_28_531_provisioning_slices_141',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0142',
    name: 'Meas_ts_28_531_provisioning_slices_142',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0143',
    name: 'Meas_ts_28_531_provisioning_slices_143',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0144',
    name: 'Meas_ts_28_531_provisioning_slices_144',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0145',
    name: 'Meas_ts_28_531_provisioning_slices_145',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0146',
    name: 'Meas_ts_28_531_provisioning_slices_146',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0147',
    name: 'Meas_ts_28_531_provisioning_slices_147',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0148',
    name: 'Meas_ts_28_531_provisioning_slices_148',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0149',
    name: 'Meas_ts_28_531_provisioning_slices_149',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0150',
    name: 'Meas_ts_28_531_provisioning_slices_150',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0151',
    name: 'Meas_ts_28_531_provisioning_slices_151',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0152',
    name: 'Meas_ts_28_531_provisioning_slices_152',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0153',
    name: 'Meas_ts_28_531_provisioning_slices_153',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0154',
    name: 'Meas_ts_28_531_provisioning_slices_154',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0155',
    name: 'Meas_ts_28_531_provisioning_slices_155',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0156',
    name: 'Meas_ts_28_531_provisioning_slices_156',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0157',
    name: 'Meas_ts_28_531_provisioning_slices_157',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0158',
    name: 'Meas_ts_28_531_provisioning_slices_158',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0159',
    name: 'Meas_ts_28_531_provisioning_slices_159',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0160',
    name: 'Meas_ts_28_531_provisioning_slices_160',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0161',
    name: 'Meas_ts_28_531_provisioning_slices_161',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0162',
    name: 'Meas_ts_28_531_provisioning_slices_162',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0163',
    name: 'Meas_ts_28_531_provisioning_slices_163',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0164',
    name: 'Meas_ts_28_531_provisioning_slices_164',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0165',
    name: 'Meas_ts_28_531_provisioning_slices_165',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0166',
    name: 'Meas_ts_28_531_provisioning_slices_166',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0167',
    name: 'Meas_ts_28_531_provisioning_slices_167',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0168',
    name: 'Meas_ts_28_531_provisioning_slices_168',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0169',
    name: 'Meas_ts_28_531_provisioning_slices_169',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0170',
    name: 'Meas_ts_28_531_provisioning_slices_170',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0171',
    name: 'Meas_ts_28_531_provisioning_slices_171',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0172',
    name: 'Meas_ts_28_531_provisioning_slices_172',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0173',
    name: 'Meas_ts_28_531_provisioning_slices_173',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0174',
    name: 'Meas_ts_28_531_provisioning_slices_174',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0175',
    name: 'Meas_ts_28_531_provisioning_slices_175',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0176',
    name: 'Meas_ts_28_531_provisioning_slices_176',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0177',
    name: 'Meas_ts_28_531_provisioning_slices_177',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0178',
    name: 'Meas_ts_28_531_provisioning_slices_178',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0179',
    name: 'Meas_ts_28_531_provisioning_slices_179',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0180',
    name: 'Meas_ts_28_531_provisioning_slices_180',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0181',
    name: 'Meas_ts_28_531_provisioning_slices_181',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0182',
    name: 'Meas_ts_28_531_provisioning_slices_182',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0183',
    name: 'Meas_ts_28_531_provisioning_slices_183',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0184',
    name: 'Meas_ts_28_531_provisioning_slices_184',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0185',
    name: 'Meas_ts_28_531_provisioning_slices_185',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0186',
    name: 'Meas_ts_28_531_provisioning_slices_186',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0187',
    name: 'Meas_ts_28_531_provisioning_slices_187',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0188',
    name: 'Meas_ts_28_531_provisioning_slices_188',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0189',
    name: 'Meas_ts_28_531_provisioning_slices_189',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0190',
    name: 'Meas_ts_28_531_provisioning_slices_190',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0191',
    name: 'Meas_ts_28_531_provisioning_slices_191',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0192',
    name: 'Meas_ts_28_531_provisioning_slices_192',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0193',
    name: 'Meas_ts_28_531_provisioning_slices_193',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0194',
    name: 'Meas_ts_28_531_provisioning_slices_194',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0195',
    name: 'Meas_ts_28_531_provisioning_slices_195',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0196',
    name: 'Meas_ts_28_531_provisioning_slices_196',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0197',
    name: 'Meas_ts_28_531_provisioning_slices_197',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0198',
    name: 'Meas_ts_28_531_provisioning_slices_198',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0199',
    name: 'Meas_ts_28_531_provisioning_slices_199',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0200',
    name: 'Meas_ts_28_531_provisioning_slices_200',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0201',
    name: 'Meas_ts_28_531_provisioning_slices_201',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0202',
    name: 'Meas_ts_28_531_provisioning_slices_202',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0203',
    name: 'Meas_ts_28_531_provisioning_slices_203',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0204',
    name: 'Meas_ts_28_531_provisioning_slices_204',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0205',
    name: 'Meas_ts_28_531_provisioning_slices_205',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0206',
    name: 'Meas_ts_28_531_provisioning_slices_206',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0207',
    name: 'Meas_ts_28_531_provisioning_slices_207',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0208',
    name: 'Meas_ts_28_531_provisioning_slices_208',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0209',
    name: 'Meas_ts_28_531_provisioning_slices_209',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0210',
    name: 'Meas_ts_28_531_provisioning_slices_210',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0211',
    name: 'Meas_ts_28_531_provisioning_slices_211',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0212',
    name: 'Meas_ts_28_531_provisioning_slices_212',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0213',
    name: 'Meas_ts_28_531_provisioning_slices_213',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0214',
    name: 'Meas_ts_28_531_provisioning_slices_214',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0215',
    name: 'Meas_ts_28_531_provisioning_slices_215',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0216',
    name: 'Meas_ts_28_531_provisioning_slices_216',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0217',
    name: 'Meas_ts_28_531_provisioning_slices_217',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0218',
    name: 'Meas_ts_28_531_provisioning_slices_218',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0219',
    name: 'Meas_ts_28_531_provisioning_slices_219',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0220',
    name: 'Meas_ts_28_531_provisioning_slices_220',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0221',
    name: 'Meas_ts_28_531_provisioning_slices_221',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0222',
    name: 'Meas_ts_28_531_provisioning_slices_222',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0223',
    name: 'Meas_ts_28_531_provisioning_slices_223',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0224',
    name: 'Meas_ts_28_531_provisioning_slices_224',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0225',
    name: 'Meas_ts_28_531_provisioning_slices_225',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0226',
    name: 'Meas_ts_28_531_provisioning_slices_226',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0227',
    name: 'Meas_ts_28_531_provisioning_slices_227',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0228',
    name: 'Meas_ts_28_531_provisioning_slices_228',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0229',
    name: 'Meas_ts_28_531_provisioning_slices_229',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0230',
    name: 'Meas_ts_28_531_provisioning_slices_230',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0231',
    name: 'Meas_ts_28_531_provisioning_slices_231',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0232',
    name: 'Meas_ts_28_531_provisioning_slices_232',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0233',
    name: 'Meas_ts_28_531_provisioning_slices_233',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0234',
    name: 'Meas_ts_28_531_provisioning_slices_234',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0235',
    name: 'Meas_ts_28_531_provisioning_slices_235',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0236',
    name: 'Meas_ts_28_531_provisioning_slices_236',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0237',
    name: 'Meas_ts_28_531_provisioning_slices_237',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0238',
    name: 'Meas_ts_28_531_provisioning_slices_238',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0239',
    name: 'Meas_ts_28_531_provisioning_slices_239',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0240',
    name: 'Meas_ts_28_531_provisioning_slices_240',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0241',
    name: 'Meas_ts_28_531_provisioning_slices_241',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0242',
    name: 'Meas_ts_28_531_provisioning_slices_242',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0243',
    name: 'Meas_ts_28_531_provisioning_slices_243',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0244',
    name: 'Meas_ts_28_531_provisioning_slices_244',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0245',
    name: 'Meas_ts_28_531_provisioning_slices_245',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0246',
    name: 'Meas_ts_28_531_provisioning_slices_246',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0247',
    name: 'Meas_ts_28_531_provisioning_slices_247',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0248',
    name: 'Meas_ts_28_531_provisioning_slices_248',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0249',
    name: 'Meas_ts_28_531_provisioning_slices_249',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0250',
    name: 'Meas_ts_28_531_provisioning_slices_250',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0251',
    name: 'Meas_ts_28_531_provisioning_slices_251',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0252',
    name: 'Meas_ts_28_531_provisioning_slices_252',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0253',
    name: 'Meas_ts_28_531_provisioning_slices_253',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0254',
    name: 'Meas_ts_28_531_provisioning_slices_254',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0255',
    name: 'Meas_ts_28_531_provisioning_slices_255',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0256',
    name: 'Meas_ts_28_531_provisioning_slices_256',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0257',
    name: 'Meas_ts_28_531_provisioning_slices_257',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0258',
    name: 'Meas_ts_28_531_provisioning_slices_258',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0259',
    name: 'Meas_ts_28_531_provisioning_slices_259',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_531_PROVISIONING_SLICES_0260',
    name: 'Meas_ts_28_531_provisioning_slices_260',
    standardReference: 'TS-28-531-PROVISIONING-SLICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for Management and Orchestration of 5G Network Slicing (3GPP TS 28.531). Critical for cellular slicing SLA governance.'
  },
];

export class Ts28531ProvisioningSlicesProcessor {
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
