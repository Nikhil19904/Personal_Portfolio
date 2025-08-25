import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationList = [
    {
      institute: "Maharaja Agrasen Institute of Technology (MAIT), Delhi",
      degree: "B.Tech in Information Technology",
      duration: " Dec. 2021 – July 2025",
      grade: "7.5 CGPA",
      year: "2025",
      image: "/images/mait.jpg",
    },
    {
      institute: "M.R.L Senior Secondary School, Delhi",
      degree: "Senior Secondary Education (12th)",
      duration: "May 2017 –  July 2021",
      grade: "71%",
      year: "2021",
      image: "/images/mrl.jpg",
    },
    {
      institute: "Goldy Modern Girls Higher Secondary School, Ghaziabad",
      degree: "Primary Education ",
      duration: " April 2007 – March 2013",
      grade: "86%",
      year: "2019",
      image: "/images/school.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient bg-[length:400%_400%]" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          🎓 My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
            Education Journey
          </span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

          <div className="space-y-12">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative pl-20 ${
                  index === educationList.length - 1 ? "mb-16" : ""
                }`} // last card extra gap
              >
                {/* Timeline Node */}
                <span className="absolute left-0 top-8 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </span>

                {/* Card with Image */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex flex-col sm:flex-row bg-white/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  {/* Image Section */}
                  <div className="sm:w-1/3">
                    <img
                      src={edu.image}
                      alt={edu.institute}
                      className="h-40 sm:h-full w-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.institute}
                    </h3>
                    <p className="text-blue-700 mt-1 font-medium">
                      {edu.degree}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                      <span>{edu.duration}</span>
                      <span className="font-semibold text-gray-800">
                        Grade: {edu.grade}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 12s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Education;
