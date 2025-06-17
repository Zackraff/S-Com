'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileSection from './components/ProfileSection';
import VideoCard from './components/VideoCard';
import { ProfilePresenter } from './presenters/ProfilePresenter';
import { VideoPresenter } from './presenters/VideoPresenter';

export default function AccountPage() {
    const { data: session, status } = useSession();
    const [profile, setProfile] = useState(null);
    const [videos, setVideos] = useState([]);
    const presenterRef = useRef({
        profilePresenter: null,
        videoPresenter: null,
    });
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status]);

    useEffect(() => {
        if (session) {
            const profilePresenter = new ProfilePresenter({
                session,
                setProfile,
            });
            const videoPresenter = new VideoPresenter({ session, setVideos });
            presenterRef.current = { profilePresenter, videoPresenter };
            profilePresenter.init();
            videoPresenter.init();
        }
    }, [session]);

    if (status === 'loading') {
        return (
            <main className="flex items-center justify-center h-screen bg-black text-white">
                Loading...
            </main>
        );
    }

    if (!session) {
        return (
            <main className="flex items-center justify-center h-screen bg-black text-white">
                Kamu harus login untuk mengakses halaman ini.
            </main>
        );
    }

    const handleVideoClick = () => {
        router.push('/account/monitoring');
    };

    return (
        <main className="bg-black text-white min-h-screen px-6 md:px-20 py-12 space-y-12">
            {profile && <ProfileSection profile={profile} />}

            <h2 className="text-lg font-semibold text-center py-12">
                Silakan pilih atau klik video yang ingin kamu monitoring.
                <br className="hidden md:block" />
                Aplikasi ini membantu mendeteksi dan menyembunyikan komentar{' '}
                <strong>spam</strong>, <strong>kasar</strong>, atau{' '}
                <strong>berbau judi online</strong> secara otomatis.
            </h2>

            <section>
                <h3 className="text-xl font-bold mb-4">Daftar Video</h3>
                {videos.length === 0 ? (
                    <p className="text-gray-400">Belum ada video.</p>
                ) : (
                    <div className="flex flex-wrap gap-y-6 justify-center md:justify-between">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="mr-4 cursor-pointer"
                                onClick={handleVideoClick}
                            >
                                <VideoCard video={video} />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
