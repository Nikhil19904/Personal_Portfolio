import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShareAlt, FaRegCommentDots } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React.js and how to build your first component.",
    date: "Aug 20, 2025",
    author: "Nikhil",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "Discover how to style modern apps quickly with Tailwind CSS.",
    date: "Aug 15, 2025",
    author: "Nikhil",
  },
  {
    id: 3,
    title: "Framer Motion Animations",
    description: "Bring your UI to life with beautiful animations using Framer Motion.",
    date: "Aug 10, 2025",
    author: "Nikhil",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        📖 My Blogs
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition"
            whileHover={{ scale: 1.01 }}
          >
            {/* Top Section: Author + Date */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {blog.author[0]}
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">{blog.author}</h3>
                <p className="text-xs text-gray-500">📅 {blog.date}</p>
              </div>
            </div>

            {/* Blog Content */}
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

            {/* Actions like Twitter */}
            <div className="flex justify-between text-gray-500 text-sm mt-4">
              <button className="flex items-center space-x-1 hover:text-blue-500 transition">
                <FaRegCommentDots /> <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-500 transition">
                <FaShareAlt /> <span>Share</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-red-500 transition">
                <FaHeart /> <span>Like</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
