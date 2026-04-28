import React from "react";
import { Atom, Type, Palette, Globe, Package, GitBranch, Code2 } from "lucide-react";
import { SiFigma } from "react-icons/si";

const tools = [
  { icon: Atom, label: "React" },
  { icon: Type, label: "TypeScript" },
  { icon: Palette, label: "Tailwind CSS" },
  { icon: Globe, label: "Node.js" },
  { icon: Package, label: "pnpm" },
  { icon: GitBranch, label: "Git" },
  { icon: Code2, label: "VS Code" },
  { icon: SiFigma, label: "Figma" },
];

const ToolsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Tools I Use</h2>
      <hr className="border-gray-200 mb-4" />
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <span
              key={tool.label}
              className="border border-gray-200 rounded px-3 py-2 text-sm flex items-center gap-2 bg-white hover:border-gray-300 transition-colors"
            >
              <Icon size={14} strokeWidth={1.5} />
              {tool.label}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsSection;
