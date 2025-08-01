import React from 'react';

const Education = () => {
  const educationList = [
    {
      institute: 'University School of Automation and Robotics (USAR), Delhi',
      degree: 'B.Tech in Computer Science',
      duration: '2021 – 2025',
      grade: '8.5 CGPA',
    },
    {
      institute: 'Primaril Senior Secondary School, Delhi',
      degree: 'Higher Secondary Education (12th)',
      duration: '2020 – 2021',
      grade: '85%',
    },
    {
      institute: 'Primaril Senior Secondary School, Delhi',
      degree: 'Secondary Education (10th)',
      duration: '2018 – 2019',
      grade: '90%',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-700">{edu.institute}</h3>
            <p className="text-gray-700 mt-1">{edu.degree}</p>
            <p className="text-gray-500">{edu.duration}</p>
            <p className="text-sm text-gray-600 mt-2">Grade: {edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
