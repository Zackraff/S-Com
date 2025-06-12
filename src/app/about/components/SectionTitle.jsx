export default function SectionTitle({ children }) {
  return (
    <section className="flex justify-center py-12">
      <h2 className="text-4xl font-bold text-[#00FFFF] border-b-4 border-[#00A1B3] px-4 text-center hover:border-[#00A1B3] transition duration-300 ease-in-out shadow-lg">{children}</h2>
    </section>
  );
}
