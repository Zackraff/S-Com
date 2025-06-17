export default function ServiceSection() {
    const services = [
        {
            title: 'Hide Komentar by Keyword',
            description:
                'Masukkan kata kunci tertentu, komentar mengandung keyword akan otomatis terhide.',
            image: '/s1.png',
        },
        {
            title: 'Hide Komentar Spam',
            description:
                'Komentar dari user yang mengirim lebih dari 1 kali dengan komentar yang sama akan masuk review, lalu dikonfirmasi sebelum dihide.',
            image: '/s2.png',
        },
        {
            title: 'Hide Komentar Judol Otomatis',
            description:
                'Komentar dengan kata-kata terkait judi online akan otomatis terdeteksi.',
            image: '/s3.png',
        },
    ];

    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-1">
                        Service
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="bg-gray-700 w-full aspect-square flex items-center justify-center rounded overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <h4 className="text-cyan-400 font-semibold">
                                {service.title}
                            </h4>
                            <p className="text-sm lg:text-base text-gray-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
