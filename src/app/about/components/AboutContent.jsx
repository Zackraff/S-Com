export function AboutContent() {
    return (
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg aspect-video flex items-center justify-center text-white text-sm">
                [Image Placeholder]
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">About S-MiniCom</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                    S-MiniCom (Smart Minimal Comment) adalah aplikasi web yang
                    dirancang untuk membantu pemilik konten atau channel dalam
                    mengelola komentar tidak sehat, terutama yang berkaitan
                    dengan judi online, spam, dan komentar berbahaya lainnya.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                    Kami menggabungkan teknologi Machine Learning dan pendekatan
                    berbasis aturan untuk menyaring komentar yang mengganggu
                    atau merusak pengalaman pengguna.
                </p>
            </div>
        </section>
    );
}
