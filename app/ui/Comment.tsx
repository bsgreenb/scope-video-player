import { formatDistanceToNow } from "date-fns";
import { CommentProps } from "../lib/definitions";

const Comment = ({content, author, createdAt}: Pick<CommentProps, "content" | "author" | "createdAt">) => {
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
