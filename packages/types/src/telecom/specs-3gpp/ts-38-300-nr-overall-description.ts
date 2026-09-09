/**
 * GeoNet Sentinel 3GPP Specification Model
 * NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300)
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

export const TS_38_300_NR_OVERALL_DESCRIPTION_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0001',
    name: 'Meas_ts_38_300_nr_overall_description_1',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0002',
    name: 'Meas_ts_38_300_nr_overall_description_2',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0003',
    name: 'Meas_ts_38_300_nr_overall_description_3',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0004',
    name: 'Meas_ts_38_300_nr_overall_description_4',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0005',
    name: 'Meas_ts_38_300_nr_overall_description_5',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0006',
    name: 'Meas_ts_38_300_nr_overall_description_6',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0007',
    name: 'Meas_ts_38_300_nr_overall_description_7',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0008',
    name: 'Meas_ts_38_300_nr_overall_description_8',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0009',
    name: 'Meas_ts_38_300_nr_overall_description_9',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0010',
    name: 'Meas_ts_38_300_nr_overall_description_10',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0011',
    name: 'Meas_ts_38_300_nr_overall_description_11',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0012',
    name: 'Meas_ts_38_300_nr_overall_description_12',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0013',
    name: 'Meas_ts_38_300_nr_overall_description_13',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0014',
    name: 'Meas_ts_38_300_nr_overall_description_14',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0015',
    name: 'Meas_ts_38_300_nr_overall_description_15',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0016',
    name: 'Meas_ts_38_300_nr_overall_description_16',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0017',
    name: 'Meas_ts_38_300_nr_overall_description_17',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0018',
    name: 'Meas_ts_38_300_nr_overall_description_18',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0019',
    name: 'Meas_ts_38_300_nr_overall_description_19',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0020',
    name: 'Meas_ts_38_300_nr_overall_description_20',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0021',
    name: 'Meas_ts_38_300_nr_overall_description_21',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0022',
    name: 'Meas_ts_38_300_nr_overall_description_22',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0023',
    name: 'Meas_ts_38_300_nr_overall_description_23',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0024',
    name: 'Meas_ts_38_300_nr_overall_description_24',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0025',
    name: 'Meas_ts_38_300_nr_overall_description_25',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0026',
    name: 'Meas_ts_38_300_nr_overall_description_26',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0027',
    name: 'Meas_ts_38_300_nr_overall_description_27',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0028',
    name: 'Meas_ts_38_300_nr_overall_description_28',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0029',
    name: 'Meas_ts_38_300_nr_overall_description_29',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0030',
    name: 'Meas_ts_38_300_nr_overall_description_30',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0031',
    name: 'Meas_ts_38_300_nr_overall_description_31',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0032',
    name: 'Meas_ts_38_300_nr_overall_description_32',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0033',
    name: 'Meas_ts_38_300_nr_overall_description_33',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0034',
    name: 'Meas_ts_38_300_nr_overall_description_34',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0035',
    name: 'Meas_ts_38_300_nr_overall_description_35',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0036',
    name: 'Meas_ts_38_300_nr_overall_description_36',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0037',
    name: 'Meas_ts_38_300_nr_overall_description_37',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0038',
    name: 'Meas_ts_38_300_nr_overall_description_38',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0039',
    name: 'Meas_ts_38_300_nr_overall_description_39',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0040',
    name: 'Meas_ts_38_300_nr_overall_description_40',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0041',
    name: 'Meas_ts_38_300_nr_overall_description_41',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0042',
    name: 'Meas_ts_38_300_nr_overall_description_42',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0043',
    name: 'Meas_ts_38_300_nr_overall_description_43',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0044',
    name: 'Meas_ts_38_300_nr_overall_description_44',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0045',
    name: 'Meas_ts_38_300_nr_overall_description_45',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0046',
    name: 'Meas_ts_38_300_nr_overall_description_46',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0047',
    name: 'Meas_ts_38_300_nr_overall_description_47',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0048',
    name: 'Meas_ts_38_300_nr_overall_description_48',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0049',
    name: 'Meas_ts_38_300_nr_overall_description_49',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0050',
    name: 'Meas_ts_38_300_nr_overall_description_50',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0051',
    name: 'Meas_ts_38_300_nr_overall_description_51',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0052',
    name: 'Meas_ts_38_300_nr_overall_description_52',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0053',
    name: 'Meas_ts_38_300_nr_overall_description_53',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0054',
    name: 'Meas_ts_38_300_nr_overall_description_54',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0055',
    name: 'Meas_ts_38_300_nr_overall_description_55',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0056',
    name: 'Meas_ts_38_300_nr_overall_description_56',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0057',
    name: 'Meas_ts_38_300_nr_overall_description_57',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0058',
    name: 'Meas_ts_38_300_nr_overall_description_58',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0059',
    name: 'Meas_ts_38_300_nr_overall_description_59',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0060',
    name: 'Meas_ts_38_300_nr_overall_description_60',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0061',
    name: 'Meas_ts_38_300_nr_overall_description_61',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0062',
    name: 'Meas_ts_38_300_nr_overall_description_62',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0063',
    name: 'Meas_ts_38_300_nr_overall_description_63',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0064',
    name: 'Meas_ts_38_300_nr_overall_description_64',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0065',
    name: 'Meas_ts_38_300_nr_overall_description_65',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0066',
    name: 'Meas_ts_38_300_nr_overall_description_66',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0067',
    name: 'Meas_ts_38_300_nr_overall_description_67',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0068',
    name: 'Meas_ts_38_300_nr_overall_description_68',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0069',
    name: 'Meas_ts_38_300_nr_overall_description_69',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0070',
    name: 'Meas_ts_38_300_nr_overall_description_70',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0071',
    name: 'Meas_ts_38_300_nr_overall_description_71',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0072',
    name: 'Meas_ts_38_300_nr_overall_description_72',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0073',
    name: 'Meas_ts_38_300_nr_overall_description_73',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0074',
    name: 'Meas_ts_38_300_nr_overall_description_74',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0075',
    name: 'Meas_ts_38_300_nr_overall_description_75',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0076',
    name: 'Meas_ts_38_300_nr_overall_description_76',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0077',
    name: 'Meas_ts_38_300_nr_overall_description_77',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0078',
    name: 'Meas_ts_38_300_nr_overall_description_78',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0079',
    name: 'Meas_ts_38_300_nr_overall_description_79',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0080',
    name: 'Meas_ts_38_300_nr_overall_description_80',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0081',
    name: 'Meas_ts_38_300_nr_overall_description_81',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0082',
    name: 'Meas_ts_38_300_nr_overall_description_82',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0083',
    name: 'Meas_ts_38_300_nr_overall_description_83',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0084',
    name: 'Meas_ts_38_300_nr_overall_description_84',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0085',
    name: 'Meas_ts_38_300_nr_overall_description_85',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0086',
    name: 'Meas_ts_38_300_nr_overall_description_86',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0087',
    name: 'Meas_ts_38_300_nr_overall_description_87',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0088',
    name: 'Meas_ts_38_300_nr_overall_description_88',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0089',
    name: 'Meas_ts_38_300_nr_overall_description_89',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0090',
    name: 'Meas_ts_38_300_nr_overall_description_90',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0091',
    name: 'Meas_ts_38_300_nr_overall_description_91',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0092',
    name: 'Meas_ts_38_300_nr_overall_description_92',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0093',
    name: 'Meas_ts_38_300_nr_overall_description_93',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0094',
    name: 'Meas_ts_38_300_nr_overall_description_94',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0095',
    name: 'Meas_ts_38_300_nr_overall_description_95',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0096',
    name: 'Meas_ts_38_300_nr_overall_description_96',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0097',
    name: 'Meas_ts_38_300_nr_overall_description_97',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0098',
    name: 'Meas_ts_38_300_nr_overall_description_98',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0099',
    name: 'Meas_ts_38_300_nr_overall_description_99',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0100',
    name: 'Meas_ts_38_300_nr_overall_description_100',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0101',
    name: 'Meas_ts_38_300_nr_overall_description_101',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0102',
    name: 'Meas_ts_38_300_nr_overall_description_102',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0103',
    name: 'Meas_ts_38_300_nr_overall_description_103',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0104',
    name: 'Meas_ts_38_300_nr_overall_description_104',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0105',
    name: 'Meas_ts_38_300_nr_overall_description_105',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0106',
    name: 'Meas_ts_38_300_nr_overall_description_106',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0107',
    name: 'Meas_ts_38_300_nr_overall_description_107',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0108',
    name: 'Meas_ts_38_300_nr_overall_description_108',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0109',
    name: 'Meas_ts_38_300_nr_overall_description_109',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0110',
    name: 'Meas_ts_38_300_nr_overall_description_110',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0111',
    name: 'Meas_ts_38_300_nr_overall_description_111',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0112',
    name: 'Meas_ts_38_300_nr_overall_description_112',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0113',
    name: 'Meas_ts_38_300_nr_overall_description_113',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0114',
    name: 'Meas_ts_38_300_nr_overall_description_114',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0115',
    name: 'Meas_ts_38_300_nr_overall_description_115',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0116',
    name: 'Meas_ts_38_300_nr_overall_description_116',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0117',
    name: 'Meas_ts_38_300_nr_overall_description_117',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0118',
    name: 'Meas_ts_38_300_nr_overall_description_118',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0119',
    name: 'Meas_ts_38_300_nr_overall_description_119',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0120',
    name: 'Meas_ts_38_300_nr_overall_description_120',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0121',
    name: 'Meas_ts_38_300_nr_overall_description_121',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0122',
    name: 'Meas_ts_38_300_nr_overall_description_122',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0123',
    name: 'Meas_ts_38_300_nr_overall_description_123',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0124',
    name: 'Meas_ts_38_300_nr_overall_description_124',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0125',
    name: 'Meas_ts_38_300_nr_overall_description_125',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0126',
    name: 'Meas_ts_38_300_nr_overall_description_126',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0127',
    name: 'Meas_ts_38_300_nr_overall_description_127',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0128',
    name: 'Meas_ts_38_300_nr_overall_description_128',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0129',
    name: 'Meas_ts_38_300_nr_overall_description_129',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0130',
    name: 'Meas_ts_38_300_nr_overall_description_130',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0131',
    name: 'Meas_ts_38_300_nr_overall_description_131',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0132',
    name: 'Meas_ts_38_300_nr_overall_description_132',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0133',
    name: 'Meas_ts_38_300_nr_overall_description_133',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0134',
    name: 'Meas_ts_38_300_nr_overall_description_134',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0135',
    name: 'Meas_ts_38_300_nr_overall_description_135',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0136',
    name: 'Meas_ts_38_300_nr_overall_description_136',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0137',
    name: 'Meas_ts_38_300_nr_overall_description_137',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0138',
    name: 'Meas_ts_38_300_nr_overall_description_138',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0139',
    name: 'Meas_ts_38_300_nr_overall_description_139',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0140',
    name: 'Meas_ts_38_300_nr_overall_description_140',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0141',
    name: 'Meas_ts_38_300_nr_overall_description_141',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0142',
    name: 'Meas_ts_38_300_nr_overall_description_142',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0143',
    name: 'Meas_ts_38_300_nr_overall_description_143',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0144',
    name: 'Meas_ts_38_300_nr_overall_description_144',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0145',
    name: 'Meas_ts_38_300_nr_overall_description_145',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0146',
    name: 'Meas_ts_38_300_nr_overall_description_146',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0147',
    name: 'Meas_ts_38_300_nr_overall_description_147',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0148',
    name: 'Meas_ts_38_300_nr_overall_description_148',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0149',
    name: 'Meas_ts_38_300_nr_overall_description_149',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0150',
    name: 'Meas_ts_38_300_nr_overall_description_150',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0151',
    name: 'Meas_ts_38_300_nr_overall_description_151',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0152',
    name: 'Meas_ts_38_300_nr_overall_description_152',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0153',
    name: 'Meas_ts_38_300_nr_overall_description_153',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0154',
    name: 'Meas_ts_38_300_nr_overall_description_154',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0155',
    name: 'Meas_ts_38_300_nr_overall_description_155',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0156',
    name: 'Meas_ts_38_300_nr_overall_description_156',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0157',
    name: 'Meas_ts_38_300_nr_overall_description_157',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0158',
    name: 'Meas_ts_38_300_nr_overall_description_158',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0159',
    name: 'Meas_ts_38_300_nr_overall_description_159',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0160',
    name: 'Meas_ts_38_300_nr_overall_description_160',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0161',
    name: 'Meas_ts_38_300_nr_overall_description_161',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0162',
    name: 'Meas_ts_38_300_nr_overall_description_162',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0163',
    name: 'Meas_ts_38_300_nr_overall_description_163',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0164',
    name: 'Meas_ts_38_300_nr_overall_description_164',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0165',
    name: 'Meas_ts_38_300_nr_overall_description_165',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0166',
    name: 'Meas_ts_38_300_nr_overall_description_166',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0167',
    name: 'Meas_ts_38_300_nr_overall_description_167',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0168',
    name: 'Meas_ts_38_300_nr_overall_description_168',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0169',
    name: 'Meas_ts_38_300_nr_overall_description_169',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0170',
    name: 'Meas_ts_38_300_nr_overall_description_170',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0171',
    name: 'Meas_ts_38_300_nr_overall_description_171',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0172',
    name: 'Meas_ts_38_300_nr_overall_description_172',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0173',
    name: 'Meas_ts_38_300_nr_overall_description_173',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0174',
    name: 'Meas_ts_38_300_nr_overall_description_174',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0175',
    name: 'Meas_ts_38_300_nr_overall_description_175',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0176',
    name: 'Meas_ts_38_300_nr_overall_description_176',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0177',
    name: 'Meas_ts_38_300_nr_overall_description_177',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0178',
    name: 'Meas_ts_38_300_nr_overall_description_178',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0179',
    name: 'Meas_ts_38_300_nr_overall_description_179',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0180',
    name: 'Meas_ts_38_300_nr_overall_description_180',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0181',
    name: 'Meas_ts_38_300_nr_overall_description_181',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0182',
    name: 'Meas_ts_38_300_nr_overall_description_182',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0183',
    name: 'Meas_ts_38_300_nr_overall_description_183',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0184',
    name: 'Meas_ts_38_300_nr_overall_description_184',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0185',
    name: 'Meas_ts_38_300_nr_overall_description_185',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0186',
    name: 'Meas_ts_38_300_nr_overall_description_186',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0187',
    name: 'Meas_ts_38_300_nr_overall_description_187',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0188',
    name: 'Meas_ts_38_300_nr_overall_description_188',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0189',
    name: 'Meas_ts_38_300_nr_overall_description_189',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0190',
    name: 'Meas_ts_38_300_nr_overall_description_190',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0191',
    name: 'Meas_ts_38_300_nr_overall_description_191',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0192',
    name: 'Meas_ts_38_300_nr_overall_description_192',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0193',
    name: 'Meas_ts_38_300_nr_overall_description_193',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0194',
    name: 'Meas_ts_38_300_nr_overall_description_194',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0195',
    name: 'Meas_ts_38_300_nr_overall_description_195',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0196',
    name: 'Meas_ts_38_300_nr_overall_description_196',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0197',
    name: 'Meas_ts_38_300_nr_overall_description_197',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0198',
    name: 'Meas_ts_38_300_nr_overall_description_198',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0199',
    name: 'Meas_ts_38_300_nr_overall_description_199',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0200',
    name: 'Meas_ts_38_300_nr_overall_description_200',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0201',
    name: 'Meas_ts_38_300_nr_overall_description_201',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0202',
    name: 'Meas_ts_38_300_nr_overall_description_202',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0203',
    name: 'Meas_ts_38_300_nr_overall_description_203',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0204',
    name: 'Meas_ts_38_300_nr_overall_description_204',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0205',
    name: 'Meas_ts_38_300_nr_overall_description_205',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0206',
    name: 'Meas_ts_38_300_nr_overall_description_206',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0207',
    name: 'Meas_ts_38_300_nr_overall_description_207',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0208',
    name: 'Meas_ts_38_300_nr_overall_description_208',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0209',
    name: 'Meas_ts_38_300_nr_overall_description_209',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0210',
    name: 'Meas_ts_38_300_nr_overall_description_210',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0211',
    name: 'Meas_ts_38_300_nr_overall_description_211',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0212',
    name: 'Meas_ts_38_300_nr_overall_description_212',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0213',
    name: 'Meas_ts_38_300_nr_overall_description_213',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0214',
    name: 'Meas_ts_38_300_nr_overall_description_214',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0215',
    name: 'Meas_ts_38_300_nr_overall_description_215',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0216',
    name: 'Meas_ts_38_300_nr_overall_description_216',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0217',
    name: 'Meas_ts_38_300_nr_overall_description_217',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0218',
    name: 'Meas_ts_38_300_nr_overall_description_218',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0219',
    name: 'Meas_ts_38_300_nr_overall_description_219',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0220',
    name: 'Meas_ts_38_300_nr_overall_description_220',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0221',
    name: 'Meas_ts_38_300_nr_overall_description_221',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0222',
    name: 'Meas_ts_38_300_nr_overall_description_222',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0223',
    name: 'Meas_ts_38_300_nr_overall_description_223',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0224',
    name: 'Meas_ts_38_300_nr_overall_description_224',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0225',
    name: 'Meas_ts_38_300_nr_overall_description_225',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0226',
    name: 'Meas_ts_38_300_nr_overall_description_226',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0227',
    name: 'Meas_ts_38_300_nr_overall_description_227',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0228',
    name: 'Meas_ts_38_300_nr_overall_description_228',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0229',
    name: 'Meas_ts_38_300_nr_overall_description_229',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0230',
    name: 'Meas_ts_38_300_nr_overall_description_230',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0231',
    name: 'Meas_ts_38_300_nr_overall_description_231',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0232',
    name: 'Meas_ts_38_300_nr_overall_description_232',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0233',
    name: 'Meas_ts_38_300_nr_overall_description_233',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0234',
    name: 'Meas_ts_38_300_nr_overall_description_234',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0235',
    name: 'Meas_ts_38_300_nr_overall_description_235',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0236',
    name: 'Meas_ts_38_300_nr_overall_description_236',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0237',
    name: 'Meas_ts_38_300_nr_overall_description_237',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0238',
    name: 'Meas_ts_38_300_nr_overall_description_238',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0239',
    name: 'Meas_ts_38_300_nr_overall_description_239',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0240',
    name: 'Meas_ts_38_300_nr_overall_description_240',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0241',
    name: 'Meas_ts_38_300_nr_overall_description_241',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0242',
    name: 'Meas_ts_38_300_nr_overall_description_242',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0243',
    name: 'Meas_ts_38_300_nr_overall_description_243',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0244',
    name: 'Meas_ts_38_300_nr_overall_description_244',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0245',
    name: 'Meas_ts_38_300_nr_overall_description_245',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0246',
    name: 'Meas_ts_38_300_nr_overall_description_246',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0247',
    name: 'Meas_ts_38_300_nr_overall_description_247',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0248',
    name: 'Meas_ts_38_300_nr_overall_description_248',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0249',
    name: 'Meas_ts_38_300_nr_overall_description_249',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0250',
    name: 'Meas_ts_38_300_nr_overall_description_250',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0251',
    name: 'Meas_ts_38_300_nr_overall_description_251',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0252',
    name: 'Meas_ts_38_300_nr_overall_description_252',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0253',
    name: 'Meas_ts_38_300_nr_overall_description_253',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0254',
    name: 'Meas_ts_38_300_nr_overall_description_254',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0255',
    name: 'Meas_ts_38_300_nr_overall_description_255',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0256',
    name: 'Meas_ts_38_300_nr_overall_description_256',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0257',
    name: 'Meas_ts_38_300_nr_overall_description_257',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0258',
    name: 'Meas_ts_38_300_nr_overall_description_258',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0259',
    name: 'Meas_ts_38_300_nr_overall_description_259',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_38_300_NR_OVERALL_DESCRIPTION_0260',
    name: 'Meas_ts_38_300_nr_overall_description_260',
    standardReference: 'TS-38-300-NR-OVERALL-DESCRIPTION',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for NR and NG-RAN Overall Description Stage 2 (3GPP TS 38.300). Critical for cellular slicing SLA governance.'
  },
];

export class Ts38300NrOverallDescriptionProcessor {
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
