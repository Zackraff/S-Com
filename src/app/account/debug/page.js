'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function DebugPage() {
    const { data: session } = useSession();
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleTestYoutubeAPI = async () => {
        setResult(null);
        setError(null);

        try {
            const res = await fetch(
                'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true',
                {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                },
            );

            const text = await res.text();

            if (!res.ok) {
                throw new Error(`Status ${res.status}: ${text}`);
            }

            setResult(JSON.parse(text));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12 space-y-6">
            <h1 className="text-2xl font-bold">🔍 Debug Google OAuth Token</h1>

            <div className="bg-neutral-900 p-4 rounded space-y-2">
                <p>
                    <strong>Email:</strong> {session?.user?.email}
                </p>
                <p>
                    <strong>Token:</strong>{' '}
                    <code className="break-all">
                        {session?.accessToken || 'No token found'}
                    </code>
                </p>
            </div>

            <button
                onClick={handleTestYoutubeAPI}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
                🔁 Test YouTube API (channels?mine=true)
            </button>

            {error && (
                <pre className="bg-red-800 p-4 rounded overflow-x-auto">
                    ❌ Error: {error}
                </pre>
            )}

            {result && (
                <pre className="bg-green-900 p-4 rounded overflow-x-auto">
                    ✅ Result: {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </main>
    );
}
