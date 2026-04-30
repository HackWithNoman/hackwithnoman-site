"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          <div className="relative overflow-hidden w-12 h-12 rounded-xl bg-text-primary text-primary flex items-center justify-center shadow-2xl border border-text-primary transition-colors duration-300 group-hover:text-white">
            {/* Slide-up Background Fill */}
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            {/* Arrow Icon with micro-animation */}
            <ArrowUp 
              size={20} 
              strokeWidth={3} 
              className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" 
            />
          </div>
          
          {/* Subtle label that appears on hover */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-text-primary text-primary text-[0.65rem] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-text-primary">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
