export default function AboutSection() {
    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-1">
                        About
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
                    <div className="justify-center flex w-full">
                        <img
                            src="/bs-light.png"
                            className="w-full lg:w-md"
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col  h-full">
                        <h3 className="text-xl lg:text-2xl font-semibold text-white text-center mb-10">
                            About S-MoniCom
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base lg:text-xl leading-relaxed mb-4">
                            <strong>S-MoniCom</strong> (Smart Minimal Comment)
                            adalah aplikasi web yang dirancang untuk membantu
                            pemilik konten atau channel dalam mengelola komentar
                            tidak sehat, terutama yang berkaitan dengan judi
                            online, spam, dan komentar berbahaya lainnya.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base lg:text-xl leading-relaxed">
                            Kami memanfaatkan kombinasi teknologi Machine
                            Learning dan pendekatan berbasis aturan seperti
                            keyword filtering untuk menyaring komentar yang
                            mengganggu atau merusak pengalaman pengguna.
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Fitur Unggulan</h4>
                    <div className="space-y-6">
                        <FeatureItem
                            title="Filter Komentar Berdasarkan Keyword"
                            description="Masukkan kata kunci spesifik untuk menghapus komentar yang mengandung kata tersebut secara otomatis."
                        />
                        <FeatureItem
                            title="Deteksi Komentar Judi Otomatis (ML)"
                            description="Menggunakan model pembelajaran mesin untuk mengenali pola-pola komentar yang mempromosikan judi online."
                        />
                        <FeatureItem
                            title="Pembersihan Komentar Spam"
                            description="Komentar yang dikirim berulang-ulang oleh pengguna akan ditandai sebagai spam dan masuk ke daftar review."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ title, description }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 w-3 h-3 bg-cyan-400 rounded-full" />
            <div>
                <h5 className="text-cyan-400 font-semibold">{title}</h5>
                <p className="text-gray-300 text-sm lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}
