import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface SimLog {
  time: string;
  type: 'INFO' | 'WARN' | 'FAULT' | 'RECOVERY';
  message: string;
}

export const SimulationConsole: React.FC = () => {
  const [simState, setSimState] = useState<'RUNNING' | 'PAUSED' | 'STOPPED'>('RUNNING');
  const [tickRate, setTickRate] = useState<number>(1500);
  const [activeFaults, setActiveFaults] = useState<string[]>([]);
  const [logs, setLogs] = useState<SimLog[]>([
    { time: '10:30:00', type: 'INFO', message: 'Fleet mover initialized with 25 GPS agents.' },
    { time: '10:30:02', type: 'INFO', message: 'Autonomous trajectory solver engaged (SF Bay perimeter).' },
    { time: '10:30:15', type: 'INFO', message: 'Telemetry broadcast tick confirmed at 1,500ms.' }
  ]);

  const addLog = (type: 'INFO' | 'WARN' | 'FAULT' | 'RECOVERY', message: string) => {
    const time = new Date().toTimeString().split(' ')[0];
    setLogs(prev => [{ time, type, message }, ...prev.slice(0, 19)]);
  };

  const handleAction = (action: 'start' | 'pause' | 'stop' | 'reset') => {
    if (action === 'start') {
      setSimState('RUNNING');
      addLog('INFO', 'Simulation resumed. GPS coordinate streaming active.');
    } else if (action === 'pause') {
      setSimState('PAUSED');
      addLog('WARN', 'Simulation paused. Vehicle coordinates frozen.');
    } else if (action === 'stop') {
      setSimState('STOPPED');
      addLog('WARN', 'Simulation engine halted.');
    } else if (action === 'reset') {
      setSimState('RUNNING');
      setActiveFaults([]);
      addLog('RECOVERY', 'Simulation reset to baseline waypoint coordinates.');
    }
  };

  const injectFault = (faultKey: string, description: string) => {
    if (!activeFaults.includes(faultKey)) {
      setActiveFaults(prev => [...prev, faultKey]);
    }
    addLog('FAULT', `Chaos Injected: ${description}`);
  };

  const recoverAllFaults = () => {
    setActiveFaults([]);
    addLog('RECOVERY', 'All simulated network & vehicle faults recovered to nominal baseline.');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              🎮
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Fleet & Network Simulation Orchestrator
            </h1>
            <Badge variant={simState === 'RUNNING' ? 'success' : simState === 'PAUSED' ? 'warning' : 'danger'}>
              SIMULATION {simState}
            </Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Safe demonstration sandbox for autonomous GPS route animation, network latency spikes, and chaos engineering
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant={simState === 'RUNNING' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => handleAction('start')}
          >
            ▶️ Start
          </Button>
          <Button
            variant={simState === 'PAUSED' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => handleAction('pause')}
          >
            ⏸️ Pause
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleAction('stop')}
          >
            ⏹️ Stop
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleAction('reset')}
          >
            🔄 Reset Origin
          </Button>
        </div>
      </div>

      {/* KPI & Controls Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Simulated Fleet</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">25 Units</div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">Patrols, Medics & Drones</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Broadcast Tick</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">{tickRate} ms</div>
          <div className="mt-1 text-xs text-slate-400">WebSocket Dispatch Interval</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Faults Injected</div>
          <div className="mt-2 text-2xl font-extrabold text-rose-400 font-mono">{activeFaults.length} Faults</div>
          <div className="mt-1 text-xs text-amber-400 font-medium">Chaos Testing Sandbox</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Sim Engine Status</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">AUTONOMOUS</div>
          <div className="mt-1 text-xs text-slate-400">Continuous Orbit Loop</div>
        </div>
      </div>

      {/* Main Grid: Telemetry Rates & Chaos Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simulator Parameters */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Ingestion & Telemetry Speed</h3>
              <p className="text-xs text-slate-400">Tune the frequency of synthetic coordinate generation</p>
            </div>
            <Badge variant="info">AUTONOMOUS LOOP</Badge>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">
                Broadcast Frequency: <span className="text-cyan-400 font-mono font-bold">{tickRate} ms</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[500, 1000, 1500, 3000].map(rate => (
                  <button
                    key={rate}
                    onClick={() => {
                      setTickRate(rate);
                      addLog('INFO', `Ingestion tick adjusted to ${rate}ms.`);
                    }}
                    className={`p-2.5 rounded-xl border text-center font-mono font-bold transition ${
                      tickRate === rate
                        ? 'bg-cyan-600 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {rate} ms
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Simulated Geographic Center:</span>
                <span className="text-white font-semibold">San Francisco Bay Area (37.7749° N, 122.4194° W)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Mean Fleet Speed:</span>
                <span className="text-cyan-400 font-mono font-semibold">45.0 km/h</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">GPS Drift Variance:</span>
                <span className="text-white font-mono font-semibold">&plusmn; 0.0004° Lat/Lng</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Prober Thread:</span>
                <span className="text-emerald-400 font-semibold">Background Daemon Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chaos Engineering & Fault Injection */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Chaos Engineering Console</h3>
              <p className="text-xs text-slate-400">Inject transient network faults to test alert thresholds</p>
            </div>
            {activeFaults.length > 0 && (
              <Badge variant="danger">{activeFaults.length} Active</Badge>
            )}
          </div>

          <div className="space-y-2.5">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-xs">⚡ Core Latency Spike</div>
                <div className="text-[11px] text-slate-400">Force round-trip latency to 180ms across Edge Gateways</div>
              </div>
              <Button
                variant={activeFaults.includes('LATENCY') ? 'danger' : 'secondary'}
                size="sm"
                onClick={() => injectFault('LATENCY', 'Core Gateway Latency spiked to 180ms')}
              >
                {activeFaults.includes('LATENCY') ? 'Injected' : 'Inject Spike'}
              </Button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-xs">📉 15% Packet Loss Drop</div>
                <div className="text-[11px] text-slate-400">Simulate transient buffer drops on Border Routers</div>
              </div>
              <Button
                variant={activeFaults.includes('PACKET_LOSS') ? 'danger' : 'secondary'}
                size="sm"
                onClick={() => injectFault('PACKET_LOSS', '15% packet drop applied to router interfaces')}
              >
                {activeFaults.includes('PACKET_LOSS') ? 'Injected' : 'Inject Loss'}
              </Button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-xs">🔌 Edge Node Outage</div>
                <div className="text-[11px] text-slate-400">Simulate Frankfurt DR secondary failover failure</div>
              </div>
              <Button
                variant={activeFaults.includes('NODE_DOWN') ? 'danger' : 'secondary'}
                size="sm"
                onClick={() => injectFault('NODE_DOWN', 'Frankfurt DR node taken offline')}
              >
                {activeFaults.includes('NODE_DOWN') ? 'Injected' : 'Simulate Outage'}
              </Button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-xs">🚨 Geofence Boundary Incursion</div>
                <div className="text-[11px] text-slate-400">Trigger synthetic boundary alert on Patrol Cruiser 1</div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => injectFault('GEOFENCE', 'DEV-GPS-001 breached San Francisco Restricted Perimeter')}
              >
                Trigger Breach
              </Button>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                className="w-full shadow-lg shadow-cyan-500/20"
                onClick={recoverAllFaults}
              >
                ✅ Auto-Recover All Systems & Clear Faults
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Simulation Event Log */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h3 className="text-base font-bold text-white tracking-tight">Simulation Telemetry Event Stream</h3>
          </div>
          <button
            onClick={() => setLogs([])}
            className="text-xs text-slate-500 hover:text-slate-300"
          >
            Clear Log
          </button>
        </div>

        <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-slate-800 h-48 overflow-y-auto space-y-1.5 font-mono text-xs">
          {logs.length === 0 ? (
            <div className="text-slate-600 text-center py-6">No events recorded. Simulation running nominally.</div>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-slate-600">[{log.time}]</span>
                <span
                  className={`font-bold ${
                    log.type === 'FAULT'
                      ? 'text-rose-400'
                      : log.type === 'WARN'
                      ? 'text-amber-400'
                      : log.type === 'RECOVERY'
                      ? 'text-emerald-400'
                      : 'text-cyan-400'
                  }`}
                >
                  [{log.type}]
                </span>
                <span className="text-slate-300">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
