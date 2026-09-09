const { ROLE_PERMISSIONS_MAP } = require('../../../../packages/config/src/constants');
class RbacService {
  getRolePermissions(role) {
    return ROLE_PERMISSIONS_MAP[role] || [];
  }
  hasPermission(role, permission) {
    const permissions = this.getRolePermissions(role);
    return permissions.includes(permission) || role === 'SUPER_ADMIN';
  }
  getAllRoles() {
    return Object.keys(ROLE_PERMISSIONS_MAP);
  }
}
module.exports = new RbacService();
