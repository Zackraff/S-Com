'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LoginPresenter } from './presenters/loginPresenter';

export default function LoginPage() {
    const { data: session, status } = useSession();
    const presenterRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        presenterRef.current = new LoginPresenter({});
    }, []);

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/account');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
                Loading...
            </div>
        );
    }

    if (status === 'authenticated') {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
            <div className="max-w-md text-center space-y-6">
                <img src="/Logo1.png" alt="App Logo" className="mx-auto w-70" />
                <h1 className="text-3xl font-bold">Welcome to S-MoniCom</h1>
                <p className="text-gray-300">
                    Your smart assistant to monitor and manage YouTube comments
                    with ease.
                </p>
                <p className="text-sm text-gray-400 italic">
                    Stay in control. Stay professional. Say goodbye to spam,
                    gambling links, and hate speech!
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all"
                    onClick={() => presenterRef.current?.handleLogin()}
                >
                    🚀 Login with Google
                </button>
            </div>
        </div>
    );
}
