// models/Reservation.js

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  ticketType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { collection: 'reservations' }); // Specify collection name here

module.exports = mongoose.model('Reservation', reservationSchema);
