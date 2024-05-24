import Button from "./Button";

const CommentForm = () => {
    return (
        <form>
            <div className="flex items-center mb-4">
                <input required type="text" placeholder="Add your comment..." className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-2" />
                <Button type="submit">Comment</Button>
            </div>
        </form>
    );
}

export default CommentForm;