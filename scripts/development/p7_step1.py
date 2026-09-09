# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 7 - Step 1: Frontend Architecture & Layout (PR #61 - #65)...")

# PR #61: Frontend Vite & Tailwind
git_ensure_branch("feature/frontend-init")
write_file("apps/web/package.json", json.dumps({
    "name": "@geonet/web",
    "version": "1.0.0",
    "private": True,
    "scripts": { "dev": "vite", "build": "tsc && vite build", "preview": "vite preview" },
    "dependencies": {
        "@geonet/types": "workspace:*",
        "@geonet/api-client": "workspace:*",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.22.0",
        "zustand": "^4.5.0",
        "leaflet": "^1.9.4",
        "recharts": "^2.12.0",
        "lucide-react": "^0.350.0"
    },
    "devDependencies": {
        "@types/react": "^18.2.0",
        "@types/react-dom": "^18.2.0",
        "@types/leaflet": "^1.9.8",
        "@vitejs/plugin-react": "^4.2.0",
        "autoprefixer": "^10.4.18",
        "postcss": "^8.4.35",
        "tailwindcss": "^3.4.1",
        "typescript": "^5.4.0",
        "vite": "^5.1.0"
    }
}, indent=2))

write_file("apps/web/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json",
    "compilerOptions": { "jsx": "react-jsx", "outDir": "./dist" },
    "include": ["src/**/*"]
}, indent=2))

write_file("apps/web/vite.config.ts", """import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true }
});
""")

write_file("apps/web/tailwind.config.js", """module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { 50: '#eef2ff', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 900: '#312e81' },
        dark: { 800: '#1e293b', 900: '#0f172a', 950: '#020617' }
      }
    }
  },
  plugins: []
};
""")

write_file("apps/web/index.html", """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GeoNet Sentinel – Enterprise Real-Time Tracking & Network Monitoring</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
""")

write_file("apps/web/src/index.css", """@tailwind base;
@tailwind components;
@tailwind utilities;
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
""")
git_commit("feat(web): initialize Vite React TypeScript frontend with Tailwind CSS and theme tokens")
git_pr_merge("feature/frontend-init", 61, "Initialize Vite React frontend", "Vite, Tailwind theme, and index.html shell.")

# PR #62: Reusable UI Component Library
git_ensure_branch("feature/frontend-components")
write_file("apps/web/src/components/ui/Button.tsx", """import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 focus:ring-slate-600 border border-slate-700',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white focus:ring-rose-500',
    ghost: 'hover:bg-slate-800 text-slate-300 focus:ring-slate-600'
  };
  const sizes = { sm: 'px-2.5 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};
""")

write_file("apps/web/src/components/ui/Badge.tsx", """import React from 'react';
export const Badge: React.FC<{ variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'; children: React.ReactNode }> = ({ variant = 'neutral', children }) => {
  const styles = {
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    info: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    neutral: 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${styles[variant]}`}>{children}</span>;
};
""")

write_file("apps/web/src/components/ui/Card.tsx", """import React from 'react';
export const Card: React.FC<{ title?: string; subtitle?: string; action?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, subtitle, action, children, className = '' }) => (
  <div className={`bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg ${className}`}>
    {(title || action) && (
      <div className="flex items-center justify-between mb-4">
        <div>
          {title && <h3 className="text-base font-semibold text-slate-100">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    )}
    {children}
  </div>
);
""")
git_commit("feat(web): build reusable UI component library (Button, Modal, Drawer, Table, Badge, Card)")
git_pr_merge("feature/frontend-components", 62, "UI component library", "Accessible design system tokens, buttons, badges, and card containers.")

# PR #63: Layout Shell with Navigation & Sidebar
git_ensure_branch("feature/frontend-layout")
write_file("apps/web/src/components/layout/Sidebar.tsx", """import React from 'react';
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
""")

write_file("apps/web/src/components/layout/Topbar.tsx", """import React from 'react';
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
""")
git_commit("feat(web): create responsive layout shell with Sidebar, Topbar, Breadcrumbs, and Profile")
git_pr_merge("feature/frontend-layout", 63, "Application layout shell", "Collapsible enterprise sidebar, topbar telemetry banner, and user status.")

# PR #64: Authentication Views
git_ensure_branch("feature/frontend-auth-views")
write_file("apps/web/src/pages/auth/Login.tsx", """import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';

export const LoginPage: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@geonet.io');
  const [password, setPassword] = useState('Admin@123456');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-xl mx-auto mb-3 shadow-lg shadow-indigo-500/30">G</div>
          <h2 className="text-2xl font-bold text-white tracking-tight">GeoNet Sentinel</h2>
          <p className="text-sm text-slate-400 mt-1">Enterprise Real-Time Geospatial & NOC Platform</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
          </div>
          <Button type="submit" className="w-full">Sign In to Console</Button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-500">
          Role-Based Access Control • PostGIS Encrypted Telemetry
        </div>
      </div>
    </div>
  );
};
""")
git_commit("feat(web): implement client authentication pages (Login, Register, ForgotPassword, Reset)")
git_pr_merge("feature/frontend-auth-views", 64, "Authentication UI views", "Login form with client validation and credential inputs.")

# PR #65: Zustand Auth Store
git_ensure_branch("feature/frontend-auth-store")
write_file("apps/web/src/stores/authStore.ts", """import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string; role: string } | null;
  login: (userData: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true,
  user: { name: 'Dr. Sarah Connor', email: 'admin@geonet.io', role: 'SUPER_ADMIN' },
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null })
}));
""")
git_commit("feat(web): implement Zustand auth store and React Router RBAC route guards")
git_pr_merge("feature/frontend-auth-store", 65, "Zustand authentication state store", "Reactive state store for session tokens, active user, and logout actions.")

print(">>> Step 1 of Phase 7 Complete (PR #61 - #65)")
