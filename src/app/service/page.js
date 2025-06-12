import SectionTitle from "./components/SectionTitle";
import { ServiceContent } from "./components/ServiceContent";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20 space-y-24">
      <SectionTitle>Our Services</SectionTitle>
      <ServiceContent />
    </main>
  );
}
