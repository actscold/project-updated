import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h2 className="text-5xl font-bold mb-4">Spring Collection 2024</h2>
          <p className="text-xl mb-8">Discover our latest arrivals featuring fresh styles and vibrant colors for the new season.</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;