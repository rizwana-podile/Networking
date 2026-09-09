import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const RoutePlayback: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [slider, setSlider] = useState(45);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Historical Route Playback</h1>
          <p className="text-sm text-slate-400">Scrub historical breadcrumb trails, speed profile, and spatial waypoints</p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => alert('Exporting route CSV...')}>Export CSV</Button>
      </div>

      <Card>
        <div className="h-96 bg-slate-950 rounded-xl relative flex items-center justify-center border border-slate-800">
          <div className="text-center">
            <div className="text-lg font-semibold text-slate-300">Route Polyline: Rapid Response Cruiser 01</div>
            <div className="text-xs text-slate-500 mt-1">San Francisco Downtown Loop • 12.8 km traveled • 64 waypoints</div>
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-slate-800 flex items-center space-x-4">
          <Button variant="primary" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </Button>
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={e => setSlider(Number(e.target.value))}
            className="flex-1 accent-indigo-600 h-2 bg-slate-700 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-slate-300 w-16 text-right">{slider}%</span>
          <Button variant="secondary" size="sm" onClick={() => alert('Speed 2x')}>2x</Button>
        </div>
      </Card>
    </div>
  );
};
