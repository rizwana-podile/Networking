import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface NodeData {
  id: string;
  name: string;
  ip: string;
  type: string;
  region: string;
  status: 'ONLINE' | 'DEGRADED' | 'OFFLINE';
  latency: number;
  loss: number;
  cpu: number;
  ram: number;
  uptime: string;
  lastChecked: string;
}

const initialNodes: NodeData[] = [
  { id: '1', name: 'Core Gateway US-West', ip: '10.0.0.1', type: 'GATEWAY', region: 'us-west-1 (Silicon Valley)', status: 'ONLINE', latency: 4.2, loss: 0.0, cpu: 32, ram: 48, uptime: '99.99%', lastChecked: 'Just now' },
  { id: '2', name: 'Border Router Alpha', ip: '10.0.0.2', type: 'ROUTER', region: 'us-west-1 (Edge Rack A)', status: 'ONLINE', latency: 8.5, loss: 0.0, cpu: 45, ram: 52, uptime: '99.98%', lastChecked: 'Just now' },
  { id: '3', name: 'Distribution Switch Agg-1', ip: '10.0.1.1', type: 'SWITCH', region: 'us-west-1 (DC Floor 2)', status: 'ONLINE', latency: 2.1, loss: 0.0, cpu: 22, ram: 38, uptime: '100%', lastChecked: 'Just now' },
  { id: '4', name: 'API Cluster Node 01', ip: '10.0.2.10', type: 'SERVER', region: 'us-east-1 (N. Virginia)', status: 'ONLINE', latency: 12.4, loss: 0.0, cpu: 65, ram: 78, uptime: '99.95%', lastChecked: 'Just now' },
  { id: '5', name: 'Spatial DB Primary', ip: '10.0.2.20', type: 'DATABASE', region: 'us-east-1 (PostGIS HA)', status: 'ONLINE', latency: 6.8, loss: 0.0, cpu: 58, ram: 82, uptime: '99.99%', lastChecked: 'Just now' },
  { id: '6', name: 'Disaster Recovery Edge', ip: '10.0.9.1', type: 'SERVER', region: 'eu-central-1 (Frankfurt)', status: 'DEGRADED', latency: 145.0, loss: 4.5, cpu: 88, ram: 91, uptime: '98.42%', lastChecked: '12s ago' }
];

export const NocDashboard: React.FC = () => {
  const [nodes, setNodes] = useState<NodeData[]>(initialNodes);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [isSweeping, setIsSweeping] = useState(false);
  const [activeModalNode, setActiveModalNode] = useState<NodeData | null>(null);
  const [pingResult, setPingResult] = useState<{ id: string; time: number } | null>(null);

  const handleManualSweep = () => {
    setIsSweeping(true);
    setTimeout(() => {
      setNodes(prev => prev.map(n => ({
        ...n,
        latency: Math.max(1.5, Math.round((n.latency + (Math.random() * 2 - 1)) * 10) / 10),
        lastChecked: 'Just now'
      })));
      setIsSweeping(false);
    }, 900);
  };

  const handlePingNode = (node: NodeData) => {
    setPingResult({ id: node.id, time: Math.round(node.latency * 0.95 * 10) / 10 });
    setTimeout(() => {
      setPingResult(null);
    }, 4000);
  };

  const filteredNodes = nodes.filter(n => {
    const matchesSearch = n.name.toLowerCase().includes(search.toLowerCase()) || n.ip.includes(search);
    const matchesType = filterType === 'ALL' || (filterType === 'DEGRADED' ? n.status === 'DEGRADED' : n.type === filterType);
    return matchesSearch && matchesType;
  });

  const healthyCount = nodes.filter(n => n.status === 'ONLINE').length;
  const avgLatency = (nodes.reduce((acc, n) => acc + n.latency, 0) / nodes.length).toFixed(1);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              ⚡
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Network Operations Center (NOC)
            </h1>
            <Badge variant="success">LIVE STREAM</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time ICMP ping latencies, backbone packet loss telemetry, and cluster hardware telemetry
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="primary"
            size="sm"
            onClick={handleManualSweep}
            disabled={isSweeping}
            className="shadow-lg shadow-cyan-500/20"
          >
            {isSweeping ? (
              <span className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Probing Nodes...</span>
              </span>
            ) : (
              '⚡ Trigger Manual Sweep'
            )}
          </Button>
        </div>
      </div>

      {/* KPI Cards Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Backbone Status</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">
            {healthyCount} / {nodes.length} ONLINE
          </div>
          <div className="mt-1 text-xs text-slate-400">1 Degraded (Failover Hot)</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Mean RTT Latency</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">{avgLatency} ms</div>
          <div className="mt-1 text-xs text-slate-400">Target SLA: &lt; 25.0 ms</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Avg Packet Loss</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">0.75%</div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">99.25% Transit Reliability</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Prober Frequency</div>
          <div className="mt-2 text-2xl font-extrabold text-indigo-400 font-mono">2,000 ms</div>
          <div className="mt-1 text-xs text-slate-400">ICMP + TCP SYN Sweep</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center space-x-2">
          {['ALL', 'GATEWAY', 'ROUTER', 'SWITCH', 'SERVER', 'DATABASE', 'DEGRADED'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                filterType === type
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search host or IP..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-56 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
          />
        </div>
      </div>

      {/* Live Ping Notification Toast */}
      {pingResult && (
        <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-lg animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>
              ICMP echo reply from <strong>{nodes.find(n => n.id === pingResult.id)?.ip}</strong>: bytes=64 time=
              <strong>{pingResult.time}ms</strong> TTL=64 (Packet Loss: 0%)
            </span>
          </div>
          <button onClick={() => setPingResult(null)} className="text-emerald-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* Node Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredNodes.map(n => {
          const isDegraded = n.status === 'DEGRADED';
          return (
            <div
              key={n.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-base font-bold text-white tracking-tight">{n.name}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
                        {n.ip}
                      </span>
                      <span className="text-[11px] text-slate-400">{n.region}</span>
                    </div>
                  </div>
                  <Badge variant={n.status === 'ONLINE' ? 'success' : 'warning'}>
                    {n.status}
                  </Badge>
                </div>

                {/* Metrics 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Round-Trip Latency</span>
                    <div className="flex items-baseline space-x-1.5 mt-1">
                      <span className={`text-lg font-mono font-extrabold ${isDegraded ? 'text-amber-400' : 'text-slate-100'}`}>
                        {n.latency}
                      </span>
                      <span className="text-slate-500 text-[10px]">ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isDegraded ? 'bg-amber-400' : 'bg-cyan-500'}`}
                        style={{ width: `${Math.min(100, (n.latency / 150) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Packet Loss</span>
                    <div className="flex items-baseline space-x-1.5 mt-1">
                      <span className={`text-lg font-mono font-extrabold ${n.loss > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {n.loss}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${n.loss > 0 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                        style={{ width: `${n.loss > 0 ? n.loss * 10 : 0}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                    <div className="flex justify-between items-center text-[10px] uppercase font-semibold text-slate-400">
                      <span>CPU Load</span>
                      <span className="text-white font-mono">{n.cpu}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${n.cpu > 80 ? 'bg-rose-500' : 'bg-indigo-500'}`}
                        style={{ width: `${n.cpu}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                    <div className="flex justify-between items-center text-[10px] uppercase font-semibold text-slate-400">
                      <span>RAM Utilization</span>
                      <span className="text-white font-mono">{n.ram}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${n.ram > 85 ? 'bg-amber-500' : 'bg-cyan-500'}`}
                        style={{ width: `${n.ram}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Uptime: <span className="text-slate-300 font-semibold">{n.uptime}</span></span>
                  <span>Checked: <span className="text-slate-400">{n.lastChecked}</span></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-end space-x-2">
                <Button variant="secondary" size="sm" onClick={() => handlePingNode(n)}>
                  ⚡ Ping
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setActiveModalNode(n)}>
                  📊 Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Node Details Inspection Modal */}
      {activeModalNode && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-fade-in">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <span>{activeModalNode.name}</span>
                  <Badge variant={activeModalNode.status === 'ONLINE' ? 'success' : 'warning'}>
                    {activeModalNode.status}
                  </Badge>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeModalNode.region} &bull; IP: {activeModalNode.ip}</p>
              </div>
              <button
                onClick={() => setActiveModalNode(null)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1"
              >
                &times;
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Node Architecture</span>
                  <span className="text-slate-200 font-semibold mt-1 block">Linux x86_64 / Kernel 6.1 LTS</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Interface MTU</span>
                  <span className="text-slate-200 font-mono font-semibold mt-1 block">9000 (Jumbo Frames)</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Ingress / Egress:</span>
                  <span className="text-white font-mono font-semibold">4.82 TB / 6.14 TB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Heartbeat Interval:</span>
                  <span className="text-cyan-400 font-mono font-semibold">1,000 ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Failover Route:</span>
                  <span className="text-emerald-400 font-semibold">Hot Standby Engaged</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-3 border-t border-slate-800">
              <Button variant="secondary" size="sm" onClick={() => setActiveModalNode(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  handlePingNode(activeModalNode);
                  setActiveModalNode(null);
                }}
              >
                ⚡ Run Instant Ping
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
