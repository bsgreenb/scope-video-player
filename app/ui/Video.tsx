
type VideoProps = {
    id: string;
    title: string;
    author: string;
    thumbnailUrl: string;
    createdAt: string;
}

const Video = ({id, title, author, thumbnailUrl, createdAt}: VideoProps) => {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                    <video controls className="rounded-lg">
                        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="py-2">
                <h3 className="font-bold text-lg">
                    {title}
                </h3>
                <div className="text-gray-600 text-sm">
                    <p className="mt-1">
                        {author} • Uploaded {createdAt}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Video;