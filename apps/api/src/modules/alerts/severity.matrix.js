const SEVERITY_LEVELS = {
  INFO: { priority: 1, color: '#3B82F6', sound: false },
  LOW: { priority: 2, color: '#10B981', sound: false },
  MEDIUM: { priority: 3, color: '#F59E0B', sound: false },
  HIGH: { priority: 4, color: '#F97316', sound: true },
  CRITICAL: { priority: 5, color: '#EF4444', sound: true }
};
function getSeverityConfig(sev) {
  return SEVERITY_LEVELS[sev] || SEVERITY_LEVELS.INFO;
}
module.exports = { SEVERITY_LEVELS, getSeverityConfig };
