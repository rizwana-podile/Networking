import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const NodeDetailModal: React.FC<{ node: any; onClose: () => void }> = ({ node, onClose }) => {
  if (!node) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-slate-900 border-slate-800" title={`Node Telemetry: ${node.name}`} subtitle={node.ip}>
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">CPU</span>
              <span className="text-lg font-bold text-white">{node.cpu || 35}%</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">Memory</span>
              <span className="text-lg font-bold text-white">{node.ram || 50}%</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg text-center">
              <span className="text-slate-400 block">Latency</span>
              <span className="text-lg font-bold text-indigo-400">{node.latency || 10} ms</span>
            </div>
          </div>
          <div className="p-3 bg-slate-800/40 rounded-lg">
            <span className="text-slate-400 block">Last Check At</span>
            <span className="text-slate-200 font-mono">{new Date().toISOString()}</span>
          </div>
        </div>
        <div className="mt-5 flex justify-end space-x-2">
          <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
          <Button variant="primary" size="sm" onClick={() => alert('Exported diagnostic dump')}>Export Logs</Button>
        </div>
      </Card>
    </div>
  );
};
