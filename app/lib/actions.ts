// Server actions
'use server';

import { createComment, createVideo } from "./api";
import { revalidatePath } from 'next/cache'
import { isValidMp4Url } from "./validation";

export async function submitVideo(_prevState: {error?: string}, formData: FormData): Promise<{error?: string}> {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const videoUrl = formData.get("videoUrl") as string;
    const author = 'nutty_professor';
    
    if (title.trim() == '' || description.trim() == '' || videoUrl.trim() == '') {
        return {error: "Please fill in all fields"};
    }
    if (title.length > 100) {
        return {error: "Title was too long"};
    }
    if (description.length > 1000) {
        return {error: "Description was too long"};
    }
    // Validate url and that is an mp4 extension
    if (!isValidMp4Url(videoUrl)) {
        return {error: "Invalid video URL"};
    }
    
    return createVideo(title, description, videoUrl, author)
        .then(() => {
            // TODO: make sure we're good with just this
            revalidatePath('/');
            return {};
        })
        .catch(() => {
          return {error: "There was an error submitting your video.  Please try again later."};  
        });
}

export async function submitComment(_prevState: {error?: string}, formData: FormData): Promise<{error?: string}> {
    const videoId = formData.get("videoId") as string;
    const content = formData.get("content") as string;
    const author = 'nutty_professor';
    
    if (content.trim() == '') {
        return {error: "Your comment was empty"};
    }
    if (content.length > 1000) {
        return {error: "Your comment was too long"};
    }

    return createComment(videoId, content, author)
        .then(() => {
            revalidatePath(`/videos/${videoId}`);
            return {};
        })
        .catch(() => {
          return {error: "There was an error submitting your comment.  Please try again later."};  
        });
}