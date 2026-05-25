import React from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex items-center flex-shrink-0">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Media Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/samuel-george-3bb201330" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        
        <a 
          href="https://github.com/StarXchange" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        
        <a 
         
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://wa.me/2349025338156" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;