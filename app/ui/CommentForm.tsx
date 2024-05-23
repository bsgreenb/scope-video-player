import Button from "./Button";

const CommentForm = () => {
    return (
        <div className="flex items-center mb-4">
            <input type="text" placeholder="Add your comment..." className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-2" />
            <Button>Comment</Button>
        </div>
    );
}

export default CommentForm;