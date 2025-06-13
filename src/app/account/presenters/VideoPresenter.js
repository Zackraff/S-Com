// app/account/presenters/VideoPresenter.js
import { getUserVideos } from '../models/videos';

export class VideoPresenter {
    constructor({ session, setVideos }) {
        this.session = session;
        this.setVideos = setVideos;
    }

    async init() {
        if (!this.session?.accessToken) {
            console.error('❌ No access token found');
            return;
        }

        try {
            const videos = await getUserVideos(this.session.accessToken);
            this.setVideos(videos);
        } catch (error) {
            console.error('❌ Failed to load videos:', error);
            this.setVideos([]);
        }
    }
}
