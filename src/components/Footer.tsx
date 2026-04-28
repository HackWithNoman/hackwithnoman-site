import React from "react";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Noman. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
            aria-label="Twitter"
          >
            <SiX size={16} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={16} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
            aria-label="GitHub"
          >
            <SiGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
