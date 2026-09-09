import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Time-Series Infrastructure Analytics</h1>
          <p className="text-sm text-slate-400">Multi-dimensional percentiles, latency distributions, and availability trends</p>
        </div>
        <div className="flex space-x-2">
          {['1h', '24h', '7d', '30d', '90d'].map((r, i) => (
            <Button key={r} variant={i === 1 ? 'primary' : 'secondary'} size="sm">{r}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Latency Percentiles (p50, p90, p95, p99)" subtitle="Rolling millisecond response latency">
          <div className="h-60 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div className="flex justify-between text-xs text-slate-400">
              <span>p50: 8.2ms</span>
              <span>p90: 14.5ms</span>
              <span className="text-amber-400">p95: 18.2ms</span>
              <span className="text-rose-400">p99: 45.1ms</span>
            </div>
            <div className="h-32 flex items-end justify-between px-2 gap-1">
              {[40, 45, 50, 48, 60, 80, 55, 62, 58, 70, 65, 90, 45, 52, 48].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-500/80 rounded-t hover:bg-indigo-400 transition-colors" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>Now</span>
            </div>
          </div>
        </Card>

        <Card title="Packet Loss & Availability Distribution" subtitle="Aggregate backbone drop rates">
          <div className="h-60 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Average Loss: 0.02%</span>
              <span className="text-emerald-400">Availability: 99.95%</span>
            </div>
            <div className="h-32 flex items-end justify-between px-2 gap-1">
              {[10, 8, 12, 10, 15, 25, 12, 10, 8, 14, 11, 18, 9, 10, 8].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-500/80 rounded-t hover:bg-emerald-400 transition-colors" style={{ height: `${h * 2}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>Now</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
