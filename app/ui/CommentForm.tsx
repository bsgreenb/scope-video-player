'use client';

import { useState } from "react";
import { VideoProps } from "../lib/definitions";
import Button from "./Button";

type CommentFormProps = {
    videoId: VideoProps['id'];
    onSubmit: (payload: FormData) => void;
    error?: string;
}

const CommentForm = ({videoId, onSubmit, error}: CommentFormProps) => {
    const [content, setContent] = useState('');

    const handleSubmit = (event: FormData) => {
        onSubmit(event);
        setContent(''); // Clear the input field on submit.
    };

    return (
        <form action={handleSubmit} className="mb-4">
            <div className="flex items-center">
                <input type="hidden" name="videoId" value={videoId} />
                <input
                    required
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    placeholder="Add your comment..."
                    className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-2"
                />
                <Button type="submit">Comment</Button>
            </div>
            {error && <div className="text-red-600">{error}</div>}
        </form>
    );
}

export default CommentForm;