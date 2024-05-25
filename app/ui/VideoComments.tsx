'use client';

import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { CommentProps, VideoProps } from "../lib/definitions";
import React from "react";

type VideoCommentsProps = {
    videoId: VideoProps['id'];
    comments: CommentProps[]
};

const VideoComments = ({ videoId, comments }: VideoCommentsProps) => {
    return (<>
         <div className="text-md font-semibold mb-2">Comments · {comments.length}</div>
         <CommentForm videoId={videoId} />
         {comments.map((comment) => (<Comment key={comment.id} {...comment} />))}
    </>);
};

export default VideoComments;