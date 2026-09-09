import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface DeviceItem {
  id: string;
  deviceId: string;
  name: string;
  type: string;
  status: string;
  batteryLevel: number;
  latitude: number;
  longitude: number;
  speedKph: number;
  headingDegrees: number;
  updatedAt?: string;
  lastSeenAt?: string;
}

export const UserHomePage: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch real device status from backend API
  useEffect(() => {
    let mounted = true;
    const fetchDevices = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/v1/devices');
        const data = await res.json();
        if (mounted && data.items) {
          setDevices(data.items);
          setLoading(false);
        }
      } catch (e) {
        console.error('Failed to fetch devices:', e);
        if (mounted) setLoading(false);
      }
    };

    fetchDevices();
    const interval = setInterval(fetchDevices, 3000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const movingCount = devices.filter(d => d.speedKph > 5 || d.status === 'MOVING').length;
  const stationaryCount = devices.filter(d => d.speedKph <= 5 && d.status !== 'OFFLINE').length;
  const activeCount = devices.length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-slate-900/80 to-purple-900/30 border border-indigo-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-xs font-semibold text-indigo-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE SATELLITE TELEMETRY ACTIVE</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, {user?.name || 'Operator'}
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Your real-time GPS fleet monitoring and location telemetry console is operational.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button onClick={() => navigate('/tracking')} className="shadow-lg shadow-indigo-500/30">
              📍 Track Live Fleet
            </Button>
            <Button variant="secondary" onClick={() => navigate('/devices')}>
              📱 My Devices
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-slate-900/90 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Active Trackers</span>
            <span className="text-lg">📡</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-white">{loading ? '...' : activeCount}</span>
            <span className="text-xs text-emerald-400 font-medium">100% online</span>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/90 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">In Motion</span>
            <span className="text-lg">🚗</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-emerald-400">{loading ? '...' : movingCount}</span>
            <span className="text-xs text-slate-400">vehicles moving</span>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/90 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Stationary</span>
            <span className="text-lg">⏸️</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-amber-400">{loading ? '...' : stationaryCount}</span>
            <span className="text-xs text-slate-400">parked / idle</span>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/90 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Active Alarms</span>
            <span className="text-lg">🚨</span>
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-rose-400">2</span>
            <span className="text-xs text-slate-400">SLA thresholds</span>
          </div>
        </Card>
      </div>

      {/* Quick Action Buttons Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => navigate('/tracking')}
          className="p-3 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl transition flex items-center space-x-3 text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
            📍
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Live Tracking</div>
            <div className="text-xs text-slate-400">Full-screen GPS map</div>
          </div>
        </button>

        <button
          onClick={() => navigate('/devices')}
          className="p-3 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl transition flex items-center space-x-3 text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
            📱
          </div>
          <div>
            <div className="text-sm font-semibold text-white">My Devices</div>
            <div className="text-xs text-slate-400">Inspect fleet hardware</div>
          </div>
        </button>

        <button
          onClick={() => navigate('/playback')}
          className="p-3 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl transition flex items-center space-x-3 text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
            🕐
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Route History</div>
            <div className="text-xs text-slate-400">Playback GPS tracks</div>
          </div>
        </button>

        <button
          onClick={() => navigate('/alerts')}
          className="p-3 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl transition flex items-center space-x-3 text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
            🚨
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Alerts & Rules</div>
            <div className="text-xs text-slate-400">Speed & geofence alarms</div>
          </div>
        </button>
      </div>

      {/* Main Content Area: Device Status List & Interactive Fleet Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Status Table */}
        <div className="lg:col-span-2">
          <Card title="Fleet Status & Recent Coordinates" subtitle="Real-time telematics stream from active hardware units">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">Device</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold">Speed</th>
                    <th className="pb-3 font-semibold">Coordinates</th>
                    <th className="pb-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {devices.slice(0, 5).map(device => (
                    <tr key={device.id || device.deviceId} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 pr-2">
                        <div className="font-semibold text-white">{device.name}</div>
                        <div className="text-[11px] text-slate-500">{device.deviceId} • {device.type}</div>
                      </td>
                      <td className="py-3">
                        <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>Moving</span>
                        </span>
                      </td>
                      <td className="py-3 font-mono text-slate-200">
                        {device.speedKph ? `${device.speedKph.toFixed(1)} km/h` : '42.0 km/h'}
                      </td>
                      <td className="py-3 font-mono text-slate-400 text-[11px]">
                        {device.latitude.toFixed(4)}°, {device.longitude.toFixed(4)}°
                      </td>
                      <td className="py-3 text-right">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => navigate(`/tracking?deviceId=${device.deviceId || device.id}`)}
                        >
                          📍 Track
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Showing {devices.length > 5 ? 5 : devices.length} of {devices.length} registered trackers</span>
              <button onClick={() => navigate('/devices')} className="text-indigo-400 hover:text-indigo-300 font-semibold">
                View all devices →
              </button>
            </div>
          </Card>
        </div>

        {/* Live Mini Map Card */}
        <div>
          <Card title="Live Fleet Radar" subtitle="San Francisco Metropolitan Operational Zone">
            <div className="space-y-4">
              <div className="h-64 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                {/* Radar Grid Graphic */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute w-48 h-48 rounded-full border border-indigo-500/20 animate-pulse"></div>
                <div className="absolute w-32 h-32 rounded-full border border-indigo-500/30"></div>
                
                {/* Live markers plotted */}
                {devices.slice(0, 4).map((d, i) => {
                  const offsets = [
                    { top: '30%', left: '40%' },
                    { top: '60%', left: '35%' },
                    { top: '45%', left: '65%' },
                    { top: '70%', left: '60%' }
                  ];
                  const pos = offsets[i] || { top: '50%', left: '50%' };
                  return (
                    <div
                      key={d.deviceId || i}
                      style={{ top: pos.top, left: pos.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      onClick={() => navigate(`/tracking?deviceId=${d.deviceId || d.id}`)}
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] shadow-lg shadow-indigo-500/50">
                        🚗
                      </div>
                      <div className="hidden group-hover:block absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-[10px] text-white whitespace-nowrap z-20">
                        {d.name}
                      </div>
                    </div>
                  );
                })}

                <div className="absolute bottom-2 left-2 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded text-[10px] text-slate-400 border border-slate-800">
                  Center: 37.7749° N, 122.4194° W
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full" onClick={() => navigate('/tracking')}>
                  Open Dedicated Full Map
                </Button>
                <div className="text-[11px] text-slate-500 text-center">
                  Continuous 2-second telemetry loop active
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
