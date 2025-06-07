export default function ProfileSection({ profile }) {
    return (
        <section className="p-6 rounded-md flex flex-col md:flex-row gap-6 items-center bg-neutral-900">
            <img
                src={profile.image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
            <div className="flex-1 text-center md:text-start">
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-sm text-gray-300">
                    {profile.username} • {profile.subscribers} •{' '}
                    {profile.videos}
                </p>
                <p className="mt-2 text-sm text-gray-400">
                    Join discord: Montoreime guys linknya di bawah! ...more
                    <br />
                    <a
                        href={profile.discordUrl}
                        className="text-blue-400 underline"
                    >
                        {profile.discordUrl}
                    </a>
                </p>
                <button className="mt-4 bg-white text-black font-semibold px-4 py-1 rounded hover:bg-gray-200 transition">
                    Subscribe
                </button>
            </div>
        </section>
    );
}
