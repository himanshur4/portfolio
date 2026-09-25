import { ExternalLink, Github } from "lucide-react";
import type { projects } from "@/data/resume-data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 whitespace-nowrap pt-1 font-mono text-[11px] text-ink-soft tabular-nums">
          {project.period}
        </span>
      </div>

      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li
            key={h}
            className="flex gap-2.5 text-sm dark:text-gray-200 text-gray-800 font-mono"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded text-xs italic border px-1 py-0.5 text-light font-mono text-gray-600 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.live || project.source) && (
        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-ink transition-colors hover:text-accent"
            >
              <ExternalLink size={13} strokeWidth={2} />
              Live
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-ink transition-colors hover:text-accent"
            >
              <Github size={13} strokeWidth={2} />
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
