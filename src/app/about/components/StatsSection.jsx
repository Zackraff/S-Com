export function StatsSection() {
    return (
        <section className="max-w-5xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-6">Statistik Penggunaan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <p className="text-4xl font-bold text-white">+12K</p>
                    <p className="text-sm text-gray-400">Komentar Difilter</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-white">98%</p>
                    <p className="text-sm text-gray-400">Akurasi AI</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-white">4.2K</p>
                    <p className="text-sm text-gray-400">Pengguna Aktif</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Monitoring</p>
                </div>
            </div>
        </section>
    );
}
