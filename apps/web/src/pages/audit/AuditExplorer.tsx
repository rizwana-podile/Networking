import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const mockLogs = [
  { id: '1', user: 'Dr. Sarah Connor', role: 'SUPER_ADMIN', action: 'DEVICE_CREATE', resource: 'DEV-GPS-004', ip: '10.0.0.5', time: '2026-09-09 10:12:00' },
  { id: '2', user: 'Marcus Brody', role: 'NETWORK_ADMIN', action: 'PROBE_TRIGGER', resource: 'node-edge-backup', ip: '10.0.0.12', time: '2026-09-09 10:10:45' },
  { id: '3', user: 'Aiden Pearce', role: 'SECURITY_ANALYST', action: 'API_KEY_GENERATE', resource: 'Key-Prod-01', ip: '10.0.0.8', time: '2026-09-09 10:05:10' }
];

export const AuditExplorer: React.FC = () => {
  const [logs] = useState(mockLogs);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Security Audit Log Explorer</h1>
          <p className="text-sm text-slate-400">Cryptographically verifiable, immutable audit trail of administrative activities</p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => alert('Exporting audit trail...')}>Export Logs</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/50 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Timestamp</th>
                <th className="p-3">User</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action</th>
                <th className="p-3">Target Resource</th>
                <th className="p-3">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {logs.map(l => (
                <tr key={l.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 font-mono text-slate-400">{l.time}</td>
                  <td className="p-3 font-semibold text-slate-100">{l.user}</td>
                  <td className="p-3"><Badge variant="info">{l.role}</Badge></td>
                  <td className="p-3 font-mono text-indigo-400 font-bold">{l.action}</td>
                  <td className="p-3 text-slate-300">{l.resource}</td>
                  <td className="p-3 font-mono text-slate-400">{l.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
