import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const UserProfilePage: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPasswordModal(false);
    setToastMessage('Security credential successfully updated!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl text-sm flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>✓</span>
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-emerald-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Operator Profile & Security</h1>
          <p className="text-sm text-slate-400">Manage authenticated identity, assigned trackers, and cryptographic access credentials</p>
        </div>
        <Button variant="danger" size="sm" onClick={handleLogout}>
          🚪 Sign Out Session
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Card */}
        <Card className="md:col-span-1 text-center p-6 space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-3xl mx-auto shadow-xl shadow-indigo-500/20">
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{user?.name || 'Operator'}</h2>
            <p className="text-xs text-slate-400">{user?.email || 'operator@geonet.io'}</p>
          </div>
          <div>
            <Badge variant="info">{user?.role || 'OPERATOR'}</Badge>
          </div>
          <div className="pt-4 border-t border-slate-800 text-left space-y-2 text-xs">
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Account Status</span>
              <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active</span>
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Department</span>
              <span className="text-slate-200">Global Fleet Operations</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Session Type</span>
              <span className="text-slate-200">JWT Bearer • Scrypt</span>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="w-full" onClick={() => setShowPasswordModal(true)}>
            🔑 Change Password
          </Button>
        </Card>

        {/* Assigned Devices & Permissions */}
        <div className="md:col-span-2 space-y-6">
          <Card title="Authorized Tracking Devices" subtitle="Devices provisioned for active GPS telemetry observation">
            <div className="space-y-3">
              {[
                { id: 'DEV-GPS-001', name: 'Rapid Response Cruiser 01', type: 'Fleet Vehicle', status: 'ONLINE', battery: 94 },
                { id: 'DEV-GPS-002', name: 'Logistics Hauler Alpha', type: 'Heavy Transport', status: 'ONLINE', battery: 88 },
                { id: 'DEV-GPS-003', name: 'Inspection Drone UAV-X', type: 'Drone Quadcopter', status: 'ONLINE', battery: 72 },
                { id: 'DEV-GPS-004', name: 'Courier Van Express 04', type: 'Light Delivery', status: 'ONLINE', battery: 85 }
              ].map(dev => (
                <div key={dev.id} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-lg">
                      {dev.type.includes('Drone') ? '🛸' : '🚗'}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{dev.name}</div>
                      <div className="text-xs text-slate-400">{dev.id} • {dev.type} • Battery {dev.battery}%</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="success">ACTIVE</Badge>
                    <Button size="sm" variant="secondary" onClick={() => navigate(`/tracking?deviceId=${dev.id}`)}>
                      📍 Track
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Security & Compliance Information" subtitle="Cryptographic telemetry and data sovereignty details">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                <span className="text-slate-400 block mb-1">Telemetry Encryption</span>
                <span className="text-slate-200 font-mono">HMAC-SHA256 Signed</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                <span className="text-slate-400 block mb-1">Spatial Storage Subsystem</span>
                <span className="text-slate-200 font-mono">PostGIS 16 GiST Index</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                <span className="text-slate-400 block mb-1">Rate Limit Quota</span>
                <span className="text-slate-200 font-mono">5,000 req / hour</span>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
                <span className="text-slate-400 block mb-1">Audit Logging Mode</span>
                <span className="text-emerald-400 font-mono">Tamper-Evident SHA</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">Update Security Credentials</h3>
              <button onClick={() => setShowPasswordModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Current Password</label>
                <input type="password" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">New Password</label>
                <input type="password" required placeholder="Min 8 characters with numbers" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="flex items-center justify-end space-x-2 pt-2">
                <Button type="button" variant="secondary" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
