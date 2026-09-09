const db = require('../../../../scripts/database/database-adapter');
const passwordService = require('./password.service');
const jwtService = require('./jwt.service');
class LoginService {
  async login(email, password, ip = '127.0.0.1') {
    const users = await db.query('users');
    const user = users.find(u => u.email === email.toLowerCase());
    if (!user) throw new Error('Invalid credentials');
    if (user.lockoutUntil && new Date(user.lockoutUntil) > new Date()) {
      throw new Error('Account locked due to consecutive failed attempts. Try again later.');
    }
    const valid = passwordService.compare(password, user.password_hash);
    if (!valid) {
      const attempts = (user.failedLoginAttempts || 0) + 1;
      const updates = { failedLoginAttempts: attempts };
      if (attempts >= 5) {
        updates.lockoutUntil = new Date(Date.now() + 15 * 60000).toISOString();
      }
      await db.update('users', user.id, updates);
      throw new Error('Invalid credentials');
    }
    await db.update('users', user.id, { failedLoginAttempts: 0, lockoutUntil: null, lastLoginAt: new Date().toISOString() });
    const accessToken = jwtService.sign({ sub: user.id, email: user.email, role: user.role });
    const refreshToken = jwtService.sign({ sub: user.id }, true);
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, tokens: { accessToken, refreshToken, expiresIn: 3600 } };
  }
}
module.exports = new LoginService();
