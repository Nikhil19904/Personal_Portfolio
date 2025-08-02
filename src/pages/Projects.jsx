import React from 'react';
import { FaEye, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio to showcase my skills and projects using React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      liveLink: 'https://your-portfolio-link.com',
      codeLink: 'https://github.com/your-repo',
    },
    {
      title: 'Contact Form with MySQL',
      description:
        'A full-stack contact form with Node.js backend, MySQL database, and frontend validation.',
      tech: ['Node.js', 'Express', 'MySQL', 'React'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Login/Signup with OTP',
      description:
        'A secure authentication system with OTP verification and Google/GitHub login using OAuth.',
      tech: ['Node.js', 'OAuth', 'JWT', 'MySQL'],
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        My <span className="text-blue-600">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold"
              >
                <FaEye /> View
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold"
              >
                <FaCode /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
