import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../ui/Button';

export const Topbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-slate-900/70 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between shrink-0 select-none z-30">
      {/* Cluster & Telemetry Status */}
      <div className="flex items-center space-x-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>TELEMETRY STREAM CONNECTED</span>
        </span>
        <span className="text-xs text-slate-400 hidden sm:inline">
          US-West (Oregon) • 99.98% High-Availability SLA
        </span>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-3">
        {/* User Identity Chip */}
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center space-x-2.5 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs cursor-pointer transition"
        >
          <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-[11px]">
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
          <div className="text-left hidden md:block">
            <div className="font-semibold text-slate-200 leading-none">{user?.name || 'Operator'}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">{user?.role || 'VIEWER'}</div>
          </div>
        </div>

        {/* Notifications Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowNotificationDrawer(!showNotificationDrawer)}
        >
          🔔 <span className="ml-1 text-[11px] font-bold text-amber-400">2</span>
        </Button>

        {/* Quick Sign Out */}
        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-rose-400 hover:text-rose-300">
          Sign Out
        </Button>
      </div>

      {/* Quick Notification Dropdown */}
      {showNotificationDrawer && (
        <div className="absolute right-6 top-16 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 space-y-3 z-50">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-white">Live Telematics Alarms</span>
            <button onClick={() => setShowNotificationDrawer(false)} className="text-slate-400 hover:text-white text-xs">✕</button>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-slate-800/60 rounded-xl border border-amber-500/20">
              <div className="text-amber-400 font-semibold">Speed SLA Threshold Alert</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Cruiser 01 exceeded 80 km/h in urban geofence.</div>
            </div>
            <div className="p-2.5 bg-slate-800/60 rounded-xl border border-rose-500/20">
              <div className="text-rose-400 font-semibold">Edge Link Latency Spike</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Disaster Recovery Edge latency &gt; 100ms.</div>
            </div>
          </div>
          <Button size="sm" variant="secondary" className="w-full text-xs" onClick={() => { setShowNotificationDrawer(false); navigate('/alerts'); }}>
            Open Incident Command Console →
          </Button>
        </div>
      )}
    </header>
  );
};
