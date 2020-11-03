import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, html: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "gjb27kz7iezhmros@ethereal.email", // generated ethereal user
      pass: "1x76tfWWPcFj72QBx9" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "shraddheya@gmail.com", // sender address
    to, // list of receivers
    subject: "Hello ✔", // Subject line
    html // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
