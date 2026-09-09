const socketGateway = require('./socket.gateway');
class EventDispatcher {
  emitLocation(point) { socketGateway.broadcast('device.location.updated', point); }
  emitDeviceStatus(deviceId, status) { socketGateway.broadcast('device.status.changed', { deviceId, status, timestamp: new Date().toISOString() }); }
  emitNodeStatus(nodeId, status) { socketGateway.broadcast('network.node.status.changed', { nodeId, status, timestamp: new Date().toISOString() }); }
  emitAlert(alert) { socketGateway.broadcast('alert.created', alert); }
}
module.exports = new EventDispatcher();
