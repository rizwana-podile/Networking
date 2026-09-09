import { Device, NetworkNode, Alert } from '@geonet/types';
export class GeoNetApiClient {
  private baseUrl: string; private token: string | null = null;
  constructor(baseUrl = 'http://localhost:4000/api/v1') { this.baseUrl = baseUrl; }
  public setToken(token: string) { this.token = token; }
  public clearToken() { this.token = null; }
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json', ...(options.headers as any) };
    if (this.token) headers['Authorization'] = `Bearer ${this.token}`;
    const res = await fetch(`${this.baseUrl}${endpoint}`, { ...options, headers });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }));
      throw new Error(err.message || 'API request failed');
    }
    return res.json();
  }
  public login(creds: any) { return this.request<any>('/auth/login', { method: 'POST', body: JSON.stringify(creds) }); }
  public register(payload: any) { return this.request<any>('/auth/register', { method: 'POST', body: JSON.stringify(payload) }); }
  public getProfile() { return this.request<any>('/auth/profile'); }
  public getDevices(params: any = {}) { return this.request<{ items: Device[]; total: number }>(`/devices?${new URLSearchParams(params)}`); }
  public createDevice(d: any) { return this.request<Device>('/devices', { method: 'POST', body: JSON.stringify(d) }); }
  public updateDevice(id: string, d: any) { return this.request<Device>(`/devices/${id}`, { method: 'PATCH', body: JSON.stringify(d) }); }
  public deleteDevice(id: string) { return this.request<any>(`/devices/${id}`, { method: 'DELETE' }); }
  public ingestLocation(loc: any) { return this.request<any>('/locations/ingest', { method: 'POST', body: JSON.stringify(loc) }); }
  public getNetworkNodes() { return this.request<{ items: NetworkNode[]; total: number }>('/network/nodes'); }
  public getTopology() { return this.request<any>('/network/topology'); }
  public getAlerts() { return this.request<{ items: Alert[]; total: number }>('/alerts'); }
  public acknowledgeAlert(id: string) { return this.request<Alert>(`/alerts/${id}/acknowledge`, { method: 'POST' }); }
  public resolveAlert(id: string, notes?: string) { return this.request<Alert>(`/alerts/${id}/resolve`, { method: 'POST', body: JSON.stringify({ notes }) }); }
  public getSimulationStatus() { return this.request<any>('/simulation/status'); }
  public controlSimulation(action: string) { return this.request<any>('/simulation/control', { method: 'POST', body: JSON.stringify({ action }) }); }
}
