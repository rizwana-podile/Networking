import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const SimulationConsole: React.FC = () => {
  const [simState, setSimState] = useState<'RUNNING' | 'PAUSED' | 'STOPPED'>('RUNNING');

  const handleAction = (action: 'start' | 'pause' | 'stop' | 'reset') => {
    if (action === 'start') setSimState('RUNNING');
    else if (action === 'pause') setSimState('PAUSED');
    else if (action === 'stop') setSimState('STOPPED');
    else if (action === 'reset') { setSimState('RUNNING'); alert('Simulation reset to baseline waypoint origin.'); }
  };

  const injectFault = (type: string) => {
    alert(`Fault Injected: Simulated [${type}] across Edge Cluster nodes.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Fleet & Network Simulation Orchestrator</h1>
          <p className="text-sm text-slate-400">Safe demonstration environment for GPS movement, packet degradation, and fault recovery</p>
        </div>
        <Badge variant={simState === 'RUNNING' ? 'success' : 'warning'}>SIMULATION {simState}</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Simulator Controls" subtitle="GPS mover and telemetry broadcast frequency">
          <div className="flex space-x-3 mb-6">
            <Button variant="primary" size="sm" onClick={() => handleAction('start')}>▶️ Start</Button>
            <Button variant="secondary" size="sm" onClick={() => handleAction('pause')}>⏸️ Pause</Button>
            <Button variant="danger" size="sm" onClick={() => handleAction('stop')}>⏹️ Stop</Button>
            <Button variant="secondary" size="sm" onClick={() => handleAction('reset')}>🔄 Reset to Origin</Button>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Simulated Fleet Size</span>
              <span className="font-bold text-white">25 GPS Trackers</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Telemetry Ingestion Tick</span>
              <span className="font-bold text-indigo-400">1,500 ms</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-400">Simulated Network Nodes</span>
              <span className="font-bold text-white">15 Infrastructure Hosts</span>
            </div>
          </div>
        </Card>

        <Card title="Fault Injection Console" subtitle="Trigger transient failures to test alarms">
          <div className="space-y-3">
            <Button variant="secondary" size="sm" className="w-full justify-between" onClick={() => injectFault('High Latency Spike (>150ms)')}>
              <span>⚡ Inject Latency Spike (>150ms)</span>
              <Badge variant="warning">Spike</Badge>
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-between" onClick={() => injectFault('Packet Loss Drop (15%)')}>
              <span>📉 Inject 15% Packet Loss</span>
              <Badge variant="danger">Loss</Badge>
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-between" onClick={() => injectFault('Node Down Outage')}>
              <span>🔌 Simulate Node Outage</span>
              <Badge variant="danger">Down</Badge>
            </Button>
            <Button variant="primary" size="sm" className="w-full" onClick={() => alert('All injected network faults restored to normal.')}>
              ✅ Auto-Recover All Nodes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
