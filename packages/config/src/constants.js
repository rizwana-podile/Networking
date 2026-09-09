const ROLE_PERMISSIONS_MAP = {
  SUPER_ADMIN: ['*'],
  ADMIN: ['users.view', 'devices.view', 'devices.create', 'devices.update', 'devices.delete', 'network.view', 'network.manage', 'alerts.view', 'alerts.manage'],
  NETWORK_ADMIN: ['network.view', 'network.manage', 'network.probe', 'topology.view', 'alerts.view', 'alerts.manage'],
  NETWORK_OPERATOR: ['network.view', 'network.probe', 'alerts.view', 'alerts.acknowledge'],
  SECURITY_ANALYST: ['audit.view', 'security.inspect', 'reports.view', 'alerts.view'],
  MANAGER: ['analytics.view', 'reports.view', 'reports.generate'],
  MONITORING_OPERATOR: ['devices.view', 'locations.view', 'network.view', 'alerts.view'],
  DEVICE_OWNER: ['devices.own.view', 'locations.own.view'],
  STANDARD_USER: ['devices.view', 'network.view', 'alerts.view'],
  VIEWER: ['devices.view', 'network.view', 'alerts.view']
};
module.exports = { ROLE_PERMISSIONS_MAP };
