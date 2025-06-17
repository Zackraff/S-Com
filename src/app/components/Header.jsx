'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    const isLoggedIn = !!session;

    return (
        <>
            <header
                className={`w-full bg-black text-white px-8 py-6 fixed top-0 left-0 z-20 shadow-md transition-all duration-300 border-b-1 border-black ${
                    scrolled ? 'border-b-1 border-gray-600' : ''
                }`}
            >
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            className="w-20"
                            src="/Logo1.png"
                            alt="S-MoniCom logo"
                        />
                        <span className="text-2xl font-bold text-cyan-400">
                            S-MoniCom
                        </span>
                    </Link>

                    <nav className="hidden md:flex gap-4 items-center text-xl">
                        <ul className="flex gap-4 items-center justify-center">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/service"
                                    className="hover:underline"
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:underline"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                {isLoggedIn ? (
                                    <button
                                        onClick={handleLogout}
                                        className="hover:underline font-bold text-base px-4 py-1 border border-white rounded ml-4"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="hover:underline font-bold text-xl px-4 py-1 border border-white rounded ml-4"
                                    >
                                        Get Started
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                        aria-label="Toggle Navigation Menu"
                    >
                        <HiMenu />
                    </button>
                </div>
            </header>

            <aside
                className={`fixed top-0 right-0 w-64 h-full bg-black text-white p-6 z-30 transform transition-transform duration-300 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-2xl"
                        aria-label="Close Menu"
                    >
                        <HiX />
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col gap-4 items-center">
                        <li>
                            <Link href="/" onClick={() => setOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/service"
                                onClick={() => setOpen(false)}
                            >
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        handleLogout();
                                    }}
                                    className="hover:underline font-bold px-4 py-1 border border-white rounded mt-2"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="hover:underline font-bold px-4 py-1 border border-white rounded mt-2"
                                >
                                    Get Started
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="h-20" />
        </>
    );
}
