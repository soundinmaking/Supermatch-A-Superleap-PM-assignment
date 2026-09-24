"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "Real Estate", label: "Sector — Residential brokerage" },
  { value: "7–8k", label: "Employees at the largest referenced player, Square Yards" },
  { value: "8–12", label: "Touchpoints per lead, intake to conversion" },
  { value: "30k–80k", label: "Calls/day industry-wide, inbound + outbound" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export function StatStrip() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="sector" className="border-y border-shell-border">
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        className="mx-auto grid max-w-[1180px] grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={shouldReduceMotion ? undefined : item}>
            <p className="text-[1.5rem] font-semibold tracking-tight text-shell-ink sm:text-[1.75rem]">
              {s.value}
            </p>
            <p className="mt-1.5 text-[13px] leading-snug text-shell-ink-soft">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
