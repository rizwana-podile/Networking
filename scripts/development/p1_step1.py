# -*- coding: utf-8 -*-
import os, json, sys
sys.path.append(os.path.dirname(__file__))
from common_builder import write_file, git_ensure_branch, git_commit, git_pr_merge

print(">>> Starting Phase 1 - Step 1: Workspace & Types...")

# PR #1
git_ensure_branch("feature/foundation-workspace")
write_file("README.md", """# GeoNet Sentinel - Real-Time Location Tracking and Network Monitoring System
Enterprise-grade platform for authorized geospatial asset tracking and telecommunications/datacenter network observability.
""")
git_commit("feat(monorepo): initialize monorepo workspace structure, README and documentation anchors")
git_pr_merge("feature/foundation-workspace", 1, "Initialize monorepo workspace", "Sets up monorepo packages, workspaces, and system README.")

# PR #2
git_ensure_branch("feature/package-types")
write_file("packages/types/package.json", json.dumps({
    "name": "@geonet/types", "version": "1.0.0", "main": "src/index.ts", "types": "src/index.ts",
    "scripts": { "typecheck": "tsc --noEmit" }, "devDependencies": { "typescript": "^5.4.0" }
}, indent=2))

write_file("packages/types/tsconfig.json", json.dumps({
    "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "./dist", "rootDir": "./src" }, "include": ["src/**/*"]
}, indent=2))

enums = """export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN', ADMIN = 'ADMIN', NETWORK_ADMIN = 'NETWORK_ADMIN',
  NETWORK_OPERATOR = 'NETWORK_OPERATOR', SECURITY_ANALYST = 'SECURITY_ANALYST',
  MANAGER = 'MANAGER', MONITORING_OPERATOR = 'MONITORING_OPERATOR',
  DEVICE_OWNER = 'DEVICE_OWNER', STANDARD_USER = 'STANDARD_USER', VIEWER = 'VIEWER'
}
export enum Permission {
  USERS_VIEW = 'users.view', USERS_CREATE = 'users.create', USERS_UPDATE = 'users.update', USERS_DELETE = 'users.delete', USERS_ASSIGN_ROLE = 'users.assign_role',
  DEVICES_VIEW = 'devices.view', DEVICES_CREATE = 'devices.create', DEVICES_UPDATE = 'devices.update', DEVICES_DELETE = 'devices.delete', DEVICES_CONTROL = 'devices.control',
  DEVICES_OWN_VIEW = 'devices.own.view', DEVICES_OWN_UPDATE = 'devices.own.update',
  LOCATIONS_VIEW = 'locations.view', LOCATIONS_INGEST = 'locations.ingest', LOCATIONS_HISTORY = 'locations.history', LOCATIONS_EXPORT = 'locations.export', LOCATIONS_GEOFENCE_MANAGE = 'locations.geofence.manage', LOCATIONS_OWN_VIEW = 'locations.own.view',
  NETWORK_VIEW = 'network.view', NETWORK_MANAGE = 'network.manage', NETWORK_PROBE = 'network.probe', TOPOLOGY_VIEW = 'topology.view', TOPOLOGY_MANAGE = 'topology.manage',
  ALERTS_VIEW = 'alerts.view', ALERTS_MANAGE = 'alerts.manage', ALERTS_ACKNOWLEDGE = 'alerts.acknowledge', ALERTS_RESOLVE = 'alerts.resolve', ALERTS_OWN_VIEW = 'alerts.own.view',
  NOTIFICATIONS_VIEW = 'notifications.view', NOTIFICATIONS_MANAGE = 'notifications.manage',
  ANALYTICS_VIEW = 'analytics.view', REPORTS_VIEW = 'reports.view', REPORTS_GENERATE = 'reports.generate', REPORTS_SECURITY = 'reports.security',
  AUDIT_VIEW = 'audit.view', SECURITY_INSPECT = 'security.inspect', API_KEYS_MANAGE = 'api_keys.manage', API_KEYS_AUDIT = 'api_keys.audit', WEBHOOKS_MANAGE = 'webhooks.manage',
  SIMULATION_CONTROL = 'simulation.control', SYSTEM_MANAGE = 'system.manage'
}
export enum DeviceStatus { ONLINE = 'ONLINE', OFFLINE = 'OFFLINE', MOVING = 'MOVING', STATIONARY = 'STATIONARY', MAINTENANCE = 'MAINTENANCE', DECOMMISSIONED = 'DECOMMISSIONED', TAMPERED = 'TAMPERED' }
export enum DeviceType { GPS_TRACKER = 'GPS_TRACKER', FLEET_VEHICLE = 'FLEET_VEHICLE', MOBILE_HANDSET = 'MOBILE_HANDSET', EDGE_ROUTER = 'EDGE_ROUTER', IOT_SENSOR = 'IOT_SENSOR', ASSET_BEACON = 'ASSET_BEACON', DRONE_UAV = 'DRONE_UAV', CARGO_CONTAINER = 'CARGO_CONTAINER' }
export enum NodeStatus { ONLINE = 'ONLINE', DEGRADED = 'DEGRADED', OFFLINE = 'OFFLINE', MAINTENANCE = 'MAINTENANCE', UNKNOWN = 'UNKNOWN' }
export enum NodeType { SERVER = 'SERVER', ROUTER = 'ROUTER', SWITCH = 'SWITCH', GATEWAY = 'GATEWAY', API_ENDPOINT = 'API_ENDPOINT', DATABASE = 'DATABASE', LOAD_BALANCER = 'LOAD_BALANCER', CONTAINER_HOST = 'CONTAINER_HOST', FIREWALL = 'FIREWALL' }
export enum AlertSeverity { INFO = 'INFO', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL' }
export enum AlertStatus { OPEN = 'OPEN', ACKNOWLEDGED = 'ACKNOWLEDGED', RESOLVED = 'RESOLVED', CLOSED = 'CLOSED', SUPPRESSED = 'SUPPRESSED' }
export enum ProbeType { ICMP_PING = 'ICMP_PING', TCP_PORT = 'TCP_PORT', HTTP_HEALTH = 'HTTP_HEALTH', DNS_LOOKUP = 'DNS_LOOKUP', SSL_CERT = 'SSL_CERT' }
export enum MetricType { LATENCY_MS = 'LATENCY_MS', PACKET_LOSS_PERCENT = 'PACKET_LOSS_PERCENT', CPU_UTILIZATION_PERCENT = 'CPU_UTILIZATION_PERCENT', MEMORY_UTILIZATION_PERCENT = 'MEMORY_UTILIZATION_PERCENT', DISK_UTILIZATION_PERCENT = 'DISK_UTILIZATION_PERCENT', THROUGHPUT_MBPS = 'THROUGHPUT_MBPS', BATTERY_PERCENT = 'BATTERY_PERCENT', SPEED_KPH = 'SPEED_KPH' }
export enum SimulationState { IDLE = 'IDLE', RUNNING = 'RUNNING', PAUSED = 'PAUSED', STOPPED = 'STOPPED', FAULT_INJECTED = 'FAULT_INJECTED' }
export enum WebSocketChannel { DEVICE_LOCATION = 'device.location.updated', DEVICE_STATUS = 'device.status.changed', NETWORK_NODE_STATUS = 'network.node.status.changed', NETWORK_METRIC = 'network.metric.updated', ALERT_CREATED = 'alert.created', ALERT_UPDATED = 'alert.updated', NOTIFICATION_CREATED = 'notification.created', SIMULATION_TICK = 'simulation.tick', SYSTEM_STATUS = 'system.status.updated' }
"""
write_file("packages/types/src/enums.ts", enums)

write_file("packages/types/src/user.ts", """import { UserRole, Permission } from './enums';
export interface User {
  id: string; email: string; name: string; role: UserRole; isActive: boolean; isVerified: boolean;
  avatarUrl?: string; phoneNumber?: string; failedLoginAttempts: number; lockoutUntil?: string | null; lastLoginAt?: string | null; createdAt: string; updatedAt: string;
}
export interface UserSession { id: string; userId: string; refreshTokenHash: string; ipAddress: string; userAgent: string; deviceType: string; isValid: boolean; expiresAt: string; createdAt: string; lastActiveAt: string; }
export interface AuthTokens { accessToken: string; refreshToken: string; expiresIn: number; tokenType: 'Bearer'; }
export interface AuthResponse { user: User; tokens: AuthTokens; permissions: Permission[]; }
export interface LoginDto { email: string; password: string; rememberMe?: boolean; }
export interface RegisterDto { name: string; email: string; password: string; confirmPassword?: string; role?: UserRole; department?: string; }
""")

write_file("packages/types/src/device.ts", """import { DeviceStatus, DeviceType } from './enums';
export interface Device {
  id: string; deviceId: string; name: string; type: DeviceType; status: DeviceStatus;
  ownerId?: string | null; ownerName?: string; apiKeyHash?: string; batteryLevel: number;
  latitude: number; longitude: number; speedKph?: number; headingDegrees?: number; accuracyMeters?: number;
  isSimulated: boolean; tags: string[]; lastSeenAt: string; registeredAt: string; updatedAt: string;
}
export interface DeviceLocation {
  id: string; deviceId: string; latitude: number; longitude: number; altitudeMeters?: number; accuracyMeters: number;
  speedKph: number; headingDegrees: number; batteryLevel: number; networkStatus: string; timestamp: string; source: 'GPS' | 'CELLULAR' | 'WIFI' | 'SIMULATION';
}
export interface LocationIngestDto {
  deviceId: string; latitude: number; longitude: number; altitudeMeters?: number; accuracyMeters: number; speedKph: number;
  headingDegrees: number; batteryLevel: number; networkStatus: string; timestamp: string; signature?: string;
}
export interface Geofence { id: string; name: string; type: 'CIRCLE' | 'POLYGON'; coordinates: number[][]; radiusMeters?: number; assignedDeviceIds: string[]; isActive: boolean; }
""")

write_file("packages/types/src/network.ts", """import { NodeStatus, NodeType, ProbeType } from './enums';
export interface NetworkNode {
  id: string; name: string; hostname: string; ipAddress: string; type: NodeType; status: NodeStatus;
  location?: string; monitoringIntervalSeconds: number; lastCheckAt: string; latencyMs: number; packetLossPercent: number;
  uptimePercent: number; healthScore: number; cpuUtilizationPercent: number; memoryUtilizationPercent: number; diskUtilizationPercent: number;
  activeIncidentsCount: number; isSimulated: boolean; createdAt: string; updatedAt: string;
}
export interface NetworkLink { id: string; sourceNodeId: string; targetNodeId: string; linkType: string; bandwidthMbps: number; latencyMs: number; packetLossPercent: number; status: 'OPTIMAL' | 'DEGRADED' | 'DOWN'; }
export interface TopologyGraph { nodes: NetworkNode[]; links: NetworkLink[]; updatedAt: string; }
""")

write_file("packages/types/src/alert.ts", """import { AlertSeverity, AlertStatus, MetricType } from './enums';
export interface AlertRule {
  id: string; name: string; metricType: MetricType; targetType: 'NODE' | 'DEVICE' | 'SYSTEM'; targetId?: string | null;
  operator: 'GT' | 'GTE' | 'LT' | 'LTE' | 'EQ' | 'NEQ'; warningThreshold: number; criticalThreshold: number; durationSeconds: number;
  consecutiveBreachesRequired: number; recoveryDurationSeconds: number; severity: AlertSeverity; isEnabled: boolean;
}
export interface Alert {
  id: string; ruleId: string; ruleName: string; targetType: 'NODE' | 'DEVICE' | 'SYSTEM'; targetId: string; targetName: string;
  severity: AlertSeverity; status: AlertStatus; metricType: MetricType; currentValue: number; thresholdValue: number; message: string;
  acknowledgedByUserName?: string | null; acknowledgedAt?: string | null; resolvedByUserName?: string | null; resolvedAt?: string | null;
  createdAt: string; updatedAt: string;
}
export interface Notification { id: string; userId: string; title: string; body: string; severity: AlertSeverity; isRead: boolean; createdAt: string; }
""")

write_file("packages/types/src/index.ts", """export * from './enums';
export * from './user';
export * from './device';
export * from './network';
export * from './alert';
""")

git_commit("feat(types): implement shared domain types, DTO contracts, and enums")
git_pr_merge("feature/package-types", 2, "Add @geonet/types domain contracts", "Implements enterprise-grade TypeScript types and enums.")
print(">>> Step 1 Complete (PR #1 and PR #2)")
