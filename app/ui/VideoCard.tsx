import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { formatLength } from '../lib/datetime';
import Link from 'next/link';
import { getVideoThumbnailUrl } from '../lib/s3_resource';

export type VideoCardProps = {
    id: string;
    title: string;
    author: string;
    lengthSeconds: number;
    createdAt: string;
    numComments: number;
}

const VideoCard = ({id, title, author, lengthSeconds, createdAt, numComments}: VideoCardProps) => {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                    <Link href={`/videos/${id}`}>
                        <Image
                            src={getVideoThumbnailUrl(id)}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </Link>
                </div>
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
                    {formatLength(lengthSeconds)}
                </span>
            </div>
            <div className="py-2">
                <h3 className="font-bold text-lg">
                    <Link href={`/videos/${id}`}>
                        {title}
                    </Link>
                </h3>
                <div className="text-gray-600 text-sm">
                    <p className="mt-1">
                        {author} • {formatDistanceToNow(new Date(createdAt))} ago
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