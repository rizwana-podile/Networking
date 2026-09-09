import { UserRole, Permission } from './enums';
export interface User {
  id: string; email: string; name: string; role: UserRole; isActive: boolean; isVerified: boolean;
  avatarUrl?: string; phoneNumber?: string; failedLoginAttempts: number; lockoutUntil?: string | null; lastLoginAt?: string | null; createdAt: string; updatedAt: string;
}
export interface UserSession { id: string; userId: string; refreshTokenHash: string; ipAddress: string; userAgent: string; deviceType: string; isValid: boolean; expiresAt: string; createdAt: string; lastActiveAt: string; }
export interface AuthTokens { accessToken: string; refreshToken: string; expiresIn: number; tokenType: 'Bearer'; }
export interface AuthResponse { user: User; tokens: AuthTokens; permissions: Permission[]; }
export interface LoginDto { email: string; password: string; rememberMe?: boolean; }
export interface RegisterDto { name: string; email: string; password: string; confirmPassword?: string; role?: UserRole; department?: string; }
