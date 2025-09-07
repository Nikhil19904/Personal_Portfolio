const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
let db;
(async () => {
  try {
    db = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("✅ Connected to MySQL");
  } catch (err) {
    console.error("❌ MySQL Connection Failed:", err);
  }
})();

// ✅ Root route (for testing in browser)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Contact API
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  try {
    // 1️⃣ Save in MySQL
    await db.query("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)", [
      name,
      email,
      message,
    ]);

    // 2️⃣ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,

      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message saved and sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
