import { personas } from "@/lib/content";

export function Personas() {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
        Who the end users are
      </h2>
      <ol className="mt-6 flex flex-col gap-5">
        {personas.map((p, i) => (
          <li key={p.title} className="flex gap-3.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-shell-surface text-[11px] font-semibold text-shell-ink-soft ring-1 ring-inset ring-shell-border">
              {i + 1}
            </span>
            <div>
              <p className="text-[14.5px] font-semibold leading-snug text-shell-ink">
                {p.title}
                {"tag" in p && p.tag ? (
                  <span className="ml-2 rounded-full bg-shell-accent/12 px-2 py-0.5 text-[11px] font-medium text-shell-accent">
                    {p.tag}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-[13.5px] leading-snug text-shell-ink-soft">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
