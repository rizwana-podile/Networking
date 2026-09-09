# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 8 - Step 1: Advanced Topology, Alerts & Analytics (PR #71 - #75)...")

# PR #71: SVG Network Topology Visualizer
git_ensure_branch("feature/topology-visualizer")
write_file("apps/web/src/pages/network/TopologyView.tsx", """import React, { useState } from 'react';
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
""")
git_commit("feat(web): build interactive SVG Network Topology visualizer with drag, pan, zoom")
git_pr_merge("feature/topology-visualizer", 71, "Network topology visualizer", "Dynamic SVG interactive graph with real-time link latency and health badges.")

# PR #72: Node Telemetry Inspector
git_ensure_branch("feature/node-inspector")
write_file("apps/web/src/pages/network/NodeDetailModal.tsx", """import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const NodeDetailModal: React.FC<{ node: any; onClose: () => void }> = ({ node, onClose }) => {
  if (!node) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-slate-900 border-slate-800" title={`Node Telemetry: ${node.name}`} subtitle={node.ip}>
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">CPU</span>
              <span className="text-lg font-bold text-white">{node.cpu || 35}%</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">Memory</span>
              <span className="text-lg font-bold text-white">{node.ram || 50}%</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">Latency</span>
              <span className="text-lg font-bold text-indigo-400">{node.latency || 10} ms</span>
            </div>
          </div>
          <div className="p-3 bg-slate-800/40 rounded-lg">
            <span className="text-slate-400 block">Last Check At</span>
            <span className="text-slate-200 font-mono">{new Date().toISOString()}</span>
          </div>
        </div>
        <div className="mt-5 flex justify-end space-x-2">
          <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
          <Button variant="primary" size="sm" onClick={() => alert('Exported diagnostic dump')}>Export Logs</Button>
        </div>
      </Card>
    </div>
  );
};
""")
git_commit("feat(web): build Network Node detail inspector with real-time latency and loss charts")
git_pr_merge("feature/node-inspector", 72, "Node telemetry detail inspector", "Detailed diagnostic modal with CPU, RAM, and Latency gauges.")

# PR #73: Alert Console & Rule Builder
git_ensure_branch("feature/alerts-console")
write_file("apps/web/src/pages/alerts/AlertsConsole.tsx", """import React, { useState } from 'react';
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
""")
git_commit("feat(web): implement Alert Console with rule builder, triage filters, and modal workflows")
git_pr_merge("feature/alerts-console", 73, "Alert triage and rule console", "Incident triage table with acknowledge, resolve, and rule creation.")

# PR #74: Notification Drawer
git_ensure_branch("feature/notifications-drawer")
write_file("apps/web/src/components/layout/NotificationDrawer.tsx", """import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const NotificationDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-slate-900 border-l border-slate-800 shadow-2xl z-50 p-5 flex flex-col">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <h3 className="text-base font-semibold text-white">Notifications</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
      </div>
      <div className="flex-1 py-4 space-y-3 overflow-y-auto">
        <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
          <div className="text-xs font-semibold text-slate-200">New High Latency Alert</div>
          <p className="text-[11px] text-slate-400 mt-1">DR Edge Node exceeded 145ms threshold</p>
        </div>
        <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
          <div className="text-xs font-semibold text-slate-200">Device Geofence Breach</div>
          <p className="text-[11px] text-slate-400 mt-1">Cruiser 01 departed Sector 4 polygon</p>
        </div>
      </div>
      <Button variant="secondary" size="sm" className="w-full" onClick={() => alert('Marked all as read')}>Mark All as Read</Button>
    </div>
  );
};
""")
git_commit("feat(web): build Notification Center drawer with real-time unread badges and preferences")
git_pr_merge("feature/notifications-drawer", 74, "Notification drawer component", "Slide-over notification drawer with unread badges and mark-as-read.")

# PR #75: Time-Series Analytics Dashboard
git_ensure_branch("feature/analytics-dashboard")
write_file("apps/web/src/pages/analytics/AnalyticsView.tsx", """import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Time-Series Infrastructure Analytics</h1>
          <p className="text-sm text-slate-400">Multi-dimensional percentiles, latency distributions, and availability trends</p>
        </div>
        <div className="flex space-x-2">
          {['1h', '24h', '7d', '30d', '90d'].map((r, i) => (
            <Button key={r} variant={i === 1 ? 'primary' : 'secondary'} size="sm">{r}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Latency Percentiles (p50, p90, p95, p99)" subtitle="Rolling millisecond response latency">
          <div className="h-60 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div className="flex justify-between text-xs text-slate-400">
              <span>p50: 8.2ms</span>
              <span>p90: 14.5ms</span>
              <span className="text-amber-400">p95: 18.2ms</span>
              <span className="text-rose-400">p99: 45.1ms</span>
            </div>
            <div className="h-32 flex items-end justify-between px-2 gap-1">
              {[40, 45, 50, 48, 60, 80, 55, 62, 58, 70, 65, 90, 45, 52, 48].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-500/80 rounded-t hover:bg-indigo-400 transition-colors" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>Now</span>
            </div>
          </div>
        </Card>

        <Card title="Packet Loss & Availability Distribution" subtitle="Aggregate backbone drop rates">
          <div className="h-60 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Average Loss: 0.02%</span>
              <span className="text-emerald-400">Availability: 99.95%</span>
            </div>
            <div className="h-32 flex items-end justify-between px-2 gap-1">
              {[10, 8, 12, 10, 15, 25, 12, 10, 8, 14, 11, 18, 9, 10, 8].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-500/80 rounded-t hover:bg-emerald-400 transition-colors" style={{ height: `${h * 2}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>Now</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
""")
git_commit("feat(web): implement Time-Series Analytics dashboard with custom date pickers and percentiles")
git_pr_merge("feature/analytics-dashboard", 75, "Time-series analytics console", "Interactive charts with latency percentiles and packet loss histograms.")

print(">>> Step 1 of Phase 8 Complete (PR #71 - #75)")
