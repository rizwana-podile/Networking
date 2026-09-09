import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const mockNodes = [
  { id: '1', name: 'Core Gateway US-West', ip: '10.0.0.1', type: 'GATEWAY', status: 'ONLINE', latency: 4.2, loss: 0.0, cpu: 32, ram: 48 },
  { id: '2', name: 'Border Router Alpha', ip: '10.0.0.2', type: 'ROUTER', status: 'ONLINE', latency: 8.5, loss: 0.0, cpu: 45, ram: 52 },
  { id: '3', name: 'Distribution Switch Agg-1', ip: '10.0.1.1', type: 'SWITCH', status: 'ONLINE', latency: 2.1, loss: 0.0, cpu: 22, ram: 38 },
  { id: '4', name: 'API Cluster Node 01', ip: '10.0.2.10', type: 'SERVER', status: 'ONLINE', latency: 12.4, loss: 0.0, cpu: 65, ram: 78 },
  { id: '5', name: 'Spatial DB Primary', ip: '10.0.2.20', type: 'DATABASE', status: 'ONLINE', latency: 6.8, loss: 0.0, cpu: 58, ram: 82 },
  { id: '6', name: 'Disaster Recovery Edge', ip: '10.0.9.1', type: 'SERVER', status: 'DEGRADED', latency: 145.0, loss: 4.5, cpu: 88, ram: 91 }
];

export const NocDashboard: React.FC = () => {
  const [nodes, setNodes] = useState(mockNodes);

  const handleManualProbe = () => {
    alert('Dispatched manual ICMP & TCP health probe sweeps across all 6 nodes.');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Network Operations Center (NOC)</h1>
          <p className="text-sm text-slate-400">Live ping latency, packet loss telemetry, and hardware load monitoring</p>
        </div>
        <Button variant="primary" size="sm" onClick={handleManualProbe}>Trigger Manual Sweep</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {nodes.map(n => (
          <Card key={n.id} title={n.name} subtitle={`${n.type} • ${n.ip}`} action={<Badge variant={n.status === 'ONLINE' ? 'success' : 'warning'}>{n.status}</Badge>}>
            <div className="grid grid-cols-2 gap-3 mt-2 text-xs">
              <div className="p-2.5 bg-slate-800/60 rounded-lg">
                <span className="text-slate-400 block">Round-Trip Latency</span>
                <span className={`text-base font-bold ${n.latency > 100 ? 'text-amber-400' : 'text-slate-100'}`}>{n.latency} ms</span>
              </div>
              <div className="p-2.5 bg-slate-800/60 rounded-lg">
                <span className="text-slate-400 block">Packet Loss</span>
                <span className={`text-base font-bold ${n.loss > 0 ? 'text-rose-400' : 'text-slate-100'}`}>{n.loss}%</span>
              </div>
              <div className="p-2.5 bg-slate-800/60 rounded-lg">
                <span className="text-slate-400 block">CPU Load</span>
                <span className="text-base font-bold text-slate-100">{n.cpu}%</span>
              </div>
              <div className="p-2.5 bg-slate-800/60 rounded-lg">
                <span className="text-slate-400 block">RAM Utilization</span>
                <span className="text-base font-bold text-slate-100">{n.ram}%</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end space-x-2">
              <Button variant="secondary" size="sm" onClick={() => alert(`Probing ${n.name}...`)}>Ping</Button>
              <Button variant="secondary" size="sm" onClick={() => alert(`Opening metrics for ${n.name}...`)}>Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
