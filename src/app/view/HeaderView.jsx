'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function HeaderView() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <header
                className={`w-full bg-black text-white px-8 py-6 fixed top-0 left-0 z-20 shadow-md transition-all duration-300 border-b-1 border-black ${
                    scrolled ? 'border-b-1 border-gray-600' : ''
                }`}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src="/vercel.svg" alt="logo" />
                        <h1 className="text-2xl font-bold">S-MoniCom</h1>
                    </div>

                    <nav className="hidden md:flex gap-4 items-center text-xl">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                        <Link href="/layanan" className="hover:underline">
                            Layanan
                        </Link>
                        <Link
                            href="/login"
                            className="hover:underline font-bold px-4 py-1 border border-white rounded ml-4"
                        >
                            Get Started
                        </Link>
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                    >
                        {<HiMenu />}
                    </button>
                </div>
            </header>

            {/* MOBILE SIDEBAR FROM RIGHT */}
            <aside
                className={`fixed top-0 right-0 w-64 h-full bg-black text-white p-6 z-30 transform transition-transform duration-300 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex align-middle justify-end gap-3 mb-6">
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white focus:outline-none text-2xl"
                        aria-label="Toggle Menu"
                    >
                        {<HiX />}
                    </button>
                </div>
                <nav className="flex flex-col gap-4 items-center">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setOpen(false)}
                        className="hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="hover:underline"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/layanan"
                        onClick={() => setOpen(false)}
                        className="hover:underline"
                    >
                        Layanan
                    </Link>
                    <Link
                        href="/login"
                        onClick={() => setOpen(false)}
                        className="hover:underline font-bold px-3 py-1 border border-white rounded mt-2"
                    >
                        Get Started
                    </Link>
                </nav>
            </aside>

            <div className="h-20" />
        </>
    );
}
