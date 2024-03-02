// userRoutes.js

const express = require('express')
const router = express.Router()
const Event = require('../models/Event')
const Reservation = require('../models/Reservation')
const { sendEmail } = require('../config/emailConfig') // Import email service for sending confirmation emails

// Route to get a list of all available events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Route to reserve tickets for an event
router.post('/events/:eventId/reserve', async (req, res) => {
  const { eventId } = req.params
  const { userId, ticketType, quantity } = req.body

  try {
    // Check if event exists
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({ message: 'Event not found' })
    }

    // Check if tickets are available
    const availableTickets = event.tickets.find(
      (ticket) => ticket.type === ticketType && ticket.quantity >= quantity
    )
    if (!availableTickets) {
      return res.status(400).json({ message: 'Tickets not available' })
    }

    // Create reservation
    const reservation = new Reservation({
      userId,
      eventId,
      ticketType,
      quantity,
    })

    // Update ticket quantity
    availableTickets.quantity -= quantity
    await event.save()

    // Save reservation
    const newReservation = await reservation.save()

    // Send email confirmation
    const emailData = {
      to: 'user@example.com', // Change to user's email
      subject: 'Reservation Confirmation',
      text: `Your reservation for ${quantity} ${ticketType} ticket(s) for event ${event.eventName} has been confirmed.`,
    }
    sendEmail(emailData)

    res.status(201).json(newReservation)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
