
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Explore our collection and find the perfect bike for you.
      </h2>
      <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
