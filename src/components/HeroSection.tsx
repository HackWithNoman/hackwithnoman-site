"use client";

import { Download, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const nameRef = useRef(null);

  // 3D Tilt logic for Image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (nameRef.current) {
      gsap.fromTo(nameRef.current,
        { opacity: 0, scale: 0.9, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, delay: 0.4, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="py-16 md:py-24" id="home">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-[65%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge - Styled to match Sidebar titles */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 text-accent text-[0.7rem] font-bold uppercase tracking-widest mb-6 border border-accent/10">
              <Sparkles size={12} className="animate-pulse" /> Available for new projects
            </div>

            <h1 className="text-[2.75rem] md:text-[4.25rem] font-extrabold tracking-tight text-text-primary mb-6 leading-[1.1]">
              Hey, I'm <span ref={nameRef} className="text-accent inline-block">Noman!</span>
            </h1>

            <div className="space-y-6">
              <p className="text-[1.125rem] leading-[1.6] text-text-primary/90 max-w-xl font-medium">
                I'm a <span className="text-text-primary font-bold underline decoration-accent/30 decoration-2 underline-offset-4">Front-End Developer</span> and digital designer building high-performance, human-centric web applications.
              </p>

              <p className="text-[1.05rem] leading-[1.6] text-text-secondary max-w-lg">
                Specializing in <span className="text-text-primary font-semibold">React & Next.js</span> to create
                seamless digital experiences that merge clean code with thoughtful design.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white px-7 py-3.5 rounded-xl flex items-center gap-3 font-bold text-base transition-all shadow-lg shadow-accent/10 hover:bg-accent-dark cursor-pointer"
              >
                <Download size={18} strokeWidth={2.5} />
                Download CV
              </motion.a>

              <Link
                href="#projects"
                className="px-7 py-3.5 rounded-xl border border-border font-bold text-text-primary hover:border-accent hover:text-accent hover:bg-black/5 transition-all duration-300 flex items-center gap-2 text-base"
              >
                My Portfolio
                <ArrowUpRight size={18} className="text-text-secondary" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3D Interactive Image - Refined to match Sidebar branding */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-72 h-72 md:w-80 md:h-80 group"
          >
            {/* Background Decorative Rings - more subtle and aligned */}
            <div className="absolute -inset-4 border border-accent/10 rounded-full animate-spin-slow" />
            <div className="absolute -inset-8 border border-dashed border-accent/5 rounded-full animate-spin-slow-reverse" />

            <div
              style={{ transform: "translateZ(40px)" }}
              className="relative w-full h-full rounded-full bg-border overflow-hidden ring-4 ring-transparent group-hover:ring-accent/20 transition-all duration-500 p-2"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-xl shadow-black/5">
                <Image
                  src="/avatar-2.jpg"
                  alt="Noman"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            {/* Floating 3D Badge - Styled to match Sidebar's clean UI */}
            <motion.div
              style={{ transform: "translateZ(70px)" }}
              className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2 group-hover:border-accent/30 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[0.65rem] font-black uppercase tracking-widest text-text-primary">Based in Dhaka</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
