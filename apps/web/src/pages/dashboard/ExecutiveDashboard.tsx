import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const ExecutiveDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [metrics, setMetrics] = useState({
    activeDevices: 8,
    movingDevices: 6,
    networkNodes: 12,
    healthyNodes: 11,
    avgLatencyMs: 8.4,
    slaPercent: 99.9,
    activeAlerts: 2
  });
  const [devices, setDevices] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    // Poll real device and alert states
    const fetchData = async () => {
      try {
        const [devRes, alertRes] = await Promise.all([
          fetch('http://localhost:4000/api/v1/devices'),
          fetch('http://localhost:4000/api/v1/alerts')
        ]);
        const devData = await devRes.json();
        const alertData = await alertRes.json();

        if (devData.items) {
          setDevices(devData.items);
          const moving = devData.items.filter((d: any) => (d.speedKph || 0) > 5).length;
          setMetrics(prev => ({
            ...prev,
            activeDevices: devData.total || devData.items.length,
            movingDevices: moving
          }));
        }
        if (alertData.items) {
          setAlerts(alertData.items);
          setMetrics(prev => ({ ...prev, activeAlerts: alertData.total || alertData.items.length }));
        }
      } catch (e) {
        console.error('Failed to update executive metrics:', e);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Executive Welcome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Good morning, {user?.name?.split(' ')[0] || 'Sarah'}
            </h1>
            <Badge variant="success">PRODUCTION CLUSTER</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            System Overview &bull; Real-time telemetry aggregation across global fleet and edge datacenter nodes
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button size="sm" variant="secondary" onClick={() => navigate('/tracking')}>
            📍 Fleet Radar
          </Button>
          <Button size="sm" variant="primary" onClick={() => navigate('/network')}>
            🌐 NOC Console
          </Button>
        </div>
      </div>

      {/* 5 Executive KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Devices</div>
          <div className="mt-2 text-2xl font-extrabold text-white">{metrics.activeDevices}</div>
          <div className="mt-1 text-xs text-emerald-400 font-semibold">{metrics.movingDevices} Moving Now</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Network Nodes</div>
          <div className="mt-2 text-2xl font-extrabold text-white">{metrics.networkNodes}</div>
          <div className="mt-1 text-xs text-cyan-400 font-semibold">{metrics.healthyNodes} Healthy Online</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Backbone Latency</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">{metrics.avgLatencyMs} ms</div>
          <div className="mt-1 text-xs text-slate-400">p95: 14.2 ms &bull; 0.0% Loss</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Rolling SLA</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">{metrics.slaPercent}%</div>
          <div className="mt-1 text-xs text-slate-400">30-Day Compliance</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg col-span-2 md:col-span-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Alarms</div>
          <div className="mt-2 text-2xl font-extrabold text-rose-400 font-mono">{metrics.activeAlerts}</div>
          <div className="mt-1 text-xs text-amber-400 font-semibold">1 Edge SLA Spike</div>
        </div>
      </div>

      {/* Main Row: Live Fleet Overview & Network Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Fleet Overview */}
        <div className="lg:col-span-2">
          <Card
            title="Live Fleet Overview"
            subtitle="Real-time GPS coordinates stream from active vehicles and drones"
            action={
              <button onClick={() => navigate('/tracking')} className="text-xs text-cyan-400 hover:text-cyan-300 font-bold">
                Launch Full Map &rarr;
              </button>
            }
          >
            <div className="space-y-4">
              <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px]"></div>
                <div className="absolute w-56 h-56 rounded-full border border-cyan-500/20 animate-pulse"></div>
                <div className="absolute w-36 h-36 rounded-full border border-cyan-500/30"></div>

                {devices.slice(0, 5).map((d, i) => {
                  const pos = [
                    { top: '35%', left: '40%' },
                    { top: '60%', left: '35%' },
                    { top: '45%', left: '65%' },
                    { top: '68%', left: '58%' },
                    { top: '30%', left: '55%' }
                  ][i] || { top: '50%', left: '50%' };
                  return (
                    <div
                      key={d.deviceId || i}
                      style={{ top: pos.top, left: pos.left }}
                      onClick={() => navigate(`/tracking?deviceId=${d.deviceId || d.id}`)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                    >
                      <div className="w-7 h-7 rounded-full bg-cyan-600 border-2 border-white flex items-center justify-center text-xs shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition">
                        🚗
                      </div>
                      <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-[10px] text-white whitespace-nowrap shadow opacity-85 group-hover:opacity-100 font-semibold">
                        {d.name?.split(' ')[0]} &bull; {(d.speedKph || 42).toFixed(0)} km/h
                      </div>
                    </div>
                  );
                })}

                <div className="absolute bottom-2 left-2 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded text-[10px] text-slate-400 border border-slate-800">
                  San Francisco Metropolitan Area &bull; 37.7749° N, 122.4194° W
                </div>
              </div>

              {/* Quick Fleet Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Fleet Status</div>
                  <div className="text-emerald-400 font-bold mt-0.5">100% Online</div>
                </div>
                <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Avg Velocity</div>
                  <div className="text-cyan-400 font-mono font-bold mt-0.5">44.8 km/h</div>
                </div>
                <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Signal Health</div>
                  <div className="text-white font-bold mt-0.5">-68 dBm (4G)</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* System & Telemetry Subsystems Health */}
        <div>
          <Card title="System Subsystems Status" subtitle="High-availability cluster health indicators">
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Spatial Database</span>
                </div>
                <Badge variant="success">PostGIS UP (1.2ms)</Badge>
              </div>

              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">WebSocket Gateway</span>
                </div>
                <Badge variant="success">Socket.IO LIVE</Badge>
              </div>

              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Background Worker</span>
                </div>
                <Badge variant="success">Prober Daemon</Badge>
              </div>

              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Fleet Mover Engine</span>
                </div>
                <Badge variant="info">Autonomous Active</Badge>
              </div>

              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Telemetry Buffer</span>
                </div>
                <Badge variant="success">Redis In-Memory</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Alerts Section */}
      <Card
        title="Recent Operational Incidents"
        subtitle="Automated threshold violations and SLA breach warnings"
        action={
          <button onClick={() => navigate('/alerts')} className="text-xs text-cyan-400 hover:text-cyan-300 font-bold">
            Incident Console &rarr;
          </button>
        }
      >
        <div className="space-y-3">
          {alerts.map(a => (
            <div
              key={a.id}
              className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center space-x-3">
                <Badge variant={a.severity === 'HIGH' ? 'danger' : 'warning'}>{a.severity}</Badge>
                <div>
                  <div className="font-bold text-white">{a.ruleName || a.name || 'SLA Latency Spike'}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{a.targetName || 'Disaster Recovery Edge Node'} &bull; {a.message || '145ms > 100ms threshold'}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-slate-500">Auto-detected by prober</span>
                <Button size="sm" variant="secondary" onClick={() => navigate('/alerts')}>
                  Triage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
