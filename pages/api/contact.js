import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Process form data (e.g., send email)
      const { name, email, message, subject, phone, guests, cocktails } =
        req.body;

      // Create a transporter (SMTP setup)
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use Gmail
        auth: {
          user: process.env.WEBMASTER_EMAIL, // Your Gmail address
          pass: process.env.WEBMASTER_APP_PASS, // Your Gmail password
        },
      });

      // Compose email
      const mailOptions = {
        from: process.env.WEBMASTER_EMAIL,
        to: process.env.RECIPIENT_EMAIL, // Specify the recipient's email address
        subject: { subject },
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nCocktails: ${cocktails}\nMessage: ${message}`,
      };

      // Send email
      transporter.sendMail(mailOptions);

      // Respond with success message
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
