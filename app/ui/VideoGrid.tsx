import VideoCard, { VideoCardProps } from "./VideoCard";

type VideoGridProps = {
    videos: VideoCardProps['video'][];
}

const VideoGrid = ({videos}: VideoGridProps) => {
    console.log(videos);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                />
            ))}
        </div>
    );
}

export default VideoGrid;