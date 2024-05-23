import { videos, comments } from "../../lib/placeholder-data";
import { CommentProps } from "../../ui/Comment";
import Video, { VideoProps } from "../../ui/Video";
import VideoComments from "../../ui/VideoComments";

const VideoPage = ({params}: {params: {id: string}}) => {
    // TODO: use api request instead of placeholder data here.  both for videos and comments.
    const video = videos.find(video => video.id === params.id) as VideoProps;

    return (  
        <>
            <Video {...video} />
            <hr className="mt-2 mb-4" />
            <VideoComments comments={comments} />
        </>
    );
}

export async function getStaticPaths() {
    const paths = videos.map(video => ({
      params: { id: video.id }
    }));
  
    return { paths, fallback: true };
}

export default VideoPage;