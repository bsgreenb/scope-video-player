import Header from "./ui/Header";
import VideoCard from "./ui/VideoCard";

export default function Home() {
  return (
    <>
    <Header isLoggedIn={false} />
    <VideoCard 
      title="Test Video Title"
      author="ben_greenberg"
      thumbnailUrl="https://placehold.co/320x180/png"
      lengthSeconds={150}
      createdAt="2024-04-22T16:37:14.320719+00:00"
      numComments={2} />
    </>
  );
}
