"use client";

import React, { useEffect, useRef } from "react";
import {
  Code2,
  PenTool,
  Coffee,
  Heart,
  Globe,
  Brain,
  Zap,
  Award,
  Sparkles
} from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: Code2, label: "Web Dev" },
  { icon: Award, label: "UI/UX" },
  { icon: Zap, label: "Performance" },
  { icon: Globe, label: "A11y" },
  { icon: PenTool, label: "Tech Writing" },
  { icon: Coffee, label: "Open Source" },
  { icon: Heart, label: "Community" },
  { icon: Brain, label: "Problem Solving" },
];

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: {
          amount: 0.6,
          grid: "auto",
          from: "start"
        },
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            <h2 className="text-2xl font-black text-text-primary tracking-tight">Skills & Tools</h2>
          </div>
          <div className="h-[1px] flex-1 bg-border" />
        </div>
      </motion.div>
      
      {/* Collapsed Border Grid */}
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-border w-full">
        {skills.map((skill) => {
          const Icon = skill.icon;
          // @ts-ignore
          const isSiIcon = Icon.name && Icon.name.startsWith("Si");
          
          return (
            <div
              key={skill.label}
              className="skill-item group border-r border-b border-border p-8 md:p-10 flex flex-col items-center justify-center gap-4 bg-transparent hover:bg-primary transition-colors duration-300"
            >
              <div className="text-text-secondary group-hover:text-accent group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-out">
                {isSiIcon ? (
                  <Icon size={28} />
                ) : (
                  <Icon size={28} strokeWidth={1.5} />
                )}
              </div>
              <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-text-primary group-hover:text-accent transition-colors text-center">
                {skill.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
