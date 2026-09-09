import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const NotificationDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-slate-900 border-l border-slate-800 shadow-2xl z-50 p-5 flex flex-col">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <h3 className="text-base font-semibold text-white">Notifications</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
      </div>
      <div className="flex-1 py-4 space-y-3 overflow-y-auto">
        <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
          <div className="text-xs font-semibold text-slate-200">New High Latency Alert</div>
          <p className="text-[11px] text-slate-400 mt-1">DR Edge Node exceeded 145ms threshold</p>
        </div>
        <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
          <div className="text-xs font-semibold text-slate-200">Device Geofence Breach</div>
          <p className="text-[11px] text-slate-400 mt-1">Cruiser 01 departed Sector 4 polygon</p>
        </div>
      </div>
      <Button variant="secondary" size="sm" className="w-full" onClick={() => alert('Marked all as read')}>Mark All as Read</Button>
    </div>
  );
};
