// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  organization: { type: String, required: true },
  role: { type: String, enum: ['leader', 'admin', 'member', 'viewer'], default: 'member' },
});

module.exports = mongoose.model('User', UserSchema);
