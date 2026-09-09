export interface ValidationResult<T> { success: boolean; data?: T; errors?: string[]; }
export function validateEmail(email: string): boolean { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
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
