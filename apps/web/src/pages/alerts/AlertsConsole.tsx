import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const initialAlerts = [
  { id: '1', name: 'Edge Link Latency SLA Exceeded', target: 'Disaster Recovery Edge Node', severity: 'HIGH', status: 'OPEN', val: '145ms', threshold: '100ms' },
  { id: '2', name: 'Host Memory Saturation Threshold', target: 'API Cluster Node 01', severity: 'MEDIUM', status: 'ACKNOWLEDGED', val: '88%', threshold: '80%' },
  { id: '3', name: 'Periodic Spatial Index Vacuum', target: 'Spatial DB Primary', severity: 'INFO', status: 'RESOLVED', val: 'Complete', threshold: 'N/A' }
];

export const AlertsConsole: React.FC = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED'>('ALL');

  const filtered = filter === 'ALL' ? alerts : alerts.filter(a => a.status === filter);

  const handleAck = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: 'ACKNOWLEDGED' } : a));
  };

  const handleResolve = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: 'RESOLVED' } : a));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Alerts & Incident Command Console</h1>
          <p className="text-sm text-slate-400">Sliding-window threshold rules, hysteresis, and operator triage workflows</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => alert('Opening Rule Builder Modal')}>+ New Alert Rule</Button>
      </div>

      <div className="flex space-x-2 border-b border-slate-800 pb-2">
        {(['ALL', 'OPEN', 'ACKNOWLEDGED', 'RESOLVED'] as const).map(tab => (
          <Button key={tab} variant={filter === tab ? 'primary' : 'ghost'} size="sm" onClick={() => setFilter(tab)}>
            {tab}
          </Button>
        ))}
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/50 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Severity</th>
                <th className="p-3">Alert Rule</th>
                <th className="p-3">Target Node / Device</th>
                <th className="p-3">Current / Threshold</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filtered.map(a => (
                <tr key={a.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3"><Badge variant={a.severity === 'HIGH' ? 'danger' : (a.severity === 'MEDIUM' ? 'warning' : 'info')}>{a.severity}</Badge></td>
                  <td className="p-3 font-semibold text-slate-100">{a.name}</td>
                  <td className="p-3 text-slate-400">{a.target}</td>
                  <td className="p-3 font-mono">{a.val} / {a.threshold}</td>
                  <td className="p-3"><Badge variant={a.status === 'OPEN' ? 'danger' : (a.status === 'ACKNOWLEDGED' ? 'warning' : 'success')}>{a.status}</Badge></td>
                  <td className="p-3 text-right space-x-2">
                    {a.status === 'OPEN' && <Button variant="secondary" size="sm" onClick={() => handleAck(a.id)}>Acknowledge</Button>}
                    {a.status !== 'RESOLVED' && <Button variant="primary" size="sm" onClick={() => handleResolve(a.id)}>Resolve</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
