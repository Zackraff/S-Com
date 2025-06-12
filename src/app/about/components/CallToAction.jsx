"use client";

import Link from "next/link";

export function CallToAction() {
  return (
    <section className="text-center w-full py-12 px-6 rounded-lg shadow-lg">
      <h4 className="text-3xl font-bold text-[#00FFFF] mb-6">Tertarik Mencoba?</h4>
      <p className="text-sm text-gray-300 mb-4">Klik tombol di bawah ini untuk memulai pengalaman Anda!</p>
      <Link
        href="/account"
        className="inline-block bg-[#00A1B3] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#1F2A3E] hover:shadow-lg transition-all duration-300 transform hover:scale-95 hover:translate-y-[5px] cursor-pointer"
        aria-label="Mulai Sekarang"
      >
        Mulai Sekarang
      </Link>
    </section>
  );
}
