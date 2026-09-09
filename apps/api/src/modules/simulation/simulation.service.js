const fleetMover = require('./fleet.mover');
const faultInjector = require('./fault.injector');
class SimulationService {
  constructor() {
    this.state = 'RUNNING';
    fleetMover.start(2000);
  }
  getStatus() {
    return { state: this.state, activeFleetSize: 25, activeNodes: 15, updateIntervalMs: 2000 };
  }
  control(action) {
    if (action === 'start') { fleetMover.start(2000); this.state = 'RUNNING'; }
    else if (action === 'pause') { fleetMover.stop(); this.state = 'PAUSED'; }
    else if (action === 'stop') { fleetMover.stop(); this.state = 'STOPPED'; }
    else if (action === 'reset') { require('../../../../scripts/database/seed'); this.state = 'IDLE'; }
    return this.getStatus();
  }
}
module.exports = new SimulationService();
