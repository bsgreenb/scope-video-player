import Header from "./ui/Header";
import VideoCard from "./ui/VideoCard";
import VideoGrid from "./ui/VideoGrid";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main>
        <VideoGrid />
      </main>
    </>
  );
}
