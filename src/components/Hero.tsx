"use client";

import { motion, useReducedMotion } from "framer-motion";
import { candidate } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="top">
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 sm:pt-24"
      >
        <motion.h1
          variants={item}
          className="max-w-[19ch] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-shell-ink"
        >
          Two systems that know everything, but never talk to each other.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-shell-ink-soft"
        >
          A CRM that keeps matching leads against inventory on its own, instead of
          waiting for someone to check.
        </motion.p>
        <motion.div variants={item} className="mt-9 text-[13px] text-shell-ink-soft">
          <p className="font-medium text-shell-ink">{candidate.name}</p>
          <p>{candidate.program}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
