// models/Admin.js

const mongoose = require('mongoose');

// Define the schema for the admin model
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'admin' // You can define different roles if needed
  }
}, { collection: 'admin' });

// Create and export the Admin model
module.exports = mongoose.model('Admin', adminSchema);
