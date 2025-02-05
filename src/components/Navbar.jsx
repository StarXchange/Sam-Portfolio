import React from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex items-center flex-shrink-0">
        <img className="mx-2 w-10" src={logo} alt="logo" /> {/* Reduced logo size to w-8 */}
      </div>

      {/* Social Media Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaWhatsapp />
      </div>
    </nav>
  );
};

export default Navbar;