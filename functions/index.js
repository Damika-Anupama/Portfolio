const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure nodemailer with your email provider (e.g., Gmail)
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'damikaanupama@gmail.com',
    pass: 'PlayboyHOOKER345#',
  },
});

exports.sendEmail = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: data.email,
      to: 'damikaanupama@gmail.com',
      subject: data.subject,
      text: data.message,
    };

    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('Email sent successfully');
      return null;
    });
  });
