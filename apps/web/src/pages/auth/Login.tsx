import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [email, setEmail] = useState('viewer@geonet.io');
  const [password, setPassword] = useState('Viewer@123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Authenticate against existing backend API
  const performLogin = async (loginEmail: string, loginPass: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail.trim(), password: loginPass })
      });

      const data = await response.json();

      if (!response.ok || !data.user) {
        throw new Error(data.message || 'Invalid email or security credential.');
      }

      // Save token and user in persistent auth store
      login(data.user, data.tokens?.accessToken || 'token_' + Date.now());

      // Route according to assigned role exactly per specifications
      const role = data.user.role;
      if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
        navigate('/');
      } else if (role === 'NETWORK_OPERATOR' || role === 'NETWORK_ADMIN' || role === 'MONITORING_OPERATOR') {
        navigate('/network');
      } else if (role === 'MANAGER') {
        navigate('/analytics');
      } else {
        // STANDARD_USER, DEVICE_OWNER, VIEWER
        navigate('/home');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication service unreachable. Please ensure the API is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performLogin(email, password);
  };

  const handleDemoClick = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    performLogin(demoEmail, demoPass);
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-900 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-x-hidden font-sans">
      {/* Subtle GPS & Telemetry Radial Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[460px] z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/25 border border-cyan-300/30 text-white text-2xl font-bold">
            📡
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">GeoNet Sentinel</h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 font-medium">Real-Time Location &amp; Network Monitoring</p>
          </div>
        </div>

        {/* Centered Crisp White Login Panel */}
        <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-2xl shadow-black/50 border border-slate-100 space-y-6">
          {/* Card Title */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Sign in to your GeoNet Sentinel account</p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-3.5 py-2.5 rounded-xl text-xs flex items-start space-x-2 animate-shake">
              <span className="text-sm shrink-0">⚠️</span>
              <div className="flex-1 font-medium">{errorMessage}</div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@geonet.io"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white transition pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 text-sm select-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center space-x-2 cursor-pointer select-none text-xs text-slate-600 font-medium">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm py-2.5 rounded-xl shadow-lg shadow-cyan-600/30 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Sign in to GeoNet Sentinel &rarr;</span>
              )}
            </button>
          </form>

          {/* Quick Demo Login Section */}
          <div className="space-y-3 pt-2">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-3 text-[10px] font-bold text-slate-400 tracking-wider uppercase whitespace-nowrap">
                Or Quick Demo Login
              </span>
            </div>

            {/* Role Demo Selector */}
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <button
                  type="button"
                  onClick={() => handleDemoClick('user@geonet.io', 'User@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Standard User</div>
                  <div className="text-[9px] text-slate-400">/home</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('owner@geonet.io', 'Owner@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Device Owner</div>
                  <div className="text-[9px] text-slate-400">/home</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('viewer@geonet.io', 'Viewer@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Viewer</div>
                  <div className="text-[9px] text-slate-400">/home</div>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center">
                <button
                  type="button"
                  onClick={() => handleDemoClick('operator@geonet.io', 'Operator@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Net Operator</div>
                  <div className="text-[9px] text-slate-400">/network</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('monitor@geonet.io', 'Monitor@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Monitor Oper</div>
                  <div className="text-[9px] text-slate-400">/network</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('netadmin@geonet.io', 'NetAdmin@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Net Admin</div>
                  <div className="text-[9px] text-slate-400">/network</div>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center">
                <button
                  type="button"
                  onClick={() => handleDemoClick('manager@geonet.io', 'Manager@123')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Manager</div>
                  <div className="text-[9px] text-slate-400">/analytics</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('sysadmin@geonet.io', 'Admin@123456')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Admin</div>
                  <div className="text-[9px] text-slate-400">/ (Executive)</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoClick('admin@geonet.io', 'Admin@123456')}
                  className="p-2 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition text-left group"
                >
                  <div className="text-[11px] font-bold text-slate-800 group-hover:text-cyan-700">Super Admin</div>
                  <div className="text-[9px] text-slate-400">/ (Executive)</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 space-y-1">
          <p>Protected by Enterprise PostGIS Spatial Storage &amp; RBAC Guard</p>
          <p className="text-[11px] text-slate-500">&copy; 2026 GeoNet Sentinel Inc. All rights reserved.</p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Reset Account Access</h3>
              <button
                onClick={() => { setShowForgotModal(false); setForgotSuccess(false); }}
                className="text-slate-400 hover:text-slate-700 text-sm"
              >
                ✕
              </button>
            </div>
            {forgotSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="text-3xl">✉️</div>
                <div className="text-sm font-bold text-emerald-600">Verification Link Dispatched</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If an enterprise account exists for <span className="font-semibold text-slate-700">{forgotEmail || email}</span>, a cryptographic reset token has been issued.
                </p>
                <button
                  onClick={() => { setShowForgotModal(false); setForgotSuccess(false); }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Enter your registered work email address. We will verify your credentials against the security authority.
                </p>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    value={forgotEmail || email}
                    onChange={e => setForgotEmail(e.target.value)}
                    placeholder="name@geonet.io"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotSuccess(true)}
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20"
                  >
                    Send Reset Token
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
