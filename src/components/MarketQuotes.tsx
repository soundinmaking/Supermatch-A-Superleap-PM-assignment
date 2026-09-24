import { marketQuotes, insights, keyInsight } from "@/lib/content";

const crms = Object.keys(marketQuotes) as (keyof typeof marketQuotes)[];

export function MarketQuotes() {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        What buyers already say about the incumbents
      </h2>
      <p className="mt-2 max-w-[60ch] text-[14px] text-shell-ink-soft">
        Verified reviews from real-estate users of the three largest general CRMs, pulled
        from Capterra and G2.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {crms.map((crm) => (
          <div key={crm} className="rounded-2xl border border-shell-border bg-shell-surface p-5">
            <h3 className="text-[14px] font-semibold text-shell-ink">{crm}</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {marketQuotes[crm].map((q) => (
                <li key={q.quote} className="border-t border-shell-border pt-4 first:border-t-0 first:pt-0">
                  <p className="text-[13.5px] italic leading-snug text-shell-ink">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-[11.5px] leading-snug text-shell-ink-soft">
                    {q.reviewer} · {q.source}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-[15px] font-semibold text-shell-ink">Insights</h3>

        <div className="mt-4 rounded-2xl border border-shell-accent/30 bg-shell-accent/[0.08] px-6 py-6">
          <p className="text-[19px] font-bold leading-snug text-shell-ink sm:text-[22px]">
            {keyInsight}
          </p>
        </div>

        <ul className="mt-5 flex flex-col gap-3">
          {insights.map((line) => (
            <li key={line} className="flex gap-2.5 text-[14px] leading-relaxed text-shell-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-shell-ink-soft" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
