import { getVideos } from "./lib/api";
import VideoGrid from "./ui/VideoGrid";


export default async function Home() {
  const videos = await getVideos();
  return (
    <VideoGrid videos={videos} />  
  );
}