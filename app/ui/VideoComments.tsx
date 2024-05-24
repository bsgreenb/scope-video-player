'use client';

import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { CommentProps, VideoProps } from "../lib/definitions";
import React from "react";
import { useFormState } from "react-dom";
import { submitComment } from "../lib/actions";

type VideoCommentsProps = {
    videoId: VideoProps['id'];
    comments: CommentProps[]
};

const VideoComments = ({ videoId, comments }: VideoCommentsProps) => {
    // Note: NextJS vendors React so we have to use the version with useFormState instead of useActionState https://github.com/facebook/react/issues/29017
    const [state, handleSubmit] = useFormState(submitComment, {});

    return (<>
         <div className="text-md font-semibold mb-2">Comments · {comments.length}</div>
         <CommentForm videoId={videoId} onSubmit={handleSubmit} error={state.error} />
         {comments.map((comment) => (<Comment key={comment.id} {...comment} />))}
    </>);
};

export default VideoComments;