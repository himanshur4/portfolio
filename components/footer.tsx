import { personal } from "@/data/resume-data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-content px-6 pb-28 pt-6 md:px-8 md:pb-16">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        
      </div>
    </footer>
  );
}
