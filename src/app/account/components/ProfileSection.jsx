export default function ProfileSection({ profile }) {
    return (
        <section className="p-6 rounded-md flex flex-col md:flex-row gap-6 items-center bg-neutral-900 shadow-md">
            <img
                src={profile.image}
                alt="Foto Profil"
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />

            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                <p className="text-sm text-gray-300">
                    @{profile.username} • {profile.subscribers} •{' '}
                    {profile.videos}
                </p>

                {profile.bio && (
                    <p className="mt-3 text-sm text-gray-400">{profile.bio}</p>
                )}

                {profile.discordUrl && (
                    <p className="mt-2 text-sm text-gray-400">
                        Join Discord:
                        <a
                            href={profile.discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline ml-1"
                        >
                            {profile.discordUrl}
                        </a>
                    </p>
                )}

                <button className="mt-4 bg-white text-black font-semibold px-4 py-1 rounded hover:bg-gray-200 transition-all">
                    Subscribe
                </button>
            </div>
        </section>
    );
}
