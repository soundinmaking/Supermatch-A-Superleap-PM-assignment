"use client";

import { useEffect, useRef, useState } from "react";

const MIN_HEIGHT = 800;
const PROTOTYPE_SRC = "/prototype/super-match.html";

export function LivePrototype() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const measure = () => {
      try {
        const doc = iframe.contentWindow?.document;
        if (!doc) return;
        const next = Math.max(MIN_HEIGHT, doc.body.scrollHeight);
        setHeight((prev) => (Math.abs(prev - next) > 4 ? next : prev));
      } catch {
        // Cross-origin fallback: keep the last known height.
      }
    };

    const onLoad = () => {
      measure();
      interval = setInterval(measure, 400);
    };

    iframe.addEventListener("load", onLoad);
    return () => {
      iframe.removeEventListener("load", onLoad);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-[1.5rem] font-semibold tracking-tight text-shell-ink">
            Live prototype
          </h2>
          <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-shell-ink-soft">
            Below is a working build of Super Match — click through both tabs to see how
            it behaves for an admin and for a rep.
          </p>
        </div>
        <a
          href={PROTOTYPE_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-shell-border px-4 py-2 text-[13px] font-medium text-shell-ink transition-colors hover:border-match-purple hover:text-match-purple-text"
        >
          Open full-screen ↗
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-match-purple-border">
        <iframe
          ref={iframeRef}
          src={PROTOTYPE_SRC}
          title="Super Match prototype"
          style={{ height, width: "100%", display: "block", border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
