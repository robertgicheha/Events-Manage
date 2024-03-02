// models/User.js

const mongoose = require('mongoose');

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // You can include additional fields like name, role, etc. as needed
}, { collection: 'users' },{ timestamps: true });

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
