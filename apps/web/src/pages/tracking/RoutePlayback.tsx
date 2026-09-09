import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import L from 'leaflet';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

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
  useEffect(() => {
    let mounted = true;
    const fetchRoute = async () => {
      setLoading(true);
      try {
        const url = `http://localhost:4000/api/v1/locations/route?deviceId=${deviceId}&startDate=2026-01-01&endDate=2026-12-31`;
        const res = await fetch(url);
        const data = await res.json();

        if (mounted && data.points && data.points.length > 0) {
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

            // Add polyline
            routeLineRef.current = L.polyline(latLngs, {
              color: '#6366f1',
              weight: 5,
              opacity: 0.85
            }).addTo(map);

            // Add start marker (green)
            const startIcon = L.divIcon({
              html: '<div style="background:#10b981; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; border:2px solid white; box-shadow:0 2px 4px rgba(0,0,0,0.5);">A</div>',
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            });
            startMarkerRef.current = L.marker(latLngs[0], { icon: startIcon }).addTo(map);

            // Add end marker (checkered flag)
            const endIcon = L.divIcon({
              html: '<div style="background:#ef4444; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:bold; border:2px solid white; box-shadow:0 2px 4px rgba(0,0,0,0.5);">B</div>',
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            });
            endMarkerRef.current = L.marker(latLngs[latLngs.length - 1], { icon: endIcon }).addTo(map);

            // Add playback scrubber marker
            const vehicleIcon = L.divIcon({
              html: '<div style="background:#6366f1; color:white; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; font-size:16px; border:3px solid white; box-shadow:0 4px 8px rgba(0,0,0,0.6);">🚗</div>',
              className: '',
              iconSize: [32, 32],
              iconAnchor: [16, 16]
            });
            currentMarkerRef.current = L.marker(latLngs[0], { icon: vehicleIcon }).addTo(map);

            map.fitBounds(routeLineRef.current.getBounds(), { padding: [50, 50] });
          }
        } else if (mounted) {
          setPoints([]);
        }
      } catch (err) {
        console.error('Failed to load route points:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchRoute();
    return () => { mounted = false; };
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

    const intervalMs = Math.max(100, 1000 / playbackSpeed);
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
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Historical Route Playback</h1>
          <p className="text-sm text-slate-400">Scrub historical breadcrumb trails, speed profile, and spatial waypoints</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={deviceId}
            onChange={e => setDeviceId(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-indigo-500"
          >
            <option value="DEV-GPS-001">Cruiser 01 (DEV-GPS-001)</option>
            <option value="DEV-GPS-002">Logistics Hauler (DEV-GPS-002)</option>
            <option value="DEV-GPS-003">Drone UAV-X (DEV-GPS-003)</option>
            <option value="DEV-GPS-004">Courier Express (DEV-GPS-004)</option>
          </select>
          <Button variant="secondary" size="sm" onClick={handleExportCsv} disabled={points.length === 0}>
            📥 Export CSV
          </Button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        {/* Leaflet Map Canvas */}
        <div className="h-[440px] bg-slate-950 relative">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Current Waypoint Overlay */}
          <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 shadow-xl text-xs space-y-1">
            <div className="flex items-center space-x-2">
              <Badge variant="info">STEP {currentIndex + 1} / {points.length || 1}</Badge>
              <span className="font-semibold text-white">{deviceId}</span>
            </div>
            {currentPoint && (
              <div className="text-slate-400 font-mono text-[11px]">
                {currentPoint.latitude.toFixed(5)}°, {currentPoint.longitude.toFixed(5)}° • {(currentPoint.speedKph || 42).toFixed(1)} km/h
              </div>
            )}
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-4">
          <div className="flex items-center space-x-4">
            {/* Play / Pause / Stop */}
            <Button
              size="sm"
              variant={isPlaying ? 'secondary' : 'primary'}
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={points.length === 0}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => { setIsPlaying(false); setCurrentIndex(0); }}
              disabled={points.length === 0}
            >
              ⏹️ Reset
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex <= 0}
            >
              ⏮️
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setCurrentIndex(Math.min(points.length - 1, currentIndex + 1))}
              disabled={currentIndex >= points.length - 1}
            >
              ⏭️
            </Button>

            {/* Time scrubber */}
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
              className="flex-1 accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />

            <span className="text-xs font-mono text-slate-300 w-16 text-right">
              {points.length > 0 ? `${Math.round((currentIndex / (points.length - 1)) * 100)}%` : '0%'}
            </span>

            {/* Speed Multipliers */}
            <div className="flex items-center space-x-1 border-l border-slate-800 pl-3">
              {[1, 2, 5, 10].map(sp => (
                <button
                  key={sp}
                  onClick={() => setPlaybackSpeed(sp)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition ${playbackSpeed === sp ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'}`}
                >
                  {sp}x
                </button>
              ))}
            </div>
          </div>

          {/* Telemetry metadata footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-2 border-t border-slate-800/60 text-slate-400">
            <div>
              <span className="block text-[11px] text-slate-500">Recorded Timestamp</span>
              <span className="text-slate-200 font-mono">
                {currentPoint?.timestamp ? new Date(currentPoint.timestamp).toLocaleTimeString() : 'N/A'}
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-500">Waypoint Velocity</span>
              <span className="text-emerald-400 font-mono font-bold">
                {(currentPoint?.speedKph || 42).toFixed(1)} km/h
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-500">Total Route Waypoints</span>
              <span className="text-slate-200">{points.length} coordinates</span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-500">Estimated Path Distance</span>
              <span className="text-indigo-400 font-mono font-semibold">
                {(points.length * 0.15).toFixed(2)} km
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
