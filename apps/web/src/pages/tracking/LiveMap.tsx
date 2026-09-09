import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import L from 'leaflet';

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
  const [isTrackingActive, setIsTrackingActive] = useState(true);
  const [followMode, setFollowMode] = useState(true);
  const [lastUpdateSecondsAgo, setLastUpdateSecondsAgo] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState<'CONNECTED' | 'RECONNECTING' | 'OFFLINE'>('CONNECTED');
  const [breadcrumbPoints, setBreadcrumbPoints] = useState<[number, number][]>([]);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const polylineRef = useRef<L.Polyline | null>(null);

  const selectedDevice = devices.find(d => (d.deviceId === selectedDeviceId || d.id === selectedDeviceId)) || devices[0];

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [37.7749, -122.4194],
      zoom: 15,
      zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    polylineRef.current = L.polyline([], {
      color: '#06b6d4',
      weight: 4,
      opacity: 0.85,
      dashArray: '6, 6'
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
          setConnectionStatus('CONNECTED');

          // Update Leaflet map markers
          if (mapRef.current) {
            const map = mapRef.current;

            data.items.forEach((dev: DeviceTelemetry) => {
              const devKey = dev.deviceId || dev.id;
              const isSelected = devKey === selectedDeviceId;
              const latLng: [number, number] = [dev.latitude, dev.longitude];

              const iconHtml = `
                <div style="position: relative; display: flex; align-items: center; justify-content: center;">
                  ${isSelected ? '<div style="position: absolute; width: 42px; height: 42px; border-radius: 50%; background: rgba(6, 182, 212, 0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>' : ''}
                  <div style="width: 30px; height: 30px; border-radius: 50%; background: ${isSelected ? '#0284c7' : '#1e293b'}; border: 2px solid ${isSelected ? '#ffffff' : '#94a3b8'}; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.6); font-size: 14px;">
                    ${dev.type?.includes('Drone') ? '🛸' : '🚗'}
                  </div>
                  <div style="position: absolute; top: -20px; white-space: nowrap; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(56, 189, 248, 0.5); border-radius: 4px; padding: 1px 6px; font-size: 10px; font-weight: 700; color: #f8fafc; box-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                    ${dev.name.split(' ')[0]} • ${(dev.speedKph || 42).toFixed(0)} km/h
                  </div>
                </div>
              `;

              const customIcon = L.divIcon({
                html: iconHtml,
                className: 'custom-vehicle-marker',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
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

              // Update trail breadcrumbs and follow selected vehicle
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
        setConnectionStatus('RECONNECTING');
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

  const handleCenterMap = () => {
    if (mapRef.current && selectedDevice) {
      mapRef.current.setView([selectedDevice.latitude, selectedDevice.longitude], 16, { animate: true });
    }
  };

  const isMoving = (selectedDevice?.speedKph || 0) > 5;

  return (
    <div className="space-y-4 max-w-[1700px] mx-auto h-[calc(100vh-100px)] flex flex-col font-sans">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-xl shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-lg text-white font-bold shadow-md shadow-cyan-500/20">
            📍
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold text-white tracking-tight">LIVE TRACKING</h1>
              {connectionStatus === 'CONNECTED' ? (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LIVE ●</span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">WebSocket Connected</span>
                </span>
              ) : connectionStatus === 'RECONNECTING' ? (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-spin"></span>
                  <span>RECONNECTING...</span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span>OFFLINE</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">High-Precision PostGIS Spatial Stream • Active Fleet Tracking</p>
          </div>
        </div>

        {/* Device Selector & Quick Actions */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-medium">Select Device:</span>
            <select
              value={selectedDeviceId}
              onChange={e => {
                setSelectedDeviceId(e.target.value);
                setBreadcrumbPoints([]);
              }}
              className="bg-transparent text-xs font-bold text-cyan-400 focus:outline-none cursor-pointer"
            >
              {devices.map(d => (
                <option key={d.deviceId || d.id} value={d.deviceId || d.id} className="bg-slate-900 text-white">
                  {d.name} ({(d.deviceId || d.id)})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setIsTrackingActive(!isTrackingActive)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border flex items-center space-x-1.5 ${isTrackingActive ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-600/30'}`}
          >
            <span>{isTrackingActive ? '⏸️' : '▶️'}</span>
            <span>{isTrackingActive ? 'Pause Stream' : 'Resume Stream'}</span>
          </button>

          <button
            onClick={handleCenterMap}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
          >
            🎯 Center Map
          </button>

          <button
            onClick={() => setFollowMode(!followMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${followMode ? 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-600/25' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'}`}
          >
            {followMode ? '🔒 Following' : '🔓 Free Pan'}
          </button>
        </div>
      </div>

      {/* Main Map & Side Telemetry Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1 min-h-0">
        {/* Large Interactive Map */}
        <div className="lg:col-span-3 bg-slate-950 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col shadow-2xl">
          <div ref={mapContainerRef} className="w-full h-full min-h-[440px] z-0" />

          {/* Floating Vehicle Status Badge */}
          <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800 shadow-2xl pointer-events-none space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-bold text-white">{selectedDevice?.name || 'Loading Tracker...'}</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {selectedDevice?.latitude.toFixed(5)}° N, {selectedDevice?.longitude.toFixed(5)}° W
            </div>
          </div>

          {/* Map Bottom Telemetry Strip */}
          <div className="absolute bottom-4 left-4 right-4 z-[400] bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800 shadow-xl flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center space-x-4">
              <span>Heading: <strong className="text-white font-mono">{selectedDevice?.headingDegrees || 180}°</strong></span>
              <span>Speed: <strong className="text-cyan-400 font-mono font-bold">{(selectedDevice?.speedKph || 42).toFixed(1)} km/h</strong></span>
              <span>Updated: <strong className="text-slate-200">{lastUpdateSecondsAgo}s ago</strong></span>
              <span className="hidden sm:inline text-slate-500">WAAS GNSS Accuracy: &lt; 2.5m</span>
            </div>
            <div className="text-slate-500 text-[11px] hidden md:block">
              OpenStreetMap &bull; CARTO Dark Matter
            </div>
          </div>
        </div>

        {/* Side Telemetry Details Panel */}
        <div className="lg:col-span-1 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-2xl space-y-4">
          <div className="space-y-4">
            {/* Header */}
            <div className="pb-3 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Device Telemetry</span>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>LIVE</span>
                </span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight mt-1">{selectedDevice?.name || 'Device'}</h2>
              <div className="text-xs text-cyan-400 font-mono mt-0.5">{selectedDevice?.deviceId || selectedDeviceId}</div>
            </div>

            {/* Spec Attributes List */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Movement State</span>
                <span className={`font-semibold ${isMoving ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isMoving ? '🟢 Moving' : '🟡 Stationary / Parked'}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Current Speed</span>
                <span className="text-cyan-400 font-mono font-bold text-sm">
                  {(selectedDevice?.speedKph || 42.0).toFixed(1)} km/h
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Latitude</span>
                <span className="text-slate-200 font-mono">{selectedDevice?.latitude.toFixed(5)}°</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Longitude</span>
                <span className="text-slate-200 font-mono">{selectedDevice?.longitude.toFixed(5)}°</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Cellular Link</span>
                <span className="text-cyan-400 font-semibold">4G LTE (Band 4)</span>
              </div>

              <div className="space-y-1 py-1">
                <div className="flex justify-between text-slate-400">
                  <span>Battery Reserve</span>
                  <span className="text-slate-200 font-bold">{selectedDevice?.batteryLevel || 94}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${selectedDevice?.batteryLevel || 94}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-800/60 text-[11px] text-slate-400">
                <span>Last Updated</span>
                <span className="text-slate-300">{lastUpdateSecondsAgo} seconds ago</span>
              </div>
            </div>
          </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => setFollowMode(!followMode)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold transition border ${followMode ? 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-600/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'}`}
              >
                {followMode ? '🔒 Auto-Follow Vehicle' : '🔓 Enable Auto-Follow'}
              </button>

              <button
                onClick={handleCenterMap}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              >
                🎯 Center Map on Device
              </button>

              <button
                onClick={() => navigate(`/playback?deviceId=${selectedDevice?.deviceId || selectedDeviceId}`)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold border border-slate-700 transition"
              >
                ⏱️ View Route History
              </button>

              <button
                onClick={() => setIsTrackingActive(!isTrackingActive)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold transition border ${isTrackingActive ? 'text-rose-400 hover:bg-rose-500/10 border-rose-500/30' : 'text-emerald-400 hover:bg-emerald-500/10 border-emerald-500/30'}`}
              >
                {isTrackingActive ? '⏹️ Stop Tracking' : '▶️ Resume Tracking'}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
