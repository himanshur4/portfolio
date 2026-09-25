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
    <nav
      aria-label="Section navigation"
      className="fixed bottom-6 left-1/2 z-50 flex w-[95vw] max-w-fit -translate-x-1/2 items-center justify-center md:hidden"
    >
      <div 
        className="flex w-full items-center justify-between overflow-x-auto rounded-3xl border bg-white/90 px-1 py-1 shadow-2xl shadow-black/10 backdrop-blur-md dark:border-line dark:bg-black/90 [&::-webkit-scrollbar]:hidden" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {dockItems.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex items-center justify-center whitespace-nowrap rounded-3xl px-2.5 py-1.5 font-mono text-[11px] transition-colors sm:px-3 sm:py-2 sm:text-sm",
                isActive
                  ? "bg-red-800 text-white shadow-sm dark:text-gray-200"
                  : "text-ink-soft hover:text-ink active:bg-surface-hover dark:text-gray-300",
              )}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
