import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Glassy Card */}
      <motion.div
        className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📩 Contact Me
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
            rows="5"
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Status Message */}
        <AnimatePresence>
          {status && (
            <motion.p
              className="mt-4 text-center text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>

        {/* WhatsApp Contact Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/919910960074" // Apna WhatsApp number yaha daalo
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Background Sparkles */}
      <span className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-sparkle"></span>
      <span className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full opacity-50 animate-sparkle animation-delay-1000"></span>
      <span className="absolute bottom-16 left-1/2 w-2 h-2 bg-white rounded-full opacity-50 animate-sparkle animation-delay-2000"></span>

      <style>{`
        @keyframes sparkle {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-4px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Contact;
