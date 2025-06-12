export function TimelineSection() {
  return (
    <section className="w-full px-6 py-12 rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold text-center text-[#00FFFF] mb-10">Timeline Pengembangan</h3>
      <ol className="space-y-6 text-sm text-gray-300 border-l-4 border-[#00A1B3] pl-6">
        <li className="flex items-start space-x-4 hover:text-[#00FFFF] cursor-pointer transition-all duration-300">
          <figure className="w-6 h-6 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
            <span>1</span>
          </figure>
          <article>
            <span className="text-white font-semibold">2023 Q1:</span> Riset dan perancangan fitur utama
          </article>
        </li>
        <li className="flex items-start space-x-4 hover:text-[#00FFFF] cursor-pointer transition-all duration-300">
          <figure className="w-6 h-6 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
            <span>2</span>
          </figure>
          <article>
            <span className="text-white font-semibold">2023 Q2:</span> Pengembangan MVP + integrasi model AI
          </article>
        </li>
        <li className="flex items-start space-x-4 hover:text-[#00FFFF] cursor-pointer transition-all duration-300">
          <figure className="w-6 h-6 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
            <span>3</span>
          </figure>
          <article>
            <span className="text-white font-semibold">2023 Q3:</span> Beta release + feedback pengguna
          </article>
        </li>
        <li className="flex items-start space-x-4 hover:text-[#00FFFF] cursor-pointer transition-all duration-300">
          <figure className="w-6 h-6 bg-[#00A1B3] text-white rounded-full flex items-center justify-center">
            <span>4</span>
          </figure>
          <article>
            <span className="text-white font-semibold">2023 Q4:</span> Launch versi publik + dashboard admin
          </article>
        </li>
      </ol>
    </section>
  );
}
