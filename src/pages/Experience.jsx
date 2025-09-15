import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Engineer Trainee",
    company: "Tendr",
    period: "August 2025 - present",
    description:
      "Developed a responsive frontend for Tendr event service marketplace using React + Tailwind CSS, creating 10+ reusable components to speed up development by 35%.",
  },
  {
    id: 2,
    role: "Full-Stack Engineer Trainee",
    company: "Matrimony.com Limited",
    period: "July 2024 - July 2025",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        My Journey
      </h1>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative rounded-2xl p-6 bg-gradient-to-br from-white/60 to-white/20 
                       backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 25px 50px rgba(59,130,246,0.25), 0 0 25px rgba(168,85,247,0.4)",
            }}
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl border border-transparent 
                            bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 
                            opacity-60 blur-[3px]"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                                 flex items-center justify-center text-blue-600 shadow-inner border border-white/40">
                  <Briefcase size={22} />
                </span>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {exp.role}
                  </h2>
                  <p className="text-sm font-medium text-purple-600">
                    {exp.company}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-3 italic">{exp.period}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
