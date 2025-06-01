import React from 'react';

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Leather Handbag',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Casual Sneakers',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 69.99,
    image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    name: 'Silk Scarf',
    price: 39.99,
    image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 8,
    name: 'Leather Belt',
    price: 34.99,
    image: 'https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick View
                </button>
              </div>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;