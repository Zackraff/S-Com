export class ProfilePresenter {
    constructor({ session, setProfile }) {
        this.session = session;
        this.setProfile = setProfile;
    }

    async init() {
        try {
            const res = await fetch(
                'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',
                {
                    headers: {
                        Authorization: `Bearer ${this.session.accessToken}`,
                    },
                },
            );

            const data = await res.json();
            const channel = data.items?.[0];

            this.setProfile({
                name: channel.snippet.title,
                username: `@${
                    channel.snippet.customUrl ||
                    this.session.user.email.split('@')[0]
                }`,
                image: channel.snippet.thumbnails.default.url,
                subscribers: `${channel.statistics.subscriberCount} subscribers`,
                videos: `${channel.statistics.videoCount} videos`,
                bio: channel.snippet.description,
                discordUrl: null,
            });
        } catch (err) {
            console.error('❌ Failed to fetch profile:', err);
            this.setProfile(null);
        }
    }
}
