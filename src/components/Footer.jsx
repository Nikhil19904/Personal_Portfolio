import React from "react";
import { motion } from "framer-motion";
// import GitHubGraph from "./Github";

const FloatingFooter = () => {
  return (
    <footer className="relative py-6 px-6 overflow-hidden bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900 text-white">
      {/* Background floating blurred circles */}
      <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    
      {/* Center Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 animate-gradient bg-[length:200%_200%]">
            Developed by{" "}
          </span>
          <a
            href="https://linkedin.com/in/nikhil19904" // 🔗 Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-pink-300 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            Nikhil
          </a>
        </h1>
      </motion.div>

      {/* Sparkles */}
      <span className="absolute top-8 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-sparkle"></span>
      <span className="absolute top-16 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-sparkle animation-delay-1000"></span>
      <span className="absolute bottom-12 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-sparkle animation-delay-2000"></span>

      <style>{`
        @keyframes sparkle {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-3px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }

        /* Gradient animation for text */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default FloatingFooter;
