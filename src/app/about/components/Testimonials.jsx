export function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h3 className="text-4xl font-bold text-[#00FFFF] mb-12 text-center">Apa Kata Mereka</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
          <blockquote className="flex items-center space-x-4 mb-4">
            <div>
              <p className="italic text-gray-300">"S-MoniCom sangat membantu saya mengelola komentar pada video edukasi saya. Sekarang tidak ada lagi spam link!"</p>
              <p className="mt-4 text-sm font-semibold text-white">– Dinda, YouTube Educator</p>
            </div>
          </blockquote>
        </article>
        <article className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
          <blockquote className="flex items-center space-x-4 mb-4">
            <div>
              <p className="italic text-gray-300">"Saya tinggal aktifkan AI filter, dan aplikasi ini otomatis membersihkan komentar-komentar judi online. Sangat praktis!"</p>
              <p className="mt-4 text-sm font-semibold text-white">– Arif, Forum Admin</p>
            </div>
          </blockquote>
        </article>
      </div>
    </section>
  );
}
