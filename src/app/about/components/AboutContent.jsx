export function AboutContent() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-white/10 rounded-lg aspect-video flex items-center justify-center text-white text-sm">
        <img src="/judol.jpeg" alt="About S-MoniCom" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Tentang S-MoniCom</h3>
        <p className="text-gray-400 text-base leading-relaxed">S-MoniCom (Safe Monitoring Comment) sebuah aplikasi yang membantu kreator YouTube dalam mendeteksi dan menyembunyikan komentar spam terkait judol secara otomatis.</p>
        <p className="text-gray-400 text-base leading-relaxed">Dengan hadirnya S-MoniCom, kami dapat membantu kreator YouTube menjaga platform mereka tetap aman dari komentar negatif dan membangun lingkungan digital yang sehat.</p>
      </div>
    </section>
  );
}
