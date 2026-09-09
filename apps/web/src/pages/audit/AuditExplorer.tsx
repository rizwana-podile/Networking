import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface AuditLog {
  id: string;
  user: string;
  email: string;
  role: string;
  action: 'DEVICE_CREATE' | 'PROBE_TRIGGER' | 'API_KEY_GENERATE' | 'GEOFENCE_UPDATE' | 'ROLE_ELEVATE' | 'SIMULATION_START';
  resource: string;
  ip: string;
  location: string;
  time: string;
  hash: string;
  details: string;
}

const initialLogs: AuditLog[] = [
  {
    id: 'log-01',
    user: 'Dr. Sarah Connor',
    email: 'admin@geonet.io',
    role: 'SUPER_ADMIN',
    action: 'DEVICE_CREATE',
    resource: 'DEV-GPS-004 (Patrol Drone Bravo)',
    ip: '10.0.0.5',
    location: 'San Francisco, US',
    time: '2026-09-09 10:12:00 UTC',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    details: 'Created telemetry subscription for quadcopter unit with 1-second GPS stream.'
  },
  {
    id: 'log-02',
    user: 'Marcus Brody',
    email: 'netadmin@geonet.io',
    role: 'NETWORK_ADMIN',
    action: 'PROBE_TRIGGER',
    resource: 'node-edge-dr (Disaster Recovery)',
    ip: '10.0.0.12',
    location: 'Frankfurt, DE',
    time: '2026-09-09 10:10:45 UTC',
    hash: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    details: 'Initiated manual ICMP synthetic latency check against secondary edge cluster.'
  },
  {
    id: 'log-03',
    user: 'Aiden Pearce',
    email: 'operator@geonet.io',
    role: 'SECURITY_ANALYST',
    action: 'API_KEY_GENERATE',
    resource: 'Key-Prod-Pipeline-01',
    ip: '10.0.0.8',
    location: 'Chicago, US',
    time: '2026-09-09 10:05:10 UTC',
    hash: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d',
    details: 'Generated restricted API token with 120 req/min rate limit and GPS write scope.'
  },
  {
    id: 'log-04',
    user: 'Dr. Sarah Connor',
    email: 'admin@geonet.io',
    role: 'SUPER_ADMIN',
    action: 'GEOFENCE_UPDATE',
    resource: 'Downtown SF High-Security Polygon',
    ip: '10.0.0.5',
    location: 'San Francisco, US',
    time: '2026-09-09 09:45:22 UTC',
    hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    details: 'Updated polygon boundary coordinates: expanded perimeter buffer by 250 meters.'
  },
  {
    id: 'log-05',
    user: 'Marcus Brody',
    email: 'netadmin@geonet.io',
    role: 'NETWORK_ADMIN',
    action: 'SIMULATION_START',
    resource: 'Fleet Mover Engine',
    ip: '10.0.0.12',
    location: 'Frankfurt, DE',
    time: '2026-09-09 09:00:00 UTC',
    hash: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
    details: 'Autonomous vehicle mover simulation cluster initiated at 1,500ms broadcast interval.'
  }
];

export const AuditExplorer: React.FC = () => {
  const [logs] = useState<AuditLog[]>(initialLogs);
  const [search, setSearch] = useState('');
  const [selectedAction, setSelectedAction] = useState<string>('ALL');
  const [activeModalLog, setActiveModalLog] = useState<AuditLog | null>(null);

  const handleExportCsv = () => {
    const header = 'Timestamp,Actor,Email,Role,Action,Resource,IPAddress,Location,SHA256\n';
    const rows = logs
      .map(
        l =>
          `"${l.time}","${l.user}","${l.email}","${l.role}","${l.action}","${l.resource}","${l.ip}","${l.location}","${l.hash}"`
      )
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `geonet_audit_trail_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLogs = logs.filter(l => {
    const matchesSearch =
      l.user.toLowerCase().includes(search.toLowerCase()) ||
      l.resource.toLowerCase().includes(search.toLowerCase()) ||
      l.ip.includes(search) ||
      l.action.toLowerCase().includes(search.toLowerCase());
    const matchesAction = selectedAction === 'ALL' || l.action === selectedAction;
    return matchesSearch && matchesAction;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              🛡️
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Security Audit Log Explorer
            </h1>
            <Badge variant="success">HASH-CHAIN VERIFIED</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Cryptographically verifiable, immutable audit trail of administrative activities and system state mutations
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="primary" size="sm" onClick={handleExportCsv} className="shadow-lg shadow-cyan-500/20">
            📥 Export Audit CSV
          </Button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Audit Events</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">1,482</div>
          <div className="mt-1 text-xs text-cyan-400 font-medium">+18 in past 24h</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Chain Integrity</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
          <div className="mt-1 text-xs text-slate-400">Sha-256 Merkle Unbroken</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Operators</div>
          <div className="mt-2 text-2xl font-extrabold text-indigo-400 font-mono">3 Admins</div>
          <div className="mt-1 text-xs text-slate-400">Role-Based Access Control</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tamper Attempts</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">0 Detected</div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">Zero Security Breaches</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {['ALL', 'DEVICE_CREATE', 'PROBE_TRIGGER', 'API_KEY_GENERATE', 'GEOFENCE_UPDATE', 'SIMULATION_START'].map(act => (
            <button
              key={act}
              onClick={() => setSelectedAction(act)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedAction === act
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-white'
              }`}
            >
              {act.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div>
          <input
            type="text"
            placeholder="Search actor, action, or IP..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-64 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
          />
        </div>
      </div>

      {/* Audit Log Table Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Operator</th>
                <th className="p-3">Action Event</th>
                <th className="p-3">Target Resource</th>
                <th className="p-3">Client Origin</th>
                <th className="p-3">Cryptographic Proof</th>
                <th className="p-3 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filteredLogs.map(l => (
                <tr key={l.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 font-mono text-slate-400 whitespace-nowrap">{l.time}</td>
                  <td className="p-3">
                    <div>
                      <div className="font-semibold text-white">{l.user}</div>
                      <div className="text-[10px] text-slate-400">{l.email} &bull; <Badge variant="info">{l.role}</Badge></div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-900/50">
                      {l.action}
                    </span>
                  </td>
                  <td className="p-3 text-slate-200 font-medium">{l.resource}</td>
                  <td className="p-3">
                    <div className="font-mono text-slate-300">{l.ip}</div>
                    <div className="text-[10px] text-slate-500">{l.location}</div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40 w-fit">
                      <span>✓</span>
                      <span>{l.hash.slice(0, 10)}...</span>
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="secondary" size="sm" onClick={() => setActiveModalLog(l)}>
                      Inspect
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Inspection Modal */}
      {activeModalLog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-fade-in">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <span>Audit Event: {activeModalLog.action}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Recorded at {activeModalLog.time}</p>
              </div>
              <button
                onClick={() => setActiveModalLog(null)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1"
              >
                &times;
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Actor:</span>
                  <span className="text-white font-semibold">{activeModalLog.user} ({activeModalLog.email})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Role:</span>
                  <Badge variant="info">{activeModalLog.role}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Client IP:</span>
                  <span className="text-cyan-400 font-mono">{activeModalLog.ip} ({activeModalLog.location})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Resource:</span>
                  <span className="text-slate-200 font-semibold">{activeModalLog.resource}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] uppercase font-bold block mb-1">Event Narrative</span>
                <p className="text-slate-300 leading-relaxed">{activeModalLog.details}</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] uppercase font-bold block mb-1">Cryptographic Signature (SHA-256)</span>
                <p className="text-emerald-400 font-mono break-all text-[11px] bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                  {activeModalLog.hash}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-800">
              <Button variant="secondary" size="sm" onClick={() => setActiveModalLog(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
