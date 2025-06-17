import Link from 'next/link';

export default function HomeSection() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className=" border-0 lg:border-l-4 border-cyan-500 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
                    <h1 className="text-2xl lg:text-5xl font-extrabold text-cyan-400 mb-6">
                        S-MoniCom
                    </h1>
                    <p className="text-gray-200 text-base md:text-xl lg:text-2xl leading-relaxed mb-6">
                        S-MoniCom adalah web aplikasi berbasis ML yang membantu
                        menyaring, atau menyembunyikan komentar berunsur{' '}
                        <strong>judol</strong> di filter secara otomatis dari
                        platform seperti YouTube.
                    </p>
                    <Link
                        href="/login"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 text-center rounded-lg transition"
                    >
                        Get Started
                    </Link>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="/hs-light.png"
                            alt="S-MoniCom Illustration"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
