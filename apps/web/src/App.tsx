import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { ExecutiveDashboard } from './pages/dashboard/ExecutiveDashboard';
import { NocDashboard } from './pages/network/NocDashboard';
import { LiveTrackingMap } from './pages/tracking/LiveMap';
import { RoutePlayback } from './pages/tracking/RoutePlayback';
import { DeviceManagement } from './pages/devices/DeviceManagement';
import { TopologyView } from './pages/network/TopologyView';
import { AlertsConsole } from './pages/alerts/AlertsConsole';
import { AnalyticsView } from './pages/analytics/AnalyticsView';
import { ReportCenter } from './pages/reports/ReportCenter';
import { AuditExplorer } from './pages/audit/AuditExplorer';
import { ApiManagement } from './pages/apikeys/ApiManagement';
import { SimulationConsole } from './pages/simulation/SimulationConsole';
import { LoginPage } from './pages/auth/Login';
import { useAuthStore } from './stores/authStore';

export const App: React.FC = () => {
  const { isAuthenticated, login } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => login({ name: 'Dr. Sarah Connor', email: 'admin@geonet.io', role: 'SUPER_ADMIN' })} />;
  }

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<ExecutiveDashboard />} />
              <Route path="/network" element={<NocDashboard />} />
              <Route path="/tracking" element={<LiveTrackingMap />} />
              <Route path="/playback" element={<RoutePlayback />} />
              <Route path="/devices" element={<DeviceManagement />} />
              <Route path="/topology" element={<TopologyView />} />
              <Route path="/alerts" element={<AlertsConsole />} />
              <Route path="/analytics" element={<AnalyticsView />} />
              <Route path="/reports" element={<ReportCenter />} />
              <Route path="/audit" element={<AuditExplorer />} />
              <Route path="/apikeys" element={<ApiManagement />} />
              <Route path="/simulation" element={<SimulationConsole />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};
