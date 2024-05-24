import VideoCard, { VideoCardProps } from "./VideoCard";

type VideoGridProps = {
    videos: VideoCardProps[];
}

const VideoGrid = ({videos}: VideoGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    author={video.author}
                    createdAt={video.createdAt}
                    numComments={video.numComments}
                />
            ))}
        </div>
    );
}

export default VideoGrid;