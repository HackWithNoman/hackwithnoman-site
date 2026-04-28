import React from "react";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const ContactSection = () => {
  return (
    <section className="mb-12" id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <hr className="border-[#E5E7EB] mb-4" />
      <p className="text-[1.125rem] leading-[1.7] text-[#111827] mb-4">
        Feel free to reach out if you'd like to collaborate or just say hello!
      </p>
      <div className="flex flex-col gap-3">
        <a
          href="mailto:hello@example.com"
          className="text-[#D84B7E] flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <Mail size={14} strokeWidth={1.5} />
          hello@example.com
        </a>
        <a
          href="#"
          className="text-[#D84B7E] flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <SiLinkedin size={14} />
          LinkedIn
        </a>
        <a
          href="#"
          className="text-[#D84B7E] flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        >
          <SiGithub size={14} />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
