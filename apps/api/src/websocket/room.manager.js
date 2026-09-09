class RoomManager {
  constructor() { this.rooms = new Map(); }
  join(roomName, socketId) {
    if (!this.rooms.has(roomName)) this.rooms.set(roomName, new Set());
    this.rooms.get(roomName).add(socketId);
  }
  leave(roomName, socketId) {
    if (this.rooms.has(roomName)) this.rooms.get(roomName).delete(socketId);
  }
  getMembers(roomName) {
    return Array.from(this.rooms.get(roomName) || []);
  }
}
module.exports = new RoomManager();
