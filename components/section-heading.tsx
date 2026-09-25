export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex items-start gap-4 md:mb-14">
      <span className="pt-1 font-mono text-sm text-accent">{number}</span>
      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-md text-sm text-ink-soft">{description}</p>
        )}
      </div>
    </div>
  );
}
