import CommentForm from "./CommentForm";
import Comment, { CommentProps } from "./Comment";

type VideoCommentsProps = {comments: CommentProps[]};

const VideoComments = ({ comments }: VideoCommentsProps) => {
    return (<>
         <div className="text-md font-semibold mb-2">Comments · 2</div>
         <CommentForm />
         {comments.map((comment) => (<Comment key={comment.id} {...comment} />))}
    </>);
};

export default VideoComments;