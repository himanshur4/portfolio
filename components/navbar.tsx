"use client";

import * as React from "react";
import { sections, personal } from "@/data/resume-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = React.useState<string>("");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-40 w-full transition-colors duration-300  bg-bg border border-b"
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#top"
          className="font-mono text-lg tracking-tight text-ink hover:text-accent"
        >
          {personal.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
          <span className="text-ink-soft">/portfolio</span>
        </a>

        <ul className="hidden md:flex items-around justify-around gap-1 lg:gap-2 border px-2 rounded-full py-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono text-[15px] transition-colors",
                  active === s.id
                    ? "bg-red-800 text-white shadow-sm dark:text-gray-200"
                    : " text-gray-700 dark:text-gray-300 hover:bg-surface-hover hover:text-ink"
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex rounded-full border border-line px-4 py-1.5 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent font-mono"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
