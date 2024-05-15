const nodemailer = require('nodemailer');
require('dotenv').config();

const userEmail = process.env.EMAIL_USER;
const userPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userEmail,
        pass: userPass
    }
});

const mailOptions = {
    from: userEmail,
    to: 'johnajala84@gmail.com', // Replacing with the recipient's email address
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});
