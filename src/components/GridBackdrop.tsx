export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, var(--shell-accent) 0%, transparent 60%)",
          opacity: 0.07,
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern
            id="solution-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="72"
              stroke="var(--shell-accent)"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="0"
              x2="72"
              y2="0"
              stroke="var(--shell-accent)"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="solution-grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </linearGradient>
          <mask id="solution-grid-mask">
            <rect width="100%" height="100%" fill="url(#solution-grid-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#solution-grid)"
          mask="url(#solution-grid-mask)"
        />
      </svg>
    </div>
  );
}
