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
  lastSeenAt?: string;
  updatedAt?: string;
}

export const DeviceManagement: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const isAdmin = user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN';

  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedDetails, setSelectedDetails] = useState<DeviceItem | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [newDeviceType, setNewDeviceType] = useState('FLEET_VEHICLE');

  // Fetch real device list from backend API
  const fetchDevices = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/devices');
      const data = await res.json();
      if (data.items) {
        setDevices(data.items);
      }
    } catch (e) {
      console.error('Failed to fetch devices:', e);
    }
  };

  useEffect(() => {
    fetchDevices();
    const interval = setInterval(fetchDevices, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeviceName) return;

    try {
      const newDev = {
        name: newDeviceName,
        type: newDeviceType,
        deviceId: `DEV-GPS-${Date.now().toString().slice(-3)}`,
        status: 'ONLINE',
        batteryLevel: 100,
        latitude: 37.7749 + (Math.random() - 0.5) * 0.02,
        longitude: -122.4194 + (Math.random() - 0.5) * 0.02,
        speedKph: 0,
        headingDegrees: 0,
        isSimulated: true
      };

      await fetch('http://localhost:4000/api/v1/devices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDev)
      });

      setShowRegisterModal(false);
      setNewDeviceName('');
      fetchDevices();
    } catch (e) {
      console.error('Registration failed:', e);
    }
  };

  const filtered = devices.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceId.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' ||
      (statusFilter === 'MOVING' && d.speedKph > 5) ||
      (statusFilter === 'STATIONARY' && d.speedKph <= 5) ||
      (statusFilter === 'OFFLINE' && d.status === 'OFFLINE');
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Fleet Devices & Hardware Registry</h1>
          <p className="text-sm text-slate-400">Manage GPS trackers, telemetry profiles, and physical unit assignments</p>
        </div>
        {isAdmin && (
          <Button variant="primary" size="sm" onClick={() => setShowRegisterModal(true)}>
            + Register New Device
          </Button>
        )}
      </div>

      <Card>
        {/* Search & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search by device name or ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-72 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-slate-500"
            />
            <div className="flex items-center space-x-1">
              {['ALL', 'MOVING', 'STATIONARY'].map(st => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${statusFilter === st ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-slate-400">{filtered.length} of {devices.length} registered trackers</span>
        </div>

        {/* Device Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/60 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Device Name & ID</th>
                <th className="p-3">Hardware Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Velocity</th>
                <th className="p-3">Coordinates</th>
                <th className="p-3">Battery</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map(d => {
                const devKey = d.deviceId || d.id;
                const isMoving = (d.speedKph || 0) > 5;
                return (
                  <tr key={devKey} className="hover:bg-slate-800/30 transition">
                    <td className="p-3">
                      <div className="font-semibold text-white">{d.name}</div>
                      <div className="font-mono text-[11px] text-indigo-400">{devKey}</div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                        {d.type.includes('Drone') ? '🛸 UAV Drone' : '🚗 Fleet Vehicle'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>{isMoving ? 'In Transit' : 'Online'}</span>
                      </span>
                    </td>
                    <td className="p-3 font-mono text-slate-200">
                      {(d.speedKph || 42).toFixed(1)} km/h
                    </td>
                    <td className="p-3 font-mono text-slate-400 text-[11px]">
                      {d.latitude.toFixed(4)}°, {d.longitude.toFixed(4)}°
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-slate-200">{d.batteryLevel || 92}%</span>
                        <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${d.batteryLevel || 92}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => navigate(`/tracking?deviceId=${devKey}`)}
                        >
                          📍 Track
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => navigate(`/playback?deviceId=${devKey}`)}
                        >
                          ⏱️ History
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedDetails(d)}
                        >
                          ℹ️ Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Details Modal */}
      {selectedDetails && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">{selectedDetails.name}</h3>
                <div className="text-xs text-indigo-400 font-mono">{selectedDetails.deviceId || selectedDetails.id}</div>
              </div>
              <button onClick={() => setSelectedDetails(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">IMEI Number</span>
                <span className="text-slate-200 font-mono">864209048123456</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">Firmware Version</span>
                <span className="text-slate-200 font-mono">v3.4.2-rel</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">Cellular Protocol</span>
                <span className="text-slate-200">Teltonika Codec 8</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">GNSS Accuracy</span>
                <span className="text-emerald-400 font-mono">&lt; 2.5 meters (WAAS)</span>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-800">
              <Button variant="secondary" size="sm" onClick={() => setSelectedDetails(null)}>Close</Button>
              <Button size="sm" onClick={() => {
                const id = selectedDetails.deviceId || selectedDetails.id;
                setSelectedDetails(null);
                navigate(`/tracking?deviceId=${id}`);
              }}>
                Launch Live Tracker →
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Register Telematics Device</h3>
              <button onClick={() => setShowRegisterModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Device / Vehicle Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Patrol Squad Car 05"
                  value={newDeviceName}
                  onChange={e => setNewDeviceName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Hardware Category</label>
                <select
                  value={newDeviceType}
                  onChange={e => setNewDeviceType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="FLEET_VEHICLE">Fleet Commercial Vehicle (OBD-II)</option>
                  <option value="DRONE_UAV">Drone / UAV Quadcopter</option>
                  <option value="LOGISTICS_HAULER">Heavy Transport Semi-Trailer</option>
                  <option value="IOT_SENSOR">Fixed Geofenced Sensor Pod</option>
                </select>
              </div>
              <div className="flex items-center justify-end space-x-2 pt-2">
                <Button variant="secondary" size="sm" type="button" onClick={() => setShowRegisterModal(false)}>Cancel</Button>
                <Button size="sm" type="submit">Complete Provisioning</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
