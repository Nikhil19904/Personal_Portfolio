import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Basic' },
    { name: 'Git/GitHub', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold text-blue-600">{skill.name}</h3>
            <p className="text-gray-600">Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
