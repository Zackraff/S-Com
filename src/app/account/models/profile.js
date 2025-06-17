import { buildUserProfile } from '../models/profile';

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

            const youtubeData = {
                subscribers: channel.statistics.subscriberCount,
                videos: channel.statistics.videoCount,
            };

            this.setProfile(buildUserProfile(this.session, youtubeData));
        } catch (err) {
            console.error('❌ Failed to fetch channel data', err);
            this.setProfile(buildUserProfile(this.session));
        }
    }
}
