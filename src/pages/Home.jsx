import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Main Glass Container with Transparent Border */}
      <motion.div
        className="z-10 relative max-w-5xl w-full rounded-3xl p-[2px] bg-gradient-to-r from-purple-400/40 via-white/20 to-blue-400/40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Image */}
          <motion.div
            className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl mb-6 md:mb-0 md:mr-10 flex-shrink-0 border-4 border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="images/Photo.jpg" // ✅ Replace with your image
              alt="Mayank"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              👋 Hi, I'm Mayank
            </motion.h1>

            <motion.h2 className="text-lg md:text-2xl text-yellow-300 font-medium mb-4">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Enthusiast",
                  "Problem Solver",
                  "Tech Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h2>

            <p className="text-gray-100 mb-6 text-base md:text-lg max-w-xl">
              I am a Passionate Software and Full Stack Developer.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/Nikhil19904" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nikhil19904/" },
                { icon: <SiLeetcode />, link: "https://leetcode.com/u/Nikhil_19904/" },
                { icon: <FaTwitter />, link: "https://www.instagram.com/your-instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-purple-700 active:scale-90 transition-transform duration-200 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-all duration-300 shadow-lg"
              >
                View Projects <FaArrowRight />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-3 rounded-lg transition-all duration-300 shadow-lg"
              >
                 Resume <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
