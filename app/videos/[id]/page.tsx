import { videos, comments } from "../../lib/placeholder-data";
import Video from "../../ui/Video";
import VideoComments from "../../ui/VideoComments";

const VideoPage = () => {
    const video = videos[0];
    return (  
        <>
            <Video {...video} />
            <hr className="mt-2 mb-4" />
            <VideoComments comments={comments} />
        </>
    );
}

export default VideoPage