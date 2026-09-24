export function ProblemStatement() {
  return (
    <div className="mx-auto max-w-[68ch]">
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Problem statement
      </h2>
      <p className="mt-5 text-[15.5px] leading-[1.75] text-shell-ink">
        Real estate businesses run two systems of record that are each internally accurate
        but never reconciled with each other in real time: a CRM that knows who wants what,
        and an inventory ledger that knows what&apos;s actually still for sale. Nothing
        continuously checks one against the other. That creates leakage in both directions
        — a rep can confirm a site visit for a unit that got sold in the gap between
        scheduling and showing up, and when a unit frees up (a hold expires, someone
        cancels), nobody automatically checks it against the backlog of past leads who
        wanted exactly that configuration and were told &ldquo;not available.&rdquo;
      </p>

      <div className="mt-8 rounded-2xl border border-match-purple-border bg-match-purple-tint px-6 py-6">
        <p className="text-[11.5px] font-semibold uppercase tracking-wide text-match-purple-text">
          Hypothesis
        </p>
        <p className="mt-3 text-[16px] leading-[1.7] text-shell-ink">
          &ldquo;When a unit&apos;s status changes or a lead goes cold, we want the CRM to
          keep matching it against every lead&apos;s real preference on its own — instead
          of waiting for someone to check now and then — so we recover the chunk of visits
          and bookings we&apos;re currently writing off as the buyer losing interest.&rdquo;
        </p>
      </div>

      <h3 className="mt-10 text-[15px] font-semibold text-shell-ink">Loss estimation</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-shell-ink-soft">
        Scenario: 300-unit project over 2 years; a launch weekend alone can move 150+ units
        (referencing MHub data), so this shows up fast, on the biggest sales days.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-shell-border bg-shell-surface px-5 py-4">
          <p className="text-[1.35rem] font-semibold tracking-tight text-shell-ink">
            60–100 failed visits
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-shell-ink-soft">
            If 3–5% of ~2,000 total visits hit this issue. Each one: a burned lead, a
            wasted rep day, a trust hit.
          </p>
        </div>
        <div className="rounded-xl border border-shell-border bg-shell-surface px-5 py-4">
          <p className="text-[1.35rem] font-semibold tracking-tight text-shell-ink">
            10–20 extra bookings
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-shell-ink-soft">
            Recoverable if a couple hundred leads marked lost (due to unavailability) over
            2 years convert at 5–10% once re-approached — leads already paid for once.
          </p>
        </div>
      </div>
      <p className="mt-5 text-[13.5px] italic leading-relaxed text-shell-ink-soft">
        Softer losses: a broker burned once stops referring; a rep burned once stops
        trusting the CRM&apos;s inventory data and reverts to double-checking on WhatsApp
        groups — undermining every other agent built on trust in that data.
      </p>
    </div>
  );
}
