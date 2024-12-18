import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiPhone, FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { BsMessenger } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Plastic Lu Container",
      description: "High-quality plastic container for bean sprout cultivation",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba"
    },
    {
      id: 2,
      name: "Industrial Washing Machine",
      description: "Efficient washing system for bean sprout processing",
      price: "$499.99",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c"
    },
    {
      id: 3,
      name: "Professional Sieve Set",
      description: "Premium quality sieves for sorting and cleaning",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1595531172949-30922c28a240"
    },
    {
      id: 4,
      name: "Sprouting Kit Bundle",
      description: "Complete kit for starting your bean sprout production",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      comment: "Best quality plastic containers I've ever used for my sprout business!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      comment: "The equipment has significantly improved our production efficiency.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      id: 3,
      name: "Michael Chen",
      comment: "Excellent customer service and high-quality products!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-600">Products</a>
            <a href="#about" className="text-gray-700 hover:text-green-600">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#products" className="text-gray-700 hover:text-green-600">Products</a>
              <a href="#about" className="text-gray-700 hover:text-green-600">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Grow Your Bean Sprout Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Premium quality plastic containers and equipment for professional bean sprout cultivation
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
              alt="Bean Sprouts"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 bg-white" id="products">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-green-600 font-bold mb-4">{product.price}</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Equipment Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Supporting Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1590228947498-50f516de5cd2"
                alt="Washing Equipment"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Washing Systems</h3>
              <p className="text-gray-600">
                State-of-the-art washing machines designed specifically for bean sprout processing,
                ensuring optimal cleanliness and efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                alt="Processing Equipment"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Processing Tools</h3>
              <p className="text-gray-600">
                Complete range of processing tools including sieves, sorters, and packaging equipment
                for professional bean sprout production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     
      {/* New Communication Box */}
      <div className="fixed bottom-0 md:bottom-4 md:right-4 w-full md:w-auto z-50">
        <div className="bg-white shadow-lg rounded-t-lg md:rounded-lg p-4 flex md:flex-col justify-around items-center space-x-4 md:space-x-0 md:space-y-4">
          {/* SMS Button */}
          <a 
            href="sms:+1234567890" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <FiMail size={24} />
          </a>

          {/* Phone Call Button */}
          <a 
            href="tel:+1234567890" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <FiPhone size={24} />
          </a>

          {/* Messenger Button */}
          <a 
            href="https://m.me/your-page-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <BsMessenger size={24} />
          </a>

          {/* Zalo Button */}
          <a 
            href="https://zalo.me/your-zalo-id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
          >
            <SiZalo size={24} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex items-center mb-2">
                <FiPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <p>123 Business Street</p>
              <p>New York, NY 10001</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Products</a></li>
                <li><a href="#" className="hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400">Returns Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400"><FiFacebook size={24} /></a>
                <a href="#" className="hover:text-green-400"><FiInstagram size={24} /></a>
                <a href="#" className="hover:text-green-400"><FiTwitter size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2024 Plastic Lu Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;