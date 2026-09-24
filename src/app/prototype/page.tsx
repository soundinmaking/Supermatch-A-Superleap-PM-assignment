import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { LivePrototype } from "@/components/LivePrototype";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Live prototype — Super Match",
  description:
    "Click through a working build of Super Match: an admin panel and a rep's own CRM workflow.",
};

export default function PrototypePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:py-16">
          <a
            href="/"
            className="text-[13px] font-medium text-shell-ink-soft transition-colors hover:text-shell-ink"
          >
            ← Back to case study
          </a>
          <div className="mt-6">
            <LivePrototype />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
