import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export const ExecutiveDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    totalDevices: 25,
    onlineDevices: 24,
    movingDevices: 18,
    totalNodes: 15,
    onlineNodes: 14,
    activeAlerts: 2,
    criticalAlerts: 0,
    overallUptime: 99.95,
    avgLatencyMs: 12.4
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Executive Operations Center</h1>
          <p className="text-sm text-slate-400">Real-time telemetry aggregation across global fleet and datacenter network</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="success">ALL SYSTEMS OPTIMAL</Badge>
          <Button variant="secondary" size="sm" onClick={() => alert('Refreshing live metrics...')}>Refresh</Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title="Tracked Fleet" subtitle="Active authorized GPS trackers">
          <div className="text-3xl font-extrabold text-white mt-1">{metrics.totalDevices}</div>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
            <span className="text-emerald-400">{metrics.movingDevices} Moving</span>
            <span>{metrics.onlineDevices} Connected</span>
          </div>
        </Card>

        <Card title="Network Infrastructure" subtitle="Datacenter & edge nodes">
          <div className="text-3xl font-extrabold text-white mt-1">{metrics.totalNodes} Nodes</div>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
            <span className="text-emerald-400">{metrics.onlineNodes} Healthy</span>
            <span className="text-amber-400">1 Degraded</span>
          </div>
        </Card>

        <Card title="Average Latency" subtitle="Core backbone RTT">
          <div className="text-3xl font-extrabold text-indigo-400 mt-1">{metrics.avgLatencyMs} ms</div>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
            <span>p95: 18.2 ms</span>
            <span className="text-emerald-400">0.0% Loss</span>
          </div>
        </Card>

        <Card title="System Availability SLA" subtitle="Rolling 30-day compliance">
          <div className="text-3xl font-extrabold text-emerald-400 mt-1">{metrics.overallUptime}%</div>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">
            <span>Target: 99.90%</span>
            <Badge variant="success">SLA Met</Badge>
          </div>
        </Card>
      </div>

      {/* Incident and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card title="Active Infrastructure Alarms" subtitle="Hysteresis evaluated threshold breaches">
          <div className="space-y-3">
            <div className="p-3 bg-slate-800/60 rounded-lg border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Badge variant="warning">HIGH</Badge>
                  <span className="text-sm font-semibold text-slate-200">Edge Link Latency SLA Exceeded</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Disaster Recovery Edge Node • 145ms &gt; 100ms</div>
              </div>
              <Button size="sm" variant="secondary" onClick={() => alert('Acknowledging alert...')}>Ack</Button>
            </div>
            <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <Badge variant="info">INFO</Badge>
                  <span className="text-sm font-semibold text-slate-200">Periodic PostGIS Spatial Index Vacuum</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Spatial DB Primary • Routine maintenance</div>
              </div>
              <span className="text-xs text-slate-400">Auto</span>
            </div>
          </div>
        </Card>

        <Card title="Live Ingestion Throughput" subtitle="GPS coordinate streams & probe pings">
          <div className="h-44 flex flex-col justify-center items-center bg-slate-950/40 rounded-lg border border-slate-800/80 p-4 text-center">
            <div className="text-2xl font-bold text-indigo-400">128 msgs/sec</div>
            <div className="text-xs text-slate-400 mt-1">WebSocket & REST Ingestion Pipeline Active</div>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-indigo-500 h-full w-2/3 rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between w-full text-[10px] text-slate-500 mt-2">
              <span>Ingestion Buffer: 34%</span>
              <span>HMAC Pass Rate: 100%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
