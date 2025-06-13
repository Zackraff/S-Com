// app/account/models/videos.js
export async function getUserVideos(accessToken) {
    // Step 1: Get the user's uploads playlist ID
    const channelRes = await fetch(
        'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );

    if (!channelRes.ok) throw new Error('Failed to fetch channel uploads');
    const channelData = await channelRes.json();
    const uploadsId =
        channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsId) throw new Error('No uploads playlist found');

    // Step 2: Get videos from the uploads playlist
    const playlistRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${uploadsId}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );

    if (!playlistRes.ok) throw new Error('Failed to fetch playlist videos');
    const playlistData = await playlistRes.json();

    return playlistData.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.medium?.url || '',
        channel: item.snippet.channelTitle,
        views: '-', // Optional: You can enhance by calling videos?part=statistics&id=...
        uploadedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
    }));
}
