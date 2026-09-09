const db = require('../../../../scripts/database/database-adapter');
class UsersService {
  async listUsers(query = {}) {
    let users = await db.query('users');
    if (query.role) users = users.filter(u => u.role === query.role);
    if (query.search) {
      const s = query.search.toLowerCase();
      users = users.filter(u => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s));
    }
    return { items: users.map(u => ({ id: u.id, name: u.name, email: u.email, role: u.role, isActive: u.isActive })), total: users.length };
  }
  async getUserById(id) {
    const user = await db.findById('users', id);
    if (!user) throw new Error('User not found');
    const { password_hash, ...safe } = user;
    return safe;
  }
  async updateUser(id, data) {
    const updated = await db.update('users', id, data);
    if (!updated) throw new Error('User not found');
    const { password_hash, ...safe } = updated;
    return safe;
  }
  async deleteUser(id) {
    return db.delete('users', id);
  }
}
module.exports = new UsersService();
