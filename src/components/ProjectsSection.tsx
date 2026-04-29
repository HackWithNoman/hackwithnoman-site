import React from "react";

const projects = [
  {
    year: "2022",
    title: "E-Commerce Dashboard",
    desc: "A responsive admin dashboard for online stores with analytics.",
  },
  {
    year: "2023",
    title: "Markdown Note App",
    desc: "Minimal note-taking app with real-time markdown preview.",
  },
  {
    year: "2024",
    title: "Weather API Client",
    desc: "Real-time weather data visualization using public APIs.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-12" id="projects">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <hr className="border-border mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-primary border border-border rounded p-4 relative pt-10"
          >
            <span className="absolute top-4 left-4 text-sm text-text-secondary">
              {project.year}
            </span>
            <h3 className="font-bold text-lg mb-2 text-text-primary">{project.title}</h3>
            <p className="text-sm text-text-secondary mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Article", "Demo", "Source"].map((btn) => (
                <button
                  key={btn}
                  className="border border-border-gray rounded px-3 py-1 text-xs hover:bg-accent-light"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
