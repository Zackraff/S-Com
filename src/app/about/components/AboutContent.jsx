export function AboutContent() {
    return (
        <section className="grid md:grid-cols-2 items-center gap-12 p-10 bg-gradient-to-b md:bg-gradient-to-r from-[#000000] to-[#182331] transition-all duration-500 ease-in-out">
            <figure className="flex items-center justify-center">
                <img
                    src="/Logo2.png"
                    alt="About S-MoniCom"
                    className="object-cover w-[400px] h-[300px] md:w-[650px] md:h-[450px] rounded-lg shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </figure>

            <article className="space-y-5 text-white">
                <h3 className="text-4xl md:text-6xl font-bold text-[#00FFFF]">
                    Tentang S-MoniCom
                </h3>
                <p className="text-base md:text-lg leading-normal">
                    S-MoniCom (Safe Monitoring Comment) adalah aplikasi yang
                    membantu kreator YouTube dalam mendeteksi dan menyembunyikan
                    komentar spam terkait judi secara otomatis.
                </p>
                <p className="text-base md:text-lg leading-normal">
                    Dengan hadirnya S-MoniCom, kami dapat membantu kreator
                    YouTube menjaga platform mereka tetap aman dari komentar
                    negatif dan membangun lingkungan digital yang sehat.
                </p>
            </article>
        </section>
    );
}
