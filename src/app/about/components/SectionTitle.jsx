export default function SectionTitle({ children }) {
    return (
        <section className="flex justify-center">
            <h2 className="text-4xl font-bold border-b-4 border-white px-4 text-center ">
                {children}
            </h2>
        </section>
    );
}
