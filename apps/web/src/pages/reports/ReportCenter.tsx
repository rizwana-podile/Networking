import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const ReportCenter: React.FC = () => {
  const downloadCsv = (type: string) => {
    const csvContent = type === 'network'
      ? 'Node,IP,Latency,Status\nCore GW,10.0.0.1,4.2ms,ONLINE\nBorder RTR,10.0.0.2,8.5ms,ONLINE'
      : 'Device,Type,Battery,Status\nCruiser 01,FLEET,94%,MOVING\nDrone X,DRONE,72%,MOVING';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `geonet_${type}_report.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Compliance & Operational Report Center</h1>
          <p className="text-sm text-slate-400">Generate, preview, and export high-fidelity operational SLA and audit reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Network SLA Compliance" subtitle="Rolling availability and downtime log">
          <p className="text-xs text-slate-400 mb-4">Detailed node availability records and outage root-cause summaries.</p>
          <Button variant="primary" size="sm" className="w-full" onClick={() => downloadCsv('network')}>Download CSV</Button>
        </Card>

        <Card title="Fleet Geospatial Telemetry" subtitle="Route logs, speed, and geofence events">
          <p className="text-xs text-slate-400 mb-4">Export coordinate history, distance calculations, and battery profiles.</p>
          <Button variant="primary" size="sm" className="w-full" onClick={() => downloadCsv('fleet')}>Download CSV</Button>
        </Card>

        <Card title="Security & Audit Forensics" subtitle="Tamper-evident administrative activity">
          <p className="text-xs text-slate-400 mb-4">Immutable log of user logins, role assignments, and device creations.</p>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => alert('Exporting encrypted audit PDF...')}>Export PDF</Button>
        </Card>
      </div>
    </div>
  );
};
