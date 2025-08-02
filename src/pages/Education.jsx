import React from 'react';
import { GraduationCap } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">🎓 My Education Journey</h2>
      
      <div className="relative max-w-4xl mx-auto border-l-4 border-blue-600 pl-6 space-y-12">
        {educationList.map((edu, index) => (
          <div key={index} className="relative group">
            <span className="absolute -left-[30px] top-1 bg-white border-4 border-blue-600 rounded-full p-2 shadow">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </span>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-700">{edu.institute}</h3>
              <p className="text-gray-800 mt-1">{edu.degree}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{edu.duration}</span>
                <span className="font-medium">Grade: {edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
