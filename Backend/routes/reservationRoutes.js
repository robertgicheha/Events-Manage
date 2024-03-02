// routes/reservationRoutes.js

const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Create a new reservation
router.post('/', async (req, res) => {
  const reservation = new Reservation({
    eventId: req.body.eventId,
    userId: req.body.userId,
    ticketType: req.body.ticketType,
    quantity: req.body.quantity
    // Add more fields as needed
  });

  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add more routes for CRUD operations as needed

module.exports = router;
