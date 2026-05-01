"use client";

import { Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const HeroSection = () => {
  // Framer Motion Variants for a unified, snappy reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier
      }
    },
  };

  return (
    <section className="py-20 md:py-28" id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Simple Massive Branding */}
        <motion.div variants={itemVariants}>
          <h1 className="text-8xl md:text-[12rem] font-black text-text-primary tracking-tighter uppercase leading-[0.8] mb-4">
            Noman.
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-xl md:text-2xl font-black text-text-primary uppercase tracking-widest">Front-End Developer</span>
          </div>
        </motion.div>

        {/* Clean Two-Column Info Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-border pt-12">
          <div className="space-y-8">
            <p className="text-3xl md:text-5xl font-bold text-text-primary leading-[1.1] tracking-tight">
              Building <span className="text-accent italic font-serif lowercase tracking-normal"> user-focused </span>
              web apps with React and Node.js
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.a
                href="#"
                download
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-text-primary text-primary border border-text-primary rounded-full px-10 py-4 text-sm font-bold hover:text-white hover:border-accent transition-all duration-300 group/btn cursor-pointer shadow-xl shadow-black/5"
              >
                <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, 2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Download size={18} strokeWidth={2.5} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  </motion.div>
                  <span className="uppercase tracking-widest">Download CV</span>
                </div>
              </motion.a>

              <Link
                href="#projects"
                className="relative overflow-hidden border border-border rounded-full px-10 py-4 text-sm font-bold text-text-primary hover:text-white hover:border-accent transition-all duration-300 group/btn"
              >
                <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <div className="relative z-10 flex items-center gap-2">
                  <span className="uppercase tracking-widest">View Projects</span>
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-10">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-md">
              I enjoy building fast, accessible interfaces with React and Next.js, and I have experience working across MERN and PERN stacks. I’m currently seeking my first opportunity as an Intern or Junior Front-End Developer.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary">Location</span>
                <p className="text-sm font-bold text-text-primary">Dhaka, Bangladesh</p>
              </div>
              <div className="space-y-2">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <p className="text-sm font-bold text-text-primary">Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
