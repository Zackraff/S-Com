export function ContactContent() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* First Section: Contact Us title */}
      <div className="w-full flex items-center justify-center bg-black py-16">
        <h1 className="text-6xl font-bold text-center">Kontak Kami</h1>
      </div>

      {/* Second Section: Name (Email) list and contact info */}
      <div className="w-full flex justify-center bg-black py-16">
        {/* Name (Email) and other contact info */}
        <div className="w-full sm:w-5/12 text-center">
          <h2 className="text-xl font-semibold mb-6">NAMA (EMAIL) KAMI</h2>
          <ul className="text-left space-y-4 sm:text-center">
            {" "}
            {/* Added space-y-4 for vertical spacing */}
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Muhamad Khoiri Tahmid</span>
              <a href="mailto:mc224d5y0454@student.devacademy.id" className="text-blue-400 mx-2">
                mc224d5y0454@student.devacademy.id
              </a>
            </li>
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Farhan Jiratullah</span>
              <a href="mailto:mc288d5y0461@student.devacademy.id" className="text-blue-400 mx-2">
                mc288d5y0461@student.devacademy.id
              </a>
            </li>
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Achmad Fergiawan Listanto</span>
              <a href="mailto:mc288d5y0698@student.devacademy.id" className="text-blue-400 mx-2">
                mc288d5y0698@student.devacademy.id
              </a>
            </li>
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Dimas Indra Jaya</span>
              <a href="mailto:mc288d5y0912@student.devacademy.id" className="text-blue-400 mx-2">
                mc288d5y0912@student.devacademy.id
              </a>
            </li>
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Anastasia Ardhiani Widoyoko Putri</span>
              <a href="mailto:fc361d5x0951@student.devacademy.id" className="text-blue-400 mx-2">
                fc361d5x0951@student.devacademy.id
              </a>
            </li>
            <li className="flex justify-center items-center">
              <span className="font-semibold mx-2">Zaki Rafi Athallah</span>
              <a href="mailto:fc001d5y1920@student.devacademy.id" className="text-blue-400 mx-2">
                fc001d5y1920@student.devacademy.id
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Third Section: Email and Phone Info */}
      <div className="w-full flex justify-center bg-black py-16">
        <div className="w-full sm:w-5/12 text-center mb-8 sm:mb-0">
          <h2 className="text-xl font-semibold mb-4">ALAMAT EMAIL</h2>
          <p className="text-blue-400">smonicom@gmail.com</p>
        </div>
        <div className="w-full sm:w-5/12 text-center">
          <h2 className="text-xl font-semibold mb-4">NOMOR TELEPON</h2>
          <p className="text-blue-400">+62 100 1212 6789</p>
        </div>
      </div>

      {/* Fourth Section: Send Us a Message Form */}
      <div className="w-full max-w-1xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Kirim Pesan Kepada Kami</h2>
        <form className="bg-gray-800 p-6 rounded-lg">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">
              Nama
            </label>
            <input type="text" id="name" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Nama Anda" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Email Anda" />
          </div>

          {/* Message Textarea */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">
              Pesan
            </label>
            <textarea id="message" rows="4" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Pesan Anda"></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
