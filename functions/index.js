const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

exports.sendEmail = functions.https.onCall((data, context) => {
  const { name, email, subject, message } = data;

  const msg = {
    to: "YOUR_DESTINATION_EMAIL", // Replace with your destination email address
    from: "YOUR_SENDER_EMAIL", // Replace with your sender email address
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return sgMail.send(msg);
});
