export function TimelineSection() {
    return (
        <section className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Timeline Pengembangan</h3>
            <ol className="space-y-4 text-sm text-gray-300 border-l-4 border-white pl-6">
                <li>
                    <span className="text-white font-semibold">2023 Q1:</span>{' '}
                    Riset dan perancangan fitur utama
                </li>
                <li>
                    <span className="text-white font-semibold">2023 Q2:</span>{' '}
                    Pengembangan MVP + integrasi model AI
                </li>
                <li>
                    <span className="text-white font-semibold">2023 Q3:</span>{' '}
                    Beta release + feedback pengguna
                </li>
                <li>
                    <span className="text-white font-semibold">2023 Q4:</span>{' '}
                    Launch versi publik + dashboard admin
                </li>
            </ol>
        </section>
    );
}
