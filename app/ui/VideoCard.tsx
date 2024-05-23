import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { formatLength } from '../lib/datetime';
import Link from 'next/link';

type VideoCardProps = {
    id: string;
    title: string;
    author: string;
    thumbnailUrl: string;
    lengthSeconds: number;
    createdAt: string;
    numComments: number;
}

// TODO: make sure height changes properly

const VideoCard = ({id, title, author, thumbnailUrl, lengthSeconds, createdAt, numComments}: VideoCardProps) => {
    return (
        <div className="bg-white rounded-lg">
            <div className="relative h-48">
                <Link href={`/videos/${id}`}>
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </Link>
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {formatLength(lengthSeconds)}
                </span>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg">
                    <Link href={`/videos/${id}`}>
                        {title}
                    </Link>
                </h3>
                <div className="text-gray-600 text-sm">
                    <p className="mt-2">
                        {author} • {formatDistanceToNow(new Date(createdAt))}
                    </p>
                    <p className="mt-2">
                        <span className="inline-block mr-1">💬</span>{numComments} comments
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;