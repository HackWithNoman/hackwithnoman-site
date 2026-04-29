import React from "react";
import {
  Code2,
  PenTool,
  Coffee,
  Heart,
  Globe,
  Brain,
  Zap,
  Award,
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

const skills = [
  // Frontend Development
  { icon: SiReact, label: "React", category: "Frontend" },
  { icon: SiTypescript, label: "TypeScript", category: "Frontend" },
  { icon: SiTailwindcss, label: "Tailwind CSS", category: "Frontend" },
  { icon: SiNextdotjs, label: "Next.js", category: "Frontend" },

  // Backend Development
  { icon: SiNodedotjs, label: "Node.js", category: "Backend" },
  { icon: SiExpress, label: "Express.js", category: "Backend" },
  { icon: SiPostgresql, label: "PostgreSQL", category: "Backend" },
  { icon: SiMongodb, label: "MongoDB", category: "Backend" },

  // Other Skills
  { icon: Code2, label: "Web Development", category: "Core" },
  { icon: PenTool, label: "Technical Writing", category: "Core" },
  { icon: Coffee, label: "Open Source", category: "Core" },
  { icon: Heart, label: "Community Building", category: "Core" },
  { icon: Globe, label: "Accessibility", category: "Core" },
  { icon: Brain, label: "Problem Solving", category: "Core" },
  { icon: Zap, label: "Performance Optimization", category: "Core" },
  { icon: Award, label: "UI/UX Design", category: "Core" },
];

const SkillsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
      <hr className="border-border mb-6" />
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          // Check if it's an si icon (from react-icons/si) by checking if the display name starts with Si
          const isSiIcon = Icon.name && Icon.name.startsWith('Si');
          return (
            <span
              key={skill.label}
              className="border border-border rounded px-3 py-2 text-sm flex items-center gap-2 bg-white hover:border-border-gray transition-colors"
            >
              {isSiIcon ? (
                // For react-icons/si components
                <Icon size={14} className="text-accent" />
              ) : (
                // For lucide-react components
                <Icon size={14} strokeWidth={1.5} className="text-accent" />
              )}
              <span className="text-text-primary">{skill.label}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
