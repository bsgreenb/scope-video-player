import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { VideoProps } from '../lib/definitions';

export type VideoCardProps = {video: Pick<VideoProps, "id" | "title" | "author" | "createdAt" | "numComments">};

const VideoCard = ({video: {id, title, author, createdAt, numComments}}: VideoCardProps) => {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                    <Link href={`/videos/${id}`}>
                        <Image
                            src="https://placehold.co/320x180/png"
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </Link>
                </div>
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