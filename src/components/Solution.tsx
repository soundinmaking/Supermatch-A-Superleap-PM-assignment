import {
  mechanismStopBadVisit,
  mechanismWakeDeadLead,
  messagingPillars,
  taglines,
} from "@/lib/content";

function MechanismCard({
  title,
  steps,
}: {
  title: string;
  steps: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-match-purple-border bg-match-purple-tint p-6">
      <h3 className="text-[15px] font-semibold text-shell-ink">{title}</h3>
      <ol className="mt-4 flex flex-col gap-3">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-match-purple text-[10.5px] font-semibold text-white">
              {i + 1}
            </span>
            <p className="text-[13.5px] leading-snug text-shell-ink">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Solution() {
  return (
    <div>
      <div className="mx-auto max-w-[68ch]">
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
          Solution: Super Match
        </h2>
        <p className="mt-4 text-[15.5px] leading-[1.7] text-shell-ink-soft">
          The preference or interest was already captured somewhere in the product.
          Nothing new needs to be collected. Super Match holds onto that signal and acts
          the moment a match appears, whether that is the same day or a year later.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <MechanismCard title="Stop a bad visit" steps={mechanismStopBadVisit} />
        <MechanismCard title="Wake up a dead lead" steps={mechanismWakeDeadLead} />
      </div>

      <div className="mt-14 rounded-2xl border border-ember-amber/25 bg-ember-amber-tint px-6 py-8 sm:px-9">
        <div className="flex items-start gap-3">
          <MatchstickIcon />
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-wide text-ember-amber">
              Branding &amp; theming
            </p>
            <h3 className="mt-1 text-[17px] font-semibold text-shell-ink">
              The matchstick and the spark
            </h3>
          </div>
        </div>
        <p className="mt-4 max-w-[62ch] text-[14.5px] leading-relaxed text-shell-ink">
          A match does not expire sitting in the box. It works the same whether it is
          struck tomorrow or a year from now.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {messagingPillars.map((p) => (
            <span
              key={p}
              className="rounded-full border border-ember-amber/30 bg-white/40 px-3.5 py-1.5 text-[12.5px] font-medium text-ember-rust dark:bg-black/10"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {taglines.map((t) => (
            <p
              key={t}
              className="rounded-lg bg-white/50 px-4 py-3 text-[13.5px] italic leading-snug text-shell-ink dark:bg-black/10"
            >
              &ldquo;{t}&rdquo;
            </p>
          ))}
        </div>

        <blockquote className="mt-7 border-l-2 border-ember-rust pl-5 text-[14.5px] italic leading-relaxed text-shell-ink">
          &ldquo;We found a match for you. You showed interest in this a while back. It
          just became available, so we matched you to it. That is Super Match: always
          watching, so you do not have to check back.&rdquo;
        </blockquote>

        <p className="mt-6 text-[12px] leading-snug text-shell-ink-soft">
          Visual direction: warm amber and ember tones; matchstick, spark, and
          connecting-node motifs; calm and confident, not urgent; plain language, no hype
          words.
        </p>
      </div>
    </div>
  );
}

function MatchstickIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path
        d="M14 24V11.5"
        stroke="var(--ember-rust)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="7.5" r="4.5" fill="var(--ember-amber)" />
      <path
        d="M14 3.2c1.4 1.1 1.6 2.6 0 3.6"
        stroke="var(--ember-rust)"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
