import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

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
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModalDevice, setSelectedModalDevice] = useState<DeviceItem | null>(null);

  // Poll real devices from backend API
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
        console.error('Failed to load fleet devices:', e);
        if (mounted) setLoading(false);
      }
    };

    fetchDevices();
    const interval = setInterval(fetchDevices, 2500);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const activeCount = devices.length;
  const movingCount = devices.filter(d => (d.speedKph || 0) > 5).length;
  const onlineCount = devices.filter(d => d.status !== 'OFFLINE').length;
  const alertsCount = 2;

  const topDevice = devices[0] || {
    name: 'Rapid Response Cruiser 01',
    deviceId: 'DEV-GPS-001',
    speedKph: 45.2,
    latitude: 37.7749,
    longitude: -122.4194,
    batteryLevel: 94
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Top Welcome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-2xl shadow-lg shadow-cyan-500/20 border border-cyan-400/20">
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Welcome back, {user?.name || 'Operator'}
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold">
                {user?.role || 'STANDARD USER'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              GeoNet Sentinel Satellite Telemetry • Live Tracking System Active
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/alerts')}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
          >
            <span>🔔</span>
            <span>Alerts</span>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-500/20 text-rose-400 font-mono text-[10px] font-bold">
              {alertsCount}
            </span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold border border-rose-500/30 transition"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main KPI Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Active Devices */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span>Active Devices</span>
            <span className="text-lg">📡</span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white">{loading ? '...' : activeCount}</span>
            <span className="text-xs text-cyan-400 font-medium">trackers assigned</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Autonomous GNSS feeds</div>
        </div>

        {/* Moving */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span>Moving</span>
            <span className="text-lg">🚗</span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-emerald-400">{loading ? '...' : movingCount}</span>
            <span className="text-xs text-emerald-400 font-medium">in transit</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">&gt; 5 km/h live velocity</div>
        </div>

        {/* Online */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span>Online</span>
            <span className="text-lg">📶</span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-cyan-400">{loading ? '...' : onlineCount}</span>
            <span className="text-xs text-slate-400 font-medium">connected</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">4G LTE / 5G telemetry</div>
        </div>

        {/* Alerts */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span>Active Alerts</span>
            <span className="text-lg">🚨</span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-rose-400">{alertsCount}</span>
            <span className="text-xs text-rose-400 font-medium">attention needed</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Speed SLA thresholds</div>
        </div>
      </div>

      {/* Live Tracking Spotlight Preview */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-white tracking-tight">LIVE TRACKING</h2>
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>REAL-TIME STREAM</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Continuous live satellite telemetry stream of authorized fleet units
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-slate-700 text-xs">
              <span className="text-slate-300 font-semibold">{topDevice.name}</span>
              <span className="text-emerald-400 font-bold">🟢 Moving</span>
              <span className="text-slate-400 font-mono">{(topDevice.speedKph || 42).toFixed(1)} km/h</span>
              <span className="text-[11px] text-slate-500">• Updated 2 sec ago</span>
            </div>
            <button
              onClick={() => navigate(`/tracking?deviceId=${topDevice.deviceId || topDevice.id}`)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-600/30 transition flex items-center space-x-1.5"
            >
              <span>📍</span>
              <span>Track Live Fleet</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Live Map Radar Visual */}
        <div className="h-72 sm:h-80 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute w-64 h-64 rounded-full border border-cyan-500/20 animate-pulse"></div>
          <div className="absolute w-44 h-44 rounded-full border border-cyan-500/30"></div>
          <div className="absolute w-24 h-24 rounded-full border border-cyan-500/40"></div>

          {/* Plotted Live Markers */}
          {devices.slice(0, 5).map((d, i) => {
            const positions = [
              { top: '35%', left: '42%' },
              { top: '58%', left: '38%' },
              { top: '48%', left: '68%' },
              { top: '68%', left: '62%' },
              { top: '28%', left: '55%' }
            ];
            const pos = positions[i] || { top: '50%', left: '50%' };
            return (
              <div
                key={d.deviceId || d.id || i}
                style={{ top: pos.top, left: pos.left }}
                onClick={() => navigate(`/tracking?deviceId=${d.deviceId || d.id}`)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 border-2 border-white flex items-center justify-center text-xs shadow-xl shadow-cyan-500/40 group-hover:scale-125 transition duration-200">
                  {d.type?.includes('Drone') ? '🛸' : '🚗'}
                </div>
                <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur border border-slate-700 px-2 py-0.5 rounded text-[10px] text-white font-semibold whitespace-nowrap shadow-lg opacity-80 group-hover:opacity-100">
                  {d.name.split(' ')[0]} • {(d.speedKph || 42).toFixed(0)} km/h
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-slate-400 border border-slate-800">
            Center: San Francisco Metro (37.7749° N, 122.4194° W)
          </div>
          <div className="absolute top-3 right-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Fleet Mover Active</span>
          </div>
        </div>
      </div>

      {/* MY DEVICES Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-white tracking-tight">MY DEVICES</h2>
            <span className="text-xs text-slate-400">({devices.length} hardware trackers)</span>
          </div>
          <button
            onClick={() => navigate('/devices')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            View all devices &rarr;
          </button>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.slice(0, 4).map(d => {
            const devKey = d.deviceId || d.id;
            const isMoving = (d.speedKph || 0) > 5;
            return (
              <div
                key={devKey}
                className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 shadow-lg transition duration-200 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-white truncate max-w-[160px]">{d.name}</h3>
                      <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{devKey}</div>
                    </div>
                    <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${isMoving ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isMoving ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                      <span>{isMoving ? 'Moving' : 'Idle'}</span>
                    </span>
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Speed:</span>
                      <span className="font-mono text-slate-200 font-semibold">{(d.speedKph || 42).toFixed(1)} km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery:</span>
                      <span className="text-slate-200 font-semibold">{d.batteryLevel || 94}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Seen:</span>
                      <span className="text-slate-300">Just now</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-1.5">
                  <button
                    onClick={() => navigate(`/tracking?deviceId=${devKey}`)}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition text-center shadow-md shadow-cyan-600/20"
                  >
                    Track
                  </button>
                  <button
                    onClick={() => navigate(`/playback?deviceId=${devKey}`)}
                    className="py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition text-center"
                  >
                    History
                  </button>
                  <button
                    onClick={() => navigate(`/devices/${devKey}`)}
                    className="py-1.5 px-2 rounded-lg text-slate-400 hover:text-white text-xs transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RECENT ACTIVITY Feed */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">RECENT ACTIVITY</h2>
          <span className="text-xs text-slate-500">Live operational events</span>
        </div>

        <div className="space-y-3">
          {[
            { id: 1, icon: '📍', title: 'Cruiser 01 GPS Telemetry Synchronized', desc: 'Heading 331° at 36.8 km/h • San Francisco Downtown', time: '12 seconds ago', type: 'info' },
            { id: 2, icon: '🛡️', title: 'PostGIS Geofence Boundary Check', desc: 'Inspection Drone UAV-X cleared commercial air corridor alpha', time: '45 seconds ago', type: 'success' },
            { id: 3, icon: '⚠️', title: 'Speed Threshold Telemetry Alert', desc: 'Logistics Hauler Alpha velocity peaked at 58.0 km/h in freight zone', time: '2 minutes ago', type: 'warning' },
            { id: 4, icon: '📶', title: 'Cellular Carrier Handover', desc: 'Courier Van Express 04 switched to 4G LTE Band 4 tower', time: '4 minutes ago', type: 'info' }
          ].map(ev => (
            <div key={ev.id} className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{ev.icon}</span>
                <div>
                  <div className="font-semibold text-white">{ev.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{ev.desc}</div>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium shrink-0 ml-3">{ev.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ALERT SUMMARY Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🚨</span>
            <h2 className="text-lg font-bold text-white tracking-tight">ALERT SUMMARY</h2>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold">
              2 Active Incidents
            </span>
          </div>
          <button
            onClick={() => navigate('/alerts')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            Incident Command Console &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 flex items-start justify-between text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  MEDIUM
                </span>
                <span className="font-bold text-white">Speed Threshold Alarm</span>
              </div>
              <p className="text-slate-400 text-[11px]">DEV-GPS-001 (Cruiser 01) &bull; Registered 58.7 km/h</p>
            </div>
            <button
              onClick={() => navigate('/alerts')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold border border-slate-700 transition"
            >
              Triage
            </button>
          </div>

          <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 flex items-start justify-between text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  HIGH
                </span>
                <span className="font-bold text-white">Edge SLA Latency Spike</span>
              </div>
              <p className="text-slate-400 text-[11px]">Disaster Recovery Edge &bull; 145ms &gt; 100ms SLA</p>
            </div>
            <button
              onClick={() => navigate('/alerts')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold border border-slate-700 transition"
            >
              Triage
            </button>
          </div>
        </div>
      </div>

      {/* NETWORK HEALTH SUMMARY Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🌐</span>
            <h2 className="text-lg font-bold text-white tracking-tight">NETWORK HEALTH SUMMARY</h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
              99.98% UPTIME
            </span>
          </div>
          <button
            onClick={() => navigate('/network')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            Launch NOC Console &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Core Ingress</span>
            <span className="text-emerald-400 font-bold text-sm mt-0.5 block">ONLINE</span>
            <span className="text-slate-400 text-[10px]">4.2ms Mean Latency</span>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Border Routers</span>
            <span className="text-emerald-400 font-bold text-sm mt-0.5 block">ONLINE</span>
            <span className="text-slate-400 text-[10px]">0.00% Packet Loss</span>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Spatial Database</span>
            <span className="text-emerald-400 font-bold text-sm mt-0.5 block">HEALTHY</span>
            <span className="text-slate-400 text-[10px]">PostGIS Cluster Synced</span>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Edge DR Relay</span>
            <span className="text-amber-400 font-bold text-sm mt-0.5 block">DEGRADED</span>
            <span className="text-slate-400 text-[10px]">Failover Hot Active</span>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedModalDevice && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">{selectedModalDevice.name}</h3>
                <div className="text-xs text-cyan-400 font-mono">{selectedModalDevice.deviceId || selectedModalDevice.id}</div>
              </div>
              <button onClick={() => setSelectedModalDevice(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Current Velocity</span>
                <span className="text-slate-200 font-mono font-bold">{(selectedModalDevice.speedKph || 42).toFixed(1)} km/h</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Coordinates</span>
                <span className="text-slate-200 font-mono">{selectedModalDevice.latitude?.toFixed(4)}°, {selectedModalDevice.longitude?.toFixed(4)}°</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Battery Reserve</span>
                <span className="text-emerald-400 font-semibold">{selectedModalDevice.batteryLevel || 94}%</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Firmware Spec</span>
                <span className="text-slate-200">v3.4.2-rel (Teltonika Codec 8)</span>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setSelectedModalDevice(null)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedModalDevice.deviceId || selectedModalDevice.id;
                  setSelectedModalDevice(null);
                  navigate(`/tracking?deviceId=${id}`);
                }}
                className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg shadow-md shadow-cyan-600/30"
              >
                Launch Tracker &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
