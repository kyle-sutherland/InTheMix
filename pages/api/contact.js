import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);
OAuth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const ACCESS_TOKEN = OAuth2_client.getAccessToken();
      // Process form data (e.g., send email)
      const { name, email, message, subject, phone, guests, cocktails } =
        req.body;

      // Create a transporter (SMTP setup)
      const transporter = nodemailer.createTransport({
        service: "gmail", // Use Gmail
        auth: {
          type: "OAuth2",
          user: process.env.WEBMASTER_EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: (await process.env.ACCESS_TOKEN).token || "",
        },
      });

      // Compose email
      const mailOptions = {
        from: process.env.WEBMASTER_EMAIL,
        to: process.env.RECIPIENT_EMAIL, // Specify the recipient's email address
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nCocktails: ${cocktails}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

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
