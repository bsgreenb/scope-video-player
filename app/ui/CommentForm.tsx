'use client';

import { useState } from "react";
import { VideoProps } from "../lib/definitions";
import Button from "./Button";
import { useFormState } from "react-dom";
import { submitComment } from "../lib/actions";

type CommentFormProps = {
    videoId: VideoProps['id'];
}

const CommentForm = ({videoId}: CommentFormProps) => {
    const [content, setContent] = useState('');

    // Note: NextJS vendors React so we have to use the version with useFormState instead of useActionState https://github.com/facebook/react/issues/29017
    const [{error}, handleSubmitComment] = useFormState(submitComment, {});

    const handleSubmit = (event: FormData) => {
        handleSubmitComment(event);
        setContent(''); // Clear the input field on submit.
    };

    return (
        <form action={handleSubmit} className="mb-4">
            <div className="flex items-center">
                <input type="hidden" name="videoId" value={videoId} />
                <textarea
                    required
                    maxLength={1000}
                    name="content"
                    rows={2}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Add your comment..."
                    className="flex-grow border border-gray-300 rounded-md py-2 px-4 mr-2"
                />
                <Button type="submit">Comment</Button>
            </div>
            {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
    );
}

export default CommentForm;