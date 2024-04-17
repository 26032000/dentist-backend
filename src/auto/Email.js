const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, 
  port: process.env.EMAIL_PORT, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
const emailContent = `<h2>Appointment Confirmation</h2>
<p>Dear ${user.name},</p>
<p>This email confirms your appointment with Dr. ${dentist.name} on ${appointment.date} at ${appointment.time}.</p>
`;

const mailOptions = {
  from: 'your_email@example.com', 
  to: user.email,
  subject: 'Appointment Confirmation - [Clinic Name]',
  html: emailContent
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    
  } else {
    console.log('Email sent: ' + info.response);
    
  }
});
