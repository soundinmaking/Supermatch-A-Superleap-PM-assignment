export function PrototypeCta() {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-match-purple-border bg-match-purple-tint px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <div>
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
          Live prototype
        </h2>
        <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-shell-ink-soft">
          A working build of Super Match, on its own page — click through both tabs to
          see how it behaves for an admin and for a rep.
        </p>
      </div>
      <a
        href="/prototype"
        className="shrink-0 rounded-full bg-match-purple px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Try Super Match
      </a>
    </div>
  );
}
