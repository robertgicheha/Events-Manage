// app.js

const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
const eventRoutes = require('./routes/eventRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const ticketRoutes = require('./routes/ticketRoutes')
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')

// Connect to database
connectDB()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/events', eventRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/tickets', ticketRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/users', userRoutes)

// const PORT = 5000

// app.listen(PORT, () => {
//   return console.log(`Server started on port ${PORT}`)
// })

module.exports = app
