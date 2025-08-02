export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  // Check if all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Validate message length
  if (message.length < 10) {
    return res.status(400).json({ error: "Message should be at least 10 characters" });
  }

  next(); // ✅ Pass control to next handler
};
