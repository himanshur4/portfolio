"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/resume-data";

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20 md:px-8 md:py-28 scroll-mt-24">
      <SectionHeading
        number="02"
        title="Projects"
        description="Full-stack builds, from real-time systems to internal tools."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {projects.length > 2 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => {
              if (showAll) {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
              setShowAll(!showAll);
            }}
            className="rounded-full border border-line bg-surface/50 px-6 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-hover hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
