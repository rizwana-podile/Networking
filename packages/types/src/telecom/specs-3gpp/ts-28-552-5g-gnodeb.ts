/**
 * GeoNet Sentinel 3GPP Specification Model
 * 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552)
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

export const TS_28_552_5G_GNODEB_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0001',
    name: 'Meas_ts_28_552_5g_gnodeb_1',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0002',
    name: 'Meas_ts_28_552_5g_gnodeb_2',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0003',
    name: 'Meas_ts_28_552_5g_gnodeb_3',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0004',
    name: 'Meas_ts_28_552_5g_gnodeb_4',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0005',
    name: 'Meas_ts_28_552_5g_gnodeb_5',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0006',
    name: 'Meas_ts_28_552_5g_gnodeb_6',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0007',
    name: 'Meas_ts_28_552_5g_gnodeb_7',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0008',
    name: 'Meas_ts_28_552_5g_gnodeb_8',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0009',
    name: 'Meas_ts_28_552_5g_gnodeb_9',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0010',
    name: 'Meas_ts_28_552_5g_gnodeb_10',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0011',
    name: 'Meas_ts_28_552_5g_gnodeb_11',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0012',
    name: 'Meas_ts_28_552_5g_gnodeb_12',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0013',
    name: 'Meas_ts_28_552_5g_gnodeb_13',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0014',
    name: 'Meas_ts_28_552_5g_gnodeb_14',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0015',
    name: 'Meas_ts_28_552_5g_gnodeb_15',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0016',
    name: 'Meas_ts_28_552_5g_gnodeb_16',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0017',
    name: 'Meas_ts_28_552_5g_gnodeb_17',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0018',
    name: 'Meas_ts_28_552_5g_gnodeb_18',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0019',
    name: 'Meas_ts_28_552_5g_gnodeb_19',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0020',
    name: 'Meas_ts_28_552_5g_gnodeb_20',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0021',
    name: 'Meas_ts_28_552_5g_gnodeb_21',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0022',
    name: 'Meas_ts_28_552_5g_gnodeb_22',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0023',
    name: 'Meas_ts_28_552_5g_gnodeb_23',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0024',
    name: 'Meas_ts_28_552_5g_gnodeb_24',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0025',
    name: 'Meas_ts_28_552_5g_gnodeb_25',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0026',
    name: 'Meas_ts_28_552_5g_gnodeb_26',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0027',
    name: 'Meas_ts_28_552_5g_gnodeb_27',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0028',
    name: 'Meas_ts_28_552_5g_gnodeb_28',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0029',
    name: 'Meas_ts_28_552_5g_gnodeb_29',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0030',
    name: 'Meas_ts_28_552_5g_gnodeb_30',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0031',
    name: 'Meas_ts_28_552_5g_gnodeb_31',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0032',
    name: 'Meas_ts_28_552_5g_gnodeb_32',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0033',
    name: 'Meas_ts_28_552_5g_gnodeb_33',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0034',
    name: 'Meas_ts_28_552_5g_gnodeb_34',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0035',
    name: 'Meas_ts_28_552_5g_gnodeb_35',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0036',
    name: 'Meas_ts_28_552_5g_gnodeb_36',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0037',
    name: 'Meas_ts_28_552_5g_gnodeb_37',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0038',
    name: 'Meas_ts_28_552_5g_gnodeb_38',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0039',
    name: 'Meas_ts_28_552_5g_gnodeb_39',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0040',
    name: 'Meas_ts_28_552_5g_gnodeb_40',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0041',
    name: 'Meas_ts_28_552_5g_gnodeb_41',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0042',
    name: 'Meas_ts_28_552_5g_gnodeb_42',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0043',
    name: 'Meas_ts_28_552_5g_gnodeb_43',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0044',
    name: 'Meas_ts_28_552_5g_gnodeb_44',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0045',
    name: 'Meas_ts_28_552_5g_gnodeb_45',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0046',
    name: 'Meas_ts_28_552_5g_gnodeb_46',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0047',
    name: 'Meas_ts_28_552_5g_gnodeb_47',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0048',
    name: 'Meas_ts_28_552_5g_gnodeb_48',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0049',
    name: 'Meas_ts_28_552_5g_gnodeb_49',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0050',
    name: 'Meas_ts_28_552_5g_gnodeb_50',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0051',
    name: 'Meas_ts_28_552_5g_gnodeb_51',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0052',
    name: 'Meas_ts_28_552_5g_gnodeb_52',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0053',
    name: 'Meas_ts_28_552_5g_gnodeb_53',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0054',
    name: 'Meas_ts_28_552_5g_gnodeb_54',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0055',
    name: 'Meas_ts_28_552_5g_gnodeb_55',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0056',
    name: 'Meas_ts_28_552_5g_gnodeb_56',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0057',
    name: 'Meas_ts_28_552_5g_gnodeb_57',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0058',
    name: 'Meas_ts_28_552_5g_gnodeb_58',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0059',
    name: 'Meas_ts_28_552_5g_gnodeb_59',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0060',
    name: 'Meas_ts_28_552_5g_gnodeb_60',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0061',
    name: 'Meas_ts_28_552_5g_gnodeb_61',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0062',
    name: 'Meas_ts_28_552_5g_gnodeb_62',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0063',
    name: 'Meas_ts_28_552_5g_gnodeb_63',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0064',
    name: 'Meas_ts_28_552_5g_gnodeb_64',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0065',
    name: 'Meas_ts_28_552_5g_gnodeb_65',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0066',
    name: 'Meas_ts_28_552_5g_gnodeb_66',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0067',
    name: 'Meas_ts_28_552_5g_gnodeb_67',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0068',
    name: 'Meas_ts_28_552_5g_gnodeb_68',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0069',
    name: 'Meas_ts_28_552_5g_gnodeb_69',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0070',
    name: 'Meas_ts_28_552_5g_gnodeb_70',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0071',
    name: 'Meas_ts_28_552_5g_gnodeb_71',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0072',
    name: 'Meas_ts_28_552_5g_gnodeb_72',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0073',
    name: 'Meas_ts_28_552_5g_gnodeb_73',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0074',
    name: 'Meas_ts_28_552_5g_gnodeb_74',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0075',
    name: 'Meas_ts_28_552_5g_gnodeb_75',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0076',
    name: 'Meas_ts_28_552_5g_gnodeb_76',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0077',
    name: 'Meas_ts_28_552_5g_gnodeb_77',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0078',
    name: 'Meas_ts_28_552_5g_gnodeb_78',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0079',
    name: 'Meas_ts_28_552_5g_gnodeb_79',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0080',
    name: 'Meas_ts_28_552_5g_gnodeb_80',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0081',
    name: 'Meas_ts_28_552_5g_gnodeb_81',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0082',
    name: 'Meas_ts_28_552_5g_gnodeb_82',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0083',
    name: 'Meas_ts_28_552_5g_gnodeb_83',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0084',
    name: 'Meas_ts_28_552_5g_gnodeb_84',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0085',
    name: 'Meas_ts_28_552_5g_gnodeb_85',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0086',
    name: 'Meas_ts_28_552_5g_gnodeb_86',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0087',
    name: 'Meas_ts_28_552_5g_gnodeb_87',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0088',
    name: 'Meas_ts_28_552_5g_gnodeb_88',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0089',
    name: 'Meas_ts_28_552_5g_gnodeb_89',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0090',
    name: 'Meas_ts_28_552_5g_gnodeb_90',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0091',
    name: 'Meas_ts_28_552_5g_gnodeb_91',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0092',
    name: 'Meas_ts_28_552_5g_gnodeb_92',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0093',
    name: 'Meas_ts_28_552_5g_gnodeb_93',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0094',
    name: 'Meas_ts_28_552_5g_gnodeb_94',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0095',
    name: 'Meas_ts_28_552_5g_gnodeb_95',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0096',
    name: 'Meas_ts_28_552_5g_gnodeb_96',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0097',
    name: 'Meas_ts_28_552_5g_gnodeb_97',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0098',
    name: 'Meas_ts_28_552_5g_gnodeb_98',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0099',
    name: 'Meas_ts_28_552_5g_gnodeb_99',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0100',
    name: 'Meas_ts_28_552_5g_gnodeb_100',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0101',
    name: 'Meas_ts_28_552_5g_gnodeb_101',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0102',
    name: 'Meas_ts_28_552_5g_gnodeb_102',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0103',
    name: 'Meas_ts_28_552_5g_gnodeb_103',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0104',
    name: 'Meas_ts_28_552_5g_gnodeb_104',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0105',
    name: 'Meas_ts_28_552_5g_gnodeb_105',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0106',
    name: 'Meas_ts_28_552_5g_gnodeb_106',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0107',
    name: 'Meas_ts_28_552_5g_gnodeb_107',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0108',
    name: 'Meas_ts_28_552_5g_gnodeb_108',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0109',
    name: 'Meas_ts_28_552_5g_gnodeb_109',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0110',
    name: 'Meas_ts_28_552_5g_gnodeb_110',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0111',
    name: 'Meas_ts_28_552_5g_gnodeb_111',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0112',
    name: 'Meas_ts_28_552_5g_gnodeb_112',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0113',
    name: 'Meas_ts_28_552_5g_gnodeb_113',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0114',
    name: 'Meas_ts_28_552_5g_gnodeb_114',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0115',
    name: 'Meas_ts_28_552_5g_gnodeb_115',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0116',
    name: 'Meas_ts_28_552_5g_gnodeb_116',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0117',
    name: 'Meas_ts_28_552_5g_gnodeb_117',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0118',
    name: 'Meas_ts_28_552_5g_gnodeb_118',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0119',
    name: 'Meas_ts_28_552_5g_gnodeb_119',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0120',
    name: 'Meas_ts_28_552_5g_gnodeb_120',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0121',
    name: 'Meas_ts_28_552_5g_gnodeb_121',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0122',
    name: 'Meas_ts_28_552_5g_gnodeb_122',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0123',
    name: 'Meas_ts_28_552_5g_gnodeb_123',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0124',
    name: 'Meas_ts_28_552_5g_gnodeb_124',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0125',
    name: 'Meas_ts_28_552_5g_gnodeb_125',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0126',
    name: 'Meas_ts_28_552_5g_gnodeb_126',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0127',
    name: 'Meas_ts_28_552_5g_gnodeb_127',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0128',
    name: 'Meas_ts_28_552_5g_gnodeb_128',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0129',
    name: 'Meas_ts_28_552_5g_gnodeb_129',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0130',
    name: 'Meas_ts_28_552_5g_gnodeb_130',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0131',
    name: 'Meas_ts_28_552_5g_gnodeb_131',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0132',
    name: 'Meas_ts_28_552_5g_gnodeb_132',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0133',
    name: 'Meas_ts_28_552_5g_gnodeb_133',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0134',
    name: 'Meas_ts_28_552_5g_gnodeb_134',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0135',
    name: 'Meas_ts_28_552_5g_gnodeb_135',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0136',
    name: 'Meas_ts_28_552_5g_gnodeb_136',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0137',
    name: 'Meas_ts_28_552_5g_gnodeb_137',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0138',
    name: 'Meas_ts_28_552_5g_gnodeb_138',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0139',
    name: 'Meas_ts_28_552_5g_gnodeb_139',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0140',
    name: 'Meas_ts_28_552_5g_gnodeb_140',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0141',
    name: 'Meas_ts_28_552_5g_gnodeb_141',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0142',
    name: 'Meas_ts_28_552_5g_gnodeb_142',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0143',
    name: 'Meas_ts_28_552_5g_gnodeb_143',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0144',
    name: 'Meas_ts_28_552_5g_gnodeb_144',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0145',
    name: 'Meas_ts_28_552_5g_gnodeb_145',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0146',
    name: 'Meas_ts_28_552_5g_gnodeb_146',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0147',
    name: 'Meas_ts_28_552_5g_gnodeb_147',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0148',
    name: 'Meas_ts_28_552_5g_gnodeb_148',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0149',
    name: 'Meas_ts_28_552_5g_gnodeb_149',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0150',
    name: 'Meas_ts_28_552_5g_gnodeb_150',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0151',
    name: 'Meas_ts_28_552_5g_gnodeb_151',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0152',
    name: 'Meas_ts_28_552_5g_gnodeb_152',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0153',
    name: 'Meas_ts_28_552_5g_gnodeb_153',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0154',
    name: 'Meas_ts_28_552_5g_gnodeb_154',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0155',
    name: 'Meas_ts_28_552_5g_gnodeb_155',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0156',
    name: 'Meas_ts_28_552_5g_gnodeb_156',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0157',
    name: 'Meas_ts_28_552_5g_gnodeb_157',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0158',
    name: 'Meas_ts_28_552_5g_gnodeb_158',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0159',
    name: 'Meas_ts_28_552_5g_gnodeb_159',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0160',
    name: 'Meas_ts_28_552_5g_gnodeb_160',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0161',
    name: 'Meas_ts_28_552_5g_gnodeb_161',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0162',
    name: 'Meas_ts_28_552_5g_gnodeb_162',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0163',
    name: 'Meas_ts_28_552_5g_gnodeb_163',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0164',
    name: 'Meas_ts_28_552_5g_gnodeb_164',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0165',
    name: 'Meas_ts_28_552_5g_gnodeb_165',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0166',
    name: 'Meas_ts_28_552_5g_gnodeb_166',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0167',
    name: 'Meas_ts_28_552_5g_gnodeb_167',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0168',
    name: 'Meas_ts_28_552_5g_gnodeb_168',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0169',
    name: 'Meas_ts_28_552_5g_gnodeb_169',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0170',
    name: 'Meas_ts_28_552_5g_gnodeb_170',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0171',
    name: 'Meas_ts_28_552_5g_gnodeb_171',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0172',
    name: 'Meas_ts_28_552_5g_gnodeb_172',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0173',
    name: 'Meas_ts_28_552_5g_gnodeb_173',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0174',
    name: 'Meas_ts_28_552_5g_gnodeb_174',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0175',
    name: 'Meas_ts_28_552_5g_gnodeb_175',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0176',
    name: 'Meas_ts_28_552_5g_gnodeb_176',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0177',
    name: 'Meas_ts_28_552_5g_gnodeb_177',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0178',
    name: 'Meas_ts_28_552_5g_gnodeb_178',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0179',
    name: 'Meas_ts_28_552_5g_gnodeb_179',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0180',
    name: 'Meas_ts_28_552_5g_gnodeb_180',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0181',
    name: 'Meas_ts_28_552_5g_gnodeb_181',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0182',
    name: 'Meas_ts_28_552_5g_gnodeb_182',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0183',
    name: 'Meas_ts_28_552_5g_gnodeb_183',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0184',
    name: 'Meas_ts_28_552_5g_gnodeb_184',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0185',
    name: 'Meas_ts_28_552_5g_gnodeb_185',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0186',
    name: 'Meas_ts_28_552_5g_gnodeb_186',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0187',
    name: 'Meas_ts_28_552_5g_gnodeb_187',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0188',
    name: 'Meas_ts_28_552_5g_gnodeb_188',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0189',
    name: 'Meas_ts_28_552_5g_gnodeb_189',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0190',
    name: 'Meas_ts_28_552_5g_gnodeb_190',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0191',
    name: 'Meas_ts_28_552_5g_gnodeb_191',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0192',
    name: 'Meas_ts_28_552_5g_gnodeb_192',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0193',
    name: 'Meas_ts_28_552_5g_gnodeb_193',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0194',
    name: 'Meas_ts_28_552_5g_gnodeb_194',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0195',
    name: 'Meas_ts_28_552_5g_gnodeb_195',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0196',
    name: 'Meas_ts_28_552_5g_gnodeb_196',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0197',
    name: 'Meas_ts_28_552_5g_gnodeb_197',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0198',
    name: 'Meas_ts_28_552_5g_gnodeb_198',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0199',
    name: 'Meas_ts_28_552_5g_gnodeb_199',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0200',
    name: 'Meas_ts_28_552_5g_gnodeb_200',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0201',
    name: 'Meas_ts_28_552_5g_gnodeb_201',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0202',
    name: 'Meas_ts_28_552_5g_gnodeb_202',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0203',
    name: 'Meas_ts_28_552_5g_gnodeb_203',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0204',
    name: 'Meas_ts_28_552_5g_gnodeb_204',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0205',
    name: 'Meas_ts_28_552_5g_gnodeb_205',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0206',
    name: 'Meas_ts_28_552_5g_gnodeb_206',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0207',
    name: 'Meas_ts_28_552_5g_gnodeb_207',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0208',
    name: 'Meas_ts_28_552_5g_gnodeb_208',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0209',
    name: 'Meas_ts_28_552_5g_gnodeb_209',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0210',
    name: 'Meas_ts_28_552_5g_gnodeb_210',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0211',
    name: 'Meas_ts_28_552_5g_gnodeb_211',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0212',
    name: 'Meas_ts_28_552_5g_gnodeb_212',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0213',
    name: 'Meas_ts_28_552_5g_gnodeb_213',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0214',
    name: 'Meas_ts_28_552_5g_gnodeb_214',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0215',
    name: 'Meas_ts_28_552_5g_gnodeb_215',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0216',
    name: 'Meas_ts_28_552_5g_gnodeb_216',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0217',
    name: 'Meas_ts_28_552_5g_gnodeb_217',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0218',
    name: 'Meas_ts_28_552_5g_gnodeb_218',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0219',
    name: 'Meas_ts_28_552_5g_gnodeb_219',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0220',
    name: 'Meas_ts_28_552_5g_gnodeb_220',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0221',
    name: 'Meas_ts_28_552_5g_gnodeb_221',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0222',
    name: 'Meas_ts_28_552_5g_gnodeb_222',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0223',
    name: 'Meas_ts_28_552_5g_gnodeb_223',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0224',
    name: 'Meas_ts_28_552_5g_gnodeb_224',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0225',
    name: 'Meas_ts_28_552_5g_gnodeb_225',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0226',
    name: 'Meas_ts_28_552_5g_gnodeb_226',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0227',
    name: 'Meas_ts_28_552_5g_gnodeb_227',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0228',
    name: 'Meas_ts_28_552_5g_gnodeb_228',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0229',
    name: 'Meas_ts_28_552_5g_gnodeb_229',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0230',
    name: 'Meas_ts_28_552_5g_gnodeb_230',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0231',
    name: 'Meas_ts_28_552_5g_gnodeb_231',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0232',
    name: 'Meas_ts_28_552_5g_gnodeb_232',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0233',
    name: 'Meas_ts_28_552_5g_gnodeb_233',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0234',
    name: 'Meas_ts_28_552_5g_gnodeb_234',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0235',
    name: 'Meas_ts_28_552_5g_gnodeb_235',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0236',
    name: 'Meas_ts_28_552_5g_gnodeb_236',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0237',
    name: 'Meas_ts_28_552_5g_gnodeb_237',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0238',
    name: 'Meas_ts_28_552_5g_gnodeb_238',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0239',
    name: 'Meas_ts_28_552_5g_gnodeb_239',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0240',
    name: 'Meas_ts_28_552_5g_gnodeb_240',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0241',
    name: 'Meas_ts_28_552_5g_gnodeb_241',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0242',
    name: 'Meas_ts_28_552_5g_gnodeb_242',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0243',
    name: 'Meas_ts_28_552_5g_gnodeb_243',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0244',
    name: 'Meas_ts_28_552_5g_gnodeb_244',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0245',
    name: 'Meas_ts_28_552_5g_gnodeb_245',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0246',
    name: 'Meas_ts_28_552_5g_gnodeb_246',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0247',
    name: 'Meas_ts_28_552_5g_gnodeb_247',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0248',
    name: 'Meas_ts_28_552_5g_gnodeb_248',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0249',
    name: 'Meas_ts_28_552_5g_gnodeb_249',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0250',
    name: 'Meas_ts_28_552_5g_gnodeb_250',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0251',
    name: 'Meas_ts_28_552_5g_gnodeb_251',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0252',
    name: 'Meas_ts_28_552_5g_gnodeb_252',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0253',
    name: 'Meas_ts_28_552_5g_gnodeb_253',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0254',
    name: 'Meas_ts_28_552_5g_gnodeb_254',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0255',
    name: 'Meas_ts_28_552_5g_gnodeb_255',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0256',
    name: 'Meas_ts_28_552_5g_gnodeb_256',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0257',
    name: 'Meas_ts_28_552_5g_gnodeb_257',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0258',
    name: 'Meas_ts_28_552_5g_gnodeb_258',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0259',
    name: 'Meas_ts_28_552_5g_gnodeb_259',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_552_5G_GNODEB_0260',
    name: 'Meas_ts_28_552_5g_gnodeb_260',
    standardReference: 'TS-28-552-5G-GNODEB',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for 5G NR Performance Measurements and Cell Level KPIs (3GPP TS 28.552). Critical for cellular slicing SLA governance.'
  },
];

export class Ts285525GGnodebProcessor {
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
