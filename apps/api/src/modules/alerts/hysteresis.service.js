class HysteresisService {
  constructor() {
    this.flappingTracker = new Map(); // targetId -> count
  }
  shouldTrigger(targetId, isBreached, requiredConsecutive = 3) {
    const current = this.flappingTracker.get(targetId) || 0;
    if (isBreached) {
      const next = current + 1;
      this.flappingTracker.set(targetId, next);
      return next >= requiredConsecutive;
    } else {
      this.flappingTracker.set(targetId, Math.max(0, current - 1));
      return false;
    }
  }
}
module.exports = new HysteresisService();
