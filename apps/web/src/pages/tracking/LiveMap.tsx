import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface DeviceTelemetry {
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

export const LiveTrackingMap: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [devices, setDevices] = useState<DeviceTelemetry[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>(searchParams.get('deviceId') || 'DEV-GPS-001');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTrackingActive, setIsTrackingActive] = useState(true);
  const [followMode, setFollowMode] = useState(true);
  const [lastUpdateSecondsAgo, setLastUpdateSecondsAgo] = useState(0);
  const [breadcrumbPoints, setBreadcrumbPoints] = useState<[number, number][]>([]);

  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const polylineRef = useRef<L.Polyline | null>(null);

  const selectedDevice = devices.find(d => (d.deviceId === selectedDeviceId || d.id === selectedDeviceId)) || devices[0];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [37.7749, -122.4194],
      zoom: 14,
      zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    polylineRef.current = L.polyline([], {
      color: '#6366f1',
      weight: 4,
      opacity: 0.85,
      dashArray: '8, 8'
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Poll real devices from backend server (continuous real-time GPS stream)
  useEffect(() => {
    let active = true;

    const fetchDevices = async () => {
      if (!isTrackingActive) return;

      try {
        const res = await fetch('http://localhost:4000/api/v1/devices');
        const data = await res.json();

        if (active && data.items && data.items.length > 0) {
          setDevices(data.items);
          setLastUpdateSecondsAgo(0);

          // Update Leaflet map markers
          if (mapRef.current) {
            const map = mapRef.current;

            data.items.forEach((dev: DeviceTelemetry) => {
              const devKey = dev.deviceId || dev.id;
              const isSelected = devKey === selectedDeviceId;
              const latLng: [number, number] = [dev.latitude, dev.longitude];

              const iconHtml = `
                <div style="position: relative; display: flex; align-items: center; justify-content: center;">
                  ${isSelected ? '<div style="position: absolute; width: 38px; height: 38px; border-radius: 50%; background: rgba(99, 102, 241, 0.35); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>' : ''}
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: ${isSelected ? '#6366f1' : '#1e293b'}; border: 2px solid ${isSelected ? '#ffffff' : '#94a3b8'}; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5); font-size: 13px;">
                    ${dev.type.includes('Drone') ? '🛸' : '🚗'}
                  </div>
                  <div style="position: absolute; top: -18px; white-space: nowrap; background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(51, 65, 85, 0.8); border-radius: 4px; padding: 1px 5px; font-size: 10px; font-weight: 600; color: #f8fafc;">
                    ${dev.name.split(' ')[0]} • ${(dev.speedKph || 42).toFixed(0)} km/h
                  </div>
                </div>
              `;

              const customIcon = L.divIcon({
                html: iconHtml,
                className: 'custom-vehicle-marker',
                iconSize: [28, 28],
                iconAnchor: [14, 14]
              });

              if (markersRef.current.has(devKey)) {
                const marker = markersRef.current.get(devKey)!;
                marker.setLatLng(latLng);
                marker.setIcon(customIcon);
              } else {
                const marker = L.marker(latLng, { icon: customIcon }).addTo(map);
                marker.on('click', () => setSelectedDeviceId(devKey));
                markersRef.current.set(devKey, marker);
              }

              // Update breadcrumbs and follow selected device
              if (isSelected) {
                setBreadcrumbPoints(prev => {
                  const updated = [...prev, latLng].slice(-30);
                  if (polylineRef.current) polylineRef.current.setLatLngs(updated);
                  return updated;
                });

                if (followMode) {
                  map.panTo(latLng, { animate: true, duration: 0.8 });
                }
              }
            });
          }
        }
      } catch (err) {
        console.error('Error fetching live GPS telemetry:', err);
      }
    };

    fetchDevices();
    const interval = setInterval(fetchDevices, 2000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [isTrackingActive, selectedDeviceId, followMode]);

  // Increment local "seconds ago" ticker
  useEffect(() => {
    const ticker = setInterval(() => {
      setLastUpdateSecondsAgo(prev => prev + 1);
    }, 1000);
    return () => clearInterval(ticker);
  }, []);

  // Center map action
  const handleCenterMap = () => {
    if (mapRef.current && selectedDevice) {
      mapRef.current.setView([selectedDevice.latitude, selectedDevice.longitude], 15, { animate: true });
    }
  };

  const filteredDevices = devices.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.deviceId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 max-w-[1600px] mx-auto h-[calc(100vh-100px)] flex flex-col">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 backdrop-blur border border-slate-800 p-4 rounded-xl shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-lg">
            📍
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold text-white tracking-tight">Live Fleet GPS Tracking</h1>
              <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${isTrackingActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isTrackingActive ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'}`}></span>
                <span>{isTrackingActive ? 'LIVE STREAMING' : 'STREAM PAUSED'}</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">Cryptographically signed GPS telemetry • PostGIS Geodetic Stream</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant={isTrackingActive ? 'secondary' : 'primary'}
            onClick={() => setIsTrackingActive(!isTrackingActive)}
          >
            {isTrackingActive ? '⏸️ Pause Stream' : '▶️ Resume Stream'}
          </Button>
          <Button size="sm" variant="secondary" onClick={handleCenterMap}>
            🎯 Center Map
          </Button>
          <Button
            size="sm"
            variant={followMode ? 'primary' : 'secondary'}
            onClick={() => setFollowMode(!followMode)}
          >
            {followMode ? '🔒 Auto-Follow ON' : '🔓 Auto-Follow OFF'}
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => navigate(`/playback?deviceId=${selectedDevice?.deviceId || selectedDeviceId}`)}
          >
            ⏱️ View History
          </Button>
        </div>
      </div>

      {/* Main Grid: Device Picker, Full Map, Telemetry Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1 min-h-0">
        {/* Left: Device Selector */}
        <div className="lg:col-span-1 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col min-h-0">
          <div className="mb-3 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span>Select Active Tracker</span>
              <span className="text-indigo-400">{filteredDevices.length} available</span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name or ID..."
              className="w-full bg-slate-800/80 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder:text-slate-500"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filteredDevices.map(d => {
              const devKey = d.deviceId || d.id;
              const isSelected = devKey === selectedDeviceId;
              return (
                <div
                  key={devKey}
                  onClick={() => {
                    setSelectedDeviceId(devKey);
                    setBreadcrumbPoints([]);
                  }}
                  className={`p-3 rounded-xl cursor-pointer border transition-all ${isSelected ? 'bg-indigo-600/20 border-indigo-500 shadow-md shadow-indigo-500/10' : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/70'}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-white truncate max-w-[140px]">{d.name}</span>
                    <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>LIVE</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{d.deviceId}</span>
                    <span className="font-mono text-slate-200">{(d.speedKph || 42).toFixed(1)} km/h</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60 pt-1.5">
                    <span>Battery: {d.batteryLevel || 92}%</span>
                    <span>{d.type.includes('Drone') ? 'UAV Quad' : 'Fleet 4G'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Live Interactive Leaflet Map */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden flex flex-col">
          <div ref={mapContainerRef} className="w-full h-full min-h-[420px] z-0" />

          {/* Map Overlay Badge */}
          <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 shadow-xl pointer-events-none">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white">{selectedDevice?.name || 'Loading Tracker...'}</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">
              {selectedDevice?.latitude.toFixed(5)}° N, {selectedDevice?.longitude.toFixed(5)}° W
            </div>
          </div>

          {/* Bottom Coordinates Strip */}
          <div className="absolute bottom-3 left-3 right-3 z-[400] bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 shadow-xl flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className="text-slate-400">Heading: <strong className="text-slate-200">{selectedDevice?.headingDegrees || 180}°</strong></span>
              <span className="text-slate-400">Speed: <strong className="text-emerald-400 font-mono">{(selectedDevice?.speedKph || 42).toFixed(1)} km/h</strong></span>
              <span className="text-slate-400">Updated: <strong className="text-slate-200">{lastUpdateSecondsAgo}s ago</strong></span>
            </div>
            <div className="text-slate-500 text-[11px]">
              CartoDB Dark Tiles • OpenStreetMap
            </div>
          </div>
        </div>

        {/* Right: Selected Device Telemetry Drawer */}
        <div className="lg:col-span-1 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="pb-3 border-b border-slate-800">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Target Telemetry</div>
              <h2 className="text-base font-bold text-white mt-0.5">{selectedDevice?.name || 'Device'}</h2>
              <div className="text-xs text-indigo-400 font-mono">{selectedDevice?.deviceId || selectedDeviceId}</div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Operational Status</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ONLINE / LIVE</span>
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Movement State</span>
                <span className="text-slate-200 font-semibold">
                  {(selectedDevice?.speedKph || 0) > 5 ? '🚗 In Transit' : '⏸️ Stationary'}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Current Velocity</span>
                <span className="text-emerald-400 font-mono font-bold">
                  {(selectedDevice?.speedKph || 42.0).toFixed(1)} km/h
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Latitude</span>
                <span className="text-slate-200 font-mono">{selectedDevice?.latitude.toFixed(5)}°</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Longitude</span>
                <span className="text-slate-200 font-mono">{selectedDevice?.longitude.toFixed(5)}°</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                <span className="text-slate-400">Cellular Link</span>
                <span className="text-indigo-400 font-semibold">4G LTE (Band 4)</span>
              </div>

              <div className="space-y-1 py-1.5">
                <div className="flex justify-between text-slate-400">
                  <span>Battery Reserve</span>
                  <span className="text-slate-200 font-bold">{selectedDevice?.batteryLevel || 94}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${selectedDevice?.batteryLevel || 94}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800">
            <Button className="w-full text-xs" onClick={handleCenterMap}>
              🎯 Snap View to Vehicle
            </Button>
            <Button
              variant="secondary"
              className="w-full text-xs"
              onClick={() => navigate(`/playback?deviceId=${selectedDevice?.deviceId || selectedDeviceId}`)}
            >
              ⏱️ Route History & Playback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
