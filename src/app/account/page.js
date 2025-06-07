import { dummyVideos } from './dummy/videos';
import { dummyProfile } from './dummy/profile';
import VideoCard from './components/VideoCard';
import ProfileSection from './components/ProfilSection';

export default function AccountPage() {
    return (
        <main className="bg-black text-white min-h-screen px-6 md:px-20 py-12 space-y-12">
            <ProfileSection profile={dummyProfile} />

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
