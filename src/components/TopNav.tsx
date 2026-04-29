"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Briefcase, User, Menu, X, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

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

const TopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to show/hide top nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide if menu is open
      if (isMobileMenuOpen) return;

      // Hide if scrolling down and scrolled past a threshold
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`bg-primary/90 backdrop-blur-md border-b border-border px-6 py-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} aria-label="Main Navigation">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Header Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-border overflow-hidden ring-2 ring-transparent group-hover:ring-accent transition-all duration-300 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/avatar.jpg"
                  alt="Noman"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h1 className="text-[1.125rem] font-extrabold text-text-primary tracking-tight">
              Noman
            </h1>
          </Link>

          {/* Tablet/Medium Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.link}
                  className="flex items-center gap-2 text-[0.95rem] font-medium text-text-secondary hover:text-accent transition-all duration-300 group"
                >
                  <Icon size={18} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Connect Links & Hamburger */}
          <div className="flex items-center gap-2">
            {/* Social Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    aria-label={item.label}
                    className="text-text-secondary hover:text-accent transition-colors p-2 rounded-md hover:bg-black/5"
                  >
                    <Icon size={18} className="hover:scale-110 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Hamburger Button (Visible only on Mobile) */}
            <button
              onClick={openMobileMenu}
              className="md:hidden p-2 border border-border rounded-lg ml-2 text-text-secondary hover:text-accent hover:border-accent transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary overflow-y-auto flex flex-col animate-in fade-in duration-200">
          {/* Header inside menu */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-border overflow-hidden p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/avatar.jpg"
                    alt="Noman"
                    className="w-full h-full object-cover"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <span className="font-extrabold text-text-primary tracking-tight">Navigation</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-text-secondary hover:text-accent hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="px-6 py-8 flex flex-col flex-1">
            {/* Primary Navigation */}
            <nav className="mb-8 w-full">
              <p className="text-[0.75rem] font-bold text-text-secondary uppercase tracking-wider mb-4 px-2">Menu</p>
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.link}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-start gap-4 px-4 py-3.5 rounded-xl text-[1.05rem] font-medium text-text-secondary hover:text-accent hover:bg-black/5 transition-all duration-300 group"
                      >
                        <Icon size={22} strokeWidth={2} className="text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="w-full pb-6">
              <p className="text-[0.75rem] font-bold text-text-secondary uppercase tracking-wider mb-4 px-2">Connect</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      target="_blank"
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      aria-label={item.label}
                      className="flex items-center justify-start gap-4 px-4 py-3 rounded-xl text-[1rem] font-medium text-text-secondary hover:text-text-primary hover:bg-black/5 transition-all duration-300 group"
                    >
                      <Icon size={20} className="group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
