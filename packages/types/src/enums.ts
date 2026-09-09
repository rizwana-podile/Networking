export enum UserRole {
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
