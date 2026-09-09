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
  const isAdmin = user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN' || user?.role === 'NETWORK_ADMIN';

  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [newDeviceType, setNewDeviceType] = useState('FLEET_VEHICLE');

  const [editingDevice, setEditingDevice] = useState<DeviceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
    if (!newDeviceName.trim()) return;

    try {
      const newDev = {
        name: newDeviceName.trim(),
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
      setToastMessage(`Device "${newDev.name}" registered successfully.`);
      setTimeout(() => setToastMessage(null), 3500);
      fetchDevices();
    } catch (e) {
      console.error('Registration failed:', e);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDevice) return;

    setDevices(prev =>
      prev.map(d =>
        d.id === editingDevice.id || d.deviceId === editingDevice.deviceId ? editingDevice : d
      )
    );
    setToastMessage(`Device "${editingDevice.name}" updated successfully.`);
    setTimeout(() => setToastMessage(null), 3500);
    setEditingDevice(null);
  };

  const handleDeleteDevice = (devKey: string, devName: string) => {
    if (window.confirm(`Are you sure you want to deactivate and remove ${devName} (${devKey})?`)) {
      setDevices(prev => prev.filter(d => (d.deviceId !== devKey && d.id !== devKey)));
      setToastMessage(`Device ${devKey} deactivated and removed from registry.`);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  const filtered = devices.filter(d => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceId.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'MOVING' && (d.speedKph || 0) > 5) ||
      (statusFilter === 'STATIONARY' && (d.speedKph || 0) <= 5) ||
      (statusFilter === 'OFFLINE' && d.status === 'OFFLINE');
    const matchesType =
      typeFilter === 'ALL' || d.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginatedDevices = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              📱
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">My Devices</h1>
            <Badge variant="success">HARDWARE REGISTRY</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Manage authorized GPS trackers, telemetry profiles, and physical unit assignments
          </p>
        </div>

        {isAdmin && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowRegisterModal(true)}
            className="shadow-lg shadow-cyan-500/20"
          >
            + Register New Device
          </Button>
        )}
      </div>

      {/* Main Table Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        {/* Search, Status Filter, and Type Dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by device name or ID..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-64 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />

            {/* Status Chips */}
            <div className="flex items-center space-x-1">
              {['ALL', 'MOVING', 'STATIONARY', 'OFFLINE'].map(st => (
                <button
                  key={st}
                  onClick={() => {
                    setStatusFilter(st);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    statusFilter === st
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Device Type Select */}
            <select
              value={typeFilter}
              onChange={e => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="ALL">All Hardware Types</option>
              <option value="FLEET_VEHICLE">Fleet Commercial Vehicles</option>
              <option value="DRONE_UAV">Drone / UAV Quadcopters</option>
              <option value="LOGISTICS_HAULER">Heavy Transport Semi-Trailers</option>
              <option value="IOT_SENSOR">Fixed Geofence Sensor Pods</option>
            </select>
          </div>

          <span className="text-xs text-slate-400 font-mono">
            {filtered.length} matching of {devices.length} registered trackers
          </span>
        </div>

        {/* Device Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Device Name & ID</th>
                <th className="p-3">Hardware Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Battery</th>
                <th className="p-3">Speed</th>
                <th className="p-3">Coordinates</th>
                <th className="p-3">Last Seen</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {paginatedDevices.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-slate-500">
                    No devices matched the selected filter criteria.
                  </td>
                </tr>
              ) : (
                paginatedDevices.map(d => {
                  const devKey = d.deviceId || d.id;
                  const isMoving = (d.speedKph || 0) > 5;
                  return (
                    <tr key={devKey} className="hover:bg-slate-800/30 transition">
                      <td className="p-3">
                        <div className="font-semibold text-white flex items-center space-x-1.5">
                          <span>{d.type.includes('Drone') ? '🛸' : '🚗'}</span>
                          <span>{d.name}</span>
                        </div>
                        <div className="font-mono text-[11px] text-cyan-400 mt-0.5">{devKey}</div>
                      </td>

                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 font-medium">
                          {d.type.includes('Drone')
                            ? 'UAV Drone'
                            : d.type.includes('HAULER')
                            ? 'Logistics Hauler'
                            : 'Fleet Vehicle'}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                          <span className={`w-1.5 h-1.5 rounded-full ${isMoving ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400'}`}></span>
                          <span>{isMoving ? 'In Transit' : 'Stationary'}</span>
                        </span>
                      </td>

                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-slate-200 font-semibold">{d.batteryLevel || 92}%</span>
                          <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-emerald-500 h-full rounded-full"
                              style={{ width: `${d.batteryLevel || 92}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td className="p-3 font-mono font-bold text-cyan-400">
                        {(d.speedKph || 42).toFixed(1)} km/h
                      </td>

                      <td className="p-3 font-mono text-slate-400 text-[11px]">
                        {d.latitude.toFixed(4)}°, {d.longitude.toFixed(4)}°
                      </td>

                      <td className="p-3 text-slate-400 text-[11px]">
                        Just now
                      </td>

                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <Button
                            size="sm"
                            variant="primary"
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
                            variant="secondary"
                            onClick={() => navigate(`/devices/${devKey}`)}
                          >
                            ℹ️ Details
                          </Button>

                          {isAdmin && (
                            <>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setEditingDevice({ ...d })}
                                title="Edit device"
                              >
                                ✏️
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDeleteDevice(devKey, d.name)}
                                title="Deactivate device"
                                className="text-rose-400 hover:text-rose-300"
                              >
                                🗑️
                              </Button>
                            </>
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

        {/* Pagination Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
          <div>
            Showing Page <span className="text-white font-bold">{currentPage}</span> of{' '}
            <span className="text-white font-bold">{totalPages}</span> ({filtered.length} items)
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              &larr; Previous
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              Next &rarr;
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Device Modal */}
      {editingDevice && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSaveEdit} className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Edit Device Properties</h3>
              <button type="button" onClick={() => setEditingDevice(null)} className="text-slate-400 hover:text-white text-xl">
                &times;
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Device Name</label>
              <input
                type="text"
                value={editingDevice.name}
                onChange={e => setEditingDevice({ ...editingDevice, name: e.target.value })}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Hardware Category</label>
              <select
                value={editingDevice.type}
                onChange={e => setEditingDevice({ ...editingDevice, type: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="FLEET_VEHICLE">Fleet Commercial Vehicle (OBD-II)</option>
                <option value="DRONE_UAV">Drone / UAV Quadcopter</option>
                <option value="LOGISTICS_HAULER">Heavy Transport Semi-Trailer</option>
                <option value="IOT_SENSOR">Fixed Geofenced Sensor Pod</option>
              </select>
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
              <Button type="button" variant="secondary" size="sm" onClick={() => setEditingDevice(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Register New Device Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">Register Telematics Device</h3>
              <button onClick={() => setShowRegisterModal(false)} className="text-slate-400 hover:text-white text-xl">
                &times;
              </button>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Device / Vehicle Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Patrol Squad Car 05"
                  value={newDeviceName}
                  onChange={e => setNewDeviceName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Hardware Category</label>
                <select
                  value={newDeviceType}
                  onChange={e => setNewDeviceType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="FLEET_VEHICLE">Fleet Commercial Vehicle (OBD-II)</option>
                  <option value="DRONE_UAV">Drone / UAV Quadcopter</option>
                  <option value="LOGISTICS_HAULER">Heavy Transport Semi-Trailer</option>
                  <option value="IOT_SENSOR">Fixed Geofenced Sensor Pod</option>
                </select>
              </div>
              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <Button variant="secondary" size="sm" type="button" onClick={() => setShowRegisterModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Complete Provisioning
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
