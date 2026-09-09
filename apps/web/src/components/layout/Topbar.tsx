import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export const Topbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  // Map routes to human readable titles
  const routeTitles: Record<string, { title: string; section: string }> = {
    '/': { title: 'Executive Operations Center', section: 'Administration' },
    '/home': { title: 'User Home Overview', section: 'Fleet Tracking' },
    '/tracking': { title: 'Live GPS Fleet Tracking', section: 'Real-Time Telemetry' },
    '/devices': { title: 'Hardware Device Registry', section: 'Fleet Management' },
    '/playback': { title: 'Historical Route Playback', section: 'Spatial Analytics' },
    '/alerts': { title: 'Alerts & Incident Triage', section: 'Monitoring' },
    '/profile': { title: 'User Profile & Security', section: 'Identity' },
    '/network': { title: 'Network Operations (NOC)', section: 'Infrastructure' },
    '/topology': { title: 'Network Topology Graph', section: 'Infrastructure' },
    '/analytics': { title: 'Metrics Analytics', section: 'Telemetry' },
    '/reports': { title: 'Report Center & Compliance', section: 'Exports' },
    '/audit': { title: 'Security Audit Explorer', section: 'Compliance' },
    '/apikeys': { title: 'API Keys & Developer Webhooks', section: 'Developer' },
    '/simulation': { title: 'Fleet Simulation Control', section: 'Testing' }
  };

  const currentMeta = routeTitles[location.pathname] || { title: 'GeoNet Sentinel', section: 'Platform' };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between shrink-0 select-none z-30 font-sans">
      {/* Left: Breadcrumb & Page Title */}
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="flex items-center space-x-1.5 text-xs text-slate-400">
          <span>GeoNet</span>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{currentMeta.section}</span>
          <span>/</span>
        </div>
        <h1 className="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
          {currentMeta.title}
        </h1>
      </div>

      {/* Right: Telemetry Health, Notifications, Profile, Logout */}
      <div className="flex items-center space-x-3">
        {/* Connection Status Indicator */}
        <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Connected ●</span>
        </div>

        {/* Notification Drawer Trigger */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          title="Incident Alerts"
        >
          <span>🔔</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
            2
          </span>
        </button>

        {/* Profile Card Chip */}
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-750 px-3 py-1.5 rounded-xl border border-slate-700/80 cursor-pointer transition"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-[11px]">
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
          <div className="text-left hidden md:block leading-none">
            <div className="text-xs font-bold text-white">{user?.name || 'Operator'}</div>
            <span className="text-[10px] text-cyan-400 font-medium">
              {user?.role?.replace('SUPER_', '') || 'VIEWER'}
            </span>
          </div>
        </div>

        {/* Quick Sign Out */}
        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 hover:text-white hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition"
        >
          Sign Out
        </button>
      </div>

      {/* Notifications Floating Dropdown */}
      {showNotifications && (
        <div className="absolute right-4 sm:right-6 top-16 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 space-y-3 z-50 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-white">Active System Alarms</span>
            <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-white text-xs">✕</button>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-slate-800/60 rounded-xl border border-amber-500/20">
              <div className="text-amber-400 font-bold">Speed Threshold Alert</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Cruiser 01 registered 58.7 km/h in urban geofence.</div>
            </div>
            <div className="p-2.5 bg-slate-800/60 rounded-xl border border-rose-500/20">
              <div className="text-rose-400 font-bold">Edge Node Latency SLA Exceeded</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Disaster Recovery Edge &gt; 100ms threshold.</div>
            </div>
          </div>
          <button
            onClick={() => { setShowNotifications(false); navigate('/alerts'); }}
            className="w-full py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition"
          >
            Open Alerts Console &rarr;
          </button>
        </div>
      )}
    </header>
  );
};
