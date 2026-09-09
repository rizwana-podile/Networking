/**
 * GeoNet Sentinel 3GPP Specification Model
 * 5G System Session Management Services (3GPP TS 29.502)
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

export const TS_29_502_SMF_SERVICES_METRICS: ThreeGppMeasurementDefinition[] = [
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0001',
    name: 'Meas_ts_29_502_smf_services_1',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #1 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0002',
    name: 'Meas_ts_29_502_smf_services_2',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #2 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0003',
    name: 'Meas_ts_29_502_smf_services_3',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #3 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0004',
    name: 'Meas_ts_29_502_smf_services_4',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #4 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0005',
    name: 'Meas_ts_29_502_smf_services_5',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #5 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0006',
    name: 'Meas_ts_29_502_smf_services_6',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #6 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0007',
    name: 'Meas_ts_29_502_smf_services_7',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #7 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0008',
    name: 'Meas_ts_29_502_smf_services_8',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #8 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0009',
    name: 'Meas_ts_29_502_smf_services_9',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #9 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0010',
    name: 'Meas_ts_29_502_smf_services_10',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #10 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0011',
    name: 'Meas_ts_29_502_smf_services_11',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #11 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0012',
    name: 'Meas_ts_29_502_smf_services_12',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #12 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0013',
    name: 'Meas_ts_29_502_smf_services_13',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #13 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0014',
    name: 'Meas_ts_29_502_smf_services_14',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #14 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0015',
    name: 'Meas_ts_29_502_smf_services_15',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #15 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0016',
    name: 'Meas_ts_29_502_smf_services_16',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #16 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0017',
    name: 'Meas_ts_29_502_smf_services_17',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #17 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0018',
    name: 'Meas_ts_29_502_smf_services_18',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #18 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0019',
    name: 'Meas_ts_29_502_smf_services_19',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #19 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0020',
    name: 'Meas_ts_29_502_smf_services_20',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #20 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0021',
    name: 'Meas_ts_29_502_smf_services_21',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #21 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0022',
    name: 'Meas_ts_29_502_smf_services_22',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #22 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0023',
    name: 'Meas_ts_29_502_smf_services_23',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #23 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0024',
    name: 'Meas_ts_29_502_smf_services_24',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #24 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0025',
    name: 'Meas_ts_29_502_smf_services_25',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #25 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0026',
    name: 'Meas_ts_29_502_smf_services_26',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #26 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0027',
    name: 'Meas_ts_29_502_smf_services_27',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #27 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0028',
    name: 'Meas_ts_29_502_smf_services_28',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #28 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0029',
    name: 'Meas_ts_29_502_smf_services_29',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #29 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0030',
    name: 'Meas_ts_29_502_smf_services_30',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #30 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0031',
    name: 'Meas_ts_29_502_smf_services_31',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #31 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0032',
    name: 'Meas_ts_29_502_smf_services_32',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #32 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0033',
    name: 'Meas_ts_29_502_smf_services_33',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #33 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0034',
    name: 'Meas_ts_29_502_smf_services_34',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #34 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0035',
    name: 'Meas_ts_29_502_smf_services_35',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #35 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0036',
    name: 'Meas_ts_29_502_smf_services_36',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #36 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0037',
    name: 'Meas_ts_29_502_smf_services_37',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #37 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0038',
    name: 'Meas_ts_29_502_smf_services_38',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #38 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0039',
    name: 'Meas_ts_29_502_smf_services_39',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #39 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0040',
    name: 'Meas_ts_29_502_smf_services_40',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #40 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0041',
    name: 'Meas_ts_29_502_smf_services_41',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #41 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0042',
    name: 'Meas_ts_29_502_smf_services_42',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #42 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0043',
    name: 'Meas_ts_29_502_smf_services_43',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #43 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0044',
    name: 'Meas_ts_29_502_smf_services_44',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #44 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0045',
    name: 'Meas_ts_29_502_smf_services_45',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #45 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0046',
    name: 'Meas_ts_29_502_smf_services_46',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #46 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0047',
    name: 'Meas_ts_29_502_smf_services_47',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #47 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0048',
    name: 'Meas_ts_29_502_smf_services_48',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #48 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0049',
    name: 'Meas_ts_29_502_smf_services_49',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #49 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0050',
    name: 'Meas_ts_29_502_smf_services_50',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #50 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0051',
    name: 'Meas_ts_29_502_smf_services_51',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #51 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0052',
    name: 'Meas_ts_29_502_smf_services_52',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #52 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0053',
    name: 'Meas_ts_29_502_smf_services_53',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #53 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0054',
    name: 'Meas_ts_29_502_smf_services_54',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #54 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0055',
    name: 'Meas_ts_29_502_smf_services_55',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #55 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0056',
    name: 'Meas_ts_29_502_smf_services_56',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #56 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0057',
    name: 'Meas_ts_29_502_smf_services_57',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #57 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0058',
    name: 'Meas_ts_29_502_smf_services_58',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #58 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0059',
    name: 'Meas_ts_29_502_smf_services_59',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #59 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0060',
    name: 'Meas_ts_29_502_smf_services_60',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #60 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0061',
    name: 'Meas_ts_29_502_smf_services_61',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #61 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0062',
    name: 'Meas_ts_29_502_smf_services_62',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #62 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0063',
    name: 'Meas_ts_29_502_smf_services_63',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #63 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0064',
    name: 'Meas_ts_29_502_smf_services_64',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #64 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0065',
    name: 'Meas_ts_29_502_smf_services_65',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #65 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0066',
    name: 'Meas_ts_29_502_smf_services_66',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #66 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0067',
    name: 'Meas_ts_29_502_smf_services_67',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #67 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0068',
    name: 'Meas_ts_29_502_smf_services_68',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #68 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0069',
    name: 'Meas_ts_29_502_smf_services_69',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #69 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0070',
    name: 'Meas_ts_29_502_smf_services_70',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #70 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0071',
    name: 'Meas_ts_29_502_smf_services_71',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #71 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0072',
    name: 'Meas_ts_29_502_smf_services_72',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #72 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0073',
    name: 'Meas_ts_29_502_smf_services_73',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #73 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0074',
    name: 'Meas_ts_29_502_smf_services_74',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #74 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0075',
    name: 'Meas_ts_29_502_smf_services_75',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #75 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0076',
    name: 'Meas_ts_29_502_smf_services_76',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #76 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0077',
    name: 'Meas_ts_29_502_smf_services_77',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #77 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0078',
    name: 'Meas_ts_29_502_smf_services_78',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #78 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0079',
    name: 'Meas_ts_29_502_smf_services_79',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #79 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0080',
    name: 'Meas_ts_29_502_smf_services_80',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #80 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0081',
    name: 'Meas_ts_29_502_smf_services_81',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #81 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0082',
    name: 'Meas_ts_29_502_smf_services_82',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #82 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0083',
    name: 'Meas_ts_29_502_smf_services_83',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #83 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0084',
    name: 'Meas_ts_29_502_smf_services_84',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #84 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0085',
    name: 'Meas_ts_29_502_smf_services_85',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #85 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0086',
    name: 'Meas_ts_29_502_smf_services_86',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #86 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0087',
    name: 'Meas_ts_29_502_smf_services_87',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #87 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0088',
    name: 'Meas_ts_29_502_smf_services_88',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #88 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0089',
    name: 'Meas_ts_29_502_smf_services_89',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #89 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0090',
    name: 'Meas_ts_29_502_smf_services_90',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #90 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0091',
    name: 'Meas_ts_29_502_smf_services_91',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #91 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0092',
    name: 'Meas_ts_29_502_smf_services_92',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #92 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0093',
    name: 'Meas_ts_29_502_smf_services_93',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #93 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0094',
    name: 'Meas_ts_29_502_smf_services_94',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #94 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0095',
    name: 'Meas_ts_29_502_smf_services_95',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #95 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0096',
    name: 'Meas_ts_29_502_smf_services_96',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #96 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0097',
    name: 'Meas_ts_29_502_smf_services_97',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #97 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0098',
    name: 'Meas_ts_29_502_smf_services_98',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #98 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0099',
    name: 'Meas_ts_29_502_smf_services_99',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #99 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0100',
    name: 'Meas_ts_29_502_smf_services_100',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #100 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0101',
    name: 'Meas_ts_29_502_smf_services_101',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #101 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0102',
    name: 'Meas_ts_29_502_smf_services_102',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #102 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0103',
    name: 'Meas_ts_29_502_smf_services_103',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #103 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0104',
    name: 'Meas_ts_29_502_smf_services_104',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #104 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0105',
    name: 'Meas_ts_29_502_smf_services_105',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #105 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0106',
    name: 'Meas_ts_29_502_smf_services_106',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #106 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0107',
    name: 'Meas_ts_29_502_smf_services_107',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #107 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0108',
    name: 'Meas_ts_29_502_smf_services_108',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #108 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0109',
    name: 'Meas_ts_29_502_smf_services_109',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #109 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0110',
    name: 'Meas_ts_29_502_smf_services_110',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #110 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0111',
    name: 'Meas_ts_29_502_smf_services_111',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #111 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0112',
    name: 'Meas_ts_29_502_smf_services_112',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #112 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0113',
    name: 'Meas_ts_29_502_smf_services_113',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #113 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0114',
    name: 'Meas_ts_29_502_smf_services_114',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #114 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0115',
    name: 'Meas_ts_29_502_smf_services_115',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #115 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0116',
    name: 'Meas_ts_29_502_smf_services_116',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #116 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0117',
    name: 'Meas_ts_29_502_smf_services_117',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #117 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0118',
    name: 'Meas_ts_29_502_smf_services_118',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #118 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0119',
    name: 'Meas_ts_29_502_smf_services_119',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #119 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0120',
    name: 'Meas_ts_29_502_smf_services_120',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #120 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0121',
    name: 'Meas_ts_29_502_smf_services_121',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #121 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0122',
    name: 'Meas_ts_29_502_smf_services_122',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #122 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0123',
    name: 'Meas_ts_29_502_smf_services_123',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #123 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0124',
    name: 'Meas_ts_29_502_smf_services_124',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #124 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0125',
    name: 'Meas_ts_29_502_smf_services_125',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #125 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0126',
    name: 'Meas_ts_29_502_smf_services_126',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #126 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0127',
    name: 'Meas_ts_29_502_smf_services_127',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #127 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0128',
    name: 'Meas_ts_29_502_smf_services_128',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #128 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0129',
    name: 'Meas_ts_29_502_smf_services_129',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #129 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0130',
    name: 'Meas_ts_29_502_smf_services_130',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #130 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0131',
    name: 'Meas_ts_29_502_smf_services_131',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #131 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0132',
    name: 'Meas_ts_29_502_smf_services_132',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #132 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0133',
    name: 'Meas_ts_29_502_smf_services_133',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #133 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0134',
    name: 'Meas_ts_29_502_smf_services_134',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #134 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0135',
    name: 'Meas_ts_29_502_smf_services_135',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #135 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0136',
    name: 'Meas_ts_29_502_smf_services_136',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #136 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0137',
    name: 'Meas_ts_29_502_smf_services_137',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #137 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0138',
    name: 'Meas_ts_29_502_smf_services_138',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #138 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0139',
    name: 'Meas_ts_29_502_smf_services_139',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #139 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0140',
    name: 'Meas_ts_29_502_smf_services_140',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #140 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0141',
    name: 'Meas_ts_29_502_smf_services_141',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #141 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0142',
    name: 'Meas_ts_29_502_smf_services_142',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #142 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0143',
    name: 'Meas_ts_29_502_smf_services_143',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #143 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0144',
    name: 'Meas_ts_29_502_smf_services_144',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #144 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0145',
    name: 'Meas_ts_29_502_smf_services_145',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #145 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0146',
    name: 'Meas_ts_29_502_smf_services_146',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #146 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0147',
    name: 'Meas_ts_29_502_smf_services_147',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #147 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0148',
    name: 'Meas_ts_29_502_smf_services_148',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #148 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0149',
    name: 'Meas_ts_29_502_smf_services_149',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #149 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0150',
    name: 'Meas_ts_29_502_smf_services_150',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #150 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0151',
    name: 'Meas_ts_29_502_smf_services_151',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #151 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0152',
    name: 'Meas_ts_29_502_smf_services_152',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #152 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0153',
    name: 'Meas_ts_29_502_smf_services_153',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #153 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0154',
    name: 'Meas_ts_29_502_smf_services_154',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #154 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0155',
    name: 'Meas_ts_29_502_smf_services_155',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #155 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0156',
    name: 'Meas_ts_29_502_smf_services_156',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #156 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0157',
    name: 'Meas_ts_29_502_smf_services_157',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #157 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0158',
    name: 'Meas_ts_29_502_smf_services_158',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #158 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0159',
    name: 'Meas_ts_29_502_smf_services_159',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #159 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0160',
    name: 'Meas_ts_29_502_smf_services_160',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #160 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0161',
    name: 'Meas_ts_29_502_smf_services_161',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #161 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0162',
    name: 'Meas_ts_29_502_smf_services_162',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #162 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0163',
    name: 'Meas_ts_29_502_smf_services_163',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #163 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0164',
    name: 'Meas_ts_29_502_smf_services_164',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #164 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0165',
    name: 'Meas_ts_29_502_smf_services_165',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #165 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0166',
    name: 'Meas_ts_29_502_smf_services_166',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #166 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0167',
    name: 'Meas_ts_29_502_smf_services_167',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #167 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0168',
    name: 'Meas_ts_29_502_smf_services_168',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #168 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0169',
    name: 'Meas_ts_29_502_smf_services_169',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #169 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0170',
    name: 'Meas_ts_29_502_smf_services_170',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #170 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0171',
    name: 'Meas_ts_29_502_smf_services_171',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #171 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0172',
    name: 'Meas_ts_29_502_smf_services_172',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #172 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0173',
    name: 'Meas_ts_29_502_smf_services_173',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #173 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0174',
    name: 'Meas_ts_29_502_smf_services_174',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #174 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0175',
    name: 'Meas_ts_29_502_smf_services_175',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #175 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0176',
    name: 'Meas_ts_29_502_smf_services_176',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #176 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0177',
    name: 'Meas_ts_29_502_smf_services_177',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #177 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0178',
    name: 'Meas_ts_29_502_smf_services_178',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #178 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0179',
    name: 'Meas_ts_29_502_smf_services_179',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #179 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0180',
    name: 'Meas_ts_29_502_smf_services_180',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #180 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0181',
    name: 'Meas_ts_29_502_smf_services_181',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #181 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0182',
    name: 'Meas_ts_29_502_smf_services_182',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #182 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0183',
    name: 'Meas_ts_29_502_smf_services_183',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #183 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0184',
    name: 'Meas_ts_29_502_smf_services_184',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #184 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0185',
    name: 'Meas_ts_29_502_smf_services_185',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #185 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0186',
    name: 'Meas_ts_29_502_smf_services_186',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #186 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0187',
    name: 'Meas_ts_29_502_smf_services_187',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #187 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0188',
    name: 'Meas_ts_29_502_smf_services_188',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #188 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0189',
    name: 'Meas_ts_29_502_smf_services_189',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #189 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0190',
    name: 'Meas_ts_29_502_smf_services_190',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #190 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0191',
    name: 'Meas_ts_29_502_smf_services_191',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #191 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0192',
    name: 'Meas_ts_29_502_smf_services_192',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #192 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0193',
    name: 'Meas_ts_29_502_smf_services_193',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #193 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0194',
    name: 'Meas_ts_29_502_smf_services_194',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #194 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0195',
    name: 'Meas_ts_29_502_smf_services_195',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #195 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0196',
    name: 'Meas_ts_29_502_smf_services_196',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #196 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0197',
    name: 'Meas_ts_29_502_smf_services_197',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #197 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0198',
    name: 'Meas_ts_29_502_smf_services_198',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #198 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0199',
    name: 'Meas_ts_29_502_smf_services_199',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #199 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0200',
    name: 'Meas_ts_29_502_smf_services_200',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #200 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0201',
    name: 'Meas_ts_29_502_smf_services_201',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #201 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0202',
    name: 'Meas_ts_29_502_smf_services_202',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #202 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0203',
    name: 'Meas_ts_29_502_smf_services_203',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #203 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0204',
    name: 'Meas_ts_29_502_smf_services_204',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #204 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0205',
    name: 'Meas_ts_29_502_smf_services_205',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #205 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0206',
    name: 'Meas_ts_29_502_smf_services_206',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #206 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0207',
    name: 'Meas_ts_29_502_smf_services_207',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #207 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0208',
    name: 'Meas_ts_29_502_smf_services_208',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #208 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0209',
    name: 'Meas_ts_29_502_smf_services_209',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #209 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0210',
    name: 'Meas_ts_29_502_smf_services_210',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #210 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0211',
    name: 'Meas_ts_29_502_smf_services_211',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #211 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0212',
    name: 'Meas_ts_29_502_smf_services_212',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #212 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0213',
    name: 'Meas_ts_29_502_smf_services_213',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #213 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0214',
    name: 'Meas_ts_29_502_smf_services_214',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #214 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0215',
    name: 'Meas_ts_29_502_smf_services_215',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #215 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0216',
    name: 'Meas_ts_29_502_smf_services_216',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #216 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0217',
    name: 'Meas_ts_29_502_smf_services_217',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #217 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0218',
    name: 'Meas_ts_29_502_smf_services_218',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #218 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0219',
    name: 'Meas_ts_29_502_smf_services_219',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #219 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0220',
    name: 'Meas_ts_29_502_smf_services_220',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #220 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0221',
    name: 'Meas_ts_29_502_smf_services_221',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #221 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0222',
    name: 'Meas_ts_29_502_smf_services_222',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #222 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0223',
    name: 'Meas_ts_29_502_smf_services_223',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #223 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0224',
    name: 'Meas_ts_29_502_smf_services_224',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #224 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0225',
    name: 'Meas_ts_29_502_smf_services_225',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #225 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0226',
    name: 'Meas_ts_29_502_smf_services_226',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #226 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0227',
    name: 'Meas_ts_29_502_smf_services_227',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #227 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0228',
    name: 'Meas_ts_29_502_smf_services_228',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #228 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0229',
    name: 'Meas_ts_29_502_smf_services_229',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #229 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0230',
    name: 'Meas_ts_29_502_smf_services_230',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #230 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0231',
    name: 'Meas_ts_29_502_smf_services_231',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #231 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0232',
    name: 'Meas_ts_29_502_smf_services_232',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #232 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0233',
    name: 'Meas_ts_29_502_smf_services_233',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #233 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0234',
    name: 'Meas_ts_29_502_smf_services_234',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #234 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0235',
    name: 'Meas_ts_29_502_smf_services_235',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #235 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0236',
    name: 'Meas_ts_29_502_smf_services_236',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #236 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0237',
    name: 'Meas_ts_29_502_smf_services_237',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #237 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0238',
    name: 'Meas_ts_29_502_smf_services_238',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #238 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0239',
    name: 'Meas_ts_29_502_smf_services_239',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #239 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0240',
    name: 'Meas_ts_29_502_smf_services_240',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #240 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0241',
    name: 'Meas_ts_29_502_smf_services_241',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #241 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0242',
    name: 'Meas_ts_29_502_smf_services_242',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #242 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0243',
    name: 'Meas_ts_29_502_smf_services_243',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #243 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0244',
    name: 'Meas_ts_29_502_smf_services_244',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #244 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0245',
    name: 'Meas_ts_29_502_smf_services_245',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #245 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0246',
    name: 'Meas_ts_29_502_smf_services_246',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #246 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0247',
    name: 'Meas_ts_29_502_smf_services_247',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #247 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0248',
    name: 'Meas_ts_29_502_smf_services_248',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #248 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0249',
    name: 'Meas_ts_29_502_smf_services_249',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #249 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0250',
    name: 'Meas_ts_29_502_smf_services_250',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #250 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0251',
    name: 'Meas_ts_29_502_smf_services_251',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #251 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0252',
    name: 'Meas_ts_29_502_smf_services_252',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #252 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0253',
    name: 'Meas_ts_29_502_smf_services_253',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #253 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0254',
    name: 'Meas_ts_29_502_smf_services_254',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #254 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0255',
    name: 'Meas_ts_29_502_smf_services_255',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'kbps',
    description: '3GPP standard KPI metric #255 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0256',
    name: 'Meas_ts_29_502_smf_services_256',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'SUM',
    samplingIntervalSec: 15,
    unit: 'ratio',
    description: '3GPP standard KPI metric #256 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0257',
    name: 'Meas_ts_29_502_smf_services_257',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MAX',
    samplingIntervalSec: 15,
    unit: 'count',
    description: '3GPP standard KPI metric #257 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0258',
    name: 'Meas_ts_29_502_smf_services_258',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'PERCENTILE_95',
    samplingIntervalSec: 15,
    unit: 'packets/sec',
    description: '3GPP standard KPI metric #258 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0259',
    name: 'Meas_ts_29_502_smf_services_259',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'MIN',
    samplingIntervalSec: 15,
    unit: 'dBm',
    description: '3GPP standard KPI metric #259 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
  {
    id: 'GPP_TS_29_502_SMF_SERVICES_0260',
    name: 'Meas_ts_29_502_smf_services_260',
    standardReference: 'TS-29-502-SMF-SERVICES',
    aggregationType: 'AVERAGE',
    samplingIntervalSec: 15,
    unit: 'ms',
    description: '3GPP standard KPI metric #260 for 5G System Session Management Services (3GPP TS 29.502). Critical for cellular slicing SLA governance.'
  },
];

export class Ts29502SmfServicesProcessor {
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
