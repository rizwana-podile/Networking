const rbacService = require('./rbac.service');
function requirePermission(permission) {
  return (req, res, next) => {
    const user = req.user;
    if (!user) return res.status(401).json({ message: 'Authentication required' });
    if (user.role === 'SUPER_ADMIN') return next();
    if (!rbacService.hasPermission(user.role, permission)) {
      return res.status(403).json({ message: `Forbidden: Missing required permission [${permission}]` });
    }
    next();
  };
}
module.exports = { requirePermission };
