import "animate.css";

export function ServiceContent() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-4xl font-bold text-[#00FFFF] mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">Fitur Unggulan Kami</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Fitur 1 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
          <article className="flex flex-col items-center justify-center text-center">
            <header className="w-24 h-24 bg-[#00A1B3] text-white rounded-full flex items-center justify-center mb-4 shadow-lg animate__animated animate__zoomIn">
              <span className="font-semibold text-3xl">🔑</span>
            </header>
            <div>
              <h4 className="text-xl font-semibold text-white">Menyembunyikan Komentar Berdasarkan Keyword</h4>
              <p className="text-gray-400 text-sm mt-2">Menyembunyikan komentar secara otomatis berdasarkan kata kunci yang kamu tentukan, sehingga konten kamu lebih bersih dari komentar yang tidak relevan.</p>
              <p className="mt-4 text-gray-300 text-sm">Contoh: Menyembunyikan komentar yang mengandung kata-kata kasar atau spam.</p>
            </div>
          </article>
        </li>

        {/* Fitur 2 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
          <article className="flex flex-col items-center justify-center text-center">
            <header className="w-24 h-24 bg-[#00A1B3] text-white rounded-full flex items-center justify-center mb-4 shadow-lg animate__animated animate__zoomIn">
              <span className="font-semibold text-3xl">🛑</span>
            </header>
            <div>
              <h4 className="text-xl font-semibold text-white">Menyembunyikan Komentar Spam</h4>
              <p className="text-gray-400 text-sm mt-2">Spam komentar dari akun yang berulang akan langsung disembunyikan, memberikan pengalaman yang lebih baik bagi audiens.</p>
              <p className="mt-4 text-gray-300 text-sm">Contoh: Menyembunyikan komentar yang berisi link atau tawaran yang tidak relevan.</p>
            </div>
          </article>
        </li>

        {/* Fitur 3 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out animate__animated animate__fadeIn animate__delay-4s">
          <article className="flex flex-col items-center justify-center text-center">
            <header className="w-24 h-24 bg-[#00A1B3] text-white rounded-full flex items-center justify-center mb-4 shadow-lg animate__animated animate__zoomIn">
              <span className="font-semibold text-3xl">🎰</span>
            </header>
            <div>
              <h4 className="text-xl font-semibold text-white">Menyembunyikan Komentar Terkait Judi Online</h4>
              <p className="text-gray-400 text-sm mt-2">Menggunakan model machine learning untuk mendeteksi komentar promosi judi online, menjaga platform kamu tetap bersih dari konten ilegal.</p>
              <p className="mt-4 text-gray-300 text-sm">Contoh: Menyembunyikan komentar yang mengandung promosi situs judi atau aplikasi ilegal.</p>
            </div>
          </article>
        </li>
      </ul>

      {/* Tambahkan Section Penjelasan Umum tentang Layanan */}
      <div className="mt-12 text-center animate__animated animate__fadeIn animate__delay-5s">
        <h4 className="text-3xl font-bold text-[#00FFFF] mb-4">Mengapa Memilih Layanan Kami?</h4>
        <p className="text-lg text-white opacity-80">
          S-MoniCom memberikan solusi cerdas untuk mengelola dan memfilter komentar di platform digital. Dengan teknologi machine learning dan pengaturan yang mudah, kami membantu Anda menciptakan lingkungan digital yang lebih aman dan
          nyaman bagi semua pengguna.
        </p>
      </div>
    </section>
  );
}
