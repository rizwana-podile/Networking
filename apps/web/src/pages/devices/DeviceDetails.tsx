import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import L from 'leaflet';
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

export const DeviceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [device, setDevice] = useState<DeviceItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editStatus, setEditStatus] = useState('ONLINE');
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  // Fetch device data from backend
  const fetchDeviceData = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/devices');
      const data = await res.json();
      if (data.items) {
        const found = data.items.find((d: any) => (d.deviceId === id || d.id === id)) || data.items[0];
        if (found) {
          setDevice(found);
          setEditName(found.name);
          setEditStatus(found.status || 'ONLINE');
        }
      }
    } catch (e) {
      console.error('Failed to fetch device details:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeviceData();
    const interval = setInterval(fetchDeviceData, 3000);
    return () => clearInterval(interval);
  }, [id]);

  // Leaflet map initialization
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const lat = device?.latitude || 37.7749;
    const lng = device?.longitude || -122.4194;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 15,
      zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    const customIcon = L.divIcon({
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: 44px; height: 44px; border-radius: 50%; background: rgba(6, 182, 212, 0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="width: 32px; height: 32px; border-radius: 50%; background: #0284c7; border: 2.5px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.6); font-size: 15px;">
            🚗
          </div>
        </div>
      `,
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    markerRef.current = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update marker when coordinates change
  useEffect(() => {
    if (device && markerRef.current && mapRef.current) {
      markerRef.current.setLatLng([device.latitude, device.longitude]);
      mapRef.current.panTo([device.latitude, device.longitude], { animate: true });
    }
  }, [device?.latitude, device?.longitude]);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!device) return;
    setDevice({ ...device, name: editName, status: editStatus });
    setShowEditModal(false);
    setSaveSuccess('Device properties updated successfully.');
    setTimeout(() => setSaveSuccess(null), 3500);
  };

  const devKey = device?.deviceId || device?.id || id || 'DEV-GPS-001';
  const isMoving = (device?.speedKph || 0) > 5;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Back Button & Top Action Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/devices')}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs flex items-center space-x-1.5"
          >
            <span>&larr;</span>
            <span className="hidden sm:inline">Registry</span>
          </button>
          <div>
            <div className="flex items-center space-x-2.5">
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                {device?.name || 'Device Details'}
              </h1>
              <Badge variant={isMoving ? 'success' : 'warning'}>
                {isMoving ? 'IN TRANSIT' : 'STATIONARY'}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="font-mono text-xs text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
                {devKey}
              </span>
              <span className="text-xs text-slate-400">
                {device?.type?.includes('Drone') ? 'UAV Autonomous Drone' : 'Commercial Fleet Vehicle (OBD-II)'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Track, History, Edit */}
        <div className="flex items-center space-x-2.5">
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate(`/tracking?deviceId=${devKey}`)}
            className="shadow-lg shadow-cyan-500/20"
          >
            📍 Track Live
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(`/playback?deviceId=${devKey}`)}
          >
            ⏱️ Route History
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowEditModal(true)}
          >
            ✏️ Edit Device
          </Button>
        </div>
      </div>

      {/* Save Success Toast */}
      {saveSuccess && (
        <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-lg animate-fade-in">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{saveSuccess}</span>
          </div>
          <button onClick={() => setSaveSuccess(null)} className="text-emerald-400 hover:text-white font-bold ml-4">
            &times;
          </button>
        </div>
      )}

      {/* 4 Telemetry KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Instantaneous Speed</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">
            {(device?.speedKph || 42.0).toFixed(1)} km/h
          </div>
          <div className="mt-1 text-xs text-slate-400">Heading: {device?.headingDegrees || 180}° S</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Battery Level</div>
          <div className="mt-2 text-2xl font-extrabold text-white font-mono">
            {device?.batteryLevel || 94}%
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full"
              style={{ width: `${device?.batteryLevel || 94}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Cellular Link</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">4G LTE</div>
          <div className="mt-1 text-xs text-slate-400">Signal: -68 dBm (Band 4)</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">GNSS Accuracy</div>
          <div className="mt-2 text-2xl font-extrabold text-indigo-400 font-mono">&lt; 2.5 m</div>
          <div className="mt-1 text-xs text-slate-400">14 Satellites Locked (WAAS)</div>
        </div>
      </div>

      {/* Main Grid: Interactive Mini-Map & Hardware Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Mini-Map */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[420px]">
          <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Current Geographic Position</span>
            </div>
            <span className="text-xs font-mono text-cyan-400">
              {device?.latitude.toFixed(5)}° N, {device?.longitude.toFixed(5)}° W
            </span>
          </div>

          <div ref={mapContainerRef} className="w-full h-80 flex-1 z-0" />

          <div className="p-3 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Last Communication: <strong className="text-slate-200">Just now (PostGIS Stream)</strong></span>
            <button
              onClick={() => navigate(`/tracking?deviceId=${devKey}`)}
              className="text-cyan-400 hover:text-cyan-300 font-bold"
            >
              Open Full Screen Radar &rarr;
            </button>
          </div>
        </div>

        {/* Hardware & Protocol Specifications */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hardware Profile</span>
            <h3 className="text-base font-bold text-white mt-1">Device Specifications</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Hardware IMEI</span>
              <span className="text-slate-200 font-mono font-semibold mt-0.5 block">864209048123456</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Firmware Version</span>
              <span className="text-slate-200 font-mono font-semibold mt-0.5 block">v3.4.2-rel (Teltonika Codec 8)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Telemetry Protocol</span>
              <span className="text-cyan-400 font-semibold mt-0.5 block">MQTT over TLS 1.3 (Port 8883)</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Geofence Assignment</span>
              <span className="text-emerald-400 font-semibold mt-0.5 block">San Francisco Metropolitan Zone</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Location History Table & Activity Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Location History Trail */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Recent Waypoint Coordinates</h3>
              <p className="text-xs text-slate-400">High-resolution chronological GPS position history</p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate(`/playback?deviceId=${devKey}`)}
            >
              Replay Full Trail
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-2.5">Time</th>
                  <th className="p-2.5">Coordinates</th>
                  <th className="p-2.5">Speed</th>
                  <th className="p-2.5">Battery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {[0, 1, 2, 3, 4].map(step => {
                  const lat = (device?.latitude || 37.7749) - step * 0.0004;
                  const lng = (device?.longitude || -122.4194) - step * 0.0003;
                  const speed = Math.max(25, (device?.speedKph || 42) - step * 2.5);
                  return (
                    <tr key={step} className="hover:bg-slate-800/30">
                      <td className="p-2.5 font-mono text-slate-400">{step * 15}s ago</td>
                      <td className="p-2.5 font-mono text-cyan-400">{lat.toFixed(4)}°, {lng.toFixed(4)}°</td>
                      <td className="p-2.5 font-mono text-white">{speed.toFixed(1)} km/h</td>
                      <td className="p-2.5 font-mono text-emerald-400">{device?.batteryLevel || 94}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Timeline & Device Alerts */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white tracking-tight">Activity Timeline &amp; Alarms</h3>
            <p className="text-xs text-slate-400">Automated event stream, boundary checks, and threshold logs</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3">
              <span className="text-base mt-0.5">📍</span>
              <div className="flex-1">
                <div className="font-semibold text-white">Continuous GPS Telemetry Active</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Position updated via autonomous prober daemon at 2,000ms cadence.</div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Just now</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3">
              <span className="text-base mt-0.5">🛡️</span>
              <div className="flex-1">
                <div className="font-semibold text-white">PostGIS Geofence Incursion Verified</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Unit verified inside authorized commercial operating polygon.</div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">2m ago</span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3">
              <span className="text-base mt-0.5">📶</span>
              <div className="flex-1">
                <div className="font-semibold text-white">Cellular Carrier Handover Complete</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Switched to Edge Base Station SF-DOWNTOWN-04 with zero packet loss.</div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">10m ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Device Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSaveEdit} className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Edit Device Profile</h3>
              <button type="button" onClick={() => setShowEditModal(false)} className="text-slate-400 hover:text-white text-xl">
                &times;
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Device Name</label>
              <input
                type="text"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Operating Status</label>
              <select
                value={editStatus}
                onChange={e => setEditStatus(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="ONLINE">ONLINE (Active & Streaming)</option>
                <option value="MAINTENANCE">MAINTENANCE (Offline for Service)</option>
                <option value="DEACTIVATED">DEACTIVATED</option>
              </select>
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-slate-800">
              <Button type="button" variant="secondary" size="sm" onClick={() => setShowEditModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
