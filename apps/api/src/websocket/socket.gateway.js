const jwtService = require('../modules/auth/jwt.service');
class SocketGateway {
  constructor() {
    this.clients = new Map();
    this.rooms = new Map();
  }
  handleConnection(socket) {
    const token = socket.handshake?.auth?.token || socket.handshake?.query?.token;
    const user = token ? jwtService.verify(token) : null;
    socket.user = user;
    this.clients.set(socket.id, socket);
    socket.on('disconnect', () => { this.clients.delete(socket.id); });
    return user;
  }
  broadcast(event, payload) {
    for (const client of this.clients.values()) {
      if (typeof client.emit === 'function') client.emit(event, payload);
    }
  }
}
module.exports = new SocketGateway();
