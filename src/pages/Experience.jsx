import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Engineer Trainee",
    company: "Tendr",
    period: "April 2025 - present",
    description:
      "Developed a responsive frontend for Tendr event service marketplace using React + Tailwind CSS, creating 10+ reusable components to speed up development by 35%.",
  },
  {
    id: 2,
    role: "Backend Engineer Trainee",
    company: "AdvertHunt",
    period: "July 2024 - Oct. 2024",
    description:
      "Developed full-stack projects with MERN stack, implemented authentication & REST APIs.",
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jan 2025 - Present",
    description:
      "Worked with global clients on modern web projects, delivering pixel-perfect designs and scalable apps.",
  },
];

const Experience = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-20 px-6 flex justify-center items-center">
      {/* Center Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="relative w-40 h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-2xl z-20"
      >
        My Journey
      </motion.div>

      {/* SVG Curved Connector Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        {/* Top curve */}
<motion.path
  d="M50 50 C50 35, 50 35, 50 25" // adjusted to meet top card
  stroke="url(#gradientTop)"
  strokeWidth="2.5"
  fill="none"
  strokeDasharray="30"
  strokeDashoffset="30"
  animate={{ strokeDashoffset: 0 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
/>

        {/* Left curve */}
        <motion.path
          d="M50 50 C35 50, 25 60, 20 70"
          stroke="url(#gradientLeft)"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: [
              "M50 50 C35 50, 25 60, 20 70",
              "M50 50 C37 48, 27 62, 22 72",
              "M50 50 C33 52, 23 58, 18 68",
              "M50 50 C35 50, 25 60, 20 70",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right curve */}
        <motion.path
          d="M50 50 C65 50, 75 60, 80 70"
          stroke="url(#gradientRight)"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: [
              "M50 50 C65 50, 75 60, 80 70",
              "M50 50 C63 48, 73 62, 78 72",
              "M50 50 C67 52, 77 58, 82 68",
              "M50 50 C65 50, 75 60, 80 70",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradients for glowing effect */}
        <defs>
          <linearGradient id="gradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cards */}
      <div className="absolute w-full h-full max-w-5xl max-h-[600px] flex justify-center items-center">
        {/* Top card */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
          <Card exp={experiences[0]} />
        </div>

        {/* Left card */}
        <div className="absolute bottom-[10%] left-[-15%]">
          <Card exp={experiences[1]} />
        </div>

        {/* Right card */}
        <div className="absolute bottom-[10%] right-[-20%]">
          <Card exp={experiences[2]} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ exp }) => (
  <motion.div
    className="relative w-86 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-lg"
    whileHover={{
      scale: 1.05,
      boxShadow:
        "0 20px 40px rgba(59,130,246,0.4), 0 0 15px rgba(99,102,241,0.6)",
      y: -5,
    }}
    animate={{
      y: [0, -3, 0], // subtle floating
    }}
    transition={{
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      },
      duration: 0.4,
      ease: "easeInOut",
    }}
  >
    <div className="flex items-center mb-3">
      <span className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 mr-3">
        <Briefcase size={18} />
      </span>
      <h2 className="text-sm font-semibold text-gray-800">{exp.role}</h2>
    </div>
    <p className="text-xs font-medium text-blue-600 mb-1">{exp.company}</p>
    <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
    <p className="text-xs text-gray-700">{exp.description}</p>
  </motion.div>
);

export default Experience;