// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, { collection: 'events' }); // Specify collection name here

module.exports = mongoose.model('Event', eventSchema);
