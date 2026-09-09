/**
 * GeoNet Sentinel 3GPP Specification Model
 * LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425)
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

export const TS_32_425_4G_ENODEB_KPIS_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0001',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_1',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0002',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_2',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0003',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_3',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0004',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_4',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0005',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_5',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0006',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_6',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0007',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_7',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0008',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_8',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0009',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_9',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0010',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_10',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0011',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_11',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0012',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_12',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0013',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_13',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0014',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_14',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0015',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_15',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0016',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_16',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0017',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_17',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0018',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_18',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0019',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_19',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0020',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_20',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0021',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_21',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0022',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_22',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0023',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_23',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0024',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_24',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0025',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_25',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0026',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_26',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0027',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_27',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0028',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_28',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0029',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_29',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0030',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_30',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0031',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_31',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0032',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_32',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0033',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_33',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0034',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_34',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0035',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_35',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0036',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_36',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0037',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_37',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0038',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_38',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0039',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_39',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0040',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_40',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0041',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_41',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0042',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_42',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0043',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_43',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0044',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_44',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0045',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_45',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0046',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_46',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0047',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_47',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0048',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_48',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0049',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_49',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0050',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_50',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0051',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_51',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0052',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_52',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0053',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_53',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0054',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_54',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0055',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_55',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0056',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_56',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0057',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_57',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0058',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_58',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0059',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_59',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0060',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_60',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0061',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_61',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0062',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_62',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0063',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_63',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0064',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_64',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0065',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_65',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0066',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_66',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0067',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_67',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0068',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_68',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0069',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_69',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0070',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_70',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0071',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_71',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0072',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_72',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0073',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_73',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0074',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_74',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0075',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_75',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0076',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_76',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0077',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_77',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0078',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_78',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0079',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_79',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0080',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_80',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0081',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_81',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0082',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_82',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0083',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_83',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0084',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_84',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0085',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_85',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0086',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_86',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0087',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_87',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0088',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_88',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0089',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_89',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0090',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_90',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0091',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_91',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0092',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_92',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0093',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_93',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0094',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_94',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0095',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_95',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0096',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_96',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0097',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_97',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0098',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_98',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0099',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_99',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0100',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_100',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0101',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_101',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0102',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_102',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0103',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_103',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0104',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_104',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0105',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_105',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0106',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_106',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0107',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_107',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0108',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_108',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0109',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_109',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0110',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_110',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0111',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_111',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0112',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_112',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0113',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_113',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0114',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_114',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0115',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_115',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0116',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_116',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0117',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_117',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0118',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_118',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0119',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_119',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0120',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_120',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0121',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_121',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0122',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_122',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0123',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_123',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0124',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_124',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0125',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_125',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0126',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_126',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0127',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_127',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0128',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_128',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0129',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_129',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0130',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_130',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0131',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_131',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0132',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_132',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0133',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_133',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0134',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_134',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0135',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_135',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0136',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_136',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0137',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_137',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0138',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_138',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0139',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_139',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0140',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_140',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0141',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_141',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0142',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_142',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0143',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_143',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0144',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_144',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0145',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_145',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0146',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_146',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0147',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_147',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0148',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_148',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0149',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_149',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0150',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_150',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0151',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_151',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0152',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_152',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0153',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_153',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0154',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_154',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0155',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_155',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0156',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_156',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0157',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_157',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0158',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_158',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0159',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_159',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0160',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_160',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0161',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_161',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0162',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_162',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0163',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_163',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0164',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_164',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0165',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_165',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0166',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_166',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0167',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_167',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0168',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_168',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0169',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_169',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0170',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_170',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0171',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_171',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0172',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_172',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0173',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_173',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0174',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_174',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0175',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_175',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0176',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_176',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0177',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_177',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0178',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_178',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0179',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_179',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0180',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_180',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0181',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_181',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0182',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_182',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0183',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_183',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0184',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_184',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0185',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_185',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0186',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_186',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0187',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_187',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0188',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_188',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0189',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_189',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0190',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_190',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0191',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_191',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0192',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_192',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0193',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_193',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0194',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_194',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0195',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_195',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0196',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_196',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0197',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_197',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0198',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_198',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0199',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_199',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0200',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_200',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0201',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_201',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0202',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_202',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0203',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_203',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0204',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_204',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0205',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_205',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0206',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_206',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0207',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_207',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0208',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_208',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0209',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_209',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0210',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_210',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0211',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_211',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0212',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_212',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0213',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_213',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0214',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_214',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0215',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_215',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0216',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_216',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0217',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_217',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0218',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_218',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0219',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_219',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0220',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_220',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0221',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_221',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0222',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_222',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0223',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_223',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0224',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_224',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0225',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_225',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0226',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_226',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0227',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_227',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0228',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_228',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0229',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_229',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0230',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_230',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0231',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_231',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0232',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_232',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0233',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_233',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0234',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_234',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0235',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_235',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0236',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_236',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0237',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_237',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0238',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_238',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0239',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_239',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0240',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_240',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0241',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_241',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0242',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_242',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0243',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_243',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0244',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_244',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0245',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_245',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0246',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_246',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0247',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_247',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0248',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_248',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0249',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_249',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0250',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_250',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0251',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_251',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0252',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_252',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0253',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_253',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0254',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_254',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0255',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_255',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0256',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_256',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0257',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_257',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0258',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_258',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0259',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_259',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_32_425_4G_ENODEB_KPIS_0260',
    name: 'Meas_ts_32_425_4g_enodeb_kpis_260',
    standardReference: 'TS-32-425-4G-ENODEB-KPIS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for LTE E-UTRAN Network Performance Measurements (3GPP TS 32.425). Critical for cellular slicing SLA governance.'
  },
];

export class Ts324254GEnodebKpisProcessor {
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
