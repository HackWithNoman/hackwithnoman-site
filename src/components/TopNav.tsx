"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Pencil, User, Menu, X, Moon } from "lucide-react";

const navItems = [
  { icon: Terminal, label: "Blog" },
  { icon: Pencil, label: "Notes" },
  { icon: User, label: "Projects" },
  { icon: Terminal, label: "About Me" },
];

const socialLinks = [
  { label: "Email signup", href: "#" },
  { label: "Bluesky", href: "#" },
  { label: "RSS feed", href: "#" },
];

const TopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="bg-[#FAF9F6] border-b border-[#E5E7EB] px-8 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Header Section - Same as Sidebar */}
          <div className="flex items-center gap-3">
            {/* Floppy disk icon/emoji */}
            <span className="text-xl" role="img" aria-label="floppy disk">
              💾
            </span>

            {/* Name/Title */}
            <div className="flex-1">
              <h1 className="text-[1.125rem] font-bold text-[#111827]">
                Noman
              </h1>
            </div>

            {/* Utility Icons */}
            <div className="flex items-center gap-2">
              {/* Moon icon for dark mode */}
              <Moon size={18} strokeWidth={1.5} className="text-[#111827]" />
            </div>
          </div>

          {/* Hamburger Button - visible below lg */}
          <button
            onClick={openMobileMenu}
            className="lg:hidden p-2 border border-[#E5E7EB] rounded-md ml-4"
            aria-label="Open navigation menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF9F6] overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="p-2"
              aria-label="Close navigation menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Header Section (same as sidebar) */}
          <div className="px-8 pt-4 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl" role="img" aria-label="floppy disk">
                💾
              </span>
              <div className="flex-1">
                <h1 className="text-[1.125rem] font-bold text-[#111827]">
                  Noman
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Moon size={18} strokeWidth={1.5} className="text-[#111827]" />
              </div>
            </div>

            {/* About Me Section */}
            <div className="mb-6">
              <h2 className="text-[1rem] font-bold mb-4">About Me</h2>
              <p className="text-[0.875rem] leading-[1.5] text-[#374151]">
                Hi, I'm <span className="text-[#D84B7E]">Noman</span>! I'm a
                developer, writer, and creator. I build things for the web and
                share what I learn. 🌱
              </p>
            </div>

            <hr className="border-[#E5E7EB] my-6" />

            {/* Primary Navigation */}
            <nav className="mb-6">
              <ul className="space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href="#"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 text-[1rem] font-bold text-[#111827] hover:text-[#D84B7E] transition-colors"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <hr className="border-[#E5E7EB] my-6" />

            {/* Stay Connected Section */}
            <div>
              <h3 className="text-[1rem] font-bold mb-4">Stay Connected</h3>
              <div className="flex flex-col gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-[0.875rem] text-[#6B7280] hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default TopNav;
