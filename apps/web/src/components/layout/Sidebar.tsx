import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const role = user?.role || 'VIEWER';
  const isSuperAdmin = role === 'SUPER_ADMIN' || role === 'ADMIN';
  const isOperator = role === 'NETWORK_OPERATOR' || role === 'NETWORK_ADMIN';

  // Role-specific navigation arrays
  const standardNavItems = [
    { path: '/home', label: 'Home', icon: '🏠' },
    { path: '/tracking', label: 'Live Tracking', icon: '📍' },
    { path: '/devices', label: 'My Devices', icon: '📱' },
    { path: '/playback', label: 'Location History', icon: '🕐' },
    { path: '/alerts', label: 'Alerts', icon: '🚨' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ];

  const operatorNavItems = [
    { path: '/network', label: 'NOC Operations', icon: '🌐' },
    { path: '/home', label: 'User Home', icon: '🏠' },
    { path: '/tracking', label: 'Live Tracking', icon: '📍' },
    { path: '/devices', label: 'Fleet Devices', icon: '📱' },
    { path: '/playback', label: 'Location History', icon: '🕐' },
    { path: '/topology', label: 'Network Topology', icon: '🕸️' },
    { path: '/alerts', label: 'Alerts & Incidents', icon: '🚨' },
    { path: '/analytics', label: 'Metrics Analytics', icon: '📈' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ];

  const adminNavItems = [
    { path: '/', label: 'Executive Dashboard', icon: '📊' },
    { path: '/network', label: 'Network Operations', icon: '🌐' },
    { path: '/home', label: 'User Home Screen', icon: '🏠' },
    { path: '/tracking', label: 'Live Tracking Map', icon: '📍' },
    { path: '/devices', label: 'Device Registry', icon: '📱' },
    { path: '/playback', label: 'Historical Playback', icon: '⏱️' },
    { path: '/topology', label: 'Network Topology', icon: '🕸️' },
    { path: '/alerts', label: 'Alerts & Incidents', icon: '🚨' },
    { path: '/analytics', label: 'Metrics Analytics', icon: '📈' },
    { path: '/reports', label: 'Report Center', icon: '📑' },
    { path: '/audit', label: 'Security Audit', icon: '🛡️' },
    { path: '/apikeys', label: 'API & Webhooks', icon: '🔑' },
    { path: '/simulation', label: 'Simulation Control', icon: '🎮' },
    { path: '/profile', label: 'Admin Profile', icon: '👤' }
  ];

  const items = isSuperAdmin ? adminNavItems : isOperator ? operatorNavItems : standardNavItems;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 flex flex-col shrink-0 select-none z-30 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30 shrink-0 text-base border border-cyan-300/30">
            📡
          </div>
          {!collapsed && (
            <div className="truncate">
              <div className="font-extrabold text-white text-sm tracking-tight leading-none">GeoNet Sentinel</div>
              <div className="text-[10px] text-cyan-400 font-medium mt-0.5">Location Tracking SaaS</div>
            </div>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition text-xs"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? '▶' : '◀'}
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {!collapsed && (
          <div className="text-[10px] font-bold text-slate-500 uppercase px-3 mb-2 tracking-wider">
            {isSuperAdmin ? 'Admin Management' : isOperator ? 'NOC Operations' : 'User Navigation'}
          </div>
        )}

        {items.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/' || item.path === '/home'}
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/25 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`
            }
          >
            <span className="text-base shrink-0">{item.icon}</span>
            {!collapsed && <span className="ml-3 truncate">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer Settings & Logout */}
      <div className="p-3 border-t border-slate-800 space-y-1 bg-slate-950/40">
        <button
          onClick={() => setShowSettingsModal(true)}
          className="w-full flex items-center px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/70 transition"
        >
          <span className="text-base shrink-0">⚙️</span>
          {!collapsed && <span className="ml-3">Settings</span>}
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition"
        >
          <span className="text-base shrink-0">🚪</span>
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Application Settings</h3>
              <button onClick={() => setShowSettingsModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Live GPS Polling Frequency</span>
                <span className="font-mono text-cyan-400 font-bold">2.0 seconds</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Map Tile Provider</span>
                <span className="text-slate-200">CARTO Dark Matter (WebGL)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Geodetic Distance Math</span>
                <span className="text-slate-200">Haversine Great Circle</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Cryptographic Signing</span>
                <span className="text-emerald-400 font-mono">HMAC-SHA256 Active</span>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-xl"
              >
                Close Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
