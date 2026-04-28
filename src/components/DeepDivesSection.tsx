import React from "react";
import { Palette, Zap, Wrench } from "lucide-react";

const deepDives = [
  { icon: Palette, title: "Design Systems" },
  { icon: Zap, title: "Performance Optimization" },
  { icon: Wrench, title: "Tooling & Workflow" },
];

const DeepDivesSection = () => {
  return (
    <section className="mb-12" id="deep-dives">
      <h2 className="text-2xl font-bold mb-4">Deep Dives</h2>
      <hr className="border-[#E5E7EB] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deepDives.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="border border-[#E5E7EB] rounded p-4 flex items-center gap-3 hover:border-gray-300 transition-colors"
            >
              <span className="bg-[#D84B7E]/10 p-2 rounded">
                <Icon size={20} strokeWidth={1.5} className="text-[#D84B7E]" />
              </span>
              <span className="font-medium text-[#111827]">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeepDivesSection;
