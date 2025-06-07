export function Testimonials() {
    return (
        <section className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">
                Apa Kata Mereka
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                    <p className="italic text-gray-300">
                        "S-MiniCom sangat membantu saya mengelola komentar pada
                        video edukasi saya. Sekarang tidak ada lagi spam link!"
                    </p>
                    <p className="mt-4 text-sm font-semibold text-white">
                        – Dinda, YouTube Educator
                    </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                    <p className="italic text-gray-300">
                        "Saya tinggal aktifkan AI filter, dan aplikasi ini
                        otomatis membersihkan komentar-komentar judi. Sangat
                        praktis!"
                    </p>
                    <p className="mt-4 text-sm font-semibold text-white">
                        – Arif, Forum Admin
                    </p>
                </div>
            </div>
        </section>
    );
}
