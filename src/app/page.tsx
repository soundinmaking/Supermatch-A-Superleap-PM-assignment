import { Nav } from "@/components/Nav";
import { PageMesh } from "@/components/PageMesh";
import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/StatStrip";
import { Section } from "@/components/Section";
import { Funnel } from "@/components/Funnel";
import { Personas } from "@/components/Personas";
import { Workflow } from "@/components/Workflow";
import { MarketQuotes } from "@/components/MarketQuotes";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Solution } from "@/components/Solution";
import { GridBackdrop } from "@/components/GridBackdrop";
import { DotGridBackdrop } from "@/components/DotGridBackdrop";
import { PrototypeCta } from "@/components/PrototypeCta";
import { GTM } from "@/components/GTM";
import { Metrics } from "@/components/Metrics";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <PageMesh />
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatStrip />

        <Section id="funnel" className="border-b border-shell-border">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <Funnel />
            <Personas />
          </div>
        </Section>

        <Section
          className="border-b border-shell-border"
          backdrop={<DotGridBackdrop />}
        >
          <Workflow />
        </Section>

        <Section id="research" className="border-b border-shell-border">
          <MarketQuotes />
        </Section>

        <Section id="problem" className="border-b border-shell-border">
          <ProblemStatement />
        </Section>

        <Section
          id="solution"
          className="border-b border-shell-border"
          backdrop={<GridBackdrop />}
        >
          <Solution />
        </Section>

        <Section id="prototype" className="border-b border-shell-border">
          <PrototypeCta />
        </Section>

        <Section id="gtm" className="border-b border-shell-border">
          <GTM />
        </Section>

        <Section id="metrics">
          <Metrics />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
