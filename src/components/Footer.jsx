import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-400">
          Developed by{' '}
          <a
            href="https://linkedin.com/in/your-linkedin" // ✅ Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Nikhil
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
