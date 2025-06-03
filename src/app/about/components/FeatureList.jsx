export function FeatureList() {
    return (
        <section className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Fitur Unggulan</h3>
            <ul className="space-y-6">
                <li>
                    <p className="text-white font-semibold">
                        ● Filter Komentar Berdasarkan Keyword
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                        Hapus komentar otomatis berdasarkan kata kunci yang kamu
                        tentukan.
                    </p>
                </li>
                <li>
                    <p className="text-white font-semibold">
                        ● Deteksi Komentar Judi Otomatis (AI)
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                        Menggunakan model machine learning untuk mendeteksi
                        komentar promosi judi online.
                    </p>
                </li>
                <li>
                    <p className="text-white font-semibold">
                        ● Pembersihan Komentar Spam
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                        Spam komentar dari akun berulang langsung dihapus atau
                        ditandai.
                    </p>
                </li>
            </ul>
        </section>
    );
}
