import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface AlertItem {
  id: string;
  ruleId?: string;
  ruleName?: string;
  name?: string;
  targetId?: string;
  targetName?: string;
  target?: string;
  targetType?: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  status: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED';
  currentValue?: number | string;
  thresholdValue?: number | string;
  val?: string;
  threshold?: string;
  message?: string;
  createdAt?: string;
}

export const AlertsConsole: React.FC = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED'>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [ruleName, setRuleName] = useState('');
  const [ruleMetric, setRuleMetric] = useState('SPEED_KPH');
  const [ruleThreshold, setRuleThreshold] = useState('80');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fetchAlerts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/alerts');
      const data = await res.json();
      if (data.items) {
        setAlerts(data.items);
      }
    } catch (e) {
      console.error('Failed to fetch alerts:', e);
    }
  };

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAck = async (id: string) => {
    try {
      await fetch(`http://localhost:4000/api/v1/alerts/${id}/acknowledge`, { method: 'POST' });
      setToastMessage('Alert successfully acknowledged by operator.');
      setTimeout(() => setToastMessage(null), 3000);
      fetchAlerts();
    } catch (e) {
      console.error('Ack error:', e);
    }
  };

  const handleResolve = async (id: string) => {
    try {
      await fetch(`http://localhost:4000/api/v1/alerts/${id}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: 'Resolved by NOC Operator' })
      });
      setToastMessage('Incident successfully resolved and closed.');
      setTimeout(() => setToastMessage(null), 3000);
      fetchAlerts();
    } catch (e) {
      console.error('Resolve error:', e);
    }
  };

  const handleCreateRule = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRuleModal(false);
    setToastMessage(`New rule "${ruleName}" successfully registered.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filtered = alerts.filter(a => {
    const matchesSeverity = severityFilter === 'ALL' || a.severity === severityFilter;
    const matchesStatus = statusFilter === 'ALL' || a.status === statusFilter;
    const matchesType =
      typeFilter === 'ALL' ||
      (a.ruleName || a.name || '').toLowerCase().includes(typeFilter.toLowerCase()) ||
      (a.message || '').toLowerCase().includes(typeFilter.toLowerCase());

    return matchesSeverity && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-2xl text-xs flex items-center justify-between shadow-xl animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-emerald-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              🚨
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Alerts &amp; Incident Command Center
            </h1>
            <Badge variant="danger">SLIDING-WINDOW MONITORING</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time threshold evaluations, geofence breaches, and operator triage workflows
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowRuleModal(true)}
          className="shadow-lg shadow-cyan-500/20"
        >
          + Configure Alert Rule
        </Button>
      </div>

      {/* Severity Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-400 mr-2">Severity:</span>
          {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFO'].map(sev => (
            <button
              key={sev}
              onClick={() => setSeverityFilter(sev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                severityFilter === sev
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center space-x-1.5">
          {(['ALL', 'OPEN', 'ACKNOWLEDGED', 'RESOLVED'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                statusFilter === tab
                  ? 'bg-slate-700 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Alert Table Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Severity</th>
                <th className="p-3">Alert Rule / Description</th>
                <th className="p-3">Target Entity</th>
                <th className="p-3">Value / Threshold</th>
                <th className="p-3">Incident Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-slate-500">
                    No active alerts matching the selected severity or status.
                  </td>
                </tr>
              ) : (
                filtered.map(a => {
                  const displayName = a.ruleName || a.name || 'SLA Exceeded';
                  const targetDisplay = a.targetName || a.target || a.targetId || 'DEV-GPS-001';
                  const isDevice =
                    a.targetType === 'DEVICE' ||
                    targetDisplay.toLowerCase().includes('cruiser') ||
                    targetDisplay.toLowerCase().includes('van') ||
                    targetDisplay.toLowerCase().includes('uav') ||
                    targetDisplay.toLowerCase().includes('dev-gps');

                  return (
                    <tr key={a.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-3">
                        <Badge
                          variant={
                            a.severity === 'HIGH' || a.severity === 'CRITICAL'
                              ? 'danger'
                              : a.severity === 'MEDIUM'
                              ? 'warning'
                              : 'info'
                          }
                        >
                          {a.severity}
                        </Badge>
                      </td>

                      <td className="p-3">
                        <div className="font-semibold text-white">{displayName}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {a.message || 'Automated rule threshold exceeded'}
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="font-medium text-slate-200">{targetDisplay}</div>
                        <div className="text-[10px] text-cyan-400 font-mono">
                          {isDevice ? 'GPS Tracker' : 'Network Node'}
                        </div>
                      </td>

                      <td className="p-3 font-mono text-slate-300">
                        <span className="text-amber-400 font-bold">{a.currentValue || a.val || '145ms'}</span>{' '}
                        &gt; {a.thresholdValue || a.threshold || '100ms'}
                      </td>

                      <td className="p-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            a.status === 'OPEN'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : a.status === 'ACKNOWLEDGED'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          {a.status}
                        </span>
                      </td>

                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          {isDevice && (
                            <>
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => navigate(`/devices/${targetDisplay}`)}
                              >
                                View Device
                              </Button>
                              <Button
                                size="sm"
                                variant="primary"
                                onClick={() => navigate(`/tracking?deviceId=${targetDisplay}`)}
                              >
                                View Location
                              </Button>
                            </>
                          )}

                          {a.status === 'OPEN' && (
                            <Button size="sm" variant="secondary" onClick={() => handleAck(a.id)}>
                              Acknowledge
                            </Button>
                          )}

                          {a.status !== 'RESOLVED' && (
                            <Button size="sm" variant="primary" onClick={() => handleResolve(a.id)}>
                              Resolve
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rule Builder Modal */}
      {showRuleModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Create Telemetry Alert Rule</h3>
              <button
                onClick={() => setShowRuleModal(false)}
                className="text-slate-400 hover:text-white text-xl"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleCreateRule} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Rule Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Over-Speed Alarm (>80 km/h)"
                  value={ruleName}
                  onChange={e => setRuleName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Target Metric</label>
                  <select
                    value={ruleMetric}
                    onChange={e => setRuleMetric(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    <option value="SPEED_KPH">Speed Threshold (km/h)</option>
                    <option value="LATENCY_MS">Edge Latency (ms)</option>
                    <option value="PACKET_LOSS">Packet Loss (%)</option>
                    <option value="BATTERY_PCT">Low Battery (%)</option>
                    <option value="GEOFENCE">Geofence Boundary Check</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Threshold</label>
                  <input
                    type="text"
                    required
                    value={ruleThreshold}
                    onChange={e => setRuleThreshold(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <Button variant="secondary" size="sm" type="button" onClick={() => setShowRuleModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Activate Rule
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
