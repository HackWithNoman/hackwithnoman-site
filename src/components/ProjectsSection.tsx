"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, Globe, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    year: "2024",
    title: "Weather API Client",
    desc: "Real-time weather data visualization using public APIs. Features include interactive maps, forecasting charts, and a clean minimalist UI. Designed for high performance and low latency.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Live", icon: Globe, href: "#" },
      { label: "Project", icon: SiGithub, href: "#" },
    ]
  },
  {
    year: "2023",
    title: "Markdown Note App",
    desc: "Minimal note-taking application with real-time markdown preview. Includes local storage synchronization, dark mode toggle, and customizable editor themes.",
    tech: ["Next.js", "Framer Motion", "MDX"],
    links: [
      { label: "Live", icon: Globe, href: "#" },
      { label: "Project", icon: SiGithub, href: "#" },
      { label: "Article", icon: FileText, href: "#" },
    ]
  },
  {
    year: "2022",
    title: "E-Commerce Dashboard",
    desc: "A responsive admin dashboard designed for online stores. Tracks sales metrics, manages inventory efficiently, and visualizes complex data using interactive charts.",
    tech: ["React", "Recharts", "Node.js"],
    links: [
      { label: "Project", icon: SiGithub, href: "#" },
    ]
  },
];

const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".accordion-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20" id="projects">
      {/* Section Heading matching Blog and About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            <h2 className="text-2xl font-black text-text-primary tracking-tight">Selected Work</h2>
          </div>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
      </motion.div>
      
      <div ref={containerRef} className="flex flex-col gap-4">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={project.title}
              initial={false}
              animate={{ 
                backgroundColor: isExpanded ? "var(--color-primary)" : "transparent",
                borderColor: isExpanded ? "var(--color-accent)" : "var(--color-border)"
              }}
              className="accordion-item border rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              whileHover={{ scale: isExpanded ? 1 : 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-8">
                    <span className="text-[0.65rem] font-black tracking-[0.2em] uppercase text-text-secondary group-hover:text-accent transition-colors bg-primary px-4 py-1.5 rounded-full border border-border group-hover:border-accent/30 hidden sm:block">
                        {project.year}
                    </span>
                    <h3 className={`font-black text-xl md:text-2xl tracking-tight transition-colors ${isExpanded ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
                        {project.title}
                    </h3>
                </div>
                <motion.div
                    animate={{ 
                        backgroundColor: isExpanded ? "var(--color-accent)" : "transparent",
                        color: isExpanded ? "#fff" : "var(--color-text-secondary)",
                        borderColor: isExpanded ? "var(--color-accent)" : "var(--color-border)",
                        scale: isExpanded ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors group-hover:bg-accent/5`}
                >
                    {isExpanded ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                        <div className="h-[1px] w-full bg-border mb-6" />
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-text-secondary mb-8 leading-[1.8] max-w-3xl text-[1.05rem]"
                        >
                            {project.desc}
                        </motion.p>
                        
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                            {/* Action Buttons (Left) */}
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                {project.links.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="relative overflow-hidden flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-xs font-bold text-text-primary hover:text-white transition-colors duration-300 group/btn"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
                                            <Icon size={15} className="relative z-10 group-hover/btn:-rotate-12 transition-transform duration-300" />
                                            <span className="relative z-10 uppercase tracking-widest">{link.label}</span>
                                        </a>
                                    );
                                })}
                            </motion.div>

                            {/* Tech Stack (Right) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="flex flex-wrap gap-2.5"
                            >
                                {project.tech.map(t => (
                                    <span key={t} className="flex items-center gap-2 px-3 py-1.5 bg-primary/50 text-text-secondary text-[0.65rem] font-bold rounded-full uppercase tracking-widest border border-border">
                                        <span className="w-1 h-1 rounded-full bg-accent/70" />
                                        {t}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
