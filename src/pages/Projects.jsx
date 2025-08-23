import React from "react";
import { FaEye, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Tendr",
      description:
        "A personal portfolio to showcase my skills and projects using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Razorpay", "Socket.io"],
      liveLink: "https://tendr-one.vercel.app/",
      codeLink: "https://github.com/Nikhil19904/Tendr",
      image: "images/tendr.png",
    },
    {
      title: "ShopNest",
      description:
        "A full-stack contact form with Node.js backend, MySQL database, and frontend validation.",
      tech: ["Node.js", "Express", "MySQL", "React"],
      liveLink: "#",
      codeLink: "https://github.com/Nikhil19904/ShopNest",
      image: "images/shopnest.png",
    },
    {
      title: "PlayTube",
      description:
        "A secure authentication system with OTP verification and Google/GitHub login using OAuth.",
      tech: ["Node.js", "OAuth", "JWT", "MongoDB"],
      liveLink: "#",
      codeLink: "https://github.com/Nikhil19904/PlayTube",
      image: "",
    },
    {
      title: "Customer Service Platform",
      description:
        "A modern e-commerce web app with product filtering, cart system, and Stripe payments.",
      tech: ["React", "Redux", "TailWindCSS", "Intercom"],
      liveLink: "https://customer-service-platform-my.vercel.app/",
      codeLink: "https://github.com/Nikhil19904/Customer-Service-Platform",
      image: "images/csp.png",
    },
    {
      title: "Personal Portfolio",
      description:
        "A real-time chat application with WebSocket, emoji picker, and typing indicators.",
      tech: ["React", "HTML", "JavaScript"],
      liveLink: "https://personal-portfolio-ivory-ten.vercel.app/",
      codeLink: "https://github.com/Nikhil19904/Personal_Portfolio",
      image: "images/portfolio.png",
    },
    {
      title: "SafeVision",
      description:
        "A weather dashboard with live API data, geolocation, and dark/light mode support.",
      tech: ["React", "Express", "Node.js" ,"Mysql"],
      liveLink: "#",
      codeLink: "https://github.com/Nikhil19904/SafeVision",
      image: "images/camsecurity.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-19 relative overflow-hidden">
      {/* Background Soft Gradient Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>

      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
        🚀 My <span className="text-blue-600">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl flex flex-col overflow-hidden group rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            {/* Project Image with Overlay */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded hover:opacity-90 text-xs font-semibold shadow-md"
                >
                  <FaEye /> View Project
                </a>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 text-purple-700 px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-50 transition-all text-sm font-semibold rounded-lg"
                >
                  <FaCode /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
