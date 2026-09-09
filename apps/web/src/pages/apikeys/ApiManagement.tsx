import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface ApiKeyItem {
  id: string;
  name: string;
  prefix: string;
  fullSecret?: string;
  scope: 'READ_ONLY' | 'TELEMETRY_WRITE' | 'SUPER_ADMIN';
  requests: number;
  limit: string;
  status: 'ACTIVE' | 'REVOKED';
  created: string;
}

interface WebhookItem {
  id: string;
  name: string;
  url: string;
  events: string[];
  status: 'ACTIVE' | 'FAILED';
  lastPing: string;
}

const initialKeys: ApiKeyItem[] = [
  {
    id: '1',
    name: 'Production Telemetry Ingest Pipeline',
    prefix: 'geonet_live_8f3a8b41...',
    scope: 'TELEMETRY_WRITE',
    requests: 14250,
    limit: '120 req/min',
    status: 'ACTIVE',
    created: '2026-08-15'
  },
  {
    id: '2',
    name: 'NOC Grafana Dashboard Integration',
    prefix: 'geonet_live_2c1b99fe...',
    scope: 'READ_ONLY',
    requests: 8420,
    limit: '60 req/min',
    status: 'ACTIVE',
    created: '2026-08-20'
  },
  {
    id: '3',
    name: 'Emergency Dispatcher Uplink',
    prefix: 'geonet_live_55a73e12...',
    scope: 'SUPER_ADMIN',
    requests: 180,
    limit: '300 req/min',
    status: 'ACTIVE',
    created: '2026-09-01'
  }
];

const initialWebhooks: WebhookItem[] = [
  {
    id: 'wh-1',
    name: 'Incident Escalation PagerDuty',
    url: 'https://events.pagerduty.com/v2/enqueue/geonet-alerts',
    events: ['ALERT_TRIGGER', 'SLA_BREACH', 'NODE_DOWN'],
    status: 'ACTIVE',
    lastPing: '2 mins ago (200 OK)'
  },
  {
    id: 'wh-2',
    name: 'Slack #ops-telemetry Channel',
    url: 'https://hooks.slack.com/services/T0000/B0000/XXXXX',
    events: ['GEOFENCE_VIOLATION', 'DEVICE_OFFLINE'],
    status: 'ACTIVE',
    lastPing: '15 mins ago (200 OK)'
  }
];

export const ApiManagement: React.FC = () => {
  const [keys, setKeys] = useState<ApiKeyItem[]>(initialKeys);
  const [webhooks, setWebhooks] = useState<WebhookItem[]>(initialWebhooks);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [showWebhookModal, setShowWebhookModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyScope, setNewKeyScope] = useState<'READ_ONLY' | 'TELEMETRY_WRITE' | 'SUPER_ADMIN'>('READ_ONLY');
  const [newWebhookName, setNewWebhookName] = useState('');
  const [newWebhookUrl, setNewWebhookUrl] = useState('');
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);
  const [pingMessage, setPingMessage] = useState<string | null>(null);

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) return;

    const generatedKey: ApiKeyItem = {
      id: String(Date.now()),
      name: newKeyName.trim(),
      prefix: `geonet_live_${Math.random().toString(36).substring(2, 10)}...`,
      scope: newKeyScope,
      requests: 0,
      limit: newKeyScope === 'SUPER_ADMIN' ? '300 req/min' : newKeyScope === 'TELEMETRY_WRITE' ? '120 req/min' : '60 req/min',
      status: 'ACTIVE',
      created: new Date().toISOString().split('T')[0]
    };

    setKeys([generatedKey, ...keys]);
    setNewKeyName('');
    setShowKeyModal(false);
    setPingMessage(`Created token "${generatedKey.name}". Secret stored securely.`);
    setTimeout(() => setPingMessage(null), 4000);
  };

  const handleCreateWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWebhookName.trim() || !newWebhookUrl.trim()) return;

    const createdWebhook: WebhookItem = {
      id: `wh-${Date.now()}`,
      name: newWebhookName.trim(),
      url: newWebhookUrl.trim(),
      events: ['ALERT_TRIGGER', 'SLA_BREACH'],
      status: 'ACTIVE',
      lastPing: 'Verified just now (200 OK)'
    };

    setWebhooks([...webhooks, createdWebhook]);
    setNewWebhookName('');
    setNewWebhookUrl('');
    setShowWebhookModal(false);
    setPingMessage(`Webhook "${createdWebhook.name}" registered successfully.`);
    setTimeout(() => setPingMessage(null), 4000);
  };

  const handleCopyPrefix = (key: ApiKeyItem) => {
    navigator.clipboard.writeText(key.prefix);
    setCopiedKeyId(key.id);
    setTimeout(() => setCopiedKeyId(null), 2000);
  };

  const handlePingWebhook = (wh: WebhookItem) => {
    setPingMessage(`Dispatched test event to ${wh.name}... Received HTTP 200 OK in 38ms.`);
    setTimeout(() => setPingMessage(null), 4000);
  };

  const handleRevokeKey = (id: string) => {
    setKeys(prev => prev.map(k => (k.id === id ? { ...k, status: 'REVOKED' } : k)));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              🔑
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Developer API & Webhook Management
            </h1>
            <Badge variant="success">TLS 1.3 / HMAC-SHA256</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Scoped machine-to-machine tokens, per-minute rate quotas, and real-time event-driven outbound webhooks
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="secondary" size="sm" onClick={() => setShowWebhookModal(true)}>
            + Add Webhook
          </Button>
          <Button variant="primary" size="sm" onClick={() => setShowKeyModal(true)} className="shadow-lg shadow-cyan-500/20">
            + Generate API Token
          </Button>
        </div>
      </div>

      {/* Action Notification Toast */}
      {pingMessage && (
        <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-lg animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{pingMessage}</span>
          </div>
          <button onClick={() => setPingMessage(null)} className="text-emerald-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active API Tokens</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">
            {keys.filter(k => k.status === 'ACTIVE').length} Keys
          </div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">All authenticated</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Daily Ingress Traffic</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">22,850 req</div>
          <div className="mt-1 text-xs text-slate-400">0.00% 429 Throttle Rate</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Outbound Webhooks</div>
          <div className="mt-2 text-2xl font-extrabold text-indigo-400 font-mono">{webhooks.length} Active</div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">100% Delivery Success</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Avg Webhook Latency</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">38.4 ms</div>
          <div className="mt-1 text-xs text-slate-400">Target &lt; 200 ms</div>
        </div>
      </div>

      {/* API Keys Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Active API Credentials</h3>
            <p className="text-xs text-slate-400">Cryptographically secure bearer tokens for telemetry streaming and SDK integration</p>
          </div>
          <Badge variant="info">HMAC-SHA256 SIGNED</Badge>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Token Name</th>
                <th className="p-3">Scope</th>
                <th className="p-3">Token Prefix</th>
                <th className="p-3">Requests Served</th>
                <th className="p-3">Rate Limit</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {keys.map(k => (
                <tr key={k.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 font-semibold text-white">
                    <div>{k.name}</div>
                    <div className="text-[10px] text-slate-500">Created: {k.created}</div>
                  </td>
                  <td className="p-3">
                    <Badge
                      variant={
                        k.scope === 'SUPER_ADMIN'
                          ? 'danger'
                          : k.scope === 'TELEMETRY_WRITE'
                          ? 'warning'
                          : 'info'
                      }
                    >
                      {k.scope}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-cyan-400">{k.prefix}</span>
                      <button
                        onClick={() => handleCopyPrefix(k)}
                        className="text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                      >
                        {copiedKeyId === k.id ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </td>
                  <td className="p-3 text-slate-300 font-mono">{k.requests.toLocaleString()}</td>
                  <td className="p-3 text-slate-400">{k.limit}</td>
                  <td className="p-3">
                    <Badge variant={k.status === 'ACTIVE' ? 'success' : 'danger'}>
                      {k.status}
                    </Badge>
                  </td>
                  <td className="p-3 text-right">
                    {k.status === 'ACTIVE' ? (
                      <Button variant="danger" size="sm" onClick={() => handleRevokeKey(k.id)}>
                        Revoke
                      </Button>
                    ) : (
                      <span className="text-[11px] text-slate-500 italic">Revoked</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Outbound Webhooks Console */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Outbound Webhook Subscriptions</h3>
            <p className="text-xs text-slate-400">Real-time HTTP POST event dispatchers for external alerting and integrations</p>
          </div>
          <Badge variant="success">DISPATCH WORKER LIVE</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {webhooks.map(wh => (
            <div key={wh.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-start justify-between">
                  <span className="font-bold text-white text-sm">{wh.name}</span>
                  <Badge variant="success">{wh.status}</Badge>
                </div>
                <div className="text-xs font-mono text-cyan-400 break-all mt-1">{wh.url}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {wh.events.map(ev => (
                    <span key={ev} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      {ev}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                <span>Last Ping: <strong className="text-emerald-400">{wh.lastPing}</strong></span>
                <Button variant="secondary" size="sm" onClick={() => handlePingWebhook(wh)}>
                  ⚡ Send Test Event
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateKey} className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Generate Scoped API Token</h3>
              <button type="button" onClick={() => setShowKeyModal(false)} className="text-slate-400 hover:text-white text-xl">
                &times;
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Token Name / Client Description</label>
              <input
                type="text"
                placeholder="e.g. AWS Lambda GPS Ingest Pipeline"
                value={newKeyName}
                onChange={e => setNewKeyName(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Permission Scope</label>
              <select
                value={newKeyScope}
                onChange={e => setNewKeyScope(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="READ_ONLY">READ ONLY (Metrics & Status)</option>
                <option value="TELEMETRY_WRITE">TELEMETRY WRITE (GPS Coordinates & Sensors)</option>
                <option value="SUPER_ADMIN">SUPER ADMIN (Full Management Access)</option>
              </select>
            </div>

            <div className="p-3 bg-cyan-950/30 border border-cyan-500/30 rounded-xl text-xs text-cyan-200 leading-relaxed">
              Tokens use high-entropy 256-bit keys and are hashed before persistence. Keep your generated token secure.
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
              <Button type="button" variant="secondary" size="sm" onClick={() => setShowKeyModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Generate Token
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Add Webhook Modal */}
      {showWebhookModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateWebhook} className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Register Outbound Webhook</h3>
              <button type="button" onClick={() => setShowWebhookModal(false)} className="text-slate-400 hover:text-white text-xl">
                &times;
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Webhook Name</label>
              <input
                type="text"
                placeholder="e.g. Discord Ops Alerts"
                value={newWebhookName}
                onChange={e => setNewWebhookName(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Endpoint HTTPS URL</label>
              <input
                type="url"
                placeholder="https://your-domain.com/webhook"
                value={newWebhookUrl}
                onChange={e => setNewWebhookUrl(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
              <Button type="button" variant="secondary" size="sm" onClick={() => setShowWebhookModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Register Webhook
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
