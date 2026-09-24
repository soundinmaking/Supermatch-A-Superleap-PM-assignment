import { funnelStages } from "@/lib/content";

export function Funnel() {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Daily CRM Operations — As a Funnel
      </h2>
      <p className="mt-2 max-w-[52ch] text-[14px] text-shell-ink-soft">
        Illustrative daily volumes, mid-size brokerage sales team.
      </p>

      <div className="mt-6 flex flex-col">
        {funnelStages.map((s, i) => {
          const prev = funnelStages[i - 1]?.volume;
          const widthPct = Math.max(18, (s.volume / funnelStages[0].volume) * 100);
          return (
            <div key={s.n} className="border-b border-shell-border py-4 last:border-b-0">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] font-medium tabular-nums text-shell-ink-soft">
                  {s.n}
                </span>
                <h3 className="text-[14.5px] font-semibold text-shell-ink">{s.stage}</h3>
                <span className="ml-auto shrink-0 text-[13px] font-semibold tabular-nums text-shell-ink">
                  {s.volume}
                  {prev ? (
                    <span className="ml-1 font-normal text-shell-ink-soft">
                      / {prev}
                    </span>
                  ) : null}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-shell-border/60">
                <div
                  className="h-full rounded-full bg-shell-accent-2"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              <p className="mt-2 text-[13px] leading-snug text-shell-ink-soft">{s.what}</p>
              <p className="mt-1 text-[12px] font-medium text-shell-ink-soft/80">
                {s.metric}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-shell-accent/25 bg-shell-accent/[0.072] px-5 py-4">
        <p className="text-[14px] leading-relaxed text-shell-ink">
          <span className="font-semibold">9 of 420 leads become bookings (~2%)</span> — the
          scale of leakage the rest of this case study is about.
        </p>
      </div>
    </div>
  );
}
