import React, { useState, useEffect } from "react";
import API from "../api"; // ✅ axios instance import
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load saved form from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      await API.post("/api/contact", formData); // ✅ API instance used
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      localStorage.removeItem("contactForm");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-6 py-16 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Glassy Card */}
      <motion.div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl border ${
          darkMode ? "bg-gray-800/70 border-gray-600" : "bg-white/70 border-gray-200"
        } backdrop-blur-lg`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">📩 Contact Me</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
              rows="5"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg flex justify-center items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <span className="loader border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Status Message */}
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              className="mt-4 text-center text-green-500 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="mt-4 text-center text-red-500 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              ❌ Failed to send message.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Social Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/919910960074"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
