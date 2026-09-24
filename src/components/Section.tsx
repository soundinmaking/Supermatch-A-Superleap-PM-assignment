import { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  bleed = false,
  backdrop,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
  backdrop?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${backdrop ? "relative overflow-hidden" : ""} ${className}`}
    >
      {backdrop}
      <div className={bleed ? "" : "mx-auto max-w-[1180px] px-5 py-16 sm:py-20"}>
        {children}
      </div>
    </section>
  );
}
