import { videos } from "./lib/placeholder-data";
import VideoGrid, { VideoGridProps } from "./ui/VideoGrid";


export default function Home() {
  // TODO: fetch videos here.  this is server side and will just run once.

  return (
    <VideoGrid videos={videos} />  
  );
}