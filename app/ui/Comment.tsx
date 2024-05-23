// CONTINYA: provide props and placeholder data

export type CommentProps = {
    id: string;
    content: string;
    author: string;
    createdAt: string;
}

const Comment = () => {
    return (
        <div className="mb-4">
            <div className="text-sm text-gray-900 mb-1">
                <span className="font-semibold ">even_arnold </span>
                • 2d ago
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 inline-block">Super easy to follow! Love the breakdown at the end. Thanks! Super easy to follow! Love the breakdown at the end. Thanks!</div>
        </div>
    );
}

export default Comment;
