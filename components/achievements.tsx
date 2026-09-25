import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/data/resume-data";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-content px-6 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        number="04"
        title="Achievements"
        description={achievements.note}
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {achievements.stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <p className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">{stat.label}</p>
          </a>
        ))}
      </div>

      <p className="mt-8 border-t border-line pt-6 text-sm text-ink-soft">
        {achievements.community}
      </p>
    </section>
  );
}
