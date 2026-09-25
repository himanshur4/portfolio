"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/resume-data";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 pb-16 pt-12 md:px-8 md:pt-28"
    >
      <div className="animate-fade-up opacity-0 [animation-delay:0ms]">
        <div className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[12px] dark:text-gray-400 text-gray-800">
          <span className="text-red-500">$</span>
          <span>whoami --status</span>
          <span className="inline-block h-3.5 w-[7px] animate-blink bg-red-800" />
        </div>
      </div>

      <h1 className="mt-6 animate-fade-up font-display text-[13vw] font-medium leading-[0.95] tracking-tighter text-ink opacity-0 [animation-delay:80ms] sm:text-6xl md:text-7xl lg:text-8xl">
        {personal.name}
      </h1>

      <p className="mt-4 animate-fade-up font-mono text-sm uppercase dark:text-red-400 text-red-600 opacity-0 [animation-delay:160ms] tracking-tight">
        {personal.role} — {personal.status}
      </p>

      <p className="mt-6 max-w-2xl animate-fade-up text-balance text-sm leading-relaxed dark:text-gray-400 text-gray-800 [animation-delay:240ms] md:text-lg tracking-tighter md:tracking-tight font-mono">
        {personal.summary}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up opacity-0 [animation-delay:320ms]">
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-red-800 text-white shadow-sm dark:text-gray-200 px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
        >
          Contact
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View resume
        </a>

        <div className="ml-1 flex items-center gap-1">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full  transition-colors hover:bg-surface-hover "
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full  transition-colors hover:bg-surface-hover "
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-hover "
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
