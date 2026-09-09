import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface TopologyNode {
  id: string;
  label: string;
  type: string;
  ip: string;
  x: number;
  y: number;
  status: 'ONLINE' | 'DEGRADED' | 'ISOLATED';
  description: string;
  interface: string;
}

interface TopologyLink {
  from: string;
  to: string;
  latency: string;
  status: 'OPTIMAL' | 'DEGRADED' | 'ISOLATED';
}

const initialNodes: TopologyNode[] = [
  { id: 'gw', label: 'Core Gateway', type: 'GATEWAY', ip: '10.0.0.1', x: 400, y: 70, status: 'ONLINE', description: 'Primary edge ingress point for WAN traffic with redundant BGP peers.', interface: 'eth0 (10Gbps)' },
  { id: 'rtr', label: 'Border Router', type: 'ROUTER', ip: '10.0.0.2', x: 400, y: 185, status: 'ONLINE', description: 'OSPF border routing layer distributing to internal core switches.', interface: 'eth1 (10Gbps)' },
  { id: 'sw', label: 'Distribution Switch', type: 'SWITCH', ip: '10.0.1.1', x: 400, y: 300, status: 'ONLINE', description: 'Layer 3 aggregation switch with zero packet drop configuration.', interface: 'vlan100 (40Gbps)' },
  { id: 'api', label: 'API Cluster Node', type: 'SERVER', ip: '10.0.2.10', x: 250, y: 420, status: 'ONLINE', description: 'Stateless Node.js / Express microservice cluster handling telemetry.', interface: 'eth0 (2.5Gbps)' },
  { id: 'db', label: 'Spatial PostGIS DB', type: 'DATABASE', ip: '10.0.2.20', x: 550, y: 420, status: 'ONLINE', description: 'Primary spatial database engine indexing live GPS coordinates and tracks.', interface: 'bond0 (20Gbps)' },
  { id: 'dr', label: 'Disaster Recovery Edge', type: 'SERVER', ip: '10.0.9.1', x: 130, y: 190, status: 'DEGRADED', description: 'Secondary backup replication node operating over transatlantic tunnel.', interface: 'tun0 (1Gbps)' }
];

const initialLinks: TopologyLink[] = [
  { from: 'gw', to: 'rtr', latency: '2.5ms', status: 'OPTIMAL' },
  { from: 'rtr', to: 'sw', latency: '1.8ms', status: 'OPTIMAL' },
  { from: 'sw', to: 'api', latency: '3.2ms', status: 'OPTIMAL' },
  { from: 'sw', to: 'db', latency: '2.9ms', status: 'OPTIMAL' },
  { from: 'gw', to: 'dr', latency: '145ms', status: 'DEGRADED' }
];

export const TopologyView: React.FC = () => {
  const [nodes, setNodes] = useState<TopologyNode[]>(initialNodes);
  const [links, setLinks] = useState<TopologyLink[]>(initialLinks);
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(initialNodes[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterMode, setFilterMode] = useState<'ALL' | 'OPTIMAL' | 'DEGRADED'>('ALL');
  const [inspectMessage, setInspectMessage] = useState<string | null>(null);

  const handleAutoLayout = () => {
    setInspectMessage('Topology auto-layout recalculating force vectors...');
    setTimeout(() => {
      setInspectMessage('Topology layout optimized. All link matrices balanced.');
    }, 800);
  };

  const handleToggleIsolate = (nodeId: string) => {
    setNodes(prev =>
      prev.map(n => {
        if (n.id === nodeId) {
          const newStatus = n.status === 'ISOLATED' ? 'ONLINE' : 'ISOLATED';
          return { ...n, status: newStatus };
        }
        return n;
      })
    );
    setSelectedNode(prev => (prev.id === nodeId ? { ...prev, status: prev.status === 'ISOLATED' ? 'ONLINE' : 'ISOLATED' } : prev));
    setInspectMessage(`Node ${nodeId.toUpperCase()} state toggled.`);
  };

  const handleProbe = (node: TopologyNode) => {
    setInspectMessage(`Probing ${node.label} (${node.ip})... Response: 200 OK (RTT: 4.8ms)`);
  };

  const filteredLinks = links.filter(l => {
    if (filterMode === 'OPTIMAL') return l.status === 'OPTIMAL';
    if (filterMode === 'DEGRADED') return l.status === 'DEGRADED';
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              🕸️
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Interactive Network Topology
            </h1>
            <Badge variant="success">TOPOLOGY VERIFIED</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Dynamic hardware dependency graph, link latency weights, and single-point-of-failure analysis
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="secondary" size="sm" onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}>
            🔍 +
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setZoomLevel(prev => Math.max(0.7, prev - 0.1))}>
            🔍 -
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setZoomLevel(1)}>
            Reset Zoom
          </Button>
          <Button variant="primary" size="sm" onClick={handleAutoLayout}>
            🔄 Auto Layout
          </Button>
        </div>
      </div>

      {/* Action and feedback banner if set */}
      {inspectMessage && (
        <div className="bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between shadow-lg animate-fade-in">
          <span>{inspectMessage}</span>
          <button onClick={() => setInspectMessage(null)} className="text-cyan-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* Main Grid: SVG Canvas + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* SVG Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Canvas Header overlay */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 z-10">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-400">View Filter:</span>
                {(['ALL', 'OPTIMAL', 'DEGRADED'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setFilterMode(mode)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${
                      filterMode === mode ? 'bg-cyan-600 text-white shadow' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-slate-500">
                Click any node to inspect &bull; Zoom: {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="h-[520px] relative flex items-center justify-center overflow-hidden">
              <svg
                className="w-full h-full transition-transform duration-300"
                viewBox="0 0 700 520"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                  </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* SVG Links */}
                {filteredLinks.map((link, idx) => {
                  const s = nodes.find(n => n.id === link.from);
                  const t = nodes.find(n => n.id === link.to);
                  if (!s || !t) return null;
                  const isDegraded = link.status === 'DEGRADED';
                  const isIsolated = s.status === 'ISOLATED' || t.status === 'ISOLATED';

                  const strokeColor = isIsolated ? '#64748b' : isDegraded ? '#f59e0b' : '#38bdf8';

                  return (
                    <g key={idx}>
                      <line
                        x1={s.x}
                        y1={s.y}
                        x2={t.x}
                        y2={t.y}
                        stroke={strokeColor}
                        strokeWidth={isIsolated ? 1.5 : isDegraded ? 2.5 : 2}
                        strokeDasharray={isIsolated ? '4,4' : isDegraded ? '6,6' : 'none'}
                        className="transition-all"
                      />
                      {/* Latency Pill */}
                      <rect
                        x={(s.x + t.x) / 2 - 20}
                        y={(s.y + t.y) / 2 - 10}
                        width="40"
                        height="18"
                        rx="9"
                        fill="#0f172a"
                        stroke={strokeColor}
                        strokeWidth="1"
                      />
                      <text
                        x={(s.x + t.x) / 2}
                        y={(s.y + t.y) / 2 + 3}
                        textAnchor="middle"
                        fill={isDegraded ? '#fbbf24' : '#e2e8f0'}
                        fontSize="9"
                        fontWeight="bold"
                        className="font-mono"
                      >
                        {isIsolated ? 'N/A' : link.latency}
                      </text>
                    </g>
                  );
                })}

                {/* SVG Nodes */}
                {nodes.map(node => {
                  const isSelected = selectedNode.id === node.id;
                  const isIsolated = node.status === 'ISOLATED';
                  const isDegraded = node.status === 'DEGRADED';

                  const nodeBorderColor = isIsolated ? '#64748b' : isDegraded ? '#f59e0b' : isSelected ? '#38bdf8' : '#10b981';

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedNode(node)}
                    >
                      {/* Glow ring when selected */}
                      {isSelected && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="38"
                          fill="url(#nodeGlow)"
                          className="animate-pulse"
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="28"
                        fill="#0b1329"
                        stroke={nodeBorderColor}
                        strokeWidth={isSelected ? '3.5' : '2'}
                        className="transition-all duration-200 group-hover:stroke-cyan-400 group-hover:scale-105"
                      />

                      {/* Status indicator dot */}
                      <circle
                        cx={node.x + 18}
                        cy={node.y - 18}
                        r="5"
                        fill={isIsolated ? '#94a3b8' : isDegraded ? '#f59e0b' : '#10b981'}
                      />

                      {/* Inner Node Label */}
                      <text
                        x={node.x}
                        y={node.y + 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="10"
                        fontWeight="extrabold"
                        className="font-mono"
                      >
                        {node.id.toUpperCase()}
                      </text>

                      {/* Bottom Title Label */}
                      <text
                        x={node.x}
                        y={node.y + 44}
                        textAnchor="middle"
                        fill={isSelected ? '#38bdf8' : '#94a3b8'}
                        fontSize="11"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Canvas Legend */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80 mt-2">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>Healthy Link (&lt;10ms)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Degraded (&gt;100ms)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                  <span>Isolated Node</span>
                </span>
              </div>
              <div className="font-mono text-cyan-400">6 Active Nodes &bull; 5 Logical Links</div>
            </div>
          </div>
        </div>

        {/* Selected Node Inspector */}
        <div>
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Node Inspector</span>
              <h3 className="text-lg font-bold text-white mt-1">{selectedNode.label}</h3>
              <div className="mt-1 flex items-center space-x-2">
                <Badge variant={selectedNode.status === 'ONLINE' ? 'success' : selectedNode.status === 'DEGRADED' ? 'warning' : 'danger'}>
                  {selectedNode.status}
                </Badge>
                <span className="text-xs font-mono text-cyan-400">{selectedNode.ip}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedNode.description}</p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-slate-500 text-[10px] uppercase font-bold block">Role Architecture</span>
                <span className="text-slate-200 font-semibold mt-0.5 block">{selectedNode.type}</span>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-slate-500 text-[10px] uppercase font-bold block">Network Interface</span>
                <span className="text-slate-200 font-mono font-semibold mt-0.5 block">{selectedNode.interface}</span>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-slate-500 text-[10px] uppercase font-bold block">Connected Links</span>
                <div className="mt-1 space-y-1">
                  {links
                    .filter(l => l.from === selectedNode.id || l.to === selectedNode.id)
                    .map((l, i) => (
                      <div key={i} className="flex justify-between text-[11px]">
                        <span className="text-slate-400">
                          {l.from.toUpperCase()} &harr; {l.to.toUpperCase()}
                        </span>
                        <span className={`font-mono font-bold ${l.status === 'DEGRADED' ? 'text-amber-400' : 'text-cyan-400'}`}>
                          {l.latency}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="primary" size="sm" onClick={() => handleProbe(selectedNode)} className="w-full shadow-md shadow-cyan-500/20">
                ⚡ Probe Node
              </Button>
              <Button
                variant={selectedNode.status === 'ISOLATED' ? 'primary' : 'danger'}
                size="sm"
                onClick={() => handleToggleIsolate(selectedNode.id)}
                className="w-full"
              >
                {selectedNode.status === 'ISOLATED' ? '✅ Reconnect Link' : '🔌 Isolate From Mesh'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
