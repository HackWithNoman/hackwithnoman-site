import React from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const ContactSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <hr className="border-gray-200 mb-4" />
      <p className="text-sm text-gray-600 mb-4">
        Feel free to reach out if you'd like to collaborate or just say hello!
      </p>
      <div className="flex flex-col gap-3">
        <a
          href="mailto:hello@example.com"
          className="text-blue-600 flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <Mail size={14} strokeWidth={1.5} /> hello@example.com
        </a>
        <a
          href="#"
          className="text-blue-600 flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <SiLinkedin size={14} /> LinkedIn
        </a>
        <a
          href="#"
          className="text-blue-600 flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <SiGithub size={14} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
