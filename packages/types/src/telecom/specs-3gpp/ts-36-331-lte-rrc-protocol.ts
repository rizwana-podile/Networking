/**
 * GeoNet Sentinel 3GPP Specification Model
 * E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331)
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

export const TS_36_331_LTE_RRC_PROTOCOL_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0001',
    name: 'Meas_ts_36_331_lte_rrc_protocol_1',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0002',
    name: 'Meas_ts_36_331_lte_rrc_protocol_2',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0003',
    name: 'Meas_ts_36_331_lte_rrc_protocol_3',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0004',
    name: 'Meas_ts_36_331_lte_rrc_protocol_4',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0005',
    name: 'Meas_ts_36_331_lte_rrc_protocol_5',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0006',
    name: 'Meas_ts_36_331_lte_rrc_protocol_6',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0007',
    name: 'Meas_ts_36_331_lte_rrc_protocol_7',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0008',
    name: 'Meas_ts_36_331_lte_rrc_protocol_8',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0009',
    name: 'Meas_ts_36_331_lte_rrc_protocol_9',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0010',
    name: 'Meas_ts_36_331_lte_rrc_protocol_10',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0011',
    name: 'Meas_ts_36_331_lte_rrc_protocol_11',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0012',
    name: 'Meas_ts_36_331_lte_rrc_protocol_12',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0013',
    name: 'Meas_ts_36_331_lte_rrc_protocol_13',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0014',
    name: 'Meas_ts_36_331_lte_rrc_protocol_14',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0015',
    name: 'Meas_ts_36_331_lte_rrc_protocol_15',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0016',
    name: 'Meas_ts_36_331_lte_rrc_protocol_16',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0017',
    name: 'Meas_ts_36_331_lte_rrc_protocol_17',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0018',
    name: 'Meas_ts_36_331_lte_rrc_protocol_18',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0019',
    name: 'Meas_ts_36_331_lte_rrc_protocol_19',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0020',
    name: 'Meas_ts_36_331_lte_rrc_protocol_20',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0021',
    name: 'Meas_ts_36_331_lte_rrc_protocol_21',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0022',
    name: 'Meas_ts_36_331_lte_rrc_protocol_22',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0023',
    name: 'Meas_ts_36_331_lte_rrc_protocol_23',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0024',
    name: 'Meas_ts_36_331_lte_rrc_protocol_24',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0025',
    name: 'Meas_ts_36_331_lte_rrc_protocol_25',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0026',
    name: 'Meas_ts_36_331_lte_rrc_protocol_26',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0027',
    name: 'Meas_ts_36_331_lte_rrc_protocol_27',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0028',
    name: 'Meas_ts_36_331_lte_rrc_protocol_28',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0029',
    name: 'Meas_ts_36_331_lte_rrc_protocol_29',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0030',
    name: 'Meas_ts_36_331_lte_rrc_protocol_30',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0031',
    name: 'Meas_ts_36_331_lte_rrc_protocol_31',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0032',
    name: 'Meas_ts_36_331_lte_rrc_protocol_32',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0033',
    name: 'Meas_ts_36_331_lte_rrc_protocol_33',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0034',
    name: 'Meas_ts_36_331_lte_rrc_protocol_34',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0035',
    name: 'Meas_ts_36_331_lte_rrc_protocol_35',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0036',
    name: 'Meas_ts_36_331_lte_rrc_protocol_36',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0037',
    name: 'Meas_ts_36_331_lte_rrc_protocol_37',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0038',
    name: 'Meas_ts_36_331_lte_rrc_protocol_38',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0039',
    name: 'Meas_ts_36_331_lte_rrc_protocol_39',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0040',
    name: 'Meas_ts_36_331_lte_rrc_protocol_40',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0041',
    name: 'Meas_ts_36_331_lte_rrc_protocol_41',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0042',
    name: 'Meas_ts_36_331_lte_rrc_protocol_42',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0043',
    name: 'Meas_ts_36_331_lte_rrc_protocol_43',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0044',
    name: 'Meas_ts_36_331_lte_rrc_protocol_44',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0045',
    name: 'Meas_ts_36_331_lte_rrc_protocol_45',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0046',
    name: 'Meas_ts_36_331_lte_rrc_protocol_46',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0047',
    name: 'Meas_ts_36_331_lte_rrc_protocol_47',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0048',
    name: 'Meas_ts_36_331_lte_rrc_protocol_48',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0049',
    name: 'Meas_ts_36_331_lte_rrc_protocol_49',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0050',
    name: 'Meas_ts_36_331_lte_rrc_protocol_50',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0051',
    name: 'Meas_ts_36_331_lte_rrc_protocol_51',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0052',
    name: 'Meas_ts_36_331_lte_rrc_protocol_52',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0053',
    name: 'Meas_ts_36_331_lte_rrc_protocol_53',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0054',
    name: 'Meas_ts_36_331_lte_rrc_protocol_54',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0055',
    name: 'Meas_ts_36_331_lte_rrc_protocol_55',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0056',
    name: 'Meas_ts_36_331_lte_rrc_protocol_56',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0057',
    name: 'Meas_ts_36_331_lte_rrc_protocol_57',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0058',
    name: 'Meas_ts_36_331_lte_rrc_protocol_58',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0059',
    name: 'Meas_ts_36_331_lte_rrc_protocol_59',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0060',
    name: 'Meas_ts_36_331_lte_rrc_protocol_60',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0061',
    name: 'Meas_ts_36_331_lte_rrc_protocol_61',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0062',
    name: 'Meas_ts_36_331_lte_rrc_protocol_62',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0063',
    name: 'Meas_ts_36_331_lte_rrc_protocol_63',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0064',
    name: 'Meas_ts_36_331_lte_rrc_protocol_64',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0065',
    name: 'Meas_ts_36_331_lte_rrc_protocol_65',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0066',
    name: 'Meas_ts_36_331_lte_rrc_protocol_66',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0067',
    name: 'Meas_ts_36_331_lte_rrc_protocol_67',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0068',
    name: 'Meas_ts_36_331_lte_rrc_protocol_68',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0069',
    name: 'Meas_ts_36_331_lte_rrc_protocol_69',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0070',
    name: 'Meas_ts_36_331_lte_rrc_protocol_70',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0071',
    name: 'Meas_ts_36_331_lte_rrc_protocol_71',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0072',
    name: 'Meas_ts_36_331_lte_rrc_protocol_72',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0073',
    name: 'Meas_ts_36_331_lte_rrc_protocol_73',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0074',
    name: 'Meas_ts_36_331_lte_rrc_protocol_74',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0075',
    name: 'Meas_ts_36_331_lte_rrc_protocol_75',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0076',
    name: 'Meas_ts_36_331_lte_rrc_protocol_76',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0077',
    name: 'Meas_ts_36_331_lte_rrc_protocol_77',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0078',
    name: 'Meas_ts_36_331_lte_rrc_protocol_78',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0079',
    name: 'Meas_ts_36_331_lte_rrc_protocol_79',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0080',
    name: 'Meas_ts_36_331_lte_rrc_protocol_80',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0081',
    name: 'Meas_ts_36_331_lte_rrc_protocol_81',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0082',
    name: 'Meas_ts_36_331_lte_rrc_protocol_82',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0083',
    name: 'Meas_ts_36_331_lte_rrc_protocol_83',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0084',
    name: 'Meas_ts_36_331_lte_rrc_protocol_84',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0085',
    name: 'Meas_ts_36_331_lte_rrc_protocol_85',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0086',
    name: 'Meas_ts_36_331_lte_rrc_protocol_86',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0087',
    name: 'Meas_ts_36_331_lte_rrc_protocol_87',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0088',
    name: 'Meas_ts_36_331_lte_rrc_protocol_88',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0089',
    name: 'Meas_ts_36_331_lte_rrc_protocol_89',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0090',
    name: 'Meas_ts_36_331_lte_rrc_protocol_90',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0091',
    name: 'Meas_ts_36_331_lte_rrc_protocol_91',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0092',
    name: 'Meas_ts_36_331_lte_rrc_protocol_92',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0093',
    name: 'Meas_ts_36_331_lte_rrc_protocol_93',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0094',
    name: 'Meas_ts_36_331_lte_rrc_protocol_94',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0095',
    name: 'Meas_ts_36_331_lte_rrc_protocol_95',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0096',
    name: 'Meas_ts_36_331_lte_rrc_protocol_96',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0097',
    name: 'Meas_ts_36_331_lte_rrc_protocol_97',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0098',
    name: 'Meas_ts_36_331_lte_rrc_protocol_98',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0099',
    name: 'Meas_ts_36_331_lte_rrc_protocol_99',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0100',
    name: 'Meas_ts_36_331_lte_rrc_protocol_100',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0101',
    name: 'Meas_ts_36_331_lte_rrc_protocol_101',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0102',
    name: 'Meas_ts_36_331_lte_rrc_protocol_102',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0103',
    name: 'Meas_ts_36_331_lte_rrc_protocol_103',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0104',
    name: 'Meas_ts_36_331_lte_rrc_protocol_104',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0105',
    name: 'Meas_ts_36_331_lte_rrc_protocol_105',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0106',
    name: 'Meas_ts_36_331_lte_rrc_protocol_106',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0107',
    name: 'Meas_ts_36_331_lte_rrc_protocol_107',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0108',
    name: 'Meas_ts_36_331_lte_rrc_protocol_108',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0109',
    name: 'Meas_ts_36_331_lte_rrc_protocol_109',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0110',
    name: 'Meas_ts_36_331_lte_rrc_protocol_110',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0111',
    name: 'Meas_ts_36_331_lte_rrc_protocol_111',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0112',
    name: 'Meas_ts_36_331_lte_rrc_protocol_112',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0113',
    name: 'Meas_ts_36_331_lte_rrc_protocol_113',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0114',
    name: 'Meas_ts_36_331_lte_rrc_protocol_114',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0115',
    name: 'Meas_ts_36_331_lte_rrc_protocol_115',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0116',
    name: 'Meas_ts_36_331_lte_rrc_protocol_116',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0117',
    name: 'Meas_ts_36_331_lte_rrc_protocol_117',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0118',
    name: 'Meas_ts_36_331_lte_rrc_protocol_118',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0119',
    name: 'Meas_ts_36_331_lte_rrc_protocol_119',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0120',
    name: 'Meas_ts_36_331_lte_rrc_protocol_120',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0121',
    name: 'Meas_ts_36_331_lte_rrc_protocol_121',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0122',
    name: 'Meas_ts_36_331_lte_rrc_protocol_122',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0123',
    name: 'Meas_ts_36_331_lte_rrc_protocol_123',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0124',
    name: 'Meas_ts_36_331_lte_rrc_protocol_124',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0125',
    name: 'Meas_ts_36_331_lte_rrc_protocol_125',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0126',
    name: 'Meas_ts_36_331_lte_rrc_protocol_126',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0127',
    name: 'Meas_ts_36_331_lte_rrc_protocol_127',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0128',
    name: 'Meas_ts_36_331_lte_rrc_protocol_128',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0129',
    name: 'Meas_ts_36_331_lte_rrc_protocol_129',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0130',
    name: 'Meas_ts_36_331_lte_rrc_protocol_130',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0131',
    name: 'Meas_ts_36_331_lte_rrc_protocol_131',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0132',
    name: 'Meas_ts_36_331_lte_rrc_protocol_132',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0133',
    name: 'Meas_ts_36_331_lte_rrc_protocol_133',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0134',
    name: 'Meas_ts_36_331_lte_rrc_protocol_134',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0135',
    name: 'Meas_ts_36_331_lte_rrc_protocol_135',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0136',
    name: 'Meas_ts_36_331_lte_rrc_protocol_136',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0137',
    name: 'Meas_ts_36_331_lte_rrc_protocol_137',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0138',
    name: 'Meas_ts_36_331_lte_rrc_protocol_138',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0139',
    name: 'Meas_ts_36_331_lte_rrc_protocol_139',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0140',
    name: 'Meas_ts_36_331_lte_rrc_protocol_140',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0141',
    name: 'Meas_ts_36_331_lte_rrc_protocol_141',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0142',
    name: 'Meas_ts_36_331_lte_rrc_protocol_142',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0143',
    name: 'Meas_ts_36_331_lte_rrc_protocol_143',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0144',
    name: 'Meas_ts_36_331_lte_rrc_protocol_144',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0145',
    name: 'Meas_ts_36_331_lte_rrc_protocol_145',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0146',
    name: 'Meas_ts_36_331_lte_rrc_protocol_146',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0147',
    name: 'Meas_ts_36_331_lte_rrc_protocol_147',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0148',
    name: 'Meas_ts_36_331_lte_rrc_protocol_148',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0149',
    name: 'Meas_ts_36_331_lte_rrc_protocol_149',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0150',
    name: 'Meas_ts_36_331_lte_rrc_protocol_150',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0151',
    name: 'Meas_ts_36_331_lte_rrc_protocol_151',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0152',
    name: 'Meas_ts_36_331_lte_rrc_protocol_152',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0153',
    name: 'Meas_ts_36_331_lte_rrc_protocol_153',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0154',
    name: 'Meas_ts_36_331_lte_rrc_protocol_154',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0155',
    name: 'Meas_ts_36_331_lte_rrc_protocol_155',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0156',
    name: 'Meas_ts_36_331_lte_rrc_protocol_156',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0157',
    name: 'Meas_ts_36_331_lte_rrc_protocol_157',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0158',
    name: 'Meas_ts_36_331_lte_rrc_protocol_158',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0159',
    name: 'Meas_ts_36_331_lte_rrc_protocol_159',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0160',
    name: 'Meas_ts_36_331_lte_rrc_protocol_160',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0161',
    name: 'Meas_ts_36_331_lte_rrc_protocol_161',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0162',
    name: 'Meas_ts_36_331_lte_rrc_protocol_162',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0163',
    name: 'Meas_ts_36_331_lte_rrc_protocol_163',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0164',
    name: 'Meas_ts_36_331_lte_rrc_protocol_164',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0165',
    name: 'Meas_ts_36_331_lte_rrc_protocol_165',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0166',
    name: 'Meas_ts_36_331_lte_rrc_protocol_166',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0167',
    name: 'Meas_ts_36_331_lte_rrc_protocol_167',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0168',
    name: 'Meas_ts_36_331_lte_rrc_protocol_168',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0169',
    name: 'Meas_ts_36_331_lte_rrc_protocol_169',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0170',
    name: 'Meas_ts_36_331_lte_rrc_protocol_170',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0171',
    name: 'Meas_ts_36_331_lte_rrc_protocol_171',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0172',
    name: 'Meas_ts_36_331_lte_rrc_protocol_172',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0173',
    name: 'Meas_ts_36_331_lte_rrc_protocol_173',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0174',
    name: 'Meas_ts_36_331_lte_rrc_protocol_174',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0175',
    name: 'Meas_ts_36_331_lte_rrc_protocol_175',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0176',
    name: 'Meas_ts_36_331_lte_rrc_protocol_176',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0177',
    name: 'Meas_ts_36_331_lte_rrc_protocol_177',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0178',
    name: 'Meas_ts_36_331_lte_rrc_protocol_178',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0179',
    name: 'Meas_ts_36_331_lte_rrc_protocol_179',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0180',
    name: 'Meas_ts_36_331_lte_rrc_protocol_180',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0181',
    name: 'Meas_ts_36_331_lte_rrc_protocol_181',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0182',
    name: 'Meas_ts_36_331_lte_rrc_protocol_182',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0183',
    name: 'Meas_ts_36_331_lte_rrc_protocol_183',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0184',
    name: 'Meas_ts_36_331_lte_rrc_protocol_184',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0185',
    name: 'Meas_ts_36_331_lte_rrc_protocol_185',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0186',
    name: 'Meas_ts_36_331_lte_rrc_protocol_186',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0187',
    name: 'Meas_ts_36_331_lte_rrc_protocol_187',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0188',
    name: 'Meas_ts_36_331_lte_rrc_protocol_188',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0189',
    name: 'Meas_ts_36_331_lte_rrc_protocol_189',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0190',
    name: 'Meas_ts_36_331_lte_rrc_protocol_190',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0191',
    name: 'Meas_ts_36_331_lte_rrc_protocol_191',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0192',
    name: 'Meas_ts_36_331_lte_rrc_protocol_192',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0193',
    name: 'Meas_ts_36_331_lte_rrc_protocol_193',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0194',
    name: 'Meas_ts_36_331_lte_rrc_protocol_194',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0195',
    name: 'Meas_ts_36_331_lte_rrc_protocol_195',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0196',
    name: 'Meas_ts_36_331_lte_rrc_protocol_196',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0197',
    name: 'Meas_ts_36_331_lte_rrc_protocol_197',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0198',
    name: 'Meas_ts_36_331_lte_rrc_protocol_198',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0199',
    name: 'Meas_ts_36_331_lte_rrc_protocol_199',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0200',
    name: 'Meas_ts_36_331_lte_rrc_protocol_200',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0201',
    name: 'Meas_ts_36_331_lte_rrc_protocol_201',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0202',
    name: 'Meas_ts_36_331_lte_rrc_protocol_202',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0203',
    name: 'Meas_ts_36_331_lte_rrc_protocol_203',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0204',
    name: 'Meas_ts_36_331_lte_rrc_protocol_204',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0205',
    name: 'Meas_ts_36_331_lte_rrc_protocol_205',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0206',
    name: 'Meas_ts_36_331_lte_rrc_protocol_206',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0207',
    name: 'Meas_ts_36_331_lte_rrc_protocol_207',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0208',
    name: 'Meas_ts_36_331_lte_rrc_protocol_208',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0209',
    name: 'Meas_ts_36_331_lte_rrc_protocol_209',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0210',
    name: 'Meas_ts_36_331_lte_rrc_protocol_210',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0211',
    name: 'Meas_ts_36_331_lte_rrc_protocol_211',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0212',
    name: 'Meas_ts_36_331_lte_rrc_protocol_212',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0213',
    name: 'Meas_ts_36_331_lte_rrc_protocol_213',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0214',
    name: 'Meas_ts_36_331_lte_rrc_protocol_214',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0215',
    name: 'Meas_ts_36_331_lte_rrc_protocol_215',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0216',
    name: 'Meas_ts_36_331_lte_rrc_protocol_216',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0217',
    name: 'Meas_ts_36_331_lte_rrc_protocol_217',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0218',
    name: 'Meas_ts_36_331_lte_rrc_protocol_218',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0219',
    name: 'Meas_ts_36_331_lte_rrc_protocol_219',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0220',
    name: 'Meas_ts_36_331_lte_rrc_protocol_220',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0221',
    name: 'Meas_ts_36_331_lte_rrc_protocol_221',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0222',
    name: 'Meas_ts_36_331_lte_rrc_protocol_222',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0223',
    name: 'Meas_ts_36_331_lte_rrc_protocol_223',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0224',
    name: 'Meas_ts_36_331_lte_rrc_protocol_224',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0225',
    name: 'Meas_ts_36_331_lte_rrc_protocol_225',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0226',
    name: 'Meas_ts_36_331_lte_rrc_protocol_226',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0227',
    name: 'Meas_ts_36_331_lte_rrc_protocol_227',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0228',
    name: 'Meas_ts_36_331_lte_rrc_protocol_228',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0229',
    name: 'Meas_ts_36_331_lte_rrc_protocol_229',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0230',
    name: 'Meas_ts_36_331_lte_rrc_protocol_230',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0231',
    name: 'Meas_ts_36_331_lte_rrc_protocol_231',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0232',
    name: 'Meas_ts_36_331_lte_rrc_protocol_232',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0233',
    name: 'Meas_ts_36_331_lte_rrc_protocol_233',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0234',
    name: 'Meas_ts_36_331_lte_rrc_protocol_234',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0235',
    name: 'Meas_ts_36_331_lte_rrc_protocol_235',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0236',
    name: 'Meas_ts_36_331_lte_rrc_protocol_236',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0237',
    name: 'Meas_ts_36_331_lte_rrc_protocol_237',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0238',
    name: 'Meas_ts_36_331_lte_rrc_protocol_238',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0239',
    name: 'Meas_ts_36_331_lte_rrc_protocol_239',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0240',
    name: 'Meas_ts_36_331_lte_rrc_protocol_240',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0241',
    name: 'Meas_ts_36_331_lte_rrc_protocol_241',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0242',
    name: 'Meas_ts_36_331_lte_rrc_protocol_242',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0243',
    name: 'Meas_ts_36_331_lte_rrc_protocol_243',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0244',
    name: 'Meas_ts_36_331_lte_rrc_protocol_244',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0245',
    name: 'Meas_ts_36_331_lte_rrc_protocol_245',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0246',
    name: 'Meas_ts_36_331_lte_rrc_protocol_246',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0247',
    name: 'Meas_ts_36_331_lte_rrc_protocol_247',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0248',
    name: 'Meas_ts_36_331_lte_rrc_protocol_248',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0249',
    name: 'Meas_ts_36_331_lte_rrc_protocol_249',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0250',
    name: 'Meas_ts_36_331_lte_rrc_protocol_250',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0251',
    name: 'Meas_ts_36_331_lte_rrc_protocol_251',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0252',
    name: 'Meas_ts_36_331_lte_rrc_protocol_252',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0253',
    name: 'Meas_ts_36_331_lte_rrc_protocol_253',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0254',
    name: 'Meas_ts_36_331_lte_rrc_protocol_254',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0255',
    name: 'Meas_ts_36_331_lte_rrc_protocol_255',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0256',
    name: 'Meas_ts_36_331_lte_rrc_protocol_256',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0257',
    name: 'Meas_ts_36_331_lte_rrc_protocol_257',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0258',
    name: 'Meas_ts_36_331_lte_rrc_protocol_258',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0259',
    name: 'Meas_ts_36_331_lte_rrc_protocol_259',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_36_331_LTE_RRC_PROTOCOL_0260',
    name: 'Meas_ts_36_331_lte_rrc_protocol_260',
    standardReference: 'TS-36-331-LTE-RRC-PROTOCOL',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for E-UTRA Radio Resource Control Protocol Specification (3GPP TS 36.331). Critical for cellular slicing SLA governance.'
  },
];

export class Ts36331LteRrcProtocolProcessor {
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
