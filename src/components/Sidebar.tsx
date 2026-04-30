"use client";

import { Terminal, User, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";
import { motion, Variants } from "framer-motion";

const navItems = [
  { icon: Terminal, label: "Blog", link: "#blog" },
  { icon: Briefcase, label: "Projects", link: "#projects" },
  { icon: User, label: "About Me", link: "#about" },
];

const socialLinks = [
  { icon: SiX, label: "Twitter", href: "https://x.com/HackWithNoman" },
  { icon: SiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hackwithnoman/" },
  { icon: SiGithub, label: "GitHub", href: "https://github.com/HackWithNoman" },
];

interface SidebarProps {
  onNavClick?: () => void;
}

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const Sidebar = ({ onNavClick }: SidebarProps) => {
  return (
    <motion.aside 
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="w-full p-6 lg:p-8 bg-primary md:h-screen md:overflow-y-auto md:border-r md:border-black/12 md:shadow-[4px_0_24px_-2px_rgba(0,0,0,0.03)] flex flex-col md:sticky md:top-0"
    >
      {/* Profile Section - Architectural Status Ring */}
      <motion.div variants={itemVariants} className="px-3 mb-10">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (onNavClick) onNavClick();
          }}
          className="group flex flex-col gap-4"
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Pulsing Signal Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-[ping_3s_ease-in-out_infinite]" />
            <div className="absolute inset-0 rounded-full border border-accent/40" />
            
            {/* Avatar Circle */}
            <div className="relative w-12 h-12 rounded-full bg-white border border-border overflow-hidden p-0.5 group-hover:border-accent transition-all duration-500 shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-light">
                <Image
                  src="/avatar.jpg"
                  alt="Noman"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-[0.75rem] font-black text-text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
            <span className="text-accent opacity-50 mr-0.5">@</span>HackWithNoman
          </h1>
        </a>
      </motion.div>

      <motion.hr variants={itemVariants} className="border-border my-6" />

      {/* Primary Navigation */}
      <nav className="mb-auto">
        <motion.p variants={itemVariants} className="text-[0.7rem] font-bold text-text-secondary uppercase tracking-wider mb-3 px-3">Menu</motion.p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li key={item.label} variants={itemVariants}>
                <a
                  href={item.link}
                  onClick={onNavClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.95rem] font-medium text-text-secondary hover:text-accent hover:bg-black/5 transition-all duration-300 group"
                >
                  <Icon size={18} strokeWidth={2} className="text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links - Pushed to bottom on Desktop */}
      <div className="mt-8 md:mt-0">
        <motion.hr variants={itemVariants} className="border-border mb-6 block md:hidden" />
        <motion.p variants={itemVariants} className="text-[0.7rem] font-bold text-text-secondary uppercase tracking-wider mb-3 px-3">Connect</motion.p>
        <div className="flex flex-col gap-1">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} variants={itemVariants}>
                <Link
                  target="_blank"
                  href={item.href}
                  onClick={onNavClick}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[0.875rem] font-medium text-text-secondary hover:text-text-primary hover:bg-black/5 transition-all duration-300 group"
                >
                  <Icon size={16} className="group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
