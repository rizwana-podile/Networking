const crypto = require('crypto');
const db = require('../../../../scripts/database/database-adapter');
const passwordService = require('./password.service');
class PasswordResetService {
  constructor() { this.resetTokens = new Map(); }
  async requestReset(email) {
    const users = await db.query('users');
    const user = users.find(u => u.email === email.toLowerCase());
    if (!user) return { message: 'If the email exists, a reset link was generated.' };
    const token = crypto.randomBytes(32).toString('hex');
    this.resetTokens.set(token, { userId: user.id, expiresAt: Date.now() + 3600000 });
    return { message: 'Reset token generated successfully', resetToken: token };
  }
  async confirmReset(token, newPassword) {
    const item = this.resetTokens.get(token);
    if (!item || Date.now() > item.expiresAt) throw new Error('Invalid or expired reset token');
    const hash = passwordService.hash(newPassword);
    await db.update('users', item.userId, { password_hash: hash });
    this.resetTokens.delete(token);
    return { message: 'Password reset successful. You may now log in.' };
  }
}
module.exports = new PasswordResetService();
