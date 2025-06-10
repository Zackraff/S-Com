import { dummyVideos } from './dummys/videos';
import { dummyProfile } from './dummys/profile';
import VideoCard from './components/VideoCard';
import ProfileSection from './components/ProfileSection';

export default function AccountPage() {
    return (
        <main className="bg-black text-white min-h-screen px-6 md:px-20 py-12 space-y-12">
            <ProfileSection profile={dummyProfile} />
            <h2 className="text-lg font-semibold text-center text-white py-12">
                Silakan pilih atau klik video yang ingin kamu monitoring.
                <br className="hidden md:block" />
                Aplikasi ini membantu mendeteksi dan menyembunyikan komentar
                **spam**, **kasar**, atau **berbau judi online** secara
                otomatis.
            </h2>
            <section>
                <h3 className="text-xl font-bold mb-4">Daftar Video</h3>
                <div className="flex flex-wrap gap-y-6 justify-center md:justify-between">
                    {dummyVideos.map((video) => (
                        <div key={video.id} className="mr-4">
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
