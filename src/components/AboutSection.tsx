import React from "react";
import { Code2, PenTool, Coffee, Heart } from "lucide-react";

const skills = [
  { icon: Code2, label: "Front-End Development" },
  { icon: PenTool, label: "Technical Writing" },
  { icon: Coffee, label: "Open Source" },
  { icon: Heart, label: "Community Building" },
];

const AboutSection = () => {
  return (
    <section className="mb-12" id="about">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <hr className="border-border mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content - 2/3 width */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-[1.125rem] leading-[1.7] text-text-primary">
            Hi, I'm{" "}
            <span className="text-accent font-semibold">Noman</span>! I'm a
            front-end developer, technical writer, and open source creator based in
            the digital world. I love building things that live on the web and
            sharing what I learn along the way.
          </p>

          <p className="text-[1.125rem] leading-[1.7] text-text-primary">
            I'm passionate about clean code, accessible design, and helping others
            learn web development. My work focuses on{" "}
            <a href="#" className="text-accent underline">
              React
            </a>
            ,{" "}
            <a href="#" className="text-accent underline">
              TypeScript
            </a>
            , and modern web technologies. When I'm not coding, you'll find me
            writing articles, contributing to open source, or exploring new tools.
          </p>

          <p className="text-[1.125rem] leading-[1.7] text-text-primary">
            This blog is my digital garden where I share tutorials, deep dives, and
            thoughts on web development. I believe in learning in public and
            helping others grow in their coding journey.
          </p>
        </div>

        {/* Sidebar Content - 1/3 width */}
        <div className="space-y-6">
          {/* Skills/Interests */}
          <div className="bg-primary border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-text-primary">What I Do</h3>
            <ul className="space-y-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.label} className="flex items-center gap-3">
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-accent"
                    />
                    <span className="text-sm text-text-primary">{skill.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
