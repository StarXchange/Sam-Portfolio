import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../index";

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
          href={CONTACT.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        
        <a 
          href={CONTACT.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaGithub />
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