const db = require('../../database/database-adapter');
const passwordService = require('./password.service');
class RegisterService {
  async register(data) {
    const users = await db.query('users');
    if (users.some(u => u.email === data.email.toLowerCase())) {
      throw new Error('Email is already registered');
    }
    const newUser = {
      email: data.email.toLowerCase(),
      name: data.name,
      role: data.role || 'STANDARD_USER',
      password_hash: passwordService.hash(data.password),
      isActive: true,
      isVerified: true,
      failedLoginAttempts: 0
    };
    return db.insert('users', newUser);
  }
}
module.exports = new RegisterService();
