'use client';

import Link from 'next/link';

export default function HeaderView() {
    return (
        <header className="w-full bg-black text-white p-4 shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">LearnNextJS</h1>
                <nav className="flex gap-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <Link href="/blog" className="hover:underline">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}
