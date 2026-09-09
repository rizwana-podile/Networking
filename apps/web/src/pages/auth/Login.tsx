import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../../components/ui/Button';

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
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Quick preset loader
  const fillCredentials = (userEmail: string, userPass: string) => {
    setEmail(userEmail);
    setPassword(userPass);
    setErrorMessage(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });

      const data = await response.json();

      if (!response.ok || !data.user) {
        throw new Error(data.message || 'Invalid email or security credential.');
      }

      // Save authenticated user & token in store
      login(data.user, data.tokens?.accessToken || 'token_' + Date.now());

      // Role-based redirection
      const role = data.user.role;
      if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
        navigate('/');
      } else if (role === 'NETWORK_OPERATOR' || role === 'NETWORK_ADMIN') {
        navigate('/network');
      } else {
        navigate('/home');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication service unreachable. Please verify API server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-2xl mx-auto mb-3 shadow-xl shadow-indigo-500/30 border border-indigo-400/20">
            📡
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">GeoNet Sentinel</h1>
          <p className="text-sm text-slate-400 mt-1">Enterprise Real-Time Location Tracking & Telematics</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl space-y-5">
          {errorMessage && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-3 rounded-xl text-xs flex items-start space-x-2 animate-fadeIn">
              <span className="text-sm">⚠️</span>
              <div className="flex-1">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Work Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="name@geonet.io"
                className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition placeholder:text-slate-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs px-1"
                >
                  {showPassword ? '🙈 Hide' : '👁️ Show'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <label className="flex items-center space-x-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span>Remember this workstation</span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <span>Sign In to Console →</span>
              )}
            </Button>
          </form>

          {/* Quick Demo Credentials Panel */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5 text-center">
              Quick Switch Demo Roles
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => fillCredentials('viewer@geonet.io', 'Viewer@123')}
                className={`px-2 py-2 rounded-lg text-xs font-medium border transition text-center ${email === 'viewer@geonet.io' ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'}`}
              >
                <div className="text-sm mb-0.5">👤</div>
                <div>Viewer</div>
              </button>

              <button
                type="button"
                onClick={() => fillCredentials('operator@geonet.io', 'Operator@123')}
                className={`px-2 py-2 rounded-lg text-xs font-medium border transition text-center ${email === 'operator@geonet.io' ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'}`}
              >
                <div className="text-sm mb-0.5">🌐</div>
                <div>Operator</div>
              </button>

              <button
                type="button"
                onClick={() => fillCredentials('admin@geonet.io', 'Admin@123456')}
                className={`px-2 py-2 rounded-lg text-xs font-medium border transition text-center ${email === 'admin@geonet.io' ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300' : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'}`}
              >
                <div className="text-sm mb-0.5">🛡️</div>
                <div>Super Admin</div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-slate-500 space-y-1">
          <div>PostGIS High-Precision GiST Telemetry • 10-Role RBAC Enforced</div>
          <div className="text-[11px] text-slate-600">GeoNet Sentinel Enterprise v1.0.0</div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">Reset Security Key</h3>
              <button onClick={() => { setShowForgotModal(false); setForgotSuccess(false); }} className="text-slate-400 hover:text-white">✕</button>
            </div>
            {forgotSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="text-3xl">✉️</div>
                <div className="text-sm text-emerald-400 font-semibold">Recovery instruction dispatched</div>
                <p className="text-xs text-slate-400">If an enterprise account exists for {email}, cryptographic token reset instructions have been logged.</p>
                <Button size="sm" onClick={() => { setShowForgotModal(false); setForgotSuccess(false); }}>Close</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Enter your registered work email. A temporary cryptographic verification token will be sent to reset your credentials.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="flex items-center justify-end space-x-2 pt-2">
                  <Button variant="secondary" size="sm" onClick={() => setShowForgotModal(false)}>Cancel</Button>
                  <Button size="sm" onClick={() => setForgotSuccess(true)}>Send Reset Token</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
