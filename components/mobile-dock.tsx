"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const dockItems = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function MobileDock() {
  const [active, setActive] = React.useState("top");

  React.useEffect(() => {
    // We observe all sections so there are no gaps in intersection detection
    const allSectionIds = [
      "top",
      "work",
      "projects",
      "skills",
      "achievements",
      "contact",
    ];
    const sectionToDock: Record<string, string> = {
      top: "top",
      work: "work",
      projects: "projects",
      skills: "skills",
      achievements: "skills", // Keep 'Skills' dock item active during achievements
      contact: "contact",
    };

    const targets = allSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mappedId = sectionToDock[entry.target.id];
            if (mappedId) setActive(mappedId);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center shadow-2xl ">
      <nav
        aria-label="Section navigation"
        className="fixed bottom-8 z-50 flex justify-between items-center md:hidden"
      >
        <div className="flex rounded-3xl border dark:bg-black bg-white px-1 py-1 shadow-2xl shadow-black/4 backdrop-blur-md">
          {dockItems.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex flex-1 items-center justify-center rounded-3xl text-sm transition-colors px-3 py-2 font-mono",
                  isActive
                    ? "bg-red-800 shadow-sm text-gray-200"
                    : "dark:text-gray-300  active:bg-surface-hover",
                )}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
