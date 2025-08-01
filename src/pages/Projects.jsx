import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects using React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'Contact Form with MySQL',
      description: 'A full-stack contact form with Node.js backend, MySQL database, and frontend validation.',
      tech: ['Node.js', 'Express', 'MySQL', 'React'],
    },
    {
      title: 'Login/Signup with OTP',
      description: 'A secure authentication system with OTP verification and Google/GitHub login using OAuth.',
      tech: ['Node.js', 'OAuth', 'JWT', 'MySQL'],
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">{t}</span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
