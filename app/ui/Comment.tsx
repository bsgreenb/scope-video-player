import { formatDistanceToNow } from "date-fns";

export type CommentProps = {
    id: string;
    content: string;
    author: string;
    createdAt: string;
}

const Comment = ({id, content, author, createdAt}: CommentProps) => {
    return (
        <div className="mb-4">
            <div className="text-sm text-gray-900 mb-1">
                <span className="font-semibold ">{author} </span>
                • {formatDistanceToNow(new Date(createdAt))} ago
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 inline-block">{content}</div>
        </div>
    );
}

export default Comment;
