import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const role = user?.role || 'VIEWER';
  const isSuperAdmin = role === 'SUPER_ADMIN' || role === 'ADMIN';
  const isOperator = role === 'NETWORK_OPERATOR' || role === 'NETWORK_ADMIN';

  // Role-based navigation item lists
  const viewerNavItems = [
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
    { path: '/alerts', label: 'Alerts Console', icon: '🚨' },
    { path: '/analytics', label: 'Metrics Analytics', icon: '📈' },
    { path: '/profile', label: 'Operator Profile', icon: '👤' }
  ];

  const adminNavItems = [
    { path: '/', label: 'Executive Center', icon: '📊' },
    { path: '/home', label: 'User Home Screen', icon: '🏠' },
    { path: '/tracking', label: 'Live Location Map', icon: '📍' },
    { path: '/devices', label: 'Device Registry', icon: '📱' },
    { path: '/playback', label: 'Historical Playback', icon: '⏱️' },
    { path: '/network', label: 'Network Operations', icon: '🌐' },
    { path: '/topology', label: 'Network Topology', icon: '🕸️' },
    { path: '/alerts', label: 'Alerts & Incidents', icon: '🚨' },
    { path: '/analytics', label: 'Metrics Analytics', icon: '📈' },
    { path: '/reports', label: 'Report Center', icon: '📑' },
    { path: '/audit', label: 'Security Audit', icon: '🛡️' },
    { path: '/apikeys', label: 'API & Webhooks', icon: '🔑' },
    { path: '/simulation', label: 'Simulation Control', icon: '🎮' },
    { path: '/profile', label: 'Admin Profile', icon: '👤' }
  ];

  const items = isSuperAdmin ? adminNavItems : isOperator ? operatorNavItems : viewerNavItems;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800/80 flex flex-col shrink-0 select-none">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-5 border-b border-slate-800/80">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-indigo-500/40 shadow-lg border border-indigo-400/20 text-base">
          📡
        </div>
        <div className="ml-3">
          <div className="font-bold text-white tracking-tight leading-none text-sm">GeoNet Sentinel</div>
          <div className="text-[10px] text-slate-400 font-medium mt-0.5">Real-Time Location Tracking</div>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="text-[10px] font-bold text-slate-500 uppercase px-3 mb-2 tracking-wider">
          {isSuperAdmin ? 'Enterprise Operations' : isOperator ? 'NOC Surveillance' : 'Fleet Navigation'}
        </div>
        {items.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/' || item.path === '/home'}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`
            }
          >
            <span className="mr-3 text-base">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Footer & Logout */}
      <div className="p-3 border-t border-slate-800/80 space-y-2 bg-slate-950/40">
        <div className="flex items-center justify-between px-2 py-1 text-xs">
          <div className="flex items-center space-x-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-slate-300 font-medium truncate">{user?.name || 'Operator'}</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
            {role.replace('SUPER_', '')}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition"
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
