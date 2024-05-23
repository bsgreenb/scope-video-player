import { formatDate } from "../lib/datetime";

type VideoProps = {
    id: string;
    title: string;
    author: string;
    description: string;
    createdAt: string;
}

const Video = ({id, title, author, description, createdAt}: VideoProps) => {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                    <video controls className="rounded-lg">
                        <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="py-2">
                <h2 className="font-bold text-2xl mb-1">
                    {title}
                </h2>
                <div className="text-gray-600 text-sm mb-2">
                    {author} • Uploaded {formatDate(createdAt)}
                </div>
                <div> 
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Video;