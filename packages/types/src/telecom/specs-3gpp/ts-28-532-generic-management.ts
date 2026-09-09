/**
 * GeoNet Sentinel 3GPP Specification Model
 * Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532)
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

export const TS_28_532_GENERIC_MANAGEMENT_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0001',
    name: 'Meas_ts_28_532_generic_management_1',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0002',
    name: 'Meas_ts_28_532_generic_management_2',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0003',
    name: 'Meas_ts_28_532_generic_management_3',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0004',
    name: 'Meas_ts_28_532_generic_management_4',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0005',
    name: 'Meas_ts_28_532_generic_management_5',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0006',
    name: 'Meas_ts_28_532_generic_management_6',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0007',
    name: 'Meas_ts_28_532_generic_management_7',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0008',
    name: 'Meas_ts_28_532_generic_management_8',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0009',
    name: 'Meas_ts_28_532_generic_management_9',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0010',
    name: 'Meas_ts_28_532_generic_management_10',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0011',
    name: 'Meas_ts_28_532_generic_management_11',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0012',
    name: 'Meas_ts_28_532_generic_management_12',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0013',
    name: 'Meas_ts_28_532_generic_management_13',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0014',
    name: 'Meas_ts_28_532_generic_management_14',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0015',
    name: 'Meas_ts_28_532_generic_management_15',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0016',
    name: 'Meas_ts_28_532_generic_management_16',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0017',
    name: 'Meas_ts_28_532_generic_management_17',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0018',
    name: 'Meas_ts_28_532_generic_management_18',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0019',
    name: 'Meas_ts_28_532_generic_management_19',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0020',
    name: 'Meas_ts_28_532_generic_management_20',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0021',
    name: 'Meas_ts_28_532_generic_management_21',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0022',
    name: 'Meas_ts_28_532_generic_management_22',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0023',
    name: 'Meas_ts_28_532_generic_management_23',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0024',
    name: 'Meas_ts_28_532_generic_management_24',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0025',
    name: 'Meas_ts_28_532_generic_management_25',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0026',
    name: 'Meas_ts_28_532_generic_management_26',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0027',
    name: 'Meas_ts_28_532_generic_management_27',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0028',
    name: 'Meas_ts_28_532_generic_management_28',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0029',
    name: 'Meas_ts_28_532_generic_management_29',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0030',
    name: 'Meas_ts_28_532_generic_management_30',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0031',
    name: 'Meas_ts_28_532_generic_management_31',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0032',
    name: 'Meas_ts_28_532_generic_management_32',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0033',
    name: 'Meas_ts_28_532_generic_management_33',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0034',
    name: 'Meas_ts_28_532_generic_management_34',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0035',
    name: 'Meas_ts_28_532_generic_management_35',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0036',
    name: 'Meas_ts_28_532_generic_management_36',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0037',
    name: 'Meas_ts_28_532_generic_management_37',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0038',
    name: 'Meas_ts_28_532_generic_management_38',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0039',
    name: 'Meas_ts_28_532_generic_management_39',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0040',
    name: 'Meas_ts_28_532_generic_management_40',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0041',
    name: 'Meas_ts_28_532_generic_management_41',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0042',
    name: 'Meas_ts_28_532_generic_management_42',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0043',
    name: 'Meas_ts_28_532_generic_management_43',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0044',
    name: 'Meas_ts_28_532_generic_management_44',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0045',
    name: 'Meas_ts_28_532_generic_management_45',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0046',
    name: 'Meas_ts_28_532_generic_management_46',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0047',
    name: 'Meas_ts_28_532_generic_management_47',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0048',
    name: 'Meas_ts_28_532_generic_management_48',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0049',
    name: 'Meas_ts_28_532_generic_management_49',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0050',
    name: 'Meas_ts_28_532_generic_management_50',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0051',
    name: 'Meas_ts_28_532_generic_management_51',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0052',
    name: 'Meas_ts_28_532_generic_management_52',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0053',
    name: 'Meas_ts_28_532_generic_management_53',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0054',
    name: 'Meas_ts_28_532_generic_management_54',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0055',
    name: 'Meas_ts_28_532_generic_management_55',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0056',
    name: 'Meas_ts_28_532_generic_management_56',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0057',
    name: 'Meas_ts_28_532_generic_management_57',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0058',
    name: 'Meas_ts_28_532_generic_management_58',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0059',
    name: 'Meas_ts_28_532_generic_management_59',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0060',
    name: 'Meas_ts_28_532_generic_management_60',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0061',
    name: 'Meas_ts_28_532_generic_management_61',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0062',
    name: 'Meas_ts_28_532_generic_management_62',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0063',
    name: 'Meas_ts_28_532_generic_management_63',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0064',
    name: 'Meas_ts_28_532_generic_management_64',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0065',
    name: 'Meas_ts_28_532_generic_management_65',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0066',
    name: 'Meas_ts_28_532_generic_management_66',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0067',
    name: 'Meas_ts_28_532_generic_management_67',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0068',
    name: 'Meas_ts_28_532_generic_management_68',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0069',
    name: 'Meas_ts_28_532_generic_management_69',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0070',
    name: 'Meas_ts_28_532_generic_management_70',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0071',
    name: 'Meas_ts_28_532_generic_management_71',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0072',
    name: 'Meas_ts_28_532_generic_management_72',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0073',
    name: 'Meas_ts_28_532_generic_management_73',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0074',
    name: 'Meas_ts_28_532_generic_management_74',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0075',
    name: 'Meas_ts_28_532_generic_management_75',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0076',
    name: 'Meas_ts_28_532_generic_management_76',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0077',
    name: 'Meas_ts_28_532_generic_management_77',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0078',
    name: 'Meas_ts_28_532_generic_management_78',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0079',
    name: 'Meas_ts_28_532_generic_management_79',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0080',
    name: 'Meas_ts_28_532_generic_management_80',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0081',
    name: 'Meas_ts_28_532_generic_management_81',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0082',
    name: 'Meas_ts_28_532_generic_management_82',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0083',
    name: 'Meas_ts_28_532_generic_management_83',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0084',
    name: 'Meas_ts_28_532_generic_management_84',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0085',
    name: 'Meas_ts_28_532_generic_management_85',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0086',
    name: 'Meas_ts_28_532_generic_management_86',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0087',
    name: 'Meas_ts_28_532_generic_management_87',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0088',
    name: 'Meas_ts_28_532_generic_management_88',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0089',
    name: 'Meas_ts_28_532_generic_management_89',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0090',
    name: 'Meas_ts_28_532_generic_management_90',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0091',
    name: 'Meas_ts_28_532_generic_management_91',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0092',
    name: 'Meas_ts_28_532_generic_management_92',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0093',
    name: 'Meas_ts_28_532_generic_management_93',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0094',
    name: 'Meas_ts_28_532_generic_management_94',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0095',
    name: 'Meas_ts_28_532_generic_management_95',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0096',
    name: 'Meas_ts_28_532_generic_management_96',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0097',
    name: 'Meas_ts_28_532_generic_management_97',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0098',
    name: 'Meas_ts_28_532_generic_management_98',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0099',
    name: 'Meas_ts_28_532_generic_management_99',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0100',
    name: 'Meas_ts_28_532_generic_management_100',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0101',
    name: 'Meas_ts_28_532_generic_management_101',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0102',
    name: 'Meas_ts_28_532_generic_management_102',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0103',
    name: 'Meas_ts_28_532_generic_management_103',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0104',
    name: 'Meas_ts_28_532_generic_management_104',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0105',
    name: 'Meas_ts_28_532_generic_management_105',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0106',
    name: 'Meas_ts_28_532_generic_management_106',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0107',
    name: 'Meas_ts_28_532_generic_management_107',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0108',
    name: 'Meas_ts_28_532_generic_management_108',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0109',
    name: 'Meas_ts_28_532_generic_management_109',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0110',
    name: 'Meas_ts_28_532_generic_management_110',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0111',
    name: 'Meas_ts_28_532_generic_management_111',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0112',
    name: 'Meas_ts_28_532_generic_management_112',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0113',
    name: 'Meas_ts_28_532_generic_management_113',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0114',
    name: 'Meas_ts_28_532_generic_management_114',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0115',
    name: 'Meas_ts_28_532_generic_management_115',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0116',
    name: 'Meas_ts_28_532_generic_management_116',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0117',
    name: 'Meas_ts_28_532_generic_management_117',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0118',
    name: 'Meas_ts_28_532_generic_management_118',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0119',
    name: 'Meas_ts_28_532_generic_management_119',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0120',
    name: 'Meas_ts_28_532_generic_management_120',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0121',
    name: 'Meas_ts_28_532_generic_management_121',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0122',
    name: 'Meas_ts_28_532_generic_management_122',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0123',
    name: 'Meas_ts_28_532_generic_management_123',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0124',
    name: 'Meas_ts_28_532_generic_management_124',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0125',
    name: 'Meas_ts_28_532_generic_management_125',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0126',
    name: 'Meas_ts_28_532_generic_management_126',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0127',
    name: 'Meas_ts_28_532_generic_management_127',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0128',
    name: 'Meas_ts_28_532_generic_management_128',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0129',
    name: 'Meas_ts_28_532_generic_management_129',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0130',
    name: 'Meas_ts_28_532_generic_management_130',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0131',
    name: 'Meas_ts_28_532_generic_management_131',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0132',
    name: 'Meas_ts_28_532_generic_management_132',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0133',
    name: 'Meas_ts_28_532_generic_management_133',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0134',
    name: 'Meas_ts_28_532_generic_management_134',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0135',
    name: 'Meas_ts_28_532_generic_management_135',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0136',
    name: 'Meas_ts_28_532_generic_management_136',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0137',
    name: 'Meas_ts_28_532_generic_management_137',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0138',
    name: 'Meas_ts_28_532_generic_management_138',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0139',
    name: 'Meas_ts_28_532_generic_management_139',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0140',
    name: 'Meas_ts_28_532_generic_management_140',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0141',
    name: 'Meas_ts_28_532_generic_management_141',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0142',
    name: 'Meas_ts_28_532_generic_management_142',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0143',
    name: 'Meas_ts_28_532_generic_management_143',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0144',
    name: 'Meas_ts_28_532_generic_management_144',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0145',
    name: 'Meas_ts_28_532_generic_management_145',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0146',
    name: 'Meas_ts_28_532_generic_management_146',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0147',
    name: 'Meas_ts_28_532_generic_management_147',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0148',
    name: 'Meas_ts_28_532_generic_management_148',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0149',
    name: 'Meas_ts_28_532_generic_management_149',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0150',
    name: 'Meas_ts_28_532_generic_management_150',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0151',
    name: 'Meas_ts_28_532_generic_management_151',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0152',
    name: 'Meas_ts_28_532_generic_management_152',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0153',
    name: 'Meas_ts_28_532_generic_management_153',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0154',
    name: 'Meas_ts_28_532_generic_management_154',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0155',
    name: 'Meas_ts_28_532_generic_management_155',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0156',
    name: 'Meas_ts_28_532_generic_management_156',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0157',
    name: 'Meas_ts_28_532_generic_management_157',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0158',
    name: 'Meas_ts_28_532_generic_management_158',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0159',
    name: 'Meas_ts_28_532_generic_management_159',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0160',
    name: 'Meas_ts_28_532_generic_management_160',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0161',
    name: 'Meas_ts_28_532_generic_management_161',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0162',
    name: 'Meas_ts_28_532_generic_management_162',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0163',
    name: 'Meas_ts_28_532_generic_management_163',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0164',
    name: 'Meas_ts_28_532_generic_management_164',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0165',
    name: 'Meas_ts_28_532_generic_management_165',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0166',
    name: 'Meas_ts_28_532_generic_management_166',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0167',
    name: 'Meas_ts_28_532_generic_management_167',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0168',
    name: 'Meas_ts_28_532_generic_management_168',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0169',
    name: 'Meas_ts_28_532_generic_management_169',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0170',
    name: 'Meas_ts_28_532_generic_management_170',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0171',
    name: 'Meas_ts_28_532_generic_management_171',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0172',
    name: 'Meas_ts_28_532_generic_management_172',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0173',
    name: 'Meas_ts_28_532_generic_management_173',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0174',
    name: 'Meas_ts_28_532_generic_management_174',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0175',
    name: 'Meas_ts_28_532_generic_management_175',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0176',
    name: 'Meas_ts_28_532_generic_management_176',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0177',
    name: 'Meas_ts_28_532_generic_management_177',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0178',
    name: 'Meas_ts_28_532_generic_management_178',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0179',
    name: 'Meas_ts_28_532_generic_management_179',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0180',
    name: 'Meas_ts_28_532_generic_management_180',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0181',
    name: 'Meas_ts_28_532_generic_management_181',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0182',
    name: 'Meas_ts_28_532_generic_management_182',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0183',
    name: 'Meas_ts_28_532_generic_management_183',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0184',
    name: 'Meas_ts_28_532_generic_management_184',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0185',
    name: 'Meas_ts_28_532_generic_management_185',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0186',
    name: 'Meas_ts_28_532_generic_management_186',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0187',
    name: 'Meas_ts_28_532_generic_management_187',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0188',
    name: 'Meas_ts_28_532_generic_management_188',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0189',
    name: 'Meas_ts_28_532_generic_management_189',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0190',
    name: 'Meas_ts_28_532_generic_management_190',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0191',
    name: 'Meas_ts_28_532_generic_management_191',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0192',
    name: 'Meas_ts_28_532_generic_management_192',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0193',
    name: 'Meas_ts_28_532_generic_management_193',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0194',
    name: 'Meas_ts_28_532_generic_management_194',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0195',
    name: 'Meas_ts_28_532_generic_management_195',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0196',
    name: 'Meas_ts_28_532_generic_management_196',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0197',
    name: 'Meas_ts_28_532_generic_management_197',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0198',
    name: 'Meas_ts_28_532_generic_management_198',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0199',
    name: 'Meas_ts_28_532_generic_management_199',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0200',
    name: 'Meas_ts_28_532_generic_management_200',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0201',
    name: 'Meas_ts_28_532_generic_management_201',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0202',
    name: 'Meas_ts_28_532_generic_management_202',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0203',
    name: 'Meas_ts_28_532_generic_management_203',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0204',
    name: 'Meas_ts_28_532_generic_management_204',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0205',
    name: 'Meas_ts_28_532_generic_management_205',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0206',
    name: 'Meas_ts_28_532_generic_management_206',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0207',
    name: 'Meas_ts_28_532_generic_management_207',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0208',
    name: 'Meas_ts_28_532_generic_management_208',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0209',
    name: 'Meas_ts_28_532_generic_management_209',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0210',
    name: 'Meas_ts_28_532_generic_management_210',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0211',
    name: 'Meas_ts_28_532_generic_management_211',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0212',
    name: 'Meas_ts_28_532_generic_management_212',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0213',
    name: 'Meas_ts_28_532_generic_management_213',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0214',
    name: 'Meas_ts_28_532_generic_management_214',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0215',
    name: 'Meas_ts_28_532_generic_management_215',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0216',
    name: 'Meas_ts_28_532_generic_management_216',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0217',
    name: 'Meas_ts_28_532_generic_management_217',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0218',
    name: 'Meas_ts_28_532_generic_management_218',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0219',
    name: 'Meas_ts_28_532_generic_management_219',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0220',
    name: 'Meas_ts_28_532_generic_management_220',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0221',
    name: 'Meas_ts_28_532_generic_management_221',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0222',
    name: 'Meas_ts_28_532_generic_management_222',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0223',
    name: 'Meas_ts_28_532_generic_management_223',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0224',
    name: 'Meas_ts_28_532_generic_management_224',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0225',
    name: 'Meas_ts_28_532_generic_management_225',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0226',
    name: 'Meas_ts_28_532_generic_management_226',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0227',
    name: 'Meas_ts_28_532_generic_management_227',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0228',
    name: 'Meas_ts_28_532_generic_management_228',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0229',
    name: 'Meas_ts_28_532_generic_management_229',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0230',
    name: 'Meas_ts_28_532_generic_management_230',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0231',
    name: 'Meas_ts_28_532_generic_management_231',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0232',
    name: 'Meas_ts_28_532_generic_management_232',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0233',
    name: 'Meas_ts_28_532_generic_management_233',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0234',
    name: 'Meas_ts_28_532_generic_management_234',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0235',
    name: 'Meas_ts_28_532_generic_management_235',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0236',
    name: 'Meas_ts_28_532_generic_management_236',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0237',
    name: 'Meas_ts_28_532_generic_management_237',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0238',
    name: 'Meas_ts_28_532_generic_management_238',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0239',
    name: 'Meas_ts_28_532_generic_management_239',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0240',
    name: 'Meas_ts_28_532_generic_management_240',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0241',
    name: 'Meas_ts_28_532_generic_management_241',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0242',
    name: 'Meas_ts_28_532_generic_management_242',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0243',
    name: 'Meas_ts_28_532_generic_management_243',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0244',
    name: 'Meas_ts_28_532_generic_management_244',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0245',
    name: 'Meas_ts_28_532_generic_management_245',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0246',
    name: 'Meas_ts_28_532_generic_management_246',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0247',
    name: 'Meas_ts_28_532_generic_management_247',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0248',
    name: 'Meas_ts_28_532_generic_management_248',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0249',
    name: 'Meas_ts_28_532_generic_management_249',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0250',
    name: 'Meas_ts_28_532_generic_management_250',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0251',
    name: 'Meas_ts_28_532_generic_management_251',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0252',
    name: 'Meas_ts_28_532_generic_management_252',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0253',
    name: 'Meas_ts_28_532_generic_management_253',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0254',
    name: 'Meas_ts_28_532_generic_management_254',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0255',
    name: 'Meas_ts_28_532_generic_management_255',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0256',
    name: 'Meas_ts_28_532_generic_management_256',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0257',
    name: 'Meas_ts_28_532_generic_management_257',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0258',
    name: 'Meas_ts_28_532_generic_management_258',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0259',
    name: 'Meas_ts_28_532_generic_management_259',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_532_GENERIC_MANAGEMENT_0260',
    name: 'Meas_ts_28_532_generic_management_260',
    standardReference: 'TS-28-532-GENERIC-MANAGEMENT',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for Generic Management Services for 5G Core and Cloud RAN (3GPP TS 28.532). Critical for cellular slicing SLA governance.'
  },
];

export class Ts28532GenericManagementProcessor {
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
