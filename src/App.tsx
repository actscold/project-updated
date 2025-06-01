import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none">
              <h1 className="text-2xl font-bold">STORE</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Women</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Men</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sale</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturedCollection />
        <ProductGrid />
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-600">Discover our story and commitment to sustainable fashion.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-900">Sale Items</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Store Locator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;