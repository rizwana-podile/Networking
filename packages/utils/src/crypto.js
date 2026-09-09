const crypto = require('crypto');
function generateHmacSignature(payload, secret) { return crypto.createHmac('sha256', secret).update(payload).digest('hex'); }
function verifyHmacSignature(payload, secret, expected) { return generateHmacSignature(payload, secret) === expected; }
function generateSecureToken(bytes = 32) { return crypto.randomBytes(bytes).toString('hex'); }
function hashApiKey(rawKey) { return crypto.createHash('sha256').update(rawKey).digest('hex'); }
module.exports = { generateHmacSignature, verifyHmacSignature, generateSecureToken, hashApiKey };
