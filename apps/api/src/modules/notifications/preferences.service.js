class PreferencesService {
  constructor() { this.prefs = new Map(); }
  get(userId) {
    return this.prefs.get(userId) || { emailAlerts: true, inAppToasts: true, criticalOnly: false, networkAlerts: true, deviceAlerts: true };
  }
  set(userId, preferences) {
    this.prefs.set(userId, { ...this.get(userId), ...preferences });
    return this.get(userId);
  }
}
module.exports = new PreferencesService();
