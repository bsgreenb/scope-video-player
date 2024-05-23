import { videos } from "../lib/placeholder-data";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    author={video.author}
                    thumbnailUrl={video.thumbnailUrl}
                    lengthSeconds={video.lengthSeconds}
                    createdAt={video.createdAt}
                    numComments={video.numComments}
                />
            ))}
        </div>
    );
}

export default VideoGrid;