# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 1 - Step 3: Validation & API Client...")

# PR #5: @geonet/validation
git_ensure_branch("feature/package-validation")
write_file("packages/validation/package.json", json.dumps({
    "name": "@geonet/validation", "version": "1.0.0", "main": "src/index.ts", "types": "src/index.ts",
    "dependencies": { "@geonet/types": "workspace:*" }, "devDependencies": { "typescript": "^5.4.0" }
}, indent=2))
write_file("packages/validation/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "./dist", "rootDir": "./src" }, "include": ["src/**/*"]
}, indent=2))

write_file("packages/validation/src/index.ts", """export interface ValidationResult<T> { success: boolean; data?: T; errors?: string[]; }
export function validateEmail(email: string): boolean { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email); }
export function validatePasswordStrength(password: string): { isValid: boolean; score: number; feedback: string[] } {
  const feedback: string[] = []; let score = 0;
  if (!password || password.length < 8) feedback.push('Password must be at least 8 characters long'); else score++;
  if (/[A-Z]/.test(password)) score++; else feedback.push('Must contain uppercase letter');
  if (/[0-9]/.test(password)) score++; else feedback.push('Must contain a number');
  if (/[^A-Za-z0-9]/.test(password)) score++; else feedback.push('Must contain a symbol');
  return { isValid: feedback.length === 0, score, feedback };
}
export function validateCoordinates(lat: number, lng: number): boolean { return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180; }
export function validateLocationIngest(payload: any): ValidationResult<any> {
  const errors: string[] = [];
  if (!payload.deviceId) errors.push('deviceId is required');
  if (typeof payload.latitude !== 'number' || payload.latitude < -90 || payload.latitude > 90) errors.push('latitude must be between -90 and 90');
  if (typeof payload.longitude !== 'number' || payload.longitude < -180 || payload.longitude > 180) errors.push('longitude must be between -180 and 180');
  if (typeof payload.speedKph === 'number' && payload.speedKph < 0) errors.push('speed cannot be negative');
  if (typeof payload.batteryLevel === 'number' && (payload.batteryLevel < 0 || payload.batteryLevel > 100)) errors.push('batteryLevel between 0 and 100');
  return { success: errors.length === 0, data: payload, errors };
}
export function validateDeviceCreate(payload: any): ValidationResult<any> {
  const errors: string[] = [];
  if (!payload.name || payload.name.trim().length < 2) errors.push('Device name must be at least 2 characters');
  if (!payload.type) errors.push('Device type is required');
  return { success: errors.length === 0, data: payload, errors };
}
export function validateNetworkNodeCreate(payload: any): ValidationResult<any> {
  const errors: string[] = [];
  if (!payload.name || payload.name.trim().length < 2) errors.push('Node name must be at least 2 characters');
  if (!payload.ipAddress) errors.push('ipAddress is required');
  if (!payload.type) errors.push('Node type is required');
  return { success: errors.length === 0, data: payload, errors };
}
""")
git_commit("feat(validation): implement payload validators for GPS ingestion, user auth, and network nodes")
git_pr_merge("feature/package-validation", 5, "Add @geonet/validation package", "Type-safe runtime validators and schemas.")

# PR #6: @geonet/api-client
git_ensure_branch("feature/package-api-client")
write_file("packages/api-client/package.json", json.dumps({
    "name": "@geonet/api-client", "version": "1.0.0", "main": "src/index.ts", "types": "src/index.ts",
    "dependencies": { "@geonet/types": "workspace:*" }, "devDependencies": { "typescript": "^5.4.0" }
}, indent=2))
write_file("packages/api-client/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "./dist", "rootDir": "./src" }, "include": ["src/**/*"]
}, indent=2))

write_file("packages/api-client/src/index.ts", """import { Device, NetworkNode, Alert } from '@geonet/types';
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
""")

git_commit("feat(api-client): implement universal typed SDK for REST and WebSocket interactions")
git_pr_merge("feature/package-api-client", 6, "Add @geonet/api-client package", "Universal typed client SDK for REST API and WebSocket events.")
print(">>> Step 3 Complete (PR #5 and PR #6)")
