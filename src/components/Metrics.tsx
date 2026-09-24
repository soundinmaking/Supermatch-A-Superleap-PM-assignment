import { metricsToTrack } from "@/lib/content";

export function Metrics() {
  return (
    <div className="mx-auto max-w-[68ch]">
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Metrics to track
      </h2>
      <ul className="mt-6 flex flex-col gap-3">
        {metricsToTrack.map((m) => (
          <li
            key={m}
            className="flex items-baseline gap-3 border-b border-shell-border pb-3 text-[14.5px] leading-snug text-shell-ink last:border-b-0"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-shell-accent" />
            <span>{m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
