import { getComments, getVideo, getVideos } from "../../lib/api";
import Video from "../../ui/Video";
import VideoComments from "../../ui/VideoComments";

export default async function VideoPage({params}: {params: {id: string}})  {
    const video = await getVideo(params.id);
    const comments = await getComments(params.id);

    return (  
        <>
            <Video {...video} />
            <hr className="mt-2 mb-4" />
            <VideoComments videoId={params.id} comments={comments} />
        </>
    );
}

export async function generateStaticParams() {
    const videos = await getVideos();
    return videos.map(video => (
      { id: video.id }
    ));
}