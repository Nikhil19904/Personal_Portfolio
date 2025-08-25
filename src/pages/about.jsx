import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
      {/* Animated Background Blobs */}
      <span className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full opacity-40 filter blur-3xl animate-blob"></span>
      <span className="absolute top-20 right-1/4 w-72 h-72 bg-pink-300 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-2000"></span>
      <span className="absolute bottom-10 left-1/3 w-72 h-72 bg-blue-300 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-4000"></span>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center gap-3 relative z-10">
        <FaUser className="text-4xl text-black" />
        About <span className="text-purple-600">Me</span>
      </h2>

      {/* Glass Card */}
      <motion.div
        className="relative z-10 max-w-6xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="images/Photo.jpg" // Replace with your image
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-gray-200"
          />
        </motion.div>

        {/* About Info */}
        <div className="flex-1 text-gray-700">
          <h3 className="text-3xl font-bold mb-2">I'm Nikhil</h3>
          <p className="text-blue-700 font-semibold text-lg mb-4">Full Stack Developer</p>

          <p className="mb-4 leading-relaxed">
            I'm Nikhil, a passionate Frontend and Backend Developer based in Delhi, India. I recently completed my schooling from Primaril Senior Secondary School and I’m now diving deep into web development.
          </p>

          <p className="mb-4 leading-relaxed">
            I enjoy building responsive, interactive, and user-friendly websites using modern technologies like React, Node.js, Express, and MySQL. I’m also exploring authentication systems, OTP verification, and API integration.
          </p>

          <p className="mb-4 leading-relaxed">
            Apart from coding, I love watching movies, reading, and playing cricket 🏏. I believe in learning by doing and always look for real-world projects to sharpen my skills.
          </p>

          <p className="mb-4 leading-relaxed">
            I’m open to freelance work, internships, and collaborations. Let’s build something awesome together!
          </p>

          {/* Contact Info */}
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Email:</span> chauhannikhil00414@gmail.com
          </p>
          <p className="mb-6">
            <span className="font-semibold text-blue-600">Place:</span> Delhi, India
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1EYbqVXYHqfQCdnj_HDWcbIrTjZzILzi5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Blob Animation Keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
