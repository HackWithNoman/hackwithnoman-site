import React from "react";
import { User, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mb-12">
      <h1 className="text-5xl font-bold mb-6">Hey, I'm Noman!</h1>
      <div className="flex flex-wrap gap-3">
        <button className="border border-gray-300 rounded px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <User size={14} strokeWidth={1.5} /> About Me
        </button>
        <button className="border border-gray-300 rounded px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <Mail size={14} strokeWidth={1.5} /> Email Newsletter
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
