import React from "react";
import { Palette, Zap, Wrench } from "lucide-react";

const deepDives = [
  { icon: Palette, title: "Design Systems" },
  { icon: Zap, title: "Performance Optimization" },
  { icon: Wrench, title: "Tooling & Workflow" },
];

const DeepDivesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Deep Dives</h2>
      <hr className="border-gray-200 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deepDives.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="border border-gray-200 rounded p-4 flex items-center gap-3 hover:border-gray-300 transition-colors"
            >
              <span className="bg-blue-100 p-2 rounded">
                <Icon size={20} strokeWidth={1.5} className="text-blue-600" />
              </span>
              <span className="font-medium">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeepDivesSection;
