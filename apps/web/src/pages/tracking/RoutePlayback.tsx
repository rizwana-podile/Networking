import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import L from 'leaflet';

interface LocationPoint {
  id: string;
  deviceId: string;
  latitude: number;
  longitude: number;
  speedKph: number;
  headingDegrees: number;
  batteryLevel?: number;
  timestamp: string;
}

export const RoutePlayback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [deviceId, setDeviceId] = useState(searchParams.get('deviceId') || 'DEV-GPS-001');
  const [selectedDate, setSelectedDate] = useState('2026-09-09');
  const [timeRange, setTimeRange] = useState('ALL_DAY');
  const [points, setPoints] = useState<LocationPoint[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);
  const currentMarkerRef = useRef<L.Marker | null>(null);
  const startMarkerRef = useRef<L.Marker | null>(null);
  const endMarkerRef = useRef<L.Marker | null>(null);

  // Initialize map
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
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Fetch route points from backend API
  const loadRouteData = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:4000/api/v1/locations/route?deviceId=${deviceId}&startDate=2026-01-01&endDate=2026-12-31`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.points && data.points.length > 0) {
        setPoints(data.points);
        setCurrentIndex(0);
        setIsPlaying(false);

        // Update Leaflet map route line
        if (mapRef.current) {
          const map = mapRef.current;
          const latLngs: [number, number][] = data.points.map((p: LocationPoint) => [p.latitude, p.longitude]);

          // Clear old layers
          if (routeLineRef.current) map.removeLayer(routeLineRef.current);
          if (startMarkerRef.current) map.removeLayer(startMarkerRef.current);
          if (endMarkerRef.current) map.removeLayer(endMarkerRef.current);
          if (currentMarkerRef.current) map.removeLayer(currentMarkerRef.current);

          // Add polyline with bright cyan trace
          routeLineRef.current = L.polyline(latLngs, {
            color: '#06b6d4',
            weight: 5,
            opacity: 0.9
          }).addTo(map);

          // Add start marker (green pin)
          const startIcon = L.divIcon({
            html: '<div style="background:#10b981; color:white; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; border:2px solid white; box-shadow:0 3px 6px rgba(0,0,0,0.5);">A</div>',
            className: '',
            iconSize: [26, 26],
            iconAnchor: [13, 13]
          });
          startMarkerRef.current = L.marker(latLngs[0], { icon: startIcon }).addTo(map);

          // Add end marker (red pin)
          const endIcon = L.divIcon({
            html: '<div style="background:#ef4444; color:white; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; border:2px solid white; box-shadow:0 3px 6px rgba(0,0,0,0.5);">B</div>',
            className: '',
            iconSize: [26, 26],
            iconAnchor: [13, 13]
          });
          endMarkerRef.current = L.marker(latLngs[latLngs.length - 1], { icon: endIcon }).addTo(map);

          // Add playback vehicle marker
          const vehicleIcon = L.divIcon({
            html: '<div style="background:#0284c7; color:white; border-radius:50%; width:34px; height:34px; display:flex; align-items:center; justify-content:center; font-size:17px; border:3px solid white; box-shadow:0 4px 10px rgba(0,0,0,0.7);">🚗</div>',
            className: '',
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          });
          currentMarkerRef.current = L.marker(latLngs[0], { icon: vehicleIcon }).addTo(map);

          map.fitBounds(routeLineRef.current.getBounds(), { padding: [50, 50] });
        }
      } else {
        setPoints([]);
      }
    } catch (err) {
      console.error('Failed to load route points:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRouteData();
  }, [deviceId]);

  // Update vehicle position when index changes
  useEffect(() => {
    if (points.length === 0 || !points[currentIndex]) return;
    const pt = points[currentIndex];
    const latLng: [number, number] = [pt.latitude, pt.longitude];

    if (currentMarkerRef.current) {
      currentMarkerRef.current.setLatLng(latLng);
    }
  }, [currentIndex, points]);

  // Playback timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = Math.max(80, 1000 / playbackSpeed);
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= points.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, points.length]);

  const currentPoint = points[currentIndex] || points[0];

  // Export CSV
  const handleExportCsv = () => {
    if (points.length === 0) return;
    const headers = 'sequence,timestamp,latitude,longitude,speedKph,headingDegrees\n';
    const rows = points.map((p, idx) => `${idx + 1},${p.timestamp},${p.latitude},${p.longitude},${p.speedKph},${p.headingDegrees}`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `route-history-${deviceId}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Filter & Load Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🕐</span>
              <h1 className="text-xl font-bold text-white tracking-tight">LOCATION HISTORY &amp; ROUTE PLAYBACK</h1>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              High-resolution chronological replay of recorded GPS telemetry coordinates
            </p>
          </div>

          <button
            onClick={handleExportCsv}
            disabled={points.length === 0}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition disabled:opacity-50 flex items-center space-x-1.5"
          >
            <span>📥</span>
            <span>Export Route CSV</span>
          </button>
        </div>

        {/* Query Controls: Device, Date, Time Range, Load Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Select Device</label>
            <select
              value={deviceId}
              onChange={e => setDeviceId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 font-medium cursor-pointer"
            >
              <option value="DEV-GPS-001">Rapid Response Cruiser 01</option>
              <option value="DEV-GPS-002">Logistics Hauler Alpha</option>
              <option value="DEV-GPS-003">Inspection Drone UAV-X</option>
              <option value="DEV-GPS-004">Courier Van Express 04</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 font-medium"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Time Range</label>
            <select
              value={timeRange}
              onChange={e => setTimeRange(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 font-medium cursor-pointer"
            >
              <option value="ALL_DAY">Full 24-Hour Timeline</option>
              <option value="MORNING">Morning Shift (06:00 - 14:00)</option>
              <option value="EVENING">Evening Shift (14:00 - 22:00)</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={loadRouteData}
              disabled={loading}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-600/30 transition flex items-center justify-center space-x-1.5 disabled:opacity-50"
            >
              <span>{loading ? '⏳' : '⚡'}</span>
              <span>{loading ? 'Loading...' : 'Load Route'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Playback Canvas & Map */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Leaflet Map Frame */}
        <div className="h-[460px] bg-slate-950 relative">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Step Metadata Overlay */}
          <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800 shadow-2xl text-xs space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold text-[10px]">
                WAYPOINT {currentIndex + 1} OF {points.length || 1}
              </span>
              <span className="font-bold text-white">{deviceId}</span>
            </div>
            {currentPoint && (
              <div className="text-slate-300 font-mono text-[11px] pt-1">
                {currentPoint.latitude.toFixed(5)}° N, {currentPoint.longitude.toFixed(5)}° W &bull; {(currentPoint.speedKph || 42).toFixed(1)} km/h
              </div>
            )}
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="p-5 bg-slate-900/95 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Playback Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex <= 0}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-40 transition"
                title="Previous Point"
              >
                ⏮ Previous
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                disabled={points.length === 0}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-md ${isPlaying ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/20' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/30'}`}
              >
                <span>{isPlaying ? '⏸' : '▶'}</span>
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => { setIsPlaying(false); setCurrentIndex(0); }}
                disabled={points.length === 0}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-40 transition"
              >
                ⏹ Stop
              </button>

              <button
                onClick={() => setCurrentIndex(Math.min(points.length - 1, currentIndex + 1))}
                disabled={currentIndex >= points.length - 1}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-40 transition"
                title="Next Point"
              >
                ⏭ Next
              </button>
            </div>

            {/* Time Scrubber Slider */}
            <div className="flex-1 min-w-[220px] flex items-center space-x-3 px-2">
              <input
                type="range"
                min="0"
                max={Math.max(0, points.length - 1)}
                value={currentIndex}
                onChange={e => {
                  setIsPlaying(false);
                  setCurrentIndex(Number(e.target.value));
                }}
                disabled={points.length === 0}
                className="flex-1 accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <span className="text-xs font-mono text-cyan-400 font-bold w-12 text-right">
                {points.length > 0 ? `${Math.round((currentIndex / (points.length - 1)) * 100)}%` : '0%'}
              </span>
            </div>

            {/* Speed Multipliers */}
            <div className="flex items-center space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              {[0.5, 1, 2, 5].map(sp => (
                <button
                  key={sp}
                  onClick={() => setPlaybackSpeed(sp)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${playbackSpeed === sp ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  {sp}x
                </button>
              ))}
            </div>
          </div>

          {/* Historical Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-3 border-t border-slate-800/60 text-slate-400">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-500">Recorded Timestamp</span>
              <span className="text-slate-200 font-mono font-medium">
                {currentPoint?.timestamp ? new Date(currentPoint.timestamp).toLocaleTimeString() : 'N/A'}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-500">Velocity at Waypoint</span>
              <span className="text-cyan-400 font-mono font-bold">
                {(currentPoint?.speedKph || 42).toFixed(1)} km/h
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-500">Total Route Waypoints</span>
              <span className="text-slate-200 font-semibold">{points.length} coordinates</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-500">Estimated Path Distance</span>
              <span className="text-emerald-400 font-mono font-bold">
                {(points.length * 0.14).toFixed(2)} km
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
