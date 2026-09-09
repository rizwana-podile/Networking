import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const ApiManagement: React.FC = () => {
  const [keys, setKeys] = useState([
    { id: '1', name: 'Production Telemetry Pipeline', prefix: 'geonet_live_8f3a...', requests: 14250, limit: '120/min', status: 'ACTIVE' },
    { id: '2', name: 'NOC Grafana Integration', prefix: 'geonet_live_2c1b...', requests: 8420, limit: '60/min', status: 'ACTIVE' }
  ]);

  const handleGenerate = () => {
    const name = prompt('Enter API key name:');
    if (!name) return;
    const newKey = { id: String(Date.now()), name, prefix: `geonet_live_${Date.now().toString().slice(-6)}...`, requests: 0, limit: '120/min', status: 'ACTIVE' };
    setKeys([...keys, newKey]);
    alert('API key generated successfully! Make sure to copy the secret key as it will not be shown again.');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Developer API & Webhook Management</h1>
          <p className="text-sm text-slate-400">Scoped API tokens, per-minute quotas, and outbound webhook delivery queues</p>
        </div>
        <Button variant="primary" size="sm" onClick={handleGenerate}>+ Generate API Key</Button>
      </div>

      <Card title="Active API Keys" subtitle="HMAC and token-based client access">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/50 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Key Name</th>
                <th className="p-3">Key Prefix</th>
                <th className="p-3">Requests Served</th>
                <th className="p-3">Rate Limit</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {keys.map(k => (
                <tr key={k.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 font-semibold text-slate-100">{k.name}</td>
                  <td className="p-3 font-mono text-indigo-400">{k.prefix}</td>
                  <td className="p-3 text-slate-300">{k.requests.toLocaleString()}</td>
                  <td className="p-3 text-slate-400">{k.limit}</td>
                  <td className="p-3"><Badge variant="success">{k.status}</Badge></td>
                  <td className="p-3 text-right">
                    <Button variant="danger" size="sm" onClick={() => setKeys(keys.filter(x => x.id !== k.id))}>Revoke</Button>
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
