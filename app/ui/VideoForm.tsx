'use client';

import { useFormState } from "react-dom";
import Button from "./Button";
import { submitVideo } from "../lib/actions";

const VideoForm = () => {
    const [state, handleSubmit] = useFormState(submitVideo, {});

    return (
        <form action={handleSubmit}>
            {state.error && <div className="text-red-600 mb-3">{state.error}</div>}
            {state.success && <div className="text-green-600 mb-3">Your video <b>{state.title}</b> was submitted successfully</div>}
            <div className="mb-3">
                <label className="text-gray-700 mb-1 block" htmlFor="videoTitle">Title</label>
                <input 
                    required
                    id="videoTitle" 
                    name="title" 
                    type="text" 
                    className="border border-gray-300 rounded p-2 w-full" 
                    placeholder="Your video title" 
                />
            </div>
            <div className="mb-1">
                <label className="text-gray-700 mb-1 block" htmlFor="videoDescription">Description</label>
                <textarea 
                    id="videoDescription" 
                    name="description" 
                    className="border border-gray-300 rounded p-2 w-full" 
                    placeholder="Description of your video" 
                    rows={3} 
                />
            </div>
            <div className="mb-3">
                <label className="text-gray-700 mb-1 block" htmlFor="videoUrl">URL (must be an MP4)</label>
                <input 
                    required
                    id="videoUrl" 
                    name="videoUrl" 
                    type="url" 
                    className="border border-gray-300 rounded p-2 w-full" 
                    placeholder="http://example.com/my_movie.mp4" 
                />
            </div>
            <div className="mb-3">
                <Button type="submit">Upload</Button>
            </div>
        </form>
    );
}

export default VideoForm;