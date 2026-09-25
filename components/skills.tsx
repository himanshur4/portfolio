import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/resume-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-content px-6 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        number="03"
        title="Skills"
        description="Languages, frameworks, and tools I work with."
      />

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-[13px] text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
