import SectionTitle from "./components/SectionTitle";
import { ContactContent } from "./components/ContactContent";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20 space-y-24">
      <SectionTitle>Contact</SectionTitle>
      <ContactContent />
    </main>
  );
}
