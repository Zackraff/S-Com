import SectionTitle from "./components/SectionTitle";
import { AboutContent } from "./components/AboutContent";
import { FeatureList } from "./components/FeatureList";
import { Testimonials } from "./components/Testimonials";
import { StatsSection } from "./components/StatsSection";
import { TimelineSection } from "./components/TimelineSection";
import { CallToAction } from "./components/CallToAction";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20 space-y-24">
      <SectionTitle>About</SectionTitle>
      <AboutContent />
      <FeatureList />
      <Testimonials />
      <StatsSection />
      <div className="block md:flex items-center justify-between max-w-5xl mx-auto space-y-20 md:space-y-0">
        <TimelineSection />
        <CallToAction />
      </div>
    </main>
  );
}
