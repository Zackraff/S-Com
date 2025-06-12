"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section className="bg-[#1F2A3E] p-8 md:p-12 rounded-lg shadow-lg w-full mx-auto">
      <h3 className="text-4xl font-bold text-[#00FFFF] mb-6 text-center">Kirim Pesan Kepada Kami</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-white">
            Nama
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 bg-[#2F3B4C] text-white rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-[#00A1B3]"
            placeholder="Masukkan Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 bg-[#2F3B4C] text-white rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-[#00A1B3]"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-white">
            Pesan
          </label>
          <textarea
            id="message"
            className="w-full p-3 bg-[#2F3B4C] text-white rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-[#00A1B3]"
            placeholder="Tulis pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#00A1B3] text-white font-semibold p-3 rounded-lg hover:bg-[#0093a197] transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00A1B3]">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
