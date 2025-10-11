import nodemailer from "nodemailer";

export async function POST(req : any) {
  const { firstName,lastName, email, message } = await req.json();

  // Create reusable transporter (use your own email credentials or SMTP)
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use SMTP host
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });  

  /* const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // your email
    subject: `New message from ${firstName} ${lastName}`,
    text: message,
  };*/

  const mailOptions = {
  from: process.env.EMAIL_USER, // your Gmail (authenticated sender)
      replyTo: email,               // user's email address
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}> Message:${message}`,
    };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ message: "Failed to send message." }, { status: 500 });
  }
}