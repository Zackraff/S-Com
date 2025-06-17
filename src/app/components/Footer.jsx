import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-cyan-400 text-2xl font-bold mb-2">
                        S-MoniCom
                    </h3>
                    <p className="text-sm text-gray-400">
                        Aplikasi pintar untuk menyaring komentar spam, judol,
                        dan konten tidak sehat di platform digital Anda.
                    </p>
                </div>
                <div className="text-center">
                    <h4 className="text-white font-semibold mb-3">Navigasi</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/#about"
                                className="hover:text-cyan-400"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#layanan"
                                className="hover:text-cyan-400"
                            >
                                Layanan
                            </Link>
                        </li>
                        <li>
                            <Link href="/#faq" className="hover:text-cyan-400">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/get-started"
                                className="hover:text-cyan-400"
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:text-right">
                    <h4 className="text-white font-semibold mb-3">
                        Dibuat Oleh
                    </h4>
                    <p className="text-sm text-gray-400">
                        Kelompok{' '}
                        <span className="text-cyan-400 font-medium">
                            S-MoniCom
                        </span>
                        <br />© {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
                Terima kasih telah menggunakan S-MoniCom.
            </div>
        </footer>
    );
}
