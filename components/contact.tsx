import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/resume-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-6 py-20 md:px-8 md:py-28"
    >
      <div className="rounded-3xl border border-line bg-surface px-6 py-14 text-center md:px-16 md:py-20">
        <span className="font-mono text-sm text-accent">Contact</span>
        <h2 className="mx-auto mt-4 max-w-lg text-balance font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Open to SDE and SWE roles - let's talk.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
          Reach out directly or find me on LinkedIn / GitHub. I usually reply
          within a day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-1.5 rounded-full bg-red-800 shadow-sm text-white px-5 py-2.5 text-sm font-medium  transition-transform hover:-translate-y-0.5"
          >
            <Mail size={15} />
            {personal.email}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-800 dark:text-gray-200 transition-colors hover:bg-surface-hover hover:text-ink"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-800 dark:text-gray-200 transition-colors hover:bg-surface-hover hover:text-ink"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
