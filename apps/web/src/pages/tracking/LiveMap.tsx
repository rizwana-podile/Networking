import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const mockDevices = [
  { deviceId: 'DEV-GPS-001', name: 'Rapid Response Cruiser 01', type: 'FLEET_VEHICLE', lat: 37.7749, lng: -122.4194, speed: 45.2, battery: 94, status: 'MOVING' },
  { deviceId: 'DEV-GPS-002', name: 'Logistics Hauler Alpha', type: 'FLEET_VEHICLE', lat: 37.7833, lng: -122.4167, speed: 58.0, battery: 88, status: 'MOVING' },
  { deviceId: 'DEV-GPS-003', name: 'Inspection Drone UAV-X', type: 'DRONE_UAV', lat: 37.7690, lng: -122.4467, speed: 32.5, battery: 72, status: 'MOVING' },
  { deviceId: 'DEV-GPS-004', name: 'Courier Van Express 04', type: 'FLEET_VEHICLE', lat: 37.7500, lng: -122.4200, speed: 38.4, battery: 85, status: 'MOVING' }
];

export const LiveTrackingMap: React.FC = () => {
  const [devices, setDevices] = useState(mockDevices);
  const [selectedDevice, setSelectedDevice] = useState(mockDevices[0]);

  useEffect(() => {
    // Dynamic coordinate mover simulation for map interactivity
    const interval = setInterval(() => {
      setDevices(prev => prev.map(d => ({
        ...d,
        lat: d.lat + (Math.random() - 0.5) * 0.0008,
        lng: d.lng + (Math.random() - 0.5) * 0.0008,
        speed: parseFloat((30 + Math.random() * 30).toFixed(1))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Authorized Real-Time Location Tracking</h1>
          <p className="text-sm text-slate-400">Cryptographically verified GPS streams • Zero unauthorized surveillance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="success">4 ACTIVE DEVICES</Badge>
          <Button variant="secondary" size="sm" onClick={() => alert('Centering map bounds')}>Fit Fleet</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Canvas Card */}
        <div className="lg:col-span-2">
          <Card className="p-0 overflow-hidden relative">
            <div className="h-[520px] bg-slate-950 relative flex flex-col justify-between p-6">
              {/* Simulated Map Background Grid */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Overlay Controls */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300">
                  Center: San Francisco Metro (37.7749° N, 122.4194° W)
                </div>
                <div className="bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg border border-slate-800 space-y-1">
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0" onClick={() => alert('Zoom In')}>+</Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0 block" onClick={() => alert('Zoom Out')}>-</Button>
                </div>
              </div>

              {/* Dynamic Map Markers Representation */}
              <div className="relative z-10 grid grid-cols-2 gap-4 my-auto">
                {devices.map(d => (
                  <div
                    key={d.deviceId}
                    onClick={() => setSelectedDevice(d)}
                    className={`p-3 rounded-xl cursor-pointer transition-all border ${selectedDevice.deviceId === d.deviceId ? 'bg-indigo-600/30 border-indigo-500 shadow-indigo-500/20 shadow-lg' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-slate-100">{d.name}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {d.lat.toFixed(4)}°, {d.lng.toFixed(4)}° • {d.speed} km/h
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 text-[11px] text-slate-500 bg-slate-900/80 px-3 py-1 rounded inline-block self-start border border-slate-800">
                Leaflet Tile Provider: OpenStreetMap CartoDB Dark Matter
              </div>
            </div>
          </Card>
        </div>

        {/* Selected Device Detail Drawer */}
        <div className="space-y-4">
          <Card title="Device Inspector" subtitle={selectedDevice.deviceId}>
            <div className="space-y-4">
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <span className="text-xs text-slate-400">Assigned Vehicle</span>
                <div className="text-sm font-semibold text-slate-100">{selectedDevice.name}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-slate-800/40 rounded-lg">
                  <span className="text-slate-400 block">Speed</span>
                  <span className="text-base font-bold text-slate-100">{selectedDevice.speed} km/h</span>
                </div>
                <div className="p-2.5 bg-slate-800/40 rounded-lg">
                  <span className="text-slate-400 block">Battery</span>
                  <span className="text-base font-bold text-emerald-400">{selectedDevice.battery}%</span>
                </div>
                <div className="p-2.5 bg-slate-800/40 rounded-lg">
                  <span className="text-slate-400 block">Latitude</span>
                  <span className="text-xs font-bold text-slate-200">{selectedDevice.lat.toFixed(5)}</span>
                </div>
                <div className="p-2.5 bg-slate-800/40 rounded-lg">
                  <span className="text-slate-400 block">Longitude</span>
                  <span className="text-xs font-bold text-slate-200">{selectedDevice.lng.toFixed(5)}</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="primary" size="sm" onClick={() => alert(`Focusing on ${selectedDevice.name}`)}>Center on Map</Button>
                <Button variant="secondary" size="sm" onClick={() => alert(`Opening route history for ${selectedDevice.deviceId}`)}>View Route History</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
