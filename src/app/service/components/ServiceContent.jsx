export function ServiceContent() {
  return (
    <section className="py-16 px-6">
      <header className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">Pilih layanan yang anda inginkan</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Layanan 1 */}
        <article className="flex flex-col items-center text-center bg-white/10 rounded-lg p-6 shadow-lg">
          <div className="overflow-hidden rounded-lg mb-4">
            <img src="/judol.jpeg" alt="Layanan 1" className="w-full h-72 object-cover" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Menyembunyikan Komentar Berdasarkan Keyword</h4>
          <p className="text-white text-sm">Menyembunyikan komentar secara otomatis berdasarkan kata kunci yang kamu tentukan.</p>
        </article>

        {/* Layanan 2 */}
        <article className="flex flex-col items-center text-center bg-white/10 rounded-lg p-6 shadow-lg">
          <div className="overflow-hidden rounded-lg mb-4">
            <img src="/judol.jpeg" alt="Layanan 2" className="w-full h-72 object-cover" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Menyembunyikan Komentar Spam</h4>
          <p className="text-white text-sm">Spam komentar dari akun yang berulang akan langsung disembunyikan.</p>
        </article>

        {/* Layanan 3 */}
        <article className="flex flex-col items-center text-center bg-white/10 rounded-lg p-6 shadow-lg">
          <div className="overflow-hidden rounded-lg mb-4">
            <img src="/judol.jpeg" alt="Layanan 3" className="w-full h-72 object-cover" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Menyembunyikan Komentar Terkait Judi Online</h4>
          <p className="text-white text-sm">Menggunakan model machine learning untuk mendeteksi komentar promosi judi online.</p>
        </article>
      </div>
    </section>
  );
}
