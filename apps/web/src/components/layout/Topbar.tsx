import React from 'react';
import { Button } from '../ui/Button';

export const Topbar: React.FC = () => (
  <header className="h-16 bg-slate-900/60 backdrop-blur border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
    <div className="flex items-center space-x-3">
      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PRODUCTION CLUSTER</span>
      <span className="text-xs text-slate-400">US-West (Oregon) • 99.94% SLA</span>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
        <span className="text-slate-400">Logged as:</span>
        <span className="font-semibold text-slate-200">Dr. Sarah Connor</span>
        <span className="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded text-[10px] font-bold">SUPER_ADMIN</span>
      </div>
      <Button variant="secondary" size="sm" onClick={() => alert('Quick notification drawer')}>🔔 3</Button>
    </div>
  </header>
);
