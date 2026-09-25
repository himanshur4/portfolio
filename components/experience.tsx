import { SectionHeading } from "@/components/section-heading";
import { experience, education } from "@/data/resume-data";

export function Experience() {
  return (
    <section
      id="work"
      className="mx-auto max-w-content px-6 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        number="01"
        title="Experience"
        description="Internships and education"
      />

      <div className="relative border-l border-line pl-8">
        {experience.map((job) => (
          <div key={job.role + job.org} className="relative pb-12">
            <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-display text-lg font-medium dark:text-gray-200 text-gray-800">
                {job.role} <span className="">· {job.org}</span>
              </h3>
              <span className="font-mono text-xs dark:text-gray-300 text-gray-600 tabular-nums">
                {job.period}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">
              {job.location}
            </p>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="relative">
          <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-line bg-bg" />
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="font-display text-lg font-medium dark:text-gray-200 text-gray-800">
              {education.degree}{" "}
              <span className="text-gray-600 dark:text-gray-400 ">
                · {education.institution}
              </span>
            </h3>
            <span className="font-mono text-xs dark:text-gray-400 text-gray-700 tabular-nums">
              {education.period}
            </span>
          </div>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wide dark:text-gray-400 text-gray-700">
            {education.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
