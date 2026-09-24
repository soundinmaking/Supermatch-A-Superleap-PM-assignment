import { gtmPhases } from "@/lib/content";

export function GTM() {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Go-to-market — 4 phases, 60 days
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {gtmPhases.map((p) => (
          <div
            key={p.phase}
            className="flex flex-col rounded-2xl border border-shell-border bg-shell-surface p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-shell-accent-2">
                {p.phase}
              </span>
              <span className="text-[11.5px] text-shell-ink-soft">{p.days}</span>
            </div>
            <h3 className="mt-1.5 text-[15px] font-semibold text-shell-ink">{p.name}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {p.items.map((it) => (
                <li key={it} className="flex gap-2 text-[13px] leading-snug text-shell-ink-soft">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-shell-ink-soft" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
