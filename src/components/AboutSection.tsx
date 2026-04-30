"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text p", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(".about-sidebar", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-20 group select-none">
           <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl md:text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-border)] group-hover:[-webkit-text-stroke:1px_var(--color-accent)] transition-all duration-500 leading-none">
                01
              </span>
              <div className="h-[1px] w-12 bg-border group-hover:bg-accent/50 transition-all duration-500" />
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase leading-none">
             About
           </h2>
        </div>
      </motion.div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Content - 2/3 width */}
        <div className="about-text lg:col-span-3 space-y-8">
          <p className="text-[1.15rem] leading-[1.8] text-text-secondary">
            Hi, I'm{" "}
            <span className="text-text-primary font-black">Noman</span>! I'm a
            front-end developer, technical writer, and open source creator based in
            the digital world. I love building things that live on the web and
            sharing what I learn along the way.
          </p>

          <p className="text-[1.15rem] leading-[1.8] text-text-secondary">
            I'm passionate about clean code, accessible design, and helping others
            learn web development. My work focuses on{" "}
            <a href="#" className="inline-flex items-center gap-1 font-bold text-text-primary border-b border-border hover:border-accent hover:text-accent transition-colors group pb-0.5">
              React
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            ,{" "}
            <a href="#" className="inline-flex items-center gap-1 font-bold text-text-primary border-b border-border hover:border-accent hover:text-accent transition-colors group pb-0.5">
              TypeScript
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            , and modern web technologies. When I'm not coding, you'll find me
            writing articles, contributing to open source, or exploring new tools.
          </p>

          <p className="text-[1.15rem] leading-[1.8] text-text-secondary">
            This blog is my digital garden where I share tutorials, deep dives, and
            thoughts on web development. I believe in learning in public and
            helping others grow in their coding journey.
          </p>
        </div>

        {/* Sidebar Content - 1/3 width */}
        {/* <div className="about-sidebar space-y-10 lg:pl-8 lg:border-l border-border">
          <div>
            <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary mb-5 flex items-center gap-4">
              Currently
              <div className="h-[1px] flex-1 bg-border/50" />
            </h3>
            <p className="text-[0.95rem] font-bold text-text-primary leading-relaxed">
              Building open-source tools and writing technical articles.
            </p>
          </div>

          <div>
            <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary mb-5 flex items-center gap-4">
              Focus
              <div className="h-[1px] flex-1 bg-border/50" />
            </h3>
            <div className="flex flex-col gap-3">
              <span className="text-[0.95rem] font-bold text-text-primary">Design Systems</span>
              <span className="text-[0.95rem] font-bold text-text-primary">Frontend Architecture</span>
              <span className="text-[0.95rem] font-bold text-text-primary">Web Animations</span>
            </div>
          </div>

          <div>
            <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-secondary mb-5 flex items-center gap-4">
              Profiles
              <div className="h-[1px] flex-1 bg-border/50" />
            </h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-[0.95rem] font-bold text-text-primary hover:text-accent transition-colors flex items-center gap-1 group w-max">
                GitHub
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="text-[0.95rem] font-bold text-text-primary hover:text-accent transition-colors flex items-center gap-1 group w-max">
                Twitter
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="text-[0.95rem] font-bold text-text-primary hover:text-accent transition-colors flex items-center gap-1 group w-max">
                LinkedIn
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
