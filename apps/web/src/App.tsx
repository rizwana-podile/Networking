import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { LoginPage } from './pages/auth/Login';
import { UserHomePage } from './pages/home/UserHome';
import { LiveTrackingMap } from './pages/tracking/LiveMap';
import { RoutePlayback } from './pages/tracking/RoutePlayback';
import { DeviceManagement } from './pages/devices/DeviceManagement';
import { UserProfilePage } from './pages/profile/UserProfile';
import { ForbiddenPage } from './pages/error/Forbidden';
import { ExecutiveDashboard } from './pages/dashboard/ExecutiveDashboard';
import { NocDashboard } from './pages/network/NocDashboard';
import { TopologyView } from './pages/network/TopologyView';
import { AlertsConsole } from './pages/alerts/AlertsConsole';
import { AnalyticsView } from './pages/analytics/AnalyticsView';
import { ReportCenter } from './pages/reports/ReportCenter';
import { AuditExplorer } from './pages/audit/AuditExplorer';
import { ApiManagement } from './pages/apikeys/ApiManagement';
import { SimulationConsole } from './pages/simulation/SimulationConsole';
import { useAuthStore } from './stores/authStore';

// Root Route Dispatcher according to authenticated role
const RootDispatcher: React.FC = () => {
  const { user } = useAuthStore();
  const role = user?.role || 'VIEWER';

  if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
    return <ExecutiveDashboard />;
  } else if (role === 'NETWORK_OPERATOR' || role === 'NETWORK_ADMIN') {
    return <Navigate to="/network" replace />;
  } else {
    return <Navigate to="/home" replace />;
  }
};

// Admin Protection Guard
const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthStore();
  const role = user?.role || 'VIEWER';
  if (role !== 'SUPER_ADMIN' && role !== 'ADMIN') {
    return <ForbiddenPage />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {/* Unauthenticated / Login Route */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />}
        />

        {/* Authenticated Application Shell */}
        <Route
          path="/*"
          element={
            !isAuthenticated ? (
              <Navigate to="/login" replace />
            ) : (
              <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                  <Topbar />
                  <main className="flex-1 overflow-y-auto p-6 bg-slate-950/80">
                    <Routes>
                      {/* Dynamic Root Route */}
                      <Route path="/" element={<RootDispatcher />} />

                      {/* Standard User / Viewer Core Flows */}
                      <Route path="/home" element={<UserHomePage />} />
                      <Route path="/tracking" element={<LiveTrackingMap />} />
                      <Route path="/devices" element={<DeviceManagement />} />
                      <Route path="/playback" element={<RoutePlayback />} />
                      <Route path="/alerts" element={<AlertsConsole />} />
                      <Route path="/profile" element={<UserProfilePage />} />

                      {/* Network Monitoring & Operations */}
                      <Route path="/network" element={<NocDashboard />} />
                      <Route path="/topology" element={<TopologyView />} />
                      <Route path="/analytics" element={<AnalyticsView />} />
                      <Route path="/reports" element={<ReportCenter />} />

                      {/* Privileged Admin Subsystems */}
                      <Route path="/audit" element={<AdminGuard><AuditExplorer /></AdminGuard>} />
                      <Route path="/apikeys" element={<AdminGuard><ApiManagement /></AdminGuard>} />
                      <Route path="/simulation" element={<AdminGuard><SimulationConsole /></AdminGuard>} />

                      {/* 403 & Fallback */}
                      <Route path="/forbidden" element={<ForbiddenPage />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                </div>
              </div>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
