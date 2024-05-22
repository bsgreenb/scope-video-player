import VideoCard from "./VideoCard";

const VideoGrid = () => {
    const videos = [
        {
            title: 'Test Video 1',
            author: 'ben_greenberg',
            thumbnailUrl: 'https://placehold.co/320x180/png',
            lengthSeconds: 320,
            createdAt: '2024-04-22T16:37:14.320719+00:00',
            numComments: 2
        },
        {
            title: 'Test Video 2',
            author: 'ben_greenberg',
            thumbnailUrl: 'https://placehold.co/320x180/png',
            lengthSeconds: 45,
            createdAt: '2024-04-23T16:37:14.320719+00:00',
            numComments: 0
        },
        {
            title: 'Test Video 3',
            author: 'ben_greenberg',
            thumbnailUrl: 'https://placehold.co/320x180/png',
            lengthSeconds: 220,
            createdAt: '2024-04-29T16:37:14.320719+00:00',
            numComments: 1
        },
        {
            title: 'Test Video 1',
            author: 'ben_greenberg',
            thumbnailUrl: 'https://placehold.co/320x180/png',
            lengthSeconds: 120,
            createdAt: '2024-05-01T16:37:14.320719+00:00',
            numComments: 2
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        title={video.title}
                        author={video.author}
                        thumbnailUrl={video.thumbnailUrl}
                        lengthSeconds={video.lengthSeconds}
                        createdAt={video.createdAt}
                        numComments={video.numComments}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoGrid;