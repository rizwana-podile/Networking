import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const nodes = [
  { id: 'gw', label: 'Core Gateway', type: 'GATEWAY', x: 400, y: 80, status: 'ONLINE' },
  { id: 'rtr', label: 'Border Router', type: 'ROUTER', x: 400, y: 190, status: 'ONLINE' },
  { id: 'sw', label: 'Dist Switch', type: 'SWITCH', x: 400, y: 300, status: 'ONLINE' },
  { id: 'api', label: 'API Cluster', type: 'SERVER', x: 260, y: 420, status: 'ONLINE' },
  { id: 'db', label: 'Spatial DB', type: 'DATABASE', x: 540, y: 420, status: 'ONLINE' },
  { id: 'dr', label: 'DR Node', type: 'SERVER', x: 120, y: 200, status: 'DEGRADED' }
];

const links = [
  { from: 'gw', to: 'rtr', latency: '2.5ms', status: 'OPTIMAL' },
  { from: 'rtr', to: 'sw', latency: '1.8ms', status: 'OPTIMAL' },
  { from: 'sw', to: 'api', latency: '3.2ms', status: 'OPTIMAL' },
  { from: 'sw', to: 'db', latency: '2.9ms', status: 'OPTIMAL' },
  { from: 'gw', to: 'dr', latency: '145ms', status: 'DEGRADED' }
];

export const TopologyView: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<any>(nodes[0]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Interactive Network Topology</h1>
          <p className="text-sm text-slate-400">Dynamic dependency graph, link latency weights, and single-point-of-failure analysis</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="success">RESILIENT</Badge>
          <Button variant="secondary" size="sm" onClick={() => alert('Rearranging force layout...')}>Auto Layout</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-0 overflow-hidden bg-slate-950 border border-slate-800">
            <div className="h-[520px] relative flex items-center justify-center">
              <svg className="w-full h-full">
                {/* SVG Links */}
                {links.map((link, idx) => {
                  const s = nodes.find(n => n.id === link.from)!;
                  const t = nodes.find(n => n.id === link.to)!;
                  const isDegraded = link.status === 'DEGRADED';
                  return (
                    <g key={idx}>
                      <line
                        x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                        stroke={isDegraded ? '#F59E0B' : '#6366F1'}
                        strokeWidth={isDegraded ? 2 : 2.5}
                        strokeDasharray={isDegraded ? '5,5' : 'none'}
                        className="transition-all"
                      />
                      <text
                        x={(s.x + t.x) / 2 + 10}
                        y={(s.y + t.y) / 2}
                        fill="#94A3B8"
                        fontSize="10"
                        className="font-mono"
                      >{link.latency}</text>
                    </g>
                  );
                })}

                {/* SVG Nodes */}
                {nodes.map(node => (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode(node)}
                  >
                    <circle
                      cx={node.x} cy={node.y} r="28"
                      fill="#0F172A"
                      stroke={selectedNode.id === node.id ? '#818CF8' : (node.status === 'ONLINE' ? '#10B981' : '#F59E0B')}
                      strokeWidth={selectedNode.id === node.id ? '4' : '2'}
                      className="transition-all hover:scale-105"
                    />
                    <text
                      x={node.x} y={node.y + 4}
                      textAnchor="middle"
                      fill="#F8FAFC"
                      fontSize="10"
                      fontWeight="bold"
                    >{node.id.toUpperCase()}</text>
                    <text
                      x={node.x} y={node.y + 44}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="11"
                    >{node.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </Card>
        </div>

        {/* Selected Node Drawer */}
        <Card title="Topology Inspector" subtitle={selectedNode.label}>
          <div className="space-y-4">
            <div className="p-3 bg-slate-800/60 rounded-lg">
              <span className="text-xs text-slate-400">Node Type</span>
              <div className="text-sm font-semibold text-slate-100">{selectedNode.type}</div>
            </div>
            <div className="p-3 bg-slate-800/40 rounded-lg">
              <span className="text-xs text-slate-400">Health State</span>
              <div><Badge variant={selectedNode.status === 'ONLINE' ? 'success' : 'warning'}>{selectedNode.status}</Badge></div>
            </div>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="primary" size="sm" onClick={() => alert(`Triggering probe on ${selectedNode.label}`)}>Probe Node</Button>
              <Button variant="secondary" size="sm" onClick={() => alert(`Isolating node ${selectedNode.label}`)}>Isolate Link</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
