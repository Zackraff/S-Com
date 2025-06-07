'use client';

import Link from 'next/link';

export function CallToAction() {
    return (
        <section className="text-center w-full">
            <h4 className="text-2xl font-bold mb-4 ">Tertarik Mencoba?</h4>
            <Link
                href="/login"
                className="inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
            >
                Mulai Sekarang
            </Link>
        </section>
    );
}
