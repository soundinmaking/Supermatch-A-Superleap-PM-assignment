import { workflowNodes } from "@/lib/content";

export function Workflow() {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Lead-to-Booking Workflow
      </h2>
      <p className="mt-2 max-w-[65ch] text-[14px] leading-relaxed text-shell-ink-soft">
        Every decision branch from the assignment, kept intact — simplified visually into a
        single vertical lane rather than a wide diagram, for legibility on any screen.
      </p>

      <ol className="relative mt-8 flex flex-col">
        {workflowNodes.map((node, i) => {
          const isLast = i === workflowNodes.length - 1;
          return (
            <li key={node.id} className="relative pb-8 pl-9 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 h-[calc(100%-8px)] w-px bg-shell-border"
                />
              )}
              <span
                aria-hidden
                className={
                  "absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full ring-4 ring-shell-bg " +
                  (node.kind === "decision"
                    ? "bg-shell-accent-2"
                    : node.kind === "end"
                      ? "bg-shell-accent"
                      : "bg-shell-ink-soft/50")
                }
              />
              {node.kind === "decision" ? (
                <div className="rounded-xl border border-shell-accent-2/30 bg-shell-accent-2/[0.05] px-4 py-3.5">
                  <p className="text-[13.5px] font-semibold text-shell-ink">
                    {node.label}
                  </p>
                  <ul className="mt-2.5 flex flex-col gap-1.5">
                    {node.branches?.map((b) => (
                      <li key={b.label} className="text-[12.5px] leading-snug text-shell-ink-soft">
                        <span className="font-medium text-shell-accent-2">{b.label} →</span>{" "}
                        {b.to}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p
                  className={
                    "text-[13.5px] leading-snug " +
                    (node.kind === "end"
                      ? "font-semibold text-shell-accent"
                      : node.kind === "start"
                        ? "font-medium text-shell-ink-soft"
                        : "font-medium text-shell-ink")
                  }
                >
                  {node.label}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
