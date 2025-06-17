export default function TestimoniSection() {
    const testimonials = [
        {
            name: 'Rani Wijaya',
            role: 'Content Creator YouTube',
            quote: 'Sejak pakai S-MoniCom, komentar spam dan judi berkurang drastis di channel saya. Sangat membantu menjaga komunitas tetap sehat!',
        },
        {
            name: 'Andi Pratama',
            role: 'Admin Komunitas',
            quote: 'Fitur auto-hide komentar dengan keyword sangat akurat. Saya bisa lebih fokus mengelola konten tanpa harus review satu per satu.',
        },
        {
            name: 'Melati Surya',
            role: 'Pemilik Channel Edukasi',
            quote: 'Deteksi komentar judol-nya sangat efektif. Saya tidak perlu takut komentar negatif mengganggu viewer saya.',
        },
    ];

    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-1">
                        Testimoni
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg p-6 text-left border border-gray-700 shadow-lg hover:border-cyan-500 transition"
                        >
                            <p className="text-gray-300 italic mb-4">
                                “{item.quote}”
                            </p>
                            <div className="mt-4">
                                <p className="text-cyan-400 font-bold">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
