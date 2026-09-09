/**
 * GeoNet Sentinel 3GPP Specification Model
 * 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554)
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

export const TS_28_554_5G_END_TO_END_QOS_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0001',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_1',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0002',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_2',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0003',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_3',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0004',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_4',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0005',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_5',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0006',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_6',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0007',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_7',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0008',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_8',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0009',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_9',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0010',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_10',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0011',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_11',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0012',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_12',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0013',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_13',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0014',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_14',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0015',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_15',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0016',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_16',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0017',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_17',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0018',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_18',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0019',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_19',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0020',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_20',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0021',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_21',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0022',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_22',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0023',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_23',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0024',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_24',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0025',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_25',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0026',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_26',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0027',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_27',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0028',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_28',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0029',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_29',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0030',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_30',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0031',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_31',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0032',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_32',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0033',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_33',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0034',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_34',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0035',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_35',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0036',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_36',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0037',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_37',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0038',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_38',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0039',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_39',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0040',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_40',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0041',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_41',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0042',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_42',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0043',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_43',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0044',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_44',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0045',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_45',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0046',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_46',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0047',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_47',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0048',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_48',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0049',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_49',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0050',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_50',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0051',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_51',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0052',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_52',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0053',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_53',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0054',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_54',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0055',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_55',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0056',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_56',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0057',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_57',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0058',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_58',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0059',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_59',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0060',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_60',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0061',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_61',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0062',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_62',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0063',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_63',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0064',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_64',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0065',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_65',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0066',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_66',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0067',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_67',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0068',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_68',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0069',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_69',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0070',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_70',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0071',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_71',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0072',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_72',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0073',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_73',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0074',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_74',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0075',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_75',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0076',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_76',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0077',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_77',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0078',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_78',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0079',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_79',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0080',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_80',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0081',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_81',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0082',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_82',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0083',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_83',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0084',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_84',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0085',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_85',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0086',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_86',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0087',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_87',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0088',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_88',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0089',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_89',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0090',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_90',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0091',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_91',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0092',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_92',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0093',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_93',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0094',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_94',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0095',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_95',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0096',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_96',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0097',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_97',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0098',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_98',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0099',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_99',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0100',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_100',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0101',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_101',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0102',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_102',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0103',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_103',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0104',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_104',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0105',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_105',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0106',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_106',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0107',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_107',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0108',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_108',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0109',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_109',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0110',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_110',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0111',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_111',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0112',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_112',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0113',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_113',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0114',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_114',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0115',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_115',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0116',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_116',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0117',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_117',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0118',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_118',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0119',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_119',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0120',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_120',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0121',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_121',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0122',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_122',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0123',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_123',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0124',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_124',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0125',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_125',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0126',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_126',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0127',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_127',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0128',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_128',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0129',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_129',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0130',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_130',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0131',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_131',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0132',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_132',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0133',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_133',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0134',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_134',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0135',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_135',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0136',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_136',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0137',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_137',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0138',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_138',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0139',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_139',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0140',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_140',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0141',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_141',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0142',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_142',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0143',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_143',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0144',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_144',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0145',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_145',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0146',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_146',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0147',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_147',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0148',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_148',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0149',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_149',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0150',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_150',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0151',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_151',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0152',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_152',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0153',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_153',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0154',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_154',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0155',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_155',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0156',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_156',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0157',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_157',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0158',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_158',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0159',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_159',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0160',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_160',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0161',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_161',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0162',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_162',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0163',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_163',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0164',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_164',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0165',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_165',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0166',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_166',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0167',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_167',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0168',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_168',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0169',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_169',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0170',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_170',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0171',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_171',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0172',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_172',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0173',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_173',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0174',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_174',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0175',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_175',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0176',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_176',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0177',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_177',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0178',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_178',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0179',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_179',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0180',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_180',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0181',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_181',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0182',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_182',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0183',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_183',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0184',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_184',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0185',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_185',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0186',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_186',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0187',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_187',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0188',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_188',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0189',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_189',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0190',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_190',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0191',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_191',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0192',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_192',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0193',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_193',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0194',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_194',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0195',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_195',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0196',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_196',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0197',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_197',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0198',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_198',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0199',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_199',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0200',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_200',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0201',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_201',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0202',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_202',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0203',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_203',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0204',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_204',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0205',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_205',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0206',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_206',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0207',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_207',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0208',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_208',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0209',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_209',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0210',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_210',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0211',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_211',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0212',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_212',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0213',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_213',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0214',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_214',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0215',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_215',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0216',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_216',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0217',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_217',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0218',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_218',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0219',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_219',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0220',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_220',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0221',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_221',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0222',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_222',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0223',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_223',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0224',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_224',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0225',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_225',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0226',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_226',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0227',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_227',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0228',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_228',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0229',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_229',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0230',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_230',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0231',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_231',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0232',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_232',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0233',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_233',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0234',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_234',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0235',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_235',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0236',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_236',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0237',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_237',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0238',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_238',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0239',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_239',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0240',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_240',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0241',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_241',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0242',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_242',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0243',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_243',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0244',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_244',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0245',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_245',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0246',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_246',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0247',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_247',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0248',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_248',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0249',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_249',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0250',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_250',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0251',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_251',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0252',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_252',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0253',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_253',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0254',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_254',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0255',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_255',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0256',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_256',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0257',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_257',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0258',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_258',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0259',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_259',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_28_554_5G_END_TO_END_QOS_0260',
    name: 'Meas_ts_28_554_5g_end_to_end_qos_260',
    standardReference: 'TS-28-554-5G-END-TO-END-QOS',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for 5G End-to-End Key Performance Indicators for User Plane (3GPP TS 28.554). Critical for cellular slicing SLA governance.'
  },
];

export class Ts285545GEndToEndQosProcessor {
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
