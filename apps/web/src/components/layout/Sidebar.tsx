import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Super Admin Dash', icon: '📊' },
  { path: '/network', label: 'Network Operations', icon: '🌐' },
  { path: '/tracking', label: 'Live Location Map', icon: '📍' },
  { path: '/playback', label: 'Historical Playback', icon: '⏱️' },
  { path: '/devices', label: 'Device Registry', icon: '📱' },
  { path: '/topology', label: 'Network Topology', icon: '🕸️' },
  { path: '/alerts', label: 'Alerts & Incidents', icon: '🚨' },
  { path: '/analytics', label: 'Metrics Analytics', icon: '📈' },
  { path: '/reports', label: 'Report Center', icon: '📑' },
  { path: '/audit', label: 'Security Audit', icon: '🛡️' },
  { path: '/apikeys', label: 'API & Webhooks', icon: '🔑' },
  { path: '/simulation', label: 'Simulation Control', icon: '🎮' }
];

export const Sidebar: React.FC = () => (
  <aside className="w-64 bg-slate-900/90 backdrop-blur border-r border-slate-800 flex flex-col shrink-0">
    <div className="h-16 flex items-center px-6 border-b border-slate-800">
      <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-indigo-500/50 shadow-md">G</div>
      <span className="ml-3 font-bold text-slate-100 tracking-wide">GeoNet Sentinel</span>
    </div>
    <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
      {navItems.map(item => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'}`}>
          <span className="mr-3 text-base">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>WebSocket Live</span>
      </div>
      <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">v1.0.0</span>
    </div>
  </aside>
);
