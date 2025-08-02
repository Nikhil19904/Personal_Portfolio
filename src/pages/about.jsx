import React from "react";
import { FaUser} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 flex items-center gap-3">
        <FaUser className="text-4xl text-black" />
        About <span className="text-purple-600">Me</span>
      </h2>

      <div className="max-w-6xl w-full bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg" // ✅ Place your image in public folder
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* About Info */}
        <div className="flex-1 text-gray-700">
          <h3 className="text-3xl font-bold mb-2">I'm Mayank</h3>
          <p className="text-blue-700 font-semibold text-lg mb-4">Frontend Developer</p>

          <p className="mb-4 leading-relaxed">
            I'm Mayank, a passionate Frontend and Backend Developer based in Delhi, India. I recently completed my
            schooling from Primaril Senior Secondary School and I’m now diving deep into web development.
          </p>

          <p className="mb-4 leading-relaxed">
            I enjoy building responsive, interactive, and user-friendly websites using modern technologies like React,
            Node.js, Express, and MySQL. I’m also exploring authentication systems, OTP verification, and API integration.
          </p>

          <p className="mb-4 leading-relaxed">
            Apart from coding, I love watching movies, reading, and playing cricket 🏏. I believe in learning by doing and
            always look for real-world projects to sharpen my skills.
          </p>

          <p className="mb-4 leading-relaxed">
            I’m open to freelance work, internships, and collaborations. Let’s build something awesome together!
          </p>

          {/* Contact Info */}
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Email:</span> mayank@gmail.com
          </p>
          <p className="mb-6">
            <span className="font-semibold text-blue-600">Place:</span> Delhi, India
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf" // ✅ Replace with your resume file
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Resume 
          </a>
        </div>
      </div>
    </div>
  );
}
