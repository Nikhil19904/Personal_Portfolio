import React from "react";

const LeetCodeStats = ({ username }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg w-[400px] text-center">
      <h2 className="text-lg font-bold text-yellow-300 mb-3">
        🟡 LeetCode Stats
      </h2>

      {/* 🔹 Stats Card from LeetCard API */}
      <img
        src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=heatmap`}
        alt={`${username} LeetCode Stats`}
        className="w-full rounded-lg shadow-md"
      />

      {/* 🔹 LeetCode Profile Link */}
      <a
        href={`https://leetcode.com/u/${username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md transition-all"
      >
        🔗 View Profile
      </a>
    </div>
  );
};

export default LeetCodeStats;
