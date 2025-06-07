export function ContactContent() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* First section: Contact Us title */}
      <div className="w-full flex items-center justify-center bg-black py-16">
        <h1 className="text-6xl font-bold">Contact us</h1>
      </div>

      {/* Second section: Name (Email) and contact information */}
      <div className="w-full flex justify-center bg-black py-16">
        <div className="w-5/12 text-center">
          <h2 className="text-xl font-semibold mb-6">NAME (EMAIL) US</h2>
          <ul className="text-left">
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Muhamad Khoiri Tahmid</span>
              <a href="mailto:mc224d5y0454@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                mc224d5y0454@student.devacademy.id
              </a>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Farhan Jiratullah</span>
              <a href="mailto:mc288d5y0461@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                mc288d5y0461@student.devacademy.id
              </a>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Achmad Fergiawan Listanto</span>
              <a href="mailto:mc288d5y0698@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                mc288d5y0698@student.devacademy.id
              </a>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Dimas Indra Jaya</span>
              <a href="mailto:mc288d5y0912@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                mc288d5y0912@student.devacademy.id
              </a>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Anastasia Ardhiani Widoyoko Putri</span>
              <a href="mailto:fc361d5x0951@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                fc361d5x0951@student.devacademy.id
              </a>
            </li>
            <li className="mb-4 flex justify-between items-center">
              <span className="font-semibold w-2/5">Zaki Rafi Athallah</span>
              <a href="mailto:fc001d5y1920@student.devacademy.id" className="text-blue-400 w-3/5 truncate">
                fc001d5y1920@student.devacademy.id
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Third section: Contact form */}
      <div className="w-full flex justify-center bg-black py-16">
        <div className="w-5/12">
          <h2 className="text-xl font-semibold mb-6 text-center">Send Us a Message</h2>
          <form className="bg-gray-800 p-6 rounded-lg">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Your Name" />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Your Email" />
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea id="message" rows="4" className="w-full p-2 bg-black border border-gray-600 rounded-lg text-white" placeholder="Your Message"></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
