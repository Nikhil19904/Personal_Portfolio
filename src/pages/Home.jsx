import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        I’m a passionate developer who loves creating beautiful and functional web applications.
        Explore my projects, skills, education, and more!
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-100 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
