'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
    const faqs = [
        {
            question: 'Apa itu S-MoniCom?',
            answer: 'S-MoniCom adalah aplikasi web yang membantu menyaring, menyembunyikan, dan menghapus komentar berbahaya seperti spam atau komentar berisi promosi judi online.',
        },
        {
            question: 'Apakah deteksi dilakukan secara otomatis?',
            answer: 'Ya, komentar dapat dideteksi dan di-hide secara otomatis menggunakan kombinasi Machine Learning dan keyword filtering.',
        },
        {
            question: 'Apakah saya bisa menambahkan keyword sendiri?',
            answer: 'Tentu. Anda dapat menambahkan kata kunci tertentu yang ingin Anda blokir, dan sistem akan menyembunyikan komentar yang mengandung kata tersebut.',
        },
        {
            question: 'Apakah data komentar saya aman?',
            answer: 'S-MoniCom hanya menganalisis konten komentar dan tidak menyimpan data pribadi Anda. Keamanan dan privasi Anda adalah prioritas kami.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-1">
                        FAQ
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-gray-700 rounded-lg transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none hover:bg-gray-800 transition"
                            >
                                <span className="text-cyan-400 font-semibold">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-cyan-400" />
                                ) : (
                                    <ChevronDown className="text-cyan-400" />
                                )}
                            </button>
                            <div
                                className={`px-6 py-0 text-sm lg:text-base text-gray-300 transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100 py-4'
                                        : 'max-h-0 opacity-0 py-0'
                                } overflow-hidden`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
