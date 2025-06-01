import React from 'react';

const FeaturedCollection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] group overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1920')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="relative h-full flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <p className="mb-4">Explore our latest women's fashion</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Shop Women
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] group overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1920')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="relative h-full flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <p className="mb-4">Discover our men's fashion essentials</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Shop Men
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;