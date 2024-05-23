import { videos, comments } from "../../lib/placeholder-data";
import Video from "../../ui/Video";

const VideoPage = () => {
    const video = videos[0];
    return (
        <div className="max-w-4xl mx-auto">
            <Video {...video} />
        </div>
    );
}

export default VideoPage