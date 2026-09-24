"use client";

import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#sector", label: "Sector" },
  { href: "/#funnel", label: "Funnel" },
  { href: "/#research", label: "Research" },
  { href: "/#problem", label: "Problem" },
  { href: "/#solution", label: "Solution" },
  { href: "/#gtm", label: "GTM" },
];

function BrandMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M3 8.5C3 7.12 4.12 6 5.5 6H11C11 8.76 8.76 11 6 11H3.8C3.36 11 3 10.64 3 10.2V8.5Z"
        fill="var(--shell-accent)"
      />
      <path
        d="M19 13.5C19 14.88 17.88 16 16.5 16H11C11 13.24 13.24 11 16 11H18.2C18.64 11 19 11.36 19 11.8V13.5Z"
        fill="var(--shell-accent)"
        opacity="0.55"
      />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-shell-border bg-shell-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3.5">
        <a href="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="text-[16px] font-bold tracking-tight text-shell-accent">
            supermatch
          </span>
          <span className="hidden text-[13px] font-normal text-shell-ink-soft sm:inline">
            · a PM case study
          </span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] font-medium text-shell-ink-soft transition-colors hover:text-shell-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/prototype"
            className="shrink-0 rounded-full bg-shell-accent px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Live Prototype
          </a>
          <a
            href="/#metrics"
            className="hidden shrink-0 text-[13px] font-medium text-shell-ink-soft transition-colors hover:text-shell-ink md:inline"
          >
            Metrics
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
