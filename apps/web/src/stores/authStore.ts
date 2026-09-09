import { create } from 'zustand';

export interface UserProfile {
  id?: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'NETWORK_ADMIN' | 'NETWORK_OPERATOR' | 'MONITORING_OPERATOR' | 'MANAGER' | 'DEVICE_OWNER' | 'STANDARD_USER' | 'VIEWER' | 'SECURITY_AUDITOR' | 'COMPLIANCE_OFFICER' | 'API_DEVELOPER' | 'FLEET_DISPATCHER' | 'INCIDENT_RESPONDER';
  department?: string;
  avatarUrl?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  token: string | null;
  login: (userData: UserProfile, token?: string) => void;
  logout: () => void;
}

// Check local storage for persistent session
const storedToken = typeof window !== 'undefined' ? localStorage.getItem('geonet_token') : null;
const storedUserJson = typeof window !== 'undefined' ? localStorage.getItem('geonet_user') : null;
let initialUser: UserProfile | null = null;

if (storedToken && storedUserJson) {
  try {
    initialUser = JSON.parse(storedUserJson);
  } catch {
    initialUser = null;
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!(storedToken && initialUser),
  user: initialUser,
  token: storedToken,
  login: (userData, token = 'demo_token_' + Date.now()) => {
    try {
      localStorage.setItem('geonet_token', token);
      localStorage.setItem('geonet_user', JSON.stringify(userData));
    } catch (e) {
      console.error('Storage write error:', e);
    }
    set({ isAuthenticated: true, user: userData, token });
  },
  logout: () => {
    try {
      localStorage.removeItem('geonet_token');
      localStorage.removeItem('geonet_user');
    } catch (e) {
      console.error('Storage clear error:', e);
    }
    set({ isAuthenticated: false, user: null, token: null });
  }
}));
