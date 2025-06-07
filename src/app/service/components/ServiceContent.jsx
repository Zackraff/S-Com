export function ServiceContent() {
  return (
    <section className="max-w-6xl mx-auto text-center py-16">
      <header>
        <h3 className="text-2xl font-bold mb-8">Layanan</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Layanan 1 */}
        <article className="flex flex-col items-center mb-6">
          <div className="bg-white/10 rounded-lg aspect-video flex items-center justify-center text-white text-sm mb-4">
            <img src="/judol.jpeg" alt="Layanan 1" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <p className="text-gray-400 text-sm">Deskripsi untuk layanan pertama. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>

        {/* Layanan 2 */}
        <article className="flex flex-col items-center mb-6">
          <div className="bg-white/10 rounded-lg aspect-video flex items-center justify-center text-white text-sm mb-4">
            <img src="/judol.jpeg" alt="Layanan 2" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <p className="text-gray-400 text-sm">Deskripsi untuk layanan kedua. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>

        {/* Layanan 3 */}
        <article className="flex flex-col items-center mb-6">
          <div className="bg-white/10 rounded-lg aspect-video flex items-center justify-center text-white text-sm mb-4">
            <img src="/judol.jpeg" alt="Layanan 3" className="object-cover w-full h-72 rounded-lg" />
          </div>
          <p className="text-gray-400 text-sm">Deskripsi untuk layanan ketiga. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>
      </div>
    </section>
  );
}
