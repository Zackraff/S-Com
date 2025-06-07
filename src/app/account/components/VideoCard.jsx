export default function VideoCard({ video }) {
    return (
        <div className="w-[240px] h-[200px] flex-shrink-0">
            <div className="w-full h-[135px] bg-gray-300 overflow-hidden rounded">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="mt-2 text-sm">
                <p className="font-semibold line-clamp-2">{video.title}</p>
                <p className="text-gray-400">{video.channel}</p>
                <p className="text-gray-500 text-xs">
                    {video.views} • {video.uploadedAt}
                </p>
            </div>
        </div>
    );
}
