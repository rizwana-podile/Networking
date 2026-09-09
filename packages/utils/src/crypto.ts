import crypto from 'crypto';
export function generateHmacSignature(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}
export function verifyHmacSignature(payload: string, secret: string, expected: string): boolean {
  return generateHmacSignature(payload, secret) === expected;
}
export function generateSecureToken(bytes = 32): string { return crypto.randomBytes(bytes).toString('hex'); }
export function hashApiKey(rawKey: string): string { return crypto.createHash('sha256').update(rawKey).digest('hex'); }
export function maskSensitive(str: string, visibleChars = 4): string {
  if (!str || str.length <= visibleChars) return '****';
  return '*'.repeat(str.length - visibleChars) + str.slice(-visibleChars);
}
