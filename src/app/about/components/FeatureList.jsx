export function FeatureList() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h3 className="text-4xl font-bold text-[#00FFFF] mb-12 text-center">Fitur Unggulan</h3>
      <ul className="space-y-8">
        {/* Fitur 1 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 filter blur-sm hover:blur-none">
          <article className="flex items-center space-x-4">
            <figure className="w-12 h-12 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
              <span className="font-semibold text-xl">🔑</span>
            </figure>
            <div>
              <p className="text-xl font-semibold text-white">Menyembunyikan Komentar Berdasarkan Keyword</p>
              <p className="text-gray-400 text-sm mt-1">Menyembunyikan komentar secara otomatis berdasarkan kata kunci yang kamu tentukan.</p>
            </div>
          </article>
        </li>

        {/* Fitur 2 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 filter blur-sm hover:blur-none">
          <article className="flex items-center space-x-4">
            <figure className="w-12 h-12 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
              <span className="font-semibold text-xl">🛑</span>
            </figure>
            <div>
              <p className="text-xl font-semibold text-white">Menyembunyikan Komentar Spam</p>
              <p className="text-gray-400 text-sm mt-1">Spam komentar dari akun yang berulang akan langsung disembunyikan.</p>
            </div>
          </article>
        </li>

        {/* Fitur 3 */}
        <li className="bg-[#1F2A3E] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 filter blur-sm hover:blur-none">
          <article className="flex items-center space-x-4">
            <figure className="w-12 h-12 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
              <span className="font-semibold text-xl">🎰</span>
            </figure>
            <div>
              <p className="text-xl font-semibold text-white">Menyembunyikan Komentar Terkait Judi Online</p>
              <p className="text-gray-400 text-sm mt-1">Menggunakan model machine learning untuk mendeteksi komentar promosi judi online.</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}
