// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-500/80 backdrop-blur-lg text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Ab.Abayeta</Link>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Links - hidden on mobile */}
        <div className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to= "/" className="hover:text-blue-400">Home</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <a href="/skills" className="hover:text-blue-400">Skills</a>
          <a href="/experience" className="hover:text-blue-400">Experience</a>
          <a href="/education" className="hover:text-blue-400">Education</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
