const nodemailer = require("nodemailer");

async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.sendmailer,
      pass: process.end.send_mailer_password,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.sendmailer,
    to: email,
    subject: "Hello ✔ Send your OTP",
    text: "Hope your r fine",
    html: "<h2>Please verify your eamil</h2></></h2><b>Your OTP</b>",
  });
}

module.exports = sendEmail;
