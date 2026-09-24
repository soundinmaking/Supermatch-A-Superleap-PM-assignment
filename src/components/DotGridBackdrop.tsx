export function DotGridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id="funnel-dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="var(--shell-ink-soft)" />
          </pattern>
          <linearGradient id="funnel-dots-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="75%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="funnel-dots-mask">
            <rect width="100%" height="100%" fill="url(#funnel-dots-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#funnel-dots)"
          opacity="0.245"
          mask="url(#funnel-dots-mask)"
        />
      </svg>
    </div>
  );
}
