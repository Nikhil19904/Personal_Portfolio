import React from "react";

const GitHubGraph = ({ username, color = "2196f3" }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        📊 GitHub Contributions
      </h2>
      <img
        src={`https://ghchart.rshah.org/${color}/${username}`}
        alt={`${username}'s GitHub chart`}
        className="w-[300px] rounded-lg shadow-md"
      />
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 font-medium hover:underline"
      >
        🔗 View Profile
      </a>
    </div>
  );
};

export default GitHubGraph;
