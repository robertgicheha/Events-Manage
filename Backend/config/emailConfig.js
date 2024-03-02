// emailConfig.js

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'robertgicheha3@gmail.com', // Your Gmail email address
    pass: 'vddnxxdocteknoui' // Your Gmail password or App Password if 2-step verification is enabled
  }
});

module.exports = transporter;
