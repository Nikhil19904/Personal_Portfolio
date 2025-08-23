import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGithub, FaPython, FaDocker, FaCode 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiKotlin, SiPostman, SiNetlify, SiVercel, SiIntellijidea 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", level: 70, icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", level: 65, icon: <FaNode className="text-green-500" /> },
    { name: "Express.js", level: 65, icon: <SiExpress className="text-gray-700" /> },
    { name: "MySQL", level: 60, icon: <FaDatabase className="text-blue-700" /> },
    { name: "MongoDB", level: 50, icon: <SiMongodb className="text-green-600" /> },
    { name: "Git/GitHub", level: 70, icon: <FaGithub className="text-black" /> },
    { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Python", level: 80, icon: <FaPython className="text-blue-600" /> },
    { name: "Bootstrap", level: 80, icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Kotlin", level: 60, icon: <SiKotlin className="text-purple-400" /> },
    { name: "REST API", level: 70, icon: <FaCode className="text-gray-700" /> },
    { name: "Postman", level: 75, icon: <SiPostman className="text-orange-500" /> },
    { name: "Netlify", level: 70, icon: <SiNetlify className="text-green-500" /> },
    { name: "Vercel", level: 70, icon: <SiVercel className="text-gray-800" /> },
    { name: "IntelliJ", level: 80, icon: <SiIntellijidea className="text-red-600" /> },
    { name: "Docker", level: 65, icon: <FaDocker className="text-blue-500" /> },
    { name: "VS Code", level: 90, icon: <FaCode className="text-blue-600" /> },
  ];

  return (
    <div className="relative min-h-screen py-14 px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient bg-[length:400%_400%] blur-3xl opacity-30"></div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto pt-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          🚀 My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 relative z-10"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </motion.div>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 rounded-full bg-[linear-gradient(90deg,#f43f5e,#f59e0b,#22d3ee,#818cf8,#a78bfa)] bg-[length:300%_100%]"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ backgroundSize: "300% 100%", animation: "rainbow 3s linear infinite" }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Proficiency: {skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rainbow animation keyframes */}
      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
