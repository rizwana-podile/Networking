import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

type TimeRange = '1h' | '24h' | '7d' | '30d' | '90d';

interface HistogramData {
  time: string;
  p50: number;
  p90: number;
  p99: number;
  loss: number;
}

const timeData: Record<TimeRange, HistogramData[]> = {
  '1h': [
    { time: '12:00', p50: 7.8, p90: 12.1, p99: 22.4, loss: 0.0 },
    { time: '12:10', p50: 8.1, p90: 13.0, p99: 25.1, loss: 0.01 },
    { time: '12:20', p50: 8.5, p90: 14.2, p99: 38.2, loss: 0.02 },
    { time: '12:30', p50: 9.0, p90: 15.1, p99: 45.1, loss: 0.05 },
    { time: '12:40', p50: 8.2, p90: 13.8, p99: 28.0, loss: 0.01 },
    { time: '12:50', p50: 7.9, p90: 12.4, p99: 21.0, loss: 0.0 }
  ],
  '24h': [
    { time: '00:00', p50: 7.2, p90: 11.5, p99: 18.2, loss: 0.0 },
    { time: '04:00', p50: 7.0, p90: 10.8, p99: 17.5, loss: 0.0 },
    { time: '08:00', p50: 8.9, p90: 14.2, p99: 32.0, loss: 0.02 },
    { time: '12:00', p50: 9.4, p90: 16.5, p99: 46.2, loss: 0.04 },
    { time: '16:00', p50: 8.8, p90: 14.8, p99: 39.5, loss: 0.02 },
    { time: '20:00', p50: 7.9, p90: 12.6, p99: 24.1, loss: 0.01 }
  ],
  '7d': [
    { time: 'Mon', p50: 7.6, p90: 12.2, p99: 21.0, loss: 0.01 },
    { time: 'Tue', p50: 8.1, p90: 13.5, p99: 28.4, loss: 0.02 },
    { time: 'Wed', p50: 8.0, p90: 13.0, p99: 25.1, loss: 0.01 },
    { time: 'Thu', p50: 8.7, p90: 14.8, p99: 36.2, loss: 0.03 },
    { time: 'Fri', p50: 9.2, p90: 15.9, p99: 44.0, loss: 0.04 },
    { time: 'Sat', p50: 7.4, p90: 11.8, p99: 19.5, loss: 0.0 },
    { time: 'Sun', p50: 7.1, p90: 11.2, p99: 18.0, loss: 0.0 }
  ],
  '30d': [
    { time: 'Week 1', p50: 7.9, p90: 13.0, p99: 26.5, loss: 0.02 },
    { time: 'Week 2', p50: 8.4, p90: 14.2, p99: 31.0, loss: 0.03 },
    { time: 'Week 3', p50: 8.1, p90: 13.8, p99: 29.4, loss: 0.02 },
    { time: 'Week 4', p50: 7.8, p90: 12.9, p99: 24.8, loss: 0.01 }
  ],
  '90d': [
    { time: 'Month 1', p50: 8.0, p90: 13.5, p99: 28.0, loss: 0.02 },
    { time: 'Month 2', p50: 8.2, p90: 14.0, p99: 32.1, loss: 0.03 },
    { time: 'Month 3', p50: 7.7, p90: 12.8, p99: 25.0, loss: 0.01 }
  ]
};

export const AnalyticsView: React.FC = () => {
  const [range, setRange] = useState<TimeRange>('24h');
  const [hoveredData, setHoveredData] = useState<HistogramData | null>(null);

  const currentDataset = timeData[range];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              📈
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Time-Series Infrastructure Analytics
            </h1>
            <Badge variant="success">AGGREGATE 99.98% SLA</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Multi-dimensional percentiles, latency distributions, and availability trends across the GeoNet backbone
          </p>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 space-x-1">
          {(['1h', '24h', '7d', '30d', '90d'] as TimeRange[]).map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                range === r
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Mean RTT Latency</div>
          <div className="mt-2 text-2xl font-extrabold text-cyan-400 font-mono">8.2 ms</div>
          <div className="mt-1 text-xs text-emerald-400 font-medium">&darr; 1.4ms from last period</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">99th Percentile Spike</div>
          <div className="mt-2 text-2xl font-extrabold text-amber-400 font-mono">45.1 ms</div>
          <div className="mt-1 text-xs text-slate-400">Under 50ms SLA ceiling</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Availability Ratio</div>
          <div className="mt-2 text-2xl font-extrabold text-emerald-400 font-mono">99.98%</div>
          <div className="mt-1 text-xs text-slate-400">0.02% total maintenance</div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Telemetry Ingest</div>
          <div className="mt-2 text-2xl font-extrabold text-indigo-400 font-mono">14.8M</div>
          <div className="mt-1 text-xs text-slate-400">GPS & Network packets</div>
        </div>
      </div>

      {/* Latency Percentile Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Latency Percentiles (p50 / p90 / p99)</h3>
              <p className="text-xs text-slate-400">Rolling millisecond response latency curve across {range}</p>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center space-x-1 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>p50</span>
              </span>
              <span className="flex items-center space-x-1 text-indigo-400">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>p90</span>
              </span>
              <span className="flex items-center space-x-1 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>p99</span>
              </span>
            </div>
          </div>

          <div className="mt-4 h-64 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800 relative">
            {/* Value display */}
            <div className="flex justify-between text-xs font-mono">
              <span className="text-cyan-400">p50: {hoveredData ? hoveredData.p50 : currentDataset[currentDataset.length - 1].p50}ms</span>
              <span className="text-indigo-400">p90: {hoveredData ? hoveredData.p90 : currentDataset[currentDataset.length - 1].p90}ms</span>
              <span className="text-amber-400">p99: {hoveredData ? hoveredData.p99 : currentDataset[currentDataset.length - 1].p99}ms</span>
            </div>

            {/* Interactive Bars */}
            <div className="h-40 flex items-end justify-between px-2 gap-3">
              {currentDataset.map((d, i) => {
                const maxVal = 50;
                const p50H = (d.p50 / maxVal) * 100;
                const p90H = (d.p90 / maxVal) * 100;
                const p99H = (d.p99 / maxVal) * 100;

                return (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end"
                    onMouseEnter={() => setHoveredData(d)}
                    onMouseLeave={() => setHoveredData(null)}
                  >
                    <div className="w-full flex items-end justify-center space-x-1">
                      <div
                        className="w-1/3 bg-cyan-500 rounded-t transition-all group-hover:bg-cyan-400"
                        style={{ height: `${p50H}%` }}
                      ></div>
                      <div
                        className="w-1/3 bg-indigo-500 rounded-t transition-all group-hover:bg-indigo-400"
                        style={{ height: `${p90H}%` }}
                      ></div>
                      <div
                        className="w-1/3 bg-amber-500 rounded-t transition-all group-hover:bg-amber-400"
                        style={{ height: `${p99H}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-2 font-mono">{d.time}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-[10px] text-slate-500 flex justify-between border-t border-slate-800/80 pt-2">
              <span>Baseline: 0 ms</span>
              <span>Target Ceiling: 50 ms</span>
            </div>
          </div>
        </div>

        {/* Packet Loss & Availability */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Packet Loss & Availability Distribution</h3>
              <p className="text-xs text-slate-400">Aggregate backbone drop rates & availability index</p>
            </div>
            <Badge variant="success">99.95% AVAILABILITY</Badge>
          </div>

          <div className="mt-4 h-64 bg-slate-950 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>Avg Packet Loss: 0.02%</span>
              <span className="text-emerald-400">Zero Critical Outages</span>
            </div>

            <div className="h-40 flex items-end justify-between px-2 gap-3">
              {currentDataset.map((d, i) => {
                const barHeight = Math.max(15, 100 - (d.loss * 800));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end">
                    <div
                      className="w-full bg-emerald-500/80 rounded-t group-hover:bg-emerald-400 transition-all"
                      style={{ height: `${barHeight}%` }}
                    ></div>
                    <span className="text-[10px] text-slate-500 mt-2 font-mono">{d.time}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-[10px] text-slate-500 flex justify-between border-t border-slate-800/80 pt-2">
              <span>SLA Target: 99.90%</span>
              <span className="text-emerald-400 font-semibold">Exceeding SLA Target</span>
            </div>
          </div>
        </div>
      </div>

      {/* SLA Breakdown Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <h3 className="text-base font-bold text-white tracking-tight mb-1">Infrastructure Node SLA Breakdown</h3>
        <p className="text-xs text-slate-400 mb-4">Granular availability and latency performance per active datacenter edge</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Node Edge</th>
                <th className="p-3">Role</th>
                <th className="p-3">Uptime Ratio</th>
                <th className="p-3">Mean Latency</th>
                <th className="p-3">Packet Loss</th>
                <th className="p-3">SLA Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-semibold text-white">Core Gateway US-West</td>
                <td className="p-3 text-slate-400">WAN Ingress</td>
                <td className="p-3 font-mono text-emerald-400">99.99%</td>
                <td className="p-3 font-mono text-cyan-400">4.2 ms</td>
                <td className="p-3 font-mono text-slate-300">0.00%</td>
                <td className="p-3"><Badge variant="success">PASSED</Badge></td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-semibold text-white">Border Router Alpha</td>
                <td className="p-3 text-slate-400">Core Routing</td>
                <td className="p-3 font-mono text-emerald-400">99.98%</td>
                <td className="p-3 font-mono text-cyan-400">8.5 ms</td>
                <td className="p-3 font-mono text-slate-300">0.00%</td>
                <td className="p-3"><Badge variant="success">PASSED</Badge></td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-semibold text-white">Spatial DB Primary (PostGIS)</td>
                <td className="p-3 text-slate-400">Persistence</td>
                <td className="p-3 font-mono text-emerald-400">99.99%</td>
                <td className="p-3 font-mono text-cyan-400">6.8 ms</td>
                <td className="p-3 font-mono text-slate-300">0.00%</td>
                <td className="p-3"><Badge variant="success">PASSED</Badge></td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-semibold text-white">Disaster Recovery Edge Node</td>
                <td className="p-3 text-slate-400">EU Failover</td>
                <td className="p-3 font-mono text-amber-400">98.42%</td>
                <td className="p-3 font-mono text-amber-400">145.0 ms</td>
                <td className="p-3 font-mono text-rose-400">4.50%</td>
                <td className="p-3"><Badge variant="warning">WARNING</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
