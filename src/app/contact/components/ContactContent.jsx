export function ContactContent() {
  return (
    <section className="bg-gradient-to-b from-[#000000] to-[#182331] p-10">
      {/* Konten utama di tengah */}
      <div className="text-center mb-12">
        <h3 className="text-4xl text-[#00FFFF] font-bold mb-6">Kontak Kami</h3>
        <p className="text-lg text-white mb-6">Email Kami:</p>
        <ul className="list-none space-y-2 text-white">
          <li>
            <a href="mailto:mc224d5y0454@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Muhamad Khoiri Tahmid - mc224d5y0454@student.devacademy.id
            </a>
          </li>
          <li>
            <a href="mailto:mc288d5y0461@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Farhan Jiratullah - mc288d5y0461@student.devacademy.id
            </a>
          </li>
          <li>
            <a href="mailto:mc288d5y0698@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Achmad Fergiawan Listanto - mc288d5y0698@student.devacademy.id
            </a>
          </li>
          <li>
            <a href="mailto:mc288d5y0912@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Dimas Indra Jaya - mc288d5y0912@student.devacademy.id
            </a>
          </li>
          <li>
            <a href="mailto:fc361d5x0951@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Anastasia Ardhiani Widoyoko Putri - fc361d5x0951@student.devacademy.id
            </a>
          </li>
          <li>
            <a href="mailto:fc001d5y1920@student.devacademy.id" className="hover:text-[#00A1B3] transition duration-300 ease-in-out">
              Zaki Rafi Athallah - fc001d5y1920@student.devacademy.id
            </a>
          </li>
        </ul>
      </div>

      {/* Grid untuk alamat email dan nomor telepon dengan padding dan jarak atas */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
        {/* Bagian kiri: Alamat Email */}
        <div className="flex justify-center items-center space-x-4 px-6 py-4 bg-[#1F2A3E] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <p className="text-lg text-white">Alamat Email:</p>
          <a href="mailto:smonicom@gmail.com" className="text-[#00FFFF] hover:text-[#00A1B3] transition duration-300 ease-in-out">
            smonicom@gmail.com
          </a>
        </div>

        {/* Bagian kanan: Nomor Telepon */}
        <div className="flex justify-center items-center space-x-4 px-6 py-4 bg-[#1F2A3E] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <p className="text-lg text-white">Nomor Telepon:</p>
          <span className="text-[#00FFFF] hover:text-[#00A1B3] transition duration-300 ease-in-out">+62 878 7441 8448</span>
        </div>
      </div>
    </section>
  );
}
