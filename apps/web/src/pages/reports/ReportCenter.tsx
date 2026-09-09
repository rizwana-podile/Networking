import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface ReportItem {
  id: string;
  title: string;
  category: 'NETWORK' | 'FLEET' | 'SECURITY' | 'COMPLIANCE';
  description: string;
  frequency: string;
  lastGenerated: string;
  size: string;
}

const reportsList: ReportItem[] = [
  {
    id: 'net-sla',
    title: 'Network SLA & Availability Audit',
    category: 'NETWORK',
    description: 'Detailed node uptime logs, packet drop distributions, and automated SLA breach root-cause analysis.',
    frequency: 'Daily (00:00 UTC)',
    lastGenerated: 'Today, 06:00 UTC',
    size: '1.4 MB'
  },
  {
    id: 'fleet-telemetry',
    title: 'Fleet Geospatial Telemetry & Mileage Log',
    category: 'FLEET',
    description: 'High-frequency GPS coordinate trails, velocity profiles, heading telemetry, and battery depletion metrics.',
    frequency: 'Real-time On-demand',
    lastGenerated: '10 mins ago',
    size: '4.8 MB'
  },
  {
    id: 'sec-forensics',
    title: 'Security & Access Forensics Trail',
    category: 'SECURITY',
    description: 'Cryptographically hashed immutable audit records of administrative logins, token rotations, and role changes.',
    frequency: 'Continuous',
    lastGenerated: 'Today, 08:30 UTC',
    size: '890 KB'
  },
  {
    id: 'geofence-breach',
    title: 'Geofence Incursion & Speed Incident Report',
    category: 'COMPLIANCE',
    description: 'Polygon perimeter entry/exit timestamps, speed limit violations, and dwell-time analytics across monitored zones.',
    frequency: 'Weekly',
    lastGenerated: 'Yesterday',
    size: '2.1 MB'
  },
  {
    id: 'hw-capacity',
    title: 'Hardware Load & Resource Sizing Analysis',
    category: 'NETWORK',
    description: 'Core switch CPU usage, RAM saturation, network interface line-rate traffic, and capacity forecasts.',
    frequency: 'Monthly',
    lastGenerated: '3 days ago',
    size: '3.6 MB'
  },
  {
    id: 'api-quota',
    title: 'Developer API Token & Quota Consumption',
    category: 'SECURITY',
    description: 'Aggregated HTTP request volumes, per-minute rate-limit throttle events, and webhook delivery success rates.',
    frequency: 'Daily',
    lastGenerated: 'Today, 04:00 UTC',
    size: '540 KB'
  }
];

export const ReportCenter: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'NETWORK' | 'FLEET' | 'SECURITY' | 'COMPLIANCE'>('ALL');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (report: ReportItem, format: 'csv' | 'pdf') => {
    let content = '';
    let filename = `geonet_${report.id}_${Date.now()}.${format}`;

    if (format === 'csv') {
      if (report.category === 'NETWORK') {
        content = `Timestamp,NodeName,IPAddress,PingRTT_ms,PacketLossPercent,Status\n2026-09-09T08:00:00Z,Core Gateway US-West,10.0.0.1,4.2,0.0,ONLINE\n2026-09-09T08:00:00Z,Border Router Alpha,10.0.0.2,8.5,0.0,ONLINE\n2026-09-09T08:00:00Z,Spatial DB PostGIS,10.0.2.20,6.8,0.0,ONLINE\n2026-09-09T08:00:00Z,DR Edge Node,10.0.9.1,145.0,4.5,DEGRADED\n`;
      } else if (report.category === 'FLEET') {
        content = `Timestamp,DeviceId,DeviceName,Latitude,Longitude,Speed_kmh,BatteryPercent,Status\n2026-09-09T08:15:20Z,DEV-GPS-001,Highway Patrol Cruiser,37.7749,-122.4194,54.2,92,MOVING\n2026-09-09T08:15:20Z,DEV-GPS-002,Rapid Response Medic 4,37.7833,-122.4167,48.0,85,MOVING\n2026-09-09T08:15:20Z,DEV-GPS-003,Surveillance Drone X1,37.7691,-122.4467,65.8,74,AIRBORNE\n`;
      } else {
        content = `Timestamp,AdminUser,Role,Action,TargetResource,SourceIP,Status\n2026-09-09T07:45:00Z,Dr. Sarah Connor,SUPER_ADMIN,KEY_ROTATE,api-key-prod-01,10.0.0.5,SUCCESS\n2026-09-09T07:50:12Z,Marcus Brody,NETWORK_ADMIN,MANUAL_SWEEP,cluster-edge,10.0.0.12,SUCCESS\n`;
      }
    } else {
      content = `%PDF-1.4\n% GeoNet Sentinel Enterprise Compliance Report\n% Document ID: ${report.id.toUpperCase()}\n% Generated: ${new Date().toISOString()}\n% Classification: CONFIDENTIAL & PROPRIETARY\n\nTitle: ${report.title}\nCategory: ${report.category}\nSLA Compliance: 99.98%\nSummary: All core telemetry channels verified within ISO-27001 parameters.\n`;
    }

    const mimeType = format === 'csv' ? 'text/csv' : 'application/pdf';
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(`Generated and downloaded ${filename} (${report.title})`);
    setTimeout(() => setDownloadSuccess(null), 4500);
  };

  const filteredReports = reportsList.filter(r => filter === 'ALL' || r.category === filter);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              📊
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Compliance & Operational Report Center
            </h1>
            <Badge variant="success">SCHEDULED ACTIVE</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Generate, preview, and export high-fidelity operational SLA, geospatial audit, and compliance reports
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleDownload(reportsList[0], 'csv')}
            className="shadow-lg shadow-cyan-500/20"
          >
            📥 Instant Master Export
          </Button>
        </div>
      </div>

      {/* Success Notification */}
      {downloadSuccess && (
        <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-lg animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{downloadSuccess}</span>
          </div>
          <button onClick={() => setDownloadSuccess(null)} className="text-emerald-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center space-x-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
        {(['ALL', 'NETWORK', 'FLEET', 'SECURITY', 'COMPLIANCE'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
              filter === cat
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReports.map(report => (
          <div
            key={report.id}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-slate-700 transition"
          >
            <div>
              <div className="flex items-start justify-between">
                <Badge
                  variant={
                    report.category === 'NETWORK'
                      ? 'info'
                      : report.category === 'FLEET'
                      ? 'success'
                      : report.category === 'SECURITY'
                      ? 'danger'
                      : 'warning'
                  }
                >
                  {report.category}
                </Badge>
                <span className="text-[11px] font-mono text-slate-500">{report.size}</span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight mt-3">{report.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{report.description}</p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] space-y-1 text-slate-400">
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="text-slate-200 font-semibold">{report.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Generated:</span>
                  <span className="text-slate-200">{report.lastGenerated}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center space-x-2">
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => handleDownload(report, 'csv')}
              >
                📥 CSV
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => handleDownload(report, 'pdf')}
              >
                📄 PDF
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Audit Export History Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <h3 className="text-base font-bold text-white tracking-tight mb-1">Recent Report Generation Archives</h3>
        <p className="text-xs text-slate-400 mb-4">Cryptographically signed logs of all downloadable exports for compliance verification</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Generated Timestamp</th>
                <th className="p-3">Report Document</th>
                <th className="p-3">Format</th>
                <th className="p-3">File Size</th>
                <th className="p-3">Requested By</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-mono text-slate-400">2026-09-09 08:30:15 UTC</td>
                <td className="p-3 font-semibold text-white">Network SLA Compliance Matrix</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-400 font-bold border border-cyan-800/50">CSV</span></td>
                <td className="p-3 font-mono text-slate-400">1.4 MB</td>
                <td className="p-3 text-slate-300">Dr. Sarah Connor (Super Admin)</td>
                <td className="p-3 text-right">
                  <Button variant="secondary" size="sm" onClick={() => handleDownload(reportsList[0], 'csv')}>
                    Re-download
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-mono text-slate-400">2026-09-09 06:12:00 UTC</td>
                <td className="p-3 font-semibold text-white">GPS Fleet Waypoint Trail Record</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-400 font-bold border border-cyan-800/50">CSV</span></td>
                <td className="p-3 font-mono text-slate-400">4.8 MB</td>
                <td className="p-3 text-slate-300">Marcus Brody (Operator)</td>
                <td className="p-3 text-right">
                  <Button variant="secondary" size="sm" onClick={() => handleDownload(reportsList[1], 'csv')}>
                    Re-download
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-mono text-slate-400">2026-09-08 23:59:59 UTC</td>
                <td className="p-3 font-semibold text-white">SOC-2 Type II Monthly Compliance Audit</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] bg-rose-950 text-rose-400 font-bold border border-rose-800/50">PDF</span></td>
                <td className="p-3 font-mono text-slate-400">12.5 MB</td>
                <td className="p-3 text-slate-300">Automated System Scheduler</td>
                <td className="p-3 text-right">
                  <Button variant="secondary" size="sm" onClick={() => handleDownload(reportsList[2], 'pdf')}>
                    Re-download
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
