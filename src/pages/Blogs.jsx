import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { motion } from "framer-motion";

const tweetIds = [
  "1959167403520364654",
  "1959167403520364654",
  "1959167403520364654",
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        📝 My Blogs from Twitter
      </h1>

      <div className="max-w-3xl mx-auto grid gap-10 md:grid-cols-2">
        {tweetIds.map((id, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.25)" }}
            className="relative group bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-md transition-all overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

            {/* Glow ring effect */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400 transition duration-300 pointer-events-none" />

            {/* Twitter Embed */}
            <TwitterTweetEmbed tweetId={id} />

            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
