import { getComments, getVideo, getVideos } from "../../lib/api";
import RelatedVideos from "../../ui/RelatedVideos";
import Video from "../../ui/Video";
import VideoComments from "../../ui/VideoComments";

export default async function VideoPage({params}: {params: {id: string}})  {
    const video = await getVideo(params.id);
    const comments = await getComments(params.id);

    // Get related videos by just picking first 3 videos with different IDs
    const videos = await getVideos();
    const relatedVideos = videos.filter(v => v.id !== params.id).slice(0, 3); 

    return (  
        <div className="flex min-h-screen space-x-6">
            <div className="w-full md:w-3/4">
                <Video {...video} />
                <hr className="mt-2 mb-4" />
                <VideoComments videoId={params.id} comments={comments} />
            </div>
            <div className="md:w-1/4 hidden md:block">
                <RelatedVideos videos={relatedVideos} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const videos = await getVideos();
    return videos.map(video => (
      { id: video.id }
    ));
}