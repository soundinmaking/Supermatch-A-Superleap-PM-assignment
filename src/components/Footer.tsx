import { candidate } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-shell-border">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[14px] font-semibold text-shell-ink">{candidate.name}</p>
          <p className="mt-1 max-w-[38ch] text-[13px] leading-snug text-shell-ink-soft">
            {candidate.program}
          </p>
          <div className="mt-3 flex flex-col gap-1 text-[13px] text-shell-ink-soft">
            <a href={`mailto:${candidate.email}`} className="hover:text-shell-ink">
              {candidate.email}
            </a>
            <a href={`tel:${candidate.phone}`} className="hover:text-shell-ink">
              {candidate.phone}
            </a>
          </div>
          <div className="mt-3 flex gap-4 text-[13px] font-medium text-shell-accent-2">
            <a href={candidate.linkedin} className="hover:underline">
              LinkedIn
            </a>
            <a href={candidate.github} className="hover:underline">
              GitHub
            </a>
          </div>
        </div>
        <p className="text-[12.5px] text-shell-ink-soft">Prepared for Superleap.</p>
      </div>
    </footer>
  );
}
