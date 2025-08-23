import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "ABC Tech",
    period: "Jan 2023 - Jun 2023",
    description:
      "Built responsive web apps using React.js, optimized performance, and collaborated with the UI/UX team.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "XYZ Solutions",
    period: "Jul 2023 - Dec 2024",
    description:
      "Developed full-stack projects with MERN stack, implemented authentication & REST APIs.",
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "Jan 2025 - Present",
    description:
      "Worked with global clients on modern web projects, delivering pixel-perfect designs and scalable apps.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        💼 My Experience
      </h1>

      <div className="max-w-2xl mx-auto space-y-8 border-l-2 border-gray-300 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white shadow-md rounded-2xl p-6 border border-gray-200"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md">
              <Briefcase size={14} />
            </span>

            <h2 className="text-lg font-semibold text-gray-900">
              {exp.role} @ {exp.company}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
