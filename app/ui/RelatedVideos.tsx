import VideoCard, { VideoCardProps } from "./VideoCard";

type VideoGridProps = {
    videos: VideoCardProps['video'][];
}

const RelatedVideos = ({videos}: VideoGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                />
            ))}
        </div>
    );
}

export default RelatedVideos;