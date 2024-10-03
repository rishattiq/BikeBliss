

import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <div className="text-white py-20 px-6 text-center">
      <div className="flex justify-center mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/John_Legend_2019_by_Glenn_Francis_%28cropped%29.jpg/1200px-John_Legend_2019_by_Glenn_Francis_%28cropped%29.jpg"
          alt="John S"
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium">John S</h3>
      <p className="text-gray-400 text-sm">Position, Company name</p>
      <blockquote className="mt-6 italic text-xl font-semibold">
        "Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance"
      </blockquote>
      <p className="mt-2">- John S.</p>
    </div>
  );
};

export default Testimonial;
