export function PageMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background: [
          "radial-gradient(55% 30% at 12% 2%, var(--shell-mesh-1), transparent 70%)",
          "radial-gradient(50% 28% at 88% 8%, var(--shell-mesh-2), transparent 70%)",
          "radial-gradient(45% 24% at 92% 30%, var(--shell-mesh-1), transparent 70%)",
          "radial-gradient(48% 26% at 4% 45%, var(--shell-mesh-2), transparent 70%)",
          "radial-gradient(50% 26% at 90% 58%, var(--shell-mesh-1), transparent 70%)",
          "radial-gradient(46% 24% at 6% 72%, var(--shell-mesh-2), transparent 70%)",
          "radial-gradient(52% 28% at 85% 85%, var(--shell-mesh-1), transparent 70%)",
          "radial-gradient(50% 26% at 10% 97%, var(--shell-mesh-2), transparent 70%)",
        ].join(", "),
      }}
    />
  );
}
