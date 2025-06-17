export function StatsSection() {
    return (
        <section className="max-w-5xl mx-auto text-center px-6 py-12">
            <h3 className="text-4xl font-bold text-[#00FFFF] mb-12">
                Statistik Penggunaan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <article className="bg-gradient-to-r from-[#00A1B3]  p-6 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#00A1B3] hover:bg-[length:200%_200%] hover:bg-pos-0%_50%">
                    <p className="text-4xl font-bold text-white">+12K</p>
                    <p className="text-sm text-gray-400">Komentar Difilter</p>
                </article>
                <article className="bg-gradient-to-r from-[#00A1B3]  p-6 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#00A1B3] hover:bg-[length:200%_200%] hover:bg-pos-0%_50%">
                    <p className="text-4xl font-bold text-white">98%</p>
                    <p className="text-sm text-gray-400">Akurasi AI</p>
                </article>
                <article className="bg-gradient-to-r from-[#00A1B3]  p-6 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#00A1B3] hover:bg-[length:200%_200%] hover:bg-pos-0%_50%">
                    <p className="text-4xl font-bold text-white">4.2K</p>
                    <p className="text-sm text-gray-400">Pengguna Aktif</p>
                </article>
                <article className="bg-gradient-to-r from-[#00A1B3]  p-6 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#00A1B3] hover:bg-[length:200%_200%] hover:bg-pos-0%_50%">
                    <p className="text-4xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Monitoring</p>
                </article>
            </div>
        </section>
    );
}
