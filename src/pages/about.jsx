import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hello! I'm <span className="font-semibold text-blue-600">Mayank</span>, a passionate frontend and backend developer from Delhi, India.
          I recently completed my schooling from Primaril Senior Secondary School and I'm now diving deep into web development.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          I enjoy building responsive, interactive, and user-friendly websites using modern technologies like React, Node.js, Express, and MySQL.
          I’m also exploring authentication systems, OTP verification, and API integration.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Apart from coding, I love watching movies, reading, and playing cricket 🏏. I believe in learning by doing and always look for real-world
          projects to sharpen my skills.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I’m open to freelance work, internships, and collaborations. Let’s build something awesome together!
        </p>
      </div>
    </div>
  );
}
