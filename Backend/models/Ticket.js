// models/Ticket.js

const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  maxAttendees: {
    type: Number,
    required: true
  }
}, { collection: 'tickets' }); // Specify collection name here

module.exports = mongoose.model('Ticket', ticketSchema);
